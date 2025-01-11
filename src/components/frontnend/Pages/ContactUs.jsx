import React from "react";
import BannerHero from "../../BannerHero/BannerHero";

function ContactUs() {
  return (
    <main>
      <BannerHero
        preHeading="Quality. Integrity. Value."
        heading="Contact Us"
        text="Your trusted partner in making your dream home a reality.
              <br />
              Your trusted partner in making your dream home a reality."
      />
      <section className="section-9 py-5">
        <div className=" container">
          <div className="section-header text-center">
            <h2>Conatct Us</h2>
            <p>
              We offer a diverse array of construction service, spaning
              residential, commercial and industrial project
              <br />
              We offer a diverse array of construction service, spaning
            </p>
          </div>
          <div className=" row mt-5">
            <div className=" col-md-3">
              <div className=" card shadow border-0 mb-3">
                <div className=" card-body p-4">
                  <h3>Call Us</h3>
                  <div>
                    <a href="">(888-000-000)</a>
                  </div>
                  <div>
                    {" "}
                    <a href="">(888-000-000)</a>
                  </div>

                  <h3 className="mt-4">Email Us</h3>
                  <div>
                    {" "}
                    <a href="#">example@example.com</a>
                  </div>
                  <div>
                    <a href="#">example@example.com</a>
                  </div>

                  <h3 className="mt-4">Address</h3>
                  <p>
                    22/a, Niribili gate, Mohammodia housing limited,
                    <br /> mohammadpur dhaka
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-md-9">
              <div className=" card shadow border-0">
                <div className=" card-body p-5">
                  <form>
                    <div className="row">
                      <div className=" col-md-6 mb-4">
                        <label htmlFor="" className=" form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className=" form-control form-control-lg"
                          placeholder="Enter Name"
                        />
                      </div>
                      <div className=" col-md-6 mb-4">
                        <label htmlFor="" className=" form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          className=" form-control form-control-lg"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className=" col-md-6 mb-4">
                        <label htmlFor="" className=" form-label">
                          Phone
                        </label>
                        <input
                          type="text"
                          className=" form-control form-control-lg"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className=" col-md-6 mb-4">
                        <label htmlFor="" className=" form-label">
                          Subject
                        </label>
                        <input
                          type="text"
                          className=" form-control form-control-lg"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div>
                    <label htmlFor="" className=" form-label">
                          Message
                        </label>
                        <textarea name="" id="" rows={5} className=" form-control form-control-lg" placeholder="Message"/>
                    </div>
                    <button className=" btn btn-primary large mt-3">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
