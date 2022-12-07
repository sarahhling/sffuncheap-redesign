import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div></div>
    /* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD TO CALENDAR</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button type="google" className="btn btn-primary">
            <i className="https://icons8.com/icon/17904/google icon-black"></i>
          </button>
          <button type="ymail" className="btn btn-primary">
            <i className="https://icons8.com/icon/38586/yahoo icon-black"></i>
          </button>
          <button type="email" className="btn btn-primary">
            <i className="https://icons8.com/icon/53388/mail icon-black"></i>
          </button>
        </Modal.Body>
      </Modal> */
  );
}

render(<Example />);
