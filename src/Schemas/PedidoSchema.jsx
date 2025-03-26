import * as Yup from 'yup';

const pedidoSchema = Yup.object().shape({
  cliente: Yup.object()
    .required("Selecione um cliente.")
    .test(
      'cliente-valido',
      'Cliente inválido',
      (cliente) => cliente && cliente.id && cliente.nome
    ),
  produtos: Yup.array()
    .of(
      Yup.object().shape({
        quantidade: Yup.number()
          .min(1, "A quantidade deve ser pelo menos 1.")
          .required("Quantidade é obrigatória")
      })
    )
    .min(1, "Selecione pelo menos um produto.")
    .test(
      'produtos-validos',
      'Adicione pelo menos um produto',
      (produtos) => produtos && produtos.some(p => p.quantidade > 0)
    )
});