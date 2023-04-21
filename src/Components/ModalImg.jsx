import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {MdAddAPhoto} from 'react-icons/md'
// import { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPictureProfile } from '../Redux/Actions/action_profile';
// import { addPictureExperience } from "../Redux/Actions/action_profile";




function ModalImg() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [photo, setPhoto] = useState();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.login)
    //const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNmMxYWQ3YjUwNDAwMTQyZDI2ZGQiLCJpYXQiOjE2ODE4MjQyOTAsImV4cCI6MTY4MzAzMzg5MH0.6hKmTY3hJA6GBeL-K8BBspzXouoH-txWkfPPDDFi3cs'
    const key=useSelector((state)=>state.user.key)

    return (
        <>
            <MdAddAPhoto className='biPencil p-2 MdAddAPhoto' onClick={handleShow} />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeVariant='white' closeButton className='border-secondary'>
                    <Modal.Title>Modifica foto profilo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formFile" className="mb-3 d-flex align-items-center">
                        <Form.Control type="file" onChange={(e) => {
                            setPhoto(e.target.files[0])
                        }}/>
                        <br />
                        <Button className='ms-2' variant="primary" onClick={() => {
                            dispatch(addPictureProfile(key, user._id, photo))
                            handleClose ()
                        } }>
                            Salva
                        </Button>
                    </Form.Group>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalImg