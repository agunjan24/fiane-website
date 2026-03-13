import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Events />
      <div className="section-divider" />
      <SocialFeed />
      <div className="section-divider" />
      <Gallery />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </>
  );
}
