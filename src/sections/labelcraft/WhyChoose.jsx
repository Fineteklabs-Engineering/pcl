import React from "react";
import styles from "./WhyChoose.module.css";
import { Leaf, Shield, Zap, CheckCircle } from "lucide-react";

const features = [
  {
    icon: <Leaf size={32} />,
    title: "Custom Solutions",
    description: "Every label is designed to match your packaging, branding, and compliance needs."
  },
  {
    icon: <Shield size={32} />,
    title: "Proven Experience", 
    description: "Serving Kenya's retail and FMCG leaders for over 30 years."
  },
  {
    icon: <Zap size={32} />,
    title: "Fast Turnaround",
    description: "Local production means quicker lead times and reliable supply."
  },
  {
    icon: <CheckCircle size={32} />,
    title: "Quality You Can Trust",
    description: "Advanced flexographic printing with strict quality assurance."
  }
];

export default function WhyChoose() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Why Choose <span className={styles.handUnderline}>Label Craft?</span></h2>
        <p className={styles.subtitle}>
          We partner with businesses across Kenya's leading sectors to supply reliable, 
          branded, and compliant labeling solutions that drive success.
        </p>
        
        <div className={styles.featuresContainer}>
          <div className={styles.dottedLine}></div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.iconWrapper}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

