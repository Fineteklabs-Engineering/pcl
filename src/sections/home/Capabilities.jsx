
import React, { useState, useEffect } from "react";
import styles from "./Capabilities.module.css";

const capabilitiesData = [
  { number: 400000, label: "Envelopes" },
  { number: 5000, label: "Office Files" },
  { number: 2000, label: "Cartons of Computer Stationery" },
  { number: 1200, label: "Reams of Ruled Paper" },
];

export default function Capabilities() {
  const [counts, setCounts] = useState(capabilitiesData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          capabilitiesData.forEach((item, index) => {
            let start = 0;
            const end = item.number;
            const duration = 2000; // ms
            const stepTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
              start += Math.ceil(end / 100);
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const updated = [...prev];
                updated[index] = start;
                return updated;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector(`.${styles.capabilities}`);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={styles.capabilities}
      style={{
        backgroundImage:
          "url('https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/capabilities.webp')",
      }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.title}>Our <span>Capabilities</span></h1>
        <div className={styles.container}>
          {capabilitiesData.map((item, index) => (
            <div key={index} className={styles.capability}>
              <h2>{counts[index].toLocaleString()}+</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
