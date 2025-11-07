// Signin.jsx
import React, { useState } from "react";

export default function Signin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  function validate(values) {
    const e = {};
    if (!values.email) e.email = "Email is required.";
    else if (!/\\S+@\\S+\\.\\S+/.test(values.email)) e.email = "Enter a valid email.";
    if (!values.password) e.password = "Password is required.";
    return e;
  }

  async function fakeSignin(payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (payload.email === "test@example.com" && payload.password === "Password123") {
          resolve({ ok: true, user: { id: "u_1", email: payload.email } });
        } else {
          reject({ message: "Invalid email or password." });
        }
      }, 800);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError(null);
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    setLoading(true);
    try {
      const res = await fakeSignin(form);
      alert(`Welcome back, ${res.user.email}!`);
      setForm({ email: "", password: "" });
    } catch (err) {
      setServerError(err.message || "Signin failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-1">Sign in to your account</h2>
        <p className="text-sm text-gray-500 mb-6">Welcome back! Please enter your details.</p>

        <form onSubmit={handleSubmit} noValidate>
          <label className="block mb-3">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
              placeholder="you@company.com"
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </label>

          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <div className="mt-1 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))}
                className={`block w-full rounded-lg border px-3 py-2 pr-24 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                  errors.password ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute inset-y-0 right-0 px-3 text-sm text-gray-600 hover:text-gray-800"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password}</p>}
          </label>

          {serverError && <p className="text-sm text-red-600 mb-3">{serverError}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading && (
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            <span>{loading ? "Signing in..." : "Sign in"}</span>
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
