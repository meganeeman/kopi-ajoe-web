import Image from "next/image";
import SequenceScroll from "@/components/SequenceScroll";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import BentoGrid from "@/components/BentoGrid";
import Stats from "@/components/Stats";
import Locations from "@/components/Locations";
import ProductShowcase from "@/components/ProductShowcase";
import RealWorldExperience from "@/components/RealWorldExperience";
import ModelShowcase from "@/components/ModelShowcase";
import Testimonials from "@/components/Testimonials";
import Journey from "@/components/Journey";
import Stories from "@/components/Stories";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Scroll Sequence */}
      <SequenceScroll />

      {/* Content Sections - Overlapping the end of the scroll sequence */}
      <div className="relative z-10 -mt-[100vh] bg-black shadow-[0_-50px_100px_rgba(0,0,0,1)]">
        <About />
        <BentoGrid />
        <Stats />
        <Locations />
        <ProductShowcase />
        <RealWorldExperience />
        <ModelShowcase />
        <Testimonials />
        <Journey />
        <Stories />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
