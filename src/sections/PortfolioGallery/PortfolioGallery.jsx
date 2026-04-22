import { useState } from "react";
import ImageModal from "../../components/ImageModal/ImageModal";
import { portfolioGroups } from "../../assets/siteData";
import "./PortfolioGallery.css";

export default function PortfolioGallery() {
  const [previewItem, setPreviewItem] = useState(null);

  return (
    <>
      <section className="portfolio section py-5">
        <div className="container">
          <div className="section-title mb-5">
            <p className="section-eyebrow">Our Work</p>
            <h2>Portfolio</h2>
            <p className="text-secondary">
              Showcasing multilingual publishing expertise across diverse
              languages and content types
            </p>
          </div>

          <div className="row g-4">
            {portfolioGroups.map((group) => (
              <div className="col-12" key={group.title}>
                <div className="portfolio__group-header mb-4">
                  <h4 className="mb-0">
                    <i className="bi bi-folder-check me-2 text-primary"></i>
                    {group.title}
                  </h4>
                </div>
                <div className="row g-4">
                  {group.items.map((item, idx) => (
                    <div className="col-md-6" key={`${group.title}-${idx}`}>
                      <div className="portfolio__card card border-0 overflow-hidden h-100">
                        <div className="portfolio__image-wrap">
                          <img
                            src={item.image}
                            alt={item.label}
                            className="card-img-top portfolio-gallery__image"
                            onClick={() => setPreviewItem(item)}
                          />
                          <div className="portfolio__overlay">
                            <button
                              type="button"
                              className="btn btn-sm btn-light"
                              onClick={() => setPreviewItem(item)}
                            >
                              <i className="bi bi-zoom-in me-1"></i>
                              View Case
                            </button>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="portfolio__metadata">
                            <div className="portfolio__meta-item">
                              <span className="portfolio__meta-label">
                                Language Pair
                              </span>
                              <p className="portfolio__meta-value">
                                {item.pair}
                              </p>
                            </div>
                            <div className="portfolio__meta-item">
                              <span className="portfolio__meta-label">
                                Content Type
                              </span>
                              <p className="portfolio__meta-value">
                                {item.type}
                              </p>
                            </div>
                            <div className="portfolio__meta-item">
                              <span className="portfolio__meta-label">
                                Complexity
                              </span>
                              <p className="portfolio__meta-value">
                                <span
                                  className={`complexity-badge complexity-${item.complexity.toLowerCase()}`}
                                >
                                  {item.complexity}
                                </span>
                              </p>
                            </div>
                            <div className="portfolio__meta-item">
                              <span className="portfolio__meta-label">
                                Scope
                              </span>
                              <p className="portfolio__meta-value">
                                {item.scope}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ImageModal item={previewItem} onClose={() => setPreviewItem(null)} />
    </>
  );
}
