import React, { useState } from "react";
import { useSelector } from "react-redux";
import CadastroCliente from "./CadastrarCliente.jsx";
import {ClientList} from '../ClientList/clientList.jsx' 
import DetalharCliente from "./DetalharCliente.jsx";
import SearchBar from "../SearchBarContainer/SearchBarContainer.jsx";

const ListagemClientes = () => {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const clientes = useSelector((state) => state.clients.clients);
  const clientesFiltrados = clientes.filter((cliente) => {
    return (
      cliente.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
      cliente.cnpj.includes(termoPesquisa)
    );
  });

  return (
    <div className="listagem-container">
      <SearchBar
        placeholder="Digite o nome do cliente..."
        value={termoPesquisa}
        onChange={(e) => setTermoPesquisa(e.target.value)}
        buttonText="Novo Cliente"
        onButtonClick={() => setMostrarCadastro(true)}
      />

      {mostrarCadastro && (
        <CadastroCliente onClose={() => setMostrarCadastro(false)} />
      )}

      <ClientList
        clientes={clientesFiltrados}
        onSelectCliente={setClienteSelecionado}
      />

      {clienteSelecionado && (
        <DetalharCliente
          cliente={clienteSelecionado}
          onClose={() => setClienteSelecionado(null)}
        />
      )}
    </div>
  );
};

export default ListagemClientes;
