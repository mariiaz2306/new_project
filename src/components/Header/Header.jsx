import React from 'react'
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo'
import '../Header/Header.css'



const Header = () => {
    const getData = useSelector((state) => state.cartReducer.carts);
  
    return (
      <header className="header">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo />
          </Link>
        </div>
  
        <Nav className="me-auto">
          <Link to="/" style={{ textDecoration: 'none' }} className="nav-link">
            Home
          </Link>
          <Link to="/products" style={{ textDecoration: 'none' }} className="nav-link">
            All Books
          </Link>
          <Link to="/contacts" style={{ textDecoration: 'none' }} className="nav-link">
            Our Contacts
          </Link>
        </Nav>
  
        <div className="buttons">
          <button>
            <i className="fa fa-shopping-cart me-2"></i>
            <Link to="/cart">{getData.length}</Link>
          </button>
          <button>
            <i className="login"></i>Login
          </button>
          <button>
            <i className="register"></i>Register
          </button>
        </div>
      </header>
    );
  };
  
  export default Header;