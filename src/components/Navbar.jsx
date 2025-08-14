import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/global.css";





export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/history", label: "History" },
    { path: "/facilities", label: "Facilities" },
    // { path: "/core-businesses", label: "Core Businesses" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolledBg : ""}`}>
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
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.navLink} ${
                        scrolled ? styles.scrolled : ""
                      }`
                    : `${styles.navLink} ${scrolled ? styles.scrolled : ""}`
                }
              >
                {link.label}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className={styles.hamburger}
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
            {navLinks.map((link, i) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
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
