import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import SequenceScroll from "@/components/SequenceScroll";

const About = dynamic(() => import("@/components/About"));
const BentoGrid = dynamic(() => import("@/components/BentoGrid"));
const Stats = dynamic(() => import("@/components/Stats"));
const Locations = dynamic(() => import("@/components/Locations"));
const ProductShowcase = dynamic(() => import("@/components/ProductShowcase"));
const RealWorldExperience = dynamic(() => import("@/components/RealWorldExperience"));
const ModelShowcase = dynamic(() => import("@/components/ModelShowcase"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Journey = dynamic(() => import("@/components/Journey"));
const Stories = dynamic(() => import("@/components/Stories"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

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
