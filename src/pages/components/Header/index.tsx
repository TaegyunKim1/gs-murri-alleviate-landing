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

function Header() {
  const router = useRouter(); // useRouter로 현재 경로 가져오기

  // 라우트 경로가 "how"이면 폰트 색상을 변경하는 스타일
  const howRouteStyle = css`
    color: ${router.pathname === "/How" ? "#33CC99" : "inherit"};
  `;

  const aboutUsRouteStyle = css`
    color: ${router.pathname === "/AboutUs" ? "#33CC99" : "inherit"};
  `;

  return (
    <Gnb>
      <GnbWrapper>
        <LogoIcon
          alt=""
          src="/white-logo.svg"
          onClick={() => router.push("/")}
        />
        <GnbMenu>
          <Problems>Problems</Problems>
          <WhyAllevier>Why Allevier</WhyAllevier>
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
