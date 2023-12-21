import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #151515;
  padding-bottom: 200px;

  @media ${(props) => props?.theme.size.mobile} {
    padding-bottom: 59px;
  }
`;

export const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
