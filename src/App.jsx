import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Consulting from "./pages/Consulting";
import Training from "./pages/Training";
import Certifications from "./pages/Certifications";
import CertificationDetail from "./pages/CertificationDetail";
import Partners from "./pages/Partners";
import Clients from "./pages/Clients";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/training" element={<Training />} />
          <Route path="/certifications" element={<Certifications />} />
		<Route path="/certifications/:id" element={<Certifications />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
