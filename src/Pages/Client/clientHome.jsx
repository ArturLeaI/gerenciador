import React, { useState } from "react";
import { useSelector } from "react-redux";
import ClientCreate from "./clientCreate.jsx";
import {ClientList} from '../../Components/ClientList/clientList.jsx' 
import ClientDetail from "./ClientDetail.jsx";
import SearchBar from "../../Components/SearchBarContainer/SearchBarContainer.jsx";

const ClientHome = () => {
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
        <ClientCreate onClose={() => setMostrarCadastro(false)} />
      )}

      <ClientList
        clientes={clientesFiltrados}
        onSelectCliente={setClienteSelecionado}
      />

      {clienteSelecionado && (
        <ClientDetail
          cliente={clienteSelecionado}
          onClose={() => setClienteSelecionado(null)}
        />
      )}
    </div>
  );
};

export default ClientHome;
