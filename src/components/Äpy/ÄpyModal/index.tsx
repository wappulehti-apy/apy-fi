import React from 'react'

import styled from '@emotion/styled'

import ImageCarousel from 'components/ImageCarousel'
import Modal, { ModalProps } from 'components/Modal'
import { ÄpyItem } from 'types/index.d.ts'

interface Props {
  item: ÄpyItem
  modalProps: ModalProps
}

const ÄpyModal: React.FC<Props> = ({ item, modalProps }) => (
  <Modal {...modalProps}>
    <ModalContentGrid>
      <ImageCarousel>
        {item.imgCarousel.map((img, i) => (
          <div key={i}>
            <img src={img} />
          </div>
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

  @media (min-aspect-ratio: 2/1) {
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
