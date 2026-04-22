import { Link } from "react-router-dom";
import "./CallToAction.css";

export default function CallToAction() {
  return (
    <section className="call-to-action section pt-5 pb-5">
      <div className="container">
        <div className="saas-card text-center p-5 mx-auto" style={{ maxWidth: "800px" }}>
          <p className="section-eyebrow">Ready to start?</p>
          <h3 className="display-6 fw-bold mb-4">Transform your publishing workflow today</h3>
          <p className="lead mb-5 text-secondary">
            Our full-service DTP workflow is built around precise multilingual handling,
            expert project management, and rapid turnaround times.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Let's Talk <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
