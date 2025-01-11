import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";

function AboutBlock() {
  return (
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
              SouthBreez Construction is a leading construction company in the
              region. We are a team of professionals who are dedicated to
              providing the best services to our clients. Our goal is to make
              your dream home a reality.
            </p>
            <p>
              SouthBreez Construction is a leading construction company in the
              region. We are a team of professionals who are dedicated to
              providing the best services to our clients. Our goal is to make
              your dream home a reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBlock;
