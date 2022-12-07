import styles2 from "../styles/eventDetails.module.css";
import styles from "../styles/Home.module.css";

import { Row, Col, Image, Dropdown } from "react-bootstrap";
import BannerBlock from "../components/bannerBlock.js";
import EventCard from "../components/eventCard.js";
import TagChunks from "../components/tagChunks.js";
import Tag from "../components/tag.js";

export default function Home() {
  const buttonStyle = {
    color: "black",
    fontSize: "14px",
    fontWeight: "bold",
    borderColor: "black",
    borderRadius: "3px",
    backgroundColor: "white",
    height: "30px",
    paddingBottom: "24px",
  };
  return (
    <div>
      <Row className="gridRow">
        <Col>
          <Image
            src="images/houses-painted-ladies.jpg"
            alt="SF port"
            className={`${styles2.eventPic}`}
          />
        </Col>
      </Row>
      <Row className="pt-3">
        <Col sm={9} md={9} lg={9} xl={9}>
          <p style={{ fontSize: "26px", fontWeight: "bold" }}>
            EVENTS CALENDAR
          </p>
        </Col>
        <Col sm={3} md={3} lg={3} xl={3}>
          <Dropdown className="">
            <Dropdown.Toggle
              className={``}
              id="dropdown-basic"
              style={buttonStyle}
            >
              SORTED BY: PRICE
            </Dropdown.Toggle>

            <Dropdown.Menu className={``}>
              <Dropdown.Item href="#/action-1" className={``}>
                DATE
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" className={``}>
                A to Z
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1" className={``}>
                Z to A
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="justify-content-md-center gridRow pt-1">
        <EventCard
          title="Art Walk SF Block Party"
          date="JAN 12"
          pic="/images/crosswalk-painted.jpg"
        />
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
        <EventCard
          title="Art Walk SF Block Party"
          date="JAN 12"
          pic="/images/crosswalk-painted.jpg"
        />
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
        <EventCard
          title="Art Walk SF Block Party"
          date="JAN 12"
          pic="/images/crosswalk-painted.jpg"
        />
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
        <EventCard
          title="Art Walk SF Block Party"
          date="JAN 12"
          pic="/images/crosswalk-painted.jpg"
        />
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
      <Row className="justify-content-md-center gridRow pt-4">
        <EventCard
          title="Art Walk SF Block Party"
          date="JAN 12"
          pic="/images/crosswalk-painted.jpg"
        />
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
      <Row>
        <div
          className={`pt-5`}
          style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}
        >
          1 of 35 &nbsp;&nbsp;&nbsp;
          <button
            className={`btn btn-primary py-0 px-3 ${styles.buttonStyle2}`}
            type="button"
            onClick={() => router.push("/filter")}
          >
            NEXT
          </button>
        </div>
      </Row>
      {/* <Row className="justify-content-md-center gridRow pt-0">
        <Col className="gridCol pt-2"></Col>
        <TagChunks tags={tags1} width="145px" />
        <TagChunks tags={tags2} width="145px" />
        <TagChunks tags={tags3} width="145px" />
        <TagChunks tags={tags4} width="145px" />
      </Row> */}
      {/* <Row className="justify-content-md-center gridRow pt-5">
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
      </Row> */}
    </div>
  );
}
