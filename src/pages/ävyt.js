import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import ApyGrid from '../components/ÄpyGrid';
import Layout from '../components/layout';

const ApyPageContainer = styled.div`
  margin-top: 70px;
`;

class ApyPage extends React.PureComponent {
  render() {
    const { data, ...props } = this.props;
    const imgData = data.allImageSharp.edges;
    const html = data.markdownRemark.html;
    return (
      <Layout {...props}>
        <ApyPageContainer id="page__ävyt">
          <ApyGrid html={html} imgData={imgData} />
        </ApyPageContainer>
      </Layout>
    );
  }
}

export default ApyPage;

ApyPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query ApyPageQuery {
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
