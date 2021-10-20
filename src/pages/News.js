import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const News = ({article}) => {
    const {img,name,id,description} = article;
  return (
    <Col>
      <Card className="h-100 rounded border-0 shadow">
        <Card.Img
          style={{ height: "250px" }}
          className="rounded"
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
              {description.slice(0,78)}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 bg-white">
          <Link to={`/newsDetails/${id}`}>
            <Button variant="primary">see details</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default News;
