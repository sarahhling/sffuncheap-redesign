import styles from "../styles/Home.module.css";
import CustomNavBar from "../components/customNavBar.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Components from "../components/navbar.js"

export default function Home() {
  return (
    <Container>
      <Row className="gridRow">
        <Col className="gridCol">
          <CustomNavBar />
        </Col>
      </Row>
      <Row className="justify-content-md-center gridRow">
        <Col className="gridCol">Banner Pic</Col>
        <Col className={`gridCol py-5 px-4 ${styles.bannerText}`}>
          FInd the best cheap events in the bay area all in one place
        </Col>
      </Row>
      <Row className="justify-content-md-center gridRow">
        <Col className="gridCol">who</Col>
      </Row>
      <Row className="justify-content-md-center gridRow">
        <Col className="gridCol">added</Col>
      </Row>
      <Row className="justify-content-md-center gridRow">
        <Col className="gridCol">featured</Col>
      </Row>
      <Row className="justify-content-md-center gridRow">
        <Col className="gridCol">tags</Col>
      </Row>
      <Row className="justify-content-md-center gridRow">
        <Col className="gridCol">newsletter</Col>
      </Row>
      <Row className="justify-content-md-center gridRow">
        <Col className="gridCol footer pt-3">
          <p className="text-center footer">
            <strong class="footer">FOOTER</strong>
          </p>
        </Col>
        <Col className="gridCol footer pt-3">
          <p className="text-center footer">
            <strong class="footer">SOCIAL MEDIA LINKS</strong>
          </p>
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
