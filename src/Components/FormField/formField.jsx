// components/Form/FormField.jsx
import React from 'react';
import { ErrorMessage, InputGroup, Input, FormGrid, TextAreaInput } from './formField.styles';

export const FormFieldGroup = ({ columns, children }) => (
    <FormGrid $cols={columns} data-columns={columns} >{children}</FormGrid>
  );

export const FormField = ({
  register,
  name,
  placeholder,
  errors,
  type = 'text',
  onChange,
  multiline = false,
  rows = 4
}) => (
  <InputGroup>
    {multiline ? (
      <TextAreaInput
        {...register(name, onChange && { onChange })}
        placeholder={placeholder}
        error={!!errors?.[name]}
        rows={rows}
      />
    ) : (
      <Input
        {...register(name, onChange && { onChange })}
        type={type}
        placeholder={placeholder}
        error={!!errors?.[name]}
      />
    )}
    {errors?.[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
  </InputGroup>
);



