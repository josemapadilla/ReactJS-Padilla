import React, { useEffect } from 'react'
import '../Item/Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link, NavLink } from "react-router-dom"
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'
import { useParams } from "react-router-dom";


const Item = ({producto}) => {

    const onAdd = () => {
        console.log("Agregaste algo al carrito");
      }
    
  return (
    <div className="card">
        <h2>{producto.title}</h2>
        <img src={ producto.image}></img>
        <strong>{producto.price}</strong>
        <NavLink to={`/producto/${producto.id}`}>Ver mas</NavLink>
        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
        
    </div>
  )
}

export default Item
