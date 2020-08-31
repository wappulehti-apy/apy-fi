const theme = process.env.GATSBY_THEME;
const color = '#9c1d3e';

const Logo = `/${theme}/logos/logo-${theme}.png`;
const favicon32x32 = `/${theme}/favicons/favicon-32x32.png`;
const favicon16x16 = `/${theme}/favicons/favicon-16x16.png`;
const favicon = `/${theme}/favicons/favicon.ico`;
const appleTouchIcon = `/${theme}/favicons/apple-touch-icon.png`;
const safariPinnedTab = `/${theme}/favicons/safari-pinned-tab.svg`;
const ogImage = `/${theme}/logos/og-image.jpg`;

const manifest = `/${theme}/site.webmanifest`;
const browserconfig = `/${theme}/browserconfig.xml`;

module.exports = {
  siteTitle: 'Äpy', // Navigation and Site Title
  siteTitleAlt: 'Wappulehti Äpy', // Alternative Site title for SEO
  siteUrl: 'https://apy.fi', // Domain of your site. No trailing slash!
  siteLanguage: 'fi', // Language Tag on <html> element
  siteLogo: Logo, // Used for SEO and manifest
  siteDescription: 'Äpy - Neljä kirjainta joihin voit luottaa!',
  siteFavicon16x16: favicon16x16,
  siteFavicon32x32: favicon32x32,
  siteFavicon: favicon,
  siteAppleTouchIcon: appleTouchIcon,
  siteSafariPinnedTab: safariPinnedTab,
  siteSafariPinnedTabColor: color,

  manifest: manifest,
  browserConfig: browserconfig,

  siteFBAppID: '', // Facebook App ID
  ogSiteName: 'wappulehti', // Facebook Site Name
  ogLanguage: 'fi_FI', // Facebook Language
  ogLogo: ogImage,
  userTwitter: '@laulikki', // Twitter Username

  // Manifest and Progress color
  themeColor: color,
  backgroundColor: '#ffffff',
};
