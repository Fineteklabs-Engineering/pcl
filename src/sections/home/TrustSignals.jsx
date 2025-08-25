import React from "react";
import styles from "./TrustSignals.module.css";
import { motion } from "framer-motion";

const clients = [
  { name: "Absa", logo: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/absa.svg" },
  { name: "Brookside", logo: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/brookside-removebg-preview.png" },
  { name: "Chandarana", logo: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/chandaranasup-removebg-preview.png" },
  { name: "Crown Paints", logo: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/crown-removebg-preview.png" },
  { name: "Equity", logo: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/equity-removebg-preview.png" },
  { name: "Ideal Ceramics", logo: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/idealceramics-removebg-preview.png" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" }
  }
};

const itemVariants = (idx) => ({
  hidden: { opacity: 0, x: idx % 2 === 0 ? -120 : 120 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
});

export default function TrustSignals() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Trusted by leading <span className={styles.handUnderline}>Kenyan brands</span></h2>
      <motion.div
        className={styles.row}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {clients.map((c, idx) => (
          <motion.div
            key={c.name}
            className={styles.item}
            variants={itemVariants(idx)}
          >
            <img src={c.logo} alt={`${c.name} logo`} loading="lazy" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

