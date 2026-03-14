import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
