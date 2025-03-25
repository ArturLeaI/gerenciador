import React from 'react'
import {IconeCliente, DadosCliente, ClienteItem, NomeCliente, CNPJCliente} from './clientCard.styles'

export const ClientCard = ({ cliente, onClick }) => {
    return (
      <ClienteItem onClick={onClick}>
        <IconeCliente>
          {cliente.nome.substring(0, 2).toUpperCase()}
        </IconeCliente>
        <DadosCliente>
          <NomeCliente>{cliente.nome}</NomeCliente>
          <CNPJCliente>{cliente.cnpj}</CNPJCliente>
        </DadosCliente>
      </ClienteItem>
    );
  };