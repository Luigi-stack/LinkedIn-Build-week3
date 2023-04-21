import { Card } from "react-bootstrap";
import { BsFillInfoSquareFill } from "react-icons/bs";
import FooterHomePage from "./FooterHomePage";


export const SectionRight = () => {
  return (
    <>
      <Card className="stickyLeft pt-3 px-3 mb-4 bg-dark text-white">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="fw-bold mb-0">Linkedin Notizie</h6>
          <BsFillInfoSquareFill className="fs-6 color-secondary" />
        </div>
        <div className="mt-3">
          <ul className="ps-3">
              <li className="fw-bold">Meno lavoro, più aperitivi</li>
              <p className="mb-2 subtitleUl">18 ore fa</p>

              <li className="fw-bold">
                Ad Antonio mancano i suoi compagni d'avventura
              </li>
              <p className="mb-2 subtitleUl">14 ore fa</p>

              <li className="fw-bold">Domani Piove</li>
              <p className="mb-2 subtitleUl">6 ore fa</p>

              <li className="fw-bold">
                Cosa cambia se stacchi la testa a qualcuno
              </li>
              <p className="mb-2 subtitleUl">1 ore fa</p>

              <li className="fw-bold">E' morto Berlusconi</li>
              <p className="mb-2 subtitleUl">19 ore fa</p>

          </ul>
        </div>
      </Card>
      <FooterHomePage />

    </>
  );
};