const theme = process.env.GATSBY_THEME;
const color2019 = '#9c1d3e';

const LogoAjaton = '/ajaton/logos/logo-ajaton-musta.png';
const favicon32x32_Ajaton = '/ajaton/favicons/favicon-32x32.png';
const favicon16x16_Ajaton = '/ajaton/favicons/favicon-16x16.png';
const favicon_Ajaton = '/ajaton/favicons/favicon.ico';
const appleTouchIconAjaton = '/ajaton/favicons/apple-touch-icon.png';
const safariPinnedTagAjaton = '/ajaton/favicons/safari-pinned-tab.svg';
const ogImageAjaton = '/ajaton/logos/og-image.jpg';

const Logo2019 = '/2019/logos/logo-2019-musta.png';
const favicon32x32_2019 = '/2019/favicons/favicon-32x32.png';
const favicon16x16_2019 = '/2019/favicons/favicon-16x16.png';
const favicon_2019 = '/2019/favicons/favicon.ico';
const appleTouchIcon2019 = '/2019/favicons/apple-touch-icon.png';
const safariPinnedTag2019 = '/2019/favicons/safari-pinned-tab.svg';
const ogImage2019 = '/2019/logos/og-image.jpg';

const manifestAjaton = '/ajaton/site.webmanifest';
const manifest2019 = '/2019/site.webmanifest';
const browserconfigAjaton = '/ajaton/browserconfig.xml';
const browserconfig2019 = '/2019/browserconfig.xml';

module.exports = {
  siteTitle: 'Äpy', // Navigation and Site Title
  siteTitleAlt: 'Wappulehti Äpy', // Alternative Site title for SEO
  siteUrl: 'https://apy.fi', // Domain of your site. No trailing slash!
  siteLanguage: 'fi', // Language Tag on <html> element
  siteLogo: theme === 'ajaton' ? LogoAjaton : Logo2019, // Used for SEO and manifest
  siteDescription: 'Äpy - Neljä kirjainta joihin voit luottaa!',
  siteFavicon16x16: theme === 'ajaton' ? favicon16x16_Ajaton : favicon16x16_2019,
  siteFavicon32x32: theme === 'ajaton' ? favicon32x32_Ajaton : favicon32x32_2019,
  siteFavicon: theme === 'ajaton' ? favicon_Ajaton : favicon_2019,
  siteAppleTouchIcon: theme === 'ajaton' ? appleTouchIconAjaton : appleTouchIcon2019,
  siteSafariPinnedTag: theme === 'ajaton' ? safariPinnedTagAjaton : safariPinnedTag2019,
  siteSafariPinnedTagColor: theme === 'ajaton' ? '#000000' : color2019,

  manifest: theme === 'ajaton' ? manifestAjaton : manifest2019,
  browserConfig: theme === 'ajaton' ? browserconfigAjaton : browserconfig2019,

  siteFBAppID: '', // Facebook App ID
  ogSiteName: 'wappulehti', // Facebook Site Name
  ogLanguage: 'fi_FI', // Facebook Language
  ogLogo: theme === 'ajaton' ? ogImageAjaton : ogImage2019,
  userTwitter: '@laulikki', // Twitter Username

  // Manifest and Progress color
  themeColor: theme === 'ajaton' ? '#000000' : color2019,
  backgroundColor: theme === 'ajaton' ? '#ffffff' : color2019
};
