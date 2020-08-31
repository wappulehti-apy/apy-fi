import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ModalContainer,
  ModalMain,
  ModalHeader,
  ModalBody,
  ModalBackground,
  ModalToggle,
} from './index.css';

const Modal = ({ children, title, open, setIsOpen }) => {
  // useLockBodyScroll(open);
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  const hideModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 200);
  }, [setIsOpen, setIsClosing]);

  const handleUserKeyPress = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        open && hideModal();
      }
    },
    [hideModal, open]
  );

  const handleUserMouseClick = useCallback(
    (e) => {
      const clientX = e.clientX;
      const clientY = e.clientY;
      const bRect = modalRef.current.firstChild.getBoundingClientRect();
      const x = clientX > bRect.right || clientX < bRect.left;
      const y = clientY < bRect.top || clientY > bRect.bottom;

      if ((x || y) && open) {
        hideModal();
      }
    },
    [hideModal, open]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleUserKeyPress);
    document.addEventListener('mousedown', handleUserMouseClick);

    return () => {
      document.removeEventListener('keydown', handleUserKeyPress);
      document.removeEventListener('mousedown', handleUserMouseClick);
    };
  }, [handleUserKeyPress, handleUserMouseClick]);

  return (
    <>
      <ModalContainer ref={modalRef} open={open} isClosing={isClosing}>
        <ModalMain>
          <ModalHeader>
            <ModalToggle onClick={hideModal} />
            {title}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalMain>
      </ModalContainer>
      <ModalBackground open={open} isClosing={isClosing} />
    </>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
