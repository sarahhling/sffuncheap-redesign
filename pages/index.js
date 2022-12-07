import styles from "../styles/Home.module.css";
import { useState } from "react"; /*for newsletter modal */
import { Row, Col, Image, Button } from "react-bootstrap";
import BannerBlock from "../components/bannerBlock.js";
import EventCard from "../components/eventCard.js";
import TagChunks from "../components/tagChunks.js";
import Tag from "../components/tag.js";
import Modal from "react-bootstrap/Modal";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const tags1 = [
    <Tag tag="SAN FRANCISCO" color="#E07673" size="12px" key="1"></Tag>,
    <Tag tag="KIDS & FAMILY" color="#582E67" size="12px" key="2"></Tag>,
    <Tag tag="FREE" color="#1E5276" size="12px" key="3"></Tag>,
  ];

  const tags2 = [
    <Tag tag="CHEAP" color="#CB491D" size="12x" key="1"></Tag>,
    <Tag tag="SHOPPING" color="#582E67" size="12px" key="2"></Tag>,
    <Tag tag="EAST BAY" color="#1E5276" size="12px" key="3"></Tag>,
  ];

  const tags3 = [
    <Tag tag="SAN FRANCISCO" color="#E07673" size="11px" key="1"></Tag>,
    <Tag tag="FREE" color="#1E5276" size="11px" key="3"></Tag>,
    <Tag tag="NEAR BUS" color="#582E67" size="10.5px" key="2"></Tag>,
    <Tag tag="PARKS & REC" color="#E1992B" size="11px" key="3"></Tag>,
  ];

  const tags4 = [
    <Tag tag="CHEAP" color="#CB491D" size="12px" key="1"></Tag>,
    <Tag tag="EAT & DRINKS" color="#582E67" size="12px" key="2"></Tag>,
    <Tag tag="SAN FRANCISCO" color="#1E5276" size="12px" key="3"></Tag>,
  ];
  return (
    <div>
      <Row className="gridRow">
        <Col className="gridCol" sm={6} md={6} lg={7} xl={7}>
          <Image
            src="images/golden-gate-bridge.png"
            alt="golden gate bridge"
            height={300}
          />
        </Col>
        <Col
          className={`gridCol ${styles.bigBannerText}`}
          sm={6}
          md={6}
          lg={5}
          xl={5}
        >
          <p className="px-4">
            Find the best cheap events in the bay area all in one place
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center gridRow pt-4">
        <Col className="gridCol pt-2" sm={12} md={2} lg={3} xl={3}>
          <BannerBlock
            color="#582E67"
            text="WHO ARE WE?"
            paddingLeft="16px"
            paddingTop="45px"
          />
        </Col>
        <Col
          className={`gridCol px-0 pt-2 ${styles.about}`}
          sm={12}
          md={10}
          lg={9}
          xl={9}
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
        <Col className="gridCol">
          <BannerBlock
            color="#1E5276"
            text="JUST ADDED"
            paddingLeft="19px"
            paddingTop="55px"
          />
        </Col>
        <EventCard
          title="Art Walk SF Block Party"
          date="JAN 12"
          pic="/images/crosswalk-painted.jpg"
        />
        <EventCard
          title="2022 World Cup Semi-Finals Watch Party"
          date="DEC 14"
          pic="/images/crowd.jpg"
        />
        <EventCard
          title="Noise Pop's Holiday Party"
          date="DEC 21"
          pic="/images/crowd-concert.jpg"
        />
        <EventCard
          title="$6 Drive-In Movie Night"
          date="DEC 27 "
          pic="/images/billboard-blank.jpg"
        />
      </Row>
      <Row className="justify-content-md-center gridRow pt-4">
        <Col className="gridCol pt-2">
          <BannerBlock
            color="#E1992B"
            text="FEATURED THIS MONTH"
            paddingLeft="15px"
            paddingTop="35px"
          />
        </Col>
        <EventCard
          title="SF Arcade Free Game Night"
          date="DEC 5"
          pic="/images/neon-club-arcade.jpg"
        />
        <EventCard
          title="Let's glow SF"
          date="DEC 2"
          pic="/images/christmas-icicle-building.jpg"
        />
        <EventCard
          title="SF's Winterfest Beer & Comedy Hour"
          date="DEC 18"
          pic="/images/beer-fireplace.jpg"
        />
        <EventCard
          title="SF Symphony 'The Colors of Christmas' Live"
          date="DEC 6"
          pic="/images/christmas-organ.png"
        />
      </Row>
      <Row className="justify-content-md-center gridRow pt-4">
        <Col className="gridCol pt-2">
          <BannerBlock
            color="white"
            text=""
            paddingLeft="15px"
            paddingTop="25px"
          />
        </Col>
        <EventCard
          title="Art Walk SF Block Party"
          date="DEC 1"
          pic="/images/crosswalk-painted.jpg"
        />
        <EventCard
          title="Oakland Comedy Night"
          date="DEC 8"
          pic="/images/comedyClub.jpg"
        />
        <EventCard
          title="Grace Cathedral’s “A Cathedral Christmas”"
          date="DEC 18"
          pic="/images/christmas-cathedral-tree.jpg"
        />
        <EventCard
          title="37th Annual NYE Japanese Ringing Ceremony"
          date="Dec 31"
          pic="/images/bell-giant-asian.jpg"
        />
      </Row>
      <Row className="justify-content-md-center gridRow pt-4">
        <Col className="gridCol pt-2">
          <BannerBlock
            color="#E07673"
            text="EVENTS BY TAGS"
            paddingLeft="18px"
            paddingRight="10px"
            paddingTop="50px"
          />
        </Col>
        <EventCard
          title="Hayes Valley 32nd Holiday Stroll"
          date="DEC 2"
          pic="/images/christmas-lights-walkway.jpg"
        />
        <EventCard
          title="Grace Cathedral’s “A Cathedral Christmas”"
          date="DEC 18"
          pic="/images/christmas-cathedral-tree.jpg"
        />
        <EventCard
          title="Golden Gate Park Jazz Concert"
          date="DEC 27 "
          pic="/images/outdoor-concert-palace.png"
        />
        <EventCard
          title="'Pay-what-you-can' Taco Day"
          date="DEC 1"
          pic="/images/food-tacos.jpg"
        />
      </Row>
      <Row className="justify-content-md-center gridRow pt-0">
        <Col className="gridCol pt-2"></Col>
        <TagChunks tags={tags1} width="145px" />
        <TagChunks tags={tags2} width="145px" />
        <TagChunks tags={tags3} width="145px" />
        <TagChunks tags={tags4} width="145px" />
      </Row>
      <Row className="justify-content-md-center gridRow pt-5">
        <Col
          className="gridCol ps-4 pt-2"
          sm={5}
          md={5}
          lg={5}
          xl={5}
          style={{ fontSize: "20px" }}
        >
          <strong>SIGN UP FOR OUR NEWSLETTER!</strong>
        </Col>
        <Col className="gridCol" sm={7} md={7} lg={7} xl={7}>
          <div className="input-group ps-4 pt-2 pe-5">
            <input
              type="text"
              placeholder="your-email@email.com"
              className={`form-control input-sm ${styles.searchBar}`}
            />
            <button
              className={`btn btn-primary py-0 px-3 ${styles.buttonColor}`}
              type="button"
              onClick={handleShow}
            >
              <strong>SUBMIT</strong>
            </button>
          </div>
        </Col>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </div>
  );
}
