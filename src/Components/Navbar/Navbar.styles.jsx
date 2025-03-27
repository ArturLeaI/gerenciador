import styled from 'styled-components';

// Estilo da Navbar
export const NavbarContainer = styled.nav`
  background-color: #fff;
  padding: 10px;
  display: flex;
  justify-content: center; 
  border-bottom: 1px solid #e0e0e0; 
`;

// Estilo dos botões
export const NavbarButton = styled.button`
  background-color: transparent;
  color: #333; /* Cor do texto */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 10px; 
  transition: color 0.3s, border-bottom 0.3s;

  /* Efeito hover nos botões */
  &:hover {
    color: #007bff; 
  }

  /* Estilo do botão ativo */
  &.ativo {
    color: #007bff; 
    border-bottom: 2px solid #007bff; 
  }
`;
export const ConteudoContainer = styled.div`
  padding: 20px;
`;