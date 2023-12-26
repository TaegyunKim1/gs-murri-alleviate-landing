import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 240px;
  max-width: 1200px;
  width: 100%;
  font-size: 20px;

  @media ${(props) => props?.theme.size.mobile} {
    margin-top: 168px;
  }
`;

export const Wrap = styled.div`
  position: relative;
  height: 60px;
  margin-bottom: 63px;

  @media ${(props) => props?.theme.size.mobile} {
    height: 40px;
    margin-bottom: 35px;
  }
`;

export const SpiralIcon = styled.img`
  z-index: 1;
  position: absolute;
  left: 0px;
  top: 0px;

  @media ${(props) => props?.theme.size.mobile} {
    width: 40px;
    height: 40px;
  }
`;

export const ProblemsWeSolve = styled.b`
  position: absolute;
  z-index: 2;
  margin-left: 28px;
  font-size: 48px;
  color: white;

  @media ${(props) => props?.theme.size.mobile} {
    margin-left: 18px;
    margin-top: 4px;
    font-size: 24px;
  }
`;

export const DotsWrap = styled.div`
  display: none;

  @media ${(props) => props?.theme.size.mobile} {
    width: 100%;
    justify-content: center;
    display: flex;
    column-gap: 12px;
    margin-bottom: 17px;
  }
`;

export const Dot = styled.div`
  cursor: pointer;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.isFocus ? "#33cc99" : "#A6A6A6")};
`;

export const Div1 = styled.div`
  display: flex;
  column-gap: 40px;

  @media ${(props) => props?.theme.size.mobile} {
    /* TODO: 임시처리 */
    flex-direction: column;
  }
`;

export const RetailersSayOrganizedContainer = styled.b``;
export const SubTextInSection2 = styled.div`
  white-space: pre-line;
  margin-top: 10px;
  font-size: 16px;
  line-height: 26px;
  color: #d9d9d9;
`;
export const Section2Img = styled.img`
  margin-bottom: 30px;

  height: 250px;
  object-fit: cover;
`;

export const MainText = styled.p`
  font-family: Inter;
  line-height: 30px;
  white-space: pre-line;
  color: #fff;
  font-weight: bold;
  margin: 0;
  font-size: 20px;

  @media ${(props) => props?.theme.size.mobile} {
    font-size: 18px;
  }
`;

export const ColWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media ${(props) => props?.theme.size.mobile} {
    width: 100%;
    display: ${(props) => (props.isFocus ? "flex" : "none")};
  }
`;
