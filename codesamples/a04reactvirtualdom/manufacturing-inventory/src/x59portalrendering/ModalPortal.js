import React from 'react';
import ReactDOM from 'react-dom';
import './ModalPortal.css'; // Create styles for the modal

const ModalPortal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body // Render the modal to the body
  );
};

export default ModalPortal;
