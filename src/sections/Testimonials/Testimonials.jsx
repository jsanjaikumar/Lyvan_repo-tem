import { useEffect, useMemo, useState } from "react";
import { testimonials } from "../../assets/siteData";
import "./Testimonials.css";

function getVisibleCards(width) {
  if (width < 768) {
    return 1;
  }
  if (width < 1200) {
    return 2;
  }
  return 3;
}

export default function Testimonials() {
  const [visibleCards, setVisibleCards] = useState(() =>
    getVisibleCards(window.innerWidth),
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = useMemo(
    () => Math.max(testimonials.length - visibleCards, 0),
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
    }, 3600);

    return () => window.clearInterval(timer);
  }, [maxIndex]);

  const goNext = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };

  const goPrev = () => {
    setActiveIndex((current) => (current <= 0 ? maxIndex : current - 1));
  };

  return (
    <section id="testimonials" className="testimonials section py-5">
      <div className="container testimonials__container">
        <div className="section-title testimonials__title-wrap mb-4">
          <p className="testimonials__chip">
            <i className="bi bi-people-fill" aria-hidden="true"></i>
            Testimonials
          </p>
          <h2 className="testimonials__title">Feedback from latest clients</h2>
          <p className="testimonials__subtitle">
            Get answers to common questions about our workmanship, addressing
            the problem, and way of providing solutions.
          </p>
        </div>

        <div className="testimonials__slider-shell">
          <button
            type="button"
            className="testimonials__arrow testimonials__arrow--left"
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            <i className="bi bi-arrow-left-short" aria-hidden="true"></i>
          </button>

          <div
            className="testimonials__viewport"
            style={{ "--visible-cards": visibleCards }}
          >
            <div
              className="testimonials__track"
              style={{
                transform: `translateX(-${activeIndex * (100 / visibleCards)}%)`,
              }}
            >
              {testimonials.map((item) => (
                <article className="testimonials__slide" key={item.id}>
                  <div className="testimonials__card">
                    <i
                      className="bi bi-quote testimonials__quote"
                      aria-hidden="true"
                    ></i>
                    <div className="testimonials__head">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="testimonials__avatar"
                      />
                      <div className="testimonials__meta">
                        <h3>{item.name}</h3>
                        <p>
                          {item.company} <span aria-hidden="true">•</span>{" "}
                          <strong>{item.role}</strong>
                        </p>
                      </div>
                    </div>

                    <p className="testimonials__text">{item.quote}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="testimonials__arrow testimonials__arrow--right"
            onClick={goNext}
            aria-label="Next testimonial"
          >
            <i className="bi bi-arrow-right-short" aria-hidden="true"></i>
          </button>

          <div
            className="testimonials__dots"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Go to testimonial group ${index + 1}`}
                className={`testimonials__dot ${activeIndex === index ? "testimonials__dot--active" : ""}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
