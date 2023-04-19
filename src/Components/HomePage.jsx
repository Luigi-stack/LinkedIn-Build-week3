import { Container, Row, Col } from "react-bootstrap"
import HomePageLeft from "./HomePageLeft"


const HomePage = () => {
    return (
        <Container className="mt-2">
            <Row>
                <Col sm={12} lg={3}  className="offset-lg-1">
                    {/* qui inserisci la parte di sinistra */}
                    <HomePageLeft />
                </Col>

                <Col sm={12} lg={5}>
                    {/* qui inserisci la parte centrale */}
                </Col>

                <Col sm={12} lg={2}>
                    {/* qui inserisci la parte di destra */}
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage