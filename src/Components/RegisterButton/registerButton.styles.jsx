import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

export const PlusButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px; /* Espaço entre ícone e texto */
  background: #3145fe;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  white-space: nowrap; /* Impede quebra de linha do texto */

  &:hover {
    background: #5a8fd3;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const PlusIcon = styled(FiPlus)`
  color: white;
  font-size: 16px;
  /* Remova margin-right (já controlado pelo gap do PlusButton) */
`;