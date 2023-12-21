import React, { useEffect, useState } from "react";
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
import { size } from "~/libs/styles/theme";

function Section5() {
  const mobileSize = size.mobile_constant;
  const [innerWidth, setInnerWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const [isMobile, setIsMobile] = useState(innerWidth <= mobileSize);

  useEffect(() => {
    const resizeListener = () => {
      const newInnerWidth = window.innerWidth;
      setInnerWidth(newInnerWidth);

      if (newInnerWidth <= mobileSize) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", resizeListener);

      // 컴포넌트가 언마운트될 때 이벤트 리스너 정리
      return () => {
        window.removeEventListener("resize", resizeListener);
      };
    }
  }, [mobileSize]);

  useEffect(() => {
    // 초기에 init 함수를 호출하여 isMobile 설정
    const init = () => {
      if (innerWidth <= mobileSize) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    init();
  }, [innerWidth, mobileSize]);

  return (
    <Container>
      <Wrap>
        <TitleContainer>
          <SpiralIcon alt="" src="/small-spiral.svg" />
          <Title>
            {isMobile
              ? "Read Others’\nSuccess Stories"
              : "Read Others’ Success Stories"}
          </Title>
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
