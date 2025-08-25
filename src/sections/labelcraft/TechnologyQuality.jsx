import React from "react";
import styles from "./TechnologyQuality.module.css";

const points = [
  "High-resolution, multi-colour printing",
  "Accurate registration and consistent quality across runs",
  "Short and long-run capability",
  "In-house die-cutting and finishing for speed and flexibility",
];

export default function TechnologyQuality() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}><span className={styles.handUnderline}>Technology</span> & Quality</h2>
        <p className={styles.lead}>At Label Craft, we invest in modern flexographic presses, including our Mark Andy 4120 and Weigang ZBS-320, enabling us to deliver:</p>

        <ol className={styles.timeline}>
          {points.map((text, idx) => (
            <li key={text} className={styles.step}>
              <span className={styles.num}>{idx + 1}</span>
              <div className={styles.copy}>{text}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

