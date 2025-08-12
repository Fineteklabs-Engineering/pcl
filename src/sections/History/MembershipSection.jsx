import React from "react";
import styles from "./MembershipSection.module.css";

const logos = [
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/cpak.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/kam.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/fke.webp",
];

// Duplicate logos array for seamless loop
const logosLoop = [...logos, ...logos];

export default function MembershipSection() {
  return (
    <section className={styles.membershipSection}>
      <h2 className={styles.heading}>We are proud members of</h2>
      <div className={styles.conveyorWrapper}>
        <div className={styles.conveyorBelt}>
          {logosLoop.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Membership logo ${i + 1}`}
              className={styles.logo}
              draggable="false"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
