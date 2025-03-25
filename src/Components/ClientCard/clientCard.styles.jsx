import styled from "styled-components";

export const IconeCliente = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 25%;
  background-color: ${(props) => props.cor || "#72adf3"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
  font-size: 14px;
`;

export const DadosCliente = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ClienteItem = styled.div`
  display: flex;
  flex: 0 0 calc(33.33% - 13.33px);
  max-width: calc(33.33% - 13.33px);
  box-sizing: border-box;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    background-color: #f9f9f9; /* Muda a cor de fundo ao passar o mouse */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  }
`;
export const NomeCliente = styled.span`
  font-size: 12px;
  font-weight: 100;
  color: #333;
`;
export const CNPJCliente = styled.span`
  font-size: 14px;
  color: #666;
  margin-top: 4px;
`;