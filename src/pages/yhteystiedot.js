import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled, { css } from 'react-emotion';
import Layout from '../components/Layout';
import YhteystiedotForm from '../components/YhteystiedotForm';
import { media } from '../styles/main';

const YhteystiedotContainer = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 2px;
  padding: 1em;
  font-family: ${p =>
    p.theme.mode === 'ajaton' ? 'Libre Baskerville' : 'Montserrat'};

  ${media.giant(css`
    margin: 50px 300px;
  `)};

  ${media.desktop(css`
    margin: 50px 120px 50px 120px;
  `)};

  ${media.tablet(css`
    margin: 100px 90px 50px 90px;
  `)};

  ${media.phone(css`
    margin: 80px 10px 30px 10px;
    max-width: 95%;
    font-size: 0.7em;
  `)};
`;

function YhteystiedotPage({ data, ...props }) {
  const { allMarkdownRemark } = data;
  const htmlYhteystiedot = allMarkdownRemark.edges.filter(
    e => e.node.frontmatter.title === 'yhteystiedot'
  )[0].node.html;
  const markdown = allMarkdownRemark.edges.filter(e =>
    ['rähästö', 'toimitus'].includes(e.node.frontmatter.title)
  );
  return (
    <Layout {...props}>
      <YhteystiedotContainer id="page__yhteystiedot">
        <div dangerouslySetInnerHTML={{ __html: htmlYhteystiedot }} />
        <YhteystiedotForm markdown={markdown} />
      </YhteystiedotContainer>
    </Layout>
  );
}

export default YhteystiedotPage;

YhteystiedotPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string
    })
  }).isRequired
};

export const pageQuery = graphql`
  query YhteystiedotPageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { path: { eq: "/yhteystiedot" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          html
        }
      }
    }
  }
`;
