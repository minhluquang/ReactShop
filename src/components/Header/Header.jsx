import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import logoApp from "../../assets/images/logo192.png";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="d-flex justify-content-end"
          id="basic-navbar-nav"
        >
          <Nav>
            <NavLink to="/cart" className="nav-link d-flex align-items-center">
              <i className="fa-solid fa-cart-shopping"></i>&nbsp;Cart
            </NavLink>
            <NavLink className="nav-link">
              <NavLink to="/login">Sign in</NavLink>
              <NavLink to="/login">Sign up</NavLink>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
