import React from "react";
import SEO from "../components/SEO";
import HistoryHero from "../sections/History/HistoryHero";
import HistoryTimeline from "../sections/History/HistoryTimeline";
import MembershipSection from "../sections/History/MembershipSection";
export default function History() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "History of Papcon Kenya",
    "description": "Discover the remarkable journey of Papcon Kenya since 1971. From our establishment in Mombasa to becoming a household name across East Africa.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Papcon Kenya",
      "foundingDate": "1971",
      "foundingLocation": {
        "@type": "Place",
        "name": "Mombasa, Kenya"
      },
      "description": "Leading paper products manufacturer in East Africa with over 50 years of excellence in manufacturing."
    }
  };

  return (
    <>
      <SEO
        title="Our History - Papcon Kenya Since 1971"
        description="Discover the remarkable journey of Papcon Kenya since 1971. From our establishment in Mombasa to becoming a household name across East Africa. Learn our story of manufacturing excellence."
        keywords="Papcon Kenya history, established 1971, Mombasa Kenya, East Africa manufacturing, paper industry history, manufacturing heritage, company timeline, business legacy, industrial development Kenya"
        url="https://papconkenya.com/history"
        image="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/herogallery.jpg"
        structuredData={structuredData}
      />
      <HistoryHero />
      <HistoryTimeline />
      <MembershipSection />
    </>
  );
}
