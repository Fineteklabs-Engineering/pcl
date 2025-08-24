import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductsHero.module.css";

const ProductsHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products-hero.jpg";
  }, []);

  return (
    <section className={styles.hero} aria-label="Products hero section">
      <div className={styles.left}>
        <div className={styles.tagline}>COMPREHENSIVE SOLUTIONS</div>
        
        <h1 className={styles.heading}>
          Comprehensive <span className={styles.handUnderline}>Paper & Stationery</span> Product Range
        </h1>

        <div className={styles.description} aria-label="Product overview">
          At Paper Converters (K) Ltd, we offer a wide portfolio of paper and stationery solutions for businesses across East Africa. From everyday office essentials to specialized commercial products, our manufacturing is backed by 50+ years of expertise, continuous investment in modern equipment, and a commitment to reliability, flexibility, and quality.
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <Link to="/contact" className={styles.cta} aria-label="Request a quote">
            Get a Quote
          </Link>
        </div>
      </div>

      <div className={styles.right}>
        <img
          src="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/productshero-removebg-preview.png"
          alt="Paper Converters Kenya product range showcase including envelopes, stationery, labels and thermal rolls"
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

export default ProductsHero; 