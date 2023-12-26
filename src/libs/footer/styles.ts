import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  padding: 75px 0px 72px 0px;
  box-sizing: border-box;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoIcon = styled.img`
  width: 151px;
  height: 49px;

  @media ${(props) => props?.theme.size.mobile} {
    margin-top: 70px;
  }
`;

export const Eamil = styled.p`
  font-family: Inter;
  margin: 33px 0px 5px 0px;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`;

export const Address = styled.p`
  font-family: Inter;
  color: #a6a6a6;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin: 0px 0px 96px 0px;

  @media ${(props) => props?.theme.size.mobile} {
    margin: 0px 0px 0px 0px;
  }
`;

export const Rights = styled.p`
  font-family: Inter;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin: 0px;

  @media ${(props) => props?.theme.size.mobile} {
    margin-top: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const FooterEtcContent = styled.div`
  margin-top: 196px;
  display: flex;
  column-gap: 10px;

  @media ${(props) => props?.theme.size.mobile} {
    margin-top: 50px;
  }
`;

export const EtcContent = styled.p`
  font-family: Inter;
  margin: 0px;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const SmallDot = styled.img``;

// mobile version
export const MobileContainer = styled.div`
  background-color: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 30px 15px 30px 15px;
  box-sizing: border-box;
`;

export const MobileButtonWrap = styled.div`
  position: absolute;
  width: 109px;
  height: 40px;
  right: 15px;
`;
