import styled from "styled-components";

export const MainSection = styled.div`
  margin-top: 134px;
  display: flex;
  justify-content: space-between;
`;

export const MainLeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;

  column-gap: 16px;
`;

export const MainText = styled.p`
  color: #fff;
  margin: 0px;
  font-family: Inter;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
`;

export const LogoIcon = styled.img`
  margin-top: 14px;
  width: 228px;
  height: 74px;
`;

export const ButtonWrap = styled.div`
  margin-top: 70px;
  width: 260px;
  height: 68px;
  border-radius: 5px;
  background: #33cc99;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.div`
  color: #151515;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`;

export const CCTV = styled.img`
  margin-right: 30px;
  width: 474.999px;
  height: 410.96px;
`;

export const DetailSection = styled.div`
  margin-top: 297px;
`;

export const DetailTitleContainer = styled.div`
  position: relative;
`;

export const DetailTitle = styled.p`
  position: sticky;
  z-index: 1;
  color: #fff;
  margin: 0px 0px 40px 30px;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  white-space: pre-line;
`;

export const SpiralIcon = styled.img`
  position: absolute;
  left: 0px;
  top: -14px;
  z-index: 0;
`;

export const DetailContext = styled.p`
  margin-left: 30px;
  color: #d9d9d9;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
`;

export const Margin = styled.div`
  margin-top: 222px;
`;
