import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


 const Footer = () => {
  return (
    <Container className="mt-5 d-md-block text-light">
      <Row className="justify-content-center">
        <Col md={9}>
          <Row>
            <img
              className="mb-3"
              id="logoFooter"
              src="https://www.iter.it/wp-content/uploads/2019/12/linkedin-logo-png-transparent.png"
              alt="LogoFooter"
              style={{ width: "7em", height: "1.6em" }}
            />
          </Row>
          <Row>
            <Col>
              <div className="d-flex flex-column">
                <Link className="collegamenti" to={"https://about.linkedin.com/it-it"}>
                  Informazioni
                </Link>
                <Link
                  className="collegamenti"
                  to={
                    "https://it.linkedin.com/legal/professional-community-policies?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3a9FOjJ0SruxU5CEqVrPEQ%3D%3D"
                  }
                >
                  Linee guida della community
                </Link>
                <Link className="collegamenti">Privacy e condizioni</Link>
                <Link
                  to={
                    "https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-footer-lss-control&src=li-footer"
                  }
                  className="collegamenti"
                >
                  Sales Solutions
                </Link>
                <Link to={"https://safety.linkedin.com/"} className="collegamenti">
                  Centro sicurezza
                </Link>
              </div>
            </Col>
            <Col>
              <div className="d-flex flex-column">
                <Link
                  to={
                    "https://it.linkedin.com/accessibility?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bru6up1A6Seq3bJvMtE7iUQ%3D%3D"
                  }
                  className="collegamenti"
                >
                  Accessibilità
                </Link>
                <Link to={"https://careers.linkedin.com/"} className="collegamenti">
                  Carriera
                </Link>
                <Link to={"https://mobile.linkedin.com/it-it"} className="collegamenti">
                  Opzioni di annuncio
                </Link>
                <Link to={"https://mobile.linkedin.com/it-it"} className="collegamenti">
                  Mobile
                </Link>
              </div>
            </Col>
            <Col>
              <div className="d-flex flex-column">
                <Link
                  to={
                    "https://business.linkedin.com/it-it/talent-solutions?trk=flagship_nav&veh=li-footer-lts-control-it-it&src=li-footer"
                  }
                  className="collegamenti"
                >
                  Talent Solutions
                </Link>
                <Link
                  to={"https://business.linkedin.com/it-it/marketing-solutions?trk=n_nav_lms_f&src=li-footer"}
                  className="collegamenti"
                >
                  Soluzioni di marketing
                </Link>
                <Link
                  to={"https://business.linkedin.com/it-it/marketing-solutions/ads?trk=n_nav_ads_f"}
                  className="collegamenti"
                >
                  Pubbilictà
                </Link>
                <Link to={"https://business.linkedin.com/grow?&src=li-footer"} className="collegamenti">
                  Piccole imprese
                </Link>
              </div>
            </Col>
            <Col>
              <div>
                <Link
                  to={
                    "https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bru6up1A6Seq3bJvMtE7iUQ%3D%3D"
                  }
                  className="collegamenti domande"
                >
                  Domande?
                </Link>
                <p className="footerQuestion">Visita il nostro Centro assistenza</p>
              </div>
              <div>
                <Link
                  to={"https://www.linkedin.com/mypreferences/d/categories/account"}
                  className="collegamenti domande"
                >
                  Gestisci il tuo account e la tua privacy
                </Link>
                <p className="footerQuestion">Vai alle impostazioni</p>
              </div>
            </Col>
            <Col>
              <div>
                <p className="footerQuestion mb-1 ">Seleziona lingua</p>
                <select className="px-2 py-1" id="language" name="languageList" form="form">
                  <option value="Italiano">Italiano</option>
                  <option value="Inglese">Inglese</option>
                  <option value="Francese">Francese</option>
                  <option value="Cinese">Cinese</option>
                  <option value="Russo">Russo</option>
                  <option value="Arabo">Arabo</option>
                  <option value="Spagnolo">Spagnolo</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row>
            <p className="footerQuestion">LinkedIn Corporation © 2023</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer