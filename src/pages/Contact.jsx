import React from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import SEO from "../components/SEO";

export default function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Paper Converters(K) Ltd",
    "description": "Get in touch with Paper Converters(K) Ltd for all your paper product needs. Connect with our team of experts committed to delivering excellence.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Paper Converters(K) Ltd",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Industrial Area on Olesoi Rd",
        "addressLocality": "Mombasa",
        "addressCountry": "Kenya"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+254 700 000 000",
        "email": "info@papconkenya.com",
        "contactType": "customer service"
      }
    }
  };

  return (
    <section className={styles.contactSection}>
      <SEO
        title="Contact Us - Paper Converters(K) Ltd"
        description="Ready to transform your vision into reality? Contact Paper Converters(K) Ltd today. Our team of experts is here to listen, collaborate, and create something extraordinary together."
        keywords="contact Paper Converters, contact Paper Converters K Ltd, contact Papcon Kenya, paper manufacturer contact, Mombasa contact, Kenya paper supplier, manufacturing inquiry, business contact, paper products quote, industrial contact, paper converter contact"
        url="https://papconkenya.magical.africa/contact"
        image="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/location.webp"
        structuredData={structuredData}
      />
   

<div className={styles.headerWrapper}>
  <motion.div
    className={styles.contactHeader}
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className={styles.headerContent}>
      <h1>Let's Connect</h1>
      <p>Ready to transform your vision into reality? We're here to listen, collaborate, and create something extraordinary together. Reach out today.</p>
    </div>
  </motion.div>
</div>
    
      <div className={styles.contactContent}>
      
        <motion.div
          className={styles.contactForm}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form className={styles.formCard}>
            <div className={styles.formGroup}>
              <input type="text" id="name" required />
              <label htmlFor="name">Full Name</label>
              <div className={styles.underline}></div>
            </div>
            <div className={styles.formGroup}>
              <input type="email" id="email" required />
              <label htmlFor="email">Email Address</label>
              <div className={styles.underline}></div>
            </div>
            <div className={styles.formGroup}>
              <textarea id="message" rows="3" required></textarea>
              <label htmlFor="message">Your Message</label>
              <div className={styles.underline}></div>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={styles.submitBtn}
              type="submit"
            >
              <FaPaperPlane className={styles.sendIcon} />
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.infoCard}>
            <h2>Contact Information</h2>
            <p className={styles.infoDescription}>
              Connect with our team of experts who are passionate about delivering excellence. We're committed to bringing your ideas to life with precision and care.
            </p>
            
            <ul className={styles.infoList}>
              <motion.li whileHover={{ x: 5 }}>
                <div className={styles.infoIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Industrial Area on Olesoi Rd, Kenya</p>
                </div>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <div className={styles.infoIcon}>
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+254 700 000 000</p>
                </div>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <div className={styles.infoIcon}>
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>info@papconkenya.com</p>
                </div>
              </motion.li>
            </ul>
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