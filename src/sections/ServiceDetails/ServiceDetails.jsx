import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { serviceDetails } from "../../assets/siteData";
import "./ServiceDetails.css";

export default function ServiceDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const initialId = useMemo(
    () => location.hash.replace("#", "") || "file_preparation",
    [location.hash],
  );
  const [activeId, setActiveId] = useState(initialId);

  useEffect(() => {
    const hashId = location.hash.replace("#", "");
    if (hashId && hashId !== activeId) {
      setActiveId(hashId);
    }
    if (!hashId && activeId !== "file_preparation") {
      setActiveId("file_preparation");
    }
  }, [location.hash, activeId]);

  const activeService =
    serviceDetails.find((item) => item.id === activeId) ?? serviceDetails[0];

  const selectService = (serviceId) => {
    setActiveId(serviceId);
    navigate(
      { pathname: "/service", hash: `#${serviceId}` },
      { replace: false },
    );
  };

  return (
    <section className="service-details section py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="glass-panel rounded-4 p-3 service-details__nav">
              <h4 className="px-2 pt-2 mb-3">Services</h4>
              <div className="service-details__tabs">
                {serviceDetails.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    className={`service-details__tab ${service.id === activeId ? "service-details__tab--active" : ""}`}
                    onClick={() => selectService(service.id)}
                  >
                    <i className="bi bi-arrow-right-circle me-2" />
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="glass-panel rounded-4 p-4 p-lg-5">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="img-fluid rounded-4 mb-4 service-details__image"
              />

              <div className="service-details__header mb-4">
                <h3>{activeService.title}</h3>
                <p className="text-secondary">{activeService.description}</p>
              </div>

              {activeService.bullets ? (
                <div className="mb-4">
                  <h5 className="mb-3">Key Capabilities</h5>
                  <ul className="service-details__bullets">
                    {activeService.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {activeService.bestFor && (
                <div className="service-details__best-for">
                  <div className="best-for-box">
                    <h5 className="mb-2">
                      <i className="bi bi-check-circle me-2 text-success"></i>
                      Best For
                    </h5>
                    <p className="mb-0">{activeService.bestFor}</p>
                  </div>
                </div>
              )}

              <div className="service-details__cta mt-5">
                <h5 className="mb-3">Ready to get started?</h5>
                <Link to="/contact" className="btn btn-primary">
                  {activeService.actionText || "Request Service"}
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
