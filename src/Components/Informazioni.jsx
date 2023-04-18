import { Card } from "react-bootstrap"
import { BiPencil } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs'


const Informazioni = () => {
    return (
        <Card className="mt-3">
            <Card.Body className="fs-5 fw-bold pb-0 d-flex justify-content-between">
                Informazioni<BiPencil className='biPencil p-2 fs-1 text-secondary' />
            </Card.Body>
            <Card.Body>
                👋 Hi, my name is Silvestro and I'm a Junior Full Stack Developer! 💻
            </Card.Body>
            <Card.Body>
                <Card body>
                    <BsStars className="fs-4 text-secondary me-1" />
                    <span className="fw-bold">Competenze principali</span> <br /> <span className="ms-4">HTML5 • CSS • JavaScript • React.js • Sviluppo front-end</span>
                </Card>
            </Card.Body>
        </Card>
    )
}

export default Informazioni