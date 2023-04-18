import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BiPencil } from 'react-icons/bi';
import { RiSendPlaneFill } from 'react-icons/ri'
import SideBar from './SideBar';
import PersoneCheConosci from './PersoneCheConosci'
import Informazioni from './Informazioni';

const ProfileJumbotron = () => {
    
    return (
        <Container className='mt-2'>
            <Row>
                <Col sm={12} lg={8} className='mb-2'>
                    <Card style={{ width: 'auto' }}>  {/* className='text-white bg-dark' */}
                        <Card.Img variant="top" src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png" />
                        <Card.Body>
                            <div className='d-flex justify-content-between'>
                                <img className='profilePicture ms-3 mb-3' src='https://placekitten.com/300/300' alt='profile' />
                                <BiPencil className='biPencil p-1 fs-3' />
                            </div>
                            <div className='d-flex justify-content-between ms-1 mb-2'>
                                <div>
                                    <Card.Title className='fw-bold m-0'>Gatto Silvestro</Card.Title>
                                    <Card.Text>
                                        <p className='m-0'>
                                        💻 Full-stack developer <a className='text-primary fw-bold text-decoration-none' href="https://it.linkedin.com/school/epicodeitalia/">@Epicode</a>
                                        </p>
                                        <p className='text-secondary m-0'>
                                            Roma - Italia <span>&#8226;</span> <span className='text-primary fw-bold'>informazioni di contatto</span>
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
                            <Button variant="outline-dark" size="sm" className='altroButton rounded-pill px-3 ms-3'>Altro</Button>
                        </Card.Body>
                    </Card>
                    <Informazioni/>
                </Col>

                <Col sm={12} lg={4} className=''>
                    <SideBar/>
                    <PersoneCheConosci/>
                </Col>
            </Row>

        </Container>

    )
}

export default ProfileJumbotron