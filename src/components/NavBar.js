import React from "react";
import logo from "../images/logo.jpg"
import {
  Row,
  Col,
  Nav,
  Navbar,
  Container,
  Form,

} from "react-bootstrap";

export const NavBar = ({search}) => {
  const HandlerSearch=(word) => { 
     search(word)
   }
  return (
    <Row >
      <Col sm="12">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container >
            <Navbar.Brand href="#" >
              <a href="/">
              <img style={{width:"60px",height:"60px",borderRadius:"50%"}} src={logo} alt="logo" /></a></Navbar.Brand>
              
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >

              </Nav>
              <Form className="d-flex flex-fill">
                <Form.Control
                  type="search"
                  placeholder="ابحث هنا"
                  className="me-2 "
                  aria-label="Search"
                  onChange={(e)=> HandlerSearch(e.target.value)}
                />
                
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
};
