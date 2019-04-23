import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import SEO from './SEO';
import Navigation from './Navigation';
import SocialIcons from './SocialIcons';
import äpyKuosi from '../../assets/kuosi-2019-pieni-mustavalko.svg';
import '../styles/vendor.scss';
import '../styles/global.scss';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background-color: ${p =>
    p.theme.mode === 'ajaton' ? 'rgb(22, 23, 25)' : '#ae3753'};

  background-image: ${p =>
    p.theme.mode === 'ajaton' ? 'none' : `url(${äpyKuosi})`};
  background-size: 50%;
`;

class Layout extends React.PureComponent {
  state = { theme: process.env.GATSBY_THEME };

  render() {
    const { children, location } = this.props;
    const { theme } = this.state;
    const pathname = location.pathname;
    // Specifies either a yearly or a classical theme.
    // Used to conditionally render fonts/components etc.
    // Theming provided by emotion-theming.
    return (
      <>
        <SEO />
        <ThemeProvider theme={{ mode: theme }}>
          <PageWrapper id="page__wrapper">
            <Navigation pathname={pathname} />
            {children}
            {pathname != '/' ? <SocialIcons /> : undefined}
          </PageWrapper>
        </ThemeProvider>
      </>
    );
  }
}

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
