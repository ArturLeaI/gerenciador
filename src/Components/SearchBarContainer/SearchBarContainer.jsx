import React from "react";
import {
  Container,
  SearchInputContainer,
  SearchIcon,
  SearchInput,
} from "./SearchBarContainer.styles";
import RegisterButton from '../RegisterButton/registerButton'

function SearchBar({ placeholder, value, onChange, buttonText, onButtonClick }) {
  return (
    <Container>
      <SearchInputContainer>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </SearchInputContainer>
      <RegisterButton onClick={onButtonClick}>{buttonText}</RegisterButton>
    </Container>
  );
}

export default SearchBar;
