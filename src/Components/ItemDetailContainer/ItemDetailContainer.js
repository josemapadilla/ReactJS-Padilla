import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getDoc, collection, doc} from "firebase/firestore";
import {db} from "../../firebase/firebase";


export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const productCollection = collection(db, "productos");
    const refDoc = doc(productCollection, id);

    getDoc(refDoc)
      .then((result) => {
        setProducto({
          id: result.id,
          ...result.data(),
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
    }, [id])

  return (
    <>
      <h1>Item Detail</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemDetail producto={producto} />}</>}
    </>
  );
};
