import styled from "styled-components";

export const ItemWrap = styled.div`
  width: 373px;
  height: 354px;
  border-right: 2px solid #33cc99;
  display: flex;
  flex-direction: column;

  @media ${(props) => props?.theme.size.mobile} {
    width: 420px;
    padding-right: 15px;
  }
`;

export const StarsIcon = styled.img`
  width: 115px;
  height: 19px;
`;

export const Review = styled.p`
  font-family: Inter;
  width: 315px;
  color: #d9d9d9;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  @media ${(props) => props?.theme.size.mobile} {
    width: 254px;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
  }
`;

export const ReviewBy = styled.p`
  font-family: Inter;
  margin-top: 20px;
  margin-bottom: 0px;
  color: #33cc99;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const Reviewer = styled.p`
  margin: 4px 0px 0px 0px;
  color: #33cc99;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;
