import React from "react";
import {
  ItemWrap,
  StarsIcon,
  Review,
  ReviewBy,
  Reviewer,
} from "../../../../libs/main/section5/_components/styles";

function ReviewItem(props) {
  const { item } = props;

  return (
    <ItemWrap>
      <StarsIcon src="/review-star-group.svg" alt="" />
      <Review>{item?.content}</Review>
      <ReviewBy>Review by</ReviewBy>
      <Reviewer>{item?.reviewer}</Reviewer>
    </ItemWrap>
  );
}

export default ReviewItem;
