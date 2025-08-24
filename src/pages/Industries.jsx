import React from "react";
import SEO from "../components/SEO";
import IndustriesHero from "../sections/industries/IndustriesHero";
import RetailSector from "../sections/industries/RetailSector";
import FoodBeverage from "../sections/industries/FoodBeverage";
import ManufacturingLogistics from "../sections/industries/ManufacturingLogistics";
import BankingFinancial from "../sections/industries/BankingFinancial";
import PrintingEducation from "../sections/industries/PrintingEducation";
import IndustriesCTA from "../sections/industries/IndustriesCTA";

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries We Serve | Paper & Label Solutions for Retail, FMCG & Banking – Paper Converters (K) Ltd"
        description="Paper Converters (K) Ltd supplies tailored paper and label solutions to Kenya's leading industries — from retail and food & beverage to banking, manufacturing, and logistics."
        url="https://papconkenya.magical.africa/industries"
        image="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/herogallery.jpg"
      />
      <IndustriesHero />
      <RetailSector />
      <FoodBeverage />
      <ManufacturingLogistics />
      <BankingFinancial />
      <PrintingEducation />
      <IndustriesCTA />
    </>
  );
}

