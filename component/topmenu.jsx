
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Topmenu=()=>{
    return(
        <>
         {/* <Navbar expand="primary" className="bg-body-tertiary1">
      <Container fluid>

 <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link> */}
 {/* </Nav>
    </Container>
    </Navbar> */}
 <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
{/* <Nav.Link href="#action1">Home</Nav.Link>
             <Nav.Link href="#search">search</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link> */}           
             <Nav.Link as={Link} to="home">Home</Nav.Link> 
              <Nav.Link as={Link} to="search">search</Nav.Link> 
                  <Nav.Link as={Link} to="ac">Air conditinors</Nav.Link> 
                  <Nav.Link as={Link} to="smartphone">Smart Phones</Nav.Link> 
                  <Nav.Link as={Link} to="microwave">Microwave</Nav.Link> 
                <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"/>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Topmenu;
