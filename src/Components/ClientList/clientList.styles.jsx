import styled from "styled-components";

export const ClientesContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ListaClientes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;