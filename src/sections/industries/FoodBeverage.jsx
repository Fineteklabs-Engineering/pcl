import React, { useState, useEffect, useRef } from 'react';
import { Utensils, Shield, Leaf, Award, Package, CheckCircle } from 'lucide-react';
import styles from './FoodBeverage.module.css';

export default function FoodBeverage() {
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
                <Package size={32} />
              </div>
              <h4>Self-Adhesive Labels</h4>
              <p>FMCG packaging, barcodes, promotional stickers</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <Leaf size={32} />
              </div>
              <h4>Greaseproof Paper</h4>
              <p>White Kraft Paper for wrapping</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <Utensils size={32} />
              </div>
              <h4>Thermal Rolls</h4>
              <p>For retail counters & restaurants</p>
            </div>
          </div>
          
          <div className={styles.certification}>
            <div className={styles.certIcon}>
              <Shield size={48} />
            </div>
            <div>
              <h4>Food-Safe Certified</h4>
              <p>Compliant with food safety standards</p>
            </div>
          </div>
        </div>

        <div className={`${styles.content} ${animateIn ? styles.animateIn : ''}`}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <Utensils size={48} />
            </div>
            <h2 className={styles.title}>Food-Safe Packaging for the F&B Industry</h2>
          </div>
          
          <p className={styles.description}>
            From bakeries to beverage brands, we provide compliant, food-safe self-adhesive 
            paper and labeling solutions that protect products and enhance presentation.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Shield size={24} />
              </div>
              <div>
                <h4>Food-Safe Materials</h4>
                <p>Compliant with international food safety standards</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Leaf size={24} />
              </div>
              <div>
                <h4>Eco-Friendly Options</h4>
                <p>Sustainable packaging solutions available</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Award size={24} />
              </div>
              <div>
                <h4>Quality Assurance</h4>
                <p>Rigorous testing for food contact applications</p>
              </div>
            </div>
          </div>

          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <CheckCircle size={20} />
              <span>FDA compliant materials</span>
            </div>
            <div className={styles.benefit}>
              <CheckCircle size={20} />
              <span>Moisture-resistant coatings</span>
            </div>
            <div className={styles.benefit}>
              <CheckCircle size={20} />
              <span>High-quality printing</span>
            </div>
            <div className={styles.benefit}>
              <CheckCircle size={20} />
              <span>Custom branding options</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 