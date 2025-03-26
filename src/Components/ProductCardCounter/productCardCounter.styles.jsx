// productCard.styles.js
import styled from "styled-components";

export const ProdutoItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

export const ProdutoImagem = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
`;

export const NomeProduto = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

export const ProdutoPreco = styled.span`
  font-weight: bold;
  color: #2e7d32;
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const CounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #e0e0e0;
  }
`;

export const CounterInput = styled.input`
  width: 50px;
  height: 30px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
`;