import React, { useEffect, useLayoutEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ModalContainer,
  ModalMain,
  ModalHeader,
  ModalBody,
  ModalBackground,
  ModalToggle,
} from './index.css';

function useLockBodyScroll() {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // Prevent scrolling on mount
    document.documentElement.style.overflow = 'hidden';

    // Re-enable scrolling when component unmounts
    return () => {
      document.documentElement.style.overflow = originalStyle;
    };
  }, []);
}

const Modal = ({ children, title, open, hideModal }) => {
  useLockBodyScroll();
  const modalRef = useRef(null);

  const handleUserKeyPress = useCallback(
    e => {
      if (e.key === 'Escape') {
        open && hideModal();
      }
    },
    [hideModal, open]
  );

  const handleUserMouseClick = useCallback(
    e => {
      const clientX = e.clientX;
      const clientY = e.clientY;
      const bRect = modalRef.current.firstChild.getBoundingClientRect();
      const x = clientX > bRect.right || clientX < bRect.left;
      const y = clientY < bRect.top || clientY > bRect.bottom;

      if (x || y) {
        hideModal();
      }
    },
    [hideModal]
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
      <ModalContainer ref={modalRef} open={open}>
        <ModalMain open={open}>
          <ModalHeader>
            <ModalToggle onClick={hideModal} />
            {title}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalMain>
      </ModalContainer>
      <ModalBackground open={open} />
    </>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
