import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  ChakraProvider,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
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
    <ChakraProvider>
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
          <Menu>
            <MenuButton
              as={Button}
              width={"100%"}
              maxW={"700px"}
              height={"50px"}
              backgroundColor={"#F5F5F5"}
              mb={"20px"}
              rightIcon={<ChevronDownIcon />}
              textAlign={"start"}
              color={"#718096"}
              fontWeight={400}
            >
              Retail cateory
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              width={"100%"}
              maxW={"700px"}
              height={"50px"}
              backgroundColor={"#F5F5F5"}
              mb={"20px"}
              rightIcon={<ChevronDownIcon />}
              textAlign={"start"}
              color={"#718096"}
              fontWeight={400}
            >
              Camera Network
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              width={"100%"}
              maxW={"700px"}
              height={"50px"}
              backgroundColor={"#F5F5F5"}
              mb={"50px"}
              rightIcon={<ChevronDownIcon />}
              textAlign={"start"}
              color={"#718096"}
              fontWeight={400}
            >
              Number of employees
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>

          <ButtonWrap onClick={() => router.push("/Complete")}>
            <ButtonContent>Submit</ButtonContent>
          </ButtonWrap>
        </Wrap>
      </Container>
    </ChakraProvider>
  );
}

export default Contact;
