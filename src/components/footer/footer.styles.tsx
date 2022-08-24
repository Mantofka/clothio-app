import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

import { PageContainer } from "../../global.styles";

export const Container = styled(PageContainer)`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 20px;
  border-top: 1px solid #707070;
`;

export const FooterText = styled.span`
  color: #fff;
`;

export const LinkText = styled.a`
  color: #7b62ff;
`;
