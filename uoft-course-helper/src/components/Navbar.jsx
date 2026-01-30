import { Link, useLocation } from "react-router-dom";

function NavItem({ to, children }) {
  const { pathname } = useLocation();
  const active = pathname === to;

  return (
    <Link className={`nav-link ${active ? "nav-active" : ""}`} to={to}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <div className="nav-bar">
      <nav className="nav">
        <a
          className="nav-link"
          href="https://www.utoronto.ca/"
          target="_blank"
          rel="noreferrer"
        >
          About UOFT
        </a>
        <NavItem to="/course">Course</NavItem>
        <NavItem to="/comment">Comment</NavItem>
      </nav>
      <Link className="nav-link nav-link-cta nav-login" to="/login">
        <span className="nav-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" focusable="false">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" />
          </svg>
        </span>
        Login
      </Link>
    </div>
  );
}

