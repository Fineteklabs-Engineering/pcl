import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Tag, Receipt, Package, Award, CheckCircle } from 'lucide-react';
import styles from './RetailSector.module.css';

export default function RetailSector() {
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
        <div className={`${styles.content} ${animateIn ? styles.animateIn : ''}`}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <ShoppingBag size={48} />
            </div>
            <h2 className={styles.title}>Packaging & Stationery for the Retail Industry</h2>
          </div>
          
          <p className={styles.description}>
            We supply the paper and labeling solutions that shape your customers' first impressions. 
            From barcode labels and thermal rolls to branded envelopes and exercise book covers, 
            our products keep retail operations smooth and professional.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <ShoppingBag size={24} />
              </div>
              <div>
                <h4>Retail Packaging</h4>
                <p>From branded envelopes to custom packaging solutions</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Tag size={24} />
              </div>
              <div>
                <h4>Price Tags & Labels</h4>
                <p>High-quality self-adhesive labels and price tags</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Receipt size={24} />
              </div>
              <div>
                <h4>Thermal Receipts</h4>
                <p>Reliable thermal rolls for POS systems and ETR machines</p>
              </div>
            </div>
          </div>

          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <CheckCircle size={20} />
              <span>Professional presentation</span>
            </div>
            <div className={styles.benefit}>
              <CheckCircle size={20} />
              <span>Custom branding available</span>
            </div>
            <div className={styles.benefit}>
              <CheckCircle size={20} />
              <span>Fast delivery nationwide</span>
            </div>
            <div className={styles.benefit}>
              <CheckCircle size={20} />
              <span>Bulk order discounts</span>
            </div>
          </div>
        </div>

        <div className={`${styles.visual} ${animateIn ? styles.animateIn : ''}`}>
          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <Package size={32} />
              </div>
              <h4>Envelopes</h4>
              <p>Branded or plain options</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <Receipt size={32} />
              </div>
              <h4>Thermal Rolls</h4>
              <p>For POS & ETR machines</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <Tag size={32} />
              </div>
              <h4>Self-Adhesive Labels</h4>
              <p>Pricing, barcodes, promotions</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <ShoppingBag size={32} />
              </div>
              <h4>Box Files & Stationery</h4>
              <p>Office organization solutions</p>
            </div>
          </div>
          
          <div className={styles.retailBadge}>
            <div className={styles.badgeIcon}>
              <Award size={48} />
            </div>
            <div>
              <h4>Trusted by Retailers</h4>
              <p>Serving Kenya's retail sector since 1971</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 