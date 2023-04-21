import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BiPencil } from 'react-icons/bi';
import { RiSendPlaneFill } from 'react-icons/ri'
import SideBar from './SideBar';
import PersoneCheConosci from './PersoneCheConosci'
import Informazioni from './Informazioni';
import Esperienze from './Esperienze';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserMe } from '../Redux/Actions/action_profile';
import ModalImg from './ModalImg';

const ProfileJumbotron = () => {


    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.login)
    //const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNmMxYWQ3YjUwNDAwMTQyZDI2ZGQiLCJpYXQiOjE2ODE4MjQyOTAsImV4cCI6MTY4MzAzMzg5MH0.6hKmTY3hJA6GBeL-K8BBspzXouoH-txWkfPPDDFi3cs'
    const key=useSelector((state)=>state.user.key)
    console.log(user.image)
    useEffect(() => {
        dispatch(getUserMe(key))
    }, []);

    return (
        <Container className='mt-2'>
            <Row className='justify-content-center'>
                <Col sm={12} lg={8} className='mb-2 '>
                    <Card className='text-white bg-dark border-0' style={{ width: 'auto' }}>  {/* className='text-white bg-dark' */}
                        <Card.Img variant="top" src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png" />
                        <Card.Body>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <img className='profilePicture ms-3 mb-3' src={user.image} alt='profile' />
                                    <ModalImg />
                                </div>
                                <BiPencil className='biPencil p-2 fs-1' />
                            </div>

                            <div className='d-flex justify-content-between ms-1 mb-2'>
                                <div>
                                    <Card.Title className='fw-bold fs-3 m-0'>{user.name} {user.surname}</Card.Title>
                                    <Card.Text>
                                        <p className='m-0'>
                                            💻 {user.title} <a className='text-primary fw-bold text-decoration-none' href="https://it.linkedin.com/school/epicodeitalia/">@Epicode</a>
                                        </p>
                                        <p className='text-secondary m-0'>
                                            {user.area} <span>&#8226;</span> <span className='text-primary fw-bold'>{user.email}</span>
                                        </p>
                                        <p className='text-secondary m-0'>
                                            <span className='fw-semibold'>397</span> collegamenti
                                        </p>
                                    </Card.Text>
                                </div>
                                <div className='mx-3 mt-2'>
                                    <p className='mb-1'>
                                        <img src="https://media.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_100_100/0/1647618816994?e=1689811200&v=beta&t=wwmMmmlrJ5dTdg2Fv620Knivwh1Ec0kG8JplzelDQM0" alt="logo epicode" style={{ width: '25px' }} /> <a className='fw-bold text-decoration-none' href="https://it.linkedin.com/school/epicodeitalia/">EPICODE</a>
                                    </p>
                                    <p className='m-0'>
                                        <img src="https://media.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_100_100/0/1647618816994?e=1689811200&v=beta&t=wwmMmmlrJ5dTdg2Fv620Knivwh1Ec0kG8JplzelDQM0" alt="logo epicode" style={{ width: '25px' }} /> <a className='fw-bold text-decoration-none' href="https://it.linkedin.com/school/epicodeitalia/">EPICODE - Global</a>
                                    </p>
                                </div>
                            </div>
                            <Button variant="primary" size="sm" className='messaggioButton rounded-pill px-3'><RiSendPlaneFill /> Messaggio</Button>
                            <Button variant="outline-light" size="sm" className='altroButton rounded-pill px-3 ms-3'>Altro</Button>
                        </Card.Body>
                    </Card>
                    <Informazioni />
                    <Esperienze />
                </Col>

                <Col sm={12} lg={3} className=''>
                    <SideBar />
                    <PersoneCheConosci />
                </Col>
            </Row>

        </Container>

    )
}

export default ProfileJumbotron