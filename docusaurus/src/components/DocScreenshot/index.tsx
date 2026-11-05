import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Docs screenshots (#29): the Livo#723 store showcase captures (fictional catalog), one set per
// site locale under static/img/docs/{en,tr}/, as `<device>-<NN>-<screen>-<width>.webp`.
// Regenerate them together with the store screenshots.
type Kind = 'phone' | 'phoneLandscape' | 'tablet' | 'tv' | 'strip';

const KINDS: Record<Kind, {width: number; height: number; widths: number[]}> = {
  phone: {width: 1320, height: 2868, widths: [360, 720]},
  phoneLandscape: {width: 2868, height: 1320, widths: [960, 1600]},
  tablet: {width: 2064, height: 2752, widths: [480, 960]},
  tv: {width: 3840, height: 2160, widths: [960, 1600]},
  // The cropped Audio & Subtitles panel shared with the home page features section.
  strip: {width: 1600, height: 480, widths: [960, 1600]},
};

const SHOTS: Record<string, {base: string; kind: Kind}> = {};
const SCREENS = [
  '01-home',
  '02-live',
  '03-player',
  '04-add-source',
  '05-movie-detail',
  '06-series-detail',
  '07-movies',
  '08-settings',
  '09-premium',
];
for (const device of ['phone', 'tablet', 'tv'] as const) {
  for (const screen of SCREENS) {
    const kind: Kind = device === 'phone' && screen === '03-player' ? 'phoneLandscape' : device;
    SHOTS[`${device}-${screen}`] = {base: `/img/docs/{locale}/${device}-${screen}`, kind};
  }
}
SHOTS['tv-player-tracks'] = {base: '/img/features/{locale}/tv-player', kind: 'strip'};

export type DocScreenshotProps = {
  /** Key such as `tv-02-live` or `phone-01-home`. */
  shot: string;
  alt: string;
  caption?: string;
};

export default function DocScreenshot({shot, alt, caption}: DocScreenshotProps): JSX.Element {
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale.toLowerCase().startsWith('tr') ? 'tr' : 'en';
  const entry = SHOTS[shot];
  if (!entry) {
    throw new Error(`DocScreenshot: unknown shot "${shot}"`);
  }
  const {width, height, widths} = KINDS[entry.kind];
  const base = useBaseUrl(entry.base.replace('{locale}', locale));
  const path = (w: number) => `${base}-${w}.webp`;
  return (
    <figure className={`${styles.figure} ${styles[entry.kind]}`}>
      <img
        className={styles.image}
        src={path(widths[widths.length - 1])}
        srcSet={widths.map((w) => `${path(w)} ${w}w`).join(', ')}
        sizes={entry.kind === 'phone' ? '300px' : entry.kind === 'tablet' ? '420px' : '(max-width: 996px) 100vw, 760px'}
        width={width}
        height={height}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}

/** Puts two or three screenshots side by side on wide screens, stacked on phones. */
export function ScreenshotRow({children}: {children: React.ReactNode}): JSX.Element {
  return <div className={styles.row}>{children}</div>;
}
