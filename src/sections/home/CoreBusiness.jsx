import React, { useEffect, useRef, useState } from "react";
import styles from "./CoreBusiness.module.css";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Printer,
  Tag,
  File,
  BookOpen,
  Layers,
  FileText,
  Settings,
} from "lucide-react";

const specialties = [
  { 
    label: "Envelopes", 
    icon: Mail,
    description: "High-quality envelopes in various sizes and finishes for professional correspondence and mailing needs."
  },
  { 
    label: "Continuous Computer Stationery", 
    icon: Printer,
    description: "Continuous form paper and computer stationery for high-volume printing applications and data processing."
  },
  { 
    label: "Thermal Cash Register & ATM Rolls", 
    icon: Tag,
    description: "Thermal paper rolls for cash registers, ATMs, and point-of-sale systems with reliable printing quality."
  },
  { 
    label: "Office Files", 
    icon: File,
    description: "Durable filing systems and office organization solutions to keep your documents secure and accessible."
  },
  { 
    label: "Ruled Paper & Writing Pads", 
    icon: BookOpen,
    description: "Quality writing paper and notepads for everyday office use, meetings, and personal note-taking."
  },
  { 
    label: "Counter Books", 
    icon: Layers,
    description: "Professional counter books and receipt books for retail and service businesses with duplicate copies."
  },
  { 
    label: "Duplicate Books and other Office Stationery", 
    icon: FileText,
    description: "Comprehensive range of duplicate books and essential office stationery for business operations."
  },
  { 
    label: "School Stationery products", 
    icon: BookOpen,
    description: "Complete range of school supplies including exercise books, pens, pencils, and educational materials."
  },
  { 
    label: "Self-Adhesive Labels", 
    icon: Tag,
    description: "Custom self-adhesive labels for product identification, shipping, and organizational purposes."
  },
  { 
    label: "Commercial Printing Services", 
    icon: Settings,
    description: "Professional printing services for business cards, brochures, flyers, and custom printed materials."
  },
];

const CARD_SIZE = 180;
const GAP = 24;
const COLUMNS = 5;

export default function CoreBusiness() {
  const [isVisible, setIsVisible] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');
  const [flippedCards, setFlippedCards] = useState(new Set());
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();

  
  const springConfig = {
    type: "spring",
    stiffness: 60,      
    damping: 15,         
    mass: 0.5,         
    restDelta: 0.001,
  };

  const handleCardFlip = (index) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleCardHover = (index, isHovering) => {
    if (screenSize === 'desktop' || screenSize === 'tablet') {
      setFlippedCards(prev => {
        const newSet = new Set(prev);
        if (isHovering) {
          newSet.add(index);
        } else {
          newSet.delete(index);
        }
        return newSet;
      });
    }
  };


  const getGridConfig = () => {
    if (typeof window === 'undefined') return { columns: 5, cardSize: 180, gap: 24 };
    
    const width = window.innerWidth;
    if (width <= 480) {
      return { columns: 2, cardSize: 120, gap: 12 };
    } else if (width <= 768) {
      return { columns: 2, cardSize: 140, gap: 16 };
    } else if (width <= 1200) {
      return { columns: 4, cardSize: 160, gap: 20 };
    }
    return { columns: 5, cardSize: 180, gap: 24 };
  };

  const calculateGridPosition = (index) => {
    const { columns, cardSize, gap } = getGridConfig();
    const row = Math.floor(index / columns);
    const col = index % columns;
    return {
      x: col * (cardSize + gap),
      y: row * (cardSize + gap),
    };
  };

  const calculateStackPosition = (index) => ({
    x: index * 6,        
    y: index * -0.5,     
    rotate: index % 2 === 0 ? -3 : 3,  
    scale: 1 - index * 0.01, 
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setScreenSize('small-mobile');
      } else if (width <= 768) {
        setScreenSize('mobile');
      } else if (width <= 1200) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
       
        setTimeout(() => setIsVisible(entry.isIntersecting), 100);
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <h2 className={styles.heading}>We specialize in the supply and manufacture of:</h2>
      
      <div className={styles.container}>
        {specialties.map(({ label, icon: Icon, description }, index) => (
          <motion.div
            key={index}
            className={`${styles.card} ${flippedCards.has(index) ? styles.flipped : ''}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              ...(isVisible || reducedMotion
                ? calculateGridPosition(index)
                : calculateStackPosition(index)),
              transition: {
                ...springConfig,
                delay: reducedMotion ? 0 : index * 0.08, 
              },
            }}
            whileHover={isVisible ? { 
              scale: 1.05,
              zIndex: 10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
              transition: { duration: 0.3 }
            } : {}}
            onMouseEnter={() => handleCardHover(index, true)}
            onMouseLeave={() => handleCardHover(index, false)}
            onClick={() => handleCardFlip(index)}
            style={{
              width: getGridConfig().cardSize,
              height: getGridConfig().cardSize,
              originX: 0.5,
              originY: 0.5,
            }}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <Icon className={styles.icon} size={32} />
                <p>{label}</p>
              </div>
              <div className={styles.cardBack}>
                <p className={styles.description}>{description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}