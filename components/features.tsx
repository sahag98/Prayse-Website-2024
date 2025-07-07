"use client";

import React from "react";
import Section from "./section";
import { cn } from "@/lib/utils";
import { merriweather } from "@/lib/merriweather-font";
import { useScrollAnimation } from "@/hooks/use-gsap";

const Features = () => {
  const titleRef = useScrollAnimation({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
  });

  return (
    <div className=" ">
      <div ref={titleRef} className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl text-balance font-medium text-blue-600 mb-4">
          Tools to{" "}
          <span className={cn(merriweather.className, "font-bold italic")}>
            strengthen
          </span>{" "}
          your {""}
          <span className={cn(merriweather.className, "font-bold italic")}>
            prayer
          </span>{" "}
          life
        </h2>
      </div>
      <Section
        title="Create Prayer Lists"
        className="text-primary md:text-left text-center pt-0 container-standard"
        description=" Easily organize your prayers in one place. Add, edit, and manage your
          prayer requests effortlessly, ensuring you never forget to pray for
          someone or something important."
        imageUrl="/prayer-list.png"
      />
      <Section
        title="Setup Reminders"
        description="Stay consistent with your prayer life by setting customizable reminders. Get gentle nudges to pray throughout your day, tailored to your schedule."
        className={
          "bg-blue-50 container-standard md:text-left text-center text-primary md:flex-row-reverse"
        }
        imageUrl="/reminders.png"
      />
      <Section
        title="Take a Moment and Pray"
        description="Find peace in the moment with a dedicated prayer space. Pause, reflect, and connect spiritually through our guided prayer prompts."
        className={"text-primary md:text-left text-center container-standard"}
        imageUrl="/prayer-room.png"
      />
      <Section
        title="Read the Daily Verse"
        description="Start your day inspired by Scripture. Discover a handpicked Bible verse each day to uplift and encourage your faith journey."
        imageUrl="/verse.png"
        className="md:flex-row-reverse md:text-left text-center container-standard bg-blue-50 text-primary"
      />
    </div>
  );
};

export default Features;
