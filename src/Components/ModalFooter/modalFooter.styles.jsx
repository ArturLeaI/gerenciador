import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

export const Subtotal = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin: 0 0 0.5rem 0;
  text-align: center;
`;
// No arquivo ModalFooter.styles.js
export const ErrorContainer = styled.div`
  max-width: 250px;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: #fff0f0;
  border: 1px solid #ffcccc;
  border-radius: 4px;
`;

export const ErrorText = styled.p`
  color: #d32f2f;
  font-size: 0.875rem;
  margin: 0;
  white-space: pre-line; // Para manter as quebras de linha
`;