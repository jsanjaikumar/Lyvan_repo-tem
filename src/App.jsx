import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import VoiceProcessPage from "./pages/VoiceProcessPage";

const BODY_CLASS_BY_PATH = {
  "/": "index-page",
  "/about": "about-page",
  "/service": "service-details-page",
  "/portfolio": "portfolio-page",
  "/contact": "contact-page",
  "/voiceprocess": "voiceprocess-page",
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    document.body.className =
      BODY_CLASS_BY_PATH[location.pathname] ?? "index-page";
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-shell d-flex flex-column">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/voiceprocess" element={<VoiceProcessPage />} />
      </Routes>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
