import styled from "styled-components";

export const Div3 = styled.div`
  margin-top: 254px;
  color: #fff;
  background-color: "#fff";
  max-width: 1200px;
  width: 100%;
  text-align: center;
  font-size: 28px;
  margin-bottom: 215px;

  @media ${(props) => props?.theme.size.mobile} {
    margin-top: 103px;
    margin-bottom: 100px;
  }
`;

export const SaveYourTimeContainer = styled.b`
  line-height: 55px;
  display: flex;
  text-align: left;
  align-items: center;
  width: 1200px;

  @media ${(props) => props?.theme.size.mobile} {
    width: 100%;
    line-height: 28px;
  }
`;

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;

  @media ${(props) => props?.theme.size.mobile} {
    margin-bottom: 10px;
  }
`;

export const SpiralIcon = styled.img`
  z-index: 1;
  position: absolute;
  left: 0px;
  top: 0px;

  @media ${(props) => props?.theme.size.mobile} {
    width: 40px;
    height: 40px;
  }
`;

export const SaveTime = styled.b`
  position: absolute;
  z-index: 2;
  margin-left: 28px;
  margin-bottom: 20px;
  font-size: 48px;
  color: white;
  font-size: 48px;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 24px;
    margin-left: 14px;
  }
`;

export const TheWorldsSimplest = styled.div`
  margin-left: 28px;
  margin-bottom: 116px;
  font-size: 22px;
  line-height: 28px;
  font-weight: 300;
  text-align: left;
  display: inline-block;
  max-width: 1200px;
  width: 100%;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 16px;
    width: calc(100% - 40px);
    margin-left: 0px;
    margin-bottom: 30px;
  }
`;

export const ContentWrap = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 237px;
  padding-left: 46px;
  padding-right: 42px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  @media ${(props) => props?.theme.size.mobile} {
    flex-direction: column;
    row-gap: 40px;
  }
`;

export const Content1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 435px;
  height: 237px;

  @media ${(props) => props?.theme.size.mobile} {
    width: 100%;
  }
`;

export const TitleContent1 = styled.p`
  font-family: Inter;
  color: #777777;
  font-size: 20px;
  font-weight: 700;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 16px;
  }
`;

export const WrapDetailContent1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CctvWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CctvTitle = styled.p`
  font-family: Inter;
  color: #777777;
  font-size: 70px;
  font-weight: 800;
  margin: 0px;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 50px;
  }
`;

export const CctvSubTitle = styled.p`
  font-family: Inter;
  color: #777777;
  font-size: 16px;
  font-weight: 700;
  margin: 0px;
  white-space: pre-line;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 12px;
    white-space: pre;
  }
`;

export const EuqalIcon = styled.img`
  margin: 0px 32px 0px 32px;

  @media ${(props) => props?.theme.size.mobile} {
    width: 33.559px;
    height: 15.713px;
  }
`;

export const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 590px;
  height: 237px;

  @media ${(props) => props?.theme.size.mobile} {
    width: 100%;
  }
`;

export const WrapTitleContent2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContent2 = styled.p`
  font-family: Inter;
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 16px;
  }
`;

export const LogoIcon = styled.img`
  margin-left: 8px;
  width: 132px;
  height: 43px;
  flex-shrink: 0;

  @media ${(props) => props?.theme.size.mobile} {
    width: 73.831px;
    height: 24.131px;
  }
`;

export const WrapDetailContent2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DetailContent2 = styled.div`
  display: flex;
  justify-content: center;

  @media ${(props) => props?.theme.size.mobile} {
    align-items: center;
  }
`;

export const LeftDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 29px;
`;

export const Inpinite = styled.img`
  width: 102px;
  height: 50px;

  @media ${(props) => props?.theme.size.mobile} {
    width: 57.112px;
    height: 28.322px;
  }
`;

export const TextContent2 = styled.p`
  margin: 0px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  white-space: pre-line;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 16px;
    white-space: pre;
  }
`;

export const RightDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OneSign = styled.img`
  width: 109px;
  height: 80px;
  margin-bottom: 19px;

  @media ${(props) => props?.theme.size.mobile} {
    width: 60.941px;
    height: 44.895px;
    margin-bottom: 10px;
  }
`;
