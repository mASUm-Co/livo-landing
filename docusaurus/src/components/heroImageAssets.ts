export type HeroImageAsset = {
  alt: string;
  width: number;
  height: number;
  src: string;
  sources: Array<{
    src: string;
    width: number;
  }>;
};

type HeroDevice = 'tv' | 'tablet' | 'phone';
type HeroLocale = 'en' | 'tr';

// Device frames around the #723 store showcase captures (Livo-1.x UI, synthetic posters).
// Regenerate together with the store screenshots, one set per site locale.
const SIZES: Record<HeroDevice, {width: number; height: number; widths: number[]}> = {
  tv: {width: 1200, height: 776, widths: [800, 1200, 1600]},
  tablet: {width: 560, height: 732, widths: [240, 360, 560]},
  phone: {width: 420, height: 857, widths: [240, 320, 420]},
};

const ALTS: Record<HeroLocale, Record<HeroDevice, string>> = {
  en: {
    tv: 'Livo home screen on Apple TV with Live, Movies and Series',
    tablet: 'Livo home screen on iPad with Continue Watching and Recently Added',
    phone: 'Livo live TV channel list on iPhone',
  },
  tr: {
    tv: "Apple TV'de Canlı, Filmler ve Diziler ile Livo ana ekranı",
    tablet: "iPad'de Devam Ettiklerim ve Yeni Eklenenler ile Livo ana ekranı",
    phone: "iPhone'da Livo canlı TV kanal listesi",
  },
};

export function getHeroImageAssets(locale: string): Record<HeroDevice, HeroImageAsset> {
  const loc: HeroLocale = locale.toLowerCase().startsWith('tr') ? 'tr' : 'en';
  const build = (device: HeroDevice): HeroImageAsset => {
    const {width, height, widths} = SIZES[device];
    const path = (w: number) => `/img/hero/v2/${loc}/${device}-${w}.webp`;
    return {
      alt: ALTS[loc][device],
      width,
      height,
      src: path(widths[1]),
      sources: widths.map((w) => ({src: path(w), width: w})),
    };
  };
  return {tv: build('tv'), tablet: build('tablet'), phone: build('phone')};
}
