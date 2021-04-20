import React, { useState } from "react";
// import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { StyledCheckout } from "./StyledCheckout";
import { useAuth } from "../../hooks/AuthProvider";
import { GET_CART } from "../../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import Loader from "../Loader";
import Swal from "sweetalert2";
import { UPDATE_ADDRESS } from "../../graphql/mutations";
import {
  checkLocation,
  form,
  validateChange,
} from "../../helpers/validateLocation";

const stripePromise = loadStripe(
  "pk_test_51IYWrFKvrKT0hMD3gSFxlJd8ljQvDJBYWVaI0Xtr1JxWYpliVfyIyQG4Um32fUMZS5JOj8JEyDchF5TcHmWlO4qk00TxDSLbDv"
);

export default function Checkout() {
  const { userId } = useAuth();
  const { data, loading, error } = useQuery(GET_CART, {
    variables: {
      userId: userId && userId,
    },
  });

  const [updateAddress] = useMutation(UPDATE_ADDRESS);
  const [form, setForm] = useState<form>({
    country: "",
    city: "",
    street: "",
    addressnumber: 0,
    error: true,
  });

  const handleUpdate = async () => {
    let { country, city, street, addressnumber, error } = form;

    try {
      await updateAddress({
        variables: {
          id: userId,
          country,
          city,
          street,
          addressnumber,
        },
      });
    } catch (err) {
      console.log(err);
      return;
    }
  };
  const handleChange = async (e: any) => {
    const error = checkLocation(e, form);
    setForm(validateChange(e, form, error));
  };

  const handleSubmit = async (event) => {
    // Get Stripe.js instance
    event.preventDefault();

    handleUpdate();

    const stripe = await stripePromise;
    // Call your backend to create the Checkout Session
    const response = await fetch("http://localhost:3001/checkout", {
      method: "POST",
      body: JSON.stringify({ userId }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const session = await response.json();

    let timerInterval;
    Swal.fire({
      title: "Thanks for visiting us!",
      html: "You'll be redirected to the payment site in <b></b>.",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector("b") as any;
            if (b) {
              b.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        stripe.redirectToCheckout({
          sessionId: session.id,
        });
      }
    });
  };

  if (loading) return <Loader />;
  if (error) return <span>Error {error.message}</span>;
  const cartProductsArray = data.cart?.cartproducts;

  let count = 0;

  return (
    <StyledCheckout>
      <div className="checkoutContainer">
        <h2>Datos de la compra</h2>
        <ul>
          {cartProductsArray.map((i: any) => {
            i.finalproducts.product.discount
              ? (count +=
                Math.round((1- i.finalproducts.product.discount)*
                  i.finalproducts.product.price *
                  i.quantity))
              : (count += i.finalproducts.product.price * i.quantity);
            return (
              <li key={i.finalproducts.id}>
                {i.quantity > 1 ? (
                  <span className="name">
                    {i.finalproducts.product.name} x {i.quantity}
                  </span>
                ) : (
                  <span className="name">{i.finalproducts.product.name}</span>
                )}
                <span className="model">
                  {i.finalproducts.model.size} / {i.finalproducts.model.color}
                </span>
                <span className="price">
                  $
                  {i.finalproducts.product.discount
                    ? Math.round((1- i.finalproducts.product.discount) *
                      i.finalproducts.product.price *
                      i.quantity)
                    : i.finalproducts.product.price * i.quantity}
                </span>
              </li>
            );
          })}
          <li>
            <span className="name">
              <strong>Total:</strong>
            </span>
            <span className="price">
              <strong>${count}</strong>
            </span>
          </li>
        </ul>
        <form className="location" onSubmit={handleSubmit}>
          <label><h3>Delivery address</h3></label>
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleChange}
          />
          <span className="span_country"></span>
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />
          <span className="span_city"></span>
          <input
            type="text"
            name="street"
            placeholder="Street"
            onChange={handleChange}
          />
          <span className="span_street"></span>
          <input
            type="number"
            name="addressnumber"
            placeholder="Address number"
            onChange={handleChange}
          />
          <span className="span_addressnumber"></span>

          <input
            className="boton"
            type="submit"
            value="Comprar"
            disabled={
              !form.country ||
              !form.city ||
              !form.street ||
              form.addressnumber < 1
            }
          />
        </form>
      </div>
      <div className="footerFake"></div>
    </StyledCheckout>
  );
}
