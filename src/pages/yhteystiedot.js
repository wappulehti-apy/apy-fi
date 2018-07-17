import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import YhteystiedotForm from '../components/YhteystiedotForm';

const YhteystiedotContainer = styled.div`
  background-color: white;
  border-radius: 2px;
  padding: 1em;
  margin: 200px;
  height: 100%;
`;

function YhteystiedotPage({ data, ...props }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout {...props}>
      <YhteystiedotContainer id="page__yhteystiedot">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <YhteystiedotForm />
      </YhteystiedotContainer>
    </Layout>
  );
}

export default YhteystiedotPage;

YhteystiedotPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query YhteystiedotPageQuery {
    markdownRemark(frontmatter: { path: { eq: "/yhteystiedot" } }) {
      html
    }
  }
`;
