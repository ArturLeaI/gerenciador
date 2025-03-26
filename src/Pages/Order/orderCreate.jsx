import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { adicionarPedido } from "../../Store/pedidoSlice";
import Modal from "../../Components/Modal/modal";
import SearchBar from "../../Components/SearchBarContainer/SearchBarContainer";
import { ProductCardCounter } from "../../Components/ProductCardCounter/ProductCardCounter";
import ModalFooter from "../../Components/ModalFooter/modalFooter";
import ClientDropdown from "../../Components/ClientDropdown/clientDropdown";

const OrderCreate = ({ onClose }) => {
  const dispatch = useDispatch();
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [quantidades, setQuantidades] = useState({});
  const [mensagemErro, setMensagemErro] = useState("");

  const produtos = useSelector((state) => state.products.items);
  const clientes = useSelector((state) => state.clients.clients) || [];

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  const handleSelecionarCliente = (cliente) => {
    setClienteSelecionado(cliente);
    setMostrarDropdown(false);
  };

  const incrementarQuantidade = (produtoId) => {
    setQuantidades(prev => ({
      ...prev,
      [produtoId]: (prev[produtoId] || 0) + 1
    }));
  };
  
  const decrementarQuantidade = (produtoId) => {
    setQuantidades(prev => ({
      ...prev,
      [produtoId]: Math.max((prev[produtoId] || 0) - 1, 0)
    }));
  };

  const calcularSubtotal = () => {
    return produtosFiltrados.reduce((total, produto) => {
      const quantidade = quantidades[produto.id] || 0;
      return total + produto.preco * quantidade;
    }, 0);
  };

  const salvarPedido = async () => {
    try {
      setMensagemErro(""); // Limpa mensagens anteriores
  
      // Verifica se há produtos selecionados
      const produtosSelecionados = produtosFiltrados
        .filter((produto) => quantidades[produto.id] > 0)
        .map((produto) => ({
          id: produto.id,
          nome: produto.nome,
          quantidade: quantidades[produto.id],
          preco: produto.preco,
        }));
  
      // Validação com Yup
      const schema = Yup.object().shape({
        cliente: Yup.object()
          .required("Selecione um cliente.")
          .typeError("Selecione um cliente válido."),
        produtos: Yup.array()
          .of(
            Yup.object().shape({
              quantidade: Yup.number()
                .min(1, "A quantidade deve ser pelo menos 1.")
                .required("Quantidade é obrigatória.")
            })
          )
          .min(1, "Selecione pelo menos um produto.")
          .required("Pelo menos um produto é obrigatório.")
      });
  
      await schema.validate({
        cliente: clienteSelecionado,
        produtos: produtosSelecionados,
      }, { abortEarly: false });
  
      // Se a validação passar, salva o pedido
      dispatch(adicionarPedido({
        cliente: clienteSelecionado,
        produtos: produtosSelecionados,
        subtotal: calcularSubtotal(),
      }));
  
      alert("Pedido salvo com sucesso!");
      onClose();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        // Junta todas as mensagens de erro em uma string
        const errorMessages = error.inner.map(err => err.message).join("\n");
        setMensagemErro(errorMessages);
      } else {
        setMensagemErro("Ocorreu um erro ao salvar o pedido: " + error.message);
      }
    }
  };

  return (
    <Modal title="Cadastrar Pedido" onClose={onClose}>
      <ClientDropdown
        clientes={clientes}
        selectedClient={clienteSelecionado}
        onSelect={setClienteSelecionado}
      />

      <SearchBar
        placeholder="Buscar produtos..."
        value={termoPesquisa}
        onChange={(e) => setTermoPesquisa(e.target.value)}
        showButton = {true}
      />

          {produtosFiltrados.length === 0 ? (
            <p>Nenhum produto encontrado.</p>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px",
              width: "100%",
            }}>
              {produtosFiltrados.map((produto) => (
                <ProductCardCounter
                  key={produto.id}
                  produto={produto}
                  quantidade={quantidades[produto.id] || 0}
                  onIncrement={() => incrementarQuantidade(produto.id)}
                  onDecrement={() => decrementarQuantidade(produto.id)}
                />
              ))}
            </div>
          )}
      
      <ModalFooter
        subtotal={calcularSubtotal()}
        errorMessage={mensagemErro}
        onSave={salvarPedido}
      />
    </Modal>
  );
};

export default OrderCreate;