import { Container, Row, Col } from "react-bootstrap"
import { SectionRight } from "./SectionRight"
import AllNews from "./AllNews"
import HomePageLeft from "./HomePageLeft"
import PostBox from "./PostBox"
import Recent from "./Recent"



const HomePage = () => {
    return (
        <Container className="mt-2">
            <Row className="justify-content-center">
                <Col sm={12} lg={3}>
                    <HomePageLeft/>
                  <Recent/>
                </Col>

                <Col sm={12} lg={5}>
                    <PostBox />
                    <AllNews />
                </Col>

                <Col  sm={12} lg={3} >    
                    < SectionRight />      
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage