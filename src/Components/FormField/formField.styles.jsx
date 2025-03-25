import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input`
  width: 90%;
  padding: 0.8rem 1rem;
  border: 2px solid ${props => props.error ? '#dc3545' : '#e2e8f0'};
  border-radius: 6px;
  font-size: 1rem;
  background: ${props => props.error ? '#fff5f5' : '#fff'};
  transition: all 0.3s ease;
  ${({ as }) => as === 'textarea' && `
    min-height: ${4 * 24}px;
    resize: vertical;
  `}

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
    font-weight: 300;
  }
`;

export const TextAreaInput = styled.textarea`
  width: 96%;
  padding: 0.8rem;
  border: 2px solid ${props => props.error ? '#dc3545' : '#e2e8f0'};
  font-size: 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  min-height: ${4 * 24}px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
    font-weight: 300;
  }
`;


export const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 0.8rem;
  position: absolute;
  bottom: -1.25rem;
  left: 0;
`;

export const FormGrid = styled.div`
 display: grid;
  width: 100%;
  margin-bottom: 1.5rem;
  gap: 1.5rem;
  grid-template-columns: ${({ $cols }) => 
    `repeat(${$cols || 3}, 1fr)`};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;


