import React from "react";
import styles from "./ProductRange.module.css";

const products = [
  {
    title: "Paper Labels",
    desc: "Cost-effective labels for retail, logistics, and general use (semi-gloss, matt, and thermal).",
    img: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/paper-removebg-preview.png",
  },
  {
    title: "Polypropylene (PP) Labels",
    desc: "Durable, water-resistant labels ideal for beverages, cosmetics, and industrial products.",
    img: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/pp-removebg-preview.png",
  },
  {
    title: "Custom Die-Cut Labels",
    desc: "Precision-shaped labels in any size or format, designed to fit unique packaging.",
    img: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/customdiecut-removebg-preview.png",
  },
  {
    title: "Promotional Stickers",
    desc: "High-visibility stickers for marketing campaigns and events.",
    img: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/promotional-removebg-preview.png",
  },
];

export default function ProductRange() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Our <span className={styles.handUnderline}>Product Range</span></h2>
        <div className={styles.grid}>
          {products.map((p) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.icon}>
                <img src={p.img} alt={p.title} className={styles.thumb} loading="lazy" />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

