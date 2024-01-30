import React from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import OurServices from "@/components/OurServices";
import OurWork from "@/components/OurWork";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import "@/styles/globals.css";

const App = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <OurServices />
      <OurWork />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
