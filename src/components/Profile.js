import React from "react";
import Dashboard from "./Dashboard";
import Taskbar from "./Taskbar";
import Navbar from "./Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profile() {
  return (
    <Container fluid>
      <Row className='mb-5'>
        <Navbar />
      </Row>
      <Row>
          <Col lg={2}>
        <Taskbar />
          </Col>
          <Col lg={10}>
        <Dashboard />
          </Col>
      </Row>
    </Container>
  );
}

export default Profile;
