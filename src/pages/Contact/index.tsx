import { Input } from "@chakra-ui/react";
import router from "next/router";
import React from "react";
import {
  Container,
  Wrap,
  BigTitle,
  MiddleTitle,
  SubTitle,
  Context,
  ButtonWrap,
  ButtonContent,
} from "~/libs/contact/styles";

function Contact() {
  return (
    <Container>
      <Wrap>
        <BigTitle>New Year’s Promotion Until the end of 2023</BigTitle>
        <MiddleTitle>
          {`Get your free 90 days trials by\nsubmitting your info!`}
        </MiddleTitle>
        <SubTitle>
          {`Contact Team Allevier to get our pricing policy, and free installation\nof Allevier into your camera network on site!`}
        </SubTitle>
        <Context>
          *The next promotion is to be determined in the first quarter of 2024
        </Context>
        <Input
          placeholder="Name"
          maxW={"700px"}
          height={"50px"}
          backgroundColor={"#F5F5F5"}
          mb={"20px"}
        />
        <Input
          placeholder="Email"
          maxW={"700px"}
          height={"50px"}
          backgroundColor={"#F5F5F5"}
          mb={"20px"}
        />
        <Input
          placeholder="ZIP code"
          maxW={"700px"}
          height={"50px"}
          backgroundColor={"#F5F5F5"}
          mb={"20px"}
        />
        <Input
          placeholder="Phone Number (optional)"
          maxW={"700px"}
          height={"50px"}
          backgroundColor={"#F5F5F5"}
          mb={"20px"}
        />
        <Input
          placeholder="Retail cateory"
          maxW={"700px"}
          height={"50px"}
          backgroundColor={"#F5F5F5"}
          mb={"20px"}
        />
        <Input
          placeholder="Camera Network"
          maxW={"700px"}
          height={"50px"}
          backgroundColor={"#F5F5F5"}
          mb={"20px"}
        />
        <Input
          placeholder="Number of employees"
          maxW={"700px"}
          height={"50px"}
          backgroundColor={"#F5F5F5"}
          mb={"50px"}
        />
        <ButtonWrap onClick={() => router.push("/Complete")}>
          <ButtonContent>Submit</ButtonContent>
        </ButtonWrap>
      </Wrap>
    </Container>
  );
}

export default Contact;
