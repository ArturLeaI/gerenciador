// ListagemProdutos.js (arquivo principal)
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CadastrarProduto from "./CadastrarProduto";
import DetalharProduto from "./DetalharProduto";
import SearchBar from "../SearchBarContainer/SearchBarContainer.jsx";
import ProductContainer from "../ProductContainer/productContainer.jsx";

const ListagemProdutos = () => {
  const [mostrarCadastroProduto, setMostrarCadastroProduto] = useState(false);
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const produtos = useSelector((state) => state.products.items);

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  return (
    <>
      <SearchBar
        placeholder="Digite o nome do cliente..."
        value={termoPesquisa}
        onChange={(e) => setTermoPesquisa(e.target.value)}
        buttonText="Novo Produto"
        onButtonClick={() => setMostrarCadastroProduto(true)}
      />

      {mostrarCadastroProduto && (
        <CadastrarProduto onClose={() => setMostrarCadastroProduto(false)} />
      )}

      <ProductContainer
        produtos={produtosFiltrados}
        onProdutoClick={setProdutoSelecionado}
      />

      {produtoSelecionado && (
        <DetalharProduto
          produto={produtoSelecionado}
          onClose={() => setProdutoSelecionado(null)}
        />
      )}
    </>
  );
};

export default ListagemProdutos;
