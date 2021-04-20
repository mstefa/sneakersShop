import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { StyledCRUDProductReviews } from "./StyledCRUDProductReviews";
import { GET_DELETED_REVIEWS, GET_REVIEWS } from "../../graphql/queries";
import { useHistory } from "react-router-dom";
import { UNDELETE_REVIEW, DELETE_REVIEW } from "../../graphql/mutations";
import Loader from "../../components/Loader";

export default function CRUDCategory({ match }) {
  const productId = match.params.productId;
  const { data, loading, error } = useQuery(GET_REVIEWS, {
    variables: {
      productId,
    },
  });
  const {
    data: deletedReviews,
  } = useQuery(GET_DELETED_REVIEWS, {
    variables: {
      productId,
    },
  });
  const allReviews = data ? data.getReviews.reviews : null;
  const [deleteReview] = useMutation(DELETE_REVIEW, {
    refetchQueries: [
      {
        query: GET_REVIEWS,
        variables: {
          productId,
        },
      },
      {
        query: GET_DELETED_REVIEWS,
        variables: {
          productId,
        },
      },
    ],
  });
  const [restoreReview] = useMutation(
    UNDELETE_REVIEW,
    {
      refetchQueries: [
        {
          query: GET_REVIEWS,
          variables: {
            productId,
          },
        },
        {
          query: GET_DELETED_REVIEWS,
          variables: {
            productId,
          },
        },
      ],
    }
  );

  if (loading) return <Loader />;
  if (error) return <span> error {error.message} </span>;

  const handleDelete = (id) => {
    deleteReview({ variables: { id } });
  };

  const handleRestore = (id) => {
    restoreReview({ variables: { id } });
  };
  console.log(allReviews);
  return (
    <StyledCRUDProductReviews>
      <div className="categoryContainer crud_container">
        <ul>
          <li className="titles">
            <h5>Review ID</h5>
            <h5>Score</h5>
            <h5>Title</h5>
            <h5>Description</h5>
            <div></div>
          </li>
          {allReviews?.map((item) => (
            <li key={item.id}>
              <span className="reviewId"> {item.id} </span>
              <span className="score"> {item.score} </span>
              <span className="title"> {item.title} </span>
              <span className="description">
                {item.description.substring(1, 100) + "..."}
              </span>
              <div className="buttons">
                <i
                  onClick={() => handleDelete(item.id)}
                  className="fas fa-trash-alt"
                />
                {/* <button onClick={() => handleEdit(item.id)}> Edit </button> */}
                {/* <button onClick={() => handleDelete(item.id)}> Delete </button> */}
              </div>
            </li>
          ))}
        </ul>
        <div className="deleted">
          <h4>Deleted reviews</h4>
          <ul className="deletedCategories">
            {deletedReviews?.deletedReviews?.map((item) => (
              <li key={item.id}>
                <span className="reviewId"> {item.id} </span>
                <span className="score">{item.score}</span>
                <span className="title">{item.title}</span>
                <span className="description">{item.description}</span>
                <span>
                  <div className="buttons">
                    <i
                      onClick={() => handleRestore(item.id)}
                      className="fas fa-trash-restore"
                    />
                  </div>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footerFake"></div>
    </StyledCRUDProductReviews>
  );
}
