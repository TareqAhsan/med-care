import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({doctor}) => {
    const {imgdoc,special,docname} = doctor
    return (
        <Col>
        <Card className="h-100 rounded border-0 shadow">
          <Card.Img
            style={{ height: "250px" }}
            className="rounded"
            variant="top"
            src={imgdoc}
          />
          <Card.Body>
            <Card.Title>Name: {docname}</Card.Title>
            <Card.Text className="fs-4">
              {special}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="border-0 bg-white">
          </Card.Footer>
        </Card>
      </Col>
    );
};

export default Doctor;