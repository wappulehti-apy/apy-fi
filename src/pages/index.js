import React from 'react';
import { graphql } from 'gatsby';
import styled from 'react-emotion';
import Logo from '../components/Logo3D';
import ApyGrid from '../components/ÄpyGrid';
import Layout from '../components/layout';

const IndexContainer = styled.div`
`;

class IndexPage extends React.PureComponent {
  render() {
    const { data, ...props } = this.props;
    const imgData = data.allImageSharp.edges;
    const html = data.markdownRemark.html;
    return (
      <Layout {...props}>
        <IndexContainer id="page__index">
          <Logo />
          <ApyGrid html={html} imgData={imgData} />
        </IndexContainer>
      </Layout>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    markdownRemark(frontmatter: { path: { eq: "/apy" } }) {
      html
    }
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            sizes(maxWidth: 1000) {
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
