import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = {
           
        }
    }
    
    render() {
        return (
            <div>
            <header>
                <nav className="navbar navbar-expand-lg fixed-top bg-white">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="images/logo.png" alt="Logo Website" />
                        </a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav justify-content-end w-100 clearfix">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sobre mi</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Servicios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Experiencia</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <section id="home">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="contents">
                                <p className="font-shadows">Hola, mi nombre es</p>
                                <h1>Mathias Varela</h1>
                                <p className="font-shadows">Mi pasión es Front-End UX/UI Developer</p>
                                <ul>
                                    <li>
                                        <a className="facebook" href="#"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#"><i className="fa fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a className="google" href="#"><i className="fa fa-google"></i></a>
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-primary custom-btn-home">Contactar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="content-img-about">
                                <img className="img-fluid" src="images/about.jpg" alt="Image profile" />
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="content-info-about">
                                <h2>¡Me presento!</h2>
                                <p>Me describo como una persona proactiva, muy dispuesta e interesada por su trabajo. Tengo un alto nivel de compromiso con mis tareas así como de pertenencia con cada proyecto que realizo. 
                                Arranque programando en C#, finalizando la carrera analista en sistemas, pero me di cuenta que no era lo mio, lo que realmente me gustaba era dedicarme al Front-End Developer.
                                Hoy en día cuento con más de 4 años de experiencia y con mucho para aprender por delante, pero siempre dedicando el 100%.
                                </p>
                                <div className="items-profile">
                                    <ul>
                                        <li>
                                            <span className="title">Nombre </span>
                                            <span>Mathias Varela</span>
                                        </li>
                                        <li>
                                            <span className="title">Edad </span>
                                            <span>24 años</span>
                                        </li>
                                        <li>
                                            <span className="title">Experiencia </span>
                                            <span>4 años</span>
                                        </li>
                                        <li>
                                            <span className="title">País </span>
                                            <span>Uruguay</span>
                                        </li>
                                        <li>
                                            <span className="title">Ubicación </span>
                                            <span>Canelones, Lagomar Sur</span>
                                        </li>
                                        <li>
                                            <span className="title">E-mail </span>
                                            <span>martinvarela2013@gmail.com</span>
                                        </li>
                                        <li>
                                            <span className="title">Teléfono </span>
                                            <span>+ (598) 099 797 462</span>
                                        </li>
                                        <li>
                                            <span className="title"> Freelance </span>
                                            <span>Mvarela</span>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" className="btn btn-info custom-btn-home mb-3"><i className="fa fa-paperclip"></i> Ver Curriculum</a>
                                <a href="#" className="btn btn-danger mb-3"><i className="fa fa-commenting"></i> Contactarme</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services">
                <h2 className="text-center">Servicios</h2>
                <div className="container">
                    <div className="row">
                            <div className="col-lg-3 col-md-6 col-xs-12 mb-3">
                                <div className="content-item-service text-center">
                                    <div className="content-icon">
                                        <i className="fa fa-th-large"></i>
                                    </div>
                                    <div className="content-item-service-info">
                                        <h3>Front-End Developer</h3>
                                        <p>Codificando pensando en la mejor performance para el sitio</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 mb-3">
                                <div className="content-item-service text-center">
                                    <div className="content-icon">
                                        <i className="fa fa-clipboard"></i>
                                    </div>
                                    <div className="content-item-service-info">
                                        <h3>Diseñador</h3>
                                        <p>Valoro patrones de diseño limpio y las interacciones bien pensadas.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 mb-3">
                                <div className="content-item-service text-center">
                                    <div className="content-icon">
                                        <i className="fa fa-code"></i>
                                    </div>
                                    <div className="content-item-service-info">
                                        <h3>Tecnologías</h3>
                                        <p>Html5, Css3, Sass, Javascript, Jquery, React</p> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12">
                                <div className="content-item-service text-center">
                                    <div className="content-icon">
                                        <i className="fa fa-money"></i>
                                    </div>
                                    <div className="content-item-service-info">
                                        <h3>Presupuesto</h3>
                                        <p>Se arma un presupuesto acorde de su negocio y necesidad</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
            <section id="timeline">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="education">
                                <ul>
                                    <li className="start">
                                        <i className="fa fa-graduation-cap"></i>
                                        <h2>Educación</h2>
                                    </li>
                                    <li> 
                                        <div className="content-info-timeline">
                                            <h3>Ciclo básico - Bachillerato</h3>
                                            <span>2007 - 2012</span>
                                            <p>En todo este periodo, cambiando de lugares de estudios, se finaliza de manera correcta todos los estudios correspondientes</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="content-info-timeline">
                                            <h3>Analista en Sistemas</h3>
                                            <span>2013 - 2017</span>
                                            <p>Luego de muchos años de estudios, obteniendo títulos intermedios, se logra llegar al título Analista de Sistemas</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="content-info-timeline">
                                            <h3>Front-End</h3>
                                            <span>2019 - 2019</span>
                                            <p>Curso para afianzar conocimientos de lo aprendido trabajando y de internet con tutoriales, para ser un mejor profesional</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                                <div className="experience">
                                    <ul>
                                        <li className="start">
                                            <i className="fa fa-briefcase"></i>
                                            <h2>Experiencia</h2>
                                        </li>
                                        <li> 
                                            <div className="content-info-timeline">
                                                <h3>Comercial</h3>
                                                <span>2013 - 4 meses</span>
                                                <p>Primera experiencia laboral en el sector comercial para una importante empresa de seguros</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content-info-timeline">
                                                <h3>Programador PHP y Maquetador Web</h3>
                                                <span>2013 - 2016</span>
                                                <p>Mientras cursaba , analista de sistemas, tuve la oportunidad de trabajar y aprender también en PHP y comenzar como Front</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content-info-timeline">
                                                <h3>Maquetador Web</h3>
                                                <span>2016 - 2019</span>
                                                <p>Dedicado 100% a maquetar con un poco mas de diseño</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content-info-timeline">
                                                <h3>Front-End UX/UI</h3>
                                                <span>2019 - Actual</span>
                                                <p>100% Front, utilizando nuevas tecnologías, empezando a usar React, sass, git, programas de diseño entre otras cosas.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div >
                            </div>
                    </div>
                </div>
            </section>
            <section id="portfolio">
                <div className="container">
                    <h2 className="text-center">Portfolio</h2>
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="content-controls-portfolio text-center">
                                <a href="#" className="btn btn-primary custom-btn-home active">Todo</a>
                                <a href="#" className="btn btn-primary custom-btn-home">Diseños</a>
                                <a href="#" className="btn btn-primary custom-btn-home">Desarrollos</a>
                                <a href="#" className="btn btn-primary custom-btn-home">Community Manager</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6 d-inline-block p-2">
                                <div className="content-item-portfolio">
                                    <img src="images/portfolio/ipiluminacion.jpg" alt="Cliente Ip iluminacion" />
                                    <div className="overlay">
                                        <div className="content-icon-portfolio">
                                            <a className="view" href="#">
                                                <i className="fa fa-eye"></i>
                                            </a>
                                            <a className="link" href="#">
                                                <i className="fa fa-link"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 d-inline-block p-2">
                                <div className="content-item-portfolio">
                                    <img src="images/portfolio/altosdelrivero.jpg" alt="Cliente Altos del Rivero" />
                                    <div className="overlay">
                                        <div className="content-icon-portfolio">
                                            <a className="view" href="#">
                                                <i className="fa fa-eye"></i>
                                            </a>
                                            <a className="link" href="#">
                                                <i className="fa fa-link"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 d-inline-block p-2">
                                <div className="content-item-portfolio">
                                    <img src="images/portfolio/hierrossabatini.jpg" alt="Cliente Hierros Sabatini" />
                                    <div className="overlay">
                                        <div className="content-icon-portfolio">
                                            <a className="view" href="#">
                                                <i className="fa fa-eye"></i>
                                            </a>
                                            <a className="link" href="#">
                                                <i className="fa fa-link"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 d-inline-block p-2">
                                <div className="content-item-portfolio">
                                    <img src="images/portfolio/nationtraffic.jpg" alt="Cliente Nationtraffic" />
                                    <div className="overlay">
                                        <div className="content-icon-portfolio">
                                            <a className="view" href="#">
                                                <i className="fa fa-eye"></i>
                                            </a>
                                            <a className="link" href="#">
                                                <i className="fa fa-link"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 d-inline-block p-2">
                                <div className="content-item-portfolio">
                                    <img src="images/portfolio/stconsultores.jpg" alt="Cliente ST Consultores" />
                                    <div className="overlay">
                                        <div className="content-icon-portfolio">
                                            <a className="view" href="#">
                                                <i className="fa fa-eye"></i>
                                            </a>
                                            <a className="link" href="#">
                                                <i className="fa fa-link"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 d-inline-block p-2">
                                <div className="content-item-portfolio">
                                    <img src="images/portfolio/lasgaviotas.jpg" alt="Cliente Las Gaviotas" />
                                    <div className="overlay">
                                        <div className="content-icon-portfolio">
                                            <a className="view" href="#">
                                                <i className="fa fa-eye"></i>
                                            </a>
                                            <a className="link" href="#">
                                                <i className="fa fa-link"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="counter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="content-item-counter">
                                <div className="content-icon-counter">
                                    <i className="fa fa-briefcase"></i>
                                </div>
                                <h3>12</h3>
                                <p>Proyectos en Curso</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="content-item-counter">
                                <div className="content-icon-counter">
                                    <i className="fa fa-check-circle-o"></i>
                                </div>
                                <h3>47</h3>
                                <p>Proyectos Terminados</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="content-item-counter">
                                <div className="content-icon-counter">
                                    <i className="fa fa-diamond"></i>
                                </div>
                                <h3>7</h3>
                                <p>Reconocimientos</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="content-item-counter">
                                <div className="content-icon-counter">
                                    <i className="fa fa-heart-o"></i>
                                </div>
                                <h3>59</h3>
                                <p>Clientes Felices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="container">
                    <div className="row content-form">
                        <div className="col-md-6 col-sm-12">
                            <h2>Formulario de Contacto</h2>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Nombre" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Asunto" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Ingrese su Mensaje..." rows="5"></textarea>
                                        </div>
                                        <div className="submit-button">
                                            <button className="btn btn-primary custom-btn-home" type="submit">Enviar</button>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 col-sm-12 mb-3">
                            <h2>Datos de Contacto</h2>
                            <div className="content-address">
                                <div className="content-item-address">
                                    <div className="content-icon-address">
                                        <i className="fa fa-map-marker"></i>
                                    </div>
                                    <p>Canelones, Lagomar Sur</p>
                                </div>
                                <div className="content-item-address">
                                    <div className="content-icon-address">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <p><a href="mailto:martinvarela2013@gmail.com">martinvarela2013@gmail.com</a></p>
                                    <p><a href="mailto:mvarela@intermedia.com.uy">mvarela@intermedia.com.uy</a></p>
                                </div>
                                <div className="content-item-address">
                                    <div className="content-icon-address">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <p><a href="#">+ (598) 99 797 462</a></p>
                                    <p><a href="#">+ (598) 2682 24 82</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.6570104743073!2d-55.984447884807366!3d-34.839715280399055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f885562425631%3A0x17cd1f60ba9d9b00!2sR%C3%ADo%20de%20Janeiro%2C%20Ciudad%20de%20la%20Costa%2C%20Departamento%20de%20Canelones!5e0!3m2!1ses!2suy!4v1572347443849!5m2!1ses!2suy" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe> */}
                        </div>
                    </div>
                </div>
            </section>

            <a href="#" className="btn custom-btn-home back-to-top">
                <i className="fa fa-angle-up"></i>
            </a>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content-text-footer text-center">
                                <ul>
                                    <li>
                                        <a className="facebook" href="#"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#"><i className="fa fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a className="google" href="#"><i className="fa fa-google"></i></a>
                                    </li>
                                </ul>
                                <p>Copyright © 2019 MVARELA All Right Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        );
    }
}



ReactDOM.render(<Main />, document.getElementById("root"));