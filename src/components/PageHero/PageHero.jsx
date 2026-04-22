import { Link } from "react-router-dom";
import "./PageHero.css";

export default function PageHero({ variant, title, breadcrumb }) {
  return (
    <div className="container mt-5 pt-5">
      <div className={`page-hero page-hero--${variant}`}>
        <div className="page-hero__content text-center">
          <h1 className="display-4 fw-bold mb-3">{title}</h1>
          <nav className="breadcrumbs d-inline-block">
            <ol className="list-unstyled d-flex gap-2 mb-0 justify-content-center">
              <li>
                <Link to="/" className="text-white-50 text-decoration-none hover-white">
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
