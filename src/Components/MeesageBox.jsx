import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import SplitButton from 'react-bootstrap/SplitButton';
import { ButtonGroup, FormControl, Button, Card, ListGroup } from 'react-bootstrap';
import * as Icon from 'react-icons/bs'
import * as Icon2 from 'react-icons/hi2'
import * as Icon3 from 'react-icons/gr'
import { Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';


function MessageBox() {

    const [toogle, setToogle] = useState(false)
    const user = useSelector((state) => state.user.login)

    return (
        <>




            {

                toogle ? (


                    <Card style={{ width: '19rem' }} bg="dark" className='position-sticky-bottom text-light'>



                        <Card.Title className='d-flex align-items-center'>
                            <Image src={user.image} roundedCircle className='mx-2 mt-1 imageprofile' />
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
                            <div className="d-flex align-items-center">
                                <input type="search" className="form-control-sm w-100" placeholder="Cerca messaggi" />
                            </div>
                            <ListGroup className="mt-">
                                <ListGroup.Item className="d-flex align-items-center bg-dark border-0">
                                    <img src="http://placekitten.com/200/300" alt="profilo" className="rounded-circle me-3" />
                                    <div className='text-white'>Messaggio 1</div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center bg-dark border-0">
                                    <img src="http://placekitten.com/200/300" alt="profilo" className="rounded-circle me-3" />
                                    <div className='text-white'>Messaggio 2</div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center bg-dark border-0">
                                    <img src="http://placekitten.com/200/300" alt="profilo" className="rounded-circle me-3" />
                                    <div className='text-white'>Messaggio 3</div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Footer>


                    </Card>

                ) : (



                    <Card style={{ width: '19rem' }} bg="dark" className='position-sticky-bottom text-light'>



                        <Card.Title className='d-flex align-items-center'>
                            <Image src={user.image} roundedCircle className='mx-2 mt-1 imageprofile' />
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