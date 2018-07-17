import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import Navigation from './Navigation';
import Footer from './Footer';
import PageTransition from './PageTransition';
import favicon16 from '../../assets/favicons/favicon16x16.png';
import favicon32 from '../../assets/favicons/favicon32x32.png';
import '../styles/vendor.scss';

class Layout extends React.PureComponent {
  render() {
    const { children, location } = this.props;
    const pathname = location.pathname;
    return (
      <StaticQuery
        query={graphql`
          query IndexQuery {
            site {
              siteMetadata {
                title
                description
                url
                keywords
              }
            }
          }
        `}
        render={data => (
          <Fragment>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: data.site.siteMetadata.description
                },
                { name: 'keywords', content: data.site.siteMetadata.keywords },
                { property: 'og:url', content: data.site.siteMetadata.url },
                { property: 'og:title', content: data.site.siteMetadata.title },
                {
                  property: 'og:description',
                  content: data.site.siteMetadata.description
                }
              ]}
              link={[
                {
                  rel: 'icon',
                  type: 'image/png',
                  sizes: '16x16',
                  href: favicon16
                },
                {
                  rel: 'icon',
                  type: 'image/png',
                  sizes: '32x32',
                  href: favicon32
                }
              ]}
            />
            <PageTransition>
              <Navigation pathname={pathname} />
              {children}
              <Footer />
            </PageTransition>
          </Fragment>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string
  }).isRequired
};

export default Layout;
