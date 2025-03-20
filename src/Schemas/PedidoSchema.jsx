import * as Yup from 'yup';

// Schema de validação
const pedidoSchema = Yup.object().shape({
  cliente: Yup.object().required("Selecione um cliente."),
  produtos: Yup.array()
    .of(
      Yup.object().shape({
        quantidade: Yup.number().min(1, "A quantidade deve ser pelo menos 1."),
      })
    )
    .min(1, "Selecione pelo menos um produto."),
});