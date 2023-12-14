import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import logoApp from "../../assets/images/logo192.png";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";

const Header = () => {
  const { user, loginContext, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const location = useLocation();
  const { totalAmount } = useContext(CartContext);

  const [hideCartButton, setHideCartButton] = useState(false);
  const [hideSignInButton, setHideSignInButton] = useState(false);

  useEffect(() => {
    // Checking position cart
    if (location.pathname === "/cart") {
      setHideCartButton(true);
    } else {
      setHideCartButton(false);
    }

    // Checking position login
    if (location.pathname === "/login") {
      setHideSignInButton(true);
    } else {
      setHideSignInButton(false);
    }
  }, [location]);

  useEffect(() => {
    // Checking login
    if (localStorage.getItem("email")) {
      loginContext(
        localStorage.getItem("email"),
        localStorage.getItem("token")
      );
    }
  }, []);

  const handleLogout = async () => {
    await logout();
    toast.success("Logout success!");
    navigate("/");
  };

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
          {user && user.email && (
            <span className="ms-2">Welcome, {user.email}</span>
          )}
          <Nav className="m-auto">
            <Nav.Link>All</Nav.Link>
            <Nav.Link>Men's clothing</Nav.Link>
            <Nav.Link>Women's clothing</Nav.Link>
            <Nav.Link>Jewelery</Nav.Link>
            <Nav.Link>Electronics</Nav.Link>
          </Nav>
          {!hideCartButton && user.auth === true && (
            <NavLink
              to="/cart"
              className="nav-link d-flex align-items-center me-3 gap-1  "
            >
              <i className="fa-solid fa-cart-shopping"></i>&nbsp;Cart
              <Badge bg="danger">{totalAmount}</Badge>
            </NavLink>
          )}
          {user && user.auth ? (
            <NavLink>
              <Button variant="outline-dark" onClick={handleLogout}>
                Sign out
              </Button>
            </NavLink>
          ) : (
            <>
              {!hideSignInButton && (
                <NavLink to="/login">
                  <Button variant="outline-dark">Sign in</Button>
                </NavLink>
              )}
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
