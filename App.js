import React, {Component} from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './component/home.js';

import About from './component/about.js';
import Login from './component/login.js';
import Signup from './component/signup.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import M from './images/Nykaa.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { FiLogIn } from "react-icons/fi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import Nice from './component/nice.js';
import { CgProfile } from "react-icons/cg";
function App() {
  return (
    <div>
      <Router>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#home" className="al"><img src={M} width="60" height='60vh'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/" className='cat'>Categories</Nav.Link>
            
            <Nav.Link as={Link} to="/about" >Brands</Nav.Link> 
           
          </Nav>
          <Nav className="d-flex"  style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link as={Link} to="/login"><div class="in">Login <FiLogIn /></div></Nav.Link>
          <Nav.Link as={Link} to="/signup"><div class="in">SignUp <BsFillPersonPlusFill /></div></Nav.Link> 
          </Nav>
         
          <Form className="d-flex">
            <Form.Control type="search"  placeholder="Search"  className="me-2 border-style" aria-label="Search" />  
          </Form>
          <Nav.Link as={Link} to="/nice" ><CgProfile className='vam cat'/>Account</Nav.Link>
          </Navbar.Collapse>
      </Container>
    </Navbar>
   
    <Routes>
          <Route exact path='/' element={<Home/>}></Route> 
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
          <Route exact path='/nice' element={<Nice/>}></Route>
    </Routes>
    </Router>
    
    </div>
  );
}

export default App;
