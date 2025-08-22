import React from "react";
import SEO from "../components/SEO";

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries We Serve | Paper & Label Solutions for Retail, FMCG & Banking – Paper Converters (K) Ltd"
        description="Paper Converters (K) Ltd supplies tailored paper and label solutions to Kenya’s leading industries — from retail and food & beverage to banking, manufacturing, and logistics."
        url="https://papconkenya.magical.africa/industries"
        image="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/herogallery.jpg"
      />
      <section style={{ padding: "48px 16px", maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ marginBottom: 16 }}>Tailored Paper & Packaging Solutions for Every Industry</h1>
        <p style={{ marginBottom: 24 }}>
          We partner with businesses across Retail, Food & Beverage, Manufacturing,
          Banking, Education, and Logistics to supply reliable, branded, and
          compliant paper and labeling solutions.
        </p>
        <ul style={{ lineHeight: 1.9 }}>
          <li>Retail</li>
          <li>Food & Beverage</li>
          <li>Manufacturing</li>
          <li>Banking</li>
          <li>Education</li>
          <li>Logistics</li>
        </ul>
      </section>
    </>
  );
}

