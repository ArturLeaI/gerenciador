// src/components/ClientDropdown/index.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  background-color: white;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: #adb5bd;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 300px;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: white;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const DropdownItem = styled.li`
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const ClientDropdown = ({ clientes, selectedClient, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (cliente) => {
    onSelect(cliente);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {selectedClient?.nome || "Selecione um cliente"}
      </DropdownButton>
      
      {isOpen && (
        <DropdownList>
          {clientes.map((cliente) => (
            <DropdownItem
              key={cliente.id}
              onClick={() => handleSelect(cliente)}
            >
              {cliente.nome}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default ClientDropdown;