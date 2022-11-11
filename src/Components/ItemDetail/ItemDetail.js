import React, { useState, useContext } from "react";
import ItemCount from "../../Components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../../Context/CustomContext";


const ItemDetail = ({ producto }) => {
  const [isPressedButton, setIsPressedButton] = useState(false);
  const { cart, addItem, IsInCart} = useContext(Context);

  let stock = 0;
  if(IsInCart(producto.id)){
    const found = cart.find(item => item.id === producto.id);
    stock = producto.stock - found.cantidad;
  }else{
    stock = producto.stock;
  }

  const onAdd = (count) => {
    setIsPressedButton(true);
    addItem(producto, count);
  };

  return (
    <div>
      <img alt={producto.title} src={producto.image} />
      <h1>{producto.title}</h1>
      <span>{producto.description}</span>
      <h2>{producto.price}</h2>
      {!isPressedButton ? (
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      ) : (
        <Link to="/cart">
          <button>Finalizar Compra</button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;