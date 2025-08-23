import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./FeaturedProducts.module.css";
import { motion, useReducedMotion } from "framer-motion";
import { Printer, Mail, File, Tag, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    icon: Printer,
    title: "Computer Stationery",
    desc: "Multi-part carbonless forms for invoices, delivery notes, and business records. Perforated, custom-branded, and available in standard or bespoke sizes.",
    expandedDesc: "Multi-part carbonless forms for invoices, delivery notes, and business records.\nPerforated, custom-branded, and available in all standard or bespoke sizes."
  },
  {
    icon: Mail,
    title: "Envelopes",
    desc: "Plain, windowed, manila, or duplex — from medical to C3 sizes. Custom printing available to carry your brand forward.",
    expandedDesc: "Plain, windowed, manila, or duplex — from medical to C3 sizes.\nCustom printing available to carry your brand forward."
  },
  {
    icon: File,
    title: "Box Files (Robin)",
    desc: "Durable lever-arch files for everyday office use. Available in blue or black with customizable spine labels.",
    expandedDesc: "Durable lever-arch files for everyday office use.\nAvailable in blue or black with customizable spine labels."
  },
  {
    icon: Tag,
    title: "Self-Adhesive Labels (Label Craft)",
    desc: "High-precision labels for packaging, promotions, and POS. Custom die-cut, thermal, gloss, or polypropylene.",
    expandedDesc: "High-precision labels for packaging, promotions, and POS.\nCustom die-cut, thermal, gloss, or polypropylene — ready for any label applicator."
  },
  {
    icon: RefreshCw,
    title: "Thermal Rolls",
    desc: "Top-grade thermal and NCR rolls for POS, ETR, ATMs & more. Available in all standard sizes, with optional custom branding.",
    expandedDesc: "Reliable rolls for every receipt.\nTop-grade thermal and NCR rolls for POS, ETR, ATMs & more.\nAvailable in all standard sizes, with optional custom branding."
  },
];

const CARD_SIZE_DESKTOP = 240;

export default function FeaturedProducts() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080
  });
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();

 
  const springConfig = {
    type: "spring",
    stiffness: 500,      
    damping: 20,        
    mass: 0.4,
    restDelta: 0.001,
  };


  const handleResize = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  useEffect(() => {
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

   
    handleResize();
    
    
    window.addEventListener('resize', debouncedResize, { passive: true });
    

    window.addEventListener('orientationchange', () => {
     
      setTimeout(handleResize, 200);
    });
    
    
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
    }
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('orientationchange', handleResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
      }
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

 
  const gridConfig = React.useMemo(() => {
    const width = dimensions.width;
    if (width <= 480) {
      return { columns: 1, cardSize: 120, gap: 12, useFlow: true }; 
    } else if (width <= 768) {
      return { columns: 2, cardSize: 140, gap: 16, useFlow: true };
    } else if (width <= 1024) {
      const isLandscape = dimensions.height < dimensions.width;
      return { 
        columns: isLandscape ? 2 : 3, 
        cardSize: 160, 
        gap: 18, 
        useFlow: true 
      };
    }
    return { columns: 5, cardSize: CARD_SIZE_DESKTOP, gap: 24, useFlow: false };
  }, [dimensions]);

  const calculateGridPosition = useCallback((index) => {
    const { columns, cardSize, gap } = gridConfig;
    const col = index % columns;
    const row = Math.floor(index / columns);
    return {
      x: col * (cardSize + gap),
      y: row * (cardSize + gap),
    };
  }, [gridConfig]);

  const calculateStackPosition = useCallback((index) => ({
    x: 40 + (index * 8), 
    y: index * 5,
    rotate: (index % 2 === 0 ? -1.5 : 1.5) + (index * 0.3),
    scale: Math.max(0.85, 1 - index * 0.015),
  }), []);

  const handleReadMore = useCallback((index) => {
    setExpandedCard(prev => prev === index ? null : index);
  }, []);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>Featured <span className={styles.handUnderline}>Products</span></h2>
        <Link to="/products" className={styles.cta}>Explore All Products</Link>
      </div>
      
      <div 
        className={styles.container}
        style={{
          '--container-width': gridConfig.useFlow ? '100%' : `${gridConfig.columns * (gridConfig.cardSize + gridConfig.gap)}px`,
          '--container-height': gridConfig.useFlow ? 'auto' : `${gridConfig.cardSize + gridConfig.gap}px`
        }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isExpanded = expandedCard === index;

        
          const getAnimationProps = () => {
            if (gridConfig.useFlow) {
              return {
                initial: { opacity: 0, y: 20, scale: 0.95 },
                animate: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    delay: 0
                  }
                },
                whileHover: { 
                  scale: 1.02,
                  y: -2,
                  transition: { duration: 0.2, ease: 'easeOut' }
                }
              };
            } else {
              const gridPos = calculateGridPosition(index);
              const stackPos = calculateStackPosition(index);
              
              return {
                initial: { 
                  opacity: 0, 
                  ...stackPos
                },
                animate: { 
                  opacity: 1,
                  ...(isVisible || reducedMotion ? gridPos : stackPos),
                  rotate: isVisible || reducedMotion ? 0 : stackPos.rotate,
                  scale: isVisible || reducedMotion ? 1 : stackPos.scale,
                  transition: { 
                    ...springConfig, 
                    delay: 0
                  }
                },
                whileHover: isVisible && !reducedMotion ? { 
                  scale: 1.05,
                  y: gridPos.y - 5,
                  zIndex: 10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  transition: { 
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  }
                } : {}
              };
            }
          };

          const animationProps = getAnimationProps();

          return (
            <motion.div
              key={index}
              className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
              {...animationProps}
              layout={isExpanded ? "position" : false}
              style={{
                width: gridConfig.useFlow ? '100%' : gridConfig.cardSize,
                height: gridConfig.useFlow ? 'auto' : (isExpanded ? 'auto' : gridConfig.cardSize),
                minHeight: gridConfig.useFlow && isExpanded ? '380px' : 'auto',
                willChange: 'transform, opacity',
                transformOrigin: '50% 50%',
              }}
            >
              <div className={styles.cardContent}>
                <motion.div 
                  className={styles.iconWrap}
                  whileHover={{ 
                    scale: 1.1, 
                    transition: { duration: 0.2 } 
                  }}
                >
                  <Icon size={gridConfig.useFlow ? 28 : 32} />
                </motion.div>
                
                <h3 className={styles.title}>{item.title}</h3>
                
                {isExpanded && (
                  <motion.div
                    className={styles.expandedContent}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ 
                      duration: 0.3,
                      ease: 'easeInOut'
                    }}
                  >
                    <p className={styles.desc}>{item.expandedDesc}</p>
                  </motion.div>
                )}
                
                <motion.button 
                  className={styles.readMoreBtn}
                  onClick={() => handleReadMore(index)}
                  whileHover={{ 
                    scale: 1.05,
                    y: -1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}