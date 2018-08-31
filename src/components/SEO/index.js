/* eslint-disable */
import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../config/website';

const SEO = () => {
  const title = config.siteTitle;
  const description = config.siteDescription;
  const siteURL = config.siteUrl;
  const image = siteURL + config.siteLogo;
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: siteURL,
      name: title,
      alternateName: config.siteTitleAlt
    }
  ];
  return (
    <Helmet>
      {/* General tags */}
      <html lang={config.siteLanguage} />
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* https://realfavicongenerator.net/ favicons, icons and PWA manifest */}
      <link rel="apple-touch-icon" sizes="180x180" href={config.siteAppleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={config.siteFavicon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={config.siteFavicon16x16} />
      <link rel="shortcut icon" href={config.siteFavicon} />
      <link rel="manifest" href={config.manifest} />
      <link rel="mask-icon" href={config.siteSafariPinnedTag} color={config.siteSafariPinnedTagColor} />
      <meta name="msapplication-TileColor" content={config.backgroundColor}/>
      <meta name="msapplication-config" content={config.browserconfig} />
      <meta name="theme-color" content={config.themeColor} />

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

      {/* Facebook OpenGraph tags */}
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content={config.ogSiteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={config.ogImage} />
      <meta property="og:image:height" content="373" />
      <meta property="og:image:width" content="712" />
      <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ''} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userTwitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
