import React from "react";
import ProductCard from "../ProductCard/productCard";
import { ListaProdutos, ProdutosContainer } from "./productContainer.styles";

const ProductContainer = ({ produtos = [], onProdutoClick = () => {} }) => {
  return (
    <ProdutosContainer>
      <ListaProdutos>
        {produtos.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              produto={produto}
              onClick={onProdutoClick}
            />
          ))
        )}
      </ListaProdutos>
    </ProdutosContainer>
  );
};

export default ProductContainer;