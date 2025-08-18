import React from "react";
import SEO from "../components/SEO";
import Hero from "../sections/home/Hero";
import HistoryPreview from "../sections/home/HistoryPreview";
import CoreBusiness from "../sections/home/CoreBusiness";
import MiniGallery from "../sections/home/MiniGallery";
import Capabilities from "../sections/home/Capabilities";
import FacilitiesPreview from "../sections/home/FacilitiesPreview";
import ContactSnippet from "../sections/home/ContactSnippet";

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
      "addressLocality": "Mombasa",
      "addressCountry": "Kenya",
      "addressRegion": "Coast"
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
        title="Paper Converters(K) Ltd - Leading Paper Products Manufacturer in East Africa Since 1971"
        description="Discover Paper Converters(K) Ltd's excellence in paper manufacturing since 1971. Based in Mombasa, we deliver premium paper products, world-class facilities, and innovative solutions across East Africa."
        keywords="Paper Converters, Paper Converters K Ltd, Paper Converters Kenya, Papcon Kenya, paper manufacturer, East Africa manufacturing, quality paper products, Mombasa industry, paper supplier Kenya, manufacturing excellence, industrial paper, paper production facilities, paper converter, paper conversion"
        url="https://papconkenya.magical.africa"
        image="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/herogallery.jpg"
        structuredData={structuredData}
      />
      <Hero />
      <HistoryPreview />
      <CoreBusiness />
      <MiniGallery />
      <Capabilities />
      <FacilitiesPreview />
      <ContactSnippet />
    </>
  );
}
