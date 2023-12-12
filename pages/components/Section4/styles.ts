import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  row-gap: 40px;
  column-gap: 40px;
  width: 100%;
  max-width: 1200px;
`;

export const BigSpiralIcon = styled.img`
  position: absolute;
  left: 0;
  top: 133px;
  z-index: 1;
  width: 764px;
  height: 763.892px;
`;

// big-spiral.svg
