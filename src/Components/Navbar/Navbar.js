import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import CartWitget from '../cartWitget/CartWitget'


const Navbar = ( { nombreUsuario } ) => {
    return (
        <header>
            <img src={logo} alt="logo casa" />
            <h1>PaDeco</h1>
            <h2>Bienvenido {nombreUsuario}</h2>
            <nav>
                <a href="">Muebles</a>
                <a href="">Decoracion</a>
                <a href="">Iluminacion</a>
            </nav>
            <CartWitget/>
        </header>
    )
}

export default Navbar