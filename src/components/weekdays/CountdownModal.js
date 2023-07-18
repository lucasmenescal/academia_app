import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './CountdownModal.css';

const CountdownModal = ({ isOpen, onRequestClose }) => {
  const [remainingTime, setRemainingTime] = useState(60);

  useEffect(() => {
    if (remainingTime <= 0) {
      setRemainingTime(60);
      onRequestClose();
    }

    const timer = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [remainingTime, onRequestClose]);

  const handleCloseModal = () => {
    setRemainingTime(60);
    onRequestClose();
  };

  return (
    <Modal className="modal" isOpen={isOpen} onRequestClose={handleCloseModal} ariaHideApp={false}>
      <h2>{remainingTime}</h2>
      <button onClick={handleCloseModal}>Fechar</button>
    </Modal>
  );
};

export default CountdownModal;
