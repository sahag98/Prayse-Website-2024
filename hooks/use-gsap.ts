"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAP = () => {
  const elementRef = useRef<HTMLElement>(null);

  const fadeInUp = (delay = 0, duration = 0.8, ease = "power2.out") => {
    return {
      y: 50,
      opacity: 0,
      duration,
      delay,
      ease,
    };
  };

  const fadeInLeft = (delay = 0, duration = 0.8, ease = "power2.out") => {
    return {
      x: -50,
      opacity: 0,
      duration,
      delay,
      ease,
    };
  };

  const fadeInRight = (delay = 0, duration = 0.8, ease = "power2.out") => {
    return {
      x: 50,
      opacity: 0,
      duration,
      delay,
      ease,
    };
  };

  const scaleIn = (delay = 0, duration = 0.8, ease = "back.out(1.7)") => {
    return {
      scale: 0.8,
      opacity: 0,
      duration,
      delay,
      ease,
    };
  };

  const staggerChildren = (stagger = 0.1, delay = 0) => {
    return {
      stagger,
      delay,
    };
  };

  return {
    elementRef,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerChildren,
  };
};

export const useScrollAnimation = (
  animation: any,
  trigger: string = "top 80%",
  start: string = "top 80%",
  end: string = "bottom 20%",
  toggleActions: string = "play none none reverse"
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    gsap.fromTo(element, animation.from || { opacity: 0, y: 50 }, {
      ...(animation.to || { opacity: 1, y: 0 }),
      scrollTrigger: {
        trigger: element,
        start,
        end,
        toggleActions,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animation, trigger, start, end, toggleActions]);

  return elementRef;
};

export const useStaggerAnimation = (
  selector: string,
  animation: any,
  stagger: number = 0.1,
  delay: number = 0
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(selector);

    gsap.fromTo(elements, animation.from || { opacity: 0, y: 30 }, {
      ...(animation.to || { opacity: 1, y: 0 }),
      stagger,
      delay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, animation, stagger, delay]);

  return containerRef;
};
