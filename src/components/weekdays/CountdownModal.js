import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './CountdownModal.css';

const CountdownModal = ({ isOpen, onRequestClose }) => {
  const [remainingTime, setRemainingTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      if (remainingTime <= 0) {
        setRemainingTime(60);
        setIsRunning(false);
      }

      const timer = setInterval(() => {
        setRemainingTime((prevTime) => Math.max(prevTime - 1, 0));
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isRunning, remainingTime]);

  const handleCloseModal = () => {
    setRemainingTime(60);
    setIsRunning(false);
    onRequestClose();
  };

  const handlePlay = () => {
    setIsRunning(true);
  };

  return (
    <Modal className="modal" isOpen={isOpen} onRequestClose={handleCloseModal} ariaHideApp={false}>
      <h2>{remainingTime}</h2>
      <button onClick={handlePlay}>Descansar</button>
      <button onClick={handleCloseModal}>Fechar</button>
    </Modal>
  );
};

export default CountdownModal;
