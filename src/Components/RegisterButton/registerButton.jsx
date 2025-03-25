import React from "react";
import { PlusButton, PlusIcon } from './registerButton.styles';

function RegisterButton({ children, onClick }) {  
  return (
    <PlusButton onClick={onClick}>
      <PlusIcon />
      {children}
    </PlusButton>
  );
}

export default RegisterButton;