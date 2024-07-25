import HeroSection from "@/components/custom/hero-section";
import MacbookScroll from "@/components/custom/macbook-scroll";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] dark">
        <HeroSection />
        {/* <MacbookScroll /> */}
      </main>
    </>
  );
}
