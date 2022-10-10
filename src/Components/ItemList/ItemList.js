import React from 'react'
import Item from '../Item/Item.js'
import '../ItemList/ItemList.css'

const ItemList = ({productos}) => {
  
    console.log({productos});
    
  
    return (
    <div className='ItemList'>
       {
        productos.map((prod)=> <Item key={prod.id} nombre={prod.nombre} stock={prod.stock} descr={prod.descr} precio={prod.precio}/>)
      } 
    </div>
  )
}

export default ItemList