import React from "react";
import Modal from "../../Components/Modal/modal";
import Detail from "../../Components/ClientDetail/clientDetail";
import { ProdutoImagem } from "../../Components/ProductCard/productCard.styles";

const productFields = [
  { key: "nome", label: "Nome" },
  { key: "preco", label: "Preço" },
  { key: "descricao", label: "Descricao" },
];

const ProductDetail = ({ produto, onClose }) => {
  if (!produto) return null;

  const fotoValida =
    produto.foto &&
    typeof produto.foto === "string" &&
    produto.foto.startsWith("data:image");

  return (
    <Modal title="Detalhes do Produto" onClose={onClose}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
        {fotoValida && (
          <ProdutoImagem src={produto.foto} alt={produto.nome || "Imagem do produto"} 
          style={{ width: "200px", height: "200px", borderRadius: "8px" }}
          />
        )}
        <Detail dados={produto} campos={productFields} /> 
      </div>
    </Modal>
  );
};

export default ProductDetail;
