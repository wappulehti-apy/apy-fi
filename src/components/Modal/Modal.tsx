import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from 'react'

import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import ClientOnlyPortal from 'components/Modal/ClientOnlyPortal'
import { mq } from 'styles/breakpoints'
import { Subtitle } from 'styles/typography'

export interface ModalProps {
  title: string
  open: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  children,
  title,
  open,
  setIsOpen,
}) => {
  // useLockBodyScroll(open);
  const modalRef = useRef<HTMLDivElement>(null)
  const [isClosing, setIsClosing] = useState(false)

  const hideModal = useCallback(() => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      setIsOpen(false)
    }, 200)
  }, [setIsOpen, setIsClosing])

  const handleUserKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        open && hideModal()
      }
    },
    [hideModal, open]
  )

  const handleUserMouseClick = useCallback(
    (e: MouseEvent) => {
      const clientX = e.clientX
      const clientY = e.clientY
      const htmlNode = modalRef?.current

      if (htmlNode) {
        const bRect = (
          htmlNode.firstChild as HTMLDivElement
        )?.getBoundingClientRect()
        const x = clientX > bRect.right || clientX < bRect.left
        const y = clientY < bRect.top || clientY > bRect.bottom

        if ((x || y) && open) {
          hideModal()
        }
      }
    },
    [hideModal, open]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleUserKeyPress)
    document.addEventListener('mousedown', handleUserMouseClick)

    return () => {
      document.removeEventListener('keydown', handleUserKeyPress)
      document.removeEventListener('mousedown', handleUserMouseClick)
    }
  }, [handleUserKeyPress, handleUserMouseClick])

  return (
    <>
      {open && (
        <ClientOnlyPortal selector="#modal">
          <ModalContainer ref={modalRef} open={open} isClosing={isClosing}>
            <ModalMain>
              <ModalHeader weight={800}>
                <ModalToggle onClick={hideModal} />
                {title}
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
            </ModalMain>
          </ModalContainer>
          <ModalBackground open={open} isClosing={isClosing} />
        </ClientOnlyPortal>
      )}
    </>
  )
}

const showContainer = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const hideContainer = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
`

const showBackground = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const hideBackground = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

interface StyledModalProps {
  open: boolean
  isClosing: boolean
}

const ModalBackground = styled.div<StyledModalProps>`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: ${({ open, isClosing }) =>
    isClosing ? 'block' : open ? 'block' : 'none'};
  width: 100%;
  height: 100%;
  animation: ${({ open, isClosing }) =>
      isClosing ? hideBackground : open ? showBackground : hideBackground}
    0.2s ease-out;
  background-color: rgba(0, 0, 0, 0.7);
`

const ModalContainer = styled.div<StyledModalProps>`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  display: ${({ open, isClosing }) =>
    isClosing ? 'block' : open ? 'block' : 'none'};
  width: 100%;
  height: 100%;
  animation: ${({ open, isClosing }) =>
      isClosing ? hideContainer : open ? showContainer : hideContainer}
    0.2s cubic-bezier(0.2, 0.87, 0.76, 0.98);
`

const ModalMain = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  width: 95vw;
  max-height: 95vh;
  flex-direction: column;
  margin: 0 auto;
  background: white;
  border-radius: ${(p) => p.theme.borderRadius.small};
  overflow-y: scroll;
  scrollbar-width: none;
  transform: translate(-50%, -50%);

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* Chrome/Safari/Webkit */
  }

  ${mq('desktop')} {
    width: 65vw;
  }

  ${mq('overdesktop')} {
    width: 40vw;
  }
`

const ModalHeader = styled(Subtitle)`
  padding: ${(p) => p.theme.spacing.default};
  margin: 0;

  ${mq('tablet')} {
    padding: ${(p) => p.theme.spacing.medium};
    font-size: ${(p) => p.theme.rem(30)};
    text-align: center;
  }
`

const ModalBody = styled.div`
  padding: ${(p) => p.theme.spacing.default};
  padding-top: 0;

  font-size: ${(p) => p.theme.rem(14)};

  ${mq('tablet')} {
    padding: ${(p) => p.theme.spacing.large};
    padding-top: 0;
    font-size: ${(p) => p.theme.rem(15)};
  }
`

const ModalToggle = styled.div`
  position: absolute;
  top: ${(p) => p.theme.rem(20)};
  right: ${(p) => p.theme.rem(10)};
  width: ${(p) => p.theme.rem(20)};
  height: ${(p) => p.theme.rem(20)};

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: ${(p) => p.theme.rem(20)};
    height: 3px;
    margin-top: -1.5px;
    margin-left: -15px;
    background-color: black;
    border-radius: 3px;
    content: '';
    transform: rotate(-45deg);
    transition: all 0.18s ease-out;

    ${mq('tablet')} {
      width: ${(p) => p.theme.rem(30)};
    }
  }

  &::after {
    transform: rotate(-135deg);
  }

  &:hover {
    &::before,
    &::after {
      transform: rotate(0deg);
    }
  }

  ${mq('tablet')} {
    top: ${(p) => p.theme.rem(30)};
    right: ${(p) => p.theme.rem(30)};
  }
`

export default Modal
