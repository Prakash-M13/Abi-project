import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Reviews />
      <Gallery />
      <ContactSection />
    </>
  );
}

export default Home;