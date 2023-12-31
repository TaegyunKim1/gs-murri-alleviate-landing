import styled from "styled-components";

export const Gnb = styled.div`
  width: 100%;
  height: 134px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  background-color: #141414;

  @media ${(props) => props?.theme.size.mobile} {
    height: 63px;
  }
`;

export const GnbWrapper = styled.div`
  font-family: Inter;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props?.theme.size.mobile} {
    margin: 0px 15px 0px 15px;
  }
`;

export const LogoIcon = styled.img`
  cursor: pointer;
  height: 49px;

  @media ${(props) => props?.theme.size.mobile} {
    height: 33px;
  }
`;

export const GnbMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  text-align: center;

  @media ${(props) => props?.theme.size.mobile} {
    display: none;
  }
`;

export const Problems = styled.p`
  font-family: Inter;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
`;

export const WhyAllevier = styled.p`
  font-family: Inter;
  cursor: pointer;
  font-weight: 500;
`;

export const HowItWorks = styled.p`
  font-family: Inter;
  cursor: pointer;
  font-weight: 500;
`;

export const AboutUs = styled.p`
  font-family: Inter;
  cursor: pointer;
  font-weight: 500;
`;

export const Contact = styled.div`
  font-family: Inter;
  margin-left: 8px;
  cursor: pointer;
  width: 122px;
  height: 40px;
  text-align: center;
  color: #141414;
`;

export const TryFreeTrialChild = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: #33cc99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contact1 = styled.p`
  font-family: Inter;
  line-height: 16px;
  font-weight: 500;
`;

export const MobileMenu = styled.img`
  @media ${(props) => props?.theme.size.mobile} {
    display: block;
    height: ${(props) => props?.height};
  }

  display: none;
  cursor: pointer;
`;
