import React from "react";
import {
  Address,
  Container,
  Eamil,
  EtcContent,
  FooterEtcContent,
  LogoIcon,
  MobileButtonWrap,
  MobileContainer,
  Rights,
  SmallDot,
} from "~/libs/footer/styles";
import TopButton from "./TopButton";

function MobileFooter() {
  return (
    <MobileContainer>
      <MobileButtonWrap>
        <TopButton />
      </MobileButtonWrap>
      <LogoIcon alt="" src="/logo.svg" />
      <Eamil>alchera@alcherainc.com</Eamil>
      <Address>
        25, Pangyo-ro 256beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do,
        Republic of Korea
      </Address>
      <FooterEtcContent>
        <EtcContent>Terms and Condtions</EtcContent>
        <SmallDot src="/small-dot.svg" alt="" />
        <EtcContent>Privacy Policy</EtcContent>
      </FooterEtcContent>
      <Rights>© 2023 Allevier Inc. Powered by Alchera</Rights>
    </MobileContainer>
  );
}

export default MobileFooter;
