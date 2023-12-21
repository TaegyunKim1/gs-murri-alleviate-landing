import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 202px;

  @media ${(props) => props?.theme.size.mobile} {
    flex-direction: column;
    margin-top: 139px;
    margin-bottom: 92px;
  }
`;

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  row-gap: 40px;
  column-gap: 40px;
  width: 100%;
  max-width: 1200px;

  @media ${(props) => props?.theme.size.mobile} {
    grid-template-columns: repeat(1, auto);
    row-gap: 30px;
  }
`;

export const BigSpiralIcon = styled.img`
  position: absolute;
  left: 0;
  top: 133px;
  z-index: 1;
  width: 764px;
  height: 763.892px;

  @media ${(props) => props?.theme.size.mobile} {
    width: 350px;
    height: 349.95px;
    left: -50px;
    top: 70px;
  }
`;

export const LoadMoreWrap = styled.div`
  display: none;

  @media ${(props) => props?.theme.size.mobile} {
    display: ${(props) => (props.isClickLoadMore ? "none" : "flex")};
  }

  cursor: pointer;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 68px;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px; /* 테두리의 너비 조절 */
  }

  &::before {
    left: 0;
    background: linear-gradient(#33cc99, #151515);
  }

  &::after {
    right: 0;
    background: linear-gradient(#33cc99, #151515);
  }

  /* 위쪽 테두리 스타일 */
  border-top: 2px solid #3c9;
`;

export const LoadMore = styled.p`
  color: #3c9;
`;

// #33CC99, #151515
