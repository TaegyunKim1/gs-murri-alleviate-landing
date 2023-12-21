import styled, { keyframes } from "styled-components";

export const Banner = styled.div`
  margin-top: 100px;
  max-width: 1200px;
  width: 100%;
  height: 539px;
  display: flex;

  @media ${(props) => props?.theme.size.mobile} {
    flex-direction: column;
    margin-top: 80px;
    row-gap: 123px;
    height: 717px;
  }
`;

export const Banner1 = styled.div`
  flex: 1;
  margin-top: 47px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const LogoIcon = styled.img`
  height: 100px;
  width: 308px;

  @media ${(props) => props?.theme.size.mobile} {
    height: 59px;
    width: 180px;
  }
`;

export const AllevierLossPrevention = styled.b`
  color: #fff;
  margin-top: 15px;
  font-size: 70px;
  white-space: pre-line;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 40px;
  }
`;

export const TrustYourPeople = styled.div`
  color: #fff;
  margin-top: 15px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 16px;
    width: 330px;
    line-height: 20px;
  }
`;

export const TryFreeTrial = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 68px;
  text-align: center;
  color: #151515;
  cursor: pointer;
  display: flex;

  @media ${(props) => props?.theme.size.mobile} {
    justify-content: center;
  }
`;

export const TryFreeTrialChild = styled.div`
  width: 260px;
  height: 68px;
  border-radius: 10px;
  background-color: #33cc99;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props?.theme.size.mobile} {
    width: 330px;
    height: 68px;
  }
`;

export const TryFreeTrial1 = styled.div`
  line-height: 16px;
  font-weight: 500;
  font-size: 24px;
`;

// 애니메이션

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const orbitAnimation = keyframes`
  0% {
    transform: translateX(0px) translateY(0px);
  } 
  100% {
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: translateX(-20px) translateY(35zpx);
  }
  /* 100% {
    transform: translate(0%, 0%) translateX(250px);
  } */
`;

export const AnimationStuff = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${(props) => props?.theme.size.mobile} {
    /* margin-top: 120px; */
  }
`;

export const AiBackgroundText = styled.img`
  z-index: 0;
  width: 60%;
`;

export const AnimationIcon = styled.img`
  flex: 1;
  width: 539px;
  height: 539px;
`;

export const Circle = styled.img`
  position: absolute;
  width: 100%;
  /* animation: ${orbitAnimation} 10s linear infinite; 곡선을 따라 이동하는 애니메이션, 10초 동안 무한 반복 */

  z-index: 1;
`;

export const CircleItem = styled.img`
  position: absolute;
  z-index: 1;
  top: -50px;
  left: 5px;
  /* animation: ${rotate360} 10s linear infinite; 회전 애니메이션, 10초 동안 무한 반복 */
  animation: ${orbitAnimation} 1s linear infinite;
`;
