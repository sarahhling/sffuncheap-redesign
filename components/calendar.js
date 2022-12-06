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
          <Modal.Title>ADD TO CALENDAR</Modal.Title>
        </Modal.Header>
        {/* link here */}
        <Modal.Body>
            <button type="google" class="btn btn-primary">
                <i class="https://icons8.com/icon/17904/google icon-black"></i>
            </button>
            <button type="ymail" class="btn btn-primary">
                <i class="https://icons8.com/icon/38586/yahoo icon-black"></i>
            </button>
            <button type="email" class="btn btn-primary">
                <i class="https://icons8.com/icon/53388/mail icon-black"></i>
            </button>
        </Modal.Body> 
      </Modal>
    </>
  );
}

render(<Example />);