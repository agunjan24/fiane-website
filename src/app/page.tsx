import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroCarousel from "@/components/HeroCarousel";
import IndiaDayParade from "@/components/IndiaDayParade";
import Freedom250 from "@/components/Freedom250";
import SocialCarousel from "@/components/SocialCarousel";
import About from "@/components/About";
import Events from "@/components/Events";
import SocialFeed from "@/components/SocialFeed";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroCarousel />
      <IndiaDayParade />
      <Freedom250 />
      <SocialCarousel />
      <About />
      <Events />
      <SocialFeed />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
