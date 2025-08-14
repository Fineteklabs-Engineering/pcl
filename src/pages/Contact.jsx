import React from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section className={styles.contactSection}>
   

<div className={styles.headerWrapper}>
  <motion.div
    className={styles.contactHeader}
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className={styles.headerContent}>
      <h1>Let's Connect</h1>
      <p>Have a question or want to discuss a project? Drop us a message below.</p>
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
              We're available to answer your questions and help with your needs.
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