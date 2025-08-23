import React from "react";
import SEO from "../components/SEO";
import HistoryHero from "../sections/History/HistoryHero";
import HistoryTimeline from "../sections/History/HistoryTimeline";
import Brands from "../sections/History/Brands";
import MissionValues from "../sections/History/MissionValues";
export default function History() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "History of Paper Converters(K) Ltd",
            "description": "Discover the remarkable journey of Paper Converters(K) Ltd since 1971. From our establishment in Nairobi to becoming a household name across East Africa.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Paper Converters(K) Ltd",
      "foundingDate": "1971",
      "foundingLocation": {
        "@type": "Place",
        "name": "Nairobi, Kenya"
      },
      "description": "Paper Converters(K) Ltd - Leading paper products manufacturer in East Africa with over 50 years of excellence in manufacturing."
    }
  };

  return (
    <>
      <SEO
        title="Our Story | Paper Converters (K) Ltd – A Legacy of Quality Paper & Printing Solutions"
        description="Discover the history of Paper Converters (K) Ltd, a trusted name in Kenya’s paper and printing industry since 1971. Learn about our brands — Robin, Label Craft, and Paper Converters — and our commitment to quality, innovation, and service."
        keywords="Paper Converters history, Paper Converters K Ltd history, Papcon Kenya history, established 1971, Nairobi Kenya, East Africa manufacturing, paper industry history, manufacturing heritage, company timeline, business legacy, industrial development Kenya, paper converter history"
        url="https://papconkenya.magical.africa/history"
        image="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/herogallery.jpg"
        structuredData={structuredData}
      />
      <HistoryHero />
      <HistoryTimeline />
      <Brands />
      <MissionValues />
    </>
  );
}
