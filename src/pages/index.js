import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'react-emotion';
import Layout from '../components/Layout';
import ApyGrid from '../components/ÄpyGrid';
import Video from '../components/Video';
import LogoAjaton from '../components/Logo';
import Logo2019 from '../components/Logo2019';

const IndexContainer = styled.div``;

class IndexPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.indexRef = React.createRef();
    this.state = { offsetY: 0 };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ offsetY: window.pageYOffset });
  };

  render() {
    const { data, ...props } = this.props;
    const { offsetY } = this.state;
    const imgData = data.allImageSharp.edges;
    const html = data.markdownRemark.html;

    // the indexRef is a reference to this components DOM element.
    // THe reference is used to add a class to the parent of thi component.
    // The class in turn controls a fading background css transition.
    const indexRef = this.indexRef.current;
    if (indexRef) {
      if (offsetY > 100) {
        indexRef.parentNode.classList.add('animate-bg');
      } else {
        indexRef.parentNode.classList.remove('animate-bg');
      }
    }
    const Logo =
      process.env.GATSBY_THEME === 'ajaton' ? <LogoAjaton /> : <Logo2019 />;
    return (
      <Layout {...props}>
        <IndexContainer id="page__index" innerRef={this.indexRef}>
          {process.env.GATSBY_INDEX_VIDEO === 'true' ? <Video /> : Logo}
          <ApyGrid html={html} imgData={imgData} />
        </IndexContainer>
      </Layout>
    );
  }
}

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allImageSharp: PropTypes.shape({
      edges: PropTypes.array
    })
  }).isRequired
};

export const pageQuery = graphql`
  query IndexPageQuery {
    markdownRemark(frontmatter: { path: { eq: "/apy" } }) {
      html
    }
    allImageSharp {
      edges {
        node {
          id
          ... on ImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
            original {
              src
            }
          }
        }
      }
    }
  }
`;
