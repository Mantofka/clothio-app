import styled from "styled-components";

import { motion } from "framer-motion";

export const Image = styled.div<{ image?: string }>`
  position: relative;
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 90%;
  background-image: url(${({ image }) => image ?? ""});
  background-size: cover;
  background-position: center;
  transition: all 250ms ease-in-out;
`;

export const Container = styled(motion.div)`
  cursor: pointer;
  position: relative;
  width: 210px;
  height: 280px;
  border-radius: 10px;
  &:hover {
    ${Image} {
      opacity: 0.4;
      transform: scale(1.1);
    }
  }
  overflow: hidden;
`;

export const ItemTitle = styled(motion.p)`
  color: ${({ theme }) => theme.textColor};
  font-weight: 700;
  font-size: 22px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
