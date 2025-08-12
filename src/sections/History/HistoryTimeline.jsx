import React from "react";
import { motion } from "framer-motion";
import styles from "./HistoryTimeline.module.css";

const milestones = [
  {
    year: "1977",
    title: "Initial Growth",
    description:
      "The first envelope-manufacturing machine produced 5,000 envelopes per day with a team of 6. In 1977, operations expanded to Nairobi with increased production capacity.",
  },
  {
    year: "1983 - 1991",
    title: "Expansion into Office Files & Stationery",
    description:
      "The company expanded into manufacturing office files in 1983 and began producing continuous computer stationery products in 1991.",
  },
  {
    year: "1992",
    title: "Label Craft Subsidiary",
    description:
      "Formation of Label Craft Ltd., manufacturing self-adhesive labels for diverse industrial and retail uses.",
  },
  {
    year: "Since inception",
    title: "Innovation & Brand Growth",
    description:
      "Continued investment in technology and equipment, expanding divisions, and establishing Robin as a household brand across East Africa.",
  },
];


const leftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function HistoryTimeline() {
  return (
    <section className={styles.timelineSection}>
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Story So Far
      </motion.h1>

      <div className={styles.timelineContainer}>
        {milestones.map((milestone, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={milestone.year}
              className={`${styles.milestoneItem} ${
                isLeft ? styles.left : styles.right
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={isLeft ? leftVariants : rightVariants}
            >
              <div className={styles.content}>
                <h3 className={styles.year}>{milestone.year}</h3>
                <h2 className={styles.title}>{milestone.title}</h2>
                <p className={styles.description}>{milestone.description}</p>
              </div>
              <div className={styles.circle} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
