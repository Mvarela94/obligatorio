import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import SectionHome from "./components/section-home";
import SectionAbout from "./components/section-about";
import SectionServices from "./components/section-services";
import SectionTimeline from "./components/section-timeline";
import SectionPortfolio from "./components/section-portfolio";
import SectionCounter from "./components/section-counter";
import SectionContact from "./components/section-contact";
import BackToTop from "./components/back-to-top";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SectionHome />
                <SectionAbout />
                <SectionServices />
                <SectionTimeline />
                <SectionPortfolio />
                <SectionCounter />
                <SectionContact />
                <BackToTop />
                <Footer />
            </div>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById("root"));