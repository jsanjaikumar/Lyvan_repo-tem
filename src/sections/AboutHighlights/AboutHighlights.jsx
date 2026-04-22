import "./AboutHighlights.css";

export default function AboutHighlights() {
  const specializations = [
    "File Preparation for Translation",
    "Post Translation DTP",
    "Content Updation",
    "Standalone DQA - Quality Assurance Services",
    "Remediation - 508 Accessibility Services",
  ];

  const advantages = [
    { title: "Increased productivity", icon: "bi-speedometer" },
    { title: "Reduced production costs", icon: "bi-piggy-bank" },
    { title: "Improved appearance of documents", icon: "bi-star" },
    {
      title: "Enhanced creativity with an element of fun",
      icon: "bi-palette",
    },
    { title: "Ability to produce customized documents", icon: "bi-sliders" },
    { title: "Reduced time to print", icon: "bi-clock" },
  ];

  const bpoProjects = [
    "E-books",
    "Brochures",
    "Menus",
    "Technical manuals",
    "PDF files",
    "Marketing materials",
    "Manuscript and e-learning materials",
  ];

  return (
    <section className="about-highlights section pt-5 pb-5">
      <div className="container">
        <div className="section-title mb-5">
          <p className="section-eyebrow">Our Expertise</p>
          <h2>Why Teams Trust LYVAN</h2>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <div className="saas-card p-4 p-lg-5 h-100">
              <div className="card-header mb-4 border-0 bg-transparent">
                <i className="bi bi-lightning-charge text-primary"></i>
                <h4 className="mb-0 ms-2">What We Specialize In</h4>
              </div>
              <ul className="specializations-list">
                {specializations.map((spec, idx) => (
                  <li key={idx}>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="saas-card p-4 p-lg-5 h-100">
              <div className="card-header mb-4 border-0 bg-transparent">
                <i className="bi bi-graph-up text-success"></i>
                <h4 className="mb-0 ms-2">Key Business Benefits</h4>
              </div>
              <div className="advantages-grid">
                {advantages.map((adv, idx) => (
                  <div key={idx} className="advantage-item">
                    <i className={`bi ${adv.icon}`}></i>
                    <p>{adv.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="saas-card p-4 p-lg-5 feature-card">
              <div className="feature-icon text-primary mb-3">
                <i className="bi bi-building fs-1"></i>
              </div>
              <h4>BPO Solutions</h4>
              <p className="text-secondary about-highlights__text-block">
                We make businesses work smarter and enterprise goals clearer and
                nearer. We work with you to transform your business into a
                better, cost-efficient operation.
              </p>
              <p className="text-secondary about-highlights__text-block">
                Since 2017, we have provided BPO solutions tailored to the
                specific requirements of enterprises across the globe.
              </p>
              <p className="text-secondary mb-2">
                Depending on the project, we support DTP after translation for:
              </p>
              <ul className="specializations-list specializations-list--compact">
                {bpoProjects.map((item) => (
                  <li key={item}>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="saas-card p-4 p-lg-5 feature-card">
              <div className="feature-icon text-primary mb-3">
                <i className="bi bi-diagram-2 fs-1"></i>
              </div>
              <h4>Our Workflow</h4>
              <p className="text-secondary">
                "We offer a complete range of services at competitive prices.
                Having specialized in DTP since 2016, we have served clients
                from USA, UK and Europe, ensuring that we always exceed our
                delivery promises with the use of world-class standards and
                processes."
              </p>
              <p className="text-secondary about-highlights__text-block">
                Our large-scale experience in handling non-English content has
                helped us set up in-depth language analysis stages in our
                standard DTP workflow to focus on language-specific
                characteristics involved in each project.
              </p>
              <p className="text-secondary mb-0">
                Our Project Management System (PMS) serves as a single
                repository for information, schedule tracking and delivery
                planning. Robust data management, storage and recovery,
                disaster-recovery procedures, data security, power backup,
                hosting redundancy and threat prevention support the expertise
                and technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
