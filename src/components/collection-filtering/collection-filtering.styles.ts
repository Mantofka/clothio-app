import styled from "styled-components";

const flexBegginingPart = `
display: flex;
flex-direction: column;
`;

const DefaultText = styled.p`
  color: ${({ theme }) => theme.textColor};
`;

export const InlineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

export const Container = styled.div`
  width: 250px;
  border-right: 1px solid #707070;
  height: 100%;
`;

export const FilteringContainer = styled.div`
  ${flexBegginingPart}
  align-items: center;
  padding: 30px 15px;
  width: 100%;
`;

export const FilteringCriteriaContainer = styled.div`
  ${flexBegginingPart};
  width: 100%;
  &:not(:last-child) {
    padding-bottom: 10px;
  }
`;

export const CriteriaTitle = styled(DefaultText)`
  background: ${({ theme }) => theme.background};
  font-size: 22px;
`;

export const CriteriaTypeText = styled(DefaultText)`
  font-weight: 400;
  font-size: 18px;
`;

export const CountContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemCount = styled(DefaultText)`
  font-weight: 400;
  font-size: 18px;
`;
