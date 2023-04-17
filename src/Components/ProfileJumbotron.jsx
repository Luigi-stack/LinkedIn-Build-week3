import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsBell } from 'react-icons/bs';
import {FaPaperPlane} from 'react-icons/fa'

const ProfileJumbotron = () => {
    return (
        <Container>
            <Row>
                <Col sm={12} lg={8}>
                    <Card style={{ width: 'auto' }}>
                        <Card.Img variant="top" src="https://marketplace.canva.com/EAENvpM8lg0/1/0/1600w/canva-clean-work-place-linkedin-banner-ENugiXwwVkE.jpg" />
                        <Card.Body>
                            <div>
                                <img className='profilePicture mb-4' src='https://placekitten.com/300/300' alt='profile picture'/>
                            </div>
                            <div className='d-flex'>
                                <div className='mb-3'>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum natus laborum vitae ad quidem quas sed ex, nisi odio doloribus illum, saepe consectetur impedit. Delectus maxime voluptas molestias amet et!
                                    </Card.Text>
                                </div>
                                <div>
                                    <p>Epicode SChool Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus laborum ea doloribus nihil minus deleniti cum rerum eaque omnis soluta aut magni alias unde labore, magnam eligendi fugiat fuga atque!</p>
                                </div>
                            </div>
                            <Button variant="primary"><FaPaperPlane/>Messaggio</Button>
                            <Button variant="primary" className='ms-3'>Altro</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={12} lg={4} className='bg-danger'>
                    SideBar
                </Col>

            </Row>

        </Container>

    )
}

export default ProfileJumbotron