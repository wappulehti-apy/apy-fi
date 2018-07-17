import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import Apy from '../Äpy';
import ApyData from '../../../assets/ävyt.json';
import { media } from '../../styles/main';

const GridContainer = styled.div`
  margin: 0% 10%;
  border-radius: 2px;
  padding: 1em;

  ${media.giant(css`
    margin: 0% 20%;
  `)};

  ${media.overdesktop(css`
    margin: 0% 20%;
  `)};

  ${media.desktop(css`
    margin: 0% 10%;
  `)};

  ${media.tablet(css`
    margin: 0% 5%;
  `)};

  ${media.tablet(css`
    margin: 0% 3%;
  `)};
`;

const InformationContainer = styled.div`
  background-color: white;
  border-radius: 2px;
  padding: 1em;
`;

const ApyGrid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  width: 100%;
  padding-top: 20px;

  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
    font-size: 20px;
  }

  ${media.giant(css`
    grid-template-columns: repeat(4, 1fr);
    font-size: 20px;
  `)};

  ${media.desktop(css`
    grid-template-columns: repeat(3, 1fr);
  `)};

  ${media.tablet(css`
    grid-template-columns: repeat3, 1fr);
  `)};

  ${media.phone(css`
    grid-template-columns: repeat(2, 1fr);
  `)};
`;

class ApyGridComponent extends React.Component {
  constructor(props) {
    super(props);
    const { imgData, html } = this.props;
    const apys = ApyData.map(apy => (
      <Apy
        imgSizes={
          imgData.filter(x =>
            x.node.original.src.startsWith(`/static/${apy.vuosi}`)
          )[0].node.sizes
        }
        apy={apy}
        key={apy.vuosi}
      />
    ));
    this.state = { apys, html };
  }


  render() {
    const { apys, html } = this.state;
    return (
      <Fragment>
        <GridContainer>
          <InformationContainer
            id="äpy__info"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <ApyGrid className="äpy__grid">{apys}</ApyGrid>
        </GridContainer>
      </Fragment>
    );
  }
}

export default ApyGridComponent;

ApyGridComponent.propTypes = {};
