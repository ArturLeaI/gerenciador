// components/Form/SubmitButton.jsx
import React from 'react';
import { SubmitFormButton } from './submitButton.styles';

export const SubmitButton = ({ children }) => (
  <SubmitFormButton type="submit">{children}</SubmitFormButton>
);