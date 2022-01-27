import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';

function Taskbar(){
    return(
        <div style={{border:'solid black 2px', width:'200px',height:'100vh'}}>
            
            <Col >
            <Container>
                <Card style={{margin:'5px'}}>
                    <Card.Header>
                    <Card.Title>Title</Card.Title>
                    </Card.Header>
                    <Card.Body>Will contain priority levels</Card.Body>
                </Card>
                <Card style={{margin:'5px'}}>
                    <Card.Header>
                    <Card.Title>Title</Card.Title>
                    </Card.Header>
                    <Card.Body>Will contain priority levels</Card.Body>
                </Card>
                <Card style={{margin:'5px'}}>
                    <Card.Header>
                    <Card.Title>Title</Card.Title>
                    </Card.Header>
                    <Card.Body>Will contain priority levels</Card.Body>
                </Card>
            </Container>
            </Col>
        </div>
    )
}

export default Taskbar;