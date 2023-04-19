import { Card } from "react-bootstrap";
import { BsFillInfoSquareFill } from "react-icons/bs";


export const SectionRight = () => {
  return (
    <>
      <Card className="py-4 px-3 d-none d-md-block">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="fw-bold text-black mb-0">Linkedin Notizie</h6>
          <BsFillInfoSquareFill style={{ width: "0.7em" }} />
        </div>
        <div className="mt-2">
          <ul className="ps-3">
            <div>
              <li className="fw-bold text-dark">Meno lavoro, più aperitivi</li>
              <p className="mb-2">18 ore fa</p>
            </div>
            <div>
              <li className="fw-bold text-dark">
                Ad Antonio mancano i suoi compagni d'avventura
              </li>
              <p className="mb-2">14 ore fa</p>
            </div>
            <div>
              <li className="fw-bold text-dark">Domani Piove</li>
              <p className="mb-2">6 ore fa</p>
            </div>
            <div>
              <li className="fw-bold text-dark">
                Cosa cambia se stacchi la testa a qualcuno
              </li>
              <p className="mb-2">1 ore fa</p>
            </div>
            <div>
              <li className="fw-bold text-dark">E' morto Berlusconi</li>
              <p className="mb-2">19 ore fa</p>
            </div>
          </ul>
        </div>
      </Card>
      <Card className="mt-2 d-none d-lg-block">
        <img
          style={{ width: "100%", height: "100%" }}
          src=""
          alt=""
        />
      </Card>
      {}
    </>
  );
};