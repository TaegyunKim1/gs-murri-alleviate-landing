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
  Problems,
  TryFreeTrialChild,
  WhyAllevier,
} from "./styles";

function Header() {
  {
    /* 상단 메뉴바 */
  }
  return (
    <Gnb>
      <GnbWrapper>
        <LogoIcon alt="" src="/logo.svg" width={"180px"} height={"49px"} />
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
      </GnbWrapper>
    </Gnb>
  );
}

export default Header;
