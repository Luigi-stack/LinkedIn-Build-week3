import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiTableFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ChangeKey, change_key, getUserALL, getUserMe } from "../Redux/Actions/action_profile";

const MyNav = function () {
  const [toggle, setToggle] = useState(false);
  const utent = useSelector((state) => state.user.login);
  const dispatch=useDispatch();
  const key=useSelector((state)=>state.user.key)
  console.log(utent);

  return (
    <>
      <nav className="bg-dark">
        <Container>
          <div className="d-flex navRow">
            <div className="searchBar d-flex">
              <Link
                to="home"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <div className="svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="35"
                    height="35"
                    focusable="false"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </div>
              </Link>
              {toggle ? (
                <div
                  className="d-flex inputBar py-1 px-3 mx-1 "
                  style={{ width: "100%" }}
                >
                  <div>
                    <div onClick={() => setToggle(false)} className="icons">
                      <BiSearchAlt2 />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Cerca"
                      className="input1"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="d-flex inputBar2 py-1 px-3 mx-1 "
                  style={{ width: "50%" }}
                >
                  <div>
                    <div onClick={() => setToggle(true)} className="icons">
                      <BiSearchAlt2 />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Cerca"
                      className="input2"
                      style={{ width: "0" }}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="d-flex secondaryNav">
              {toggle ? (
                <div className="iteration d-none">
                  <Link
                    to="home"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <div className="btnIcon mx-3 p-1">
                      <div className="icons">
                        <AiFillHome />
                        <Badge bg="danger"></Badge>{" "}
                      </div>
                      <div className="mediaNone">Home</div>
                    </div>
                  </Link>
                  <div className="btnIcon mx-3 p-1">
                    <div className="icons">
                      <BsFillPeopleFill />
                      <Badge bg="danger"></Badge>
                    </div>
                    <div className="mediaNone">Rete</div>
                  </div>
                  <div className="btnIcon mx-3 p-1">
                    <div className="icons">
                      <MdWork />
                      <Badge bg="danger"></Badge>
                    </div>
                    <div className="mediaNone">Lavoro</div>
                  </div>
                  <div className="btnIcon mx-3 p-1">
                    <div className="icons">
                      <AiFillMessage />
                      <Badge bg="danger"></Badge>
                    </div>
                    <div className="mediaNone">Messaggistica</div>
                  </div>
                  <div className="btnIcon mx-3 p-1">
                    <div className="icons">
                      <IoIosNotifications />
                      <Badge bg="danger"></Badge>
                    </div>
                    <div className="mediaNone">Notifica</div>
                  </div>
                  <div className="mx-3 p-1 ">
                    <Dropdown className="btnIcon">
                      <Dropdown.Toggle className="toggleMenu">
                        <span className="subDrop">
                          <div className="icons i">
                            <BsFillPeopleFill />
                            <Badge bg="danger"></Badge>
                          </div>
                          <span className="mediaNone">Tu</span>
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="my-2 rounded-3 dropMenu ">
                        <div className="">
                          <div className="sectionMenu px-3 ">
                            <div className="d-flex justify-content-between sectionDropProfile align-items-center">
                            <div className="d-flex  align-items-center">
                              <div>
                                <div>
                                  {" "}
                                  <img
                                    className="rounded-circle"
                                    src={utent.image}
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="mx-3">
                                <p>
                                  {utent.name} {utent.surname}
                                </p>
                                <div>--</div>
                              </div>
                              </div>
                              <DropdownButton
                                
                                className="rounded-5"
                                size="sm"
                                drop="down"
                                variant="dark"
                                
                                title={`  Profilo:  `}
                              >
                                <Dropdown.Item eventKey="1" onClick={()=>{dispatch(change_key("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNmMxYWQ3YjUwNDAwMTQyZDI2ZGQiLCJpYXQiOjE2ODE4MjQyOTAsImV4cCI6MTY4MzAzMzg5MH0.6hKmTY3hJA6GBeL-K8BBspzXouoH-txWkfPPDDFi3cs"))
                                    dispatch(getUserMe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNmMxYWQ3YjUwNDAwMTQyZDI2ZGQiLCJpYXQiOjE2ODE4MjQyOTAsImV4cCI6MTY4MzAzMzg5MH0.6hKmTY3hJA6GBeL-K8BBspzXouoH-txWkfPPDDFi3cs"))
                                    dispatch(getUserALL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNmMxYWQ3YjUwNDAwMTQyZDI2ZGQiLCJpYXQiOjE2ODE4MjQyOTAsImV4cCI6MTY4MzAzMzg5MH0.6hKmTY3hJA6GBeL-K8BBspzXouoH-txWkfPPDDFi3cs"))
                            }}>
                                  David Scattone
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2"onClick={()=>{dispatch(change_key("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlOTQyYWZjYTEyOTAwMTQ0MGMwNzYiLCJpYXQiOjE2ODE4MjI3NjIsImV4cCI6MTY4MzAzMjM2Mn0.pIeTfVyp_8tEl-V0vFdySsEr69CGrMBcIWklbktK35Q"))
                                dispatch(getUserMe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlOTQyYWZjYTEyOTAwMTQ0MGMwNzYiLCJpYXQiOjE2ODE4MjI3NjIsImV4cCI6MTY4MzAzMjM2Mn0.pIeTfVyp_8tEl-V0vFdySsEr69CGrMBcIWklbktK35Q"))
                                dispatch(getUserALL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlOTQyYWZjYTEyOTAwMTQ0MGMwNzYiLCJpYXQiOjE2ODE4MjI3NjIsImV4cCI6MTY4MzAzMjM2Mn0.pIeTfVyp_8tEl-V0vFdySsEr69CGrMBcIWklbktK35Q"))
                            }}>
                                  Flavio Ferrante
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="3" onClick={()=>{dispatch(change_key("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMWE2MzIyYTZhYjAwMTQxYTg1NmUiLCJpYXQiOjE2ODE3MjYwNTIsImV4cCI6MTY4MjkzNTY1Mn0.ibeZD2u4zbHGAs53xVbjJLJ8RMR3zSMYodjmTJgJhn0"))
                                dispatch(getUserMe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMWE2MzIyYTZhYjAwMTQxYTg1NmUiLCJpYXQiOjE2ODE3MjYwNTIsImV4cCI6MTY4MjkzNTY1Mn0.ibeZD2u4zbHGAs53xVbjJLJ8RMR3zSMYodjmTJgJhn0"))
                                dispatch(getUserALL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMWE2MzIyYTZhYjAwMTQxYTg1NmUiLCJpYXQiOjE2ODE3MjYwNTIsImV4cCI6MTY4MjkzNTY1Mn0.ibeZD2u4zbHGAs53xVbjJLJ8RMR3zSMYodjmTJgJhn0"))
                            }}>
                                  Antonio Caputo
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="4" onClick={()=>{dispatch(change_key("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyOTZlYTQ1NWZkYjAwMTQ3MzMxNjEiLCJpYXQiOjE2ODIwODU2MTAsImV4cCI6MTY4MzI5NTIxMH0.w1Mrz2_Smuk5A9Bagg1uDybPtt2AY6cRLgbynGuKlbs"))
                                dispatch(getUserMe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyOTZlYTQ1NWZkYjAwMTQ3MzMxNjEiLCJpYXQiOjE2ODIwODU2MTAsImV4cCI6MTY4MzI5NTIxMH0.w1Mrz2_Smuk5A9Bagg1uDybPtt2AY6cRLgbynGuKlbs"))
                                dispatch(getUserALL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyOTZlYTQ1NWZkYjAwMTQ3MzMxNjEiLCJpYXQiOjE2ODIwODU2MTAsImV4cCI6MTY4MzI5NTIxMH0.w1Mrz2_Smuk5A9Bagg1uDybPtt2AY6cRLgbynGuKlbs"))
                            }}>
                                  Luigi Lossa
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="4" onClick={()=>{dispatch(change_key("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjNjNzE4NmE4NzAwMTQzODY3YjEiLCJpYXQiOjE2ODIwODY4NjYsImV4cCI6MTY4MzI5NjQ2Nn0.DJOL51mep5vPMY7SoCYWfuCf5Hjcin94hNZrvCzrsyA"))
                                dispatch(getUserMe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjNjNzE4NmE4NzAwMTQzODY3YjEiLCJpYXQiOjE2ODIwODY4NjYsImV4cCI6MTY4MzI5NjQ2Nn0.DJOL51mep5vPMY7SoCYWfuCf5Hjcin94hNZrvCzrsyA"))
                                dispatch(getUserALL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjNjNzE4NmE4NzAwMTQzODY3YjEiLCJpYXQiOjE2ODIwODY4NjYsImV4cCI6MTY4MzI5NjQ2Nn0.DJOL51mep5vPMY7SoCYWfuCf5Hjcin94hNZrvCzrsyA"))
                            }}>
                                  Marco De Luca
                                </Dropdown.Item>
                              </DropdownButton>
                            </div>
                            <Link
                              to=""
                              style={{
                                color: "inherit",
                                textDecoration: "inherit",
                              }}
                            >
                              <div className="sectionButton my-3 ">
                                <div className="rounded-5">
                                  Visualizza profilo
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="sectionAccount px-3 py-1">
                            <p>Account</p>
                            <div>Impostazioni e privacy</div>
                            <div>Guida</div>
                            <div>Lingua</div>
                            <div>
                             

                            </div>
                          </div>

                          <div className="sectionAttivity px-3 py-1">
                            <p>Gestisci</p>
                            <div>Post e attivià</div>
                          </div>
                          <div className="px-3 py-1">
                            <div>Esci</div>
                          </div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              ) : (
                <div className="iteration d-flex">
                  <Link
                    to="home"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <div className="btnIcon mx-2 mx-md-3 p-1">
                      <div className="icons">
                        <AiFillHome />
                        <Badge bg="danger"></Badge>{" "}
                      </div>
                      <div className="mediaNone">Home</div>
                    </div>
                  </Link>
                  <div className="btnIcon mx-2 mx-md-3 p-1">
                    <div className="icons">
                      <BsFillPeopleFill />
                      <Badge bg="danger"></Badge>
                    </div>
                    <div className="mediaNone">Rete</div>
                  </div>
                  <div className="btnIcon mx-2 mx-md-3 p-1">
                    <div className="icons">
                      <MdWork />
                      <Badge bg="danger"></Badge>
                    </div>
                    <div className="mediaNone">Lavoro</div>
                  </div>
                  <div className="btnIcon mx-2 mx-md-3 p-1">
                    <div className="icons">
                      <AiFillMessage />
                      <Badge bg="danger"></Badge>
                    </div>
                    <div className="mediaNone">Messaggistica</div>
                  </div>
                  <div className="btnIcon mx-2 mx-md-3 p-1">
                    <div className="icons">
                      <IoIosNotifications />
                      <Badge bg="danger"></Badge>
                    </div>
                    <div className="mediaNone">Notifica</div>
                  </div>
                  <div className="mx-2 mx-md-3 p-1 ">
                    <Dropdown className="btnIcon">
                      <Dropdown.Toggle className="toggleMenu">
                        <span className="subDrop">
                          <div className="icons i">
                            <BsFillPeopleFill />
                            <Badge bg="danger"></Badge>
                          </div>
                          <span className="mediaNone">Tu</span>
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="my-2 rounded-3 dropMenu ">
                        <div className="">
                          <div className="sectionMenu px-3 ">
                            <div className="d-flex justify-content-between sectionDropProfile align-items-center">
                            <div className="d-flex  align-items-center">
                              <div>
                                <div>
                                  {" "}
                                  <img
                                    className="rounded-circle"
                                    src={utent.image}
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="mx-3">
                                <p>
                                  {utent.name} {utent.surname}
                                </p>
                                <div>--</div>
                              </div>
                              </div>
                              <DropdownButton
                                
                                className="rounded-5"
                                size="sm"
                                drop="down"
                                variant="dark"
                                
                                title={`  Profilo:  `}
                              >
                                <Dropdown.Item eventKey="1" onClick={()=>{dispatch(change_key("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNmMxYWQ3YjUwNDAwMTQyZDI2ZGQiLCJpYXQiOjE2ODE4MjQyOTAsImV4cCI6MTY4MzAzMzg5MH0.6hKmTY3hJA6GBeL-K8BBspzXouoH-txWkfPPDDFi3cs"))
                                    dispatch(getUserMe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNmMxYWQ3YjUwNDAwMTQyZDI2ZGQiLCJpYXQiOjE2ODE4MjQyOTAsImV4cCI6MTY4MzAzMzg5MH0.6hKmTY3hJA6GBeL-K8BBspzXouoH-txWkfPPDDFi3cs"))
                                    dispatch(getUserALL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNmMxYWQ3YjUwNDAwMTQyZDI2ZGQiLCJpYXQiOjE2ODE4MjQyOTAsImV4cCI6MTY4MzAzMzg5MH0.6hKmTY3hJA6GBeL-K8BBspzXouoH-txWkfPPDDFi3cs"))
                            }}>
                                  David Scattone
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2"onClick={()=>{dispatch(change_key("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlOTQyYWZjYTEyOTAwMTQ0MGMwNzYiLCJpYXQiOjE2ODE4MjI3NjIsImV4cCI6MTY4MzAzMjM2Mn0.pIeTfVyp_8tEl-V0vFdySsEr69CGrMBcIWklbktK35Q"))
                                dispatch(getUserMe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlOTQyYWZjYTEyOTAwMTQ0MGMwNzYiLCJpYXQiOjE2ODE4MjI3NjIsImV4cCI6MTY4MzAzMjM2Mn0.pIeTfVyp_8tEl-V0vFdySsEr69CGrMBcIWklbktK35Q"))
                                dispatch(getUserALL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlOTQyYWZjYTEyOTAwMTQ0MGMwNzYiLCJpYXQiOjE2ODE4MjI3NjIsImV4cCI6MTY4MzAzMjM2Mn0.pIeTfVyp_8tEl-V0vFdySsEr69CGrMBcIWklbktK35Q"))
                            }}>
                                  Flavio Ferrante
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="3" onClick={()=>{dispatch(change_key("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMWE2MzIyYTZhYjAwMTQxYTg1NmUiLCJpYXQiOjE2ODE3MjYwNTIsImV4cCI6MTY4MjkzNTY1Mn0.ibeZD2u4zbHGAs53xVbjJLJ8RMR3zSMYodjmTJgJhn0"))
                                dispatch(getUserMe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMWE2MzIyYTZhYjAwMTQxYTg1NmUiLCJpYXQiOjE2ODE3MjYwNTIsImV4cCI6MTY4MjkzNTY1Mn0.ibeZD2u4zbHGAs53xVbjJLJ8RMR3zSMYodjmTJgJhn0"))
                                dispatch(getUserALL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNkMWE2MzIyYTZhYjAwMTQxYTg1NmUiLCJpYXQiOjE2ODE3MjYwNTIsImV4cCI6MTY4MjkzNTY1Mn0.ibeZD2u4zbHGAs53xVbjJLJ8RMR3zSMYodjmTJgJhn0"))
                            }}>
                                  Antonio Caputo
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="4" onClick={()=>{dispatch(change_key("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyOTZlYTQ1NWZkYjAwMTQ3MzMxNjEiLCJpYXQiOjE2ODIwODU2MTAsImV4cCI6MTY4MzI5NTIxMH0.w1Mrz2_Smuk5A9Bagg1uDybPtt2AY6cRLgbynGuKlbs"))
                                dispatch(getUserMe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyOTZlYTQ1NWZkYjAwMTQ3MzMxNjEiLCJpYXQiOjE2ODIwODU2MTAsImV4cCI6MTY4MzI5NTIxMH0.w1Mrz2_Smuk5A9Bagg1uDybPtt2AY6cRLgbynGuKlbs"))
                                dispatch(getUserALL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyOTZlYTQ1NWZkYjAwMTQ3MzMxNjEiLCJpYXQiOjE2ODIwODU2MTAsImV4cCI6MTY4MzI5NTIxMH0.w1Mrz2_Smuk5A9Bagg1uDybPtt2AY6cRLgbynGuKlbs"))
                            }}>
                                  Luigi Lossa
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="4" onClick={()=>{dispatch(change_key("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjNjNzE4NmE4NzAwMTQzODY3YjEiLCJpYXQiOjE2ODIwODY4NjYsImV4cCI6MTY4MzI5NjQ2Nn0.DJOL51mep5vPMY7SoCYWfuCf5Hjcin94hNZrvCzrsyA"))
                                dispatch(getUserMe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjNjNzE4NmE4NzAwMTQzODY3YjEiLCJpYXQiOjE2ODIwODY4NjYsImV4cCI6MTY4MzI5NjQ2Nn0.DJOL51mep5vPMY7SoCYWfuCf5Hjcin94hNZrvCzrsyA"))
                                dispatch(getUserALL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjNjNzE4NmE4NzAwMTQzODY3YjEiLCJpYXQiOjE2ODIwODY4NjYsImV4cCI6MTY4MzI5NjQ2Nn0.DJOL51mep5vPMY7SoCYWfuCf5Hjcin94hNZrvCzrsyA"))
                            }}>
                                  Marco De Luca
                                </Dropdown.Item>
                              </DropdownButton>
                            </div>
                            <Link
                              to=""
                              style={{
                                color: "inherit",
                                textDecoration: "inherit",
                              }}
                            >
                              <div className="sectionButton my-3 ">
                                <div className="rounded-5">
                                  Visualizza profilo
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="sectionAccount px-3 py-1">
                            <p>Account</p>
                            <div>Impostazioni e privacy</div>
                            <div>Guida</div>
                            <div>Lingua</div>
                            <div>
                             

                            </div>
                          </div>

                          <div className="sectionAttivity px-3 py-1">
                            <p>Gestisci</p>
                            <div>Post e attivià</div>
                          </div>
                          <div className="px-3 py-1">
                            <div>Esci</div>
                          </div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              )}

              <div></div>
              <div className="sideBar mx-5 p-1">
                <Dropdown className="btnIcon menuFalse">
                  <div>
                    <span className="subDrop d-flex align-items-center flex-column">
                      <div className="icons i ">
                        <RiTableFill />
                      </div>
                      <span className="mediaNone">Per le aziende</span>
                    </span>
                  </div>
                </Dropdown>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};
export default MyNav;
