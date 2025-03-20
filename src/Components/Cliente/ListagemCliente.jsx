import React, { useState } from "react";
import { FiPlus } from "react-icons/fi"; // Importação do ícone
import { useSelector } from "react-redux";
import CadastroCliente from "./CadastrarCliente.jsx";
import {
  ClientesContainer,
  ListaClientes,
  ClienteItem,
  IconeCliente,
  DadosCliente,
  NomeCliente,
  CNPJCliente,
  SearchButtonContainer,
  SearchInputContainer,
  SearchIcon,
  SearchInput,
  NovoClienteButton,
} from "./ListagemCliente.styles.jsx";
import DetalharCliente from "./DetalharCliente.jsx";

const ListagemClientes = () => {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const clientes = useSelector((state) => state.clients.clients);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const clientesFiltrados = clientes.filter((cliente) => {
    return (
      cliente.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
      cliente.cnpj.includes(termoPesquisa)
    );
  });

  return (
    <div className="listagem-container">
      <SearchButtonContainer>
        <SearchInputContainer>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="Digite o nome do cliente..."
            value={termoPesquisa}
            onChange={(e) => setTermoPesquisa(e.target.value)}
          />
        </SearchInputContainer>

        <NovoClienteButton onClick={() => setMostrarCadastro(true)}>
          <FiPlus /> {/* Ícone sendo usado aqui */}
          Novo Cliente
        </NovoClienteButton>
      </SearchButtonContainer>

      {/* Listagem de clientes */}
      <ClientesContainer>
        <ListaClientes>
          {clientesFiltrados.map((cliente, index) => (
            <ClienteItem
              key={index}
              onClick={() => setClienteSelecionado(cliente)}
            >
              <IconeCliente>
                {cliente.nome.substring(0, 2).toUpperCase()}
              </IconeCliente>
              <DadosCliente>
                <NomeCliente>{cliente.nome}</NomeCliente>
                <CNPJCliente>{cliente.cnpj}</CNPJCliente>
              </DadosCliente>
            </ClienteItem>
          ))}
        </ListaClientes>

        {clienteSelecionado && (
          <DetalharCliente
            cliente={clienteSelecionado}
            onClose={() => setClienteSelecionado(null)}
          />
        )}
      </ClientesContainer>

      {mostrarCadastro && (
        <div className="cadastro-container">
          <CadastroCliente onClose={() => setMostrarCadastro(false)} />
        </div>
      )}
    </div>
  );
};

export default ListagemClientes;