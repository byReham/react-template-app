import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './index.module.scss';

const Footer = () => (
  <>
    <footer className={styles.footer}>
      <Navbar
        bg="dark"
        variant="dark">
        <Container>
          <Navbar.Brand href="#home">Brestmoda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  </>
);

export default Footer;
