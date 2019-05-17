import React from 'react';
import styled from '@emotion/styled';

const Container404 = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LargeText = styled.div`
  font-size: 10em;
  color: white;
`;

const NotFoundPage = () => (
  <Container404>
    <LargeText>404</LargeText>
  </Container404>
);

export default NotFoundPage;
