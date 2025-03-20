import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useSelector } from "react-redux";
import CadastrarProduto from "./CadastrarProduto";
import DetalharProduto from "./DetalharProduto";
import {
  SearchButtonContainer,
  SearchInputContainer,
  SearchIcon,
  SearchInput,
  NovoProdutoButton,
  ProdutosContainer,
  ListaProdutos,
  ProdutoItem,
  ProdutoImagem,
  NomeProduto,
  ProdutoPreco,
} from "./ListagemProduto.styles";

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
      <SearchButtonContainer>
        <SearchInputContainer>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="Digite o nome do produto..."
            value={termoPesquisa}
            onChange={(e) => setTermoPesquisa(e.target.value)}
          />
        </SearchInputContainer>

        <NovoProdutoButton onClick={() => setMostrarCadastroProduto(true)}>
          <FiPlus />
          Novo Produto
        </NovoProdutoButton>
      </SearchButtonContainer>

      {mostrarCadastroProduto && (
        <CadastrarProduto onClose={() => setMostrarCadastroProduto(false)} />
      )}

      <ProdutosContainer>
        <ListaProdutos>
          {produtosFiltrados.length === 0 ? (
            <p>Nenhum produto encontrado.</p>
          ) : (
            produtosFiltrados.map((produto) => {
              const fotoValida =
                produto.foto &&
                typeof produto.foto === "string" &&
                produto.foto.startsWith("data:image");

              return (
                <ProdutoItem
                  key={produto.id}
                  onClick={() => setProdutoSelecionado(produto)}
                >
                  {fotoValida && (
                    <ProdutoImagem
                      src={produto.foto}
                      alt={produto.nome || "Imagem do produto"}
                    />
                  )}
                  {produto.nome && <NomeProduto>{produto.nome}</NomeProduto>}
                  {produto.preco && (
                    <ProdutoPreco>R$ {produto.preco.toFixed(2)}</ProdutoPreco>
                  )}
                </ProdutoItem>
              );
            })
          )}
        </ListaProdutos>
      </ProdutosContainer>

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