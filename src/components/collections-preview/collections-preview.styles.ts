import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  max-width: 1200px;
  justify-content: flex-start;
  @media screen and (max-width: 640px) {
    justify-content: center;
  }
`;
