import React from 'react'
import {ModalOverlay, ModalContainer, ModalHeader, CloseButton} from './modal.styles' 

function Modal({onClose, title, children}) {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal