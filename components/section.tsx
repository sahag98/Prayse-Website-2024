"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { cn } from "@/lib/utils";
import { merriweather } from "@/app/page";

gsap.registerPlugin(ScrollTrigger);

const Section = ({
  title,
  description,
  className,
  imageUrl,
}: {
  title: string;
  description: string;
  className?: string;
  imageUrl: string;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      ).fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div
      ref={sectionRef}
      className={clsx(
        " md:py-16 py-10 flex flex-col md:gap-0 gap-5 md:flex-row w-full items-center justify-center",
        className
      )}
    >
      <section ref={textRef} className="flex-1 space-y-3">
        <h2
          className={cn(
            merriweather.className,
            "font-bold md:w-2/3 italic md:text-4xl text-2xl"
          )}
        >
          {title}
        </h2>
        <p className="md:w-2/3 text-foreground">{description}</p>
      </section>
      <section
        ref={imageRef}
        className="flex-1 flex items-center justify-center"
      >
        <Image
          src={imageUrl}
          alt="Section Image"
          className="md:w-1/2 w-4/5  rounded-2xl"
          width={1179}
          height={2369}
        />
      </section>
    </div>
  );
};

export default Section;
