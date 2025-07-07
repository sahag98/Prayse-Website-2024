"use client";

import { cn } from "@/lib/utils";
import { Merriweather } from "next/font/google";
import Image from "next/image";
import BentoGridDemo from "./bento-grid-demo";
import { useScrollAnimation } from "@/hooks/use-gsap";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "700", "900"],
});

function Benefits() {
  const titleRef = useScrollAnimation({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
  });

  return (
    <div className="">
      <section className="w-full flex items-center justify-center">
        <div className="w-full">
          <div ref={titleRef} className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-medium text-blue-600 mb-4">
              What if one{" "}
              <span className={cn(merriweather.className, "font-bold italic")}>
                simple
              </span>{" "}
              app helped you stay{" "}
              <span className={cn(merriweather.className, "font-bold italic")}>
                consistent
              </span>{" "}
              in prayer?
            </h2>
          </div>
        </div>
      </section>
      <BentoGridDemo />
    </div>
  );
}

export default Benefits;
