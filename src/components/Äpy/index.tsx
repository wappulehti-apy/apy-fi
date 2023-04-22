import React, { useState, useEffect } from 'react'

import styled from '@emotion/styled'

import ÄpyModal from './ÄpyModal'

import { Image } from 'styles/index'
import { Detail } from 'styles/typography'
import { ÄpyItem } from 'types/index'

interface Props {
  item: ÄpyItem
}

const ÄpyComponent: React.FC<Props> = ({ item }) => {
  const [onTouchDevice, setOnTouchdevice] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const onTouchDevice = matchMedia('(hover: none)').matches
    setOnTouchdevice(onTouchDevice)
  }, [])

  const { year, name, imgGrid } = item
  const äpyLehtiVuosi = `${year} - ${name}`
  const modalProps = {
    title: äpyLehtiVuosi,
    open: modalOpen,
    setIsOpen: setModalOpen,
  }

  return (
    <>
      <ÄpyContainer onClick={() => setModalOpen(true)}>
        {!onTouchDevice && (
          <>
            <ÄpyName color="white">{äpyLehtiVuosi}</ÄpyName>
            <ÄpyNameGradientBackground />
          </>
        )}
        <ImageContainer>
          <Image src={imgGrid} objectFit="cover" />
        </ImageContainer>
      </ÄpyContainer>
      <ÄpyModal item={item} modalProps={modalProps} />
    </>
  )
}

const ÄpyNameGradientBackground = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${(p) => p.theme.borderRadius.small};
  opacity: 0;
  transition: all 0.2s ease-out;
`

const ÄpyName = styled(Detail)`
  position: absolute;
  z-index: 3;
  top: ${(p) => p.theme.spacing.default};
  right: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  text-align: center;
  transition: all 0.2s ease-out;
`

const ÄpyContainer = styled.div`
  position: relative;
  box-shadow: ${(p) => p.theme.shadow.light};
  cursor: pointer;

  &:hover ${ÄpyName} {
    opacity: 1;
    transform: translateY(-3px);
  }

  &:hover ${ÄpyNameGradientBackground} {
    opacity: 1;
  }
`

const ImageContainer = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  overflow: hidden;
  margin: 0;
`

export default ÄpyComponent
