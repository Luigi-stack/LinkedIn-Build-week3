import { Container } from "react-bootstrap"

const FooterHomePage = () => {
    return (
        <Container className="footerHomepage text-secondary">
            
                <div className="d-flex justify-content-around">
                    <p className="mb-2">Informazioni</p> <p className="mb-2">Accessibilità</p>
                </div>
            
                <div className="d-flex justify-content-around">
                    <p className="mb-2">Centro assistenza</p>
                </div>
            
                <div className="d-flex justify-content-around">
                    <p className="mb-2">Privacy e condizioni &#9660;</p>
                </div>
            
                <div className="d-flex justify-content-around">
                    <p className="mb-2">Opzioni per gli annunci pubblicitari</p>
                </div>
            
                <div className="d-flex justify-content-around">
                <p className="mb-2">Pubblicità</p> <p className="mb-2">Servizi alle aziende &#9660;</p>
                </div>
        
                <div className=" d-flex justify-content-around">
                    <p className="mb-2">Scarica l’app LinkedIn</p> <p className="mb-2">Altro</p>
                </div>
            
                <div className="mt-2 d-flex justify-content-around">
                    <p className="text-white"> LinkedIn Corporation © 2023</p>
                </div>
            
        </Container>
    )
}

export default FooterHomePage