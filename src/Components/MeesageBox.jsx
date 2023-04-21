import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import SplitButton from 'react-bootstrap/SplitButton';
import { ButtonGroup, FormControl, Button, Card } from 'react-bootstrap';
import * as Icon from 'react-icons/bs'
import * as Icon2 from 'react-icons/hi2'
import * as Icon3 from 'react-icons/gr'
import { Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';


function MessageBox() {

    const [toogle, setToogle] = useState(false)

    return (
        <>




            {

                toogle ? (


                    <Card style={{ width: '18rem' }} bg="dark" className='position-sticky-bottom text-light'>



                        <Card.Title className='m-0'>
                            <Image src="path_to_image" roundedCircle className='mx-2' />
                            <span className='fs-6'>Messaggistica</span>

                            <Button className="bg-dark border-0 ms-auto"><Icon2.HiEllipsisHorizontal className="me-2 ms-auto" /></Button>

                            <Button className="bg-dark border-0 ms-auto">
                                <Icon.BsPencil className="me-2 text-white" />
                            </Button>

                            <Button className="bg-dark border-0 ms-auto myButton" onClick={() => { setToogle(false) }}>
                                <Icon.BsArrowDownCircle className="me-2 text-white" />
                            </Button>


                        </Card.Title>

                        <Card.Footer className='myCard'>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Footer>

                    </Card>

                ) : (



                    <Card style={{ width: '18rem' }} bg="dark" className='position-sticky-bottom text-light'>



                        <Card.Title className='m-0'>
                            <Image src="path_to_image" roundedCircle className='mx-2' />
                            <span className='fs-6'>Messaggistica</span>

                            <Button className="bg-dark border-0 ms-auto"><Icon2.HiEllipsisHorizontal className="me-2 ms-auto" /></Button>

                            <Button className="bg-dark border-0 ms-auto">
                                <Icon.BsPencil className="me-2 text-white" />
                            </Button>

                            <Button className="bg-dark border-0 ms-auto myButton" onClick={() => { setToogle(true) }}>
                                <Icon.BsArrowUpCircle className="me-2 text-white" />
                            </Button>


                        </Card.Title>



                    </Card>

                )

            }










            {/*
                <SplitButton
                    className= "dropdown-menu-right position-sticky-bottom"
                    drop="up-down-center"
                    variant="dark"
                    align="start"
                    title={
                        <>
                        
                            
                            
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
        */}
        </>
    );
}

export default MessageBox;