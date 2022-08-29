import React, { useRef, Suspense, useMemo } from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

import { useHasWebGL, useWindowSize } from 'hooks/index'
import { breakpoints, mq } from 'styles/breakpoints'

const logo3d = '/logos/ajaton/3d/ajaton.obj'
const logoNormal = '/logos/2023/logo-2023-stroke.svg'

const Logo = () => {
  const object = useLoader(OBJLoader, logo3d)
  const s = 1.2
  return <primitive object={object} scale={[s, s, s]} />
}

const CameraControls = () => {
  const { camera, gl } = useThree()
  const ref = useRef()
  // @ts-ignore
  useFrame(() => ref.current.update())

  return (
    <OrbitControls
      // @ts-ignore
      ref={ref}
      args={[camera, gl.domElement]}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      enableZoom={false}
      rotateSpeed={0.7}
      enableDamping={true}
      dampingFactor={0.05}
    />
  )
}

const Logo2023 = () => {
  const hasWebGl = useHasWebGL()
  const [width, _] = useWindowSize()
  const canvasHeight = useMemo(
    () => (width > 0 && width < breakpoints.tablet ? '250px' : '400px'),
    [width]
  )

  return (
    <>
      <ImageContainer>
        <img css={imageCss} src={logoNormal} />
      </ImageContainer>
    </>
  )
}

const ImageContainer = styled.div`
  text-align: center;
  align-items: center;
  padding: ${(p) => p.theme.rem(100)} 0;
  margin: 0 auto;
`

const imageCss = css`
  max-width: 250px;

  ${mq('desktop')} {
    max-width: 350px;
  }
`

export default Logo2023
