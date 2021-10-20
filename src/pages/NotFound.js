import React from 'react';
import not from '../images/NotFound/not.png'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="d-flex justify-content-center py-4 flex-column align-items-center my-4">
            <img src={not} alt="" /> 
            <Link to="/home"><Button variant="primary" className="my-4">back to home</Button></Link>
        </div>
    );
};

export default NotFound;