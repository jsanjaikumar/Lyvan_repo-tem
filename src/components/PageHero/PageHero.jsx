import { Link } from "react-router-dom";
import "./PageHero.css";
import aboutPageHeroBg from "../../../assets/img/about-page-title-bg-new.jpg";
import servicesPageHeroBg from "../../../assets/img/services-page-title-bg.jpg";
import portfolioPageHeroBg from "../../../assets/img/portfolio-page-title-bg.jpg";
import contactPageHeroBg from "../../../assets/img/contact-page-title-bg.jpg";
import voicePageHeroBg from "../../../assets/img/hero-bg-new.jpg";

export default function PageHero({ variant, title, breadcrumb }) {
  const backgroundByVariant = {
    about: aboutPageHeroBg,
    services: servicesPageHeroBg,
    portfolio: portfolioPageHeroBg,
    contact: contactPageHeroBg,
    voice: voicePageHeroBg,
  };

  return (
    <div className="container mt-5 pt-5">
      <div
        className={`page-hero page-hero--${variant}`}
        style={{ backgroundImage: `url(${backgroundByVariant[variant]})` }}
      >
        <div className="page-hero__content text-center">
          <h1 className="display-4 fw-bold mb-3">{title}</h1>
          <nav className="breadcrumbs d-inline-block">
            <ol className="list-unstyled d-flex gap-2 mb-0 justify-content-center">
              <li>
                <Link
                  to="/"
                  className="text-white-50 text-decoration-none hover-white"
                >
                  Home
                </Link>
              </li>
              <li className="text-white-50">/</li>
              <li className="current fw-bold">{breadcrumb}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}
