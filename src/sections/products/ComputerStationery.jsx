import React, { useEffect, useRef, useState } from "react";
import { Printer, Building2, Truck, ShoppingBag } from "lucide-react";
import styles from "./ComputerStationery.module.css";

const ComputerStationery = () => {
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
    <section ref={sectionRef} className={styles.section} aria-label="Computer Stationery">
              <div className={styles.container}>
          <div className={`${styles.content} ${isVisible ? styles.animateIn : ''}`}>
            <div className={styles.icon}>
              <Printer size={48} />
            </div>
            <h2 className={styles.title}>Computer Stationery</h2>
            <p className={styles.description}>
              Seamless multi-part carbonless forms designed for dot-matrix printing. Used for invoices, delivery notes, receipts, and business records.
            </p>
            
            <div className={styles.specs}>
              <h3 className={styles.specsTitle}>Specifications</h3>
              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Types:</span>
                  <span className={styles.specValue}>Single-part & multi-part forms (2–6 part)</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Sizes:</span>
                  <span className={styles.specValue}>Standard (9.5" x 11", 9.5" x 8") or custom sizes available</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Options:</span>
                  <span className={styles.specValue}>Perforated, sequentially numbered, pre-printed, or custom-branded</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Finish:</span>
                  <span className={styles.specValue}>Carbonless paper (NCR), plain, colored and pre-printed</span>
                </div>
              </div>
            </div>

            <div className={styles.useCases}>
              <h3 className={styles.useCasesTitle}>Use Cases</h3>
              <div className={styles.useCasesGrid}>
                <div className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <Building2 size={24} />
                  </div>
                  <h4>Banking & Finance</h4>
                </div>
                <div className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <Truck size={24} />
                  </div>
                  <h4>Logistics & Transport</h4>
                </div>
                <div className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <ShoppingBag size={24} />
                  </div>
                  <h4>Retail & Commerce</h4>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`${styles.visual} ${isVisible ? styles.animateIn : ''}`}>
            <div className={styles.imageContainer}>
              <img
                src="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/computerstationery-removebg-preview.png"
                alt="Computer stationery "
                className={styles.image}
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default ComputerStationery; 