import React from 'react';
import PropTypes from 'prop-types';
import { ToggleModal } from './index.css';

const ModalToggle = ({ hideModal }) => <ToggleModal onClick={hideModal} />;

export default ModalToggle;

ModalToggle.propTypes = {
  hideModal: PropTypes.func.isRequired,
};
