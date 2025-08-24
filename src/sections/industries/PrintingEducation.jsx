import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, GraduationCap, FileText, Users, Award, CheckCircle } from 'lucide-react';
import styles from './PrintingEducation.module.css';

export default function PrintingEducation() {
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
              <BookOpen size={48} />
            </div>
            <h2 className={styles.title}>Reliable Paper Products for Printers & Schools</h2>
          </div>
          
          <p className={styles.description}>
            We supply high-quality paper and stationery products for printers, publishers, 
            and educational institutions across Kenya.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <GraduationCap size={24} />
              </div>
              <div>
                <h4>Educational Excellence</h4>
                <p>Quality materials for learning environments</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <FileText size={24} />
              </div>
              <div>
                <h4>Print-Ready Solutions</h4>
                <p>Optimized for professional printing</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Award size={24} />
              </div>
              <div>
                <h4>Consistent Quality</h4>
                <p>Reliable products for consistent results</p>
              </div>
            </div>
          </div>

          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <CheckCircle size={20} />
              <span>High-quality paper grades</span>
            </div>
            <div className={styles.benefit}>
              <CheckCircle size={20} />
              <span>Custom sizing available</span>
            </div>
            <div className={styles.benefit}>
              <CheckCircle size={20} />
              <span>Bulk order discounts</span>
            </div>
            <div className={styles.benefit}>
              <CheckCircle size={20} />
              <span>Fast delivery nationwide</span>
            </div>
          </div>
        </div>

        <div className={`${styles.visual} ${animateIn ? styles.animateIn : ''}`}>
          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <FileText size={32} />
              </div>
              <h4>Examination Papers</h4>
              <p>High-quality printing paper</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <BookOpen size={32} />
              </div>
              <h4>Exercise Book Covers</h4>
              <p>Durable covers for students</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <Users size={32} />
              </div>
              <h4>Envelopes & Files</h4>
              <p>Office organization solutions</p>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <GraduationCap size={32} />
              </div>
              <h4>Thermal Rolls</h4>
              <p>For school payment systems</p>
            </div>
          </div>
          
          <div className={styles.educationBadge}>
            <div className={styles.badgeIcon}>
              <GraduationCap size={48} />
            </div>
            <div>
              <h4>Supporting Education</h4>
              <p>Empowering learning institutions across Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 