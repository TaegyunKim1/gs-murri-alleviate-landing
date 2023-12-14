import React from "react";
import {
  AboutUs,
  Contact,
  Contact1,
  Gnb,
  GnbMenu,
  GnbWrapper,
  HowItWorks,
  LogoIcon,
  MobileMenu,
  Problems,
  TryFreeTrialChild,
  WhyAllevier,
} from "../../../libs/header/styles";
import { useRouter } from "next/router";
import { css } from "styled-components";

import { elementScrollIntoView } from "seamless-scroll-polyfill";

function Header() {
  const router = useRouter(); // useRouter로 현재 경로 가져오기

  const howRouteStyle = css`
    color: ${router.pathname === "/How" ? "#33CC99" : "inherit"};
  `;

  const aboutUsRouteStyle = css`
    color: ${router.pathname === "/AboutUs" ? "#33CC99" : "inherit"};
  `;

  const handleMoveTargetElement = (id: string) => {
    const targetElement = document.getElementById(id);

    elementScrollIntoView(targetElement, {
      behavior: "smooth",
    });
  };

  const handleMenuClick = (id: string) => {
    const targetElement = document.getElementById(id);
    // 현재 URL이 "/"인 경우에만 스크롤 이동
    if (router.pathname === "/") {
      elementScrollIntoView(targetElement, {
        behavior: "smooth",
      });
    } else {
      // 페이지 이동 후에 스크롤 이동
      router.push("/").then(() => {
        // 타겟 엘리먼트가 렌더링되어 있는지 확인
        if (targetElement) {
          elementScrollIntoView(targetElement, {
            behavior: "smooth",
          });
        } else {
          handleMoveTargetElement(id);
        }
      });
    }
  };

  return (
    <Gnb>
      <GnbWrapper>
        <LogoIcon
          alt=""
          src="/white-logo.svg"
          onClick={() => router.push("/")}
        />
        <GnbMenu>
          <Problems onClick={() => handleMenuClick("section2")}>
            Problems
          </Problems>
          <WhyAllevier onClick={() => handleMenuClick("section4")}>
            Why Allevier
          </WhyAllevier>
          <HowItWorks onClick={() => router.push("/How")} css={howRouteStyle}>
            How it works
          </HowItWorks>
          <AboutUs
            onClick={() => router.push("/AboutUs")}
            css={aboutUsRouteStyle}
          >
            About Us
          </AboutUs>
          <Contact onClick={() => router.push("/Contact")}>
            <TryFreeTrialChild>
              <Contact1>Contact</Contact1>
            </TryFreeTrialChild>
          </Contact>
        </GnbMenu>
        <MobileMenu src="/hamburger-menu.svg" />
      </GnbWrapper>
    </Gnb>
  );
}

export default Header;
