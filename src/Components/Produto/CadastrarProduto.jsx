import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Store/productSlice.jsx";
import { ValidacaoSchema } from "../../Schemas/ProdutoSchema.jsx";
import {
  ModalOverlay,
  CadastroContainer,
  Titulo,
  Campo,
  Label,
  Input,
  TextArea,
  UploadContainer,
  UploadLabel,
  UploadInput,
  UploadBox,
  UploadText,
  BotaoSalvar,
  InputContainer,
  DescricaoContainer,
  FecharBotao,
} from "./CadastrarProduto.styles.jsx";

const CadastroProduto = ({ onClose }) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidacaoSchema),
  });

  const onSubmit = async (data) => {
    try {
      if (!data.foto || data.foto.length === 0) {
        throw new Error("Nenhuma imagem foi selecionada.");
      }

      const file = data.foto[0];
      const fotoBase64 = await fileToBase64(file);

      const productWithId = {
        ...data,
        id: Date.now(),
        foto: fotoBase64,
      };

      dispatch(addProduct(productWithId));
      reset();
      onClose();
      alert("Produto cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      alert("Erro ao salvar produto. Verifique o console para mais detalhes.");
    }
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleUploadBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event, onChange) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onChange([file]);
    } else {
      setFileName("");
      onChange(null);
    }
  };

  return (
    <ModalOverlay>
      <CadastroContainer>
        <Titulo>Cadastrar produto</Titulo>
        <FecharBotao onClick={onClose}>X</FecharBotao>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Campo>
            <InputContainer>
              <Label>Nome</Label>
              <Input type="text" placeholder="Digite o nome" {...register("nome")} />
              {errors.nome && <span style={{ color: "red" }}>{errors.nome.message}</span>}
            </InputContainer>

            <InputContainer>
              <Label>Preço</Label>
              <Input type="number" placeholder="Digite o preço" {...register("preco")} />
              {errors.preco && <span style={{ color: "red" }}>{errors.preco.message}</span>}
            </InputContainer>
          </Campo>

          <DescricaoContainer>
            <Label>Descrição</Label>
            <TextArea placeholder="Digite a descrição" rows={4} {...register("descricao")} />
            {errors.descricao && <span style={{ color: "red" }}>{errors.descricao.message}</span>}
          </DescricaoContainer>

          <UploadContainer>
            <UploadLabel htmlFor="foto">Foto do produto</UploadLabel>
            <UploadBox onClick={handleUploadBoxClick}>
              <Controller
                name="foto"
                control={control}
                defaultValue=""
                render={({ field: { onChange } }) => (
                  <UploadInput
                    type="file"
                    accept="image/jpeg, image/png"
                    id="foto"
                    ref={fileInputRef}
                    onChange={(e) => handleFileChange(e, onChange)}
                  />
                )}
              />
              <UploadText>
                Arraste e solte ou clique para fazer o upload da foto
              </UploadText>
              <UploadText>JPG e PNG, somente</UploadText>
              {fileName && <UploadText>Arquivo selecionado: {fileName}</UploadText>}
            </UploadBox>
            {errors.foto && <span style={{ color: "red" }}>{errors.foto.message}</span>}
          </UploadContainer>

          <BotaoSalvar type="submit">Salvar</BotaoSalvar>
        </form>
      </CadastroContainer>
    </ModalOverlay>
  );
};

export default CadastroProduto;