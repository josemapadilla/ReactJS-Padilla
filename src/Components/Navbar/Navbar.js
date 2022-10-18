import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import CartWitget from '../cartWitget/CartWitget'
import { Link, NavLink } from "react-router-dom"


const Navbar = ( { nombreUsuario } ) => {

    const categorias = [
        { nombre: "electronics", id: 0, ruta: "/categoria/electronics" },
        { nombre: "jewelery", id: 1, ruta: "/categoria/jewelery" },
        { nombre: "men's clothing", id: 2, ruta: "/categoria/men's clothing" },
        { nombre: "women's clothing", id: 3, ruta: "/categoria/women's clothing" },
      ];

    return (
        <header>
            <Link to="/">
            <img src={logo} alt="logo casa" />
            </Link>
            <h1>PaDeco</h1>
            <h2>Bienvenido {nombreUsuario}</h2>
            <nav>
                {categorias.map((categoria) => {
          return (
            <NavLink
              key={categoria.id}
              to={categoria.ruta}
            >
              {categoria.nombre}
            </NavLink>
          );
        })}
            </nav>
            <Link to="/cart">
            <CartWitget/>
            </Link>
        </header>
    )
}

export default Navbar