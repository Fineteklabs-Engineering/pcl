import React, { useState, useRef } from "react";
import styles from "./Brands.module.css";

const brands = [
  { 
    name: "Paper Converters", 
    logo: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/papcon.png",
    description: "Leading manufacturer of envelopes, stationery, and paper products. Trusted by businesses across East Africa for quality and reliability.",
    category: "Paper Products"
  },
  { 
    name: "Label Craft", 
    logo: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/label%20craft.png",
    description: "Premium self-adhesive labels for packaging, promotions, and point-of-sale. Custom die-cut solutions for every application.",
    category: "Self-Adhesive Labels"
  },
  { 
    name: "Robin", 
    logo: "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/robin.png",
    description: "Everyday office stationery that keeps your workspace organized. From lever-arch files to desk accessories.",
    category: "Office Stationery"
  },
];

export default function Brands() {
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const beltRef = useRef(null);

  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands];

  const handleMouseEnter = (index, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: rect.left + rect.width / 2,
      y: rect.bottom + 20
    });
    setHoveredBrand(index);
  };

  const handleMouseLeave = () => {
    setHoveredBrand(null);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Our <span className={styles.handUnderline}>Brands</span>
        </h2>

        <div 
          className={styles.brandBeltContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={beltRef}
            className={`${styles.brandBelt} ${isPaused ? styles.paused : ''}`}
          >
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`}
                className={styles.brandItem}
                onMouseEnter={(e) => handleMouseEnter(index, e)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={styles.logoContainer}>
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className={styles.logo}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        
        {hoveredBrand !== null && (
          <div 
            className={styles.hoverContent}
            style={{
              left: `${hoverPosition.x}px`,
              top: `${hoverPosition.y}px`,
              transform: 'translateX(-50%)'
            }}
          >
            <h3 className={styles.brandName}>{duplicatedBrands[hoveredBrand].name}</h3>
            <p className={styles.category}>{duplicatedBrands[hoveredBrand].category}</p>
            <p className={styles.description}>{duplicatedBrands[hoveredBrand].description}</p>
          </div>
        )}
      </div>
    </section>
  );
}

