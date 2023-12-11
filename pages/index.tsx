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

      {/* section4 */}
      {/* <Div10>
        <OperationalEfficiency>
          <OperationalEfficiencyChild />
          <Icon alt="" src="/1-icon.svg" />
          <YouCanEliminate>
            You can eliminate the need for constant CCTV monitoring, allowing
            your business to scale more efficiently.
          </YouCanEliminate>
          <OperationalEfficiency1>
            Operational Efficiency
          </OperationalEfficiency1>
        </OperationalEfficiency>
        <RemoteMonitoring>
          <OperationalEfficiencyChild />
          <Icon alt="" src="/2-icon.svg" />
          <YouCanEliminate>
            Allevier detects cash withdrawal instances in real-time, 24/7,
            processing millions of images and presenting only the most relevant
            clips for review, thus reducing the effort required for employee
            surveillance.
          </YouCanEliminate>
          <OperationalEfficiency1>Remote Monitoring</OperationalEfficiency1>
        </RemoteMonitoring>
        <IncreasedTrust>
          <OperationalEfficiencyChild />
          <Icon alt="" src="/1-icon1.svg" />
          <YouCanEliminate>
            As your employees realize that AI systems provide a transparent and
            equal level of surveillance, trust between management and staff will
            be strengthened, fostering a more harmonious workplace. No wrong
            accusations, less stress.
          </YouCanEliminate>
          <OperationalEfficiency1>Increased Trust</OperationalEfficiency1>
        </IncreasedTrust>
        <BestInsurance>
          <OperationalEfficiencyChild />
          <Icon alt="" src="/2-icon1.svg" />
          <YouCanEliminate>
            Our solution collects and stores video evidence of suspicious
            activities and enable you to effectively take a follow-up action and
            legal procedures when necessary.
          </YouCanEliminate>
          <OperationalEfficiency1>Best Insurance</OperationalEfficiency1>
        </BestInsurance>
        <ImprovedSecurity>
          <OperationalEfficiencyChild />
          <Icon alt="" src="/2-icon2.svg" />
          <YouCanEliminate>
            Allevier lets you enhance the security within the store while
            fostering trust and a reliable relationship with your employees. By
            using Allevier to detect internal shoplifting, you can eliminate
            unfounded suspicious and build a healthier culture of your stores.
          </YouCanEliminate>
          <OperationalEfficiency1>Improved Security</OperationalEfficiency1>
        </ImprovedSecurity>
        <CameraAgnostic>
          <OperationalEfficiencyChild />
          <Icon alt="" src="/2-icon3.svg" />
          <YouCanEliminate>
            Our cloud-based system integrates effortlessly with existing CCTV IP
            cameras within a day, requiring no additional on-site installation,
            thanks to its camera-agnostic cloud-based SaaS model.
          </YouCanEliminate>
          <OperationalEfficiency1>Camera Agnostic</OperationalEfficiency1>
        </CameraAgnostic>
      </Div10>
      <Div11>
        <HowDoesItContainer>
          <MainText>How does it work for you?</MainText>
          <MainText>Read Others’ Success Stories:</MainText>
        </HowDoesItContainer>
        <Review>
          <Review1>
            <Div12>
              <StarIcon alt="" src="/star-icon.svg" />
              <InEastLa>
                In East LA, where luxury is a dream for many, my boutique faced
                frequent thefts. Allevier's AI-driven system has been a
                lifesaver in such a theft-prone area. It efficiently works with
                our CCTV to detect incidents, significantly reducing our losses.
                This tool is crucial for stores in areas where economic
                challenges lead to higher theft rates.
              </InEastLa>
              <ReviewByParent>
                <ReviewBy>Review by</ReviewBy>
                <BoutiqueOwnerIn>
                  Boutique Owner in East Los Angeles
                </BoutiqueOwnerIn>
              </ReviewByParent>
              <Line />
            </Div12>
            <Div12>
              <StarIcon alt="" src="/star-icon.svg" />
              <InEastLa>
                Running a grocery store in Compton, an area where most can't
                afford luxuries, means dealing with constant theft. Allevier has
                transformed our security approach. Its AI detects theft swiftly,
                allowing us to focus on serving our community better. It's a
                game-changer for stores in economically challenged areas.
              </InEastLa>
              <Line />
              <ReviewByParent>
                <ReviewBy>Review by</ReviewBy>
                <BoutiqueOwnerIn>
                  Grocery Store Owner in Compton
                </BoutiqueOwnerIn>
              </ReviewByParent>
            </Div12>
            <Div12>
              <StarIcon alt="" src="/star-icon.svg" />
              <InEastLa>
                In Watts, where economic hardship is common, my gift shop was
                always at risk of theft. Allevier's AI technology has been a
                game-changer, identifying theft quickly and reducing our losses.
                It's a must-have for retail shops in similar neighborhoods where
                theft is a frequent concern.
              </InEastLa>
              <Line />
              <ReviewByParent>
                <ReviewBy>Review by</ReviewBy>
                <BoutiqueOwnerIn>Gift Shop Owner in Watts</BoutiqueOwnerIn>
              </ReviewByParent>
            </Div12>
            <Div12>
              <StarIcon alt="" src="/star-icon1.svg" />
              <InEastLa>
                In South Central LA, where most residents can't splurge on
                sports equipment, theft was a major issue for my store.
                Allevier's AI-driven theft detection has been a blessing,
                helping us manage this challenge effectively. It's essential for
                retail stores in areas with high theft risks due to economic
                disparities.
              </InEastLa>
              <Line />
              <ReviewByParent1>
                <ReviewBy>Review by</ReviewBy>
                <BoutiqueOwnerIn>
                  <MainText>a Sports Equipment Store Owner</MainText>
                  <MainText>in South Central LA</MainText>
                </BoutiqueOwnerIn>
              </ReviewByParent1>
            </Div12>
            <Div12>
              <StarIcon alt="" src="/star-icon1.svg" />
              <InEastLa>
                Boyle Heights, a neighborhood where luxuries are rare, posed a
                high theft risk for my bookstore. Allevier has been a
                revelation, with its AI accurately detecting suspicious
                activities. It's a boon for small businesses in areas where
                economic struggles lead to higher theft incidents.
              </InEastLa>
              <Line />
              <ReviewByParent>
                <ReviewBy>Review by</ReviewBy>
                <BoutiqueOwnerIn>
                  a Bookstore Owner in Boyle Heights
                </BoutiqueOwnerIn>
              </ReviewByParent>
            </Div12>
            <Div12>
              <StarIcon alt="" src="/star-icon1.svg" />
              <InEastLa>
                In Skid Row, where luxury items like jewelry are far out of
                reach for many, theft is a constant threat. Allevier's AI-driven
                system has been invaluable, enhancing our security in this
                high-risk area. It's an essential tool for any high-value retail
                store in economically challenged neighborhoods.
              </InEastLa>
              <Line />
              <ReviewByParent>
                <ReviewBy>Review by</ReviewBy>
                <BoutiqueOwnerIn>
                  a Jewelry Store Owner in Skid Row
                </BoutiqueOwnerIn>
              </ReviewByParent>
            </Div12>
            <Div12>
              <StarIcon alt="" src="/star-icon1.svg" />
              <InEastLa>
                In Baldwin Village, where high-end electronics are a luxury few
                can afford, theft was a significant concern. Allevier has
                exceeded our expectations in managing this risk with its
                AI-driven system. It's a must for electronics retailers in areas
                with high theft rates due to economic conditions.
              </InEastLa>
              <Line />
              <ReviewByParent1>
                <ReviewBy>Review by</ReviewBy>
                <BoutiqueOwnerIn>
                  <MainText>an Electronics Store Owner</MainText>
                  <MainText>in Baldwin Village</MainText>
                </BoutiqueOwnerIn>
              </ReviewByParent1>
            </Div12>
            <Div12>
              <StarIcon alt="" src="/star-icon1.svg" />
              <InEastLa>
                perating a clothing store in Lincoln Heights, where most can't
                afford the latest fashion, meant facing frequent thefts.
                Allevier has been a lifesaver with its efficient AI technology
                detecting thefts quickly. It's a crucial asset for retail shops
                in economically disadvantaged areas.
              </InEastLa>
              <Line />
              <ReviewByParent>
                <ReviewBy>Review by</ReviewBy>
                <BoutiqueOwnerIn>
                  a Clothing Store Owner in Lincoln Heights
                </BoutiqueOwnerIn>
              </ReviewByParent>
            </Div12>
            <Div12>
              <StarIcon alt="" src="/star-icon1.svg" />
              <InEastLa>
                In Huntington Park, where decorative items are considered a
                luxury, theft was a major challenge. Allevier's AI-driven system
                has significantly helped us in this high-theft-risk area. It's
                highly recommended for any retail store in similar economic
                environments.
              </InEastLa>
              <Line />
              <ReviewByParent1>
                <ReviewBy>Review by</ReviewBy>
                <BoutiqueOwnerIn>
                  <MainText>a Home Decor Store Owner</MainText>
                  <MainText>in Huntington Park</MainText>
                </BoutiqueOwnerIn>
              </ReviewByParent1>
            </Div12>
            <Div12>
              <StarIcon alt="" src="/star-icon1.svg" />
              <InEastLa>
                In Pico-Union, where toys are often a luxury, theft was a big
                concern, especially during holidays. Allevier has changed the
                game for us with its efficient AI theft detection, saving us
                time and reducing losses. It's an essential tool for retail
                stores in areas where economic hardships lead to increased
                theft.
              </InEastLa>
              <Line />
              <ReviewByParent>
                <ReviewBy>Review by</ReviewBy>
                <BoutiqueOwnerIn>
                  a Toy Store Owner in Pico-Union
                </BoutiqueOwnerIn>
              </ReviewByParent>
            </Div12>
          </Review1>
        </Review>
        <Icon6 alt="" src="/.svg" />
      </Div11>
      <Div22>
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
