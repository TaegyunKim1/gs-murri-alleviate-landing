import React, { useEffect, useState } from "react";
import IntroItem from "./_components/IntroItem";
import { data } from "../../../libs/main/section4/data";
import {
  BigSpiralIcon,
  Container,
  GridWrap,
  LoadMore,
  LoadMoreWrap,
} from "../../../libs/main/section4/styles";
import { size } from "~/libs/styles/theme";

function Section4() {
  const mobileSize = size.mobile_constant;
  const [innerWidth, setInnerWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const [isMobile, setIsMobile] = useState(innerWidth <= mobileSize);
  const [isClickLoadMore, setIsClickLoadMore] = useState(false);

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
    <Container id="section4">
      <GridWrap>
        {data.map((dataItem, index) => {
          if (isMobile && !isClickLoadMore && index >= 3) {
            return null; // 조건을 만족하지 않으면 렌더링을 하지 않음
          }

          return <IntroItem key={index} dataItem={dataItem} />;
        })}
        <BigSpiralIcon src="/big-spiral.svg" alt="" />
      </GridWrap>
      <LoadMoreWrap
        onClick={() => setIsClickLoadMore(true)}
        isClickLoadMore={isClickLoadMore}
      >
        <LoadMore>Load more ↓</LoadMore>
      </LoadMoreWrap>
    </Container>
  );
}

export default Section4;
