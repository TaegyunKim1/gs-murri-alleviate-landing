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
  padding: 0px 40px 0px 40px;
  box-sizing: border-box;
  position: relative;
  background-color: #141414;
`;

export const Title = styled.p`
  z-index: 2;
  color: #33cc99;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`;

export const MainText = styled.p`
  color: #d9d9d9;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
`;

export const PointImage = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 40px;
  right: 40px;
`;
