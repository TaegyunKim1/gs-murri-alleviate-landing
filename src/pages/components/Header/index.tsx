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

function Header() {
  {
    /* 상단 메뉴바 */
  }
  return (
    <Gnb>
      <GnbWrapper>
        <LogoIcon alt="" src="/white-logo.svg" />
        <GnbMenu>
          <Problems>Problems</Problems>
          <WhyAllevier>Why Allevier</WhyAllevier>
          <HowItWorks>How it works</HowItWorks>
          <AboutUs>About Us</AboutUs>
          <Contact>
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
