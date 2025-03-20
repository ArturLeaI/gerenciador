import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi'; // Importação do ícone de pesquisa

// Container para a lista de produtos
export const ProdutosContainer = styled.div`
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
`;

// Lista de produtos
export const ListaProdutos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
`;

// Item de produto (card)
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

// Imagem do produto
export const ProdutoImagem = styled.img`
  width: 250px; // Largura fixa da imagem
  height: 162px; // Altura fixa da imagem
  object-fit: cover; // Garante que a imagem cubra o espaço sem distorcer
  border-radius: 8px 8px 0 0; // Bordas arredondadas apenas no topo
`;

// Nome do produto
export const NomeProduto = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 8px 0;
  text-align: center;
`;

// Preço do produto
export const ProdutoPreco = styled.p`
  font-size: 14px;
  color: #007bff;
  margin: 4px 0 8px 0;
  text-align: center;
`;

// Container para a barra de pesquisa e botão
export const SearchButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  margin-top: 15px;
  width: 100%;
`;

// Container do input de pesquisa
export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 6px 10px;
  width: 40%;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus-within {
    border-color: #3145fe;
    box-shadow: 0 0 0 2px rgba(114, 173, 243, 0.2);
  }
`;

// Ícone de pesquisa
export const SearchIcon = styled(FiSearch)`
  color: #666;
  margin-right: 8px;
  font-size: 16px;
`;

// Input de pesquisa
export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  flex: 1;
  background: transparent;
  padding: 4px;

  &::placeholder {
    color: #999;
  }
`;

// Botão de "Novo Produto" (adicionado)
export const NovoProdutoButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #3145fe;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background: #5a8fd3;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;