import React from "react";
import { Container, MenuItem, MenuItemWrap } from "~/libs/mobileNavi/styles";

import { elementScrollIntoView } from "seamless-scroll-polyfill";
import { useRouter } from "next/router";

function MobileNavi() {
  const router = useRouter(); // useRouter로 현재 경로 가져오기

  const handleMoveTargetElement = (id: string) => {
    const targetElement = document.getElementById(id);

    elementScrollIntoView(targetElement, {
      behavior: "smooth",
    });
  };

  const handleMenuClick = (id: string) => {
    const targetElement = document.getElementById(id);
    // 현재 URL이 "/"인 경우에만 스크롤 이동
    if (router.pathname === "/") {
      elementScrollIntoView(targetElement, {
        behavior: "smooth",
      });
    } else {
      // 페이지 이동 후에 스크롤 이동
      router.push("/").then(() => {
        // 타겟 엘리먼트가 렌더링되어 있는지 확인
        if (targetElement) {
          elementScrollIntoView(targetElement, {
            behavior: "smooth",
          });
        } else {
          handleMoveTargetElement(id);
        }
      });
    }
  };

  return (
    <Container>
      <MenuItemWrap onClick={() => handleMenuClick("section2")}>
        <MenuItem>Problems</MenuItem>
      </MenuItemWrap>
      <MenuItemWrap onClick={() => handleMenuClick("section4")}>
        <MenuItem>Why Allevier</MenuItem>
      </MenuItemWrap>
      <MenuItemWrap onClick={() => router.push("/how")}>
        <MenuItem>How it works</MenuItem>
      </MenuItemWrap>
      <MenuItemWrap onClick={() => router.push("/aboutus")}>
        <MenuItem>About Us</MenuItem>
      </MenuItemWrap>
      <MenuItemWrap onClick={() => router.push("/contact")}>
        <MenuItem>Contact</MenuItem>
      </MenuItemWrap>
    </Container>
  );
}

export default MobileNavi;
