import React from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import SEO from "../components/SEO";

export default function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Paper Converters (K) Ltd",
    "description": "Get in touch with Paper Converters(K) Ltd for all your paper product needs. Connect with our team of experts committed to delivering excellence.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Paper Converters (K) Ltd",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "09 Olesoi Rd, off Lunga Lunga Rd, Industrial Area",
        "addressLocality": "Nairobi",
        "addressCountry": "Kenya"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+254 733 243157",
          "email": "sales@papconkenya.com",
          "contactType": "sales"
        }
      ]
    }
  };

  return (
    <section className={styles.contactSection}>
      <SEO
        title="Contact Paper Converters (K) Ltd | Envelopes, Labels & Paper Products in Kenya"
        description="Get in touch with Paper Converters (K) Ltd for enquiries on envelopes, labels, thermal rolls, computer stationery, and office files. Visit our Nairobi office, call, or request a quote online."
        keywords="contact Paper Converters, contact Paper Converters K Ltd, contact Papcon Kenya, paper manufacturer contact, Nairobi contact, Kenya paper supplier, manufacturing inquiry, business contact, paper products quote, industrial contact, paper converter contact"
        url="https://papconkenya.magical.africa/contact"
        image="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/contact.jpg"
        structuredData={structuredData}
      />

      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Get in Touch with Paper Converters (K) Ltd
            </motion.h1>
            <motion.div
              className={styles.breadcrumb}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* <span>Home</span> / <span>Contact Us</span> */}
            </motion.div>
          </div>
        </div>
      </div>

      <div className={styles.contactContainer}>
        <motion.div
          className={styles.contactForm}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form className={styles.form}>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <input type="text" name="name" placeholder="Name" required />
              </div>
            </div>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <input type="text" name="company" placeholder="Company" />
              </div>
            </div>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <input type="email" name="email" placeholder="Email" required />
              </div>
            </div>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <input type="tel" name="phone" placeholder="Phone" />
              </div>
            </div>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <select name="product" defaultValue="" className={styles.select} required>
                  <option value="" disabled>Product of Interest</option>
                  <option value="Envelopes">Envelopes</option>
                  <option value="Computer Stationery">Computer Stationery</option>
                  <option value="Thermal Rolls">Thermal Rolls</option>
                  <option value="Labels">Labels</option>
                  <option value="Office Files">Office Files</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <textarea 
                  name="message"
                  placeholder="Message" 
                  rows="5" 
                  required
                ></textarea>
              </div>
            </div>
            
            <motion.button
              type="submit"
              className={styles.submitBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              REQUEST A QUOTE
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2> Get in touch with us</h2>
          <p className={styles.formDescription}>
           Connect with our team of experts who are passionate about delivering excellence. We're committed to bringing your ideas to life with precision.
            </p>
          
          <div className={styles.contactDetails}>
          
            <div className={styles.contactRow}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaPhoneAlt />
                </div>
                <div className={styles.contactText}>
                  <h3>Phone</h3>
                  <p>+254 733 243157</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaEnvelope />
                </div>
                <div className={styles.contactText}>
                  <h3>Email</h3>
                  <p>sales@papconkenya.com</p>
                </div>
              </div>
            </div>

            <div className={styles.contactRow}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaGlobe />
                </div>
                <div className={styles.contactText}>
                  <h3>Website</h3>
                  <p>papconkenya.magical.africa</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.contactText}>
                  <h3>Address</h3>
                  <p>Paper Converters (K) Ltd<br/>09 Olesoi Rd, off Lunga Lunga Rd<br/>Industrial Area, Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.socialSection}>
            <h3>Follow Us On</h3>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.mapContainer}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          title="Papcon Kenya Location"
          src="https://www.google.com/maps?q=Paper%20Converters%20(K)%20Ltd%2009%20Olesoi%20Rd%2C%20off%20Lunga%20Lunga%20Rd%2C%20Nairobi&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
}