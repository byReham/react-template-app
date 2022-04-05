import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as RouterLink, Outlet } from "react-router-dom";

const Header = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={RouterLink} to="/">
          Brestmoda
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={RouterLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={RouterLink} to="#features">
            Features
          </Nav.Link>
          <Nav.Link as={RouterLink} to="#pricing">
            Pricing
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Outlet />
  </>
);

export default Header;
