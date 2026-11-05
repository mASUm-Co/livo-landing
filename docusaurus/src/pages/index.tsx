import {lazy, Suspense} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeroVisual from '@site/src/components/HeroVisual';
import StoreBadges from '@site/src/components/StoreBadges';
import {softwareApplicationJsonLd} from '@site/src/components/storeLinks';
import styles from './index.module.css';

const SyncVisual = lazy(() => import('@site/src/components/SyncVisual'));

type SupportedLocale = 'en' | 'tr';

type FeatureIcon = 'guide' | 'tracks' | 'speed' | 'pip' | 'quality' | 'resume' | 'appletv' | 'engines';

type Feature = {
  icon: FeatureIcon;
  title: string;
  body: string;
  platforms: string;
};

type Spotlight = {
  image: 'tv-guide' | 'tv-player' | 'iphone-home';
  alt: string;
  kicker: string;
  title: string;
  body: string;
};

type HomepageContent = {
  title: string;
  description: string;
  keywords: string;
  heroTitle: string;
  heroSubtitle: string;
  storeTrustLine: string;
  devicesTitle: string;
  devicesBody: string;
  continueTitle: string;
  continueBody: string;
  playlistsTitle: string;
  playlistsBody: string;
  cleanTitle: string;
  cleanBody: string;
  tvTitle: string;
  tvBody: string;
  featuresKicker: string;
  featuresTitle: string;
  featuresBody: string;
  features: Feature[];
  spotlights: Spotlight[];
};

