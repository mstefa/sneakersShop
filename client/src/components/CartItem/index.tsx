import React from "react";
import { StyledCartItem } from "./StyledCartItem";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function CartItem({
  cartProductItem,
  product,
  handleDelete,
  handleClick,
  handleQuantity,
}) {
  return (
    <StyledCartItem>
      <div className="itemContainer" key={cartProductItem.finalproducts?.id}>
        <div className="itemImage">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.muestraimg}
            alt={`photoDetail 3 - ${product.name}`}
          />
        </Link>
        </div>
        <div className="itemData">
          <h4>{product.name}</h4>
          {cartProductItem.finalproducts?.model ? (
            <p>
              Size:{" "}
              <strong>{cartProductItem.finalproducts?.model?.size}</strong>
              <br />
              Color:{" "}
              <strong>{cartProductItem.finalproducts?.model?.color} </strong>
            </p>
          ) : (
            ""
          )}
          {product.discount ? (
            <div>
              <div className="oldPrice">
                Old price: <span>${product.price}</span>
              </div>
              <div className="newPrice">
                Discount Price : <span>${Math.round(product.price * (1 - product.discount))}</span>
              </div>
            </div>
          ) : (
            <div className="newPrice">Price: <span>${product.price}</span></div>
          )}
        </div>
        <div className="itemButtons">
          <button
              className="buttonDelete"
              onClick={() => {
                Swal.fire({
                  title: "Sure?",
                  text:
                    "Please confirm if you want to remove this item from your cart.",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete.",
                  showConfirmButton: true,
                }).then((result) => {
                  if (result.isConfirmed) {
                    handleDelete(
                      cartProductItem.finalproducts
                        ? cartProductItem.finalproducts.id.toString()
                        : cartProductItem.id.toString()
                    );
                  }
                });
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </button>

          <div className="number-input">
            <button id="-" onClick={(e) => handleClick(e, cartProductItem)}>
              <i className="fas fa-minus-square"></i>
            </button>
            <input
              id="quantity"
              className="quantity"
              type="number"
              onChange={(e) => handleQuantity(e, cartProductItem)}
              value={cartProductItem.quantity}
            />
            <button
              id="mas"
              onClick={(e) => {
                handleClick(e, cartProductItem);
              }}
              className="plus"
            >
              <i id="mas" className="fas fa-plus-square"></i>
            </button>
          </div>
        </div>
      </div>
    </StyledCartItem>
  );
}
