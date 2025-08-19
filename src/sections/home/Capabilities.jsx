
import React, { useState, useEffect } from "react";
import styles from "./Capabilities.module.css";
import { Mail, FolderOpen, Package, FileText } from "lucide-react";

const capabilitiesData = [
  { number: 400000, label: "Envelopes", icon: Mail },
  { number: 5000, label: "Office Files", icon: FolderOpen },
  { number: 2000, label: "Cartons of Computer Stationery", icon: Package },
  { number: 1200, label: "Reams of Ruled Paper", icon: FileText },
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
    <section className={styles.capabilities}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Our <span className={styles.handUnderline}>Capabilities</span></h1>
        <div className={styles.container}>
          {capabilitiesData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className={styles.capability}>
                <IconComponent className={styles.icon} />
                <h2>{counts[index].toLocaleString()}+</h2>
                <p>{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
