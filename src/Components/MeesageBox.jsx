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
                    variant="dark"
                    align="start"
                    title={
                        <>
                            <Image src="path_to_image" roundedCircle className='me-2' />
                            Messaggistica
                            
                            <Button className="bg-dark border-0 ms-auto"><Icon2.HiEllipsisHorizontal className="me-2 ms-auto" /></Button>
                            
                            <Button className="bg-dark border-0 ms-auto">
                                <Icon.BsPencil className="me-2 text-secondary" />
                            </Button>
                            
                            

                        </>
                    }
                >

                    <Dropdown.Item eventKey="1" className='text-white'><FormControl type="text" placeholder="Cerca messaggi" className="mr-sm-2 bg-secondary" /></Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                        <Row className="align-items-center">
                            <Col xs={2}>
                                <Image src="path_to_image" roundedCircle />
                            </Col>
                            <Col xs={10}>
                                <p className='m-0'>Testo della card</p>
                            </Col>
                        </Row>
                    </Dropdown.Item>

                    <Dropdown.Item eventKey="3">
                        <Row className="align-items-center">
                            <Col xs={2}>
                                <Image src="path_to_image" roundedCircle />
                            </Col>
                            <Col xs={10}>
                                <p className='m-0'>Testo della card</p>
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