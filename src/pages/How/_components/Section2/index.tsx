import React from "react";
import {
  DetailContext,
  DetailSection,
  DetailTitle,
  DetailTitleContainer,
  Margin,
  SpiralIcon,
} from "~/libs/how/_components/styles";

function Section2() {
  return (
    <DetailSection>
      <DetailTitleContainer>
        <SpiralIcon alt="" src="/small-spiral.svg" />
        <DetailTitle>{`Video analytics AI for retailers,
        Building trust`}</DetailTitle>
        <DetailContext>
          We have created a new AI solution, Allevier, for small and medium
          retailers. This technology detects cash withdrawals at Point-of-Sale
          locations and captures live video streams, isolating only suspicious
          incidents. These clips are automatically stored and accessible via our
          web and app dashboards. This historical record is invaluable for legal
          cases and employee monitoring.
        </DetailContext>
      </DetailTitleContainer>
      <Margin />
      <DetailTitleContainer>
        <SpiralIcon alt="" src="/small-spiral.svg" />
        <DetailTitle>Night and day ready</DetailTitle>
        <DetailContext>
          Allevier, our comprehensive solution, proactively sends alerts to
          assigned endpoints for immediate action in the event of anomalies,
          effectively saving both time and costs. Alchera's Visual AI, Allevier,
          dynamically adapts to in-store environments in real-time, offering
          additional features such as multiple streaming functions and offline
          video analysis. The advanced night mode, leveraging near-IR cameras,
          ensures continued functionality even in low-light conditions when
          stores are closed.
        </DetailContext>
      </DetailTitleContainer>
      <DetailContext>
        Allocate less than 10 minutes a day to employee monitoring instead of
        continuous 24-hour surveillance. Eliminate concerns about discrepancies
        between cash balances and bookkeeping, allowing you to focus your time
        on more strategic aspects of your business.
      </DetailContext>
    </DetailSection>
  );
}

export default Section2;
