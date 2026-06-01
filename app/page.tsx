import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import AnswerBlock from "@/components/sections/AnswerBlock";
import PainPoints from "@/components/sections/PainPoints";
import Services from "@/components/sections/Services";
import Demo from "@/components/sections/Demo";
import HowItWorks from "@/components/sections/HowItWorks";
import Industries from "@/components/sections/Industries";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";

import ConsentBanner from "@/components/ConsentBanner";
import BookingPopup from "@/components/BookingPopup";
import RetellWidget from "@/components/RetellWidget";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ScrollDepth from "@/components/ScrollDepth";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AnswerBlock />
        <PainPoints />
        <Services />
        <Demo />
        <HowItWorks />
        <Industries />
        <WhyChooseUs />
        <FAQ />
        <Contact />
        <About />
      </main>
      <Footer />

      {/* Global client integrations */}
      <ConsentBanner />
      <BookingPopup />
      <RetellWidget />
      <StickyMobileCTA />
      <ScrollDepth />
    </>
  );
}
