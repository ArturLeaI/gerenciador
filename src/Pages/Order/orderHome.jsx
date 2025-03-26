import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../../Components/SearchBarContainer/SearchBarContainer.jsx";
import { ClientList } from "../../Components/ClientList/clientList.jsx";
import OrderCreate from "./orderCreate.jsx";

function OrderHome() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const pedidos = useSelector((state) => state.pedidos.pedidos || []);

  const pedidosFiltrados = pedidos.filter((pedido) => {
    const nomeCliente = pedido?.cliente?.nome || "";
    return nomeCliente.toLowerCase().includes(termoPesquisa.toLowerCase());
  });

  const pedidosComTotais = pedidosFiltrados.map(pedido => {
    const quantidadeTotal = pedido.produtos?.reduce((total, produto) => 
      total + (produto.quantidade || 0), 0) || 0;
    const totalFormatado = pedido.total || pedido.subtotal || 0;
    
    return {
      ...pedido,
      quantidadeTotal,
      totalFormatado
    };
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

      {mostrarCadastro && (
        <OrderCreate onClose={() => setMostrarCadastro(false)} />
      )}

        {pedidosComTotais.length === 0 ? (
          <p>Nenhum pedido encontrado.</p>
        ) : (
          <ClientList 
            clientes={pedidosComTotais}
            mostrarPedidos={true}
            tipo="pedido" 
          />
        )}
    </div>
  );
}

export default OrderHome;