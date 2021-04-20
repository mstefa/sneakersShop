import React, { useEffect } from "react";
import { ratingStars } from "./ratingStars";
import { StyledReview } from "./StyledReview";

export interface ReviewAttributes {
  className: String;
  description: String;
  score: String;
  title: String;
  id: string;
}

export function Review({
  className,
  description,
  score,
  title,
  id,
}: ReviewAttributes) {
  useEffect(() => {
    ratingStars(score, id);
  }, []);
  var divId = "rating" + id;
  return (
    <StyledReview>
      <div className="review">
        <div className="rating" id={divId}></div>
        <h5 className="ratingTitle">{title}</h5>
        <p className="ratingDescription">{description}</p>
      </div>
    </StyledReview>
  );
}
