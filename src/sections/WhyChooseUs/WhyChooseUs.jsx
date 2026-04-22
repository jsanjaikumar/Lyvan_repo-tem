import { useEffect, useState } from "react";
import { whyUsSlides } from "../../assets/siteData";
import "./WhyChooseUs.css";
import whyUsImage from "../../../assets/img/why-us-bg.jpg";

export default function WhyChooseUs() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % whyUsSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = whyUsSlides[activeSlide];

  return (
    <section id="why-us" className="why-us section py-5">
      <div className="container">
        <div className="section-title mb-4">
          <h2 className="why_title">Why Choose Us</h2>
          <p className="section-eyebrow">Why LYVAN</p>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-xl-5">
            <div className="why-choose-us__image-wrap shadow-sm">
              <img src={whyUsImage} alt="Why LYVAN" />
            </div>
          </div>
          <div className="col-xl-7">
            <div className="glass-panel no-hover rounded-5 p-4 h-100 d-flex flex-column justify-content-center">
              <h3 className="mb-3">{slide.title}</h3>
              <h4 className="mb-3">{slide.subtitle}</h4>
              <p>{slide.body}</p>
              <div className="d-flex align-items-center gap-2 mt-3">
                <div className="why-choose-us__dots ms-0">
                  {whyUsSlides.map((entry, index) => (
                    <button
                      key={entry.title}
                      type="button"
                      className={`why-choose-us__dot ${activeSlide === index ? "why-choose-us__dot--active" : ""}`}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
