import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';

import logoApp from "../../assets/images/logo192.png";

const Header = () => {
  const { totalAmount } = useContext(CartContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLink to="/" className="nav-link d-flex align-items-center">
            <img
              src={logoApp}
              width="30"
              height="30"
              alt="Logo app"
              className="me-2"
            />
            &nbsp;ReactShop
          </NavLink>
          <Nav className="m-auto">
            <Nav.Link>All</Nav.Link>
            <Nav.Link>Men's clothing</Nav.Link>
            <Nav.Link>Women's clothing</Nav.Link>
            <Nav.Link>Jewelery</Nav.Link>
            <Nav.Link>Electronics</Nav.Link>
          </Nav>
          <NavLink
            to="/cart"
            className="nav-link d-flex align-items-center me-3 gap-1  "
          >
            <i className="fa-solid fa-cart-shopping"></i>&nbsp;Cart
            <Badge bg="danger">{totalAmount}</Badge>
          </NavLink>
          <NavLink to="/login">
            <Button variant="outline-dark">Sign in</Button>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
