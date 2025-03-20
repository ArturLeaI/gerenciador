import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%; 
  height: 500px; 
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto; /* Adiciona scroll se o conteúdo for maior que a altura */
  box-sizing: border-box; /* Garante que o padding não aumente o tamanho total */
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`;

export const DetalheItem = styled.div`
  margin-bottom: 1rem;
`;

export const DetalheLabel = styled.span`
  display: block;
  font-weight: 500;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

export const DetalheValor = styled.span`
  display: block;
  font-size: 1rem;
  color: #333;
`;

export const ProdutoImagemModal = styled.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
  margin-bottom: 16px;
`;