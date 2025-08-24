import React from "react";
import { motion } from "framer-motion";
import styles from "./IndustriesCTA.module.css";

export default function IndustriesCTA() {
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
          Across Every Sector, Our Promise Remains the Same
        </h2>
        <p className={styles.text}>
          Locally manufactured, high-quality, and reliable paper products tailored to your business needs. 
          We've been serving Kenya's industries for over 50 years with unwavering commitment to excellence.
        </p>
        <div className={styles.buttonContainer}>
          <a href="/contact" className={styles.ctaButton}>
            Request a Quote
          </a>
          <a href="/products" className={styles.secondaryButton}>
            Explore Our Products
          </a>
        </div>
      </motion.div>
    </section>
  );
} 