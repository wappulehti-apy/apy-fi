import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Äpy from '../Äpy';
import ÄpyData from '../../../assets/ävyt.json';
import { media } from '../../styles/main';

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  padding-top: 20px;

  ${media.giant(css`
    margin: 0 25% auto 25%;
    grid-template-columns: repeat(4, 1fr);
  `)};

  ${media.overdesktop(css`
    margin: 0 20% auto 20%;
    grid-template-columns: repeat(4, 1fr);
  `)};

  ${media.desktop(css`
    margin: 0 15% auto 15%;
    grid-template-columns: repeat(3, 1fr);
  `)};

  ${media.tablet(css`
    margin: 0 10% auto 10%;
    grid-template-columns: repeat(3, 1fr);
  `)};

  ${media.phone(css`
    margin: 0 2% auto 2%;
    grid-template-columns: repeat(2, 1fr);
  `)};

  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

class ÄpyGrid extends React.Component {
  constructor(props) {
    super(props);
    const { imgGrid, imgCarousel } = this.props;
    const äpys = ÄpyData.map(äpy => (
      <Äpy
        imgGrid={imgGrid.filter(x => {
          const last = x.node.childImageSharp.sizes.src.split('/').pop();
          if (last.startsWith(`${äpy.vuosi}`)) {
            return x;
          }
        })}
        imgCarousel={imgCarousel.filter(x => {
          const last = x.node.childImageSharp.sizes.src.split('/').pop();
          if (last.startsWith(`${äpy.vuosi}`)) {
            return x;
          }
        })}
        äpy={äpy}
        key={äpy.vuosi}
      />
    ));
    this.state = { äpys };
  }

  render() {
    const { äpys } = this.state;
    return <Grid id="äpy__grid">{äpys}</Grid>;
  }
}

export default ÄpyGrid;

ÄpyGrid.propTypes = {
  imgGrid: PropTypes.arrayOf(PropTypes.object).isRequired,
  imgCarousel: PropTypes.arrayOf(PropTypes.object).isRequired,
  html: PropTypes.string.isRequired,
};
