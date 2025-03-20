import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi'; // Importação do ícone de pesquisa

// Botão de fechar no canto superior direito
export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
  line-height: 0,10;
  padding: 0 0.5rem;
  transition: color 0.3s;
  position: absolute; // Posicionamento absoluto
  top: 0.01rem; // Reduzi a distância do topo
  right: 0.1rem; // Reduzi a distância da direita

  &:hover {
    color: #333;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 41%;
  margin-bottom: 1rem;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const DropdownItem = styled.li`
  padding: 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ListaProdutos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
`;

export const NomeProduto = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 8px 0;
  text-align: center;
`;

export const ProdutoImagem = styled.img`
  width: 250px; // Largura fixa da imagem
  height: 162px; // Altura fixa da imagem
  object-fit: cover; // Garante que a imagem cubra o espaço sem distorcer
  border-radius: 8px 8px 0 0; // Bordas arredondadas apenas no topo
`;

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

export const ProdutoPreco = styled.p`
  font-size: 14px;
  color: #007bff;
  margin: 4px 0 8px 0;
  text-align: center;
`;

export const ProdutosContainer = styled.div`
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
`;

export const SearchButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  margin-top: 15px;
  width: 100%;
`;

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

export const SearchIcon = styled(FiSearch)`
  color: #666;
  margin-right: 8px;
  font-size: 16px;
`;

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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  padding-bottom: 6rem; // Adiciona espaço para o rodapé
  border-radius: 8px;
  width: 80%;
  height: 75%;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  position: relative; // Para posicionar o botão de fechar
`;

// Estilos para o DropdownButton
export const DropdownButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  text-align: left;
`;

// Estilos para o contador
export const ContadorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const BotaoContador = styled.button`
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

export const Quantidade = styled.span`
  font-size: 1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid #ccc;
  background-color: #f9f9f9;
  position: absolute; // Fixa o rodapé dentro do ModalContainer
  bottom: 0; // Cola no fundo do modal
  left: 0;
  right: 0;
  width: 100%; // Ocupa toda a largura do modal
  z-index: 1000; // Garante que fique acima do conteúdo
  box-sizing: border-box; // Garante que o padding não aumente a largura
`;

export const Subtotal = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const BotaoSalvar = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
export const TopContainer = styled.div`
  position: sticky;
  top: 0;
  background: white;
  z-index: 1000;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
export const MensagemErro = styled.p`
  color: red;
  font-size: 0.875rem;
  margin: 0;
  text-align: center;
`;