import React, { useRef, Suspense } from 'react'

import { css } from '@emotion/react'
import { OrbitControls } from '@react-three/drei'
import Image from 'next/image'
import { Canvas, useThree, useFrame, useLoader } from 'react-three-fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

import { useHasWebGL, useWindowSize } from 'hooks/index'
import { breakpoints, mq } from 'styles/breakpoints'
import { Theme } from 'styles/theme'

const logo3d = '/logos/2021/3d/2021-2.obj'
const logoNormal = '/logos/2021/logo-2021-valko.png'

const Logo = () => {
  const object = useLoader(OBJLoader, logo3d)
  const width = window.innerWidth
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

const Logo2021 = () => {
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
            height={225}
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
  margin: ${p.rem(100)};

  ${mq('desktop')} {
    margin: ${p.rem(200)} ${p.rem(400)};
  }
`

export default Logo2021
