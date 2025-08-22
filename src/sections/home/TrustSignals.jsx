import React from "react";
import styles from "./TrustSignals.module.css";

const clients = [
  { name: "Absa Bank", logo: "https://placehold.co/140x50?text=Absa" },
  { name: "Equity Bank", logo: "https://placehold.co/140x50?text=Equity" },
  { name: "Chandarana", logo: "https://placehold.co/140x50?text=Chandarana" },
  { name: "Crown Paints", logo: "https://placehold.co/140x50?text=Crown" },
  { name: "Ideal Ceramics", logo: "https://placehold.co/140x50?text=Ideal" },
  { name: "Bidco", logo: "https://placehold.co/140x50?text=Bidco" },
];

export default function TrustSignals() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Proudly serving Kenya’s top brands and businesses</h2>
      <div className={styles.row}>
        {clients.map((c) => (
          <div key={c.name} className={styles.item}>
            <img src={c.logo} alt={`${c.name} logo`} />
          </div>
        ))}
      </div>
    </section>
  );
}

