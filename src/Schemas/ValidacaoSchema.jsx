import * as Yup from 'yup';

export const ValidacaoSchema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório'),
  cnpj: Yup.string()
    .required('CNPJ é obrigatório')
    .matches(/^\d{14}$/, 'CNPJ deve ter 14 dígitos'),
  telefone: Yup.string()
    .required('Telefone é obrigatório')
    .matches(/^\d{11}$/, 'Telefone deve ter 11 dígitos'),
  cep: Yup.string()
    .required('CEP é obrigatório')
    .matches(/^\d{8}$/, 'CEP deve ter 8 dígitos'),
  estado: Yup.string().required('Estado é obrigatório'),
  cidade: Yup.string().required('Cidade é obrigatória'),
  bairro: Yup.string().required('Bairro é obrigatório'),
  endereco: Yup.string().required('Endereço é obrigatório'),
  numero: Yup.string()
    .required('Número é obrigatório')
    .matches(/^\d+$/, 'Deve conter apenas números')
});