import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import "./navBar.css"
import CarWidget from './CartWidget';


const NavBar = () => {

    console.log(CarWidget)

    return (
        <header className="page-header">
            <nav>
                <ul className="nav nav-pills pull-right">
                    <li className="active"><a href="/#">Productos</a></li>
                    <li><a href="/#">Nosotros</a></li>
                    <li><a href="/#">Contacto</a></li>
                    <li><CarWidget/></li>
                    <li>
                        <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Usuario
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdownMenu">
                            <Dropdown.Item href="#/action-1">Crear Usuario</Dropdown.Item>
                            <div><Dropdown.Item href="#/action-2">Iniciar Sesion</Dropdown.Item></div> 
                            <Dropdown.Item href="#/action-3">Cerrar Sesion</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
                
                <h3 className="header__logo ">Veotex</h3>
                
                

            </nav>
        </header>
        
    )
}

export default NavBar;