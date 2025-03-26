// ProductCardWithCounter.js
import React from "react";
import {
  ProdutoItem,
  ProdutoImagem,
  NomeProduto,
  ProdutoPreco,
  CounterContainer,
  CounterButton,
  CounterInput
} from "./ProductCardCounter.styles";

export const ProductCardCounter = ({ 
  produto, 
  quantidade = 0,
  onIncrement,
  onDecrement,
  onQuantityChange
}) => {
  const fotoValida = produto.foto && typeof produto.foto === "string" && 
                    produto.foto.startsWith("data:image");

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    onQuantityChange(value); // Agora espera apenas o valor
  };

  return (
    <ProdutoItem>
      {fotoValida && (
        <ProdutoImagem src={produto.foto} alt={produto.nome || "Imagem do produto"} />
      )}
      <NomeProduto>{produto.nome}</NomeProduto>
      <ProdutoPreco>R$ {produto.preco.toFixed(2)}</ProdutoPreco>
      
      <CounterContainer>
        <CounterButton onClick={() => onDecrement()}>-</CounterButton>
        <CounterInput 
          type="number" 
          value={quantidade}
          onChange={handleChange}
          min="0"
        />
        <CounterButton onClick={() => onIncrement()}>+</CounterButton>
      </CounterContainer>
    </ProdutoItem>
  );
};