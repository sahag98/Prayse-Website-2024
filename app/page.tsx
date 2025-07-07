import DownloadCTA from "@/components/download-cta";
import Hero from "@/components/hero";
import Benefits from "@/components/benefits";
import Section from "@/components/section";
import { Merriweather } from "next/font/google";
import { cn } from "@/lib/utils";
import Features from "@/components/features";

export const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "700", "900"],
});

export default function Home() {
  return (
    <div>
      <div className="container-standard">
        <Hero />
        <div className="md:py-16 py-10">
          <Benefits />
        </div>
      </div>
      <div className="md:py-16 py-10">
        <Features />
      </div>
      <div className="md:py-16 py-10 container-standard">
        <DownloadCTA />
      </div>
    </div>
  );
}
