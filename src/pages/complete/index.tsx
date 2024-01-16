import React from "react";
import {
  CompleteImg,
  Container,
  Wrap,
  Title,
  Context1,
  Context2,
} from "~/libs/complete/styles";

function Complete() {
  return (
    <Container>
      <Wrap>
        <CompleteImg src="/complete.svg" alt="" />
        <Title>Thank you for submitting your information!</Title>
        <Context1>
          Team Allevier will contact you via email within a day to guide you
          through our free trial process.
        </Context1>
        <Context2>
          {`If you have entered your phone number, our team member from South Korea (+82) will call you within 48 hours\nfor an official free trial consulting and implementation.`}
        </Context2>
      </Wrap>
    </Container>
  );
}

export default Complete;
