import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1.5rem;
`;

export const UploadLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #555;
  cursor: pointer;
`;

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

export const UploadText = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin: 0;
`;