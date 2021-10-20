import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Appointments = () => {
  const { appointment, cancel } = useAuth();
  const total = appointment?.reduce(
    (total, appoint) => total + appoint.visit,
    0
  );
  const handleConfirm = () => {
    alert("Thanks for confirming");
  };
  return (
    <div className="my-5 py-5">
      <Container className="py-5">
        {appointment.length === 0 ? (
          <div>
            <h1 className="display-1 text-center text-danger text-uppercase py-5 my-4">
              There is no Appointments
            </h1>
          </div>
        ) : (
          <Row>
            <Col md={8}>
              {appointment.map((appoint) => {
                const { img, id, description, name, visit } = appoint;
                return (
                  <Row className="g-4 shadow p-2">
                    <Col sm={4}>
                      <img src={img} className="img-fluid" alt="" />
                    </Col>
                    <Col sm={8}>
                      <h4>{name}</h4>
                      <p>visitfee: {visit}</p>
                      <Button onClick={() => cancel(id)}>
                        cancel appointment
                      </Button>
                    </Col>
                  </Row>
                );
              })}
            </Col>
            <Col md={4}>
              <h2>Total appointment: {appointment?.length}</h2>
              <h3>Total Visit cost:{total}</h3>
              <Link to="/">
                <Button onClick={handleConfirm} variant="danger">
                  Confirm Appointments
                </Button>
              </Link>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Appointments;
