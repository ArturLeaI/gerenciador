import * as yup from "yup";

export const ValidacaoSchema = yup.object().shape({
  nome: yup.string().required("O nome é obrigatório"),
  preco: yup
    .number()
    .typeError("O preço deve ser um número")
    .positive("O preço deve ser um valor positivo")
    .required("O preço é obrigatório"),
  descricao: yup.string().required("A descrição é obrigatória"),
  foto: yup
    .mixed()
    .required("A foto é obrigatória")
    .test("fileType", "Formato de arquivo inválido", (value) => {
      if (value && value[0]) {
        return ["image/jpeg", "image/png"].includes(value[0].type);
      }
      return false;
    }),
});