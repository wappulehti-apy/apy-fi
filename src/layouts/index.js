import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import SocialIcons from '../components/SocialIcons';
import '../styles/vendor.scss';
import '../styles/global.scss';
import { PageWrapper } from '../constants/styled';

const Layout = ({ children }) => {
  const theme = process.env.GATSBY_THEME;

  return (
    <>
      <SEO />
      <ThemeProvider theme={{ mode: theme }}>
        <PageWrapper id="page__wrapper">
          <Navigation />
          {children}
          <SocialIcons />
        </PageWrapper>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
  }).isRequired,
};

export default Layout;
