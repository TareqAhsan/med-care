import React from 'react';
import { Col, Row,Button} from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

const Servicedetails = () => {
    const {id} = useParams()
    const {services,addAppointment} = useAuth();
    const matchid = services?.find(service=>service.id===Number(id))
    return (
        <div className="container my-4 p-4">
            <Row xs={1} md={2} className="g-4 my-3">
                <Col>
                   <img src={matchid?.img} alt="" className="img-fluid"/>
                </Col>
                <Col className="text-center text-uppercase">
                   <h1 className="text-primary">service Name: {matchid?.name}</h1>
                   <h3>visit fee: {matchid?.visit}</h3>
                   <h5>description: {matchid?.description}</h5>
                   <Button onClick={()=>addAppointment(matchid)} variant="primary">Appointment</Button>
                </Col>
            </Row>
        </div>
    );
};

export default Servicedetails;

