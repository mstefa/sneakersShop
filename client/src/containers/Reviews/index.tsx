
import React, { useEffect } from "react";
import { StyledReviews } from "./StyledReviews";
import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../../graphql/queries";
import { Review, ReviewAttributes } from "../../components/Review";

interface GetReviews {
  count: number;
  average: number;
  reviews: [ReviewAttributes];
}
interface ReviewsAttributes {
  className: String;
  allReviews: GetReviews;
}
export default function Reviews({ className, allReviews }: ReviewsAttributes) {
  useEffect(() => {
    var stars = Math.floor(allReviews.average);
    var emptyStars = 5 - allReviews.average;
    for (let i = 0; i < stars; i++) {
      var div = document.createElement("div");
      div.className = "clip-star2";
      document.getElementById("ratingAverage").appendChild(div);
    }
    var decimal = false;
    if (stars - allReviews.average < 0) {
      decimal = true;
    }
    if (decimal) {
      var div = document.createElement("div");
      div.className = "half-star2";
      document.getElementById("ratingAverage").appendChild(div);
      emptyStars--
    }
    for (let i = 0; i < emptyStars; i++) {
      var div = document.createElement("div");
      div.className = "empty-star2";
      document.getElementById("ratingAverage").appendChild(div);
    }
  }, []);

  var averageDecimal = allReviews.average.toFixed(1);
  return (
    <StyledReviews>
      <div className="reviewsHeader">
        <div className="reviewsAverage">{averageDecimal}</div>
        <div className="reviewsCount">
          <div className="ratingAverage" id="ratingAverage"></div>
          <h4>Average score based on {allReviews.count} reviews</h4>
        </div>
      </div>
      <ul>
        {allReviews.reviews.map((review) => (
          <li key={review.id} >
            <Review
              className="review"
              id={review.id}
              description={review.description}
              score={review.score}
              title={review.title}
            />
          </li>
        ))}
      </ul>
    </StyledReviews>
  );
}