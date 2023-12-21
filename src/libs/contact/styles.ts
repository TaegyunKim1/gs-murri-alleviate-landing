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
  padding: 0px 15px;

  @media ${(props) => props?.theme.size.mobile} {
    align-items: flex-start;
  }
`;

export const BigTitle = styled.p`
  margin: 57px 0px 0px 0px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 40px;
    text-align: left;
    line-height: 50px;
  }
`;

export const MiddleTitle = styled.p`
  color: #33cc99;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  margin: 50px 0px 10px 0px;
  white-space: pre-line;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 20px;
    line-height: 30px;
    text-align: left;
    margin: 40px 0px 40px 0px;
  }
`;

export const SubTitle = styled.p`
  margin: 0px 0px 9px 0px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  white-space: pre-line;

  @media ${(props) => props?.theme.size.mobile} {
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 20px;
  }
`;

export const Context = styled.p`
  margin: 0px 0px 70px 0px;
  color: #a6a6a6;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  @media ${(props) => props?.theme.size.mobile} {
    text-align: left;
    color: #a6a6a6;
    font-size: 14px;
    margin: 0px 0px 103px 0px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 201px;
  height: 68px;
  cursor: pointer;
  background-color: #33cc99;
  border-radius: 5px;

  @media ${(props) => props?.theme.size.mobile} {
    width: 100%;
  }
`;

export const ButtonContent = styled.p`
  color: #151515;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  margin: 0px;
`;
