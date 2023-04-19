import { Container, Row, Col } from "react-bootstrap"
import { SectionRight } from "./SectionRight"


const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col sm={12} lg={2}>
                    {/* qui inserisci la parte di sinistra */}
                    <h1>ciao</h1>
                </Col>

                <Col sm={12} lg={6}>
                    {/* qui inserisci la parte centrale */}
                </Col>

                <Col sm={12} lg={2}>
                    <SectionRight />
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage