import React from "react";
import IntroItem from "./_components/IntroItem";
import { data } from "./data";
import { BigSpiralIcon, Container, GridWrap } from "./styles";

function Section4() {
  return (
    <Container>
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
