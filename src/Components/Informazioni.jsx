import { Card } from "react-bootstrap"
import { BiPencil } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserMe } from '../Redux/Actions/action_profile';


const Informazioni = () => {

    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user.login) 
    const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYTNlMmZjYTEyOTAwMTQ0MGMwYTciLCJpYXQiOjE2ODE4MjY3ODYsImV4cCI6MTY4MzAzNjM4Nn0.B6XNeUSKb3fCDjALI9vzfq9BAgJ1haEHZtipFBgrR5s'
    console.log(user.image)
    useEffect(() => {
    dispatch(getUserMe(key))
    }, []);
    return (
        <Card className="mt-3">
            <Card.Body className="fs-5 fw-bold pb-0 d-flex justify-content-between">Informazioni<BiPencil className='biPencil p-1 fs-3' />
            </Card.Body>
            <Card.Body>
                👋 {user.bio} 💻
            </Card.Body>
            <Card.Body>
                <Card body>
                    <BsStars className="fs-4 text-secondary me-1" />
                    <span className="fw-bold">Competenze principali</span> <br /> <span className="ms-4">HTML5 • CSS • JavaScript • React.js • Sviluppo front-end</span>
                </Card>
            </Card.Body>
        </Card>
    )
}

export default Informazioni