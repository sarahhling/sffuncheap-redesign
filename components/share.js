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
          <Modal.Title>SHARE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button type="gmail" className="btn btn-primary">
            <i className="https://icons8.com/icon/60987/gmail-logo icon-black"></i>
          </button>
          <button type="ymail" class="btn btn-primary">
            <i className="https://icons8.com/icon/38586/yahoo icon-black"></i>
          </button>
          <button type="email" className="btn btn-primary">
            <i className="https://icons8.com/icon/53388/mail icon-black"></i>
          </button>
          <button type="facebook" className="btn btn-primary">
            <i className="https://icons8.com/icon/118468/facebook icon-black"></i>
          </button>
          <button type="twitter" className="btn btn-primary">
            <i className="https://icons8.com/icon/437/twitter icon-black"></i>
          </button>
        </Modal.Body>
      </Modal>
    </> */
  );
}

render(<Example />);
