import React, { useEffect, useState } from "react";
import "../itemListContainer/ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getDocs, collection, query, where} from "firebase/firestore"
import {db} from "../../firebase/firebase"



const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();

  const productCollection = collection(db, 'productos');

const q = query(productCollection, where('category', '==', 'dibujo' ))

  useEffect(() => {
    getDocs(productCollection)
    .then((result)=>{
      const listProducts = result.docs.map(item=>{
        return {...item.data(),
        id: item.id,
      };
      })
      setProductos(listProducts)
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(setLoading(false));

    },[id])
  
  return (
    <div className="itemListContainer">
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Cargando</h1> : <ItemList productos= {productos} />}</>}
    </div>
  );
};

export default ItemListContainer;
