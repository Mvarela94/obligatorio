import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

class BackToTop extends React.Component{
    render(){
        return(
            <a href="#home" className="btn custom-btn-home back-to-top">
                <FontAwesomeIcon icon={faAngleUp} />
            </a>
        )
    }
}
export default BackToTop;