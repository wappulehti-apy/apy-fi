import React, { useRef, Suspense } from 'react'

import { css } from '@emotion/react'
import { OrbitControls } from '@react-three/drei'
import Image from 'next/image'
import { Canvas, useThree, useFrame, useLoader } from 'react-three-fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

import { useHasWebGL, useWindowSize } from 'hooks/index'
import { breakpoints, mq } from 'styles/breakpoints'
import { Theme } from 'styles/theme'

const logo3d = '/logos/ajaton/3d/ajaton.obj'
const logoNormal = '/logos/ajaton/logo-ajaton.png'

const Logo = () => {
  const object = useLoader(OBJLoader, logo3d)
  const width = window.innerWidth
  const s = width < breakpoints.desktop ? 1.2 : 1.2
  return <primitive object={object} scale={[s, s, s]} />
}

const CameraControls = () => {
  const { camera, gl } = useThree()
  const ref = useRef()
  // @ts-ignore
  useFrame(() => ref.current.update())

  return (
    <OrbitControls
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

const LogoTimeless = () => {
  const hasWebGl = useHasWebGL()
  const [width, height] = useWindowSize()

  return (
    <>
      {hasWebGl ? (
        <Canvas
          style={{
            minHeight:
              width > 0 && width < breakpoints.tablet ? '300px' : '700px',
          }}
        >
          <directionalLight intensity={1} position={[0, 0, 1]} />
          <directionalLight intensity={1} position={[0, 0, -1]} />
          <directionalLight intensity={0.8} position={[1, 0, 0]} />
          <directionalLight intensity={0.8} position={[-1, 0, 0]} />
          <ambientLight intensity={0.1} />
          <CameraControls />
          <Suspense fallback={null}>
            <Logo />
          </Suspense>
        </Canvas>
      ) : (
        <div css={imageCss}>
          <Image
            src={logoNormal}
            height={125}
            width={250}
            layout="responsive"
            loading="eager"
          />
        </div>
      )}
    </>
  )
}

const imageCss = (p: Theme) => css`
  --filter-to-white: invert(100%) sepia(4%) saturate(790%) hue-rotate(280deg)
    brightness(119%) contrast(100%);

  margin: ${p.rem(100)};
  filter: var(--filter-to-white);

  ${mq('desktop')} {
    margin: ${p.rem(200)} ${p.rem(400)};
  }
`

export default LogoTimeless
