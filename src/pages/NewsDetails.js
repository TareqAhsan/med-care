import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

const NewsDetails = () => {
    const {news} = useAuth()
    const {id} = useParams()
    const matchNews = news?.find(article=>article.id===Number(id))
    return (
        <div className="container my-4 p-4">
            <Row xs={1} md={2} className="g-4 my-3">
                <Col>
                   <img src={matchNews?.img} alt="" className="img-fluid"/>
                </Col>
                <Col className="text-center text-uppercase">
                   <h1 className="text-primary">service Name: {matchNews?.name}</h1>
                   <h5>description: {matchNews?.description}</h5>
                </Col>
            </Row>
        </div>
    );
};

export default NewsDetails;