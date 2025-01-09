import React from "react";

import AboutImg from "../../../assets/images/about-us.jpg";
import ServiceImg from "../../../assets/images/construction1.jpg";
import ConstructionImg from "../../../assets/images/construction2.jpg";
import Icon1 from "../../../assets/images/icon-1.svg";
import Icon2 from "../../../assets/images/icon-2.svg";
import Icon3 from "../../../assets/images/icon-3.svg";
import BlogImg from "../../../assets/images/construction3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AvatarImg from "../../../assets/images/author-2.jpg";

function Home() {
  return (
    <>
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
                  <a className=" btn btn-primary large">Contact Now</a>
                  <a className=" btn btn-secondary large ms-2">View Project</a>
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

        {/* Services Section */}
        <section className="section-3 py-5 bg-light">
          <div className=" container-fluid py-5">
            <div className="section-header text-center">
              <span>Our Services</span>
              <h2>Our construction services</h2>
              <p>We offer you get the service and live greate life</p>
            </div>
            <div className="row pt-4">
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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

        {/* Why Choose Us */}
        <section className="section-4 py-5">
          <div className=" container py-5">
            <div className="section-header text-center">
              <span>Why Choose Us</span>
              <h2>Why we are the best</h2>
              <p>
                We offer a diverse array of construction service, spaning
                residential, commercial and industrial project
                <br />
                We offer a diverse array of construction service, spaning
              </p>
            </div>
            <div className="row pt-4">
              <div className=" col-md-4">
                <div className=" card shadow border-0 p-4">
                  <div className=" card-icon">
                    <img src={Icon1} alt="" />
                  </div>
                  <div className=" card-title mt-3">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <p>
                    Small actions create big impacts. It all begins and end with
                    each employee.
                  </p>
                </div>
              </div>
              <div className=" col-md-4">
                <div className=" card shadow border-0 p-4">
                  <div className=" card-icon">
                    <img src={Icon2} alt="" />
                  </div>
                  <div className=" card-title mt-3">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <p>
                    Small actions create big impacts. It all begins and end with
                    each employee.
                  </p>
                </div>
              </div>
              <div className=" col-md-4">
                <div className=" card shadow border-0 p-4">
                  <div className=" card-icon">
                    <img src={Icon3} alt="" />
                  </div>
                  <div className=" card-title mt-3">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <p>
                    Small actions create big impacts. It all begins and end with
                    each employee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our projects */}
        <section className="section-3 py-5 bg-light">
          <div className=" container-fluid py-5">
            <div className="section-header text-center">
              <span>Our Projects</span>
              <h2>Discover our diverse range of project</h2>
              <p>
                We offer a diverse array of construction service, spaning
                residential, commercial and industrial project
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-3 col-lg-3">
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
                      <button className="btn btn-primary small">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
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
                      <button className="btn btn-primary small">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
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
                      <button className="btn btn-primary small">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
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
                      <button className="btn btn-primary small">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section-5 py-5">
          <div className="container">
            <div className="section-header text-center">
              <span>Testimonial</span>
              <h2>What our clients say</h2>
              <p>
                We offer a diverse array of construction service, spaning
                residential, commercial and industrial project
              </p>
            </div>
            <Swiper
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body py-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-3 pb-2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla quam velit, vulputate eu pharetra nec, mattis ac
                        neque.
                      </p>
                    </div>
                    <hr />
                    <div className=" d-flex meta">
                      <div>
                        <img src={AvatarImg} alt="" width={50} />
                      </div>
                      <div className="ps-3">
                        <div className="name">John Doe</div>
                        <div>CEO, Company</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body py-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-3 pb-2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla quam velit, vulputate eu pharetra nec, mattis ac
                        neque.
                      </p>
                    </div>
                    <hr />
                    <div className=" d-flex meta">
                      <div>
                        <img src={AvatarImg} alt="" width={50} />
                      </div>
                      <div className="ps-3">
                        <div className="name">John Doe</div>
                        <div>CEO, Company</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body py-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-3 pb-2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla quam velit, vulputate eu pharetra nec, mattis ac
                        neque.
                      </p>
                    </div>
                    <hr />
                    <div className=" d-flex meta">
                      <div>
                        <img src={AvatarImg} alt="" width={50} />
                      </div>
                      <div className="ps-3">
                        <div className="name">John Doe</div>
                        <div>CEO, Company</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body py-5">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="content pt-3 pb-2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla quam velit, vulputate eu pharetra nec, mattis ac
                        neque.
                      </p>
                    </div>
                    <hr />
                    <div className=" d-flex meta">
                      <div>
                        <img src={AvatarImg} alt="" width={50} />
                      </div>
                      <div className="ps-3">
                        <div className="name">John Doe</div>
                        <div>CEO, Company</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* Blog & News */}
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
    </>
  );
}

export default Home;
