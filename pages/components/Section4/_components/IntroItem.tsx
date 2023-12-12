import React from "react";
import { MainText, PointImage, Title, Wrap } from "./styles";

type item = {
  id: number;
  title: string;
  mainText: string;
  img: string;
};

function IntroItem(props: object) {
  const { dataItem } = props;

  console.log(props);
  return (
    <Wrap>
      <Title>{dataItem.title}</Title>
      <MainText>{dataItem.mainText}</MainText>
      <PointImage src={dataItem.img} alt="" />
    </Wrap>
  );
}

export default IntroItem;
