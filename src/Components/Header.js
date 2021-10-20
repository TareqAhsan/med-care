import React from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { allContext } = useAuth();
  const {addAppointment, appointment} = useAuth()
  const { user, LogOut } = allContext;
  return (
    <div>
      <Navbar fixed="top" expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>MED-CARE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/doctors">
                OurSpecialist
              </Nav.Link>
              <Nav.Link as={NavLink} to="/appointment">
                Appointments<Badge bg="secondary">{appointment?.length}</Badge>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services">
                services
              </Nav.Link>
              {!user?.email ? (
                <>
                  {/* <Nav.Link as={NavLink} to="/signup">
                    signup
                  </Nav.Link> */}
                  <Nav.Link as={NavLink} to="/login">
                    Login
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link className="fw-bold">
                  {user?.displayName}{" "}
                  <img
                    className="rounded-circle"
                    style={{ width: "34px" }}
                    src={user?.photoURL}
                    alt=""
                  />
                  <Button onClick={LogOut} className="ms-2 p-1" variant="light">
                    Logout
                  </Button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
