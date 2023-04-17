import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import { ButtonGroup, FormControl, Button, Card } from 'react-bootstrap';
import * as Icon from 'react-icons/bs'
import * as Icon2 from 'react-icons/hi2'
import * as Icon3 from 'react-icons/gr'
import { Row, Col, Image } from 'react-bootstrap';



function MessageBox() {
    return (
        <>
            

                <SplitButton
                    className= "dropdown-menu-right position-sticky-bottom"
                    drop="up-down-center"
                    variant="secondary"
                    align="start"
                    title={
                        <>

                            messaggistica
                            <Button>
                                <Icon.BsPencil className="me-2" />
                            </Button>
                            <Icon2.HiEllipsisHorizontal className="me-2" />

                        </>
                    }
                >

                    <Dropdown.Item eventKey="1"><FormControl type="text" placeholder="Cerca messaggi" className="mr-sm-2" /></Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                        <Row className="align-items-center">
                            <Col xs={2}>
                                <Image src="path_to_image" roundedCircle />
                            </Col>
                            <Col xs={10}>
                                <p>Testo della card</p>
                            </Col>
                        </Row>
                    </Dropdown.Item>

                    <Dropdown.Item eventKey="3">
                        <Row className="align-items-center">
                            <Col xs={2}>
                                <Image src="path_to_image" roundedCircle />
                            </Col>
                            <Col xs={10}>
                                <p>Testo della card</p>
                            </Col>
                        </Row>
                    </Dropdown.Item>

                    
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </SplitButton>


            

            <div>


            </div>
        </>
    );
}

export default MessageBox;