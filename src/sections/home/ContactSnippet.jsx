
import React from "react";
import { motion } from "framer-motion";
import styles from "./ContactSnippet.module.css";

export default function ContactSnippet() {
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
          Turning Paper into Possibilities 
        </h2>
        <p className={styles.text}>
          From sturdy counter books to crisp envelopes and vibrant school
          stationery.Papcon Kenya delivers quality printing and manufacturing
          that speaks for itself.  
          Let’s bring your brand, classroom, or office to life.
        </p>
        <a href="/contact" className={styles.ctaButton}>
          Let’s Work Together
        </a>
      </motion.div>
    </section>
  );
}
