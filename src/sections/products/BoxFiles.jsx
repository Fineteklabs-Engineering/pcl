import React, { useEffect, useRef, useState } from "react";
import { FolderOpen, Building2, GraduationCap, FileText } from "lucide-react";
import styles from "./BoxFiles.module.css";

const BoxFiles = () => {
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
    <section ref={sectionRef} className={styles.section} aria-label="Box Files">
              <div className={styles.container}>
          <div className={`${styles.content} ${isVisible ? styles.animateIn : ''}`}>
            <div className={styles.icon}>
              <FolderOpen size={48} />
            </div>
            <h2 className={styles.title}>Box Files (Robin Brand)</h2>
            <p className={styles.description}>
              Strong and durable lever-arch files designed for everyday office use. Manufactured locally under the <strong>Robin</strong> brand.
            </p>
            
            <div className={styles.specs}>
              <h3 className={styles.specsTitle}>Specifications</h3>
              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Types:</span>
                  <span className={styles.specValue}>Broad, narrow, and half-size box files</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Colours:</span>
                  <span className={styles.specValue}>Standard blue and black covers</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Customization:</span>
                  <span className={styles.specValue}>Custom spine labels and branding options</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Material:</span>
                  <span className={styles.specValue}>Heavy-duty board with reinforced edges</span>
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
                  <h4>Office Storage</h4>
                </div>
                <div className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <GraduationCap size={24} />
                  </div>
                  <h4>Schools</h4>
                </div>
                <div className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <FileText size={24} />
                  </div>
                  <h4>Institutions</h4>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`${styles.visual} ${isVisible ? styles.animateIn : ''}`}>
            <div className={styles.imageContainer}>
              <img
                src="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/box-files.jpg"
                alt="Robin brand box files "
                className={styles.image}
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default BoxFiles; 