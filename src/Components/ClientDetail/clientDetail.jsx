// components/ClientDetail/ClientDetail.jsx
import React from 'react';
import {
  DetalhesGrid,
  DetalheItem,
  DetalheLabel,
  DetalheValor
} from './clientDetail.styles';

export const ClientDetail = ({ cliente }) => {
  if (!cliente) return null;

  return (
    <DetalhesGrid>
      <DetalheItem>
        <DetalheLabel>Nome:</DetalheLabel>
        <DetalheValor>{cliente.nome}</DetalheValor>
      </DetalheItem>

      <DetalheItem>
        <DetalheLabel>CNPJ:</DetalheLabel>
        <DetalheValor>{cliente.cnpj}</DetalheValor>
      </DetalheItem>

      <DetalheItem>
        <DetalheLabel>Telefone:</DetalheLabel>
        <DetalheValor>{cliente.telefone}</DetalheValor>
      </DetalheItem>

      <DetalheItem>
        <DetalheLabel>CEP:</DetalheLabel>
        <DetalheValor>{cliente.cep}</DetalheValor>
      </DetalheItem>

      <DetalheItem>
        <DetalheLabel>Endereço:</DetalheLabel>
        <DetalheValor>
          {cliente.endereco}, {cliente.numero}
        </DetalheValor>
      </DetalheItem>

      <DetalheItem>
        <DetalheLabel>Bairro:</DetalheLabel>
        <DetalheValor>{cliente.bairro}</DetalheValor>
      </DetalheItem>

      <DetalheItem>
        <DetalheLabel>Cidade/UF:</DetalheLabel>
        <DetalheValor>
          {cliente.cidade} - {cliente.estado}
        </DetalheValor>
      </DetalheItem>
    </DetalhesGrid>
  );
};