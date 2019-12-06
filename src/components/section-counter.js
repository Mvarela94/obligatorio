import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase,faCheckCircle,faGem,faHeart } from "@fortawesome/free-solid-svg-icons";

class SectionCounter extends React.Component{
    render(){
        return(
            <section id="counter">
                <Container>
                    <Row>
                        <Col className="text-center" md={3} sm={6}>
                            <div className="content-item-counter">
                                <div className="content-icon-counter">
                                    <FontAwesomeIcon icon={faBriefcase} />
                                </div>
                                <h3>12</h3>
                                <p>Proyectos en Curso</p>
                            </div>
                        </Col>
                        <Col className="text-center" md={3} sm={6}>
                            <div className="content-item-counter">
                                <div className="content-icon-counter">
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                </div>
                                <h3>47</h3>
                                <p>Proyectos Terminados</p>
                            </div>
                        </Col>
                        <Col className="text-center" md={3} sm={6}>
                            <div className="content-item-counter">
                                <div className="content-icon-counter">
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <h3>7</h3>
                                <p>Reconocimientos</p>
                            </div>
                        </Col>
                        <Col className="text-center" md={3} sm={6}>
                            <div className="content-item-counter">
                                <div className="content-icon-counter">
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <h3>59</h3>
                                <p>Clientes Felices</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
export default SectionCounter;