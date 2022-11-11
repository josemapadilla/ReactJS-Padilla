import React from "react";
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/itemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Components/Cart/Cart"
import { CustomProvider } from "./Context/CustomContext";

const App = () => {

  const nombre = "Jose"
  const apellido = "Padilla"
  const mensaje = "Comprar al mejor precio desde casa"
 
  return (
  <>
  <BrowserRouter>
  <CustomProvider>
  <Navbar nombreUsuario={nombre} apellidoUsuario={apellido} />
  <Routes>
  <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
  <Route path="/categoria/:nombre" element={<ItemListContainer greeting={mensaje} />}/>
  <Route path="/producto/:id" element={<ItemDetailContainer />}/>
  <Route path="/cart" element={<Cart />}/>
  <Route path="*" element={<ItemListContainer />}/>
  </Routes>
  </CustomProvider>
  </BrowserRouter>
  </>
  )
}

export default App