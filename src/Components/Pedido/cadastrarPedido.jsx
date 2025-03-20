import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as Yup from 'yup';
import {
  SearchInputContainer,
  SearchIcon,
  SearchInput,
  ProdutosContainer,
  ListaProdutos,
  ProdutoItem,
  ProdutoImagem,
  NomeProduto,
  ProdutoPreco,
  DropdownContainer,
  DropdownList,
  DropdownItem,
  CloseButton,
  ModalOverlay,
  ModalContainer,
  DropdownButton,
  BotaoContador,
  ContadorContainer,
  Quantidade,
  ModalFooter,
  Subtotal,
  BotaoSalvar,
  TopContainer,
} from './cadastrarPedido.styles';
import { adicionarPedido } from "../../Store/pedidoSlice";

// Schema de validação
const pedidoSchema = Yup.object().shape({
  cliente: Yup.object().required("Selecione um cliente."),
  produtos: Yup.array()
    .of(
      Yup.object().shape({
        quantidade: Yup.number().min(1, "A quantidade deve ser pelo menos 1."),
      })
    )
    .min(1, "Selecione pelo menos um produto."),
});

// Estilo para a mensagem de erro
export const MensagemErro = styled.p`
  color: red;
  font-size: 0.875rem;
  margin: 0;
  text-align: center;
`;

const ListagemProdutos = ({ onClose }) => {
  const dispatch = useDispatch();

  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const [quantidades, setQuantidades] = useState({});
  const [mensagemErro, setMensagemErro] = useState("");

  // Busca os produtos e clientes do Redux
  const produtos = useSelector((state) => state.products.items);
  const clientes = useSelector((state) => state.clients.clients) || [];

  // Filtra os produtos com base no termo de pesquisa
  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  // Função para lidar com a seleção de um cliente
  const handleSelecionarCliente = (cliente) => {
    setClienteSelecionado(cliente);
    setMostrarDropdown(false);
  };

  // Função para incrementar a quantidade
  const incrementarQuantidade = (produtoId) => {
    setQuantidades((prev) => ({
      ...prev,
      [produtoId]: (prev[produtoId] || 0) + 1,
    }));
  };

  // Função para decrementar a quantidade
  const decrementarQuantidade = (produtoId) => {
    setQuantidades((prev) => ({
      ...prev,
      [produtoId]: Math.max((prev[produtoId] || 0) - 1, 0),
    }));
  };

  // Calcular o subtotal
  const calcularSubtotal = () => {
    return produtosFiltrados.reduce((total, produto) => {
      const quantidade = quantidades[produto.id] || 0;
      return total + produto.preco * quantidade;
    }, 0);
  };

  // Função para salvar o pedido no Redux
  const salvarPedido = async () => {
    try {
      // Limpar mensagem de erro anterior
      setMensagemErro("");

      // Preparar os dados para validação
      const produtosSelecionados = produtosFiltrados
        .filter((produto) => quantidades[produto.id] > 0)
        .map((produto) => ({
          id: produto.id,
          nome: produto.nome,
          quantidade: quantidades[produto.id],
          preco: produto.preco,
        }));

      const dadosParaValidacao = {
        cliente: clienteSelecionado,
        produtos: produtosSelecionados,
      };

      // Validar os dados
      await pedidoSchema.validate(dadosParaValidacao, { abortEarly: false });

      // Se a validação passar, salvar o pedido
      const pedido = {
        cliente: clienteSelecionado,
        produtos: produtosSelecionados,
        subtotal: calcularSubtotal(),
      };

      dispatch(adicionarPedido(pedido));
      alert("Pedido salvo com sucesso!");
      onClose();
    } catch (error) {
      // Se houver erros de validação, exibir mensagem no rodapé
      if (error instanceof Yup.ValidationError) {
        const mensagensErro = error.inner.map((err) => err.message).join(", ");
        setMensagemErro(mensagensErro);
      } else {
        setMensagemErro("Ocorreu um erro ao salvar o pedido.");
      }
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        {/* Container fixo no topo */}
        <TopContainer>
          <CloseButton onClick={onClose}>
            <FiX />
          </CloseButton>

          {/* Dropdown de Clientes */}
          <DropdownContainer>
            <DropdownButton onClick={() => setMostrarDropdown(!mostrarDropdown)}>
              {clienteSelecionado ? clienteSelecionado.nome : "Selecione um cliente"}
            </DropdownButton>
            {mostrarDropdown && (
              <DropdownList>
                {clientes.map((cliente) => (
                  <DropdownItem
                    key={cliente.id}
                    onClick={() => handleSelecionarCliente(cliente)}
                  >
                    {cliente.nome}
                  </DropdownItem>
                ))}
              </DropdownList>
            )}
          </DropdownContainer>

          {/* Barra de Pesquisa */}
          <SearchInputContainer>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Digite o nome do produto..."
              value={termoPesquisa}
              onChange={(e) => setTermoPesquisa(e.target.value)}
            />
          </SearchInputContainer>
        </TopContainer>

        {/* Listagem de Produtos */}
        <ProdutosContainer>
          <h1>Listagem de Produtos</h1>
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
                  <ProdutoItem key={produto.id}>
                    {fotoValida && (
                      <ProdutoImagem
                        src={produto.foto}
                        alt={produto.nome || "Imagem do produto"}
                      />
                    )}
                    <div>
                      {produto.nome && <NomeProduto>{produto.nome}</NomeProduto>}
                      {produto.preco && (
                        <ProdutoPreco>
                          R$ {produto.preco.toFixed(2)}
                        </ProdutoPreco>
                      )}
                      <ContadorContainer>
                        <BotaoContador onClick={() => decrementarQuantidade(produto.id)}>
                          -
                        </BotaoContador>
                        <Quantidade>{quantidades[produto.id] || 0}</Quantidade>
                        <BotaoContador onClick={() => incrementarQuantidade(produto.id)}>
                          +
                        </BotaoContador>
                      </ContadorContainer>
                    </div>
                  </ProdutoItem>
                );
              })
            )}
          </ListaProdutos>
        </ProdutosContainer>

        {/* Rodapé do Modal */}
        <ModalFooter>
          <Subtotal>
            Subtotal: R$ {calcularSubtotal().toFixed(2)}
          </Subtotal>
          <div>
            {mensagemErro && <MensagemErro>{mensagemErro}</MensagemErro>}
            <BotaoSalvar onClick={salvarPedido}>
              Salvar Pedido
            </BotaoSalvar>
          </div>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ListagemProdutos;