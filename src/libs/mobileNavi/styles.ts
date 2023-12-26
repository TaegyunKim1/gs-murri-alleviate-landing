import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #151515;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 30px;
`;

export const MenuItemWrap = styled.div`
  width: 136px;
  height: 24px;
  text-align: end;
  margin-right: 29px;
`;

export const MenuItem = styled.p`
  font-family: Inter;
  cursor: pointer;
  color: white;
  font-size: 20px;
  font-weight: 500;
`;
