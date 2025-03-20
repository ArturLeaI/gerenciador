import React from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
  DetalhesGrid,
  DetalheLabel,
  DetalheItem,
  DetalheValor,
} from './DetalharCliente.styles';

const DetalharCliente = ({ cliente, onClose }) => {
  if (!cliente) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>Detalhes do Cliente</h2>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

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
      </ModalContainer>
    </ModalOverlay>
  );
};

export default DetalharCliente;