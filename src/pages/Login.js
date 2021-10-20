import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useHistory, useLocation } from "react-router-dom";
const Login = () => {
  const { allContext } = useAuth();
  const {
    signInwithGoogle,
    signInWithEmail,
    getEmail,
    getPassword,
    error,
    setUser,
    setError,
  } = allContext;
  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/";

  //redirect to initial page with google signin
  const handleGoogle = () => {
    signInwithGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(redirect);
        console.log(result.user);
      })
      .catch((err) => setError(err.message));
  };

  ////redirect to initial page with email password
  const handleEmailPass = (e) => {
    e?.preventDefault();
    signInWithEmail()
      .then((result) => {
        setUser(result.user);
        history.push(redirect);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="text-center my-4 py-5">
      <h2>Please Login</h2>
      <p className=" mt-2">Login with Email & Password</p>
      <p className="text-danger text-center">{error}</p>
      <div className="w-25 mx-auto">
        <Form onSubmit={handleEmailPass}>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Email Address
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  onBlur={getEmail}
                  type="email"
                  autoComplete="current-email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="text-start">
              <Form.Label htmlFor="password" visuallyHidden>
                Your Password
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  onBlur={getPassword}
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
            </Col>
          </Row>

          <button type="submit" className="btn btn-primary mt-2 w-100">
            Login
          </button>
        </Form>
      </div>
      <p className="mt-2">
        <NavLink className="text-decoration-none" to="/signup">
          Need an Account? Please Sign up!
        </NavLink>
        <br />
      </p>
      <p className="mt-3">Or</p>
      <p> Login with</p>
      <div>
        <button onClick={handleGoogle} className="btn btn-primary">
          <i className="me-2 fab fa-google"></i>sign in with google
        </button>
      </div>
    </div>
  );
};

export default Login;
