import React from 'react';
import styled from 'react-emotion';
import ÄpyLipsum from '../components/ÄpyLipsum';
import Layout from '../components/Layout';

const ContainerLipsum = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ÄpyLipsumPage = ({ ...props }) => (
  <Layout {...props}>
    <ContainerLipsum id="page__äpylipsum">
      <ÄpyLipsum />
    </ContainerLipsum>
  </Layout>
);

export default ÄpyLipsumPage;
