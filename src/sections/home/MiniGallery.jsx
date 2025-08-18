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

 
  const getInitialAnimation = (index) => {
    // Simple staggered animation that works well for both 2 and 3 column layouts
    const animations = [
      { opacity: 0, x: -30, y: 20 },
      { opacity: 0, x: 30, y: 20 },
      { opacity: 0, y: 30 },
      { opacity: 0, x: -30, y: 20 },
      { opacity: 0, x: 30, y: 20 },
      { opacity: 0, y: 30 }
    ];
    return animations[index % animations.length] || { opacity: 0, y: 20 };
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
  <span className={styles.headingSpan}>Our</span> Gallery
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
         
        </Link>
      </motion.div>
    </motion.section>
  );
}
