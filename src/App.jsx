// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import AllProjects from "./pages/AllProjects";
import ScrollToTop from "./components/ScrollToTop";

function scrollToWithOffset(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const navOffset = 90; // tinggi navbar (px)
  const y = el.getBoundingClientRect().top + window.scrollY - navOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;

    if (target) {
      const timer = setTimeout(() => {
        scrollToWithOffset(target);
      }, 80);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <AllProjects />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#f5f4ff] overflow-x-hidden">
      <Navbar />
      <ScrollToTop />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
