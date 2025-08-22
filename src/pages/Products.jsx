import React from "react";
import SEO from "../components/SEO";

export default function Products() {
  return (
    <>
      <SEO
        title="Our Products | Envelopes, Stationery, Thermal Rolls & Labels | Paper Converters (K) Ltd"
        description="Explore Paper Converters’ full range of paper and stationery products, including envelopes, computer stationery, thermal rolls, self-adhesive labels, and Robin office files. Trusted by Kenya’s retail, banking, and industrial sectors since 1971."
        url="https://papconkenya.magical.africa/products"
        image="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/herogallery.jpg"
      />
      <section style={{ padding: "48px 16px", maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ marginBottom: 16 }}>Comprehensive Paper & Stationery Product Range</h1>
        <p style={{ marginBottom: 24 }}>
          At Paper Converters (K) Ltd, we offer a wide portfolio of paper and
          stationery solutions for businesses across East Africa. From everyday
          office essentials to specialized commercial products, our manufacturing
          is backed by 50+ years of expertise, continuous investment in modern
          equipment, and a commitment to reliability, flexibility, and quality.
        </p>

        <ul style={{ lineHeight: 1.9 }}>
          <li>Computer Stationery</li>
          <li>Envelopes (Robin Brand)</li>
          <li>Box Files (Robin Brand)</li>
          <li>Self-Adhesive Labels (Label Craft)</li>
          <li>Thermal Rolls</li>
          <li>Spring Files & Document Wallets</li>
          <li>Exercise Book Covers</li>
          <li>Commercial Printing Services</li>
        </ul>
      </section>
    </>
  );
}

