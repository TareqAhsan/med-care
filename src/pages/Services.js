import React from "react";
import { Row } from "react-bootstrap";
import Service from "../Components/Service";
import useAuth from "../hooks/useAuth";

const Services = () => {
  const { services } = useAuth();
  return (
    <div className="bg-light p-5">
      <div className="container  pt-4 text-center">
      <h1 className="text-primary my-3 py-3">Our Services</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services?.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </Row>
    </div>
    </div>
  );
};

export default Services;
