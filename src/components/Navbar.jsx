import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import styles from '../styles/Navbar.module.css'; // Importing the CSS module

const CustomNavbar = ({ toggleTheme, currentTheme }) => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        {/* Logo - Links to Home */}
        <Navbar.Brand as={Link} to="/" className={styles.logo}>
          MyApp
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Collapse for Mobile View */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto"> {/* Align nav items to the right */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/notes">Create Notes</Nav.Link>
            <Nav.Link as={Link} to="/library">Library</Nav.Link>
            <Nav.Link as={Link} to="/wishlist">Wishlist</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact-Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Theme Change Button */}
        <Button
          variant={currentTheme === 'light' ? 'dark' : 'light'}
          onClick={toggleTheme}
          className={styles.themeButton}
        >
          Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
