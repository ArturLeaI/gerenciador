import React from 'react';
import styled from 'styled-components';

// Estilos do ModalFooter
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const SubtotalText = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin: 0 0 0.5rem 0;
  text-align: center;
`;

const SaveButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ModalFooter = ({ subtotal, errorMessage, onSave }) => {
  return (
    <FooterContainer>
      <SubtotalText>Subtotal: R$ {subtotal.toFixed(2)}</SubtotalText>
      <div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <SaveButton onClick={onSave}>Salvar Pedido</SaveButton>
      </div>
    </FooterContainer>
  );
};

export default ModalFooter;