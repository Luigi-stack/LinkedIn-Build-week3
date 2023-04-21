import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsFillBookmarkFill } from 'react-icons/bs'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserMe } from '../Redux/Actions/action_profile';


const HomePageLeft = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.login)
    //const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNmMxYWQ3YjUwNDAwMTQyZDI2ZGQiLCJpYXQiOjE2ODE4MjQyOTAsImV4cCI6MTY4MzAzMzg5MH0.6hKmTY3hJA6GBeL-K8BBspzXouoH-txWkfPPDDFi3cs'
    const key=useSelector((state)=>state.user.key)
    console.log(user.image)
    useEffect(() => {
        dispatch(getUserMe(key))
    }, []);

    return (
        <Card className='stickyRight text-white bg-dark border-0 mb-3'>
            <Card.Img variant="top" src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png" style={{ height: '55px' }} />
            <div className='d-flex justify-content-center'>
                <img className='profilePictureHome' src={user.image} alt='profile' />
            </div>
            <Card.Body>
                <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Card.Title className='text-center m-0 fs-5 fw-bold'>{user.name} {user.surname}</Card.Title>
                </Link>
                <Card.Text className='textSmall text-center text-secondary'>
                    {user.title}
                </Card.Text>
            </Card.Body>

            <hr className="m-0" />

            <Card.Body className='hoverElement py-1'>
                <Card.Text className='textSmall fw-bold d-flex justify-content-between text-secondary'>
                    Chi ha visitato il tuo profilo? <span className='text-info ms-2'>116</span>
                </Card.Text>
            </Card.Body>

            <Card.Body className='hoverElement py-1'>
                <Card.Text className='textSmall fw-bold d-flex justify-content-between text-secondary'>
                    Visualizzazoni del tuo profilo <span className='text-info ms-2'>350</span>
                </Card.Text>
            </Card.Body>

            <hr className="m-0" />

            <Card.Body className='hoverElement'>
                <Card.Text className='textSmall text-white fw-bold d-flex align-items-center'>
                    <BsLinkedin className='me-2 text-warning' /> Prova LinkedIn Premium
                </Card.Text>
            </Card.Body>
            <hr className="m-0" />
            <Card.Body className='hoverElement'>
                <Card.Text className='textSmall text-white fw-bold d-flex align-items-center'>
                    <BsFillBookmarkFill className='text-secondary me-2' /> I miei elementi
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default HomePageLeft