import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CadastrarPedido from './cadastrarPedido';
import SearchBar from "../SearchBarContainer/SearchBarContainer.jsx";
import {
  SearchButtonContainer,
  SearchInputContainer,
  SearchIcon,
  SearchInput,
  NovoClienteButton,
  PedidosContainer,
  PedidoCard,
  IniciaisIcon,
  InfoContainer,
  PedidoCliente,
  PedidoTotal,
  PedidoQuantidade
} from './listagemPedido.styles';

const obterIniciais = (nome) => {
  const nomes = nome.split(' ');
  const iniciais = nomes.map((n) => n[0]).join('');
  return iniciais.slice(0, 2).toUpperCase();
};

function ListagemPedido() {
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const pedidos = useSelector((state) => state.pedidos.pedidos);

  const calcularQuantidadeTotal = (produtos) => {
    return produtos.reduce((total, produto) => total + produto.quantidade, 0);
  };

  const pedidosFiltrados = pedidos.filter((pedido) => {
    return pedido.cliente.nome.toLowerCase().includes(termoPesquisa.toLowerCase());
  });

  return (
    <div>
      <SearchBar
        placeholder="Digite o nome do cliente..."
        value={termoPesquisa}
        onChange={(e) => setTermoPesquisa(e.target.value)}
        buttonText="Novo Pedido"
        onButtonClick={() => setMostrarCadastro(true)}
      />  

      {mostrarCadastro && <CadastrarPedido onClose={() => setMostrarCadastro(false)} />}

      <PedidosContainer>
        {pedidosFiltrados.length === 0 ? (
          <p>Nenhum pedido encontrado.</p>
        ) : (
          pedidosFiltrados.map((pedido, index) => {
            const quantidadeTotal = calcularQuantidadeTotal(pedido.produtos);
            const iniciais = obterIniciais(pedido.cliente.nome);

            return (
              <PedidoCard key={index}>
                <IniciaisIcon>{iniciais}</IniciaisIcon>
                <InfoContainer>
                  <PedidoCliente>{pedido.cliente.nome}</PedidoCliente>
                  <PedidoQuantidade>
                    Quantidade de Produtos: {quantidadeTotal}
                  </PedidoQuantidade>
                  <PedidoTotal>Total: R$ {pedido.subtotal.toFixed(2)}</PedidoTotal>
                </InfoContainer>
              </PedidoCard>
            );
          })
        )}
      </PedidosContainer>
    </div>
  );
}

export default ListagemPedido;