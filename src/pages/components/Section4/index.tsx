import React from "react";
import IntroItem from "./_components/IntroItem";
import { data } from "../../../libs/main/section4/data";
import {
  BigSpiralIcon,
  Container,
  GridWrap,
} from "../../../libs/main/section4/styles";

function Section4() {
  return (
    <Container id="section4">
      <GridWrap>
        {data.map((dataItem: object) => {
          return <IntroItem dataItem={dataItem} />;
        })}
        <BigSpiralIcon src="/big-spiral.svg" alt="" />
      </GridWrap>
    </Container>
  );
}

export default Section4;
