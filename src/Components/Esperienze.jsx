import { Card } from "react-bootstrap"
import { BiPencil } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExperienceALL } from "../Redux/Actions/action_profile";

const Esperienze = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.login._id)
    const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlOGUzY2ZjYTEyOTAwMTQ0MGMwNjkiLCJpYXQiOjE2ODE4MjQzNTIsImV4cCI6MTY4MzAzMzk1Mn0.fSCCLYfTj3NHDK_nJlNQUgJ8rkMrVR5n7TZRL-Cmy3Y'
    console.log(user)
    useEffect(() => {
        dispatch(getExperienceALL(key, user))
    }, [user]);

    return (
        <Card className="text-white bg-dark border-0 mt-3">
            <Card.Body className="fs-5 fw-bold pb-0 d-flex justify-content-between">

                Esperienze <span> <AiOutlinePlus className='biPencil p-2 fs-1' /><BiPencil className='biPencil p-2 fs-1' /></span>
            </Card.Body>

            <form id="formElem" className="mx-3">
                <label htmlFor="picture" className="d-block my-3">
                    <BiPencil className='biPencil p-2 fs-1' onClick={() => document.getElementById('picture').click()} />
                    Aggiungi foto
                </label>
                <input type="file" name="picture" accept="image/*" id="picture" style={{ display: 'none' }} />
            </form>


            {/* {user?.map((ev) => (
                <>
                    <Card.Body>
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <img src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188434?e=1689811200&v=beta&t=oArOJOYE7ZD473jCAUzajl3JIXLkxiTvDx61tGEjeAk" alt="" style={{ width: '60px', height: '60px' }} />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <span className="fw-bold">Teacher Assistant</span> <br />
                                <span>EPICODE • A tempo pieno</span> <br />
                                <span className="text-secondary">nov 2022 - Presente • 6 mesi </span> <br />
                                <span className="text-secondary">Roma</span>
                            </div>
                        </div>
                    </Card.Body>

                    <hr className="m-0 mx-3" />
                </>
            ))
            } */}
            <Card.Body>
                <div className="d-flex">
                    <div className="flex-shrink-0">
                        <img src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188434?e=1689811200&v=beta&t=oArOJOYE7ZD473jCAUzajl3JIXLkxiTvDx61tGEjeAk" alt="" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <span className="fw-bold">Teacher Assistant</span> <br />
                        <span>EPICODE • A tempo pieno</span> <br />
                        <span className="text-secondary">nov 2022 - Presente • 6 mesi </span> <br />
                        <span className="text-secondary">Roma</span>
                    </div>
                </div>
            </Card.Body>

            <hr className="m-0 mx-3" />

            <Card.Body>
                <div className="d-flex">
                    <div className="flex-shrink-0">
                        <img src="https://media.licdn.com/dms/image/C4E0BAQHrvH2AWy0lbg/company-logo_100_100/0/1660057152234?e=1689811200&v=beta&t=UhUhkk7mG3r-5LPmj4wMQ7klAau4rLG4OhStMg2mdQM" alt="" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <span className="fw-bold">Junior Front-end developer</span> <br />
                        <span>Cloud Company S.r.l • A tempo pieno</span> <br />
                        <span className="text-secondary">nov 2021 - apr 2022 • 5 mesi </span> <br />
                        <span className="text-secondary">Milano</span>
                    </div>
                </div>
            </Card.Body>

            <hr className="m-0 mx-3" />

            <Card.Body>
                <div className="d-flex">
                    <div className="flex-shrink-0">
                        <img src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188434?e=1689811200&v=beta&t=oArOJOYE7ZD473jCAUzajl3JIXLkxiTvDx61tGEjeAk" alt="" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <span className="fw-bold">Studente del corso full-stack developer</span> <br />
                        <span>EPICODE • A tempo pieno</span> <br />
                        <span className="text-secondary">apr 2021 - ott 2021 • 6 mesi </span> <br />
                        <span className="text-secondary">Roma</span>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Esperienze