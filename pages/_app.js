import "../styles/globals.css";
//import Navbar from "../components/navBar";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomNavBar from "../components/customNavBar.js";

function MyApp({ Component, pageProps }) {
  return (
    <Container className={`w-75 px-5`}>
      <div className="containerForm">
        <Row className="gridRow">
          <Col className="gridCol">
            <CustomNavBar />
          </Col>
        </Row>
        <Component {...pageProps} />
      </div>
    </Container>
  );
}

export default MyApp;
