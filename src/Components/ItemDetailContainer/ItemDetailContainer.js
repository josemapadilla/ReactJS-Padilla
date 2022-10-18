import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const URL_BASE = 'https://fakestoreapi.com/products'
  const URL_PROD = `${URL_BASE}/${id}`

  useEffect(() => {
    fetch(id == undefined?URL_BASE : URL_PROD)
        .then((respuesta) => respuesta.json())
        .then ((data) => setProducto(data))   
      .catch (() => {console.log("error")})
      .finally(setLoading(false))
    }, [id])

  return (
    <>
      <h1>Item Detail</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemDetail producto={producto} />}</>}
    </>
  );
};
