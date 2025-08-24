import React, { useEffect, useRef, useState } from "react";
import { ScrollText, CreditCard, Building2, Car } from "lucide-react";
import styles from "./ThermalRolls.module.css";

const ThermalRolls = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Thermal Rolls">
              <div className={styles.container}>
          <div className={`${styles.content} ${isVisible ? styles.animateIn : ''}`}>
            <div className={styles.icon}>
              <ScrollText size={48} />
            </div>
            <h2 className={styles.title}>Thermal Rolls</h2>
            <p className={styles.description}>
              Top-grade thermal and NCR rolls for everyday receipt and transaction printing. Reliable and compatible with all standard machines.
            </p>
            
            <div className={styles.specs}>
              <h3 className={styles.specsTitle}>Specifications</h3>
              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Types:</span>
                  <span className={styles.specValue}>Thermal POS rolls, ETR rolls, ATM rolls, and multi-ply NCR rolls</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Sizes:</span>
                  <span className={styles.specValue}>Standard widths or custom sizes</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Options:</span>
                  <span className={styles.specValue}>Plain or custom-branded with your logo</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Core Sizes:</span>
                  <span className={styles.specValue}>Standard core sizes</span>
                </div>
              </div>
            </div>

            <div className={styles.useCases}>
              <h3 className={styles.useCasesTitle}>Use Cases</h3>
              <div className={styles.useCasesGrid}>
                <div className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <CreditCard size={24} />
                  </div>
                  <h4>Retail POS Systems</h4>
                </div>
                <div className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <Building2 size={24} />
                  </div>
                  <h4>ATMs & Banking</h4>
                </div>
                <div className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <Car size={24} />
                  </div>
                  <h4>Transport & Parking</h4>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`${styles.visual} ${isVisible ? styles.animateIn : ''}`}>
            <div className={styles.imageContainer}>
              <img
                src="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/thermal-rolls.jpg"
                alt="Thermal rolls "
                className={styles.image}
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default ThermalRolls; 