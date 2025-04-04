import About from "@/components/About";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dahab Agency",
  description: "Dahab Agency for Business Development, every available options to make your busniness bigger",
};

export default function Home() {


  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <Faq />
      <Pricing />
      <Contact />
      
    </main>
  );
}
