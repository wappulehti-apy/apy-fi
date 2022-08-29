import React from 'react'

import styled from '@emotion/styled'

import ImageCarousel from 'components/ImageCarousel'
import Modal, { ModalProps } from 'components/Modal/Modal'
import { ÄpyItem } from 'types/index'

interface Props {
  item: ÄpyItem
  modalProps: ModalProps
}

const ÄpyModal: React.FC<Props> = ({ item, modalProps }) => (
  <Modal {...modalProps}>
    <ModalContentGrid>
      <ImageCarousel>
        {item.imgCarousel.map((img, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={img} />
        ))}
      </ImageCarousel>
      <ModalDescription>{item.description}</ModalDescription>
    </ModalContentGrid>
  </Modal>
)

const ModalDescription = styled.p`
  width: 100%;
  padding: 1em 0 0 0;
  margin: 0;
  font-size: 1.2em;
  line-height: 1.5;
`

const ModalContentGrid = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-template-areas:
    'image'
    'text';

  @media (max-width: 1025px) and (min-aspect-ratio: 2/1) {
    grid-template-areas: 'image text';
  }

  & > div {
    grid-area: image;
  }

  & > p {
    grid-area: text;
  }
`

export default ÄpyModal
