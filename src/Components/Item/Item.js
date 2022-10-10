import React from 'react'
import '../Item/Item.css'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({nombre, stock, descr, precio}) => {
  
    const onAdd = () => {
        console.log("Agregaste algo al carrito");
      }
    
  return (
    <div className="card">
        <h2>{nombre}</h2>
        <h3>{descr}</h3>
        <strong>{precio}</strong>
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
    </div>
  )
}

export default Item
