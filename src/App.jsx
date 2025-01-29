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
import { Footer } from "./components/footer/footer";
import { Handles } from "./components/handles/handles";

import { useEffect, useState } from "react";
import ContactModal from "./components/contact-section/contact-model";

function AppContent() {
  const location = useLocation();
  const excludePaths = ["/services", "/windows", "/doors", "/contact", "/about-us", "/handles"];
  const showDefaultContent = !excludePaths.includes(location.pathname);
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  useEffect(() => {
    console.log("isOpen state changed:", isOpen);
}, [isOpen]);  

  return (
    <>

      <Navbar setIsOpen={setIsOpen} /> {/* ✅ Pass setIsOpen as a prop */}
      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} /> {/* ✅ Pass to Modal */}


      <div className="main-content">
        {showDefaultContent && (
          <>
            <HeroSection />
            <About />
            <Services />
          </>
        )}

        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<ServiceDetails />} />
          <Route path="/windows" element={<Windows />} />
          <Route path="/doors" element={<Doors />} />
          <Route path="/handles" element={<Handles />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>


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
