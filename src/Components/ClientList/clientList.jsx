import React from 'react';
import { ClientCard } from '../ClientCard/clientCard';
import {ClientesContainer, ListaClientes} from './clientList.styles' 

export const ClientList = ({ clientes, onSelectCliente }) => {
    return (
      <ClientesContainer>
        <ListaClientes>
          {clientes.map((cliente, index) => (
            <ClientCard
              key={index}
              cliente={cliente}
              onClick={() => onSelectCliente(cliente)}
            />
          ))}
        </ListaClientes>
      </ClientesContainer>
    );
  };