import styled from "styled-components";
import { FiSearch } from "react-icons/fi"; // Importação do ícone

export const ClientesContainer = styled.div`
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
`;

export const ListaClientes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
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

export const SearchButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  justify-content: space-between;
  margin-top: 15px;
  width: 98%;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  margin-left: px;
  align-items: center;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 6px 10px;
  width: 40%; 
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus-within {
    border-color: #3145fe;
    box-shadow: 0 0 0 2px rgba(114, 173, 243, 0.2);
  }
`;

export const SearchIcon = styled(FiSearch)`
  color: #666;
  margin-right: 8px;
  font-size: 16px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  flex: 1;
  background: transparent;
  padding: 4px;

  &::placeholder {
    color: #999;
  }
`;

export const NovoClienteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #3145fe;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background: #5a8fd3;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;