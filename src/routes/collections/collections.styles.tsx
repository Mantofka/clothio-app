import styled from "styled-components";

import { PageContainer } from "../../global.styles";

export const Container = styled(PageContainer)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

export const TitleText = styled.h1`
  font-weight: 700;
  font-size: 52px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 20px;
  @media screen and (max-width: 640px) {
    font-size: 44px;
  }
  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;
