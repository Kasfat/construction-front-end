import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import AboutImg from "../../assets/images/about-us.jpg";

function Home() {
  return (
    <>
      <header>
        <div className="container py-3">
          <Navbar expand="lg">
            <Navbar.Brand href="#home" className="logo">
              <span>SouthBreez</span> Construction
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className="nav-link">
                  Home
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  About Us
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  Services
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  Projects
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  Blogs
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className=" container-fluid">
              <div className=" text-center">
                <span>Welcome Amazing Construction</span>
                <h1>
                  Carfting dreams with <br /> innovation and technology
                </h1>
                <p>
                  Your trusted partner in making your dream home a reality.Your
                  trusted partner in making your dream home a reality.
                  <br />
                  Your trusted partner in making your dream home a reality.
                </p>
                <div className="mt-4">
                  <a className=" btn btn-primary">Contact Now</a>
                  <a className=" btn btn-secondary ms-2">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section-2 py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <img src={AboutImg} alt="About Us" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <span>About us</span>
                <h3>SouthBreez Construction</h3>
                <p>
                  SouthBreez Construction is a leading construction company in
                  the region. We are a team of professionals who are dedicated
                  to providing the best services to our clients. Our goal is to
                  make your dream home a reality.
                </p>
                <p>
                  SouthBreez Construction is a leading construction company in
                  the region. We are a team of professionals who are dedicated
                  to providing the best services to our clients. Our goal is to
                  make your dream home a reality.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <div className=" container">
          <div className=" row">
            <div className=" col-md-3">
              <h3>SouthBreez Construction</h3>
              <p>
                SouthBreez Construction is a leading construction company in the
                region. We are a team of professionals who are dedicated to
                providing the best services to our clients. Our goal is to make
                your dream home a reality.
              </p>
            </div>
            <div className=" col-md-3">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Projects</a>
                </li>
                <li>
                  <a href="">Blogs</a>
                </li>
              </ul>
            </div>
            <div className=" col-md-3">
              <h3>Our Services</h3>
              <ul>
                <li>
                  <a href="">Home Construction</a>
                </li>
                <li>
                  <a href="">Interior Design</a>
                </li>
                <li>
                  <a href="">Exterior Design</a>
                </li>
                <li>
                  <a href="">Renovation</a>
                </li>
                <li>
                  <a href="">Home Decoration</a>
                </li>
              </ul>
            </div>
            <div className=" col-md-3">
              <h3> Contact Us</h3>
              <ul>
                <li>
                  <span>Address:</span>
                  <p>123, XYZ Street, ABC City</p>
                </li>
                <li>
                  <span>Email:</span>
                  <p>
                    <a href="mailto:" />
                  </p>
                </li>
                <li>
                  <span>Phone:</span>
                  <p>
                    <a href="tel:" />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
