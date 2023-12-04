import styled from "styled-components";

export const Gnb = styled.div`
  z-index: 9999;
  width: 100%;
  height: 134px;
  color: #a6a6a6;
  display: flex;
  justify-content: center;
`;

export const GnbWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoIcon = styled.img`
  cursor: pointer;
`;

export const GnbMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  text-align: center;
`;

export const Problems = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
`;

export const WhyAllevier = styled.div`
  cursor: pointer;
  font-weight: 500;
`;

export const HowItWorks = styled.div`
  cursor: pointer;
  font-weight: 500;
`;

export const AboutUs = styled.div`
  cursor: pointer;
  font-weight: 500;
`;

export const Contact = styled.div`
  margin-left: 8px;
  cursor: pointer;
  width: 122px;
  height: 40px;
  text-align: center;
  color: #f8f8fa;
`;

export const TryFreeTrialChild = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: #33cc99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contact1 = styled.div`
  line-height: 16px;
  font-weight: 500;
`;
