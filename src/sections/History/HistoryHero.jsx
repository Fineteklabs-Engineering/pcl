
import React, { useEffect, useState, useRef } from "react";
import styles from "./HistoryHero.module.css";

export default function HistoryHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.3,
        rootMargin: '50px 0px'
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero} ref={sectionRef}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <span className={`${styles.titlePart} ${styles.slideLeft} ${isVisible ? styles.animate : ''}`}>OUR</span>
          <span className={`${styles.titlePart} ${styles.slideRight} ${isVisible ? styles.animate : ''}`}>STORY</span>
        </div>
        <h3 className={`${styles.subheading} ${isVisible ? styles.subheadingAnimate : ''}`}>
          Proudly Crafting Paper Products Since 1971
        </h3>
        <h2 className={`${styles.subtitle} ${isVisible ? styles.subtitleAnimate : ""}`}>
          For over 50 years, Paper Converters (K) Ltd has been at the forefront of Kenya's paper and printing industry. From our humble beginnings in Mombasa in 1971 to our present base in Nairobi, we have grown into a trusted partner for businesses across East Africa.
        </h2>
      </div>
      <div className={`${styles.scrollIndicator} ${isVisible ? styles.scrollAnimate : ''}`}>
        <span className={styles.arrow} />
      </div>
    </section>
  );
}
