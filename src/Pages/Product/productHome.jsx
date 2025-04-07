import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCreate from "./productCreate.jsx";
import ProductDetail from "./productDetail.jsx";
import SearchBar from "../../Components/SearchBarContainer/SearchBarContainer.jsx";
import ProductContainer from "../../Components/ProductContainer/productContainer.jsx";

const ProductHome = () => {
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
        <ProductCreate onClose={() => setMostrarCadastroProduto(false)} />
      )}

      <ProductContainer
        produtos={produtosFiltrados}
        onProdutoClick={setProdutoSelecionado}
      />

      {produtoSelecionado && (
        <ProductDetail
          produto={produtoSelecionado}
          onClose={() => setProdutoSelecionado(null)}
        />
      )}
    </>
  );
};

export default ProductHome;
