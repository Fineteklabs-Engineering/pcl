import React, { useEffect, useRef, useState } from "react";
import { Tag, Package, ShoppingBag, Factory } from "lucide-react";
import styles from "./SelfAdhesiveLabels.module.css";

const SelfAdhesiveLabels = () => {
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
    <section ref={sectionRef} className={styles.section} aria-label="Self-Adhesive Labels">
              <div className={styles.container}>
          <div className={`${styles.visual} ${isVisible ? styles.animateIn : ''}`}>
            <div className={styles.imageContainer}>
              <img
                src="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/self-adhesive-labels.jpg"
                alt="Label Craft self-adhesive labels "
                className={styles.image}
              />
            </div>
          </div>

          <div className={`${styles.content} ${isVisible ? styles.animateIn : ''}`}>
            <div className={styles.icon}>
              <Tag size={48} />
            </div>
            <h2 className={styles.title}>Self-Adhesive Labels (Label Craft)</h2>
            <p className={styles.description}>
              Premium labels produced by Label Craft, our specialist division. Manufactured using flexographic printing technology for high-quality finishes.
            </p>
            
            <div className={styles.specs}>
              <h3 className={styles.specsTitle}>Specifications</h3>
              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Types:</span>
                  <span className={styles.specValue}>Self-Adhesive Paper (semi-gloss, matt, thermal and polypropylene (PP))</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Formats:</span>
                  <span className={styles.specValue}>Rolls, sheets, and custom die-cut shapes</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Sizes:</span>
                  <span className={styles.specValue}>Standard and custom dimensions available</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Finishes:</span>
                  <span className={styles.specValue}>Matte, gloss, or laminated for durability</span>
                </div>
              </div>
            </div>

            <div className={styles.useCases}>
              <h3 className={styles.useCasesTitle}>Use Cases</h3>
              <div className={styles.useCasesGrid}>
                <div className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <Package size={24} />
                  </div>
                  <h4>FMCG Packaging</h4>
                </div>
                <div className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <ShoppingBag size={24} />
                  </div>
                  <h4>Retail & Barcodes</h4>
                </div>
                <div className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <Factory size={24} />
                  </div>
                  <h4>Industrial Labeling</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default SelfAdhesiveLabels; 