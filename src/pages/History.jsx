import React from "react";
import HistoryHero from "../sections/History/HistoryHero";

import HistoryTimeline from "../sections/History/HistoryTimeline";
import MembershipSection from "../sections/History/MembershipSection";
export default function History() {
  return (
    <>
      <HistoryHero />
    
      <HistoryTimeline />
      <MembershipSection />
    </>
  );
}
