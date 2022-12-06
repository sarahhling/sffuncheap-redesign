import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          To like and save events to your favorites list log in!
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>
                <strong>USERNAME</strong>
            </Form.Label>
             <Form.Control type="username" className={`${styles.ContactInput}`} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>
                <strong>PASSWORD</strong>
            </Form.Label>
             <Form.Control type="password" className={`${styles.ContactInput}`} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Enter</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

render(<Example />);