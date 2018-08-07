import React from 'react';
import styled from 'react-emotion';
import Layout from '../components/Layout';
import Video from '../components/Video';
import LogoAjaton from '../components/Logo';
import Logo2019 from '../components/Logo2019';

const ContainerIndex = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 80vh;
`;

class IndexPage extends React.PureComponent {
  render() {
    const Logo =
      process.env.GATSBY_THEME === 'ajaton' ? <LogoAjaton /> : <Logo2019 />;
    return (
      <Layout>
        <ContainerIndex id="page__index" innerRef={this.indexRef}>
          {process.env.GATSBY_INDEX_VIDEO === 'true' ? <Video /> : Logo}
        </ContainerIndex>
      </Layout>
    );
  }
}

export default IndexPage;
