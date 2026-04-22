import "./AboutIntro.css";
import aboutImage from "../../../assets/img/about-new.jpg";

export default function AboutIntro() {
  return (
    <section className="about section pt-5">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-5">
            <div className="about__image-wrapper">
              <img
                src={aboutImage}
                alt="About LYVAN"
                className="img-fluid rounded-4 shadow-sm"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__content ps-lg-4">
              <p className="section-eyebrow">About Us</p>
              <h3 className="display-6 fw-bold mb-4">Welcome to LYVAN</h3>
              <div className="saas-card border-0 shadow-sm p-4 p-md-5">
                <p>
                  We are chosen because we put your needs first. LYVAN provides
                  services to the world's leading scientific, medical, legal and
                  professional publisher, printers and telecallers.
                </p>
                <p>
                  Our ultimate aim is to make "service without boundaries" and
                  to do business from the bottom up with the right systems in
                  place. We are more productive and more efficient, and we
                  believe our highly innovative process, technology and
                  multi-skilled workforce make us a capable and flexible
                  provider in the global publishing industry.
                </p>
                <p>
                  We offer expert, on-time project management services, design
                  template layouts and content structures. We take care of data
                  conversion, page production, copy-editing and all aspects of
                  e-publishing works and requirements.
                </p>
                <p className="mb-0">
                  We follow world-class standard processes and workflow
                  management to ensure that we always exceed our delivery
                  promises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
