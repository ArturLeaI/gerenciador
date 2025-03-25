// pages/DetalharCliente/DetalharCliente.jsx
import React from 'react';
import  Modal  from '../Modal/modal';
import { ClientDetail } from '../ClientDetail/clientDetail';

const DetalharCliente = ({ cliente, onClose }) => {
  return (
    <Modal title="Detalhes do Cliente" onClose={onClose}>
      <ClientDetail cliente={cliente} />
    </Modal>
  );
};

export default DetalharCliente;