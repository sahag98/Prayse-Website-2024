import DownloadCTA from "@/components/download-cta";
import Hero from "@/components/hero";
import Benefits from "@/components/benefits";
import { merriweather } from "@/lib/merriweather-font";
import Features from "@/components/features";

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
