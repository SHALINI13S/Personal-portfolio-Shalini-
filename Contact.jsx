import { useState } from "react";
import "./Contact.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const initialForm = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [feedback, setFeedback] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        const firstError =
          data.errors && data.errors.length > 0
            ? data.errors[0].msg
            : data.message || "Please check your details and try again.";
        setStatus("error");
        setFeedback(firstError);
        return;
      }

      setStatus("success");
      setFeedback(data.message || "Message sent successfully.");
      setForm(initialForm);
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
      setFeedback("Couldn't reach the server. Please try again later.");
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div>
          <h2 className="section-heading">Contact</h2>
          <p>
            Have an opportunity, a question, or just want to connect? Send me
            a message and I'll get back to you.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {feedback && (
            <p
              role="status"
              className={`form-feedback ${
                status === "error" ? "form-feedback-error" : "form-feedback-success"
              }`}
            >
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
