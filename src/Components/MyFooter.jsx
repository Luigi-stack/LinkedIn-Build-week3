import { Container, Row, Col } from "react-bootstrap";



const MyFooter = () => {
  return (
    <Container className='bg-black text-secondary mt-5'>
      <Row>
        <Col md={9}>
          <Row>
            <Col>
              <a className="collegamenti" href="https://about.linkedin.com/it-it">
                Informazioni
              </a>
            </Col>

            <Col>
              <a
                className="collegamenti"
                href=
                "https://it.linkedin.com/legal/professional-community-policies?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3a9FOjJ0SruxU5CEqVrPEQ%3D%3D"

              >
                Linee guida della community
              </a>
            </Col>

            <Col>
              <a href="#a" className="collegamenti">Privacy e condizioni</a>
              <a
                href=
                "https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-footer-lss-control&src=li-footer"

                className="collegamenti"
              >
                Sales Solutions
              </a>
            </Col>

            <Col>
              <a href="https://safety.linkedin.com/" className="collegamenti">
                Centro sicurezza
              </a>
            </Col>

          </Row>

          <Row>
            <Col>
              <a href="https://careers.linkedin.com/" className="collegamenti">
                Accessibilità
              </a>
            </Col>

            <Col>
              <a href="https://careers.linkedin.com/" className="collegamenti">
                Carriera
              </a>
            </Col>

            <Col>
              <a href="https://mobile.linkedin.com/it-it" className="collegamenti">
                Opzioni di annuncio
              </a>
            </Col>

            <Col>
              <a href="https://mobile.linkedin.com/it-it" className="collegamenti">
                Mobile
              </a>
            </Col>

          </Row>

          <Row>
            <Col>
              <a
                href=
                "https://business.linkedin.com/it-it/talent-solutions?trk=flagship_nav&veh=li-footer-lts-control-it-it&src=li-footer"

                className="collegamenti"
              >
                Talent Solutions
              </a>
            </Col>

            <Col>
              <a
                href="https://business.linkedin.com/it-it/marketing-solutions?trk=n_nav_lms_f&src=li-footer"
                className="collegamenti"
              >
                Soluzioni di marketing
              </a>
            </Col>

            <Col>
              <a
                href="https://business.linkedin.com/it-it/marketing-solutions/ads?trk=n_nav_ads_f"
                className="collegamenti"
              >
                Pubbilictà
              </a>
            </Col>

            <Col>
              <a href="https://business.linkedin.com/grow?&src=li-footer" className="collegamenti">
                Piccole imprese
              </a>
            </Col>

          </Row>

        </Col>

        <Col ClassName='Col-3'>
          <Row>
            <Col>
              <div>
                <a
                  href=
                  "https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bru6up1A6Seq3bJvMtE7iUQ%3D%3D"

                  className="collegamenti domande"
                >
                  Domande?
                </a>
                <p className="footerQuestion">Visita il nostro Centro assistenza</p>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/mypreferences/d/categories/account"
                  className="collegamenti domande"
                >
                  Gestisci il tuo account e la tua privacy
                </a>
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
        </Col>

        <Row>
          <p className="footerQuestion">LinkedIn Corporation © 2023</p>
        </Row>

      </Row>

    </Container>
  );
};

export default MyFooter