
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
        <h1 className={styles.title}>Our Story: Proudly Crafting Paper Products Since 1971</h1>
        <p className={`${styles.subtitle} ${animate ? styles.subtitleAnimate : ""}`}>
          From our beginnings in Nairobi to our present base in Nairobi, we’ve grown into a trusted partner for businesses across East Africa.
        </p>
      </div>
      <div className={styles.scrollIndicator}>
        <span className={styles.arrow} />
      </div>
    </section>
  );
}
