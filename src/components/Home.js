import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Login from "./Login";
import Container from "react-bootstrap/Container";

function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container fluid>
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="/"><h5>LevelUp</h5></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              href="#modal"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <h5>Login</h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h1>Home</h1>
      <Login show={showModal} onHide={() => setShowModal(false)} />
    </Container>
  );
}

export default Home;
