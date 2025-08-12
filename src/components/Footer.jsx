import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

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
            <li><a href="#history">History</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

       
        <div className={styles.footerRight}>
          <h4>Contact Us</h4>
          <p>Industrial Area on Olesoi Rd, Kenya</p>
          <p>Phone: +254 700 000 000</p>
          <p>Email: info@papconkenya.com</p>
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
