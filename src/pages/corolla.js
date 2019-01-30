import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import äCorolla from '../components/äCorolla';

const ContainerCorolla = styled.div`
  flex: 1;
  overflow: auto;
`;

class IndexPage extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <ContainerCorolla id="page__äcorolla">
          <äCorolla />
        </ContainerCorolla>
      </Layout>
    );
  }
}

export default IndexPage;
