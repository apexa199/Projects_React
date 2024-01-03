import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import  LangContext  from '../pages/LangContext';


export const ApplicationNav = () => {

  const {setLan} = useContext(LangContext);

  const handleLan = (e) => {
      
    setLan(e.target.value)
  }


  return (
    <Navbar bg="primary" className='mb-5 fs-6'>
    <Container>

      <Navbar.Brand href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
      </Navbar.Brand>
      <Nav className="ml-auto">
     
      <Nav.Link as={Link} to='/'>SIGN UP</Nav.Link>
        <Nav.Link as={Link} to='/login'>LOGIN</Nav.Link>     
        <Nav.Link as={Link} to='/home'>DASHBOARD</Nav.Link> 
        <Nav.Link as={Link} to='/GridData'>GRID DATA</Nav.Link>   
        <Nav.Link >
          
          <select onChange={handleLan}>

            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="gj">Gujrati</option>
          </select>
          
        </Nav.Link>
          
        </Nav>

    </Container>
  </Navbar>
  )
}
