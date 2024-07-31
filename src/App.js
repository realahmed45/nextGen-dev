import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./componenets/Home/Home";

import PublicNavbar from "./componenets/Navbar/PublicNavbar";
import Services from "./componenets/Services/services";
import Footer from "./componenets/Footer/footer";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <PublicNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}
