import React, { useEffect } from 'react';
import Modal from 'react-modal';
import './CountdownModal.css';

const CountdownModal = ({ isOpen, onRequestClose, countdown }) => {
  useEffect(() => {
    if (countdown === 0) {
      onRequestClose();
    }
  }, [countdown, onRequestClose]);

  return (
    <Modal className="modal" isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <h2>{countdown}</h2>
      <button onClick={onRequestClose}>Fechar</button>
    </Modal>
  );
};

export default CountdownModal;
