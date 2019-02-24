import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Video from '../components/Video';
import LogoAjaton from '../components/Logo';
import Logo2019 from '../components/Logo2019';

const ContainerIndex = styled.div`
  flex: 1;
  overflow: auto;
`;

class IndexPage extends React.PureComponent {
  render() {
    const Logo =
      process.env.GATSBY_THEME === 'ajaton' ? <LogoAjaton /> : <Logo2019 />;
    return (
      <Layout {...this.props}>
        <ContainerIndex>
          {process.env.GATSBY_INDEX_VIDEO === 'true' ? <Video /> : Logo}
        </ContainerIndex>
      </Layout>
    );
  }
}

export default IndexPage;
