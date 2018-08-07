import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled, { css } from 'react-emotion';
import Layout from '../components/Layout';
import ÄpyGrid from '../components/ÄpyGrid';
import { media } from '../styles/main';

const ContainerApyt = styled.div`
  font-family: ${p =>
    p.theme.mode === 'ajaton' ? 'Libre Baskerville' : 'Montserrat Regular'};
  border-radius: 2px;

  ${media.giant(css`
    margin: 2% 20%;
  `)};

  ${media.overdesktop(css`
    margin: 2% 20%;
  `)};

  ${media.desktop(css`
    margin: 2% 10% 5% 10%;
  `)};

  ${media.tablet(css`
    margin: 13% 10% 5% 10%;
  `)};

  ${media.phone(css`
    margin: 25% 2% 5% 2%;
  `)};
`;

class ÄpyPage extends React.PureComponent {
  render() {
    const { data, ...props } = this.props;
    const imgData = data.allImageSharp.edges;
    const html = data.markdownRemark.html;

    return (
      <Layout {...props}>
        <ContainerApyt id="page_apyt">
          <ÄpyGrid html={html} imgData={imgData} />
        </ContainerApyt>
      </Layout>
    );
  }
}

export default ÄpyPage;

ÄpyPage.propTypes = {
  data: PropTypes.shape({
    allImageSharp: PropTypes.shape({
      edges: PropTypes.array
    })
  }).isRequired
};

export const pageQuery = graphql`
  query ApyPageQuery {
    markdownRemark(frontmatter: { path: { eq: "/apy" } }) {
      html
    }
    allImageSharp {
      edges {
        node {
          id
          ... on ImageSharp {
            sizes(maxWidth: 500) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
            original {
              src
            }
          }
        }
      }
    }
  }
`;
