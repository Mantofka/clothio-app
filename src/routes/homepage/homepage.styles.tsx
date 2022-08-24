import styled, { css } from "styled-components";
import { PageContainer } from "../../global.styles";
import { motion } from "framer-motion";

export const Container = styled(PageContainer)`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const TitleText = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-size: clamp(36px, 7vw, 66px);
  max-width: 20ch;
`;

type ImageType = {
  dark: boolean;
};

export const Image = styled.img<ImageType>`
  min-height: 250px;
  max-height: 550px;
  opacity: 0.7;
  ${({ dark }) =>
    dark &&
    css`
      opacity: 0.7;
    `}
  float: right;
  object-fit: cover;
  @media screen and (max-width: 1020px) {
    width: 100%;
  }
`;

export const InformationContainer = styled.div`
  position: absolute;
  z-index: 100000;
`;

export const Button = styled(motion.button)`
  padding: 12px 24px;
  border-radius: 10px;
  color: #fff;
  background-color: #7b62ff;
  cursor: pointer;
  font-size: 18px;
  border: none;
  outline: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  @media screen and (max-width: 480px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;
