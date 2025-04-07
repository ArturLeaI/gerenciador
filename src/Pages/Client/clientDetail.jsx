import React from "react";
import Modal from "../../Components/Modal/modal";
import Detail from "../../Components/ClientDetail/clientDetail";

const camposCliente = [
  { key: "nome", label: "Nome" },
  { key: "cnpj", label: "CNPJ" },
  { key: "telefone", label: "Telefone" },
  { key: "cep", label: "Cep" },
  { key: "estado", label: "Estado" },
  { key: "cidade", label: "Cidade" },
  { key: "endereco", label: "Endereco" },
  { key: "bairro", label: "Bairro" },
  { key: "numero", label: "Numero" },
];

const ClientDetail = ({ cliente, onClose }) => {
  return (
    <Modal title="Detalhes do Cliente" onClose={onClose}>
        <Detail dados={cliente} campos={camposCliente} /> 
    </Modal>
  );
};

export default ClientDetail;
