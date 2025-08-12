import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import History from "./pages/History";
// import Facilities from "./pages/Facilities";
// import CoreBusinesses from "./pages/CoreBusinesses";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";
import "./styles/global.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/history" element={<History />} /> */}
        {/* <Route path="/facilities" element={<Facilities />} /> */}
        {/* <Route path="/core-businesses" element={<CoreBusinesses />} /> */}
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
