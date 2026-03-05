import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { StatsBar } from "@/components/home/stats-bar";
import { ServiceSection } from "@/components/home/service-section";
import { QuoteSection } from "@/components/home/quote-section";
import { MotivationSection } from "@/components/home/motivation-section";
import { FaqSection } from "@/components/home/faq-section";
import { ReviewSection } from "@/components/home/review-section";

export const metadata: Metadata = {
  title: "MRE Logistics | Premier Logistics Solutions Pakistan",
  description: "Secure and efficient transport solutions across major hubs and remotes regions in Pakistan. Over 35 years of logistics excellence.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <AboutSection />
      <StatsBar />
      <ServiceSection />
      <QuoteSection />
      <MotivationSection />
      <ReviewSection />
      <FaqSection />
    </div>
  );
}
