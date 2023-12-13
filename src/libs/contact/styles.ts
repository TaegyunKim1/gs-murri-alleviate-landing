import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #151515;
  padding-bottom: 200px;
`;

export const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BigTitle = styled.p`
  margin: 57px 0px 0px 0px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px; /* 120% */
`;

export const MiddleTitle = styled.p`
  margin: 0px;
  color: #33cc99;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  margin: 50px 0px 10px 0px;
  white-space: pre-line;
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
`;

export const Context = styled.p`
  margin: 0px 0px 70px 0px;
  color: #a6a6a6;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
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
