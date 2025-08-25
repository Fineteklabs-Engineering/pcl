import React from "react";
import { motion } from "framer-motion";
import styles from "./LabelCraftCTA.module.css";

export default function LabelCraftCTA() {
  return (
    <section className={styles.contactSnippet}>
      <motion.div
        className={styles.innerContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className={styles.heading}>
          Ready to bring your packaging to life with premium labels?
        </h2>
        <p className={styles.text}>
          Experience the difference of locally manufactured, high-quality labels tailored to your brand and compliance needs. 
          We've been serving Kenya's leading industries for over 30 years with unwavering commitment to excellence.
        </p>
        <div className={styles.buttonContainer}>
          <a href="/contact" className={styles.ctaButton}>
            Request a Quote
          </a>
          <a href="/contact" className={styles.secondaryButton}>
            Contact Label Craft
          </a>
        </div>
      </motion.div>
    </section>
  );
}

