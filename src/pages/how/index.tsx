import React from "react";
import { Container, Wrap } from "~/libs/how/styles";
import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";

function How() {
  return (
    <Container>
      <Wrap>
        <Section1 />
        <Section2 />
      </Wrap>
    </Container>
  );
}

export default How;
