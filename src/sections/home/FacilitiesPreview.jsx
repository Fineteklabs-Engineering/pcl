// FacilitiesPreview.jsx
import React from "react";
import styles from "./FacilitiesPreview.module.css";
import { motion } from "framer-motion";

const facilities = [
  {
    title: "Location",
    text: `Paper Converters (K) Ltd. is situated in Industrial Area on Olesoi Rd. (Off Lunga Lunga Rd). We are occupying 2 hectares of self-owned premises that houses over 100,000 square feet of factory floor.`,
    imgUrl: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/location.webp",
  },
  {
    title: "Equipment & Experience",
    text: `With over 40 years of experience in the paper converting industry, we have acquired sophisticated manufacturing equipment from both Germany and the USA that gives us high performance and absolute precision. Our process of continuous investment in new technologies has allowed for the development of higher quality products and greater levels of customer satisfaction.`,
    imgUrl: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/equipment.webp",
  },
  {
    title: "Office & Maintenance",
    text: `Apart from our factory floor, we have 10,000 square feet of office space, which houses our purchasing, sales, accounts, administration and human resource departments. We also maintain an in-house workshop and spare department, which allows us to keep the factory running seamlessly, minimizing down-time for repairs and maintenance.`,
    imgUrl: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/office.webp",
  },
];

export default function FacilitiesPreview() {
  return (
    <section className={styles.facilitiesPreview}>
      <h2 className={styles.sectionTitle}>Our Facilities</h2>
      {facilities.map(({ title, text, imgUrl }, index) => {
        const isEven = index % 2 === 1;
        return (
          <motion.div
            key={title}
            className={`${styles.facilityBlock} ${
              isEven ? styles.reverse : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: isEven ? 100 : -100 },
            }}
          >
            <motion.img
              src={imgUrl}
              alt={title}
              className={styles.facilityImage}
              initial={{ opacity: 0, x: isEven ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
              className={styles.facilityContent}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className={styles.facilityTitle}>{title}</h3>
              <p className={styles.facilityText}>{text}</p>
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}
