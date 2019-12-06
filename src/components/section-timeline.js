import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap,faBriefcase } from "@fortawesome/free-solid-svg-icons";

class SectionTimeline extends React.Component{
    render(){
        return(
            <section id="timeline">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="education">
                                <ul>
                                    <li className="start">
                                        <span>
                                            <FontAwesomeIcon icon={faGraduationCap} />
                                        </span>
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
                        </Col>
                        <Col md={6}>
                            <div className="experience">
                                <ul>
                                    <li className="start">
                                        <span>
                                            <FontAwesomeIcon icon={faBriefcase} />
                                        </span>
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
export default SectionTimeline;