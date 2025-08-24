import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/global.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [staticActive, setStaticActive] = useState("");

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/history", label: "Our Story" },
    { path: "/products", label: "Products" },
    { path: "/industries", label: "Industries" },
    { path: "/label-craft", label: "Label Craft" },
    // { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  const isHomeExact = () => window.location.pathname === "/" && !window.location.hash;

  const isStaticLink = (label, path) => label !== "Home" && path === "/";

  const computeClassName = (label, path, isActive) => {
    
    if (staticActive) {
      if (isStaticLink(label, path)) {
        return staticActive === label ? `${styles.active} ${styles.navLink}` : styles.navLink;
      }
      return styles.navLink;
    }

    if (isStaticLink(label, path)) return styles.navLink;
    const exactActive = path === "/" ? isHomeExact() : isActive;
    return exactActive ? `${styles.active} ${styles.navLink}` : styles.navLink;
  };

  const handleClick = (e, link) => {
    if (isStaticLink(link.label, link.path)) {
      e.preventDefault();
      setStaticActive(link.label);
    } else {
      setStaticActive("");
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <img
            src="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/footer-logo.png"
            alt="Papcon Kenya Logo"
            className={styles.logoImg}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className={styles.navLinks}>
          {navLinks.map((link, i) => (
            <motion.li
              key={link.label + i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <NavLink
                to={link.path}
                onClick={(e) => handleClick(e, link)}
                className={({ isActive }) => computeClassName(link.label, link.path, isActive)}
              >
                {link.label}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div />
          <div />
          <div />
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.closeButton}>
              <button
                className={styles.closeIcon}
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <span>×</span>
              </button>
            </div>

            {navLinks.map((link, i) => (
              <NavLink
                key={link.label + i}
                to={link.path}
                onClick={(e) => {
                  if (isStaticLink(link.label, link.path)) {
                    e.preventDefault();
                    setStaticActive(link.label);
                  } else {
                    setStaticActive("");
                  }
                  setMenuOpen(false);
                }}
                className={({ isActive }) => {
                 
                  if (staticActive) {
                    if (isStaticLink(link.label, link.path)) {
                      return staticActive === link.label
                        ? `${styles.active} ${styles.mobileLink}`
                        : styles.mobileLink;
                    }
                    return styles.mobileLink;
                  }
                  if (isStaticLink(link.label, link.path)) return styles.mobileLink;
                  return (link.path === "/" ? isHomeExact() : isActive)
                    ? `${styles.active} ${styles.mobileLink}`
                    : styles.mobileLink;
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
