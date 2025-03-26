import React from 'react';
import { ClientCard } from '../ClientCard/clientCard';
import {ClientesContainer, ListaClientes} from './clientList.styles' 

export const ClientList = ({ clientes, onSelectCliente, mostrarPedidos = false }) => {
    return (
      <ClientesContainer>
        <ListaClientes>
          {clientes.map((item, index) => (
            <ClientCard
            key={index}
            cliente={mostrarPedidos ? item.cliente : item}
            pedido={mostrarPedidos ? item : null}
            quantidadeItens={mostrarPedidos ? item.quantidadeTotal : null}
            valorTotal={mostrarPedidos ? item.totalFormatado : null}
            onClick={() => onSelectCliente(item)}
            />
          ))}
        </ListaClientes>
      </ClientesContainer>
    );
  };