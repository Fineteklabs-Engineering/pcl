import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/herohome.png";
  }, []);

  return (
    <section className={styles.hero} aria-label="Hero section">
      <div className={styles.left}>
        <h1 className={styles.heading}>
          Quality <span className={styles.handUnderline}>Paper & Labels</span> — Made in Kenya. Trusted Since 1971.
        </h1>

        <div className={styles.description} aria-label="Value propositions">
        Locally manufactured with trusted quality and flexible solutions for every business.
       
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <Link to="/products" className={styles.cta} aria-label="View our products">
            View Our Products
          </Link>
          <Link to="/contact" className={styles.cta} aria-label="Request a quote">
            Request a Quote
          </Link>
        </div>
        
        
      </div>

      <div className={styles.right}>
        <img
          src="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/herohome.png"
          alt="Papcon Kenya manufacturing facility and paper products showcase"
          className={styles.heroImage}
          loading="eager"
          style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className={styles.imagePlaceholder} aria-hidden="true">
            Loading...
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
