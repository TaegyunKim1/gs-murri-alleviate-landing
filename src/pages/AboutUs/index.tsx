import React from "react";
import { Container, Wrap } from "~/libs/aboutUs/styles";
import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";

function AboutUs() {
  return (
    <Container>
      <Wrap>
        <Section1 />
        <Section2 />
      </Wrap>
    </Container>
  );
}

export default AboutUs;
