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
        "streetAddress": "Industrial Area on Olesoi Rd",
        "addressLocality": "Nairobi",
        "addressCountry": "Kenya"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+254 700 000 000",
        "email": "sales@papconkenya.com",
        "contactType": "customer service"
      }
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
                <input type="text" placeholder="Your Name" required />
              </div>
            </div>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Subject" required />
              </div>
            </div>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <textarea 
                  placeholder="Your Message" 
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
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Get In Touch</h2>
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
                  <h3>Call Us</h3>
                  <p>+254 202 695 636</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaEnvelope />
                </div>
                <div className={styles.contactText}>
                  <h3>Email Us</h3>
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
                  <p>Nairobi, Industrial Area, off Lunga Lunga Rd</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7726969401524!2d36.85961207638481!3d-1.3117715356574393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1183e69f10a9%3A0x8c53c55258e482fd!2sOlesoi%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1755154970525!5m2!1sen!2ske"
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