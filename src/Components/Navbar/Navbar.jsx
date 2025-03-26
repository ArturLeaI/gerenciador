import { useState } from "react";
import {
  NavbarContainer,
  NavbarButton,
  ConteudoContainer,
} from "./Navbar.styles";
import { CiShoppingCart, CiViewList, CiUser } from "react-icons/ci";
import ClientHome from "../../Pages/Client/ClientHome";
import OrderHome from "../../Pages/Order/OrderHome";
import ProductHome from "../../Pages/Product/productHome";


const Navbar = () => {
  const [abaAtiva, setAbaAtiva] = useState("clientes");

  const renderizarConteudo = () => {
    switch (abaAtiva) {
      case "clientes":
        return <ClientHome />;
      case "produtos":
        return < ProductHome/>;
      case "pedidos":
        return <OrderHome/>;
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
      </NavbarContainer>
      <ConteudoContainer>{renderizarConteudo()}</ConteudoContainer>
    </div>
  );
};

export default Navbar;
