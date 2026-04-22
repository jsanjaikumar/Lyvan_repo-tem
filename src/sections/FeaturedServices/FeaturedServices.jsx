import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { featuredServices } from "../../assets/siteData";
import "./FeaturedServices.css";

function getVisibleCards(width) {
  if (width < 768) {
    return 1;
  }
  if (width < 1100) {
    return 2;
  }
  return 3;
}

export default function FeaturedServices() {
  const [visibleCards, setVisibleCards] = useState(() =>
    getVisibleCards(window.innerWidth),
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = useMemo(
    () => Math.max(featuredServices.length - visibleCards, 0),
    [visibleCards],
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (maxIndex === 0) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 3400);

    return () => window.clearInterval(timer);
  }, [maxIndex]);

  return (
    <section
      id="portfolio"
      className="portfolio section featured-services"
      style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}
    >
      <div className="container">
        <div className="section-title mb-2">
          <p className="section-eyebrow">Our Services</p>
          <h2 className="service_title">Our Services</h2>
        </div>

        <div className="featured-services__glass-shell">
          <div
            className="featured-services__viewport"
            style={{ "--visible-cards": visibleCards }}
          >
            <div
              className="featured-services__track"
              style={{
                transform: `translateX(-${activeIndex * (100 / visibleCards)}%)`,
              }}
            >
              {featuredServices.map((service) => (
                <article className="featured-services__slide" key={service.id}>
                  <div className="featured-services__card saas-card no-hover h-100 overflow-hidden d-flex flex-column">
                    <div className="featured-services__media">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="card-img-top featured-services__image"
                        style={{ height: "195px", objectFit: "cover" }}
                      />
                      <span className="featured-services__badge">
                        {service.badge}
                      </span>
                    </div>
                    <div className="card-body featured-services__body d-flex flex-column p-3">
                      <h4 className="card-title h5 mb-2 featured-services__title">
                        {service.title}
                      </h4>
                      <p className="card-text text-secondary mb-3 featured-services__summary">
                        {service.summary}
                      </p>
                      <div className="mt-auto featured-services__cta-wrap d-flex align-items-center">
                        <Link
                          to={`/service#${service.id}`}
                          className="btn w-100 featured-services__cta d-flex align-items-center justify-content-center"
                        >
                          More Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div
            className="featured-services__dots"
            role="tablist"
            aria-label="Service slides"
          >
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Go to service group ${index + 1}`}
                className={`featured-services__dot ${activeIndex === index ? "featured-services__dot--active" : ""}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
