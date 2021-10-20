import React from "react";
import { Row } from "react-bootstrap";
import Doctor from "../Components/Doctor";
import useAuth from "../hooks/useAuth";

const Doctors = () => {
  const { services } = useAuth();
  return (
    <div className="py-3 my-3">
      <div className="container my-3 py-3">
          <h1 className="text-center text-primary">Meet Our specialists</h1>
      <Row xs={1} md={2} lg={3} className="g-4 my-3">
        {services?.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </Row>
      </div>
    </div>
  );
};

export default Doctors;
