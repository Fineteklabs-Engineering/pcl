// src/sections/HistoryHero.jsx
import React, { useEffect, useState } from "react";
import styles from "./HistoryHero.module.css";

export default function HistoryHero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span
            className={`${styles.slideLeft} ${animate ? styles.animate : ""}`}
          >
            COMPANY
          </span>{" "}
          <span
            className={`${styles.slideRight} ${animate ? styles.animate : ""}`}
          >
            HISTORY
          </span>
        </h1>
        <p className={`${styles.subtitle} ${animate ? styles.subtitleAnimate : ""}`}>
          Established in 1971 in Mombasa, Kenya, Paper Converters (K) Ltd. has
          grown vastly over the decades to become one of the leading manufacturers
          of paper products in the East African Region.
        </p>
      </div>
      <div className={styles.scrollIndicator}>
        <span className={styles.arrow} />
      </div>
    </section>
  );
}
