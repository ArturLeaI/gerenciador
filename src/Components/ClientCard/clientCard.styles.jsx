import styled from 'styled-components';

export const ClienteItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 10px;
`;

export const IconeCliente = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${({ tipo }) => tipo === 'pedido' ? '#72adf3' : '#4CAF50'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
`;

export const DadosCliente = styled.div`
  flex: 1;
`;

export const NomeCliente = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const CNPJCliente = styled.div`
  font-size: 14px;
  color: #666;
`;

export const InfoPedidoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 15px;
`;

export const ValorTotal = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #2e7d32;
`;

export const QuantidadeItens = styled.div`
  font-size: 14px;
  color: #666;
`;