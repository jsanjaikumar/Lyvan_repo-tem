import { useRef, useState } from "react";
import { contactDetails } from "../../assets/siteData";
import "./Contact.css";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const formRef = useRef(null);
  const [formState, setFormState] = useState(initialFormState);
  const [submissionState, setSubmissionState] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
    if (submissionState !== "idle") {
      setSubmissionState("idle");
      setStatusMessage("");
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (submissionState === "loading") return;

    try {
      setSubmissionState("loading");
      setStatusMessage("");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your message right now.",
        );
      }

      setSubmissionState("success");
      setStatusMessage(
        "Your message has been sent successfully. We'll respond within 24 hours.",
      );
      setFormState(initialFormState);
      formRef.current?.reset();
    } catch (error) {
      setSubmissionState("error");
      setStatusMessage(
        error?.message ||
          "We could not send your message right now. Please try again.",
      );
    }
  };

  return (
    <section id="contact" className="contact section py-5">
      <div className="container">
        <div className="section-title mb-5">
          <p className="section-eyebrow">Get In Touch</p>
          <h2>Let's Talk About Your Project</h2>
          <p className="text-secondary">
            Ready to discuss your publishing or localization needs? We're here
            to help.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="contact__info-panel glass-panel rounded-4 p-4 p-lg-5 h-100">
              <div className="contact__info-item">
                <div className="contact__icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <h5>Call Us</h5>
                  <p className="mb-0">{contactDetails.phone}</p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <h5>Email Us</h5>
                  <p className="mb-0">{contactDetails.email}</p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <h5>Office Location</h5>
                  {contactDetails.address.map((line) => (
                    <p key={line} className="mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="contact__response-time">
                <i className="bi bi-info-circle"></i>
                <p>
                  <strong>Response Time:</strong> We typically respond to
                  inquiries within 24 hours during business days.
                </p>
              </div>

              <div className="contact__alt-actions">
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="btn btn-sm btn-outline-primary w-100 mb-2"
                >
                  <i className="bi bi-envelope me-2"></i>
                  Email Directly
                </a>
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="btn btn-sm btn-outline-primary w-100"
                >
                  <i className="bi bi-telephone me-2"></i>
                  Call Us Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact__form-panel glass-panel rounded-4 p-4 p-lg-5">
              <form
                ref={formRef}
                className="contact-form"
                onSubmit={submitForm}
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        className="form-control"
                        name="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={updateField}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={updateField}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        className="form-control"
                        name="subject"
                        placeholder="What is this about?"
                        value={formState.subject}
                        onChange={updateField}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder="Tell us about your project needs..."
                        value={formState.message}
                        onChange={updateField}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    {submissionState === "loading" ? (
                      <div className="alert alert-info mb-3">
                        <i className="bi bi-hourglass-split me-2"></i>
                        Sending your message...
                      </div>
                    ) : null}
                    {submissionState === "success" ? (
                      <div className="alert alert-success mb-3">
                        <i className="bi bi-check-circle me-2"></i>
                        {statusMessage}
                      </div>
                    ) : null}
                    {submissionState === "error" ? (
                      <div className="alert alert-danger mb-3">
                        <i className="bi bi-exclamation-circle me-2"></i>
                        {statusMessage}
                      </div>
                    ) : null}
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100"
                      disabled={submissionState === "loading"}
                    >
                      {submissionState === "loading"
                        ? "Sending..."
                        : "Send Message"}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>

                  <div className="col-12">
                    <p className="form-disclaimer">
                      <i className="bi bi-shield-check me-1"></i>
                      Your information is safe. We never share your details with
                      third parties.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
