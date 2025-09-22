import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Plans from "./components/Plans";
import Gallery from "./components/Gallery";
import QuoteForm from "./components/QuoteForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-blue-25">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Plans />
      <Gallery />
      <QuoteForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
