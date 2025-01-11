import React from "react";
import BannerHero from "../../BannerHero/BannerHero";
import ConstructionImg from "../../../assets/images/construction1.jpg";

function Projects() {
  return (
  
      <main>
        <BannerHero
          preHeading="Quality. Integrity. Value."
          heading="Projects"
          text="Your trusted partner in making your dream home a reality.
              <br />
              Your trusted partner in making your dream home a reality."
        />
        <section className="section-3 py-5 bg-light">
          <div className=" container py-5">
            <div className="section-header text-center">
              <span>Our Projects</span>
              <h2>Discover our diverse range of project</h2>
              <p>
                We offer a diverse array of construction service, spaning
                residential, commercial and industrial project
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img
                      src={ConstructionImg}
                      alt="Construction"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Dhaka project</h3>
                    </div>
                    <div className="service-content">
                      <p>We offer you get the service and live greate life</p>
                      <button className="btn btn-primary small">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img
                      src={ConstructionImg}
                      alt="Construction"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Khulna project</h3>
                    </div>
                    <div className="service-content">
                      <p>We offer you get the service and live greate life</p>
                      <button className="btn btn-primary small">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img
                      src={ConstructionImg}
                      alt="Construction"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Rajshahi project</h3>
                    </div>
                    <div className="service-content">
                      <p>We offer you get the service and live greate life</p>
                      <button className="btn btn-primary small">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img
                      src={ConstructionImg}
                      alt="Construction"
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Kushtia project</h3>
                    </div>
                    <div className="service-content">
                      <p>We offer you get the service and live greate life</p>
                      <button className="btn btn-primary small">
                        Read More
                      </button>
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

export default Projects;
