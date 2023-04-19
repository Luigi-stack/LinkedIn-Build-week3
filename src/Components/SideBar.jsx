import { Card } from "react-bootstrap"
import { AiFillQuestionCircle } from "react-icons/ai"

const SideBar = () => {
    return (
        <>
            <Card className="text-secondary bg-dark border-0 fw-bold">
                <Card.Body className="d-flex justify-content-between">
                    <p className="m-0 mb-0">
                        Modifica il profilo pubblico e l'URL
                    </p>
                    <AiFillQuestionCircle className="fs-5" />
                </Card.Body>
                <hr className="m-0 mx-3" />
                <Card.Body className="d-flex justify-content-between">
                    <p className="m-0">
                        Aggiung il tuo profilo in un'altra lingua
                    </p>
                    <AiFillQuestionCircle className="fs-5" />
                </Card.Body>
            </Card>

            <Card className="mt-3">
                <Card.Img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="Card image" />
            </Card>
        </>
    )
}

export default SideBar