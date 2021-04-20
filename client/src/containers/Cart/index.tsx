import React, { useState } from "react";
import { GET_CART } from "../../graphql/queries";
import { StyledCart } from "./StyledCart";
import { useMutation, useQuery } from "@apollo/client";
import { useAuth } from "../../hooks/AuthProvider";
import { DELETE_TO_CART, QUANTITY } from "../../graphql/mutations";
import Loader from "../../components/Loader";
import CartItem from "../../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartLocal = JSON.parse(localStorage.getItem("cart"));
  const [cartLocalState, setCartLocalState] = useState(cartLocal);

  const { userId } = useAuth();
  const { data, loading, error } = useQuery(GET_CART, {
    variables: {
      userId: userId && userId,
    },
  });

  const [deleteProductCart] = useMutation(DELETE_TO_CART, {
    refetchQueries: [
      {
        query: GET_CART,
        variables: {
          userId: userId && userId,
        },
      },
    ],
  });

  const [controlQuantity] = useMutation(QUANTITY, {
    refetchQueries: [
      {
        query: GET_CART,
        variables: {
          userId: userId && userId,
        },
      },
    ],
  });

  if (loading) return <Loader />;
  if (error) return <span>Error {error.message}</span>;
  const cartProductsArray =
    userId !== "0" ? data.cart?.cartproducts : cartLocalState.items;
  let count = 0;
  const handleDelete = (finalproduct) => {
    if (userId !== "0") {
      deleteProductCart({
        variables: {
          cartId: data.cart?.id,
          finalproductId: finalproduct,
        },
      });
    } else {
      let recuperarCartLocal = JSON.parse(localStorage.getItem("cart"));
      let items = recuperarCartLocal.items.filter(
        (item) => item.id !== finalproduct
      );
      recuperarCartLocal.items = items;
      localStorage.setItem("cart", JSON.stringify(recuperarCartLocal));
      setCartLocalState(recuperarCartLocal);
    }
  };

  const handleQuantity = (e, cartProductItem) => {
    if (e.target.value) {
      if (userId !== "0") {
        if (cartProductItem.id) {
          cartProductItem = cartProductItem.id;
        }
        controlQuantity({
          variables: {
            id: cartProductItem,
            quantity: parseInt(e.target.value),
          },
        });
      } else {
        let recuperarCartLocal = JSON.parse(localStorage.getItem("cart"));
        let items = recuperarCartLocal.items.find(
          (item) => item.id === cartProductItem.id
        );
        items.quantity = parseInt(e.target.value);
        localStorage.setItem("cart", JSON.stringify(recuperarCartLocal));
        setCartLocalState(recuperarCartLocal);
      }
    }
  };

  const handleClick = (e, cartProductItem) => {
    const input: any = e.target.parentNode.parentNode.querySelector(
      "#quantity"
    );

    if (userId !== "0") {
      if (e.target.id === "mas") {
        return handleQuantity(
          { target: { value: Number(input.value) + 1 } },
          cartProductItem.id
        );
      }
      if (input.value > 1) {
        return handleQuantity(
          { target: { value: Number(input.value) - 1 } },
          cartProductItem.id
        );
      }
    } else {
      if (e.target.id === "mas") {
        return handleQuantity(
          { target: { value: Number(input.value) + 1 } },
          cartProductItem
        );
      }
      if (input.value > 1) {
        return handleQuantity(
          { target: { value: Number(input.value) - 1 } },
          cartProductItem
        );
      }
    }
  };
  let sortedCartProductsArray;

  if (userId !== "0" && cartProductsArray) {
    let cartArray = [...cartProductsArray];
    sortedCartProductsArray = cartArray.sort((a, b) => {
      if (a.finalproducts.id > b.finalproducts.id) {
        return 1;
      }else{
        return -1;
      }
    });
  }
  return (
    <StyledCart className="fondoDegradado">
      <div className="cartContainer">
        <h2>Your Cart</h2>
        <ul>
          {userId !== "0"
            ? sortedCartProductsArray?.map((cartProductItem) => {
              const product = cartProductItem.finalproducts.product;
              count +=
                Math.round(product.price * (1 - product.discount)) *
                cartProductItem.quantity;
              return (
                <li key={cartProductItem.finalproducts?.id}>
                  <CartItem
                    cartProductItem={cartProductItem}
                    product={product}
                    handleClick={handleClick}
                    handleQuantity={handleQuantity}
                    handleDelete={handleDelete}
                  />
                </li>
              );
            })
            : cartProductsArray?.map((cartProductItem) => {
              let i;
              const product = cartProductItem.product;
              count += product.price * cartProductItem.quantity;
              return (
                <li key={i++}>
                  <CartItem
                    cartProductItem={cartProductItem}
                    product={product}
                    handleClick={handleClick}
                    handleQuantity={handleQuantity}
                    handleDelete={handleDelete}
                  />
                </li>
              );
            })}
        </ul>
          {
            sortedCartProductsArray 
            ?<footer>
              <h5>Total: ${count}</h5>
              <Link to={userId !== "0" ? "/checkout" : "/login"}>
                <button className="boton">Buy</button>
              </Link>
          </footer>
            :
            <footer>
              <Link to={'/'}>
                <h5>Seems there is nothing here yet...  </h5>
                <h5>Let's add something</h5>
              </Link>
            </footer>
          }
      </div>
      <div className= 'footerFake'> </div> 
    </StyledCart>
  );
};

export default Cart;
