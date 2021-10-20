import React from "react";
import { Col, Row } from "react-bootstrap";
import doctor from "../images/serviceImg/doctor1.jpg";
const About = () => {
  return (
    <div className="bg-light p-5">
      <div className="container my-4 overflow-hidden">
        <h2 className="text-primary text-center my-3 p-4">About us</h2>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <img src={doctor} className="img-fluid" alt="" />
          </Col>
          <Col>
            <h2>We Provide Essential Services For Your Health Care</h2>
            <p className="fs-5">
              Essential services are the services and functions that are
              absolutely necessary, even during a pandemic we provide good
              service around the country.
            </p>
            <div className="pb-2">
              <Row xs={1} md={2} className="g-3">
                <Col>
                  <div className="shadow p-2 rounded">
                    <h4>
                      <i className="me-2 fas fa-briefcase-medical"></i>Quality
                      of Care Services
                    </h4>
                    <p>our service quallity is incredible and world class</p>
                  </div>
                </Col>
                <Col>
                  <div className="shadow p-2 rounded">
                    <h4>
                      <i className="fas fa-stethoscope me-2"></i>
                      Standards of Treatment
                    </h4>
                    <p>We always ensure the standards of trteatment</p>
                  </div>
                </Col>
                <Col>
                  <div className="shadow p-2 rounded">
                    <h4>
                      <i className="me-2 fas fa-clock"></i>
                      24/7 Working Time
                    </h4>
                    <p>
                      We are open 24 hours in any time we are ready to provide
                      service
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="shadow p-2 rounded">
                    <h4>
                      <i className="me-2 fas fa-disease"></i>
                      Infection Prevention
                    </h4>
                    <p>
                      We are Good at prevent infection and serve good treatment
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
