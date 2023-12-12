import React from "react";
import {
  Button,
  ButtonGroup,
  Container,
  ReviewWrap,
  SpiralIcon,
  SwapSpiralIcon,
  Title,
  TitleContainer,
  Wrap,
} from "../../../libs/main/section5/styles";
import ReviewItem from "./_components/ReviewItem";
import { data } from "../../../libs/main/section5/data";

function Section5() {
  return (
    <Container>
      <Wrap>
        <TitleContainer>
          <SpiralIcon alt="" src="/small-spiral.svg" />
          <Title>Read Others’ Success Stories:</Title>
        </TitleContainer>
        <ReviewWrap>
          {data.map((item) => {
            return <ReviewItem item={item} />;
          })}
        </ReviewWrap>
        <ButtonGroup>
          <Button src="/left-button.svg" alt="" />
          <Button src="/right-button.svg" alt="" />
        </ButtonGroup>
      </Wrap>
      <SwapSpiralIcon src="/swap-spiral.svg" alt="" />
    </Container>
  );
}

export default Section5;
