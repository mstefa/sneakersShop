import React, { useState } from "react";
import { useHistory } from "react-router";
import { useQuery, useMutation } from "@apollo/client";
import { StyledOrderTable } from "./StyledOrderTable";
import { GET_ORDERS } from "../../graphql/queries";
import { UPDATE_STATE } from "../../graphql/mutations";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";

const OrderTable = () => {
  const { data, loading, error, refetch } = useQuery(GET_ORDERS, {
    variables: { orderId: "all", state: "reserved" },
  });

  const [currentState, setCurrentState] = useState("reserved");

  const [
    updateState,
    { loading: loadingMutation, error: errorMutation },
  ] = useMutation(UPDATE_STATE, {
    refetchQueries: [
      { query: GET_ORDERS, variables: { orderId: "all", state: currentState } },
    ],
  });

  const history = useHistory();

  if (loading || loadingMutation) return <Loader />;
  if (error || errorMutation)
    return <span> Error! {error?.message || errorMutation?.message} </span>;

  const handleClick = (e) => {
    const state = e.target.id;
    setCurrentState(state);
    refetch({ orderId: "all", state });
  };

  const handleChange = (e, orderId) => {
    const state = e.target.value;

    Swal.fire({
      title: "Are you sure?",
      text: "Please confirm if you want to change the status of this order.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change.",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        return updateState({ variables: { orderId, state } });
      }
    });

    e.target.value = currentState;
  };

  const orders = data.viewOrders;

  let states = ["reserved", "paid", "finished", "rejected"];
  const currentIndex = states.findIndex((state) => state === currentState);
  let possibleStates = states.slice(currentIndex - states.length);

  return (
    <StyledOrderTable>
      <div className="sectionBar">
        {states.map((state) =>
          state === currentState ? (
            <section className="currentState">{currentState}</section>
          ) : (
            <section onClick={handleClick} id={state}>
              {state}
            </section>
          )
        )}
      </div>
      <div className="orderContainer crud_container">
        <ul>
          <li className="titles">
            <span className="product">
              <h5>Product</h5>{" "}
            </span>
            <span className="model">
              <h5>Model </h5>
            </span>
            <span className="quantity">
              <h5>Quantity </h5>
            </span>
            <span className="price">
              <h5>Price </h5>
            </span>
            <span className="state">
              <h5>Status</h5>{" "}
            </span>
            <span className="username">
              <h5>Username</h5>{" "}
            </span>
          </li>
          {orders?.map((order) => (
            <li  key={order.id}>
              <span
                className="product"
                onClick={() =>
                  history.push("/product/" + order.finalproducts.product.id)
                }
              >
                <p className="product">Product</p>{" "}
                {order.finalproducts?.product?.name}{" "}
              </span>
              <span className="model">
                <p className="model">Model</p>{" "}
                {order.finalproducts.model.size +
                  " - " +
                  order.finalproducts.model.color}{" "}
              </span>
              <span className="quantity">
                <p className="quantity">Quantity</p>
                {order.quantity}
              </span>
              <span className="price">
                <p className="price">Price</p>${order.price}{" "}
              </span>
              <select
                className="state"
                value={order.state}
                onChange={(e) => handleChange(e, order.id)}
                disabled={
                  order.state === "finished" || order.state === "rejected"
                }
              >
                {possibleStates.map((state, i) => (
                  <option value={state} id={i.toString()}>
                    {state}
                  </option>
                ))}
              </select>
              <span className="username">
                <p className="username">Username</p>
                {order.cart.user.userName}{" "}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="footerFake"></div>
    </StyledOrderTable>
  );
};

export default OrderTable;
