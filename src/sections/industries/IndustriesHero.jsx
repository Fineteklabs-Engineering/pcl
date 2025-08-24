
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Utensils, Factory, Building2, GraduationCap, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';
import styles from './IndustriesHero.module.css';

const IndustriesHero = () => {
  const [startOrbit, setStartOrbit] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showCursor, setShowCursor] = useState(true);
  const [animateIn, setAnimateIn] = useState(false);

  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const industries = [
    {
      id: 0,
      icon: <ShoppingBag size={32} />,
      title: 'Retail'
    },
    {
      id: 1,
      icon: <Utensils size={32} />,
      title: 'Food & Beverage'
    },
    {
      id: 2,
      icon: <Factory size={32} />,
      title: 'Manufacturing'
    },
    {
      id: 3,
      icon: <Building2 size={32} />,
      title: 'Banking'
    },
    {
      id: 4,
      icon: <GraduationCap size={32} />,
      title: 'Education'
    },
    {
      id: 5,
      icon: <Truck size={32} />,
      title: 'Logistics'
    }
  ];

  const typeSpeed = 100;
  const pauseAfterTyping = 2000;

  useEffect(() => {
    if (inView) {
      setAnimateIn(true);
    }
  }, [inView]);

  useEffect(() => {
    if (!inView || startOrbit) return;

    const totalSlideInDelay = industries.length * 0.6 * 1000 + 1000;
    const timeout = setTimeout(() => {
      setStartOrbit(true);
      setActiveIndex(0);
    }, totalSlideInDelay);

    return () => clearTimeout(timeout);
  }, [inView, startOrbit]);

  useEffect(() => {
    if (!startOrbit || activeIndex === null) return;

    const currentText = industries[activeIndex].title;
    const typingDuration = currentText.length * typeSpeed;
    const totalDelay = typingDuration + pauseAfterTyping;

    const interval = setInterval(() => {
      setIsPaused(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % industries.length);
        setIsPaused(false);
      }, totalDelay);
    }, totalDelay + 2000);

    return () => clearInterval(interval);
  }, [startOrbit, activeIndex]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const radius = windowWidth < 768 ? 130 : 240;

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.backgroundPattern}>
        <div className={styles.backgroundGradient}></div>
      </div>

      <div className={styles.mainGrid}>
        
    
        <div className={`${styles.leftContent} ${animateIn ? styles.animateIn : ''}`}>
          <div className={styles.staticContent}>
            <h1 className={styles.mainHeading}>
              Tailored Paper & Packaging Solutions for{' '}
              <span className={styles.highlightText}>
                Every Industry
                <svg className={styles.underlineSvg} viewBox="0 0 200 10">
                  <path d="M0,8 Q100,0 200,8" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className={styles.description}>
              We partner with businesses across Kenya's leading sectors to supply reliable, 
              branded, and compliant paper and labeling solutions that drive success.
            </p>
          </div>
        </div>

        
        <div className={`${styles.rightVisual} ${animateIn ? styles.animateIn : ''}`}>
          <div className={styles.visualContainer}>
            
            
            {!startOrbit && inView && (
              <div className={styles.bubbleContainer}>
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.id}
                    className={styles.staticCard}
                    initial={{ x: "100vw", opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{
                      delay: index * 0.6,
                      type: "spring",
                      stiffness: 60
                    }}
                  >
                    <div className={styles.staticIcon}>
                      {industry.icon}
                    </div>
                    <h4 className={styles.staticTitle}>{industry.title}</h4>
                  </motion.div>
                ))}
              </div>
            )}

            
            {startOrbit && (
              <div className={styles.orbitWrapper}>
                <div className={styles.orbitContainer}>
                  {industries
                    .filter((_, i) => i !== activeIndex)
                    .map((industry, i, arr) => {
                      const angle = (360 / arr.length) * i;
                      const x = radius * Math.cos((angle * Math.PI) / 180);
                      const y = radius * Math.sin((angle * Math.PI) / 180);

                      return (
                        <motion.div
                          className={styles.orbitBubble}
                          key={industry.id}
                          animate={!isPaused ? { x, y } : false}
                          transition={{ duration: 1, type: "spring", stiffness: 50 }}
                        >
                          <div className={styles.orbitIcon}>
                            {industry.icon}
                          </div>
                        </motion.div>
                      );
                    })}
                </div>

                {activeIndex !== null && (
                  <motion.div
                    className={styles.centerBubble}
                    key={activeIndex}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  >
                    <div className={styles.centerIcon}>
                      {industries[activeIndex].icon}
                    </div>
                    <h3 className={styles.centerTitle}>
                      <Typewriter
                        words={[industries[activeIndex].title]}
                        loop={1}
                        typeSpeed={typeSpeed}
                        cursor={showCursor}
                        onLoopDone={() => setShowCursor(false)}
                      />
                    </h3>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>  
  );
};

export default IndustriesHero;