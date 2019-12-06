import React from "react";
import { Container } from "react-bootstrap";

class Header extends React.Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-lg fixed-top bg-white">
                    <Container>
                        <a className="navbar-brand" href="#">
                            <img src="images/logo.png" alt="Logo Website" />
                        </a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav justify-content-end w-100 clearfix">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#home">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">Sobre mi</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">Servicios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#timeline">Experiencia</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </nav>
            </header>
        )
    }
}
export default Header;