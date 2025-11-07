import React, { useState } from "react";

import { Link } from 'react-router-dom';

// SignupComponent.jsx
// Single-file React component styled with TailwindCSS.
// - Default export is the Signup component
// - Includes client-side validation, password strength meter,
//   accessibility attributes, and example async submission flow.
// - Replace `fakeSignup` with your real API call (Firebase, NextAuth, Supabase, etc.)

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState(null);

  function validate(values) {
    const e = {};
    if (!values.name || values.name.trim().length < 2) e.name = "Enter your name (min 2 chars).";
    if (!values.email) e.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = "Enter a valid email.";
    if (!values.password) e.password = "Password is required.";
    else if (values.password.length < 8) e.password = "Password must be at least 8 characters.";
    else if (!/[A-Z]/.test(values.password)) e.password = "Use at least one uppercase letter.";
    else if (!/[0-9]/.test(values.password)) e.password = "Use at least one number.";
    if (values.password !== values.confirm) e.confirm = "Passwords do not match.";
    return e;
  }

  function passwordStrength(pw) {
    // simple scoring: length + variety
    let score = 0;
    if (!pw) return { score: 0, label: "Empty" };
    if (pw.length >= 8) score += 1;
    if (pw.length >= 12) score += 1;
    if (/[A-Z]/.test(pw)) score += 1;
    if (/[0-9]/.test(pw)) score += 1;
    if (/[^A-Za-z0-9]/.test(pw)) score += 1;
    const labels = ["Very weak", "Weak", "Okay", "Good", "Strong", "Very strong"];
    return { score, label: labels[Math.min(score, labels.length - 1)] };
  }

  async function fakeSignup(payload) {
    // Replace this with your real signup call (fetch/axios/Firebase)
    // This mimics network latency and possible failure.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (payload.email === "taken@example.com") reject({ message: "Email already in use." });
        else resolve({ ok: true, user: { id: "u_123", name: payload.name } });
      }, 900);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError(null);
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    setSubmitting(true);
    try {
      // example payload - adapt to your backend
      const payload = { name: form.name.trim(), email: form.email.trim(), password: form.password };
      const res = await fakeSignup(payload);
      // handle successful signup (redirect, show message, auto-login, etc.)
      // For example: router.push('/welcome') or setAuthToken(res.token)
      alert(`Signed up successfully — welcome, ${res.user.name}!`);
      setForm({ name: "", email: "", password: "", confirm: "" });
    } catch (err) {
      setServerError(err.message || "Signup failed. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const strength = passwordStrength(form.password);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-1">Create an account</h2>
        <p className="text-sm text-gray-500 mb-6">Quick and secure signup — no fuss.</p>

        <form onSubmit={handleSubmit} noValidate>
          <label className="block mb-3">
            <span className="text-sm font-medium text-gray-700">Full name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
              placeholder="Your name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <p id="name-error" className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </label>

          <label className="block mb-3">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
              placeholder="you@company.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <p id="email-error" className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </label>

          <div className="mb-3">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Password</span>
              <div className="mt-1 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))}
                  className={`block w-full rounded-lg border px-3 py-2 pr-28 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.password ? 'border-red-400' : 'border-gray-200'}`}
                  placeholder="Create a password"
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                />

                <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2">
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="text-xs px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              {errors.password && <p id="password-error" className="text-xs text-red-600 mt-1">{errors.password}</p>}

              <div className="mt-2">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{strength.label}</span>
                  <span>{form.password.length ? `${form.password.length} chars` : ''}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mt-2 overflow-hidden">
                  <div
                    aria-hidden
                    className={`h-2 rounded-full transition-all duration-300`} 
                    style={{ width: `${(strength.score / 5) * 100}%` }}
                  />
                </div>
              </div>
            </label>
          </div>

          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-700">Confirm password</span>
            <input
              type="password"
              name="confirm"
              value={form.confirm}
              onChange={(e) => setForm((s) => ({ ...s, confirm: e.target.value }))}
              className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.confirm ? 'border-red-400' : 'border-gray-200'}`}
              placeholder="Repeat your password"
              aria-invalid={!!errors.confirm}
              aria-describedby={errors.confirm ? 'confirm-error' : undefined}
            />
            {errors.confirm && <p id="confirm-error" className="text-xs text-red-600 mt-1">{errors.confirm}</p>}
          </label>

          {serverError && <p className="text-sm text-red-600 mb-3">{serverError}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700 disabled:opacity-60"
          >
            {submitting ? (
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            ) : null}
            <span>{submitting ? 'Creating account...' : 'Create account'}</span>
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500">
          Already have an account? <Link to="/signin" className="text-indigo-600 hover:underline">Sign in</Link>
        </div>

        <hr className="my-6" />

        <div className="text-center text-sm text-gray-600 mb-1">Or sign up with</div>
        <div className="flex gap-3">
          <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 hover:bg-gray-50">
            {/* Replace with a Google icon (lucide-react) or SVG */}
            <svg width="16" height="16" viewBox="0 0 48 48" fill="none" aria-hidden>
              <rect width="48" height="48" rx="8" fill="#fff" />
              <path d="M43.6 20.2H42V20H24v8h11.3c-1.1 3-3.6 5.3-6.8 6.7v5.6h11c6.4-5.9 10.1-14.4 10.1-24.3 0-1.6-.1-3.1-.6-4.6z" fill="#4285F4"/>
            </svg>
            Google
          </button>

          <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 hover:bg-gray-50">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z" fill="#333"/>
            </svg>
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
