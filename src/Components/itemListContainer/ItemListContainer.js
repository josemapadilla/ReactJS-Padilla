import React, { useEffect, useState } from "react";
import "../itemListContainer/ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();

  const URL_BASE = 'https://fakestoreapi.com/products'
  const URL_CAT = `${URL_BASE}/category/${id}`

  useEffect(() => {
    fetch(id == undefined?URL_BASE : URL_CAT)
        .then((respuesta) => respuesta.json())
        .then ((data) => setProductos(data))
             
      .catch (() => {console.log("error")})
      .finally(setLoading(false))
    }, [id])
  
  return (
    <div className="itemListContainer">
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemList productos= {productos} />}</>}
    </div>
  );
};

export default ItemListContainer;
