import React from "react";
import BannerHero from "../../BannerHero/BannerHero";
import ServiceImg from "../../../assets/images/construction2.jpg";

function Services() {
  return (
    <main>
      <BannerHero
        preHeading="Quality. Integrity. Value."
        heading="Services"
        text="Your trusted partner in making your dream home a reality.
              <br />
              Your trusted partner in making your dream home a reality."
      />
      <section className="section-3 py-5 bg-light">
        <div className=" container py-5">
          <div className="section-header text-center">
            <span>Our Services</span>
            <h2>Our construction services</h2>
            <p>We offer you get the service and live greate life</p>
          </div>
          <div className="row pt-4">
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img
                    src={ServiceImg}
                    alt="Construction"
                    className="img-fluid"
                  />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>We offer you get the service and live greate life</p>
                    <button className="btn btn-primary small">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img
                    src={ServiceImg}
                    alt="Construction"
                    className="img-fluid"
                  />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>We offer you get the service and live greate life</p>
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img
                    src={ServiceImg}
                    alt="Construction"
                    className="img-fluid"
                  />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>We offer you get the service and live greate life</p>
                    <button className="btn btn-primary small">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img
                    src={ServiceImg}
                    alt="Construction"
                    className="img-fluid"
                  />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>We offer you get the service and live greate life</p>
                    <button className="btn btn-primary small">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img
                    src={ServiceImg}
                    alt="Construction"
                    className="img-fluid"
                  />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>We offer you get the service and live greate life</p>
                    <button className="btn btn-primary small">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img
                    src={ServiceImg}
                    alt="Construction"
                    className="img-fluid"
                  />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>We offer you get the service and live greate life</p>
                    <button className="btn btn-primary small">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
