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
} from "./styles";

function Section1() {
  return (
    <Banner>
      <Banner1>
        <LogoIcon alt="" src="/logo.svg" width={"368px"} />
        <AllevierLossPrevention>
          {`Peace of Mind\nfor CEOs`}
        </AllevierLossPrevention>
        <TrustYourPeople>
          Trusts your employees and reduces issues in the workplace.
        </TrustYourPeople>
        <TryFreeTrial>
          <TryFreeTrialChild>
            <TryFreeTrial1>Try free trial</TryFreeTrial1>
          </TryFreeTrialChild>
        </TryFreeTrial>
      </Banner1>
      <AnimationIcon alt="" src="/animation.svg" />
    </Banner>
  );
}

export default Section1;
