import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles2 from "../styles/eventDetails.module.css";
//import { contactConfig } from "../content_option";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/Home.module.css";
import Image from "react-bootstrap/Image";
export default function ContactUs() {
  return (
    <div>
      <Row className="gridRow">
        <Col>
          <Image
            src="images/port.png"
            alt="SF port"
            className={`${styles2.eventPic}`}
          />
        </Col>
      </Row>
      <Row className="gridRow px-5">
        <Col className={`py-4`}>
          <p style={{ fontSize: "45px", fontWeight: "bold" }}>CONTACT</p>
          <p style={{ fontSize: "16px" }}>
            If you have questions, comments, rant or want to promote an event on
            our site please fill out this form.
          </p>
        </Col>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>
              <strong>NAME*</strong>
            </Form.Label>
            <Form.Control type="email" className={`${styles.ContactInput}`} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <strong>EMAIL*</strong>
            </Form.Label>
            <Form.Control type="email" className={`${styles.ContactInput}`} />
          </Form.Group>
          <Form.Label>
            <strong>SUBJECT*</strong>
          </Form.Label>
          <Dropdown className="pb-4">
            {/* <Dropdown.Group className="mb-3" controlID="formBasicDropdown"> trying to add a label
          <Dropdown.Label>Subject*</Dropdown.Label>
        </Dropdown.Group> */}
            <Dropdown.Toggle
              className={`${styles.dropDownStyle}`}
              id="dropdown-basic"
            >
              Select subject
            </Dropdown.Toggle>

            <Dropdown.Menu className={`${styles.dropDownStyle}`}>
              <Dropdown.Item
                href="#/action-1"
                className={`${styles.dropDownStyle}`}
              >
                Question
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                className={`${styles.dropDownStyle}`}
              >
                Comment
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                className={`${styles.dropDownStyle}`}
              >
                Rant
              </Dropdown.Item>

              <Dropdown.Item
                href="#/action-2"
                className={`${styles.dropDownStyle}`}
              >
                Promote an event
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                className={`${styles.dropDownStyle}`}
              >
                Something else
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>
              <strong>MESSAGE*</strong>
            </Form.Label>
            {/* <Form.Control type="message" placeholder="Enter message" />
             */}
            <input
              type="text"
              placeholder="Enter message"
              className={`form-control input-sm ${styles.messageForm}`}
            />
          </Form.Group>
          <div className="text-end">
            <Button className={`${styles.buttonStyle}`} type="submit">
              SUBMIT
            </Button>
          </div>
        </Form>
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
    </div>
  );
  // <Container>
  //   <Row className="gridRow">
  //     <Col className="gridCol">
  //       <CustomNavBar />
  //     </Col>
  //   </Row>
  //   <Row className="mb-5 mt-3">
  //     <Col lg="8">
  //       <h1 className="display-4 mb-4">Contact</h1>
  //       <hr className="t_border my-4 ml-0 text-left" />
  //     </Col>
  //   </Row>
  //   <Row className="sec_sp">
  //     <Col lg="5" className="mb-5">
  //       <h3 className="color_sec py-4">
  //         If you have questions, comments, or would like to add an event,
  //         please fill out this form.
  //       </h3>
  //       <address>
  //         <strong>Email:</strong>{" "}
  //         <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
  //           {contactConfig.YOUR_EMAIL}
  //         </a>
  //         <br />
  //         <br />
  //         {contactConfig.hasOwnProperty("YOUR_FONE") ? (
  //           <p>
  //             <strong>Phone:</strong> {contactConfig.YOUR_FONE}
  //           </p>
  //         ) : (
  //           ""
  //         )}
  //       </address>
  //       <p>{contactConfig.description}</p>
  //     </Col>
  //     <Col lg="7" className="d-flex align-items-center">
  //       <form className="contact__form w-100">
  //         <Row>
  //           <Col lg="6" className="form-group">
  //             <input
  //               className="form-control"
  //               id="name"
  //               name="name"
  //               placeholder="Name"
  //               type="text"
  //               required
  //             />
  //           </Col>
  //           <Col lg="6" className="form-group">
  //             <input
  //               className="form-control rounded-0"
  //               id="email"
  //               name="email"
  //               placeholder="Email"
  //               type="email"
  //               required
  //             />
  //           </Col>
  //         </Row>
  //         <textarea
  //           className="form-control rounded-0"
  //           id="message"
  //           name="message"
  //           placeholder="Message"
  //           rows="5"
  //           required
  //         ></textarea>
  //         <br />
  //         <Row>
  //           <Col lg="12" className="form-group">
  //             <button className="btn ac_btn" type="submit">
  //               Send
  //             </button>
  //           </Col>
  //         </Row>
  //       </form>
  //     </Col>
  //   </Row>
  //   <Row className="justify-content-md-center gridRow pt-5">
  //     <Col className="gridCol footer pt-3">
  //       <p className="text-center footer">
  //         <strong className="footer">FOOTER</strong>
  //       </p>
  //     </Col>
  //     <Col className="gridCol footer pt-3">
  //       <p className="text-center footer">
  //         <strong className="footer">SOCIAL MEDIA LINKS</strong>
  //       </p>
  //     </Col>
  //   </Row>
  // </Container>
  // );
}
