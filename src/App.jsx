import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import History from "./pages/History";
// import Facilities from "./pages/Facilities";
// import CoreBusinesses from "./pages/CoreBusinesses";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./styles/global.css";
// import CoreBusiness from "./sections/home/CoreBusiness";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          {/* <Route path="/facilities" element={<Facilities />} /> */}
         {/* <Route path="/core-businesses" element={<CoreBusiness />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}
