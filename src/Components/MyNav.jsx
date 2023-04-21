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
import { useSelector } from 'react-redux';
import { useState } from 'react';



const MyNav = function () {

    const [toggle, setToggle] = useState(false)
    const utent = useSelector((state) => state.user.login)
    console.log(utent)

    return (
        <>
            <nav className='bg-dark'>
                <Container>
                    <div className='d-flex navRow'>
                        <div className="searchBar d-flex ">
                            <div className='svg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="35" height="35" focusable="false">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                            </svg></div>
                            {
                                toggle ? (
                                    <div className="d-flex inputBar py-1 px-3 mx-1 " style={{ width: '100%' }}>
                                        <div>
                                            <div onClick={() => setToggle(false)} className='icons'><BiSearchAlt2 /></div>
                                        </div>

                                        <div>
                                            <input type="text" placeholder="Cerca" className='input1' style={{ width: '100%' }} />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="d-flex inputBar2 py-1 px-3 mx-1 " style={{ width: '50%' }}>
                                        <div>
                                            <div onClick={() => setToggle(true)} className='icons'><BiSearchAlt2 /></div>
                                        </div>

                                        <div>
                                            <input type="text" placeholder="Cerca" className='input2' style={{ width: '0' }} />
                                        </div>
                                    </div>
                                )
                            }


                        </div>
                        <div className='d-flex secondaryNav'>
                            {
                                toggle ?
                                    (
                                        <div className="iteration d-none">
                                            <Link to='home' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                                <div className='btnIcon mx-3 p-1'>
                                                    <div className="icons"><AiFillHome /><Badge bg='danger'></Badge> </div>
                                                    <div className='mediaNone'>Home</div>
                                                </div>
                                            </Link>
                                            <div className='btnIcon mx-3 p-1'>
                                                <div className="icons"><BsFillPeopleFill /><Badge bg='danger'></Badge></div>
                                                <div className='mediaNone'>Rete</div>
                                            </div>
                                            <div className='btnIcon mx-3 p-1'>
                                                <div className="icons"><MdWork /><Badge bg='danger'></Badge></div>
                                                <div className='mediaNone'>Lavoro</div>
                                            </div>
                                            <div className='btnIcon mx-3 p-1'>
                                                <div className="icons"><AiFillMessage /><Badge bg='danger'></Badge></div>
                                                <div className='mediaNone'>Messaggistica</div>
                                            </div>
                                            <div className='btnIcon mx-3 p-1'>
                                                <div className="icons"><IoIosNotifications /><Badge bg='danger'></Badge></div>
                                                <div className='mediaNone'>Notifica</div>
                                            </div>
                                            <div className='mx-3 p-1 '>
                                                <Dropdown className='btnIcon'>
                                                    <Dropdown.Toggle className='toggleMenu'>
                                                        <span className='subDrop'>
                                                            <div className='icons i'><BsFillPeopleFill /><Badge bg='danger'></Badge></div>
                                                            <span className='mediaNone' >Tu</span>
                                                        </span>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className='my-2 rounded-3 dropMenu '>
                                                        <div className=''>

                                                            <div className='sectionMenu px-3 '>

                                                                <div className='d-flex sectionDropProfile align-items-center'>

                                                                    <div>
                                                                        <div> <img className='rounded-circle' src={utent.image} alt="" /></div>
                                                                    </div>

                                                                    <div className='mx-3'>
                                                                        <p>{utent.name} {utent.surname}</p>
                                                                        <div>--</div>
                                                                    </div>

                                                                </div>

                                                                <div className='sectionButton my-3 '>
                                                                    <div className='rounded-5'>Visualizza profilo</div>
                                                                </div>

                                                            </div>
                                                            <div className='sectionAccount px-3 py-1'>
                                                                <p>Account</p>
                                                                <div>Impostazioni e privacy</div>
                                                                <div>Guida</div>
                                                                <div>Lingua</div>
                                                            </div>

                                                            <div className='sectionAttivity px-3 py-1' >
                                                                <p>Gestisci</p>
                                                                <div>Post e attivià</div>
                                                            </div>
                                                            <div className='px-3 py-1'>
                                                                <div>Esci</div>
                                                            </div>
                                                        </div>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="iteration d-flex">
                                            <Link to='home' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                                <div className='btnIcon mx-3 p-1'>
                                                    <div className="icons"><AiFillHome /><Badge bg='danger'></Badge> </div>
                                                    <div className='mediaNone'>Home</div>
                                                </div>
                                            </Link>
                                            <div className='btnIcon mx-3 p-1'>
                                                <div className="icons"><BsFillPeopleFill /><Badge bg='danger'></Badge></div>
                                                <div className='mediaNone'>Rete</div>
                                            </div>
                                            <div className='btnIcon mx-3 p-1'>
                                                <div className="icons"><MdWork /><Badge bg='danger'></Badge></div>
                                                <div className='mediaNone'>Lavoro</div>
                                            </div>
                                            <div className='btnIcon mx-3 p-1'>
                                                <div className="icons"><AiFillMessage /><Badge bg='danger'></Badge></div>
                                                <div className='mediaNone'>Messaggistica</div>
                                            </div>
                                            <div className='btnIcon mx-3 p-1'>
                                                <div className="icons"><IoIosNotifications /><Badge bg='danger'></Badge></div>
                                                <div className='mediaNone'>Notifica</div>
                                            </div>
                                            <div className='mx-3 p-1 '>
                                                <Dropdown className='btnIcon'>
                                                    <Dropdown.Toggle className='toggleMenu'>
                                                        <span className='subDrop'>
                                                            <div className='icons i'><BsFillPeopleFill /><Badge bg='danger'></Badge></div>
                                                            <span className='mediaNone' >Tu</span>
                                                        </span>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className='my-2 rounded-3 dropMenu '>
                                                        <div className=''>

                                                            <div className='sectionMenu px-3 '>

                                                                <div className='d-flex sectionDropProfile align-items-center'>

                                                                    <div>
                                                                        <div> <img className='rounded-circle' src={utent.image} alt="" /></div>
                                                                    </div>

                                                                    <div className='mx-3'>
                                                                        <p>{utent.name} {utent.surname}</p>
                                                                        <div>--</div>
                                                                    </div>

                                                                </div>

                                                                <div className='sectionButton my-3 '>
                                                                    <div className='rounded-5'>Visualizza profilo</div>
                                                                </div>

                                                            </div>
                                                            <div className='sectionAccount px-3 py-1'>
                                                                <p>Account</p>
                                                                <div>Impostazioni e privacy</div>
                                                                <div>Guida</div>
                                                                <div>Lingua</div>
                                                            </div>

                                                            <div className='sectionAttivity px-3 py-1' >
                                                                <p>Gestisci</p>
                                                                <div>Post e attivià</div>
                                                            </div>
                                                            <div className='px-3 py-1'>
                                                                <div>Esci</div>
                                                            </div>
                                                        </div>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    )
                            }


                            <div>

                            </div>
                            <div className="sideBar mx-5 p-1">
                                <Dropdown className='btnIcon menuFalse'>
                                    <div>
                                        <span className='subDrop d-flex align-items-center flex-column'>
                                            <div className='icons i '><RiTableFill /></div>
                                            <span className='mediaNone' >Per le aziende</span>
                                        </span>

                                    </div>
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