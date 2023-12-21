import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #151515;
  padding-bottom: 200px;

  @media ${(props) => props?.theme.size.mobile} {
    padding-bottom: 100px;
  }
`;

export const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props?.theme.size.mobile} {
    padding: 0px 15px;
  }
`;

export const CompleteImg = styled.img`
  margin-top: 102px;
  margin-bottom: 64px;
  width: 216px;
  height: 233.999px;
`;

export const Title = styled.p`
  margin: 0px;
  color: #33cc99;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  margin-bottom: 18px;

  @media ${(props) => props?.theme.size.mobile} {
    text-align: left;
    margin-bottom: 0px;
  }
`;

export const Context1 = styled.p`
  margin: 0px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */

  @media ${(props) => props?.theme.size.mobile} {
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const Context2 = styled.p`
  white-space: pre-line;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */

  @media ${(props) => props?.theme.size.mobile} {
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin: 0px;
  }
`;
