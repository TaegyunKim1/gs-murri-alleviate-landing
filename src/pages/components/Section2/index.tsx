import React from "react";
import {
  ColWrap,
  Div,
  Div1,
  MainText,
  ProblemsWeSolve,
  RetailersSayOrganizedContainer,
  Section2Img,
  SpiralIcon,
  SubTextInSection2,
  Wrap,
} from "../../../libs/main/section2/styles";

function Section2() {
  return (
    <Div>
      <Wrap>
        <SpiralIcon alt="" src="/small-spiral.svg" />
        <ProblemsWeSolve>Problems We Solve</ProblemsWeSolve>
      </Wrap>

      <Div1>
        <ColWrap>
          <Section2Img alt="" src="/section2-img1.png" />
          <MainText>
            {`Retailers say organized theft is biting into profits, \nbut internal issues may really be to blame`}
          </MainText>

          <SubTextInSection2>
            Retailers who blame organized theft for lower profits could be
            overstating crime’s impact to cover up internal flaws or
            self-inflicted problems, CNBC has learned. But behind closed doors,
            retailers are facing other issues they can better control, including
            theft by their own employees, that are contributing to losses,
            according to two sources who advise major retailers.
          </SubTextInSection2>
        </ColWrap>
        <ColWrap>
          <Section2Img alt="" src="/section2-img2.png" />
          <RetailersSayOrganizedContainer>
            <MainText>
              {`Retail Theft is a Big Problem.\nBut Who's Stealing May Shock You`}
            </MainText>
          </RetailersSayOrganizedContainer>
          <SubTextInSection2>
            Retailers and the industry often overlook a significant issue: a
            substantial portion of theft occurs internally. While external
            groups play a role, employee dishonesty has surged since the
            pandemic. According to the National Retail Federation (NRF) survey,
            57% of retailers cited "internal theft" as a growing risk in the
            past five years, with 20.7% stating it has become a much greater
            problem.
          </SubTextInSection2>
        </ColWrap>
      </Div1>
    </Div>
  );
}

export default Section2;
