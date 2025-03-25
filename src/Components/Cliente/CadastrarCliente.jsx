// pages/CadastroCliente/CadastroCliente.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { addClient } from '../../Store/clienteSlice';
import Modal from '../Modal/modal';
import { FormField, FormFieldGroup } from '../FormField/formField';
import { SubmitButton } from '../SubmitButton/submitButton';
import { useCep } from '../../hooks/useCep';
import { ValidacaoSchema } from '../../Schemas/ValidacaoSchema';

const CadastroCliente = ({ onClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(ValidacaoSchema),
  });

  const buscarCEP = useCep(setValue);

  const onSubmit = (data) => {
    try {
      dispatch(addClient(data));
      reset();
      onClose();
      alert('Cliente cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar cliente:', error);
    }
  };

  return (
    <Modal title="Cadastrar Cliente" onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldGroup>
          <FormField
            type="text"
            register={register}
            name="nome"
            placeholder="Nome"
            errors={errors}
          />
          <FormField
          type="text"
            register={register}
            name="cnpj"
            placeholder="CNPJ"
            errors={errors}
          />
          <FormField
          type="text"
            register={register}
            name="telefone"
            placeholder="Telefone"
            errors={errors}
          />
        </FormFieldGroup>

        <FormFieldGroup>
          <FormField
          type="text"
            register={register}
            name="cep"
            placeholder="CEP"
            errors={errors}
            onChange={(e) => buscarCEP(e.target.value)}
          />
          <FormField
          type="text"
            register={register}
            name="estado"
            placeholder="Estado"
            errors={errors}
          />
          <FormField
          type="text"
            register={register}
            name="cidade"
            placeholder="Cidade"
            errors={errors}
          />
        </FormFieldGroup>

        <FormFieldGroup>
          <FormField
          type="text"
            register={register}
            name="bairro"
            placeholder="Bairro"
            errors={errors}
          />
          <FormField
          type="text"
            register={register}
            name="endereco"
            placeholder="Endereço"
            errors={errors}
          />
          <FormField
          type="text"
            register={register}
            name="numero"
            placeholder="Número"
            errors={errors}
          />
        </FormFieldGroup>

          <SubmitButton>Cadastrar</SubmitButton>
      </form>
    </Modal>
  );
};

export default CadastroCliente;