import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #151515;
  padding-bottom: 174px;

  @media ${(props) => props?.theme.size.mobile} {
    padding-bottom: 89px;
  }
`;

export const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrap = styled.div`
  display: none;
  justify-content: center;
  align-items: center;

  @media ${(props) => props?.theme.size.mobile} {
    display: flex;
    border-radius: 5px;
    background: #33cc99;
    cursor: pointer;
    margin-top: 45px;
    width: calc(100% - 30px);
    height: 68px;
  }
`;

export const ButtonText = styled.div`
  color: #151515;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`;
