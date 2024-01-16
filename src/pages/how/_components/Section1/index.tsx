import router from "next/router";
import React from "react";
import {
  MainLeftSection,
  MainSection,
  MainText,
  Row,
  LogoIcon,
  ButtonWrap,
  ButtonText,
  CCTV,
} from "~/libs/how/_components/styles";

function Section1() {
  return (
    <MainSection>
      <MainLeftSection>
        <Row>
          <MainText>What is</MainText>
          <LogoIcon alt="" src="/logo.svg" />
        </Row>
        <MainText>And how does</MainText>
        <MainText>it work?</MainText>
        <ButtonWrap onClick={() => router.push("/contact")}>
          <ButtonText>Try free trial</ButtonText>
        </ButtonWrap>
      </MainLeftSection>
      <CCTV alt="" src="/cctv.svg" />
    </MainSection>
  );
}

export default Section1;
