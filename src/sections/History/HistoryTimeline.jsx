import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./HistoryTimeline.module.css";
import { Factory, FileText, Package, Coffee, Award, Truck, Building, Zap } from "lucide-react";

const milestones = [
  {
    year: "1971",
    title: "Foundation",
    description: "Paper Converters (K) Ltd. established in Mombasa, Kenya with a vision to become East Africa's leading paper manufacturer.",
    icon: Factory,
  },
  {
    year: "1977",
    title: "Initial Growth",
    description: "First envelope-manufacturing machine produced 5,000 envelopes per day. Operations expanded to Nairobi with increased capacity.",
    icon: Building,
  },
  {
    year: "1983",
    title: "Office Files Production",
    description: "Expanded into manufacturing office files, diversifying our product range to serve business needs across Kenya.",
    icon: FileText,
  },
  {
    year: "1991",
    title: "Computer Stationery",
    description: "Began producing continuous computer stationery products, embracing the digital revolution in office automation.",
    icon: Zap,
  },
  {
    year: "1992",
    title: "Label Craft Subsidiary",
    description: "Formation of Label Craft Ltd., manufacturing self-adhesive labels for diverse industrial and retail applications.",
    icon: Package,
  },
  {
    year: "2000s",
    title: "Technological Advancement",
    description: "Major investments in modern machinery and technology, improving quality and production efficiency significantly.",
    icon: Award,
  },
  {
    year: "2010s",
    title: "Regional Expansion",
    description: "Established distribution networks across East Africa, making Robin a recognized household brand in the region.",
    icon: Truck,
  },
  {
    year: "Today",
    title: "Industry Leadership",
    description: "Leading manufacturer in East Africa of paper products and office stationery",
    icon: Coffee,
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
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  const handleMilestoneHover = (milestone) => {
    setHoveredMilestone(milestone);
  };

  const handleMilestoneLeave = () => {
    setHoveredMilestone(null);
  };

  return (
    <section className={styles.timelineSection}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.mainTitle}>
          OUR <span className={styles.handUnderline}>JOURNEY</span>
        </h1>
        <h2 className={styles.subtitle}>Our journey over the past 5 decades</h2>
        <p className={styles.instruction}>
          <span className={styles.desktopOnly}>Hover over a year below to learn more about Papcon's history</span>
          <span className={styles.mobileTabletOnly}>Explore our journey through the years below</span>
        </p>
      </motion.div>

      <div className={styles.timelineContainer}>
        <div className={styles.timelineLine}></div>
        {milestones.map((milestone, i) => {
          const IconComponent = milestone.icon;
          const isTop = i % 2 === 0;
          const isHovered = hoveredMilestone?.year === milestone.year;
          return (
            <motion.div
              key={milestone.year}
              className={`${styles.milestoneItem} ${isTop ? styles.top : styles.bottom} ${isHovered ? styles.hovered : ''}`}
              initial={{ opacity: 0, y: isTop ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => window.innerWidth > 1024 ? handleMilestoneHover(milestone) : null}
              onMouseLeave={() => window.innerWidth > 1024 ? handleMilestoneLeave() : null}
            >
              <div className={styles.iconContainer}>
                <IconComponent className={styles.icon} />
              </div>
              <div className={styles.yearLabel}>{milestone.year}</div>
              <div className={styles.connector}></div>
              
              {/* Content that isvisible on mobile and tablet  */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{milestone.title}</h3>
                <p className={styles.cardDescription}>{milestone.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {hoveredMilestone && (
        <motion.div
          className={styles.detailsSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.detailsContent}>
            <h3 className={styles.detailsTitle}>{hoveredMilestone.title}</h3>
            <p className={styles.detailsDescription}>{hoveredMilestone.description}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
