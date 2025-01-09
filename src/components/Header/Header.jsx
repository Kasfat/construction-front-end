import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container py-3">
        <Navbar expand="lg">
          <Navbar.Brand as={Link} to="/" className="logo">
            <span>SouthBreez</span> Construction
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-link">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" className="nav-link">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs" className="nav-link">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
