import React, { useState, useEffect, useRef } from "react";
import styles from "./FacilitiesPreview.module.css";
import { motion, AnimatePresence } from "framer-motion";

const facilities = [
  {
    id: "01",
    title: "Location",
    text: `Paper Converters (K) Ltd. is situated in Industrial Area on Olesoi Rd. (Off Lunga Lunga Rd). We are occupying 2 hectares of self-owned premises that houses over 100,000 square feet of factory floor.`,
    imgUrl: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/location.webp",
  },
  {
    id: "02",
    title: "Equipment & Experience",
    text: `With over 40 years of experience in the paper converting industry, we have acquired sophisticated manufacturing equipment from both Germany and the USA that gives us high performance and absolute precision.`,
    imgUrl: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/equipment.webp",
  },
  {
    id: "03",
    title: "Office & Maintenance",
    text: `Apart from our factory floor, we have 10,000 square feet of office space, which houses our purchasing, sales, accounts, administration and human resource departments.`,
    imgUrl: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/office.webp",
  },
];

export default function FacilitiesPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [barHeights, setBarHeights] = useState([]);
  const [animationPhase, setAnimationPhase] = useState("grow");
  const itemRefs = useRef([]);

  
  useEffect(() => {
    const heights = itemRefs.current.map((ref) => ref?.offsetHeight || 0);
    setBarHeights(heights);
  }, [activeIndex]);

  
  useEffect(() => {
    let timer;

    const runSequence = (index) => {
      
      setAnimationPhase("shrink");

      timer = setTimeout(() => {
        
        const nextIndex = (index + 1) % facilities.length;
        setActiveIndex(nextIndex);

        
        setTimeout(() => {
          setAnimationPhase("grow");

          
          timer = setTimeout(() => runSequence(nextIndex), 5000);
        }, 500);
      }, 2000); 
    };

    runSequence(0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.facilitiesPreview}>
  <h2 className={styles.sectionTitle}>
  <span className={styles.sectionTitleSpan}>Our</span> Facilities
</h2>


      <div className={styles.facilitiesContainer}>
      
        <div className={styles.leftColumn}>
          <AnimatePresence mode="wait">
            <motion.img
              key={facilities[activeIndex].imgUrl}
              src={facilities[activeIndex].imgUrl}
              alt={facilities[activeIndex].title}
              className={styles.facilityImage}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

       
        <div className={styles.rightColumn}>
          {facilities.map((item, index) => (
            <div key={item.id} className={styles.facilityItem}>
              <div className={styles.textWrapper}>
                <div className={styles.progressContainer}>
                                      <motion.div
                      className={styles.progressBar}
                      initial={{ height: 0 }}
                      animate={
                        index === activeIndex
                          ? animationPhase === "grow"
                            ? {
                                height: barHeights[index] || 80,
                              }
                            : {
                                height: 0,
                              }
                          : { height: 0 }
                      }
                      transition={{
                        height: {
                          duration: animationPhase === "grow" ? 2.5 : 1,
                          ease: "easeInOut",
                        },
                      }}
                      style={{
                        transformOrigin: "top",
                      }}
                    />
                </div>

                <div
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={styles.textContent}
                >
                  <h3 className={styles.facilityHeading}>{item.title}</h3>
                  <AnimatePresence>
                    {index === activeIndex && (
                      <motion.p
                        className={styles.facilityText}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        {item.text}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
