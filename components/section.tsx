"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
          // markers: true, // Uncomment for debugging
        },
      });

      tl.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power2.out",
      }).from(
        imageRef.current,
        {
          opacity: 0,
          x: 50,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div
      ref={sectionRef}
      className={clsx(
        "min-h-screen flex flex-col md:py-0 md:gap-0 gap-5 py-10 md:flex-row w-full items-center justify-center lg:px-44 md:px-36 sm:px-7 px-4",
        className
      )}
    >
      <section ref={textRef} className="flex-1 space-y-3">
        <h2 className="font-bold md:w-2/3 md:text-5xl text-3xl">{title}</h2>
        <p className="md:w-2/3">{description}</p>
      </section>
      <section
        ref={imageRef}
        className="flex-1 flex items-center justify-center"
      >
        <Image
          src={imageUrl}
          alt="Section Image"
          className="md:w-1/2 w-4/5 border-[#2f2d51] border rounded-2xl"
          width={1179}
          height={2369}
        />
      </section>
    </div>
  );
};

export default Section;
