import React from "react";
import SEO from "../components/SEO";
import HistoryHero from "../sections/History/HistoryHero";
import HistoryTimeline from "../sections/History/HistoryTimeline";
import MembershipSection from "../sections/History/MembershipSection";
export default function History() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "History of Paper Converters(K) Ltd",
    "description": "Discover the remarkable journey of Paper Converters(K) Ltd since 1971. From our establishment in Mombasa to becoming a household name across East Africa.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Paper Converters(K) Ltd",
      "foundingDate": "1971",
      "foundingLocation": {
        "@type": "Place",
        "name": "Mombasa, Kenya"
      },
      "description": "Paper Converters(K) Ltd - Leading paper products manufacturer in East Africa with over 50 years of excellence in manufacturing."
    }
  };

  return (
    <>
      <SEO
        title="Our History - Paper Converters(K) Ltd Since 1971"
        description="Discover the remarkable journey of Paper Converters(K) Ltd since 1971. From our establishment in Mombasa to becoming a household name across East Africa. Learn our story of manufacturing excellence."
        keywords="Paper Converters history, Paper Converters K Ltd history, Papcon Kenya history, established 1971, Mombasa Kenya, East Africa manufacturing, paper industry history, manufacturing heritage, company timeline, business legacy, industrial development Kenya, paper converter history"
        url="https://papconkenya.magical.africa/history"
        image="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/herogallery.jpg"
        structuredData={structuredData}
      />
      <HistoryHero />
      <HistoryTimeline />
      <MembershipSection />
    </>
  );
}
