import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 200px;
  z-index: 1;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const TitleContainer = styled.div`
  position: relative;
`;

export const Title = styled.p`
  z-index: 1;
  margin: 0px 0px 63px 30px;
  color: #ffffff;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
`;

export const SpiralIcon = styled.img`
  z-index: -1;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const ReviewWrap = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 40px;
`;

export const ButtonGroup = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  column-gap: 40px;
`;

export const Button = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const SwapSpiralIcon = styled.img`
  position: absolute;
  z-index: -1;
  right: 104px;
  top: 200px;
`;
