import React from "react";
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/itemListContainer/ItemListContainer'
import ItemCount from "./Components/ItemCount/ItemCount";

const App = () => {

  const nombre = "Jose"
  const apellido = "Padilla"
  const mensaje = "Bienvendio a la tienda"
  const onAdd = () => {
    console.log("Agregaste algo al carrito");
  }

  return (
    <>
  <Navbar nombreUsuario={nombre} apellidoUsuario={apellido} />
  <ItemListContainer greeting={mensaje} >
  <ItemCount stock={5} initial={1} onAdd={onAdd} />
  </ItemListContainer>
    </>
  )
}

export default App