import React from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  const scrollToHistoryPreview = () => {
    const element = document.getElementById('history-preview');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className={styles.hero}>
      <motion.video
        className={styles.videoBg}
        src="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <div className={styles.overlay}></div>

      <motion.div
        className={styles.heroContent}
        variants={container}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.h1 className={styles.heading} variants={item}>
          A Leader in the Manufacturing of
          <span> Paper Products in East Africa</span>
        </motion.h1>
        <motion.p className={styles.subheading} variants={item}>
          Learn our story from our establishment in 1971 in Mombasa, Kenya,
          over the decades to become a household name not only in Kenya, but
          the East African Region.
        </motion.p>
        <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className={styles.ctaButton}
  onClick={scrollToHistoryPreview}
>
  Learn More
</motion.button>

      </motion.div>
    </section>
  );
}
