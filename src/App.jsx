import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import LeftRail from "./components/LeftRail";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";


const App = () => {
  return (
    <div className="bg-white text-black font-poppins">
      <div className="flex">
        <LeftRail />
        <main className="flex-1">
          <ScrollProgressBar />
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
