import styled from "styled-components";
import { Link } from "react-router-dom";

import { PageContainer } from "../../global.styles";

export const Container = styled(PageContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  width: 100vw;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  padding: 5px 10px;
  gap: 10px;
  height: 40px;
  min-width: 250px;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  color: ${({ theme }) => theme.textColor};
  ::placeholder,
  ::-webkit-input-placeholder,
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.textColor};
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 0.6;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  overflow-y: hidden;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  flex: 0.4;
  cursor: pointer;
`;
