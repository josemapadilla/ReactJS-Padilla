import { VerticalAlignBottomOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "../itemListContainer/ItemListContainer.css";
import ItemList from "../ItemList/ItemList"

const productos = [
  {nombre:"lapicera", id:0, categoria:"utiles", stock:5, descr:"Lapicera azul de gran calidad", precio:4500},
  {nombre:"lapices", id:1, categoria:"utiles", stock:3, descr:"Estuche con lapices de colores varios", precio:12500},
  {nombre:"llavero", id:2, categoria:"accesorio", stock:8, descr:"Llavero modulor le-corbusier", precio:2500},
  {nombre:"taza", id:3, categoria:"accesorio", stock:10, descr:"Taza con leyenda, futuro arquitecto", precio:2000},
];

const obtenerProductos = new Promise ((resolve, reject)=>{
  setTimeout(()=>{
    resolve(productos);
  }, 2000);
})

const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    obtenerProductos
    .then((data)=>{
      setProductos(data);
    })
    .catch((error)=>{
      console.log("salio mal");
      console.log(error)
    })
  }, [])
  
  return (
    <div className="itemListContainer">
      <h1>{greeting}</h1>
<ItemList productos= {productos} />
    </div>
  );
};

export default ItemListContainer;
