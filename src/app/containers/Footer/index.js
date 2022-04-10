import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './index.module.scss';

const Footer = () => (
  <>
    <footer className={styles.footer}>
      <Navbar
        bg="dark"
        variant="dark">
        <Container></Container>
      </Navbar>
    </footer>
  </>
);

export default Footer;
