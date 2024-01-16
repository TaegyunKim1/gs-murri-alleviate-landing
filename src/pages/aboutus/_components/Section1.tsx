import router from "next/router";
import React from "react";
import {
  BigTitle,
  Description,
  LeftContentWrap,
  MainContainer,
  MiddleTitle,
  OurTeam,
  Row,
} from "~/libs/aboutUs/_components/styles";
import { ButtonText, ButtonWrap } from "~/libs/aboutUs/styles";

function Section1() {
  return (
    <Row>
      <MainContainer>
        <LeftContentWrap>
          <BigTitle>Our team:</BigTitle>
          <MiddleTitle>
            {"Pioneering a Safer World\nwith Advanced AI"}
          </MiddleTitle>
        </LeftContentWrap>
        <ButtonWrap onClick={() => router.push("/contact")}>
          <ButtonText>Try free trial</ButtonText>
        </ButtonWrap>

        <OurTeam src="/our-team.svg" />
      </MainContainer>
      <Description>
        Team Allevier is a spin-off team invested by Alchera Inc. and we are
        committed to make the small and medium sized retail owners happier than
        ever. We are young, creative minds dedicated to our ground-breaking
        solution, Allevier, and we aim to save your valuable time, create a
        better workplace culture, and increase your profits by making your
        business more scalable. Contact us for free 90 days trial and review our
        cost-effective solution’s pricing policy tailored to your needs. We are
        always here to support you 24/7 ready to hold your hands when you are
        stressed out.
      </Description>
    </Row>
  );
}

export default Section1;
