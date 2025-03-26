// components/DetalheGenerico.jsx
import React from 'react';
import { DetalheItem, DetalheLabel, DetalheValor } from './clientDetail.styles';

const Detail = ({ dados, campos }) => {
  return (
    <div>
      {campos.map((campo) => (
        <DetalheItem key={campo.key}>
          <DetalheLabel>{campo.label}:</DetalheLabel>
          <DetalheValor>
            {campo.format ? campo.format(dados[campo.key]) : dados[campo.key]}
          </DetalheValor>
        </DetalheItem>
      ))}
    </div>
  );
};

export default Detail;