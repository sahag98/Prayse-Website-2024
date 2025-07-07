"use client";

import React, { useEffect, useRef } from "react";
import ContactForm from "./contact-form";
import { merriweather } from "../page";
import { cn } from "@/lib/utils";
import { Instagram, MailCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Contact info animation
    if (contactInfoRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      const contactElements = contactInfoRef.current.querySelectorAll("a");
      tl.fromTo(
        contactElements,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container-standard bg-background flex md:flex-row flex-col gap-10 my-32">
      <section className="flex-1 flex gap-4 flex-col">
        <div ref={headerRef}>
          <h1
            className={cn(
              "md:text-4xl text-3xl  text-primary font-bold italic mb-3",
              merriweather.className
            )}
          >
            Contact Us
          </h1>
          <p>
            Whether you have a question, a story to share, or a prayer request,
            we&apos;d love to hear from you.
          </p>
        </div>
        <div ref={contactInfoRef} className="space-y-2">
          <a
            href="mailto:contact@prayse.app"
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
          >
            <MailCheck size={35} className="text-primary" />
            <span className="font-medium">contact@prayse.app</span>
          </a>

          <a
            href="https://instagram.com/prayse.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
          >
            <Instagram size={35} className="text-primary" />
            <span className="font-medium">@prayse.app</span>
          </a>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default ContactPage;
