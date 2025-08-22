import React from "react";
import styles from "./IndustriesSnippet.module.css";
import { Link } from "react-router-dom";
import { ShoppingBag, Coffee, Factory, Building2, Truck } from "lucide-react";

const industries = [
  {
    name: "Retail",
    icon: ShoppingBag
  },
  {
    name: "Food & Beverage",
    icon: Coffee
  },
  {
    name: "Manufacturing",
    icon: Factory
  },
  {
    name: "Banking",
    icon: Building2
  },
  {
    name: "Logistics",
    icon: Truck
  }
];

export default function IndustriesSnippet() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2><span className={styles.handUnderline}>Industries</span> We Serve</h2>
          <p>Supplying Kenya's leading industries with packaging and stationery solutions tailored to their needs.</p>
        </div>
        
        <div className={styles.timeline}>
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div key={industry.name} className={styles.industryStop}>
                <div className={styles.iconContainer}>
                  <IconComponent size={40} />
                </div>
                <div className={styles.industryInfo}>
                  <h3>{industry.name}</h3>
                </div>
                {index < industries.length - 1 && (
                  <div className={styles.connector}></div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className={styles.ctaContainer}>
          <Link to="/industries" className={styles.cta}>
            View All Industries
          </Link>
        </div>
      </div>
    </section>
  );
}

