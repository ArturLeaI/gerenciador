import React from "react";
import {
  ProdutoItem,
  ProdutoImagem,
  NomeProduto,
  ProdutoPreco,
} from "./productCard.styles";

const ProductCard = ({ produto, onClick }) => {
  const fotoValida =
    produto.foto &&
    typeof produto.foto === "string" &&
    produto.foto.startsWith("data:image");

  return (
    <ProdutoItem onClick={() => onClick(produto)}>
      {fotoValida && (
        <ProdutoImagem src={produto.foto} alt={produto.nome || "Imagem do produto"} />
      )}
      {produto.nome && <NomeProduto>{produto.nome}</NomeProduto>}
      {produto.preco && (
        <ProdutoPreco>R$ {produto.preco.toFixed(2)}</ProdutoPreco>
      )}
    </ProdutoItem>
  );
};

export default ProductCard;