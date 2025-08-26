/** @format */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import Technologies from "./components/Technologies";
import Results from "./components/Results";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-screen bg-facss-dark">
      <Header />
      <main className="w-full bg-facss-dark flex flex-col items-center justify-center">
        <Hero />
        <TrustedBy />
        <Features />
        <Technologies />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
