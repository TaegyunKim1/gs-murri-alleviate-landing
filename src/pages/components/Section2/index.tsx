import React, { useEffect, useState } from "react";
import {
  ColWrap,
  Div,
  Div1,
  Dot,
  DotsWrap,
  MainText,
  ProblemsWeSolve,
  RetailersSayOrganizedContainer,
  Section2Img,
  SpiralIcon,
  SubTextInSection2,
  Wrap,
} from "../../../libs/main/section2/styles";
import { size } from "~/libs/styles/theme";

function Section2() {
  const mobileSize = size.mobile_constant;

  const [innerWidth, setInnerWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  useEffect(() => {
    const init = () => {
      if (innerWidth <= mobileSize) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    init();
  }, [innerWidth]);

  const [focusMobileDot, setFocusMobileDot] = useState<number>(1);

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleFocusMobileDot = (focus: number) => {
    setFocusMobileDot(focus);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  useEffect(() => {
    // handleTouchEnd 내의 코드를 이곳으로 이동
    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) {
      // Swipe to the left
      setFocusMobileDot(2);

      setTouchStartX(0);
      setTouchEndX(0);
    } else if (swipeDistance < -50) {
      // Swipe to the right
      setFocusMobileDot(1);

      setTouchStartX(0);
      setTouchEndX(0);
    }
  }, [touchEndX]);

  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  return (
    <Div id="section2">
      <Wrap>
        <SpiralIcon alt="" src="/small-spiral.svg" />
        <ProblemsWeSolve>Problems We Solve</ProblemsWeSolve>
      </Wrap>

      <DotsWrap>
        <Dot
          onClick={() => handleFocusMobileDot(1)}
          isFocus={focusMobileDot === 1}
        />
        <Dot
          onClick={() => handleFocusMobileDot(2)}
          isFocus={focusMobileDot === 2}
        />
      </DotsWrap>

      <Div1 onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <ColWrap isFocus={focusMobileDot === 1}>
          <Section2Img alt="" src="/section2-img1.png" />
          <MainText>
            {isMobile
              ? `Retailers say organized theft is biting into profits, but internal issues may really be to blame`
              : `Retailers say organized theft is biting into profits, \nbut internal issues may really be to blame`}
          </MainText>
          <SubTextInSection2>
            Retailers who blame organized theft for lower profits could be
            overstating crime’s impact to cover up internal flaws or
            self-inflicted problems, CNBC has learned. But behind closed doors,
            retailers are facing other issues they can better control, including
            theft by their own employees, that are contributing to losses,
            according to two sources who advise major retailers.
          </SubTextInSection2>
        </ColWrap>
        <ColWrap isFocus={focusMobileDot === 2}>
          <Section2Img alt="" src="/section2-img2.png" />
          <RetailersSayOrganizedContainer>
            <MainText>
              {`Retail Theft is a Big Problem.\nBut Who's Stealing May Shock You`}
            </MainText>
          </RetailersSayOrganizedContainer>
          <SubTextInSection2>
            Retailers and the industry often overlook a significant issue: a
            substantial portion of theft occurs internally. While external
            groups play a role, employee dishonesty has surged since the
            pandemic. According to the National Retail Federation (NRF) survey,
            57% of retailers cited "internal theft" as a growing risk in the
            past five years, with 20.7% stating it has become a much greater
            problem.
          </SubTextInSection2>
        </ColWrap>
      </Div1>
    </Div>
  );
}

export default Section2;
