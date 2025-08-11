import React from "react";
import Hero from "../sections/home/Hero";
import HistoryPreview from "../sections/home/HistoryPreview";

import CoreBusiness from "../sections/home/CoreBusiness";

import MiniGallery from "../sections/home/MiniGallery";
import FacilitiesPreview from "../sections/home/FacilitiesPreview";
// import ContactSnippet from "../sections/home/ContactSnippet";

export default function Home() {
  return (
    <>
      <Hero />
      <HistoryPreview />
      
      <CoreBusiness />
      <MiniGallery />
      <FacilitiesPreview />
      {/* <ContactSnippet /> */}
    </>
  );
}
