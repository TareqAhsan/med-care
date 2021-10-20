import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-dark text-white py-4 overflow-hidden">
      <div className="container">
        <Row xs={1} md={2} lg={4} className="g-5">
          <Col className="text-center">
            <h2>MED-CARE</h2>
            <p>
              Health care improvement of health via the prevention, diagnosis,
              treatment, recovery, or cure of disease, illness, injury, and
              other physical and mental impairments in people. Health care is
              delivered by health professionals and allied health fields.
              Medicine, dentistry, pharmacy, midwifery, nursing, optometry,
              audiology, psychology, occupational therapy, physical therapy,
            </p>
            <div className="d-flex justify-content-around">
              <i className="fs-3 fab fa-facebook"></i>
              <i className="fs-3 fab fa-twitter"></i>
              <i className="fs-3 fab fa-instagram-square"></i>
              <i className="fs-3 fab fa-linkedin-in"></i>
            </div>
          </Col>
          <Col className="text-center">
            <h3>Contact Details</h3>
            <p>
              <i className="fas fa-map-marker me-2"></i>Jl. Raya Kuta No.70,
              Kuta
            </p>
            <p>
              <i className="fas fa-envelope-square me-2"></i>support@domain.com
            </p>
            <p>
              <i className="fas fa-clock me-2"></i>8 AM - 5 PM , Monday -
              Saturday
            </p>
            <p>
              <i className="fas fa-phone me-2"></i>(+880)192969
            </p>
          </Col>
          <Col className="text-center">
          <h3>Other Pages</h3>
          <p>Home</p>
          <p>About us</p>
          <p>our doctors</p>
          <p>Contact</p>
          </Col>
          <Col className="text-center">
          <h3>Make Appointment</h3>
          <p>
              <i className="fas fa-phone me-2"></i> call us(+880)192969
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
