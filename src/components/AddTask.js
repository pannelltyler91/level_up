import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import {useDispatch} from 'react-redux'

function AddTask(props) {
    const dispatch = useDispatch();
    const _addTask = (e) =>{
        e.preventDefault();
        const data = {name:e.target.title.value,description:e.target.description.value,priority:e.target.subPriority.value}
        console.log(data)
        dispatch()
    }
    return(
        <Container>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={_addTask}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Task Title</Form.Label>
              <Form.Control type="text" name='title' placeholder="Task Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Task Description</Form.Label>
              <Form.Control type="text" name='description' placeholder="Task Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Local Priority</Form.Label>
              <Form.Control type="number" name='subPriority' placeholder="Your Divisions Priority for this task" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </Container>
    )
}

export default AddTask;