const CONTENT: Record<SupportedLocale, HomepageContent> = {
  en: {
    title: 'Modern IPTV Player for Apple TV, Android TV & Mobile',
    description:
      'Livo Player is a clean and fast IPTV player supporting M3U playlists, live TV streaming and continue watching across devices. Available for Apple TV and Android TV.',
    keywords:
      'iptv player, m3u player, apple tv iptv app, android tv iptv player, streaming player, cross device streaming, cloud sync video player',
    heroTitle: 'Modern IPTV Player for Live TV and Playlists',
    heroSubtitle:
      'Livo Player is a modern IPTV player designed for live TV, movies and series playlists. Add M3U sources instantly and continue watching across Apple TV, Android TV, iPhone and tablets.',
    storeTrustLine: 'Works on iPhone, iPad, Apple TV, Android phones and Android TV.',
    devicesTitle: 'Watch IPTV on Every Device',
    devicesBody:
      'Livo Player brings the same polished IPTV player experience to the screens you use most. Open live TV channels on your couch, browse series on a tablet in the kitchen, or check movies on your phone while traveling. The interface stays clean and familiar across Apple TV IPTV setups, Android TV IPTV boxes, touch devices and larger tablet layouts, so moving between devices feels natural instead of fragmented.',
    continueTitle: 'Continue Watching Across Phone, Tablet and TV',
    continueBody:
      'Continue watching is where Livo stands out as a modern IPTV player. Start a live TV stream on the living room screen, pause it, then pick up your M3U playlists on mobile without hunting for the same title again. This matters for Apple TV IPTV users who switch to iPhone on the go, and for Android TV IPTV households that also watch on tablets. Your viewing flow stays connected instead of restarting from scratch.',
    playlistsTitle: 'Add M3U Playlists in Seconds',
    playlistsBody:
      'A good IPTV player should make playlist setup feel immediate, not technical. Livo is designed so you can add M3U playlists quickly, organize sources cleanly, and move from import to playback with very little friction. Whether you manage one main list or several separate M3U playlists for live TV, movies and series, the app keeps the flow simple on Apple TV IPTV screens, Android TV IPTV remotes and handheld devices alike.',
    cleanTitle: 'Clean and Fast IPTV Experience',
    cleanBody:
      'Livo focuses on speed, clarity and comfort. The IPTV player layout keeps channels, movies and series easy to browse without turning the screen into a cluttered control panel. Fast navigation matters when switching among M3U playlists, especially on TV platforms where remote input can slow everything down. That is why Apple TV IPTV and Android TV IPTV use cases benefit from a clean visual hierarchy, quicker decisions and less time spent digging through menus before playback starts.',
    tvTitle: 'IPTV Player for Apple TV and Android TV',
    tvBody:
      'If you are looking specifically for an IPTV player built around television viewing, Livo is optimized for that environment while still staying flexible on mobile. Apple TV IPTV viewers get a familiar big-screen interface with fast navigation and easy return to recent content. Android TV IPTV users get the same focus on responsiveness and clean browsing. Combined with M3U playlists support and cross-device continuity, the app fits both dedicated TV setups and households that watch everywhere.',
    featuresKicker: 'Features',
    featuresTitle: 'Everything you need to watch, in one player',
    featuresBody:
      'Livo plays your own M3U and Xtream Codes playlists. These are the features that make everyday watching easier.',
    features: [
      {
        icon: 'guide',
        title: 'TV guide',
        body: "See what's on now and next on every live channel, with a programme timeline in the player. The guide comes from your playlist or from a guide address you enter.",
        platforms: 'iPhone · iPad · Apple TV',
      },
      {
        icon: 'tracks',
        title: 'Audio and subtitle languages',
        body: 'Pick your default audio and subtitle languages once in Settings and they are applied when playback starts. Switch tracks any time and style subtitles your way.',
        platforms: 'iPhone · iPad · Apple TV · Android',
      },
      {
        icon: 'speed',
        title: 'Playback speed',
        body: 'Watch movies and series anywhere from 0.5× to 2×.',
        platforms: 'iPhone · iPad · Apple TV',
      },
      {
        icon: 'pip',
        title: 'Picture in Picture',
        body: 'Keep watching in a floating window while you use other apps.',
        platforms: 'iPhone · iPad',
      },
      {
        icon: 'quality',
        title: 'Smart live quality',
        body: 'HD, FHD and 4K versions of a channel are grouped into one card, and Automatic Quality switches between them when your connection changes.',
        platforms: 'iPhone · iPad · Apple TV · Android',
      },
      {
        icon: 'resume',
        title: 'Continue Watching with iCloud',
        body: 'Pick up where you left off on any of your Apple devices. Series open at your next episode, with an up-next countdown.',
        platforms: 'iPhone · iPad · Apple TV',
      },
      {
        icon: 'appletv',
        title: 'Made for the Apple TV remote',
        body: 'Focus stays where you left it, Menu always steps back, sources pair with a QR code and Top Shelf shows what to watch next.',
        platforms: 'Apple TV',
      },
      {
        icon: 'engines',
        title: 'Two playback engines',
        body: "Apple's own player and VLC, so more stream formats play out of the box.",
        platforms: 'iPhone · iPad · Apple TV',
      },
    ],
    spotlights: [
      {
        image: 'tv-guide',
        alt: 'Livo on Apple TV: live channels with the programme preview panel',
        kicker: 'TV guide',
        title: "What's on now, and next",
        body: 'Browse live channels with the running programme and what comes next. On Apple TV a preview panel shows the schedule for the focused channel.',
      },
      {
        image: 'tv-player',
        alt: 'Livo player on Apple TV',
        kicker: 'Player',
        title: 'Your languages, your speed',
        body: 'Default audio and subtitle languages apply as soon as playback starts. Change tracks, speed and quality from the player, on iPhone, iPad and Apple TV.',
      },
      {
        image: 'iphone-home',
        alt: 'Livo on iPhone: Home with Continue Watching',
        kicker: 'Continue Watching',
        title: 'Your shows are waiting',
        body: 'Continue Watching and new arrivals sit right on Home, synced across your Apple devices with iCloud.',
      },
    ],
  },
  tr: {
    title: 'Apple TV, Android TV ve Mobil için Modern IPTV Player',
    description:
      "Livo Player; M3U oynatma listelerini, canlı TV yayını ve cihazlar arası izlemeye devam deneyimiyle sunan temiz ve hızlı bir IPTV player'dır. Apple TV ve Android TV için kullanılabilir.",
    keywords:
      'iptv player, m3u player, apple tv iptv uygulamasi, android tv iptv player, streaming player, cihazlar arasi yayin, bulut senkronlu video player',
    heroTitle: 'Canlı TV ve Oynatma Listeleri için Modern IPTV Player',
    heroSubtitle:
      "Livo Player; canlı TV, film ve dizi listeleri için tasarlanmış modern bir IPTV player'dır. M3U kaynaklarını anında ekleyin ve Apple TV, Android TV, iPhone ve tabletlerde izlemeye devam edin.",
    storeTrustLine: "iPhone, iPad, Apple TV, Android telefonlar ve Android TV'de çalışır.",
    devicesTitle: 'Her Cihazda IPTV İzleyin',
    devicesBody:
      "Livo Player, kullandığınız ekranların tamamına aynı düzenli IPTV player deneyimini taşır. Oturma odasında canlı TV kanallarını açabilir, mutfakta tablette dizilere göz atabilir veya yoldayken telefondan filmlere bakabilirsiniz. Arayüz; Apple TV IPTV kurulumlarında, Android TV IPTV kutularında, dokunmatik cihazlarda ve büyük tablet düzenlerinde temiz ve tanıdık kalır.",
    continueTitle: 'Telefon, Tablet ve TV Arasında İzlemeye Devam Edin',
    continueBody:
      "İzlemeye devam özelliği, Livo'yu modern bir IPTV player olarak öne çıkarır. Oturma odasındaki ekranda canlı TV yayını başlatın, duraklatın, sonra aynı içeriği mobilde M3U listeleriniz içinde yeniden aramadan sürdürün. Bu özellikle Apple TV IPTV kullanıcılarının iPhone'a, Android TV IPTV kullanan evlerin de tablete geçtiği durumlarda önemlidir.",
    playlistsTitle: 'M3U Oynatma Listelerini Saniyeler İçinde Ekleyin',
    playlistsBody:
      "İyi bir IPTV player, liste kurulumunu teknik değil anlık hissettirmelidir. Livo; M3U listelerini hızlıca eklemeniz, kaynakları düzenli tutmanız ve içe aktarımdan oynatmaya çok az sürtünmeyle geçmeniz için tasarlandı. Tek bir ana liste ya da canlı TV, film ve diziler için birden fazla ayrı M3U listesi yönetseniz de akış sade kalır.",
    cleanTitle: 'Temiz ve Hızlı IPTV Deneyimi',
    cleanBody:
      "Livo hız, netlik ve konfora odaklanır. IPTV player düzeni; kanalları, filmleri ve dizileri ekranı dağınık bir kontrol paneline çevirmeden taramanızı sağlar. Özellikle TV platformlarında uzaktan kumanda ile gezinirken bu hız fark yaratır. Bu yüzden Apple TV IPTV ve Android TV IPTV kullanımında temiz görsel hiyerarşi ve daha hızlı kararlar önemlidir.",
    tvTitle: 'Apple TV ve Android TV için IPTV Player',
    tvBody:
      "Eğer özellikle televizyon izlemeye odaklanan bir IPTV player arıyorsanız, Livo bu ortam için optimize edilmiştir ama mobilde de esnek kalır. Apple TV IPTV kullanıcıları büyük ekranda hızlı gezinme ve son içeriklere kolay dönüş elde eder. Android TV IPTV kullanıcıları da aynı temiz ve tepkisel yapıyı görür. M3U desteği ve cihazlar arası süreklilik ile uygulama hem TV kurulumlarına hem de her yerde izleyen evlere uyum sağlar.",
    featuresKicker: 'Özellikler',
    featuresTitle: 'İzlemek için gereken her şey tek oynatıcıda',
    featuresBody:
      'Livo kendi M3U ve Xtream Codes listelerinizi oynatır. Günlük izlemeyi kolaylaştıran özellikler:',
    features: [
      {
        icon: 'guide',
        title: 'TV rehberi',
        body: 'Her canlı kanalda şu an ve sırada ne olduğunu, oynatıcıda program zaman çizelgesiyle görün. Rehber listenizden ya da girdiğiniz rehber adresinden gelir.',
        platforms: 'iPhone · iPad · Apple TV',
      },
      {
        icon: 'tracks',
        title: 'Ses ve altyazı dilleri',
        body: "Varsayılan ses ve altyazı dillerinizi Ayarlar'da bir kez seçin, oynatma başlarken uygulansın. Parçaları istediğiniz an değiştirin, altyazı görünümünü ayarlayın.",
        platforms: 'iPhone · iPad · Apple TV · Android',
      },
      {
        icon: 'speed',
        title: 'Oynatma hızı',
        body: 'Film ve dizileri 0.5× ile 2× arasında istediğiniz hızda izleyin.',
        platforms: 'iPhone · iPad · Apple TV',
      },
      {
        icon: 'pip',
        title: 'Resim içinde Resim',
        body: 'Başka uygulamaları kullanırken izlemeye küçük pencerede devam edin.',
        platforms: 'iPhone · iPad',
      },
      {
        icon: 'quality',
        title: 'Akıllı canlı kalite',
        body: 'Bir kanalın HD, FHD ve 4K sürümleri tek kartta toplanır; Otomatik Kalite bağlantınız değiştikçe aralarında geçiş yapar.',
        platforms: 'iPhone · iPad · Apple TV · Android',
      },
      {
        icon: 'resume',
        title: 'iCloud ile İzlemeye Devam Et',
        body: 'Apple cihazlarınızın hepsinde kaldığınız yerden devam edin. Diziler sıradaki bölümde açılır, sonraki bölüm geri sayımıyla.',
        platforms: 'iPhone · iPad · Apple TV',
      },
      {
        icon: 'appletv',
        title: 'Apple TV kumandası için tasarlandı',
        body: 'Odak bıraktığınız yerde kalır, Menu her zaman bir adım geri gider, kaynaklar QR kodla eşleşir, Top Shelf sıradakini gösterir.',
        platforms: 'Apple TV',
      },
      {
        icon: 'engines',
        title: 'İki oynatma motoru',
        body: 'Apple oynatıcısı ve VLC birlikte; daha fazla yayın biçimi doğrudan oynar.',
        platforms: 'iPhone · iPad · Apple TV',
      },
    ],
    spotlights: [
      {
        image: 'tv-guide',
        alt: "Apple TV'de Livo: program önizleme paneliyle canlı kanallar",
        kicker: 'TV rehberi',
        title: 'Şimdi ne var, sonra ne var',
        body: "Canlı kanallarda o an yayındaki programı ve sıradakini görün. Apple TV'de önizleme paneli, odaklandığınız kanalın akışını gösterir.",
      },
      {
        image: 'tv-player',
        alt: "Apple TV'de Livo oynatıcısı",
        kicker: 'Oynatıcı',
        title: 'Senin dilin, senin hızın',
        body: "Varsayılan ses ve altyazı dilleri oynatma başlar başlamaz uygulanır. Parçayı, hızı ve kaliteyi oynatıcıdan değiştirin; iPhone, iPad ve Apple TV'de.",
      },
      {
        image: 'iphone-home',
        alt: "iPhone'da Livo: İzlemeye Devam Et ile ana sayfa",
        kicker: 'İzlemeye Devam Et',
        title: 'Dizilerin seni bekliyor',
        body: 'İzlemeye Devam Et ve yeni eklenenler ana sayfada; Apple cihazlarınız arasında iCloud ile senkron.',
      },
    ],
  },
};

const ICON_PATHS: Record<FeatureIcon, string> = {
  guide: 'M4 5h16v14H4z M4 9h16 M9 9v10 M12 13h5 M12 16h3',
  tracks: 'M4 6h16v12H4z M7 14h4 M13 14h4 M7 11h10',
  speed: 'M12 20a8 8 0 1 1 8-8 M12 12l4-4 M12 4v2',
  pip: 'M3 5h18v14H3z M12 11h7v6h-7z',
  quality: 'M4 6h16v12H4z M8 15V9 M8 12h3 M11 9v6 M14 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2z',
  resume: 'M4 12a8 8 0 1 0 2.3-5.6 M4 4v4h4 M11 9l4 3-4 3z',
  appletv: 'M3 6h18v11H3z M8 21h8 M12 17v4',
  engines: 'M6 4l6 16 6-16 M8 9h8',
};

function FeatureGlyph({icon}: {icon: FeatureIcon}): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICON_PATHS[icon]} />
    </svg>
  );
}

function normalizeLocale(locale: string): SupportedLocale {
  return locale === 'tr' ? 'tr' : 'en';
}

function SyncVisualFallback(): JSX.Element {
  return <div className={styles.syncVisualFallback} aria-hidden="true" />;
}

export default function Home(): JSX.Element {
  const {i18n} = useDocusaurusContext();
  const locale = normalizeLocale(i18n.currentLocale);
  const content = CONTENT[locale];

  return (
    <Layout title={content.title} description={content.description}>
      <Head>
        <meta name="keywords" content={content.keywords} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.description} />
        <meta name="twitter:image" content="https://www.livoplayer.com/img/livo-logo.png" />
        <meta name="twitter:site" content="@LivoPlayer" />
        <meta name="twitter:creator" content="@LivoPlayer" />
        <script type="application/ld+json">
          {JSON.stringify(softwareApplicationJsonLd(content.description, locale))}
        </script>
      </Head>
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <h1 className={styles.heroTitle}>{content.heroTitle}</h1>
              <p className={styles.heroSubtitle}>{content.heroSubtitle}</p>
              <StoreBadges className={styles.storeBadges} />
              <p className={styles.storeTrustLine}>{content.storeTrustLine}</p>
            </div>
            <div className={styles.heroShowcase}>
              <HeroVisual />
            </div>
          </div>
        </section>

        <section className={styles.featuresGridSection} id="features">
          <div className="container">
            <div className={styles.sectionIntro}>
              <p className={styles.featuresKicker}>{content.featuresKicker}</p>
              <h2>{content.featuresTitle}</h2>
              <p>{content.featuresBody}</p>
            </div>
            <div className={styles.spotlights}>
              {content.spotlights.map((spot) => {
                const portrait = spot.image === 'iphone-home';
                const widths = portrait ? [360, 720] : [960, 1600];
                const base = `/img/features/${locale}/${spot.image}`;
                return (
                  <figure key={spot.image} className={styles.spotlight}>
                    <div className={portrait ? styles.spotlightMediaPortrait : styles.spotlightMedia}>
                      <img
                        src={`${base}-${widths[1]}.webp`}
                        srcSet={widths.map((w) => `${base}-${w}.webp ${w}w`).join(', ')}
                        sizes={portrait ? '(max-width: 600px) 60vw, 240px' : '(max-width: 900px) 100vw, 640px'}
                        alt={spot.alt}
                        loading="lazy"
                        decoding="async"
                        width={portrait ? 720 : 1600}
                        height={portrait ? 1564 : 900}
                      />
                    </div>
                    <figcaption className={styles.spotlightCopy}>
                      <p className={styles.featuresKicker}>{spot.kicker}</p>
                      <h3 className={styles.spotlightTitle}>{spot.title}</h3>
                      <p className={styles.spotlightBody}>{spot.body}</p>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
            <ul className={styles.featuresGrid}>
              {content.features.map((feature) => (
                <li key={feature.icon} className={styles.featureCard}>
                  <span className={styles.featureIcon}>
                    <FeatureGlyph icon={feature.icon} />
                  </span>
                  <h3 className={styles.featureCardTitle}>{feature.title}</h3>
                  <p className={styles.featureCardBody}>{feature.body}</p>
                  <p className={styles.featurePlatforms}>{feature.platforms}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <h2>{content.devicesTitle}</h2>
              <p>{content.devicesBody}</p>
              <p className={styles.featureCtaText}>
                {locale === 'tr' ? (
                  <>
                    <Link to="/docs/setup">Kurulum rehberi</Link> ile başlayın ve IPTV player'ın
                    günlük kullanımınıza nasıl uyduğunu görün.
                  </>
                ) : (
                  <>
                    Start with the <Link to="/docs/setup">setup guide</Link> to install the app and
                    learn how the IPTV player fits into your daily viewing routine.
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        <section className={styles.ecosystemSection}>
          <div className={`container ${styles.ecosystemGrid}`}>
            <div className={styles.ecosystemCopy}>
              <h2 className={styles.ecosystemTitle}>{content.continueTitle}</h2>
              <p className={styles.ecosystemBody}>{content.continueBody}</p>
              <p className={styles.featureCtaText}>
                {locale === 'tr' ? (
                  <>
                    Senkron sorunları için <Link to="/docs/troubleshooting">sorun giderme</Link>{' '}
                    sayfasını ziyaret edin.
                  </>
                ) : (
                  <>
                    Need help keeping progress in sync? Visit{' '}
                    <Link to="/docs/troubleshooting">troubleshooting</Link> for common playback and
                    device handoff issues.
                  </>
                )}
              </p>
            </div>
            <div className={styles.deviceVisualWrap}>
              <Suspense fallback={<SyncVisualFallback />}>
                <SyncVisual />
              </Suspense>
            </div>
          </div>
        </section>

        <section className={styles.syncSection}>
          <div className={`container ${styles.syncGrid}`}>
            <div className={styles.syncCopy}>
              <h2 className={styles.syncTitle}>{content.playlistsTitle}</h2>
              <p className={styles.syncBody}>{content.playlistsBody}</p>
              <p className={styles.featureCtaText}>
                {locale === 'tr' ? (
                  <>
                    <Link to="/docs/playlists">Oynatma listesi rehberi</Link> ile M3U kurulumu,
                    kaynak ipuçları ve sonraki adımları görün.
                  </>
                ) : (
                  <>
                    Follow the <Link to="/docs/playlists">playlist guide</Link> for M3U setup, source
                    tips and the next steps after import.
                  </>
                )}
              </p>
            </div>
            <div className={styles.syncVisualWrap}>
              <Suspense fallback={<SyncVisualFallback />}>
                <SyncVisual />
              </Suspense>
            </div>
          </div>
        </section>

        <section className={styles.subscriptionSection}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <h2>{content.cleanTitle}</h2>
              <p className={styles.subscriptionIntroBody}>{content.cleanBody}</p>
              <p className={styles.featureCtaText}>
                {locale === 'tr' ? (
                  <>
                    <Link to="/docs/setup">Kurulum</Link>, <Link to="/docs/playlists">oynatma listeleri</Link>{' '}
                    , <Link to="/iptv-player-comparison">kıyaslama sayfası</Link> ve{' '}
                    <Link to="/docs/troubleshooting">sorun giderme</Link> sayfalarını inceleyin.
                  </>
                ) : (
                  <>
                    Explore <Link to="/docs/setup">setup</Link>, <Link to="/docs/playlists">playlists</Link>,{' '}
                    <Link to="/iptv-player-comparison">comparison</Link> and{' '}
                    <Link to="/docs/troubleshooting">troubleshooting</Link> to get the most from the
                    experience.
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <h2>{content.tvTitle}</h2>
              <p>{content.tvBody}</p>
              <StoreBadges className={styles.featureStoreLinks} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
