import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { StyledOrderHistory } from "./StyledOrderHistory";
import {
  GET_HISTORY,
  GET_REVIEWS,
  GET_REVIEWS_FROM_USER,
} from "../../graphql/queries";
import Loader from "../Loader";
import { useAuth } from "../../hooks/AuthProvider";
import Swal from "sweetalert2";
import { ADD_REVIEW } from "../../graphql/mutations";
import Reviews from "../../containers/Reviews";

export default function OrderHistory() {
  const { userId } = useAuth();
  const [prodId, setProdId] = useState("");
  const { data, loading, error } = useQuery(GET_HISTORY, {
    variables: { userId },
  });
  const {
    data: dataReviewsUser,
    loading: loadingReviewsUser,
    error: errorReviewsUser,
  } = useQuery(GET_REVIEWS_FROM_USER, {
    variables: { userId },
  });

  const [createReview, { error: errorMutationReview }] = useMutation(
    ADD_REVIEW,
    {
      refetchQueries: [
        { query: GET_REVIEWS, variables: { productId: prodId } },
        { query: GET_REVIEWS_FROM_USER, variables: { userId} },
      ],
    }
  );
  const handleReview = (productId, userId) => {
    setProdId(productId);
    Swal.mixin({
      confirmButtonText: "Next &rarr;",
      showCancelButton: true,
      progressSteps: ["1", "2", "3"],
    })
      .queue([
        {
          title: "Review title",
          input: "text",
          inputValidator: (value) => {
            if (!value) {
              return "You need to set a title for your review.";
            }
          },
        },
        {
          title: "Review description",
          input: "textarea",
          inputValidator: (value) => {
            if (!value) {
              return "You need to set a description for your review.";
            }
          },
        },
        {
          title: "Review score",
          text: "1:Very poor 2:Poor 3:Fair 4:Good 5:Excellent",
          input: "range",
          inputAttributes: {
            min: "1",
            max: "5",
            step: "1",
          },
          inputValue: "3",
          inputValidator: (value) => {
            if (!value) {
              return "You need to set a score for your review.";
            }
          },
        },
      ])
      .then(async (result: any) => {
        if (result.value) {
          console.log("productId", productId, typeof productId);
          try {
            await createReview({
              variables: {
                title: result.value[0],
                description: result.value[1],
                score: parseInt(result.value[2]),
                userId,
                productId,
              },
            });
            Swal.fire({
              icon: "success",
              title: "Review added",
              text: "Review added successfully.",
            });
          } catch (err) {
            console.error(err);
            return;
          }
        }
      });
  };
  if (loading || loadingReviewsUser) return <Loader />;
  if (error || errorReviewsUser) return <span> Error! {error.message} </span>;
  const userReviews = dataReviewsUser?.getReviewsFromUser?.reviews?.map(
    (review) => {
      return review.productId;
    }
  );
  const orders = data?.cart?.cartproducts;

  return (
    <StyledOrderHistory>
      
      <ul className="container">
        <h2>Your purchases</h2>
        {!data.cart || !orders.length ? (
          <li className="noItems">
            There are no items here, <Link to="/">click here to buy some!</Link>
          </li>
        ) : (
          orders.map((order) => {
            const {
              finalproducts: { product, model },
            } = order;

            return (
              <li key={order.id}>
                <div className="itemImage" key={order.id}>
                <NavLink to={"/product/" + product.id}>
                  <img
                    src={product.muestraimg}
                    alt={`photoDetail - ${product.name}`}
                  />
                  </NavLink>
                </div>
                <div className="itemData">
                  <h4>{product.name}</h4>
                  <p>
                      size: <strong>{" " + model.size}</strong>
                      <br />
                      color: <strong>{" " + model.color}</strong>
                      <br />
                      quantity: <strong>{" " + order.quantity}</strong>
                      <br />
                      price: <strong>${" " + order.price}</strong>
                  </p>
                </div>
                <div className="itemButtons">
                  {userReviews.find(review => review === product.id) ? (
                    <button
                      id="reviewButton"
                      className="boton"
                      disabled
                      onClick={() => handleReview(product.id, userId)}
                    >
                      Leave a review!
                    </button>
                  ) : (
                    <button
                      id="reviewButton"
                      className="boton"
                      onClick={() => handleReview(product.id, userId)}
                    >
                      Leave a review!
                    </button>
                  )}
                </div>
              </li>
            );
          })
        )}
      </ul>
      <div className="footerFake"></div>
    </StyledOrderHistory>
  );
}
