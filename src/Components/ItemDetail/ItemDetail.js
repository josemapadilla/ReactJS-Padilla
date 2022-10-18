import React from "react";

const ItemDetail = ({ producto }) => {
  return (
    <div>
      <img alt={producto.title} src={producto.image} />
      <h1>{producto.title}</h1>
      <span>{producto.description}</span>
      <h2>{producto.price}</h2>
    </div>
  );
};

export default ItemDetail;