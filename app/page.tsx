import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChoose from "@/components/WhyChoose";
import FaceHarmonization from "@/components/FaceHarmonization";
import Confidence from "@/components/Confidence";
import BrandLogos from "@/components/BrandLogos";
import Reels from "@/components/Reels";
import ImplantSystems from "@/components/ImplantSystems";
import Testimonials from "@/components/Testimonials";
import Blogs from "@/components/Blogs";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <Hero />
      <BrandLogos />
      <Gallery />
      <Confidence />
      <Services />
      <ImplantSystems />
      <Reels />
      <About />
      <WhyChoose />
      <Testimonials />
      <FaceHarmonization />
      <Blogs />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCall />
    </main>
  );
}
