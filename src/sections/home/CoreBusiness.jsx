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
  { label: "Envelopes", icon: Mail },
  { label: "Continuous Computer Stationery", icon: Printer },
  { label: "Thermal Cash Register & ATM Rolls", icon: Tag },
  { label: "Office Files", icon: File },
  { label: "Ruled Paper & Writing Pads", icon: BookOpen },
  { label: "Counter Books", icon: Layers },
  { label: "Duplicate Books and other Office Stationery", icon: FileText },
  { label: "School Stationery products", icon: BookOpen },
  { label: "Self-Adhesive Labels", icon: Tag },
  { label: "Commercial Printing Services", icon: Settings },
];

const CARD_SIZE = 180;
const GAP = 24;
const COLUMNS = 5;

export default function CoreBusiness() {
  const [isVisible, setIsVisible] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();

  
  const springConfig = {
    type: "spring",
    stiffness: 60,      
    damping: 15,         
    mass: 0.5,         
    restDelta: 0.001,
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
        {specialties.map(({ label, icon: Icon }, index) => (
          <motion.div
            key={index}
            className={styles.card}
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
            style={{
              width: getGridConfig().cardSize,
              height: getGridConfig().cardSize,
              originX: 0.5,
              originY: 0.5,
            }}
          >
            <Icon className={styles.icon} size={32} />
            <p>{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}