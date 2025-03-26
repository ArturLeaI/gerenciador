import React from 'react';
import { 
  IconeCliente,
  DadosCliente,
  ClienteItem,
  NomeCliente,
  CNPJCliente,
  InfoPedidoContainer,
  ValorTotal,
  QuantidadeItens
} from './clientCard.styles';

export const ClientCard = ({ 
  cliente, 
  pedido,
  onClick,
  tipo
}) => {
  const nome = cliente?.nome || pedido?.cliente?.nome || 'Cliente não informado';
  const cnpj = cliente?.cnpj || pedido?.cliente?.cnpj || '--';
  
  // Calcula o total de itens
  const totalItens = pedido?.produtos?.reduce((total, produto) => 
    total + (produto.quantidade || 0), 0) || 0;
  
  // Calcula o valor total corretamente (usando subtotal se existir, senão calcula)
  const calcularValorTotal = () => {
    if (pedido?.total) {
      return pedido.total;
    }
    if (pedido?.subtotal) {
      return pedido.subtotal;
    }
    // Calcula manualmente se não tiver total/subtotal
    return pedido?.produtos?.reduce((total, produto) => 
      total + (produto.preco * produto.quantidade), 0) || 0;
  };
  
  const valorTotal = calcularValorTotal();
  const valorFormatado = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;

  return (
    <ClienteItem onClick={onClick}>
      <IconeCliente tipo={tipo}>
        {nome.substring(0, 2).toUpperCase()}
      </IconeCliente>
      
      <DadosCliente>
        <NomeCliente>{nome}</NomeCliente>
        <CNPJCliente>{cnpj}</CNPJCliente>
      </DadosCliente>
      
      {pedido && (
        <InfoPedidoContainer>
          <QuantidadeItens>
            {totalItens} {totalItens === 1 ? 'item' : 'itens'}
          </QuantidadeItens>
          <ValorTotal>{valorFormatado}</ValorTotal>
        </InfoPedidoContainer>
      )}
    </ClienteItem>
  );
};