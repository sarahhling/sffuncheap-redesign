//import styles from "../styles/Home.module.css";
import Navbar from "../components/navBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Components from "../components/navbar.js"

export default function Home() {
  return (
    <Container>
      <Row className="justify-content-md-center gridRow">
        <Col className="gridCol">Navbar</Col>
      </Row>
      <Row className="justify-content-md-center gridRow">
        <Col sm className="gridCol">
          Banner
        </Col>
      </Row>
      <Row className="justify-content-md-center gridRow">
        <Col sm className="gridCol">
          who
        </Col>
      </Row>
      <Row className="justify-content-md-center gridRow">
        <Col sm className="gridCol">
          added
        </Col>
      </Row>
      <Row className="justify-content-md-center gridRow">
        <Col sm className="gridCol">
          featured
        </Col>
      </Row>
      <Row className="justify-content-md-center gridRow">
        <Col sm className="gridCol">
          tags
        </Col>
      </Row>
      <Row className="justify-content-md-center gridRow">
        <Col sm className="gridCol">
          newsletter
        </Col>
      </Row>
      <Row className="justify-content-md-center gridRow">
        <Col sm className="gridCol">
          Footer
        </Col>
      </Row>
    </Container>
  );
}

/*
<Container>
        <>
          {[
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark",
          ].map((variant) => (
            <Alert key={variant} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
          ))}
        </>
      </Container>
      */
