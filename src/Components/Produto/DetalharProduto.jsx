import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
  DetalheItem,
  DetalheLabel,
  DetalheValor,
  ProdutoImagemModal,
} from "./DetalharProduto.styles";
import Modal from "../Modal/modal";

const DetalharProduto = ({ produto, onClose }) => {
  if (!produto) return null;

  const fotoValida =
    produto.foto &&
    typeof produto.foto === "string" &&
    produto.foto.startsWith("data:image");

  return (
    <Modal title="Detalhes do Produto" onClose={onClose}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
        {fotoValida && (
          <ProdutoImagemModal
            src={produto.foto}
            alt={produto.nome || "Imagem do produto"}
            style={{ width: "313px", height: "203px", borderRadius: "8px" }}
          />
        )}

        <div style={{ flex: 1 }}>
          <DetalheItem>
            <DetalheLabel
              style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}
            >
              {produto.nome}
            </DetalheLabel>
          </DetalheItem>

          <DetalheItem>
            <DetalheValor style={{ fontSize: "16px", color: "#333" }}>
              R$ {produto.preco.toFixed(2)}
            </DetalheValor>
          </DetalheItem>

          <DetalheItem>
            <DetalheValor style={{ fontSize: "12px", color: "#666" }}>
              {produto.descricao}
            </DetalheValor>
          </DetalheItem>
        </div>
      </div>
    </Modal>
  );
};

export default DetalharProduto;
