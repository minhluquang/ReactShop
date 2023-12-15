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
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img
            src={logoApp}
            width="30"
            height="30"
            alt="Logo app"
          />
          &nbsp;ReactShop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            {user && user.email && (
              <Nav.Item className="ms-2">
                <Nav.Link disabled>Welcome, {user.email}</Nav.Link>
              </Nav.Item>
            )}
            {!hideCartButton && user.auth === true && (
              <Nav.Item className="me-3">
                <NavLink to="/cart" className="nav-link d-flex align-items-center">
                  <i className="fa-solid fa-cart-shopping"></i>&nbsp;Cart
                  <Badge bg="danger" className="ms-2">{totalAmount}</Badge>
                </NavLink>
              </Nav.Item>
            )}
            {user && user.auth ? (
              <Nav.Item>
                <Button variant="outline-dark" onClick={handleLogout}>
                  Sign out
                </Button>
              </Nav.Item>
            ) : (
              <>
                {!hideSignInButton && (
                  <Nav.Item>
                    <NavLink to="/login">
                      <Button variant="outline-dark">Sign in</Button>
                    </NavLink>
                  </Nav.Item>
                )}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
