import { useState } from "react";

export default function Login() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    identifier: "",
    password: "",
    confirmPassword: "",
    email: "",
    code: "",
  });

  const update = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">
          {mode === "login" ? "Log in" : "Register"}
        </h1>
        <p className="auth-subtitle">
          {mode === "login"
            ? "Use username or email with your password."
            : "Create your account and verify your email."}
        </p>

        <form className="auth-form" onSubmit={submit}>
          {mode === "login" ? (
            <>
              <label className="auth-label">
                Username or Email
                <input
                  className="auth-input"
                  value={form.identifier}
                  onChange={update("identifier")}
                  placeholder="e.g. jdoe or jdoe@mail.com"
                />
              </label>
              <label className="auth-label">
                Password
                <input
                  className="auth-input"
                  type="password"
                  value={form.password}
                  onChange={update("password")}
                  placeholder="Enter your password"
                />
              </label>
            </>
          ) : (
            <>
              <label className="auth-label">
                Username
                <input
                  className="auth-input"
                  value={form.identifier}
                  onChange={update("identifier")}
                  placeholder="Choose a username"
                />
              </label>
              <label className="auth-label">
                Password
                <input
                  className="auth-input"
                  type="password"
                  value={form.password}
                  onChange={update("password")}
                  placeholder="Create a password"
                />
              </label>
              <label className="auth-label">
                Confirm Password
                <input
                  className="auth-input"
                  type="password"
                  value={form.confirmPassword}
                  onChange={update("confirmPassword")}
                  placeholder="Repeat your password"
                />
              </label>
              <label className="auth-label">
                Email
                <input
                  className="auth-input"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="name@example.com"
                />
              </label>
              <div className="auth-row">
                <label className="auth-label auth-grow">
                  Verification Code
                  <input
                    className="auth-input"
                    value={form.code}
                    onChange={update("code")}
                    placeholder="Enter email code"
                  />
                </label>
                <button className="auth-btn auth-btn-ghost" type="button">
                  Send Code
                </button>
              </div>
            </>
          )}

          <button className="auth-btn auth-btn-primary" type="submit">
            {mode === "login" ? "Log in" : "Register"}
          </button>
        </form>

        <div className="auth-footer">
          {mode === "login" ? (
            <>
              <span>Don&apos;t have an account?</span>
              <button
                className="auth-link"
                type="button"
                onClick={() => setMode("register")}
              >
                Register now
              </button>
            </>
          ) : (
            <>
              <span>Already have an account?</span>
              <button
                className="auth-link"
                type="button"
                onClick={() => setMode("login")}
              >
                Go to login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
