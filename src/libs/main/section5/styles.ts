import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 200px;
  z-index: 1;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Wrap = styled.div`
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
`;

export const TitleContainer = styled.div`
  position: relative;
`;

export const Title = styled.p`
  font-family: Inter;
  z-index: 1;
  margin: 0px 0px 63px 30px;
  color: #ffffff;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 24px;
    white-space: pre-line;
    margin-left: 25px;
  }
`;

export const SpiralIcon = styled.img`
  z-index: -1;
  position: absolute;
  left: 0px;
  top: 0px;

  @media ${(props) => props?.theme.size.mobile} {
    width: 40px;
    height: 40px;
  }
`;

export const ReviewWrap = styled.div`
  width: 3750px;
  display: flex;
  column-gap: 40px;
  transition: transform 1s;
  transform: ${(props) =>
    props.transformX
      ? `translateX(-${props.transformX}px)}`
      : "translateX(0px)"};

  @media ${(props) => props?.theme.size.mobile} {
    width: 100%;
    justify-content: flex-start;
    overflow-x: scroll;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  column-gap: 40px;

  @media ${(props) => props?.theme.size.mobile} {
    display: none;
  }
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

  @media ${(props) => props?.theme.size.mobile} {
    width: 190px;
    height: 190px;
    top: 350px;
    right: -100px;
  }
`;
