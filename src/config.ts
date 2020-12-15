const theme = process.env.THEME

const logo = `/logos/${theme}/logo-${theme}-valko.png`
const favicon32x32 = `/${theme}/favicon-32x32.png`
const favicon16x16 = `/${theme}/favicon-16x16.png`
const favicon = `/${theme}/favicon.ico`
const appleTouchIcon = `/${theme}/apple-touch-icon.png`
const safariPinnedTab = `/${theme}/safari-pinned-tab.svg`
const ogImage = `/${theme}/og-image.jpg`

const manifest = `/${theme}/site.webmanifest`
const browserconfig = `/${theme}/browserconfig.xml`

export default {
  siteTitle: 'Äpy',
  siteTitleAlt: 'Wappulehti Äpy',
  siteUrl: 'https://apy.fi',
  siteLanguage: 'fi',
  siteLogo: logo,
  siteDescription: 'Äpy - Neljä kirjainta joihin voit luottaa!',
  siteFavicon16x16: favicon16x16,
  siteFavicon32x32: favicon32x32,
  siteFavicon: favicon,
  siteAppleTouchIcon: appleTouchIcon,
  siteSafariPinnedTab: safariPinnedTab,
  siteSafariPinnedTabColor: '#00a6a3',

  manifest: manifest,
  browserconfig: browserconfig,

  siteFBAppID: '',
  ogSiteName: 'wappulehti',
  ogLanguage: 'fi_FI',
  ogLogo: ogImage,
  userTwitter: '@laulikki',

  themeColor: '#ffffff',
  backgroundColor: '#ffc40d',
}
