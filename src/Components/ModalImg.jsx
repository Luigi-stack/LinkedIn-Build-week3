import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BiPencil } from 'react-icons/bi';
import Form from 'react-bootstrap/Form';



function ModalImg() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <BiPencil className='biPencil p-2 fs-1' onClick={handleShow} />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeVariant='white' closeButton className='border-secondary'>
                    <Modal.Title>Modifica foto profilo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formFile" className="mb-3 d-flex align-items-center">
                        <Form.Control type="file"/>
                        <br />
                        <Button className='ms-2' variant="primary" onClick={handleClose}>
                            Salva
                        </Button>
                    </Form.Group>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalImg