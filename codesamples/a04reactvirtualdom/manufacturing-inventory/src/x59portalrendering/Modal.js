import React, { useState } from 'react';
import ModalPortal from './ModalPortal';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <ModalPortal onClose={closeModal}>
          <h2>Modal Title</h2>
          <p>This is a simple modal using React Portals!</p>
        </ModalPortal>
      )}
    </>
  );
};

export default Modal;
