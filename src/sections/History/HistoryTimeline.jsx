import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./HistoryTimeline.module.css";
import { Factory, FileText, Package, Coffee, Award, Truck, Building, Zap } from "lucide-react";

const milestones = [
  {
    year: "1971",
    title: "Company Founded in Nairobi",
    description: "Established as a local envelope manufacturer with a focus on quality and reliability.",
    icon: Factory,
  },
  {
    year: "1977",
    title: "Operations Move to Nairobi",
    description: "Expansion of operations and increased capacity with the move to Nairobi.",
    icon: Building,
  },
  {
    year: "1983",
    title: "Office File Manufacturing",
    description: "Expanded into office file manufacturing to serve Kenya’s growing business needs.",
    icon: FileText,
  },
  {
    year: "1991",
    title: "Computer Stationery Division",
    description: "Added production of continuous computer stationery to our portfolio.",
    icon: Zap,
  },
  {
    year: "1993",
    title: "Launch of Label Craft",
    description: "Introduced Label Craft, our specialist self-adhesive label printing division.",
    icon: Package,
  },
  {
    year: "2005",
    title: "Thermal Roll Production",
    description: "Expanded into the production of thermal rolls for POS, ETR, and ATMs.",
    icon: Truck,
  },
  {
    year: "2005–Present",
    title: "Continuous Investment",
    description: "Ongoing investment in modern machinery and technology to enhance quality, range, and efficiency.",
    icon: Award,
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
