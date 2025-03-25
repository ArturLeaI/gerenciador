import styled from 'styled-components';

export const ProdutoItem = styled.div`
  width: 250px; // Largura fixa do card
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden; // Garante que a imagem não ultrapasse o card
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px); // Efeito de hover
  }
`;

export const ProdutoImagem = styled.img`
  width: 250px; // Largura fixa da imagem
  height: 162px; // Altura fixa da imagem
  object-fit: cover; // Garante que a imagem cubra o espaço sem distorcer
  border-radius: 8px 8px 0 0; // Bordas arredondadas apenas no topo
`;

export const NomeProduto = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 8px 0;
  text-align: center;
`;

export const ProdutoPreco = styled.p`
  font-size: 14px;
  color: #007bff;
  margin: 4px 0 8px 0;
  text-align: center;
`;