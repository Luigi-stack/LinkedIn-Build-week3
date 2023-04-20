import { Container, Row, dv } from "react-bootstrap"

const FooterHomePage = () => {
    return (
        <Container className="footerHomepage text-secondary">
            
                <dv className="d-flex justify-content-around">
                    <p className="mb-2">Informazioni</p> <p className="mb-2">Accessibilità</p>
                </dv>
            
                <dv className="d-flex justify-content-around">
                    <p className="mb-2">Centro assistenza</p>
                </dv>
            
                <dv className="d-flex justify-content-around">
                    <p className="mb-2">Privacy e condizioni &#9660;</p>
                </dv>
            
                <dv className="d-flex justify-content-around">
                    <p className="mb-2">Opzioni per gli annunci pubblicitari</p>
                </dv>
            
                <dv className="d-flex justify-content-around">
                <p className="mb-2">Pubblicità</p> <p className="mb-2">Servizi alle aziende &#9660;</p>
                </dv>
        
                <dv className=" d-flex justify-content-around">
                    <p className="mb-2">Scarica l’app LinkedIn</p> <p className="mb-2">Altro</p>
                </dv>
            
                <dv className="mt-2 d-flex justify-content-around">
                    <p className="text-white"> LinkedIn Corporation © 2023</p>
                </dv>
            
        </Container>
    )
}

export default FooterHomePage