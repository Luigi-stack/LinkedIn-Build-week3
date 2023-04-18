import { Card, Button } from "react-bootstrap"
import {BsFillPersonPlusFill} from "react-icons/bs"

const PersoneCheConosci = () => {
    return (
        <>
        <Card className="fw-bold mt-3">
            <Card.Body className="pb-0 fs-5">
                Persone che potresti conoscere
            </Card.Body>
                <Card.Body>
                    <div className="d-flex align-item-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTph7EdNgE6hdgmsNjVDshDowbkzZJGT8rj1CPQA9t6bVxXALie1s97ZqxzEJvOszULgg0&usqp=CAU" alt="" style={{width: '50px', height: '50px'}} />
                    <p className="ms-3">Giorgio Parri <br /> <span className="fw-lighter">Programmatora informatico presso Lynx S.p.a.</span> </p>
                    </div>
                    <Button variant="outline-secondary" size="sm" className='altroButton rounded-pill px-3'><BsFillPersonPlusFill/> Collegati</Button>
                </Card.Body>
                <hr className="m-0 mx-3" />
                <Card.Body>
                    <div className="d-flex align-item-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/147/147137.png" alt="" style={{width: '50px', height: '50px'}} />
                    <p className="ms-3">Romina Geraci <br /> <span className="fw-lighter">Junior front-end developer</span> </p>
                    </div>
                    <Button variant="outline-secondary" size="sm" className='altroButton rounded-pill px-3'><BsFillPersonPlusFill/> Collegati</Button>
                </Card.Body>
                <hr className="m-0 mx-3" />
                <Card.Body>
                    <div className="d-flex align-item-center">
                    <img src="https://img.freepik.com/free-icon/user_318-219674.jpg" alt="" style={{width: '50px', height: '50px'}} />
                    <p className="ms-3">Luisa Catenazzi <br /> <span className="fw-lighter">Studentessa presso @Epicode school</span> </p>
                    </div>
                    <Button variant="outline-secondary" size="sm" className='altroButton rounded-pill px-3'><BsFillPersonPlusFill/> Collegati</Button>
                </Card.Body>
                <hr className="m-0 mx-3" />
                <Card.Body>
                    <div className="d-flex align-item-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOH80WRk1WEtUqNcwmVf6MfxzLuSQHoojxGD7ge6eAlGyA-ZkL-5mJ99z8n2rsQHlZlo&usqp=CAUs" alt="" style={{width: '50px', height: '50px'}} />
                    <p className="ms-3">Gioacchino Fattori <br /> <span className="fw-lighter">Back-end Developer</span> </p>
                    </div>
                    <Button variant="outline-secondary" size="sm" className='altroButton rounded-pill px-3'><BsFillPersonPlusFill/> Collegati</Button>
                </Card.Body>
            </Card>

            <Card className="mt-3">
                <Card.Img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="Card image" />
            </Card>
        </>
    )
}

export default PersoneCheConosci