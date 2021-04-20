import React, { useState } from "react";

export function ResultSearchBarInput({ data, handleClick }) {
  return (
    <div className="contentResult">
      {data["searchProducts"]
        ? data["searchProducts"].slice(0, 3).map((item, i) => {
            return (
              <div key={i} className="contentResultItem">
                <div>
                  <img src={item.muestraimg} alt="muestras" />
                  <div className="name" id={item.id} onClick={handleClick}>
                    {item.name}
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
   
  );
}
