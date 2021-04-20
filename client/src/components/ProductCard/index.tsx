import React from "react";
import { StyledProductCard } from "./StyledProductCard";
import { fotosZapa } from "../../components/ProductDetail/mockup";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <StyledProductCard>
      <Link to={`/product/${item.id || 1}`}>
        <img
          src={item.muestraimg || fotosZapa.photo}
          alt="name"
          className="productImg"
        />
        {!!item.discount ? (
          <div className="discount">{Math.round(item.discount * 100)}% OFF!</div>
        ) : (
          <></>
        )}
        <div className="productData">
          <h5>
            {item.brand.name} {item.name}
          </h5>
          <p>${item.price}</p>
        </div>
      </Link>
    </StyledProductCard>
  );
}
