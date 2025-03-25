import React from 'react'
import {ModalOverlay, ModalContainer, ModalHeader, CloseButton} from './modal.styles' 

function Modal({onClose, title, children}) {
  return (
    <ModalOverlay onClick={onClose}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              {title}
              <CloseButton onClick={onClose}>×</CloseButton>
            </ModalHeader>
            {children}
          </ModalContainer>
        </ModalOverlay>
  )
}


export default Modal