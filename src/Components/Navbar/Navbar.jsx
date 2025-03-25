import { useState } from "react";
import {
  NavbarContainer,
  NavbarButton,
  ConteudoContainer,
} from "./Navbar.styles";
import { CiShoppingCart, CiViewList, CiUser } from "react-icons/ci";
import ListagemClientes from "../Cliente/ListagemCliente";
import ListagemProduto from "../Produto/ListagemProduto";
import ListagemPedido from "../Pedido/listagemPedido";
import SearchBar from "../SearchBarContainer/SearchBarContainer"
import RegisterButton from "../RegisterButton/registerButton";


const Navbar = () => {
  const [abaAtiva, setAbaAtiva] = useState("clientes");

  const renderizarConteudo = () => {
    switch (abaAtiva) {
      case "clientes":
        return <ListagemClientes />;
      case "produtos":
        return <ListagemProduto />;
      case "pedidos":
        return <ListagemPedido />;
      case "teste":
        return <ListagemPedido/>
      default:
        return null;
    }
  };

  return (
    <div>
      <NavbarContainer>
        <NavbarButton
          className={abaAtiva === "clientes" ? "ativo" : ""}
          onClick={() => setAbaAtiva("clientes")}
        >
          <CiUser /> Clientes
        </NavbarButton>
        <NavbarButton
          className={abaAtiva === "produtos" ? "ativo" : ""}
          onClick={() => setAbaAtiva("produtos")}
        >
          <CiViewList /> Produtos
        </NavbarButton>
        <NavbarButton
          className={abaAtiva === "pedidos" ? "ativo" : ""}
          onClick={() => setAbaAtiva("pedidos")}
        >
          <CiShoppingCart /> Pedidos
        </NavbarButton>

        <NavbarButton
          className={abaAtiva === "teste" ? "ativo" : ""}
          onClick={() => setAbaAtiva("teste")}
        >
          <CiShoppingCart /> teste
        </NavbarButton>
      </NavbarContainer>
      <ConteudoContainer>{renderizarConteudo()}</ConteudoContainer>
    </div>
  );
};

export default Navbar;
