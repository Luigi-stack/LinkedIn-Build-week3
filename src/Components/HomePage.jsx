import { Container, Row, Col } from "react-bootstrap"
import { SectionRight } from "./SectionRight"
import AllNews from "./AllNews"
import HomePageLeft from "./HomePageLeft"
import PostBox from "./PostBox"


const HomePage = () => {
    return (
        <Container className="mt-2">
            <Row>
                <Col sm={12} lg={3} className="offset-lg-1">
                    <HomePageLeft />
                </Col>

                <Col sm={12} lg={5}>
                    <PostBox />
                    <AllNews />
                </Col>

                <Col sm={12} lg={2}>
                    <SectionRight />
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage