/** App Store id of Livo Player (iOS, iPadOS, tvOS). */
export const APP_STORE_APP_ID = '6755977918';

/** Google Play package name of Livo Player. */
export const PLAY_PACKAGE = 'com.livo.android';

/**
 * App Store Connect provider token (Analytics > Acquisition > Campaigns > "Generate a campaign link").
 * Apple attributes `ct` campaigns only when `pt` is present; leave empty until it is filled in.
 */
export const APP_STORE_PROVIDER_TOKEN = '';

/**
 * Campaign name for the page at `pathname`, e.g. `lp-home`, `lp-apple-tv-iptv-player`.
 * The locale prefix (`/tr`) is dropped so both languages report under the same campaign.
 */
export function campaignForPath(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'tr') parts.shift();
  const slug = parts.join('-').replace(/[^a-z0-9-]/gi, '').toLowerCase();
  return `lp-${slug || 'home'}`.slice(0, 40);
}

/** Storefront-neutral App Store link carrying the campaign (and provider token when set). */
export function appStoreUrl(campaign: string): string {
  const params = new URLSearchParams();
  if (APP_STORE_PROVIDER_TOKEN) params.set('pt', APP_STORE_PROVIDER_TOKEN);
  params.set('ct', campaign);
  params.set('mt', '8');
  return `https://apps.apple.com/app/id${APP_STORE_APP_ID}?${params.toString()}`;
}

/** Google Play link whose install referrer carries utm source, medium and campaign. */
export function playStoreUrl(campaign: string): string {
  const referrer = `utm_source=livoplayer&utm_medium=web&utm_campaign=${campaign}`;
  return `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}&referrer=${encodeURIComponent(referrer)}`;
}

/** schema.org SoftwareApplication data for search engines; no ratings until there are enough of them. */
export function softwareApplicationJsonLd(description: string, inLanguage: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Livo Player',
    description,
    inLanguage,
    url: 'https://www.livoplayer.com/',
    image: 'https://www.livoplayer.com/img/livo-logo.png',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'iOS, iPadOS, tvOS, Android, Android TV',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    sameAs: [
      `https://apps.apple.com/app/id${APP_STORE_APP_ID}`,
      `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}`,
    ],
  };
}
