import React from "react";
import {
  Div3,
  SaveYourTimeContainer,
  Wrap,
  SpiralIcon,
  SaveTime,
  TheWorldsSimplest,
  ContentWrap,
  Content1,
  TitleContent1,
  WrapDetailContent1,
  CctvWrap,
  CctvTitle,
  CctvSubTitle,
  EuqalIcon,
  Content2,
  WrapTitleContent2,
  TitleContent2,
  LogoIcon,
  DetailContent2,
  Inpinite,
  TextContent2,
  LeftDetailContent,
  RightDetailContent,
  OneSign,
} from "./styles";

function Section3() {
  return (
    <Div3>
      <SaveYourTimeContainer>
        <Wrap>
          <SpiralIcon alt="" src="/small-spiral.svg" />
          <SaveTime>Save Time, Reduce Stress</SaveTime>
        </Wrap>
      </SaveYourTimeContainer>
      <TheWorldsSimplest>
        Elevate Security: AI-Powered Retail Vigilance for Effortless Detection
        and Video Clipping.
      </TheWorldsSimplest>
      <ContentWrap>
        <Content1>
          <TitleContent1>in typical cases</TitleContent1>
          <WrapDetailContent1>
            <CctvWrap>
              <CctvTitle>4</CctvTitle>
              <CctvSubTitle>CCTV cameras</CctvSubTitle>
            </CctvWrap>
            <EuqalIcon src="/equal.svg" />
            <CctvWrap>
              <CctvTitle>672</CctvTitle>
              <CctvSubTitle>{`Hours to monitor\nevery week`}</CctvSubTitle>
            </CctvWrap>
          </WrapDetailContent1>
        </Content1>
        <Content2>
          <WrapTitleContent2>
            <TitleContent2>with</TitleContent2>
            <LogoIcon alt="" src="/logo.svg" />
          </WrapTitleContent2>
          <DetailContent2>
            <LeftDetailContent>
              <Inpinite src="/inpinite.svg" />
              <TextContent2>CCTV cameras</TextContent2>
            </LeftDetailContent>
            <EuqalIcon src="/equal.svg" />
            <RightDetailContent>
              <OneSign src="/one-sign.svg" />
              <TextContent2>{"Hour to monitor\nevery week"}</TextContent2>
            </RightDetailContent>
          </DetailContent2>
        </Content2>
      </ContentWrap>
    </Div3>
  );
}

export default Section3;
