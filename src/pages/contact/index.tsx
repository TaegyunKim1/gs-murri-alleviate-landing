import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  ChakraProvider,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import router from "next/router";
import React, { useState } from "react";
import postSubmit from "~/libs/api/postSubmit";
import { data } from "~/libs/contact/data";
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
  // submit data
  const [name, setName] = useState("");
  const [email, setEamil] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [retailCategory, setRetailCategory] = useState("");
  const [cameraNetwork, setCameraNetwork] = useState("");
  const [employeesNum, setEmployeesNum] = useState("");

  // error data
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [retailCategoryError, setRetailCategoryError] = useState("");
  const [cameraNetworkError, setCameraNetworkError] = useState("");
  const [employeesNumError, setEmployeesNumError] = useState("");

  const handlePostSubmit = (
    _name: string,
    _email: string,
    _zipCode: string,
    _phoneNumber: string,
    _retailCategory: string,
    _cameraNetwork: string,
    _employeesNum: string
  ) => {
    if (name.length === 0) {
      setNameError("Name is required");
      return;
    }

    setNameError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (email.length === 0) {
      setEmailError("Email is required");
      return;
    }

    setEmailError("");

    if (zipCode.length === 0) {
      setZipCodeError("ZIP code is required");
      return;
    }

    const zipCodeRegex = /^\d{5}(-\d{4})?$/;
    if (!zipCodeRegex.test(zipCode)) {
      setZipCodeError("Invalid ZIP code");
    }

    setZipCodeError("");

    if (retailCategory.length === 0) {
      setRetailCategoryError("Retail Category is required");
      return;
    }

    setRetailCategoryError("");

    if (cameraNetwork.length === 0) {
      setCameraNetworkError("Camera Network is required");
      return;
    }

    setCameraNetworkError("");

    if (employeesNum.length === 0) {
      setEmployeesNumError("Number of employees is required");
      return;
    }

    setEmployeesNumError("");

    postSubmit(
      _name,
      _email,
      _zipCode,
      _phoneNumber,
      _retailCategory,
      _cameraNetwork,
      _employeesNum
    )
      .then((e) => {
        router.push("/complete");
      })
      .catch((e) => {
        // const error = e.response.data.error;
        const error = e.response.data.error;

        if (e.response.data.error === "ALREADY_REGISTERED_EMAIL") {
          setEmailError("Already registered email");
        }

        console.log(error);
      });
  };

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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError ? (
            <Text ml={1} fontSize={"sm"} color={"red.500"} my={1}>
              {nameError}
            </Text>
          ) : (
            <VStack mb={"20px"} />
          )}

          <Input
            placeholder="Email"
            maxW={"700px"}
            height={"50px"}
            backgroundColor={"#F5F5F5"}
            value={email}
            onChange={(e) => setEamil(e.target.value)}
          />
          {emailError ? (
            <Text ml={1} fontSize={"sm"} color={"red.500"} my={1}>
              {emailError}
            </Text>
          ) : (
            <VStack mb={"20px"} />
          )}
          <Input
            placeholder="ZIP code"
            maxW={"700px"}
            height={"50px"}
            backgroundColor={"#F5F5F5"}
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          {zipCodeError ? (
            <Text ml={1} fontSize={"sm"} color={"red.500"} my={1}>
              {zipCodeError}
            </Text>
          ) : (
            <VStack mb={"20px"} />
          )}
          <Input
            placeholder="Phone Number (optional)"
            maxW={"700px"}
            height={"50px"}
            backgroundColor={"#F5F5F5"}
            mb={"20px"}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Menu>
            <MenuButton
              as={Button}
              width={"100%"}
              maxW={"700px"}
              height={"50px"}
              backgroundColor={"#F5F5F5"}
              rightIcon={<ChevronDownIcon />}
              textAlign={"start"}
              color={retailCategory.length > 0 ? "#000" : "#718096"}
              fontWeight={400}
            >
              {retailCategory.length > 0 ? retailCategory : "Retail category"}
            </MenuButton>

            <MenuList>
              {data.retailCategory.map((item) => {
                return (
                  <MenuItem onClick={() => setRetailCategory(item)}>
                    {item}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
          {retailCategoryError ? (
            <Text ml={1} fontSize={"sm"} color={"red.500"} my={1}>
              {retailCategoryError}
            </Text>
          ) : (
            <VStack mb={"20px"} />
          )}
          <Menu>
            <MenuButton
              as={Button}
              width={"100%"}
              maxW={"700px"}
              height={"50px"}
              backgroundColor={"#F5F5F5"}
              rightIcon={<ChevronDownIcon />}
              textAlign={"start"}
              color={cameraNetwork.length > 0 ? "#000" : "#718096"}
              fontWeight={400}
            >
              {cameraNetwork.length > 0 ? cameraNetwork : "Camera Network"}
            </MenuButton>
            <MenuList>
              {data.cameraNetwork.map((item) => {
                return (
                  <MenuItem onClick={() => setCameraNetwork(item)}>
                    {item}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
          {cameraNetworkError ? (
            <Text ml={1} fontSize={"sm"} color={"red.500"} my={1}>
              {cameraNetworkError}
            </Text>
          ) : (
            <VStack mb={"20px"} />
          )}
          <Menu>
            <MenuButton
              as={Button}
              width={"100%"}
              maxW={"700px"}
              height={"50px"}
              backgroundColor={"#F5F5F5"}
              rightIcon={<ChevronDownIcon />}
              textAlign={"start"}
              color={employeesNum.length > 0 ? "#000" : "#718096"}
              fontWeight={400}
            >
              {employeesNum.length > 0 ? employeesNum : "Number of employees"}
            </MenuButton>
            <MenuList>
              {data.employeeNum.map((item) => {
                return (
                  <MenuItem onClick={() => setEmployeesNum(item)}>
                    {item}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
          {employeesNumError ? (
            <Text
              width={"100%"}
              textAlign={"left"}
              ml={1}
              fontSize={"sm"}
              color={"red.500"}
              mt={1}
              mb={"46px"}
            >
              {employeesNumError}
            </Text>
          ) : (
            <VStack mb={"50px"} />
          )}

          <ButtonWrap
            onClick={() =>
              handlePostSubmit(
                name,
                email,
                zipCode,
                phoneNumber,
                retailCategory,
                cameraNetwork,
                employeesNum
              )
            }
          >
            <ButtonContent>Submit</ButtonContent>
          </ButtonWrap>
        </Wrap>
      </Container>
    </ChakraProvider>
  );
}

export default Contact;
