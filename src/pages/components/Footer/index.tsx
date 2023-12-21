import React, { useEffect, useState } from "react";
import {
  Address,
  Container,
  Eamil,
  EtcContent,
  FooterEtcContent,
  LeftContent,
  LogoIcon,
  RightContent,
  Rights,
  SmallDot,
  Wrap,
} from "../../../libs/footer/styles";
import TopButton from "./_components/TopButton";
import { size } from "~/libs/styles/theme";
import MobileFooter from "./_components/MobileFooter";

function Footer() {
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

  if (isMobile) {
    return <MobileFooter />;
  }

  return (
    <Container>
      <Wrap>
        <LeftContent>
          <LogoIcon alt="" src="/logo.svg" />
          <Eamil>alchera@alcherainc.com</Eamil>
          <Address>
            25, Pangyo-ro 256beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do,
            Republic of Korea
          </Address>
          <Rights>© 2023 Allevier Inc. Powered by Alchera</Rights>
        </LeftContent>
        <RightContent>
          <TopButton />
          <FooterEtcContent>
            <EtcContent>Terms and Condtions</EtcContent>
            <SmallDot src="/small-dot.svg" alt="" />
            <EtcContent>Privacy Policy</EtcContent>
          </FooterEtcContent>
        </RightContent>
      </Wrap>
    </Container>
  );
}

export default Footer;
