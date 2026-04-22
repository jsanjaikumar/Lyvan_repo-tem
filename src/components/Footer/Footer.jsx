import { Link } from "react-router-dom";
import { contactDetails } from "../../assets/siteData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer app-footer mt-5">
      <div className="footer-top app-footer__top">
        <div className="container py-4">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
              <Link to="/" className="logo d-flex align-items-center">
                <span className="sitename">LYVAN</span>
              </Link>
              <p>
                We are chosen because we put your needs first. LYVAN provides
                services to the world's leading scientific, medical, legal and
                professional publisher, printers and telecallers.
              </p>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul className="app-footer__links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/service">Services</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links" />

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <h6 className="grey">Registered at</h6>
              {contactDetails.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              {/* <p className="mt-4">
                <strong>Phone:</strong> <span>{contactDetails.phone}</span>
              </p> */}
              <p>
                <strong>Email:</strong> <span>{contactDetails.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center py-3">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">LYVAN</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}
