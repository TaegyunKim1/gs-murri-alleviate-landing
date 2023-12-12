import type { NextPage } from "next";
import {
  MainPcRoot,
  HoursToMonitorEveryWeekParent,
  HoursToMonitorContainer,
  Group,
  GroupChild,
  GroupItem,
  InTypicalCasesParent,
  InTypicalCases,
  GroupParent,
  CctvCamerasParent,
  CctvCameras1,
  Div6,
  HoursToMonitorEveryWeekGroup,
  HoursToMonitorContainer1,
  RectangleParent,
  GroupInner,
  RectangleDiv,
  GroupContainer,
  WithParent,
  With,
  LogoIcon1,
  GroupDiv,
  CctvCamerasGroup,
  CctvCameras2,
  Div8,
  HourToMonitorEveryWeekParent,
  HourToMonitorContainer,
  RectangleGroup,
  GroupChild1,
  GroupChild2,
  Div10,
  OperationalEfficiency,
  OperationalEfficiencyChild,
  Icon,
  YouCanEliminate,
  OperationalEfficiency1,
  RemoteMonitoring,
  IncreasedTrust,
  BestInsurance,
  ImprovedSecurity,
  CameraAgnostic,
  Div11,
  HowDoesItContainer,
  Review,
  Review1,
  Div12,
  InEastLa,
  ReviewByParent,
  ReviewBy,
  BoutiqueOwnerIn,
  Icon6,
  Div22,
  LogoIcon2,
  PangyoRo256beonGilBundang,
  Alcheraalcherainccom,
  AllevierIncPowered,
  TermsAndCondtionsParent,
  TermsAndCondtions,
  GroupChild3,
  PrivacyPolicy,
  Top2,
  TopChild,
  Top1,
  ReviewByParent1,
  StarIcon,
  Line,
  MainText,
} from "./styles";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";

const MainPC: NextPage = () => {
  return (
    <MainPcRoot>
      {/* 상단 메뉴바 */}
      <Header />
      {/* 그라데이션 */}
      {/* <MainPcChild />
      <MainPcItem />
      <MainPcInner />
      <EllipseDiv />
      <MainPcChild1 />
      <MainPcChild2 /> */}
      {/* Sections stuff */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />

      {/* <Div22>
        <LogoIcon2 alt="" src="/logo2.svg" />
        <PangyoRo256beonGilBundang>
          25, Pangyo-ro 256beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do,
          Republic of Korea
        </PangyoRo256beonGilBundang>
        <Alcheraalcherainccom>alchera@alcherainc.com</Alcheraalcherainccom>
        <AllevierIncPowered>
          © 2023 Allevier Inc. Powered by Alchera
        </AllevierIncPowered>
        <TermsAndCondtionsParent>
          <TermsAndCondtions>Terms and Condtions</TermsAndCondtions>
          <GroupChild3 />
          <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
        </TermsAndCondtionsParent>
        <Top2>
          <TopChild />
          <Top1>Top ↑</Top1>
        </Top2>
      </Div22> */}
    </MainPcRoot>
  );
};

export default MainPC;
