import React from 'react'
import Item from '../Item/Item.js'
import '../ItemList/ItemList.css'

const ItemList = ({productos}) => {
  
    console.log({productos});
    
  
    return (
    <div className='ItemList'>
       {
        productos.map((prod)=> <Item key={prod.id} producto={prod}/>)
      } 
    </div>
  )
}

export default ItemList