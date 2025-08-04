import { FaCartShopping } from "react-icons/fa6";

 import { useSelector } from "react-redux";
 import { useNavigate } from "react-router";
import { Link } from 'react-router';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import img1  from "../src/images/logo1.png"

const Header=()=>{
   const cartData = useSelector(state=>state.mycart.cart);
 const cartLength= cartData.length;
const navigate= useNavigate();
    return(
        <>
         <Navbar expand="dark" className="bg-body-tertiary">
      <Container fluid id="container">
      <div id="corma"><img src={img1} width="80%" height="80px" />
      </div>
 <Nav.Link as={Link} to="home">Home</Nav.Link> 
                  <Nav.Link as={Link} to="ac">Air conditinors</Nav.Link> 
                  <Nav.Link as={Link} to="smartphone">Smart Phones</Nav.Link> 
                  <Nav.Link as={Link} to="microwave">Microwave</Nav.Link> 
                          <Nav.Link as={Link} to="waterpurify">Water Purify</Nav.Link> 
                          <Nav.Link as={Link} to="mycartslice">Mycart</Nav.Link> 
                    <Nav.Link as={Link} to="search">Search</Nav.Link> 
                    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="search products"
              className="me-2"
              aria-label="Search"
            />
           </Form>
 {/* <button onchange="sing()" className="headers">Signup</button>
            <button onchange="logout()" className="headers">Logout</button> */}
           
  
      <div id="oo">become a<br/> supplier</div>
     <div id="oo">Investor<br/> Relations</div>
     <div id="oo">profile</div>
     <div id="header"> 
           
            {cartLength}
      <FaCartShopping onClick={()=>{navigate("/mycartslice")}}  style={{cursor:"pointer"}}/>
           </div>
  </Container>
    </Navbar>
     </>
    )
}
export default Header;