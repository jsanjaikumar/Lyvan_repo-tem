import "./AboutWorkflow.css";

export default function AboutWorkflow() {
  return (
    <section className="about section pt-5 pb-5">
      <div className="container">
        <div className="saas-card p-4 p-lg-5 text-center mx-auto" style={{ maxWidth: "800px" }}>
          <h3 className="mb-4">Workflow of LYVAN</h3>
          <p className="text-secondary mb-0">
            We use language analysis stages in our standard DTP workflow and a
            project management system that acts as a repository for tracking,
            planning, storage, recovery, security and delivery management.
          </p>
        </div>
      </div>
    </section>
  );
}
