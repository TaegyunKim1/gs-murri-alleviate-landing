import React from "react";
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
} from "./styles";
import TopButton from "./_components/TopButton";

function Footer() {
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
