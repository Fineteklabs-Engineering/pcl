import React, { useEffect, useRef, useState } from "react";
import { Mail, Building2, Send } from "lucide-react";
import styles from "./Envelopes.module.css";

const Envelopes = () => {
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
    <section ref={sectionRef} className={styles.section} aria-label="Envelopes">
              <div className={styles.container}>
          <div className={`${styles.visual} ${isVisible ? styles.animateIn : ''}`}>
            <div className={styles.imageContainer}>
              <img
                src="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/envelopes.jpg"
                alt="Robin brand envelopes "
                className={styles.image}
              />
            </div>
          </div>

          <div className={`${styles.content} ${isVisible ? styles.animateIn : ''}`}>
            <div className={styles.icon}>
              <Mail size={48} />
            </div>
            <h2 className={styles.title}>Envelopes (Robin Brand)</h2>
            <p className={styles.description}>
              High-quality envelopes available in a variety of sizes and finishes. Suitable for business correspondence, mailing, and branded communication.
            </p>
            
            <div className={styles.specs}>
              <h3 className={styles.specsTitle}>Specifications</h3>
              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Types:</span>
                  <span className={styles.specValue}>Plain, windowed, manila, duplex</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Sizes:</span>
                  <span className={styles.specValue}>From medical sizes to C3</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Printing:</span>
                  <span className={styles.specValue}>Custom printing with company logos or return addresses</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Seal:</span>
                  <span className={styles.specValue}>Gummed or self-seal options</span>
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
                  <h4>Corporate Offices</h4>
                </div>
                <div className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <Mail size={24} />
                  </div>
                  <h4>Direct Mail</h4>
                </div>
                <div className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <Send size={24} />
                  </div>
                  <h4>Branded Communication</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Envelopes; 