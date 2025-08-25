import React from "react";
import SEO from "../components/SEO";
import Hero from "../sections/home/Hero";
import HistoryPreview from "../sections/home/HistoryPreview";
import CoreBusiness from "../sections/home/CoreBusiness";

import Capabilities from "../sections/home/Capabilities";
import FacilitiesPreview from "../sections/home/FacilitiesPreview";
import ContactSnippet from "../sections/home/ContactSnippet";
import FeaturedProducts from "../sections/home/FeaturedProducts";
import IndustriesSnippet from "../sections/home/IndustriesSnippet";
import Brands from "../sections/home/Brands";
import TrustSignals from "../sections/home/TrustSignals";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Paper Converters(K) Ltd",
    "alternateName": "Papcon Kenya",
    "description": "Paper Converters(K) Ltd - Leading paper products manufacturer in East Africa since 1971, specializing in high-quality paper products and manufacturing excellence.",
    "url": "https://papconkenya.magical.africa",
    "logo": "https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/footer-logo.png",
    "foundingDate": "1971",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Industrial Area on Olesoi Rd",
      "addressLocality": "Nairobi",
      "addressCountry": "Kenya",
      "addressRegion": "Nairobi"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254 700 000 000",
      "contactType": "customer service",
      "email": "info@papconkenya.com"
    },
    "sameAs": [
    
      "https://facebook.com/papconkenya",
      "https://twitter.com/papconkenya",
      "https://linkedin.com/company/papconkenya"
    ]
  };

  return (
    <>
      <SEO
        title="Paper Converters (K) Ltd | Kenya’s Premier Manufacturer of Envelopes, Stationery & Labels | Established in 1971 • Nairobi, Kenya"
        description="Paper Converters (K) Ltd is a trusted Kenyan manufacturer of computer stationery, thermal rolls, envelopes, office files, and self-adhesive labels. Serving East Africa’s retail, industrial, and FMCG sectors since 1971. Reliable supply, custom solutions, and fast delivery you can count on."
        keywords="Paper Converters, Paper Converters K Ltd, Paper Converters Kenya, Papcon Kenya, paper manufacturer, East Africa manufacturing, quality paper products, Nairobi industry, paper supplier Kenya, manufacturing excellence, industrial paper, paper production facilities, paper converter, paper conversion"
        url="https://papconkenya.magical.africa"
        image="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/herogallery.jpg"
        structuredData={structuredData}
      />
      <Hero />
      <HistoryPreview />
      <CoreBusiness />
      <IndustriesSnippet />
      <FeaturedProducts />
      
      <Brands />
    
     
      
      <Capabilities />
      <FacilitiesPreview />
      <TrustSignals />
      <ContactSnippet />
    </>
  );
}
