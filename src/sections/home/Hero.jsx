import React, { useState, useEffect } from "react";
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
        <span className={styles.tagline} aria-label="Company tagline">Your trusted partner</span>
        <h1 className={styles.heading}>
          A Leader in the <span className={styles.handUnderline}>manufacture</span> of paper products in East Africa
        </h1>

        <p className={styles.description}>
          Learn our story from our establishment in 1971 in Mombasa, Kenya, over the decades to become a household name not only in Kenya, but the East African Region.
        </p>
        
        <button 
          className={styles.cta}
          aria-label="Get started with Papcon Kenya"
          type="button"
        >
          Get Started
        </button>
        
        <div className={styles.stars} role="img" aria-label="4.5 out of 5 stars rating">
          <span className={styles.star} aria-hidden="true">★</span>
          <span className={styles.star} aria-hidden="true">★</span>
          <span className={styles.star} aria-hidden="true">★</span>
          <span className={styles.star} aria-hidden="true">★</span>
          <span className={styles.halfStar} aria-hidden="true">★</span>
        </div>
        <p className={styles.ratingText}>Rated 4.5/5 by 2,000+ happy customers</p>
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
