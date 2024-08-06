import { ThreeDCard } from "@/components/custom/3d-card";
import { ThreeDPin } from "@/components/custom/3d-pin";
import BackgroundGradient from "@/components/custom/background-gradient";
import HeroParallax from "@/components/custom/hero-parallex";
import HeroSection from "@/components/custom/hero-section";
import InfiniteMovingCards from "@/components/custom/infinite-moving-cards";
import MacbookScroll from "@/components/custom/macbook-scroll";
import ContactUs from "./pages/contact-us";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] dark">
        <HeroSection />
        <HeroParallax />
        <MacbookScroll />
        <div className="flex  justify-center p-4">
          {[1, 2, 3, 4].map((e) => (
            <BackgroundGradient>{e}</BackgroundGradient>
          ))}
        </div>
        <ThreeDCard />
        <InfiniteMovingCards />
        {/* use multiple of these pins render contact us and add upwork, whatsapp etc */}
        <section id="contact-us">
          <ContactUs />
        </section>
      </main>
    </>
  );
}
