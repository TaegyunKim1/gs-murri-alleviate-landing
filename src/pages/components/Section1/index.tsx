import React from "react";
import {
  Banner,
  Banner1,
  LogoIcon,
  AllevierLossPrevention,
  TrustYourPeople,
  TryFreeTrial,
  TryFreeTrialChild,
  TryFreeTrial1,
  AnimationIcon,
  AnimationStuff,
  AiBackgroundText,
  Circle,
  CircleItem,
} from "../../../libs/main/section1/styles";
import router from "next/router";

function Section1() {
  return (
    <Banner>
      <Banner1>
        <LogoIcon alt="" src="/logo.svg" />
        <AllevierLossPrevention>
          {`Peace of Mind\nfor CEOs`}
        </AllevierLossPrevention>
        <TrustYourPeople>
          Trusts your employees and reduces issues in the workplace.
        </TrustYourPeople>
        <TryFreeTrial>
          <TryFreeTrialChild>
            <TryFreeTrial1 onClick={() => router.push("/Contact")}>
              Try free trial
            </TryFreeTrial1>
          </TryFreeTrialChild>
        </TryFreeTrial>
      </Banner1>
      <AnimationStuff>
        <AiBackgroundText alt="" src="/ai-text.svg" />
        <Circle alt="" src="/temporary.svg" />
        {/* circle-item1.svg */}
        {/* <CircleItem alt="" src="/circle-item1.svg" /> */}
      </AnimationStuff>
    </Banner>
  );
}

export default Section1;
