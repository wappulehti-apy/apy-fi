import React, { useRef, useEffect, useState, PropsWithChildren } from 'react'

import { createPortal } from 'react-dom'

interface Props {
  selector: string
}

const ClientOnlyPortal: React.FC<PropsWithChildren<Props>> = ({ children, selector }) => {
  const ref = useRef<HTMLElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref!.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted && ref.current ? createPortal(children, ref.current) : null
}

export default ClientOnlyPortal
