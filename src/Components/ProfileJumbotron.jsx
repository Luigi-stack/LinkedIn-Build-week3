import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProfileJumbotron = () => {
    return (
        <Container>
            <Row>

                <Col sm={12} lg={8}>
                    <Card style={{ width: 'auto' }}>
                        <Card.Img variant="top" src="https://marketplace.canva.com/EAENvpM8lg0/1/0/1600w/canva-clean-work-place-linkedin-banner-ENugiXwwVkE.jpg" />
                        <Card.Body className='d-flex'>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
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