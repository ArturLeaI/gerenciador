import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ValidacaoSchema } from '../../Schemas/ValidacaoSchema';
import { useDispatch } from 'react-redux';
import { addClient } from '../../Store/clienteSlice';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
  FormGrid,
  InputGroup,
  Input,
  ErrorMessage,
  ModalActions,
  SubmitButton,
} from './CadastrarCliente.styles';

const CadastroCliente = ({ onClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidacaoSchema),
  });

  const cepValue = watch('cep');

  const buscarCEP = async (cep) => {
    if (cep?.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (!data.erro) {
          setValue('estado', data.uf, { shouldValidate: true });
          setValue('cidade', data.localidade, { shouldValidate: true });
          setValue('bairro', data.bairro, { shouldValidate: true });
          setValue('endereco', data.logradouro, { shouldValidate: true });
        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    }
  };

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
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>Cadastrar Cliente</h2>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGrid>
            <InputGroup>
              <Input {...register('nome')} type="text" placeholder="Nome" error={!!errors.nome} />
              {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Input {...register('cnpj')} type="text" placeholder="CNPJ" error={!!errors.cnpj} />
              {errors.cnpj && <ErrorMessage>{errors.cnpj.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Input
                {...register('telefone')}
                type="text"
                placeholder="Telefone"
                error={!!errors.telefone}
              />
              {errors.telefone && <ErrorMessage>{errors.telefone.message}</ErrorMessage>}
            </InputGroup>
          </FormGrid>

          <FormGrid>
            <InputGroup>
              <Input
                {...register('cep', { onChange: (e) => buscarCEP(e.target.value) })}
                type="text"
                placeholder="CEP"
                error={!!errors.cep}
              />
              {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Input {...register('estado')} type="text" placeholder="Estado" error={!!errors.estado} />
              {errors.estado && <ErrorMessage>{errors.estado.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Input {...register('cidade')} type="text" placeholder="Cidade" error={!!errors.cidade} />
              {errors.cidade && <ErrorMessage>{errors.cidade.message}</ErrorMessage>}
            </InputGroup>
          </FormGrid>

          <FormGrid>
            <InputGroup>
              <Input {...register('bairro')} type="text" placeholder="Bairro" error={!!errors.bairro} />
              {errors.bairro && <ErrorMessage>{errors.bairro.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Input
                {...register('endereco')}
                type="text"
                placeholder="Endereço"
                error={!!errors.endereco}
              />
              {errors.endereco && <ErrorMessage>{errors.endereco.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Input {...register('numero')} type="text" placeholder="Número" error={!!errors.numero} />
              {errors.numero && <ErrorMessage>{errors.numero.message}</ErrorMessage>}
            </InputGroup>
          </FormGrid>

          <ModalActions>
            <SubmitButton type="submit">Cadastrar</SubmitButton>
          </ModalActions>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CadastroCliente;