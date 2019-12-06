import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faLink } from "@fortawesome/free-solid-svg-icons";

class SectionPortfolio extends React.Component{
    render(){
        return(
            <section id="portfolio">
                <Container>
                    <h2 className="text-center">Portfolio</h2>
                    <Row>
                        <Col className="mb-4" md={12}>
                            <div className="content-controls-portfolio text-center">
                                <a href="#" className="btn btn-primary custom-btn-home active">Todo</a>
                                <a href="#" className="btn btn-primary custom-btn-home">Diseños</a>
                                <a href="#" className="btn btn-primary custom-btn-home">Desarrollos</a>
                                <a href="#" className="btn btn-primary custom-btn-home">Community Manager</a>
                            </div>
                        </Col>
                        <Row>
                            <Col className="d-inline-block p-2" md={4} sm={6}>
                                <div className="content-item-portfolio">
                                    <img src="images/portfolio/ipiluminacion.jpg" alt="Cliente Ip iluminacion" />
                                    <div className="overlay">
                                        <div className="content-icon-portfolio">
                                            <a className="view" href="#">
                                                <FontAwesomeIcon icon={faEye} />
                                            </a>
                                            <a className="link" href="#">
                                                <FontAwesomeIcon icon={faLink} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="d-inline-block p-2" md={4} sm={6}>
                                <div className="content-item-portfolio">
                                    <img src="images/portfolio/altosdelrivero.jpg" alt="Cliente Altos del Rivero" />
                                    <div className="overlay">
                                        <div className="content-icon-portfolio">
                                            <a className="view" href="#">
                                                <FontAwesomeIcon icon={faEye} />
                                            </a>
                                            <a className="link" href="#">
                                                <FontAwesomeIcon icon={faLink} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="d-inline-block p-2" md={4} sm={6}>
                                <div className="content-item-portfolio">
                                    <img src="images/portfolio/hierrossabatini.jpg" alt="Cliente Hierros Sabatini" />
                                    <div className="overlay">
                                        <div className="content-icon-portfolio">
                                            <a className="view" href="#">
                                                <FontAwesomeIcon icon={faEye} />
                                            </a>
                                            <a className="link" href="#">
                                                <FontAwesomeIcon icon={faLink} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="d-inline-block p-2" md={4} sm={6}>
                                <div className="content-item-portfolio">
                                    <img src="images/portfolio/nationtraffic.jpg" alt="Cliente Nationtraffic" />
                                    <div className="overlay">
                                        <div className="content-icon-portfolio">
                                            <a className="view" href="#">
                                                <FontAwesomeIcon icon={faEye} />
                                            </a>
                                            <a className="link" href="#">
                                                <FontAwesomeIcon icon={faLink} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="d-inline-block p-2" md={4} sm={6}>
                                <div className="content-item-portfolio">
                                    <img src="images/portfolio/stconsultores.jpg" alt="Cliente ST Consultores" />
                                    <div className="overlay">
                                        <div className="content-icon-portfolio">
                                            <a className="view" href="#">
                                                <FontAwesomeIcon icon={faEye} />
                                            </a>
                                            <a className="link" href="#">
                                                <FontAwesomeIcon icon={faLink} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="d-inline-block p-2" md={4} sm={6}>
                                <div className="content-item-portfolio">
                                    <img src="images/portfolio/lasgaviotas.jpg" alt="Cliente Las Gaviotas" />
                                    <div className="overlay">
                                        <div className="content-icon-portfolio">
                                            <a className="view" href="#">
                                                <FontAwesomeIcon icon={faEye} />
                                            </a>
                                            <a className="link" href="#">
                                                <FontAwesomeIcon icon={faLink} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </section>
        )
    }
}
export default SectionPortfolio;