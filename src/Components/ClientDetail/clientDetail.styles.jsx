import styled from "styled-components";

export const DetalhesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
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