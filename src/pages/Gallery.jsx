import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Gallery.module.css";

const facilities = [
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities1.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities2.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities3.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities4.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities5.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities6.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities7.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities8.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities9.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities10.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities11.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities12.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities13.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities14.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities15.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities16.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities17.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities18.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities19.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities20.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities21.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities22.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities23.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities24.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities25.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities26.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities27.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities28.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities29.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities30.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/facilities31.webp"
];

const products = [
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products1.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products2.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products3.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products4.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products5.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products6.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products7.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products8.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products9.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products10.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products11.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products12.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products13.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products14.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products15.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products16.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products17.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products18.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products19.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products20.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products21.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products22.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products23.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products24.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products25.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products26.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products27.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products28.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products29.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products30.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products31.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products32.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products33.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products34.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products35.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products36.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products37.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products38.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products39.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products40.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products41.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products42.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products43.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products44.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products45.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products46.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products47.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products48.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products49.webp",
  "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/products50.webp"
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("facilities");
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = activeTab === "facilities" ? facilities : products;

  return (
    <div className={styles.galleryPage}>
     
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Our <span>Gallery</span>
        </motion.h1>
        <p>
          Take a glimpse into our world.Showcasing our{" "}
          <strong>facilities</strong> where innovation thrives and a curated
          selection of <strong>premium products</strong> crafted with care.
        </p>
      </section>

      {/* Tabs */}
      <div className={styles.tabs}>
        {["facilities", "products"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.tabButton} ${
              activeTab === tab ? styles.active : ""
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div
        className={styles.masonryGrid}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            className={styles.masonryItem}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setLightboxImage(src)}
          >
            <img src={src} alt={`Gallery ${i}`} loading="lazy" />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className={styles.lightbox} onClick={() => setLightboxImage(null)}>
          <motion.img
            src={lightboxImage}
            alt="Expanded view"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}
    </div>
  );
}
