import React, { useState, useEffect, useRef } from 'react';
import { Factory, Truck, Package, Shield, Zap, TrendingUp } from 'lucide-react';
import styles from './ManufacturingLogistics.module.css';

export default function ManufacturingLogistics() {
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
              <Factory size={48} />
            </div>
            <h2 className={styles.title}>Protective Packaging for Manufacturing & Logistics</h2>
          </div>
          
          <p className={styles.description}>
            We support industrial and logistics clients with durable paper and labeling products 
            that ensure goods are properly tracked, packed, and delivered.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Shield size={24} />
              </div>
              <div>
                <h4>Durable Materials</h4>
                <p>Heavy-duty solutions for industrial use</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Truck size={24} />
              </div>
              <div>
                <h4>Logistics Ready</h4>
                <p>Products designed for shipping and handling</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Zap size={24} />
              </div>
              <div>
                <h4>Fast Turnaround</h4>
                <p>Quick production for urgent orders</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.visual} ${animateIn ? styles.animateIn : ''}`}>
          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <Package size={32} />
              </div>
              <h4>Computer Stationery</h4>
              <p>Delivery notes, invoices, waybills</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <Shield size={32} />
              </div>
              <h4>Industrial Labels</h4>
              <p>Batch codes, shipping labels</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <Factory size={32} />
              </div>
              <h4>Protective Solutions</h4>
              <p>Corrugated & paper-based packaging</p>
            </div>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <TrendingUp size={24} />
              <div>
                <span className={styles.statNumber}>99%</span>
                <span className={styles.statLabel}>On-Time Delivery</span>
              </div>
            </div>
            <div className={styles.stat}>
              <Zap size={24} />
              <div>
                <span className={styles.statNumber}>48h</span>
                <span className={styles.statLabel}>Fast Production</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 