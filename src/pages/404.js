import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';

const Container404 = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LargeText = styled.div`
  font-size: 10em;
  font-family: ${p =>
    p.theme.mode === 'ajaton' ? 'Libre Baskerville' : 'Lato Black'};
  color: white;
`;

const NotFoundPage = ({ ...props }) => (
  <Layout {...props}>
    <Container404 id="page__404">
      <LargeText>404</LargeText>
    </Container404>
  </Layout>
);

export default NotFoundPage;
