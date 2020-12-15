import { useState, useEffect, useLayoutEffect } from 'react'

export function useWindowSize() {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

export function useHasWebGL() {
  const [hasWebGl, setHasWebGl] = useState(true)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const hasWebGL = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      )
      hasWebGL ? setHasWebGl(true) : setHasWebGl(false)
    } catch (e) {
      setHasWebGl(false)
    }
  }, [])

  return hasWebGl
}
