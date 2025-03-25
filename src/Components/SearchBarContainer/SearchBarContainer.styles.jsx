import styled from "styled-components";
import { FiSearch } from "react-icons/fi";


export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  justify-content: space-between;
  margin-top: 15px;
  width: 98%;
`;
export const SearchInputContainer = styled.div`
  display: flex;
  margin-left: px;
  align-items: center;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 6px 10px;
  width: 40%; 
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus-within {
    border-color: #3145fe;
    box-shadow: 0 0 0 2px rgba(114, 173, 243, 0.2);
  }
`;
export const SearchIcon = styled(FiSearch)`
  color: #666;
  margin-right: 8px;
  font-size: 16px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  flex: 1;
  background: transparent;
  padding: 4px;

  &::placeholder {
    color: #999;
  }
`;