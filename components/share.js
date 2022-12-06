import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SHARE</Modal.Title>
        </Modal.Header>
        {/* link here */}
        <Modal.Body>
            <button type="gmail" class="btn btn-primary">
                <i class="https://icons8.com/icon/60987/gmail-logo icon-black"></i>
            </button>
            <button type="ymail" class="btn btn-primary">
                <i class="https://icons8.com/icon/38586/yahoo icon-black"></i>
            </button>
            <button type="email" class="btn btn-primary">
                <i class="https://icons8.com/icon/53388/mail icon-black"></i>
            </button>
            <button type="facebook" class="btn btn-primary">
                <i class="https://icons8.com/icon/118468/facebook icon-black"></i>
            </button>
            <button type="twitter" class="btn btn-primary">
                <i class="https://icons8.com/icon/437/twitter icon-black"></i>
            </button>
        </Modal.Body> 
      </Modal>
    </>
  );
}

render(<Example />);