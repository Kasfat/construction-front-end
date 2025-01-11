import React from "react";
import BannerHero from "../../BannerHero/BannerHero";
import BlogImg from "../../../assets/images/construction3.jpg"

function Blogs() {
  return (
    <main>
      <BannerHero
        preHeading="Quality. Integrity. Value."
        heading="Blogs"
        text="Your trusted partner in making your dream home a reality.
              <br />
              Your trusted partner in making your dream home a reality."
      />
      <section className="section-6 py-5 bg-light">
        <div className=" container">
          <div className="section-header text-center">
            <span>Blog & News</span>
            <h2>Our latest news</h2>
            <p>
              We offer a diverse array of construction service, spaning
              residential, commercial and industrial project
            </p>
          </div>
          <div className="row pt-3">
            <div className=" col-md-4">
              <div className=" card shadow border-0">
                <div className="card-img">
                  <img src={BlogImg} alt="" className=" w-100" />
                </div>
                <div className=" card-body p-4">
                  <div className=" mb-3">
                    <a href="#" className="title">
                      Dummy blog title
                    </a>
                  </div>
                  <a href="#" className=" btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className=" col-md-4">
              <div className=" card shadow border-0">
                <div className="card-img">
                  <img src={BlogImg} alt="" className=" w-100" />
                </div>
                <div className=" card-body p-4">
                  <div className=" mb-3">
                    <a href="#" className="title">
                      Dummy blog title
                    </a>
                  </div>
                  <a href="#" className=" btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className=" col-md-4">
              <div className=" card shadow border-0">
                <div className="card-img">
                  <img src={BlogImg} alt="" className=" w-100" />
                </div>
                <div className=" card-body p-4">
                  <div className=" mb-3">
                    <a href="#" className="title">
                      Dummy blog title
                    </a>
                  </div>
                  <a href="#" className=" btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blogs;
