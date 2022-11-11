import React, { useContext } from "react";
import { Context } from "../../Context/CustomContext"
import { Link } from "react-router-dom";
import "./Cart.css";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Cart = ({ estilo, color }) => {
  const { cart, total, clear } = useContext(Context);

  const MySwal = withReactContent(Swal)

  const actualizarStock = ()=>{
    const updateStock = doc(db, "productos","KwnjSlyDslt1IneySzVr")
    updateDoc(updateStock,{stock:100})
  }

  const finalizarCompra = ()=>{
    const ventasCollection = collection(db,"ventas");
    addDoc(ventasCollection,{
      nombre: prompt("nombre"),
      email: prompt("email"),
      items:[{nombre:'banana'},{nombre:'pera'}],
      total: 200,
      date:serverTimestamp()
    })
    .then(result=>{
      Swal.fire('El id de tu compra es' + result.id);
      actualizarStock()      
    })
    .catch(e => {
      console.log('Algo paso');
      console.log(e);
    });
    

    clear();
  }

  


  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1 className={estilo ? "red" : "green"}>
            No agregaste productos, encuentra lo que necesitas<Link to="/">ACA</Link>
          </h1>
          <h2 className={`tamanio ${color || ''}`}>Gracias por tu visita</h2>
        </>
      ) : (
        <>
          {cart.map((producto) => (
            <div key={producto.id} className= "cartItem">
            <img alt={producto.title} src={producto.image} />
            <h1>{producto.title}</h1>
            <h2>{producto.price}</h2>
            </div>
          ))}
        </>
      )}
      <button onClick={finalizarCompra}>finalizar compra</button>
    </>
  );
};
