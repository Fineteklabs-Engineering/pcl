import React from "react";
import SEO from "../components/SEO";
import ProductsHero from "../sections/products/ProductsHero";
import ComputerStationery from "../sections/products/ComputerStationery";
import Envelopes from "../sections/products/Envelopes";
import BoxFiles from "../sections/products/BoxFiles";
import SelfAdhesiveLabels from "../sections/products/SelfAdhesiveLabels";
import ThermalRolls from "../sections/products/ThermalRolls";

export default function Products() {
  return (
    <>
      <SEO
        title="Our Products | Envelopes, Stationery, Thermal Rolls & Labels | Paper Converters (K) Ltd"
        description="Explore Paper Converters' full range of paper and stationery products, including envelopes, computer stationery, thermal rolls, self-adhesive labels, and Robin office files. Trusted by Kenya's retail, banking, and industrial sectors since 1971."
        url="https://papconkenya.magical.africa/products"
        image="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/herogallery.jpg"
      />
      
      <ProductsHero />
      <ComputerStationery />
      <Envelopes />
      <BoxFiles />
      <SelfAdhesiveLabels />
      <ThermalRolls />
    </>
  );
}

