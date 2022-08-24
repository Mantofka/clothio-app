import { createGlobalStyle } from "styled-components";
import styled, { css } from "styled-components";

import { ThemeType } from "./themes";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    }
`;

export const PagesPadding = "0 50px";

export const PageContainer = styled.div<{ isNavigation?: boolean }>`
  padding: ${PagesPadding};
  background: ${({ theme }) => theme.background};
  @media screen and (max-width: 640px) {
    padding: 0 20px;
  }
  ${({ isNavigation }) =>
    !isNavigation &&
    css`
      @media screen and (max-width: 480px) {
        padding: 0;
      }
    `}
`;

export default GlobalStyle;
