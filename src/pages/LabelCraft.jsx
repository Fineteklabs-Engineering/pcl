import React from "react";
import SEO from "../components/SEO";
import LabelCraftHero from "../sections/labelcraft/LabelCraftHero";
import TechnologyQuality from "../sections/labelcraft/TechnologyQuality";
import IndustriesServed from "../sections/labelcraft/IndustriesServed";
import WhyChoose from "../sections/labelcraft/WhyChoose";
import LabelCraftCTA from "../sections/labelcraft/LabelCraftCTA";
import ProductRange from "../sections/labelcraft/ProductRange";






export default function LabelCraft() {
  return (
    <>
      <SEO
        title="Label Craft Kenya | Custom Printed Labels & Stickers – Paper Converters (K) Ltd"
        description="Label Craft is Kenya’s specialist in high-quality self-adhesive labels and stickers. We provide custom printed labels for FMCG, cosmetics, pharmaceuticals, and industrial use — powered by flexographic printing technology."
        url="https://papconkenya.magical.africa/label-craft"
        image="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/herogallery.jpg"
      />
      <LabelCraftHero />
      
      <ProductRange />
      <TechnologyQuality />
      
    
     
      <IndustriesServed />
      <WhyChoose />
     
      <LabelCraftCTA />
    </>
  );
}

