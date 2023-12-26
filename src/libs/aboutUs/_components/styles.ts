import styled from "styled-components";

export const Row = styled.div`
  margin-top: 127px;
  display: flex;
  flex-direction: column;

  @media ${(props) => props?.theme.size.mobile} {
    margin-top: 67px;
  }
`;

export const MainContainer = styled.div`
  margin-bottom: 43px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media ${(props) => props?.theme.size.mobile} {
    flex-direction: column;
  }
`;

export const LeftContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BigTitle = styled.p`
  font-family: Inter;
  margin: 0px;
  color: #fff;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 40px;
  }
`;

export const MiddleTitle = styled.p`
  font-family: Inter;
  margin-top: 4px;
  white-space: pre-line;
  margin: 0px;
  color: #fff;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  @media ${(props) => props?.theme.size.mobile} {
    font-size: 30px;
  }
`;

export const OurTeam = styled.img`
  position: absolute;
  bottom: -43px;
  right: -250px;

  @media ${(props) => props?.theme.size.mobile} {
    position: static;
    margin-top: 54px;
    margin-left: 150px;
    width: 928.203px;
    height: 210.191px;
  }
`;

export const Description = styled.p`
  margin-top: 43px;
  color: #d9d9d9;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */

  @media ${(props) => props?.theme.size.mobile} {
    padding: 0px 15px;
  }
`;

export const ContextWrap = styled.div`
  margin-top: 321px;

  @media ${(props) => props?.theme.size.mobile} {
    margin-top: 104px;
  }
`;

export const Wrap = styled.div`
  margin-bottom: 43px;
  position: relative;
  width: 100%;
  height: 55px;
`;

export const SpiralIcon = styled.img`
  z-index: 1;
  position: absolute;
  left: 0px;
  top: 0px;

  @media ${(props) => props?.theme.size.mobile} {
    left: 15px;
    width: 40px;
    height: 40px;
  }
`;

export const Title = styled.b`
  font-family: Inter;
  position: absolute;
  z-index: 2;
  margin-left: 28px;
  font-size: 48px;
  color: white;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    margin-top: 4px;
    margin-left: 32px;
  }
`;

export const Context = styled.p`
  font-family: Inter;
  margin: 0px;
  color: #d9d9d9;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;

  @media ${(props) => props?.theme.size.mobile} {
    padding: 0px 15px;
    line-height: 24px;
  }
`;

export const DetailContextWrap = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  @media ${(props) => props?.theme.size.mobile} {
    margin-top: 44px;
    padding: 0px 15px;
  }
`;

export const DetailContextTitle = styled.p`
  font-family: Inter;
  margin: 0px;
  color: #fff;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 16px;
    color: #d9d9d9;
  }
`;

export const Margin = styled.div`
  margin-top: 207px;

  @media ${(props) => props?.theme.size.mobile} {
    margin-top: 154px;
  }
`;

export const DetailContext = styled.p`
  font-family: Inter;
  margin: 0px;
  white-space: pre-line;
  color: #d9d9d9;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;

  @media ${(props) => props?.theme.size.mobile} {
    color: #d9d9d9;
  }
`;
