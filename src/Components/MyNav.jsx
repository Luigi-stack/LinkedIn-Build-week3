import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';

import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { IoIosNotifications } from 'react-icons/io';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RiTableFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';



const MyNav = function () {
    return (
        <>
            <nav>
                <Container>
                    <div className='d-flex navRow'>
                        <div className="searchBar d-flex">
                            <div className='svg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="35" height="35" focusable="false">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                            </svg></div>
                            <div className="d-flex inputBar py-1 px-3 mx-1">
                                <div>
                                    <div className='icons'><BiSearchAlt2 /></div>
                                </div>

                                <div>
                                    <input type="text" placeholder="Cerca" />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex secondaryNav'>
                            <div className="iteration d-flex">
                                <Link to='home' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                    <div className='btnIcon mx-3 p-1'>
                                        <div className="icons"><AiFillHome /><Badge bg='danger'></Badge> </div>
                                        <div>Home</div>
                                    </div>
                                </Link>
                                <div className='btnIcon mx-3 p-1'>
                                    <div className="icons"><BsFillPeopleFill /><Badge bg='danger'></Badge></div>
                                    <div>Rete</div>
                                </div>
                                <div className='btnIcon mx-3 p-1'>
                                    <div className="icons"><MdWork /><Badge bg='danger'></Badge></div>
                                    <div>Lavoro</div>
                                </div>
                                <div className='btnIcon mx-3 p-1'>
                                    <div className="icons"><AiFillMessage /><Badge bg='danger'></Badge></div>
                                    <div>Messaggistica</div>
                                </div>
                                <div className='btnIcon mx-3 p-1'>
                                    <div className="icons"><IoIosNotifications /><Badge bg='danger'></Badge></div>
                                    <div>Notifica</div>
                                </div>
                                <div className='mx-3 p-1 '>
                                    <Dropdown className='btnIcon'>
                                        <Dropdown.Toggle>
                                            <span className='subDrop'>
                                                <div className='icons i'><BsFillPeopleFill /><Badge bg='danger'></Badge></div>
                                                <span >Tu</span>
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="sideBar mx-5 p-1">
                                <Dropdown className='btnIcon'>
                                    <Dropdown.Toggle>
                                        <span className='subDrop'>
                                            <div className='icons i '><RiTableFill /></div>
                                            <span >Per le aziende</span>
                                        </span>

                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>

                    </div>
                </Container>
            </nav>

        </>
    )
}
export default MyNav