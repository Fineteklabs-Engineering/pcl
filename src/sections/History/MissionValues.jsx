import React, { useEffect, useRef, useState } from "react";
import styles from "./MissionValues.module.css";
import { Target, Lightbulb, Scale } from "lucide-react";

export default function MissionValues() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '50px 0px'
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef} aria-label="Mission and Values">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Mission & <span className={styles.handUnderline}>Values</span>
        </h2>

        <div className={styles.content}>
          
          <div className={`${styles.sectionItem} ${isVisible ? styles.animate : ''}`} data-direction="left">
            <div className={styles.iconContainer}>
              <div className={`${styles.iconWrapper} ${styles.missionIcon}`}>
                <Target size={32} className={styles.icon} />
              </div>
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.title}>MISSION</h3>
              <p className={styles.description}>
                To deliver high-quality printing, stationery, and paper solutions with a commitment to efficiency, innovation, and sustainability — while upholding the values of family, continuous learning, and open communication in everything we do.
              </p>
            </div>
          </div>

          
          <div className={`${styles.sectionItem} ${styles.reverse} ${isVisible ? styles.animate : ''}`} data-direction="right">
            <div className={styles.textContent}>
              <h3 className={styles.title}>VISION</h3>
              <p className={styles.description}>
                To be a leading provider of trusted, innovative, and sustainable printing and paper solutions — known for our quality, ethics, and a family-driven culture that empowers people and exceeds expectations.
              </p>
            </div>
            <div className={styles.iconContainer}>
              <div className={`${styles.iconWrapper} ${styles.visionIcon}`}>
                <Lightbulb size={32} className={styles.icon} />
              </div>
            </div>
          </div>

          
          <div className={`${styles.sectionItem} ${isVisible ? styles.animate : ''}`} data-direction="left">
            <div className={styles.iconContainer}>
              <div className={`${styles.iconWrapper} ${styles.valuesIcon}`}>
                <Scale size={32} className={styles.icon} />
              </div>
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.title}>CORE VALUES</h3>
              <div className={styles.valuesList} role="list">
                <div className={styles.valueItem} role="listitem">
                  <strong>Quality</strong> – Excellence in every product and service we offer.
                </div>
                <div className={styles.valueItem} role="listitem">
                  <strong>Efficiency</strong> – Speed, precision, and resourcefulness.
                </div>
                <div className={styles.valueItem} role="listitem">
                  <strong>Communication</strong> – Clear, open, respectful communication.
                </div>
                <div className={styles.valueItem} role="listitem">
                  <strong>Family</strong> – A culture of care, respect, and togetherness.
                </div>
                <div className={styles.valueItem} role="listitem">
                  <strong>Sustainability</strong> – Environmentally responsible practices.
                </div>
                <div className={styles.valueItem} role="listitem">
                  <strong>Innovation</strong> – Embracing creativity and new technologies.
                </div>
                <div className={styles.valueItem} role="listitem">
                  <strong>Learning</strong> – Continuous personal and professional growth.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}