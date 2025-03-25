import React from "react";
import { Controller } from "react-hook-form";
import {
    Container,
  UploadLabel,
  UploadInput,
  UploadBox,
  UploadText,
} from "././uploadContainer.styles";

const UploadContainer = ({
  control,
  errors,
  fileInputRef,
  handleUploadBoxClick,
  handleFileChange,
  fileName,
}) => {
  return (
    <Container>
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
    </Container>
  );
};

export default UploadContainer;