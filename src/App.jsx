import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import LeftRail from "./components/LeftRail";
import DotCursor from "./components/DotCursor";
import GradientBackground from "./components/GradientBackground";


const App = () => {
  return (
    <div className=" text-black font-poppins">
      <GradientBackground />
      <DotCursor />
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
