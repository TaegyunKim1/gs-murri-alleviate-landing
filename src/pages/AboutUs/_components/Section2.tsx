import React from "react";
import {
  Wrap,
  SpiralIcon,
  Title,
  ContextWrap,
  Context,
  DetailContextWrap,
  DetailContextTitle,
  DetailContext,
  Margin,
} from "~/libs/aboutUs/_components/styles";

function Section2() {
  return (
    <ContextWrap>
      <Wrap>
        <SpiralIcon alt="" src="/small-spiral.svg" />
        <Title>Allevier story</Title>
      </Wrap>
      <Context>
        Allevier is the world’s leading solution that detects suspicious
        behavior within a store which involves any kind of loss caused by the
        employees. Allevier was developed by Alchera Inc., a global company.
        Alchera has been creating artificial intelligence-based cash detection
        algorithms and visual anomaly detection technologies since 2016.
        Allevier has processed millions of images and continuously trains and
        improves its loss detection algorithms. Our team is committed to make
        any store owner’s life easier by restoring the trust between them and
        their employees. We dream of the better, safer and happier retail
        environment without wrong accusation and stressful suspicions. We
        believe that it is imperative to manage people who work in the stores
        with less effort. Our brand name “Allevier” originated from the verb
        “Alleviate” with “-er” which means a hero who soothes your stress and
        pain. We are on a mission and we will never stop.
      </Context>
      <Margin />
      <Wrap>
        <SpiralIcon alt="" src="/small-spiral.svg" />
        <Title>ALCHERA supports Allevier</Title>
      </Wrap>
      <DetailContextWrap>
        <DetailContextTitle>Our mission</DetailContextTitle>
        <DetailContext>
          {`Headquartered in Pangyo, Seoul, Alchera Inc. has been at the forefront of AI innovation since its establishment in 2016.\nWe envision a future where Alchera's AI ecosystem benefits everyone.`}
        </DetailContext>
      </DetailContextWrap>
      <DetailContextWrap>
        <DetailContextTitle>Our future</DetailContextTitle>
        <DetailContext>
          As South Korea's leading Visual AI company, Alchera is dedicated to
          enhancing lives through the limitless power of AI. We operate two data
          centers, one in South Korea and another in Vietnam, with our US
          subsidiary expanding operations in California and beyond. Plans are
          underway to establish a business presence in the UAE next year.
        </DetailContext>
      </DetailContextWrap>
      <DetailContextWrap>
        <DetailContextTitle>Our potential</DetailContextTitle>
        <DetailContext>
          With a formidable team of over 350 employees worldwide, Alchera is
          capable of turning visionary ideas into reality. Our AI solutions are
          implemented in 350 million cameras globally, supported by ever-growing
          AI training datasets of over 15.7 billion instances. As an AI foundry,
          we design and apply highly reliable, scalable AI solutions tailored to
          your needs. Our end-to-end solutions, encompassing everything from
          data collection to AI services, are developed entirely in-house,
          setting Alchera apart in the AI industry.
        </DetailContext>
      </DetailContextWrap>
    </ContextWrap>
  );
}

export default Section2;
