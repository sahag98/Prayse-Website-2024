"use client";

import React, { useEffect, useRef } from "react";
import { FaApple, FaDownload, FaGooglePlay, FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { merriweather } from "@/lib/merriweather-font";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Animate the main container
    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    // Animate text elements with stagger
    if (textRef.current) {
      const textElements = textRef.current.querySelectorAll("h1, p, section");
      tl.fromTo(
        textElements,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        "-=0.4"
      );
    }

    // Animate image with scale effect
    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, rotationY: -15 },
        { opacity: 1, scale: 1, rotationY: 0, duration: 0.8 },
        "-=0.6"
      );
    }

    // Animate buttons
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.querySelectorAll("button");
      tl.fromTo(
        buttons,
        { opacity: 0, y: 0 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=0.4"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="py-24 flex md:flex-row flex-col gap-10 items-center w-full"
    >
      <div className="bg-blue-50 md:flex-row flex-col w-full min-h-full md:p-10 py-10 px-5 flex items-center justify-center gap-10 rounded-2xl">
        <div
          ref={textRef}
          className="flex flex-col flex-1 justify-center md:text-start text-center w-full gap-5"
        >
          <div className="flex w-full flex-col gap-6">
            <section className="flex md:self-start self-center items-center gap-4">
              <div className="flex border border-primary bg-primary/10 rounded-2xl px-2 py-1 items-center gap-2 text-primary">
                <FaStar size={20} className="" />
                <span className=" text-sm">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-primary px-2 py-1">
                <FaDownload size={20} />
                <span className=" text-sm">1000+ Downloads</span>
              </div>
            </section>
            <h1 className="md:text-5xl flex flex-col gap-2 text-4xl text-primary italic font-medium">
              <span className="">
                Stay{" "}
                <span
                  className={cn(merriweather.className, "font-bold italic")}
                >
                  Rooted
                </span>{" "}
                in Prayer.
              </span>
              {/* <br /> */}
              <span className={cn(merriweather.className, "font-bold italic")}>
                Everyday.
              </span>
            </h1>
            <p className="md:text-lg italic text-foreground/75 font-medium">
              Prayse helps you organize, remember, and commit to meaningful
              moments with God, no matter how busy life gets.
            </p>
          </div>
          <div
            ref={buttonsRef}
            className="flex items-center  md:justify-normal justify-center flex-1 gap-3"
          >
            <Link
              target="_blank"
              href={"https://apps.apple.com/us/app/prayseapp/id6443480347"}
            >
              <button className="flex bg-primary text-primary-foreground rounded-xl px-4 py-2 items-center gap-1 hover:scale-105 transition-transform duration-200">
                <FaApple size={40} />
                <section className="flex flex-col items-start">
                  <p className="text-xs">Download on the</p>
                  <p className="text-base font-bold italic">App Store</p>
                </section>
              </button>
            </Link>
            <Link
              target="_blank"
              href={
                "https://play.google.com/store/apps/details?id=com.sahag98.prayerListApp&hl=en_US&gl=US"
              }
            >
              <button className="flex bg-primary text-primary-foreground rounded-xl px-4 py-2 items-center gap-1 hover:scale-105 transition-transform duration-200">
                <FaGooglePlay size={30} />
                <section className="flex flex-col items-start">
                  <p className="text-xs">Get it one</p>
                  <p className="text-base font-bold italic">Google Play</p>
                </section>
              </button>
            </Link>
            {/* <Button className="flex flex-col font-bold">
            <p className="text-sm">Download on the</p>
            <p className="text-base">App Store</p>
          </Button>
          <Button className="text-base flex flex-col items-start justify-start font-bold">
            <p className="text-sm">Get it on</p>
            <p className="text-base">Google Play</p>
          </Button> */}
          </div>
        </div>
        <div
          ref={imageRef}
          className="flex items-center h-full justify-center flex-1"
        >
          <Image
            src={"/mockup.png"}
            alt="Prayse home screen"
            className="md:w-[300px] w-3/4 md:flex shadow-xl shadow-gray-200 rounded-2xl"
            width={1179}
            height={2369}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
