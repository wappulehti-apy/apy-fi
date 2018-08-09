import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled, { css } from 'react-emotion';
import Layout from '../components/Layout';
import { media } from '../styles/main';

const ContainerRähästö = styled.div`
  background-color: white;
  border-radius: 2px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
  font-family: ${p =>
    p.theme.mode === 'ajaton' ? 'Libre Baskerville' : 'Montserrat Regular'};

  ${media.giant(css`
    margin: auto 20% auto 20%;
    padding: 2em 5em;
  `)};

  ${media.overdesktop(css`
    margin: auto 20% auto 20%;
    padding: 3em;
  `)};

  ${media.desktop(css`
    margin: auto 15% auto 15%;
    padding: 3em;
  `)};

  ${media.tablet(css`
    margin: auto 10% auto 10%;
    padding: 2em;
  `)};

  ${media.phone(css`
    margin: auto 2% auto 2%;
    font-size: 0.7em;
    padding: 1em;
  `)};
`;

function RähästöPage({ data, ...props }) {
  const { markdownRemark } = data;
  const htmlRahasto = markdownRemark.html;

  return (
    <Layout {...props}>
      <ContainerRähästö id="page__ävystykset">
        <div dangerouslySetInnerHTML={{ __html: htmlRahasto }} />
      </ContainerRähästö>
    </Layout>
  );
}

export default RähästöPage;

RähästöPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string
    })
  }).isRequired
};

export const pageQuery = graphql`
  query RahastoPageQuery {
    markdownRemark(frontmatter: { path: { eq: "/ävystykset" } }) {
      html
    }
  }
`;
