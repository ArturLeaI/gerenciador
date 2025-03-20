import styled from 'styled-components';

// Container principal do formulário de cadastro (aumentado)
export const CadastroContainer = styled.div`
  background: white;
  width: 90%;
  max-width: 800px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  position: relative;
  pointer-events: all;
`;

// Título do formulário
export const Titulo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
`;

// Container para cada campo do formulário
export const Campo = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

// Container para cada input e seu label
export const InputContainer = styled.div`
  width: 45%;
  margin-right: 15px;
`;

// Label dos campos
export const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #555;
`;

// Input de texto
export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  color: #333;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }
`;

// Container específico para o campo de descrição
export const DescricaoContainer = styled.div`
  margin-bottom: 1.5rem;
`;

// Área de texto
export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  color: #333;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }
`;

// Container para o upload de foto
export const UploadContainer = styled.div`
  margin-bottom: 1.5rem;
`;

// Label do upload de foto
export const UploadInput = styled.input`
  display: none;
`;

export const UploadBox = styled.div`
  border: 2px dashed #ddd;
  border-radius: 6px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: #007bff;
  }
`;

export const UploadLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #555;
  cursor: pointer;
`;

// Texto dentro do box de upload
export const UploadText = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin: 0;
`;

// Botão de salvar
export const BotaoSalvar = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

// Modal Overlay (fundo escuro)
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
  pointer-events: none;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const FecharBotao = styled.button`
  position: absolute;
  top: 10px; 
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  line-height: 1;
  padding: 0;
  transition: color 0.3s;

  &:hover {
    color: #333;
  }
`;