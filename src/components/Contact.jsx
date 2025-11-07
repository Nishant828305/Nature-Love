// ContactPage.jsx
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate(values) {
    const e = {};
    if (!values.name) e.name = "Name is required.";
    if (!values.email) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(values.email)) e.email = "Enter a valid email.";
    if (!values.message) e.message = "Message cannot be empty.";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have a question, suggestion, or want to collaborate? We’d love to hear
          from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16">
        {/* Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-green-700">Send us a message</h2>
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                  errors.name ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                  errors.email ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                  errors.message ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="Write your message here..."
              />
              {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-green-700 transition disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-sm text-green-600 mt-3">
                ✅ Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6 text-green-700">Get in touch</h2>
          <p className="text-gray-700 leading-relaxed">
            We are always open to feedback, partnerships, and collaborations. You
            can reach us through the form or directly via the contact details below.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">support@naturecare.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Office</h3>
              <p className="text-gray-600">123 Green Street, Eco City, Earth</p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="#" className="text-green-600 hover:text-green-800">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-green-600 hover:text-green-800">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-green-600 hover:text-green-800">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-green-600 hover:text-green-800">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}