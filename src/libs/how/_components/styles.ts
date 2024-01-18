import styled from "styled-components";

export const MainSection = styled.div`
  margin-top: 134px;
  display: flex;
  justify-content: space-between;

  @media ${(props) => props?.theme.size.mobile} {
    flex-direction: column;
    padding: 0px 15px;
    box-sizing: border-box;
    width: 100%;
    row-gap: 50px;
  }
`;

export const MainLeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  column-gap: 16px;

  @media ${(props) => props?.theme.size.mobile} {
    align-items: center;
  }
`;

export const MainText = styled.p`
  color: #fff;
  margin: 0px;
  font-family: Inter;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 40px;
  }
`;

export const LogoIcon = styled.img`
  margin-top: 14px;
  width: 228px;
  height: 74px;

  @media ${(props) => props?.theme.size.mobile} {
    width: 140px;
    height: 45.439px;
  }
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

  @media ${(props) => props?.theme.size.mobile} {
    margin-top: 45px;
    width: 100%;
  }
`;

export const ButtonText = styled.p`
  font-family: Inter;
  color: #151515;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`;

export const CCTV = styled.img`
  margin-right: 30px;
  width: 474.999px;
  height: 410.96px;

  @media ${(props) => props?.theme.size.mobile} {
    width: 100%;
    height: 285.537px;
  }
`;

export const DetailSection = styled.div`
  margin-top: 297px;

  @media ${(props) => props?.theme.size.mobile} {
    margin-top: 100px;
  }
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
  line-height: 52px;
  white-space: pre-line;

  @media ${(props) => props?.theme.size.mobile} {
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
  }
`;

export const SpiralIcon = styled.img`
  position: absolute;
  left: 0px;
  top: -14px;
  z-index: 0;

  @media ${(props) => props?.theme.size.mobile} {
    width: 40px;
    height: 40px;
    top: -7px;
    left: 10px;
  }
`;

export const DetailContext = styled.p`
  font-family: Inter;
  margin-left: 30px;
  color: #d9d9d9;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
`;

export const Margin = styled.div`
  margin-top: 222px;

  @media ${(props) => props?.theme.size.mobile} {
    margin-top: 222px;
  }
`;
