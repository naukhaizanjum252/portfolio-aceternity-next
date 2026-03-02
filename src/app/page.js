import nextDynamic from "next/dynamic";
import HeroSection from "@/components/custom/hero-section";
import ContactUs from "./pages/contact-us";
import Testimonials from "./pages/testimonials";
import ShortFormContent from "./pages/short-form-content";
import LongFormContent from "./pages/long-form-content";
import { VideoCard } from "@/components/custom/card";
import TopPerformingVideos from "./pages/top-performing-videos";

const NewPortfolioLayout = nextDynamic(
  () => import("@/components/new-layout/NewPortfolioLayout"),
  { ssr: false }
);

// Force dynamic so env is read on every request (avoids cached static page with old env)
export const dynamic = "force-dynamic";

function useNewLayout(searchParams) {
  const raw = process.env.NEXT_PUBLIC_NEW_LAYOUT || "";
  const fromEnv = raw === "true" || raw.toLowerCase() === "true" || raw === "1";
  const fromUrl = searchParams?.new_layout === "1";
  return fromEnv || fromUrl;
}

export default function Home({ searchParams = {} }) {
  if (useNewLayout(searchParams || {})) {
    return <NewPortfolioLayout />;
  }

  return (
    <>
      <main className=" min-h-screen bg-black antialiased bg-grid-white/[0.02] dark">
        <HeroSection />
        {/* <MacbookScroll /> */}
        {/* <div className="flex  justify-center p-4">
          {[1, 2, 3, 4].map((e) => (
            <BackgroundGradient>{e}</BackgroundGradient>
          ))}
        </div> */}
        {/* <ThreeDCard /> */}
        {/* <StickyScrollReveal /> */}

        <section id="top-performing-videos">
          <TopPerformingVideos />
        </section>
        <section id="short-form-content">
          <ShortFormContent />
        </section>
        <section id="long-form-content">
          <LongFormContent />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact-us">
          <ContactUs />
        </section>
      </main>
    </>
  );
}
