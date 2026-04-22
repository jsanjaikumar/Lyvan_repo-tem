import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import lyvanLogo from "../../../assets/img/lyvan/lyvan-logo.jpeg";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerInnerRef = useRef(null);
  const location = useLocation();
  const canUseHover =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  useEffect(() => {
    setNavOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navOpen && !servicesOpen) return;

    const handlePointerDown = (event) => {
      if (!headerInnerRef.current?.contains(event.target)) {
        setNavOpen(false);
        setServicesOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setNavOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [navOpen, servicesOpen]);

  const toggleNavigation = () => {
    setNavOpen(!navOpen);
    if (!navOpen) setServicesOpen(false);
  };

  return (
    <header
      className={`app-header ${isScrolled ? "app-header--scrolled" : ""}`}
    >
      <div className="app-header__inner" ref={headerInnerRef}>
        <Link to="/" className="app-header__brand">
          <img src={lyvanLogo} alt="LYVAN" />
        </Link>

        <nav
          className={`app-header__nav ${navOpen ? "app-header__nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          <ul className="app-header__menu">
            {location.pathname !== "/" && (
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            )}
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li
              className={`dropdown ${servicesOpen ? "open" : ""}`}
              onMouseEnter={() => {
                if (canUseHover) setServicesOpen(true);
              }}
              onMouseLeave={() => {
                if (canUseHover) setServicesOpen(false);
              }}
            >
              <button
                type="button"
                className="app-header__dropdown"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-controls="services-dropdown-menu"
              >
                Services{" "}
                <i
                  className="bi bi-chevron-down ms-1"
                  style={{ fontSize: "0.8rem" }}
                />
              </button>
              <ul
                className="app-header__dropdown-menu"
                id="services-dropdown-menu"
              >
                <li>
                  <NavLink to="/service">Localization</NavLink>
                </li>
                <li>
                  <NavLink to="/voiceprocess">Voice Process</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className="app-header__actions">
          <Link to="/contact" className="btn btn-primary app-header__cta">
            24/7 Support
          </Link>
        </div>

        <button
          type="button"
          className="app-header__toggle"
          onClick={toggleNavigation}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${navOpen ? "bi-x" : "bi-list"}`} />
        </button>
      </div>
    </header>
  );
}
