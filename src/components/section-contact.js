import React from "react";
import MapContainer  from "./map";
import { Container,Row,Col,Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker,faEnvelope,faPhone } from "@fortawesome/free-solid-svg-icons";

class SectionContact extends React.Component{
    render(){
        return(
            <section id="contact">
                <Container>
                    <Row className="content-form">
                        <Col md={6} sm={12}>
                            <h2>Formulario de Contacto</h2>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Nombre" />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </Col>
                                    <Col md={12}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Asunto" />
                                        </div>
                                    </Col>
                                    <Col className="mb-3" md={12}>
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Ingrese su Mensaje..." rows="5"></textarea>
                                        </div>
                                        <div className="submit-button">
                                            <button className="btn btn-primary custom-btn-home" type="submit">Enviar</button>
                                            <div className="clearfix"></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col className="mb-3" md={6} sm={12}>
                            <h2>Datos de Contacto</h2>
                            <div className="content-address">
                                <div className="content-item-address">
                                    <div className="content-icon-address">
                                        <FontAwesomeIcon icon={faMapMarker} />
                                    </div>
                                    <p>Canelones, Lagomar Sur</p>
                                </div>
                                <div className="content-item-address">
                                    <div className="content-icon-address">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <p>
                                        <a href="mailto:martinvarela2013@gmail.com">martinvarela2013@gmail.com</a>
                                    </p>
                                    <p>
                                        <a href="mailto:mvarela@intermedia.com.uy">mvarela@intermedia.com.uy</a>
                                    </p>
                                </div>
                                <div className="content-item-address">
                                    <div className="content-icon-address">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <p>
                                        <a href="#">+ (598) 99 797 462</a>
                                    </p>
                                    <p>
                                        <a href="#">+ (598) 2682 24 82</a>
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col className="contentMap" md={12}>
                            <MapContainer />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
export default SectionContact;