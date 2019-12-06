import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faTwitter,faInstagram,faLinkedinIn,faGoogle } from "@fortawesome/free-brands-svg-icons";

class SectionHome extends React.Component{
    render(){
        return(
            <section id="home">
                <div className="overlay"></div>
                <Container>
                    <Row>
                        <Col className="text-center" md={12}>
                            <div className="contents">
                                <p className="font-shadows">Hola, mi nombre es</p>
                                <h1>Mathias Varela</h1>
                                <p className="font-shadows">Mi pasión es Front-End UX/UI Developer</p>
                                <ul>
                                    <li>
                                        <a className="facebook" href="#">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="linkedin" href="#">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google" href="#">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </a>
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-primary custom-btn-home">Contactar</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
export default SectionHome;