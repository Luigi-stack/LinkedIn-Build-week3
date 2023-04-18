import { Card } from "react-bootstrap"
import { BiPencil } from 'react-icons/bi';


const Informazioni = () => {
    return (
        <Card className="mt-3">
            <Card.Body className="fs-5 fw-bold pb-0 d-flex justify-content-between">Informazioni<BiPencil className='biPencil p-1 fs-3' />
            </Card.Body>
            <Card.Body>
            👋 Hi, my name is Silvestro and I'm a Junior Full Stack Developer! 💻
            </Card.Body>
        </Card>
    )
}

export default Informazioni