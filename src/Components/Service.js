import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Service = ({ service }) => {
  const {addAppointment, appointment} = useAuth()
  const { id, name, visit, description, img } = service;
  return (
    <Col>
      <Card className="h-100 rounded">
        <Card.Img style={{ height: "250px" }} className="rounded" variant="top" src={img} />
        <Card.Body className="pb-0">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description.slice(0,160)}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 bg-white">
          <div>
          <Link to={`/service/${id}`}>
            <Button variant="primary"className="w-50 m-1">see details</Button>
          </Link>
          </div>
          <Button onClick={()=>addAppointment(service)} variant="primary" className="w-50 m-1">Appointment</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
