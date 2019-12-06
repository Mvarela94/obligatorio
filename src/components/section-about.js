import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip,faComments } from "@fortawesome/free-solid-svg-icons";

class SectionAbout extends React.Component{
    render(){
        return(
            <section id="about">
                <Container>
                    <Row>
                        <Col md={6} xs={12}>
                            <div className="content-img-about">
                                <img className="img-fluid" src="images/about.jpg" alt="Image profile" />
                            </div>
                        </Col>
                        <Col md={6} xs={12}>
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
                                <a href="#" className="btn btn-info custom-btn-home mb-3">
                                    <FontAwesomeIcon icon={faPaperclip} /> Ver Curriculum
                                </a>
                                <a href="#" className="btn btn-danger mb-3">
                                    <FontAwesomeIcon icon={faComments} /> Contactarme
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
export default SectionAbout;