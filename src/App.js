import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LuxuryHolidaysPage from "./pages/LuxuryHoliday/LuxuryHolidaysPage"; 
import WildlifeHolidaysPage from "./pages/WildLlfeHoliday/WildlifeHolidaysPage";
import CruiseHolidaysPage from "./pages/CruiseHoliday/CruiseHolidaysPage";
import IndiaHolidaysPage from "./pages/IndianHoliday/IndiaHolidaysPage";
import InternationalHolidaysPage from "./pages/InternationalHoliday/InternationalHolidaysPage";
import WeekendGetawaysPage from "./pages/WeekendHoliday/WeekendGetawaysPage";
import HoneymoonPackagesPage from "./pages/HoneyMoon/HoneymoonPackagesPage";
import CorporateTravelPage from "./pages/Corporate/CorporateTravelPage";
import BlogPage from "./pages/Blog/BlogPage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import AboutUsPage from "./pages/About us/AboutUsPage";
import ContactUsPage from "./pages/Contact us/ContactUsPage";
import TestimonialsPage from "./pages/Testimonials/TestimonialsPage";
import EnquiryFormPage from "./pages/EnquiryForm/EnquiryFormPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/luxury-holidays" element={<LuxuryHolidaysPage />} />
        <Route path="/wildlife-holidays" element={<WildlifeHolidaysPage />} />
        <Route path="/cruise-holidays" element={<CruiseHolidaysPage />} />
        <Route path="/india-holidays" element={<IndiaHolidaysPage />} />
        <Route path="/international-holidays" element={<InternationalHolidaysPage />} />
        <Route path="/weekend-getaways" element={<WeekendGetawaysPage />} />
        <Route path="/honeymoon-packages" element={<HoneymoonPackagesPage />} />
        <Route path="/corporate-travel" element={<CorporateTravelPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/enquiry" element={<EnquiryFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
