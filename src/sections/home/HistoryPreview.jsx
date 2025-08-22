import React from "react";
import styles from "./HistoryPreview.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
  hidden: { opacity: 0, y: 40 },
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

export default function HistoryPreview() {
  return (
    <motion.section
      id="history-preview"
      className={styles.historyPreview}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className={styles.historyPreviewContent}>
        <motion.h2 className={styles.heading} variants={item}>
          Our <span className={styles.handUnderline}>Story</span>
        </motion.h2>

        <motion.p className={styles.text} variants={item}>
          For over 50 years, Paper Converters (K) Ltd has powered East Africa’s paper industry. From thermal rolls to premium self-adhesive labels under our Label Craft brand, and Robin stationery trusted in offices nationwide, we remain a partner of choice for retail, manufacturing, and financial services.
        </motion.p>

        <motion.div variants={item}>
          <Link to="/history" className={styles.readMore}>
            Read Our Story
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}