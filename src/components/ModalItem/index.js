import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import getScrollbarWidth from 'get-scrollbar-width';

class ModalItem extends React.PureComponent {
  state = { open: false };

  showModal = () => this.setState({ open: true });
  hideModal = () => this.setState({ open: false });

  disableScrolling(open) {
    const scrollbarWidth = getScrollbarWidth();
    if (open) {
      // Scrollbar is approximately 15px wide.
      // It gets removed with overflow: hidden so we
      // add margin to body to prevent it from jumping
      // on modal open.
      document.body.style.marginRight = scrollbarWidth + 'px';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.marginRight = '0px';
      document.body.style.overflow = null;
      document.documentElement.style.overflow = null;
    }
  }

  render() {
    const { open } = this.state;
    const { children, content } = this.props;
    const modalProps = {
      open,
      hideModal: this.hideModal,
      ...this.props,
    };

    if (typeof document !== 'undefined') {
      this.disableScrolling(open);
    }

    return (
      <div onClick={this.showModal} role="button" tabIndex={0}>
        {children}
        {open && <Modal {...modalProps}>{content}</Modal>}
      </div>
    );
  }
}

export default ModalItem;

ModalItem.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  content: PropTypes.arrayOf(PropTypes.element).isRequired,
};
