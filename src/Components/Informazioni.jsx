import { Card } from "react-bootstrap"
import { BiPencil } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserMe } from '../Redux/Actions/action_profile';


const Informazioni = () => {

    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user.login) 
    console.log(user.image)

    return (
        <Card className="text-white bg-dark border-0 mt-3">
            <Card.Body className="fs-5 fw-bold pb-0 d-flex justify-content-between">
                Informazioni<BiPencil className='biPencil p-2 fs-1' />
            </Card.Body>
            <Card.Body>
                👋 {user.bio} 💻
            </Card.Body>
            <Card.Body>
                <Card body className="text-white bg-dark border-secondary">
                    <BsStars className="fs-4 me-1" />
                    <span className="fw-bold">Competenze principali</span> <br /> <span className="ms-4">HTML5 • CSS • JavaScript • React.js • Sviluppo front-end</span>
                </Card>
            </Card.Body>
        </Card>
    )
}

export default Informazioni