import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge,faClipboard,faCode,faMoneyBill } from "@fortawesome/free-solid-svg-icons";

class SectionServices extends React.Component{
    render(){
        return(
            <section id="services">
                <h2 className="text-center">Servicios</h2>
                <Container>
                    <Row>
                        <Col className="mb-3" lg={3} md={6} xs={12}>
                            <div className="content-item-service text-center">
                                <div className="content-icon">
                                    <FontAwesomeIcon icon={faThLarge} />
                                </div>
                                <div className="content-item-service-info">
                                    <h3>Front-End Developer</h3>
                                    <p>Codificando pensando en la mejor performance para el sitio</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="mb-3" lg={3} md={6} xs={12}>
                            <div className="content-item-service text-center">
                                <div className="content-icon">
                                    <FontAwesomeIcon icon={faClipboard} />
                                </div>
                                <div className="content-item-service-info">
                                    <h3>Diseñador</h3>
                                    <p>Valoro patrones de diseño limpio y las interacciones bien pensadas.</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="mb-3" lg={3} md={6} xs={12}>
                            <div className="content-item-service text-center">
                                <div className="content-icon">
                                    <FontAwesomeIcon icon={faCode} />
                                </div>
                                <div className="content-item-service-info">
                                    <h3>Tecnologías</h3>
                                    <p>Html5, Css3, Sass, Javascript, Jquery, React</p> 
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} xs={12}>
                            <div className="content-item-service text-center">
                                <div className="content-icon">
                                    <FontAwesomeIcon icon={faMoneyBill} />
                                </div>
                                <div className="content-item-service-info">
                                    <h3>Presupuesto</h3>
                                    <p>Se arma un presupuesto acorde de su negocio y necesidad</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
export default SectionServices;