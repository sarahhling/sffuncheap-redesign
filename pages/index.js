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
        <Col className="gridCol" sm={8} md={8} lg={8} xl={8}>
          Banner Pic
        </Col>
        <Col
          className={`gridCol ps-4 pe-4 py-5 ${styles.bigBannerText}`}
          sm={4}
          md={4}
          lg={4}
          xl={4}
        >
          Find the best cheap events in the bay area all in one place
        </Col>
      </Row>
      <Row className="justify-content-md-center gridRow pt-4">
        <Col className="gridCol pt-2" sm={2} md={2} lg={2} xl={2}>
          <div className={` py-4 px-2 ${styles.square}`}>
            <p>WHO ARE WE?</p>
          </div>
        </Col>
        <Col
          className={`gridCol pt-2 ${styles.about}`}
          sm={10}
          md={10}
          lg={10}
          xl={10}
        >
          Funcheap was started in 2003 as two poor, underemployed San
          Franciscans, Johnny and Shannon who were sick and tired of trolling
          through the Guardian, the Weekly, Craigslist and all those fliers on
          telephone poles on Haight Street just to find out fun and free things
          to do. So they put together a list for themselves and their friends.
          10,000 people later, they figured we were on to something! Then Johnny
          & Shannon decided they might possibly love each other more than free
          events, started dating and got married. The end.
        </Col>
      </Row>
      <Row className="justify-content-md-center gridRow pt-4">
        <Col className="gridCol pt-2" sm={2} md={2} lg={2} xl={2}>
          <div className={` py-4 px-3 ${styles.square}`}>
            <p>JUST ADDED</p>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row className="justify-content-md-center gridRow pt-4">
        <Col className="gridCol pt-2" sm={2} md={2} lg={2} xl={2}>
          <div className={`py-3 px-2 ${styles.square}`}>
            <p>FEATURED THIS MONTH</p>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row className="justify-content-md-center gridRow pt-4">
        <Col className="gridCol pt-2" sm={2} md={2} lg={2} xl={2}>
          <div className={` py-4 px-3 ${styles.square}`}>
            <p>EVENTS BY TAGS</p>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row className="justify-content-md-center gridRow pt-4">
        <Col className="gridCol ps-3 pt-2" sm={5} md={5} lg={5} xl={5}>
          <strong>SIGN UP FOR OUR NEWSLETTER</strong>
        </Col>
        <Col className="gridCol" sm={7} md={7} lg={7} xl={7}>
          <div className="input-group">
            <input
              type="text"
              className={`form-control input-sm ${styles.searchBar}`}
            />
            <button
              className={`btn btn-primary py-0 ${styles.buttonColor}`}
              type="button"
            >
              <strong>SUBMIT</strong>
            </button>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center gridRow pt-5">
        <Col className="gridCol footer pt-3">
          <p className="text-center footer">
            <strong className="footer">FOOTER</strong>
          </p>
        </Col>
        <Col className="gridCol footer pt-3">
          <p className="text-center footer">
            <strong className="footer">SOCIAL MEDIA LINKS</strong>
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
