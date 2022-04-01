import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-dark p-5'sticky="top">
            {/* <h1 className='text-light'>WelCome to T-Shirt Maria</h1> */}
            <Navbar bg="dark" variant="dark"  >
    <Container>
    <Navbar.Brand 
    className='fw-bolder font-monospace'>WelCome to T-Shirt Maria</Navbar.Brand>
    <Nav className=" d-flex justify-content-end">
   
      <Link className='text-decoration-none text-light' to="/home">Home</Link>
     
      
      <Link className='text-decoration-none text-light mx-2' to="/orderreview">OrderReview</Link>

      <Link className='text-decoration-none text-light mx-2' to="/grandpa">GrandPa</Link>
      
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;