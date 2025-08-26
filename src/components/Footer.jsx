import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        <div className={styles.footerLeft}>
          <img
            src="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/footer-logo.png"
            alt="Papcon Kenya Logo"
            className={styles.logo}
          />
          <p>
            Papcon Kenya Ltd - Your trusted partner in paper products and 
            sustainable packaging solutions.
          </p>
        </div>

        
        <div className={styles.footerCenter}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/history">Our Story</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/label-craft">Label Craft</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        
        <div className={styles.footerRight}>
          <h4>Contact</h4>
          <p>Paper Converters (K) Ltd</p>
          <p>09 Olesoi Rd, off Lunga Lunga Rd</p>
          <p>Industrial Area, Nairobi, Kenya</p>
          <p>Phone: +254 733 243157</p>
          <p>Email: sales@papconkenya.com</p>
          <div className={styles.socialIcons}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      
      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Papcon Kenya Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
