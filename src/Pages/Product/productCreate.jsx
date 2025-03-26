import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Store/productSlice.jsx";
import { ValidacaoSchema } from "../../Schemas/ProdutoSchema.jsx";
import { SubmitButton } from "../../Components/SubmitButton/submitButton.jsx";
import Modal from "../../Components/Modal/modal.jsx";
import UploadContainer from "../../Components/UploadContainer/uploadContainer.jsx";
import { FormField, FormFieldGroup } from "../../Components/FormField/formField.jsx";

const ProductCreate = ({ onClose }) => {
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
    <Modal title="Cadastrar Produto" onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldGroup columns={2}>
          <FormField
            type="text"
            register={register}
            name="nome"
            placeholder="Nome do Produto"
            errors={errors}
            rows={4}
          />
          <FormField
            type="number"
            register={register}
            name="preco"
            placeholder="Preço"
            errors={errors}
          />
        </FormFieldGroup>

        <FormFieldGroup columns={1}>
          <FormField
            register={register}
            name="descricao"
            placeholder="Descrição completa"
            errors={errors}
            multiline={true}
            rows={4}
          />
        </FormFieldGroup>
        <UploadContainer
          control={control}
          errors={errors}
          fileInputRef={fileInputRef}
          handleUploadBoxClick={handleUploadBoxClick}
          handleFileChange={handleFileChange}
          fileName={fileName}
        />

        <SubmitButton>Cadastrar</SubmitButton>
      </form>
    </Modal>
  );
};

export default ProductCreate;
