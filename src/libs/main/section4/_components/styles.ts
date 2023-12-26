import styled from "styled-components";

export const Wrap = styled.div`
  z-index: 2;
  width: 373px;
  height: 354px;
  flex-shrink: 0;
  border: 2px solid #3c9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px 0px 40px;
  box-sizing: border-box;
  position: relative;
  background-color: #141414;

  @media ${(props) => props?.theme.size.mobile} {
    width: 100%;
    align-items: flex-start;
  }
`;

export const Title = styled.p`
  font-family: Inter;
  z-index: 2;
  color: #33cc99;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const MainText = styled.p`
  color: #d9d9d9;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media ${(props) => props?.theme.size.mobile} {
    margin: 0px;
  }
`;

export const PointImage = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 40px;
  right: 40px;

  @media ${(props) => props?.theme.size.mobile} {
    width: 50px;
    height: 50px;
  }
`;
