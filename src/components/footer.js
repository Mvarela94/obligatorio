import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faTwitter,faInstagram,faLinkedinIn,faGoogle } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="content-text-footer text-center">
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
                                <p>Copyright © 2019 MVARELA All Right Reserved</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}
export default Footer;