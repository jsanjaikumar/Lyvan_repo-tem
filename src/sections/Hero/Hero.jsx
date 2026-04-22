import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero section pt-5 pb-5">
      <div className="container">
        {/* Main Split Layout */}
        <div className="hero__top-section">
          <div className="row align-items-center w-100 mb-0">
            <div className="col-lg-6">
              <div className="hero__content text-start pe-lg-4">
                <p
                  className="hero__eyebrow fw-bold mb-3"
                  aria-label="Publishing and Localization, available now"
                >
                  <span className="hero__eyebrow-text">
                    Publishing and Localization
                  </span>
                  <span className="hero__status-dot" aria-hidden="true"></span>
                  <span className="visually-hidden">Available now</span>
                </p>
                <h1 className="hero__title fw-bolder mb-3 text-dark mt-2">
                  {/* Service without boundaries for professional publishing */}
                  Seamless Publishing and Voice Solutions Without Boundaries
                </h1>
                <p className="hero__lead text-secondary mb-4 fs-5 w-100">
                  LYVAN provides full production, translation, QA and workflow
                  services for multilingual publishing teams globally.
                </p>
                <div className="hero__actions d-flex gap-3 justify-content-start">
                  <Link
                    to="/service"
                    className="btn btn-dark btn-lg rounded-pill px-4"
                    style={{ backgroundColor: "#0f172a" }}
                  >
                    Get Services
                  </Link>
                  <Link
                    to="/contact"
                    className="btn btn-outline-dark btn-lg rounded-pill px-4"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
              <div
                className="hero__media-wrapper rounded-5 overflow-hidden shadow-sm ms-auto"
                style={{ height: "400px", backgroundColor: "#aba195" }}
              >
                <img
                  src="/assets/img/hero-bg-new.jpg"
                  alt="LYVAN workflow"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <div className="hero__feature-bar d-flex flex-column flex-lg-row gap-4 mt-5 w-100">
          {/* Feature Card 1 */}
          <div
            className="hero__feature-card p-4 rounded-4 shadow-sm d-flex flex-grow-1"
            style={{ backgroundColor: "#f1ede8" }}
          >
            <div className="row g-3 w-100 m-0">
              <div className="col-12 col-xl-6 px-lg-2">
                <div className="d-flex flex-column gap-2">
                  <i
                    className="bi bi-globe2 text-dark"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <p
                    className="mb-0 text-dark lh-sm"
                    style={{ fontSize: "0.95rem" }}
                  >
                    <strong>Expert Translation:</strong>
                    <br />
                    <span className="text-dark opacity-75">
                      Certified global reach.
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-xl-6 px-lg-2">
                <div className="d-flex flex-column gap-2">
                  <i
                    className="bi bi-gear-wide-connected text-dark"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <p
                    className="mb-0 text-dark lh-sm"
                    style={{ fontSize: "0.95rem" }}
                  >
                    <strong>Workflow Automation:</strong>
                    <br />
                    <span className="text-dark opacity-75">
                      Seamless production processes.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div
            className="hero__feature-card p-4 rounded-4 shadow-sm d-flex flex-grow-1"
            style={{ backgroundColor: "#f1ede8" }}
          >
            <div className="row g-3 w-100 m-0">
              <div className="col-12 col-xl-6 px-lg-2">
                <div className="d-flex flex-column gap-2">
                  <i
                    className="bi bi-shield-check text-dark"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <p
                    className="mb-0 text-dark lh-sm"
                    style={{ fontSize: "0.95rem" }}
                  >
                    <strong>QA & Compliance:</strong>
                    <br />
                    <span className="text-dark opacity-75">
                      Precise, checked results.
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-xl-6 px-lg-2">
                <div className="d-flex flex-column gap-2">
                  <i
                    className="bi bi-layout-text-window-reverse text-dark"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <p
                    className="mb-0 text-dark lh-sm"
                    style={{ fontSize: "0.95rem" }}
                  >
                    <strong>Multilingual DTP:</strong>
                    <br />
                    <span className="text-dark opacity-75">
                      Final-format, ready to publish.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Box */}
          <Link
            to="/portfolio"
            className="hero__arrow-box d-flex align-items-center justify-content-center rounded-4 flex-shrink-0 text-decoration-none"
            style={{
              backgroundColor: "#0f172a",
              minWidth: "120px",
              minHeight: "120px",
            }}
          >
            <i
              className="bi bi-arrow-up-right text-white"
              style={{ fontSize: "3.5rem", fontWeight: "bold" }}
            ></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
