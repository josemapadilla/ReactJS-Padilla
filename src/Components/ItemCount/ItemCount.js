import React, { useState } from 'react'
import "../ItemCount/ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial);

  const sumarClick = () => {
    if (contador == stock) {
      console.log("sin stock")
    }
    else {
      setContador(contador + 1);
    }
    
  };

  const restarClick = () => {
    if (contador == 1) {
      console.log("No puede comprar menos de 1 producto")
    }
    else {
      setContador(contador - 1);
    }
  };

  const agregarAlCarrito = () => {
    onAdd();
  };

  return (
    <div>
    <div className="botones">
      <button onClick={restarClick}>-</button>
        <h2> {contador} </h2>
        <button onClick={sumarClick}>+</button>        
      </div>
      <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
      </div>
  )
}

export default ItemCount
