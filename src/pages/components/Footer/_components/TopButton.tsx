import React from "react";
import {
  ButtonContent,
  ButtonWrap,
} from "../../../../libs/footer/_components/styles";

function TopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ButtonWrap onClick={scrollToTop}>
      <ButtonContent>Top ↑</ButtonContent>
    </ButtonWrap>
  );
}

export default TopButton;
