import React, {useState} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Login from './Login'
import Container from 'react-bootstrap/Container'

function Home(){
    const [showModal,setShowModal] = useState(false)
    return(
        <Container>
            <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="/">LevelUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#modal" onClick={()=>{setShowModal(true)}}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            <h1 >Home</h1>
            <Login show={showModal} onHide={()=>setShowModal(false)}/>
            
        </Container>
    )
}

export default Home;