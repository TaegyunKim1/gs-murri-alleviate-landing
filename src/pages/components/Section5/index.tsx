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

  const [currentPage, setCurrentPage] = useState(0);
  const [transformX, setTransformX] = useState(0);

  const handleCarousel = (type: string) => {
    if (type === "next" && currentPage >= 3) {
      return;
    }

    if (type !== "next" && currentPage <= 0) {
      return;
    }

    if (type === "next") {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

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

  // 케러셸 구현
  useEffect(() => {
    if (currentPage === 3) {
      setTransformX(3680);
    } else {
      setTransformX(currentPage * 1200);
    }
  }, [currentPage]);

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
        <ReviewWrap transformX={transformX}>
          {data.map((item) => {
            return <ReviewItem item={item} />;
          })}
        </ReviewWrap>
        <ButtonGroup>
          <Button
            src="/left-button.svg"
            alt=""
            onClick={() => {
              handleCarousel("previous");
            }}
          />
          <Button
            src="/right-button.svg"
            alt=""
            onClick={() => {
              handleCarousel("next");
            }}
          />
        </ButtonGroup>
      </Wrap>
      <SwapSpiralIcon src="/swap-spiral.svg" alt="" />
    </Container>
  );
}

export default Section5;
