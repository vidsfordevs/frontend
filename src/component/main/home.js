import "./home.css";
import React from "react";
import app_config from "../../config";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const url = app_config.backend_url;
  const navigate = useNavigate();

  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                We provide a platform by and for Developers
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Here you can get all your problems solved in the form of videos
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <a
                    href=""
                    onClick={(e) => navigate("/main/login")}
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img
                src={url + "/images/hero-img.png"}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row gx-0">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="content">
                  <h3>Who We Are</h3>
                  <h2>
                    We are a community of developers always ready to help new
                    and stuggling developers and to build stronger community
                  </h2>
                  <p>
                    This platform provides the service for asking queries and
                    getting the solutions in the form of videos so that everyone
                    can understand programming.
                  </p>
                  <div className="text-center text-lg-start">
                    <a
                      onClick={(e) => navigate("/main/signup")}
                      className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      <span>Get Started</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img src={url + "/images/about.jpg"} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="values" className="values">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Our Features</h2>
              <p>This is one the unique platforms present on internet</p>
            </header>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="box">
                  <img
                    src={url + "/images/values-1.png"}
                    className="img-fluid"
                    alt=""
                  />
                  <h3>Ask Queries anytime</h3>
                  <p>
                    You can ask queries from the provided inreactive query
                    creatoer so that anything is not missed.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="box">
                  <img
                    src={url + "/images/values-2.png"}
                    className="img-fluid"
                    alt=""
                  />
                  <h3>Get Solutions in the forms of videos</h3>
                  <p>
                    Solutions in the form of text or code is not helpful so we
                    provide a feature providing solution in video form.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="box">
                  <img
                    src={url + "/images/values-3.png"}
                    className="img-fluid"
                    alt=""
                  />
                  <h3>Communicate with the community.</h3>
                  <p>
                    There is a huge community of developers so you can
                    communicate with them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="232"
                      data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i
                    className="bi bi-journal-richtext"
                    style={{ color: "#ee6c20" }}
                  ></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="521"
                      data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Projects</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-headset" style={{ color: "#15be56" }}></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="1463"
                      data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Hours Of Support</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-people" style={{ color: "#bb0852" }}></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="15"
                      data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Hard Workers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Features</h2>
              <p>Empowering the world to develop technology through collective knowledge</p>
            </header>

            <div className="row">
              <div className="col-lg-6">
                <img
                  src={url + "/images/features.png"}
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                <div className="row align-self-center gy-4">
                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="200"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Questions & Answers.</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="300"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check">0</i>
                      <h3>Community development.</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="400"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Analytics.</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="500"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Integrations.</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="600"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Search.</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="700"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Single sign-on</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row feture-tabs" data-aos="fade-up">
              <div className="col-lg-6">
                <h3>
                Where developers and technologists can share private, organization-specific knowledge with coworkers asynchronously.
                </h3>

                <ul className="nav nav-pills mb-3">
                  <li>
                    <NavLink
                      className="nav-link active"
                      data-bs-toggle="pill"
                      to="#tab1"
                    >
                      Saepe fuga
                    </NavLink>
                  </li>
                  <li>
                    <a className="nav-link" data-bs-toggle="pill" href="#tab2">
                      Voluptates
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" data-bs-toggle="pill" href="#tab3">
                      Corrupti
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1">
                    <p>
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check2"></i>
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check2"></i>
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>
                  </div>
                  <div className="tab-pane fade show" id="tab2">
                    <p>
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check2"></i>
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check2"></i>
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>
                  </div>

                  <div className="tab-pane fade show" id="tab3">
                    <p>
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check2"></i>
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check2"></i>
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <img
                  src={url + "/images/features-2.png"}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="row feature-icons" data-aos="fade-up">
              <h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>

              <div className="row">
                <div
                  className="col-xl-4 text-center"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <img
                    src="assets/img/features-3.png"
                    className="img-fluid p-4"
                    alt=""
                  />
                </div>

                <div className="col-xl-8 d-flex content">
                  <div className="row align-self-center gy-4">
                    <div className="col-md-6 icon-box" data-aos="fade-up">
                      <i className="ri-line-chart-line"></i>
                      <div>
                        <h4>Corporis voluptates sit</h4>
                        <p>
                          Consequuntur sunt aut quasi enim aliquam quae harum
                          pariatur laboris nisi ut aliquip
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <i className="ri-stack-line"></i>
                      <div>
                        <h4>Ullamco laboris nisi</h4>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <i className="ri-brush-4-line"></i>
                      <div>
                        <h4>Labore consequatur</h4>
                        <p>
                          Aut suscipit aut cum nemo deleniti aut omnis.
                          Doloribus ut maiores omnis facere
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <i className="ri-magic-line"></i>
                      <div>
                        <h4>Beatae veritatis</h4>
                        <p>
                          Expedita veritatis consequuntur nihil tempore
                          laudantium vitae denat pacta
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <i className="ri-command-line"></i>
                      <div>
                        <h4>Molestiae dolor</h4>
                        <p>
                          Et fuga et deserunt et enim. Dolorem architecto
                          ratione tensa raptor marte
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <i className="ri-radar-line"></i>
                      <div>
                        <h4>Explicabo consectetur</h4>
                        <p>
                          Est autem dicta beatae suscipit. Sint veritatis et sit
                          quasi ab aut inventore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Services</h2>
              <p>Veritatis et dolores facere numquam et praesentium</p>
            </header>

            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-box blue">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Nesciunt Mete</h3>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-box orange">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Eosle Commodi</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="service-box green">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Ledo Markt</h3>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="service-box red">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Asperiores Commodi</h3>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="service-box purple">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Velit Doloremque.</h3>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut
                    aut ipsam corporis aut. Sed animi at autem alias eius
                    labore.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="service-box pink">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Dolori Architecto</h3>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                    neque non et debitis iure. Corrupti recusandae ducimus enim.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </header>

            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-geo-alt"></i>
                      <h3>Address</h3>
                      <p>
                        Lucknow 
                        <br />
                        Uttar pradesh,India
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-telephone"></i>
                      <h3>Call Us</h3>
                      <p>
                        
                      
                      +91-6306862226
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-envelope"></i>
                      <h3>Email Us</h3>
                      <p>
                        Sazidbbau0786@gmail.com
                        <br />
                        sazidpathan5565@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-clock"></i>
                      <h3>Open Hours</h3>
                      <p>
                        
                        24*7
                        <br />
                       Anytime
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>

                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
