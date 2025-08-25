import React, { useEffect, useState } from "react";
import styles from "./LabelCraftHero.module.css";

export default function LabelCraftHero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/crafthero.png";
  }, []);

  return (
    <section className={styles.hero} aria-label="Label Craft hero section">
      <div className={styles.left}>
        <h1 className={styles.heading}>
          Label Craft: Your Partner in <span className={styles.handUnderline}>Premium Label Printing</span>
        </h1>
        <div className={styles.description}>
          Label Craft is the specialist label-printing division of Paper Converters (K) Ltd. Since 1993, we’ve built a reputation for producing premium-quality self-adhesive labels tailored to the needs of East Africa’s top brands. Using advanced flexographic printing technology and in-house finishing, we deliver labels that enhance shelf appeal, meet compliance standards, and stand up to real-world handling.
        </div>
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <a href="/contact" className={styles.cta} aria-label="Request a quote">
            Request a Quote
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <img
          src="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/crafthero.png"
          alt="Label Craft premium label printing mockup"
          className={styles.heroImage}
          loading="eager"
          style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className={styles.imagePlaceholder} aria-hidden="true">Loading...</div>
        )}
      </div>
    </section>
  );
}

