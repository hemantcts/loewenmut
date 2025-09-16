import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/style.css";
import "./styles/responsive.css";
import Angebot from "./pages/Angebot";
import Uberuns from "./pages/Uberuns";
import Kompetenzen from "./pages/Kompetenzen";
import Blog from "./pages/Blog";
import SingleAngebot from "./pages/SingleAngebot";
import SingleKompetenzen from "./pages/SingleKompetenzen";
import SingleBlog from "./pages/SingleBlog";
import Referenzen from "./pages/Referenzen";
import SingleReferenzen from "./pages/SingleReferenzen";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import VielenDank from "./pages/VielenDank";
import ScrollToTop from "./components/ScrollToTop";
import Error from "./pages/Error";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      disable: function () {
        return window.innerWidth < 1200;
      },
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        {/* Navigation */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ueber-uns" element={<Uberuns />} />
          <Route path="/angebot" element={<Angebot />} />
          <Route path="/angebot-detail" element={<SingleAngebot />} />
          <Route path="/kompetenzen" element={<Kompetenzen />} />
          <Route path="/kompetenzen-detail" element={<SingleKompetenzen />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail" element={<SingleBlog />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/referenzen-detail" element={<SingleReferenzen />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschtuz" element={<Datenschutz />} />
          <Route path="/vielen-dank" element={<VielenDank />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

