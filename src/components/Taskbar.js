import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BsClipboardPlus } from "react-icons/bs";
import { useSelector } from "react-redux";
import {useState} from 'react'
import AddTask from './AddTask'
function Taskbar() {
    const [showModal, setShowModal] = useState(false);
  const tasks = useSelector((state) => state.tasks.value);
  return (
    <div style={{ border: "solid black 2px", width: "200px", height: "100vh" }}>
      <Col>
        <Container>
          <BsClipboardPlus onClick={() => {
                setShowModal(true);
              }} />

          <Card style={{ margin: "5px" }}>
            <Card.Header>
              <Card.Title>Title</Card.Title>
            </Card.Header>
            <Card.Body>Will contain priority levels</Card.Body>
          </Card>
        </Container>
      </Col>
      <AddTask show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
}

export default Taskbar;
