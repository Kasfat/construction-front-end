import React from "react";

function Footer() {
  return (
    // Footer Section
    <footer>
      <div className=" container py-5">
        <div className=" row">
          <div className=" col-md-3">
            <h3 className="mb-3">SouthBreez Construction</h3>
            <div className=" pe-5">
              <p>
                SouthBreez Construction is a leading construction company in the
                region. We are a team of professionals who are dedicated to
                providing the best services to our clients.
              </p>
            </div>
          </div>
          <div className=" col-md-3">
            <h3 className=" mb-3">Our Services</h3>
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
            <h3 className=" mb-3">Quick Links</h3>
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
              <li>
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>
          <div className=" col-md-3">
            <h3 className=" mb-3"> Contact Us</h3>
            <ul>
              <li>
                <a href="tel:">(888-000-000)</a>
              </li>
              <li>
                <a href="">info@example.com</a>
              </li>
              <li>
                <p>123, XYZ Street, ABC City</p>
              </li>
            </ul>
          </div>
          <hr />
          <div className=" text-center mt-3">
            <p>&copy; 2021 SouthBreez Construction. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
