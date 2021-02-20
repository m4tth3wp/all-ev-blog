import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const NavBar = (props) => {
  let nav = props.user ?
    <Nav variant="pills" className="justify-content-center">
      <Nav.Item as="li">
      <Link to='/profile' className='NavBar-link'>Profile</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      </Nav.Item>
      <Nav.Item as="li">
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      </Nav.Item>
      <Nav.Item as="li">
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>Welcome to All EVs, {props.user.name}</span>
      </Nav.Item>
    </Nav>
    :
    <Nav variant="pills" className="justify-content-center">
      <Nav.Item as="li">
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      </Nav.Item>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Nav.Item as="li">
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      </Nav.Item>
    </Nav>;

  return (
    <div className='NavBar'>
      {nav}
    </div>

  );
};

export default NavBar;