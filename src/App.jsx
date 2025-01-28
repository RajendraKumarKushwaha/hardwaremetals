// App.js
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { HeroSection } from "./components/hero-section/hero-section";
import { Services } from "./components/services/services";
import { Navbar } from "./components/navbar/navbar";
import { Windows } from "./components/windows-section/windows";
import { Contact } from "./components/contact-section/contact";
import { Doors } from "./components/doors/doors";
import { About } from "./components/about/about";
import { AboutUs } from "./components/about/about-us";
import { ServiceDetails } from "./components/services/service-details";

function AppContent() {
  const location = useLocation();

  // List of paths where HeroSection and About should NOT be shown
  const excludePaths = ["/services", "/windows", "/doors", "/contact", "/about-us"];
  const showDefaultContent = !excludePaths.includes(location.pathname);

  return (
    <>
      <Navbar />
      {showDefaultContent && (
        <>
          <HeroSection />
          <About />
          <Services/>
        </>
      )}
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<ServiceDetails />} />
        <Route path="/windows" element={<Windows />} />
        <Route path="/doors" element={<Doors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
