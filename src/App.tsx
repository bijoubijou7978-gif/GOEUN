/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarketingCycle from "./components/MarketingCycle";
import MarketingChannels from "./components/MarketingChannels";
import PainPoints from "./components/PainPoints";
import TrustIndicators from "./components/TrustIndicators";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-coral/30 selection:text-navy">
      <Navbar />
      <main>
        <Hero />
        <MarketingCycle />
        <MarketingChannels />
        <PainPoints />
        <TrustIndicators />
        <section id="portfolio">
          <Portfolio />
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

