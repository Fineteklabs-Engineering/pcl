import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./MiniGallery.module.css";

const images = [
  {
    src: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities1.webp",
    alt: "Facility 1",
    category: "facilities"
  },
  {
    src: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products1.webp",
    alt: "Product 1",
    category: "products"
  },
  {
    src: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities2.webp",
    alt: "Facility 2",
    category: "facilities"
  },
  {
    src: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products2.webp",
    alt: "Product 2",
    category: "products"
  },
  {
    src: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities3.webp",
    alt: "Facility 3",
    category: "facilities"
  },
  {
    src: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products3.webp",
    alt: "Product 3",
    category: "products"
  }
];

export default function MiniGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages = activeFilter === "all" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  // Helper function for animation initial state based on column
  const getInitialAnimation = (index) => {
    const col = index % 3;
    if (col === 0) {
      // left column: slide from left
      return { opacity: 0, x: -50 };
    } else if (col === 1) {
      // middle column: slide from bottom
      return { opacity: 0, y: 50 };
    } else {
      // right column: slide from right
      return { opacity: 0, x: 50 };
    }
  };

  return (
    <motion.section 
      className={styles.galleryPreview}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className={styles.headingDecor} aria-hidden="true">✻</span>
        Our Gallery
        <span className={styles.headingDecor} aria-hidden="true">✻</span>
      </motion.h2>
      
      <motion.div 
        className={styles.filterButtons}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {['all', 'facilities', 'products'].map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`${styles.filterButton} ${activeFilter === filter ? styles.active : ''}`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </motion.div>

      <motion.div 
        className={styles.gridContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, staggerChildren: 0.1, when: "beforeChildren" }}
      >
        {filteredImages.map((image, index) => (
          <motion.div
            key={index}
            className={styles.gridItem}
            initial={getInitialAnimation(index)}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              loading="lazy" 
              className={styles.image}
              onError={(e) => {
                console.error('Error loading image:', image.src);
                e.target.style.display = 'none';
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link to="/gallery" className={styles.button}>
          <span>Explore Full Gallery</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </motion.div>
    </motion.section>
  );
}
