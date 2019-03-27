import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Video from '../components/Video';
import LogoAjaton from '../components/Logo';
import Logo2019 from '../components/Logo2019';
import Diilikone from '../components/Diilikone';

const ContainerIndex = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`;

class IndexPage extends React.PureComponent {
  render() {
    const Logo =
      process.env.GATSBY_THEME === 'ajaton' ? <LogoAjaton /> : <Logo2019 />;

    const mainElement = () => {
      switch (process.env.GATSBY_INDEX_ELEMENT) {
        case 'logo':
          return Logo;
        case 'video':
          return <Video />;
        case 'diilikone':
          return <Diilikone />;
        default:
          return Logo;
      }
    };

    return (
      <Layout {...this.props}>
        <ContainerIndex>{mainElement()}</ContainerIndex>
      </Layout>
    );
  }
}

export default IndexPage;
