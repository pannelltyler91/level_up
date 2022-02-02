import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsCart, BsClipboardPlus } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddTask from "./AddTask";
function Taskbar() {
  const [showModal, setShowModal] = useState(false);
  const tasks = useSelector((state) => state.tasks.value);
  return (
    <div style={{ border: "solid black 2px", width: "300px", height: "100vh" }}>
      <Col>
        <Container>
          <BsClipboardPlus
            onClick={() => {
              setShowModal(true);
            }}
          />
          {tasks.map((task) => {
            return (
              <Card key={task.name} style={{ margin: "5px" }} onClick={(e) =>{console.log(e.target)}} >
                <Card.Header>
                  <Card.Title>{task.name}</Card.Title>
                  <Button variant="success">1</Button>
                  <Button variant="warning">{task.priority}</Button>
                  <Button variant="danger">2</Button>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{task.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Container>
      </Col>
      <AddTask show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
}

export default Taskbar;
