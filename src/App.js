import React from "react";
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/itemListContainer/ItemListContainer'

const App = () => {

  const nombre = "Jose"
  const apellido = "Padilla"
  const mensaje = "Bienvendio a la tienda"

  return (
    <>
  <Navbar nombreUsuario={nombre} apellidoUsuario={apellido} />
  <ItemListContainer greeting={mensaje}/>
    </>
  )
}

export default App