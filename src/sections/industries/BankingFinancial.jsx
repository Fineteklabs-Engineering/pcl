import React, { useState, useEffect, useRef } from 'react';
import { Building2, Shield, CreditCard, FileText, Lock, TrendingUp } from 'lucide-react';
import styles from './BankingFinancial.module.css';

export default function BankingFinancial() {
  const [animateIn, setAnimateIn] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateIn(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.container}>
        <div className={`${styles.visual} ${animateIn ? styles.animateIn : ''}`}>
          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <FileText size={32} />
              </div>
              <h4>Computer Stationery</h4>
              <p>Multi-part banking forms, cheques, receipts</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <CreditCard size={32} />
              </div>
              <h4>Thermal & NCR Rolls</h4>
              <p>For ATMs, ETRs & POS systems</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <Shield size={32} />
              </div>
              <h4>Secure Envelopes</h4>
              <p>Confidential & secure correspondence</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <Building2 size={32} />
              </div>
              <h4>Office Files</h4>
              <p>Robin brand for archiving</p>
            </div>
          </div>
          
          <div className={styles.trustBadge}>
            <div className={styles.badgeIcon}>
              <Lock size={48} />
            </div>
            <div>
              <h4>Trusted by Banks</h4>
              <p>Decades of reliable service to Kenya's financial sector</p>
            </div>
          </div>
        </div>

        <div className={`${styles.content} ${animateIn ? styles.animateIn : ''}`}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <Building2 size={48} />
            </div>
            <h2 className={styles.title}>Trusted Paper Solutions for Banks & Institutions</h2>
          </div>
          
          <p className={styles.description}>
            For decades, Paper Converters has been a trusted supplier to Kenya's financial sector. 
            From secure stationery to thermal and computer forms, we keep transactions reliable and compliant.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Shield size={24} />
              </div>
              <div>
                <h4>Security First</h4>
                <p>Secure materials for confidential documents</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Lock size={24} />
              </div>
              <div>
                <h4>Compliance Ready</h4>
                <p>Meets all banking regulatory requirements</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <TrendingUp size={24} />
              </div>
              <div>
                <h4>Proven Reliability</h4>
                <p>50+ years of trusted banking partnerships</p>
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <Building2 size={24} />
              <div>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
            </div>
            <div className={styles.stat}>
              <Shield size={24} />
              <div>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Secure & Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 