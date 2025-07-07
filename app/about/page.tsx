"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { merriweather } from "../page";
import { MarqueeDemo } from "@/components/verse-scroll";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TimelineDemo } from "@/components/timeline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const questionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Team section animation
    if (teamRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      const teamElements = teamRef.current.querySelectorAll(
        "h2, p, .team-member"
      );
      tl.fromTo(
        teamElements,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "expo.out" }
      );
    }

    // Question section animation
    if (questionRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: questionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      const questionElements =
        questionRef.current.querySelectorAll("h2, p, button");
      tl.fromTo(
        questionElements,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.9, stagger: 0.1, ease: "linear" }
      );
    }

    // CTA section animation
    if (ctaRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      const ctaElements = ctaRef.current.querySelectorAll("h2, p, button");
      tl.fromTo(
        ctaElements,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.9, stagger: 0.1, ease: "linear" }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="">
      <div ref={headerRef} className="flex items-center flex-col">
        <section className="flex flex-col mt-24 items-center">
          <h1
            className={cn(
              "md:text-4xl text-3xl  text-primary font-bold italic mb-3",
              merriweather.className
            )}
          >
            Our Story
          </h1>
          <p className="font-medium text-center text-lg">By Sahag A. Founder</p>
        </section>
        <TimelineDemo />
      </div>
      {/* <div className="min-h-screen my-24 lg:px-44 flex flex-col items-center md:px-36 sm:px-7 px-4">
        <h1
          className={cn(
            "md:text-4xl text-3xl text-primary font-bold italic mb-3",
            merriweather.className
          )}
        >
          Our Story
        </h1>
        <p className="font-medium text-lg">By Sahag A. Founder</p>
        <div className="flex md:flex-row flex-col md:mt-0 mt-10 justify-between items-start">
          <h2 className="flex-[0.5] md:text-3xl text-2xl font-medium text-primary text-center ">
            Where it all{" "}
            <span className={cn(merriweather.className, "italic font-bold")}>
              Started
            </span>
          </h2>
          <div className="flex-1 mt-5 space-y-3">
            <p>
              During the summer of 2022, I was attending a bible study at my
              church,{" "}
              <a
                target="_blank"
                className="font-medium text-blue-600"
                href="https://www.findnewlife.church/"
              >
                New Life Church
              </a>
              . The study reached a point where the teacher began taking prayer
              requests. As everyone shared their requests, we struggled to find
              pens and papers to write them down, so some resorted to using
              their phones.
            </p>
            <section className="flex md:flex-row flex-col items-center justify-between gap-5">
              <div className="space-y-4">
                <p>
                  As I started typing everyone&apos;s requests into my phone, I
                  heard this simple voice in my head say,{" "}
                  <span className="italic">
                    &quot;What if you build an app for this purpose?&quot;
                  </span>{" "}
                  At this point in my life, I was pursuing a Bachelor&apos;s
                  degree in Computer Science. I prayed on that voice and soon
                  began to develop the idea.
                </p>
                <p>
                  A couple of weeks later, the first version of Prayse (Prayer &
                  Praise) was published on both the Google Play Store and the
                  App Store. I shared it with my friends and they found it
                  useful. To my surprise, even people from all over the internet
                  started downloading and using it. Honestly, I was shocked,
                  because for me, Prayse was just meant to be a personal app to
                  manage my prayer requests. As I continued praying about
                  Prayse, the need to keep developing it grew and I became 100%
                  certain that this was something the Lord wanted me to do.
                  Hadn&apos;t fully thought about the long-term journey of
                  Prayse or its ultimate goal, but through the Lord&apos;s
                  guidance, was at least able to figure out the very next step.
                </p>
              </div>
              <Image
                src={"/praysev1.png"}
                width={378}
                height={800}
                className="rounded-lg border"
                alt="Prayse version 1"
              />
            </section>
            <section className="flex md:flex-row flex-col-reverse items-center justify-between gap-5">
              <Image
                src={"/prayse-hero.jpeg"}
                width={378}
                height={800}
                className="rounded-lg border md:w-1/4 w-full"
                alt="Prayse version 1"
              />
              <div className="space-y-4">
                <p>
                  Fast forward two years later: Prayse has reached thousands of
                  people, and what God has done and is continuing to do is
                  honestly amazing. I can&apos;t find the words to describe how
                  Prayse has been a blessing to others and also to me. Beyond
                  the numbers and statistics, the thing that sticks with me the
                  most is the little comments I receive about Prayse. If
                  you&apos;ve interacted with me regarding Prayse or left a
                  comment on our online platforms, know that you&apos;ve made a
                  significant impact. The current and future accomplishments of
                  Prayse are not only fruit unto my account, but also yours.
                </p>
                <p className="font-medium">
                  Following God&apos;s direction isn&apos;t always easy, but it
                  is simple.
                </p>
              </div>
            </section>
            <p>
              If you&apos;re someone who spends alot of time thinking about your
              future, your career, or anything else, I encourage you to pause
              and reflect on this simple question:
            </p>

            <p className="font-medium mt-3">
              What does God want me to do next?
            </p>

            <p>
              Pray, read God&apos;s word, seek counsel, and by faith, take that
              very next step. No matter how big or small that step might be,
              FULLY surrender it to the Lord and marvel at the amazing things He
              will do to guide and provide for you.
            </p>
            <p>
              Most importantly, and before anything else, if you do not have a
              personal relationship with Jesus, may I advise you to accept Him
              as your Lord and Saviour. Close your eyes, and say this:{" "}
              <span className="italic">
                &quot;Dear Lord, I&apos;m here. Please forgive me from my sins,
                and help me to abide in You, as You abide in me. From this point
                on, my life is Yours. Help me to live a life that glorifies You,
                and reflects Your love and grace to others. In Jesus&apos; name,
                Amen.&quot;
              </span>
            </p>

            <p>
              Praying for you, and am so glad that you are a part of this
              amazing journey! - Sahag
            </p>
          </div>
        </div>
      </div> */}
      <section
        ref={teamRef}
        className="bg-blue-50 lg:px-44 md:px-36 sm:px-7 px-4 w-full py-16 md:py-24 lg:py-32 items-center flex md:flex-row gap-10 flex-col"
      >
        <div className="space-y-4 flex-1">
          <h2 className="md:text-4xl text-balance text-3xl font-medium text-primary md:text-left text-center ">
            Built By{" "}
            <span className={cn(merriweather.className, "italic font-bold")}>
              Believers{" "}
            </span>
            Just Like{" "}
            <span className={cn(merriweather.className, "italic font-bold")}>
              You
            </span>
          </h2>
          <p className="md:w-4/5 w-full md:text-lg md:text-left text-center text-balance">
            We&apos;re a small but mighty team of creatives and dreamers who
            love Jesus and believe in the power of prayer.
          </p>
        </div>
        <div className=" flex-2 grid gap-12 md:grid-cols-2 grid-cols-1 md:gap-16 lg:gap-20">
          <div className="team-member flex flex-col items-center gap-6 md:gap-8">
            <div className="relative ">
              <div className="md:w-96 md:h-96 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full transform rotate-12"></div>
              <div className="absolute inset-4 bg-white rounded-full overflow-hidden">
                <Image
                  src="/sahag.png"
                  alt="Sahag Arz"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" />
                </svg>
              </div>
            </div>
            <div className="text-center lg:text-left max-w-md">
              <h3
                className={cn(
                  "text-3xl md:text-4xl font-bold text-blue-500 mb-2",
                  merriweather.className
                )}
              >
                Sahag Arzoumanian
              </h3>
              <p className="text-lg text-gray-600 italic mb-4 font-medium">
                Founder
              </p>
              <p className="text-gray-700 mb-4 italic text-lg leading-relaxed">
                &quot;The main drive behind the work I do for Prayse is seeing
                people develop a healthier, more consistent prayer life with
                God. From building our apps and websites to envisioning
                what&apos;s ahead, it&apos;s been a blessing to work on Prayse
                and be part of all that God is doing through it.&quot;
              </p>
            </div>
            <div className=" flex md:self-start self-center gap-4">
              <Link
                href={"https://www.instagram.com/sahag98"}
                target="_blank"
                className="bg-background size-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200"
              >
                <Instagram size={30} className="text-accent" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/sahak-arzoumanian/"}
                target="_blank"
                className="bg-background size-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200"
              >
                <Linkedin size={30} className="text-accent" />
              </Link>
            </div>
          </div>

          <div className="team-member flex flex-col  items-center gap-6 lg:gap-8">
            <div className="relative">
              <div className="md:w-96 md:h-96 w-64 h-64 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full transform -rotate-12"></div>
              <div className="absolute inset-4 bg-white rounded-full overflow-hidden">
                <Image
                  src="/adriana.png"
                  alt="Adriana Mora"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.414l.707-.707zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="text-center lg:text-right max-w-md">
              <h3
                className={cn(
                  "text-3xl md:text-4xl font-bold text-blue-500 mb-2",
                  merriweather.className
                )}
              >
                Adriana Mora
              </h3>
              <p className="text-lg italic text-gray-600 mb-4 font-medium">
                Social Media Manager
              </p>
              <p className="text-gray-700 mb-4 italic text-lg leading-relaxed">
                &quot;I&apos;m a big fan of heartfelt conversations, iced
                matcha, and seeing people grow in their relationship with Jesus.
                At Prayse, I get to use creativity and community-building to
                help others experience the beauty of prayer in everyday life,
                and I consider that a huge blessing.&quot;
              </p>
            </div>
            <div className=" flex md:self-end self-center gap-4">
              <Link
                href={"https://www.instagram.com/adrianamora510/"}
                target="_blank"
                className="bg-background size-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200"
              >
                <Instagram size={30} className="text-accent" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/sahak-arzoumanian/"}
                target="_blank"
                className="bg-background size-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200"
              >
                <Linkedin size={30} className="text-accent" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <MarqueeDemo />
      <section ref={questionRef} className="md:min-h-screen flex  w-full">
        <div className="flex w-full items-center justify-center  md:flex-row flex-col gap-10">
          <div className="w-1/2 gap-4 flex flex-col justify-center h-full lg:pl-44 md:pl-36 sm:pl-7 pl-4">
            <h2 className="md:text-4xl text-balance text-3xl font-medium text-primary md:text-left text-center ">
              Have a{" "}
              <span className={cn(merriweather.className, "italic font-bold")}>
                Question?
              </span>
            </h2>
            <p className="md:text-lg md:text-left text-center text-balance">
              Whether you&apos;re curious about Prayse or want help getting
              started, we&apos;d love to hear from you.
            </p>
            <Link href={"/contact"}>
              <Button
                size={"lg"}
                className="w-fit font-bold md:text-lg self-center md:self-start hover:scale-105 transition-transform duration-200"
              >
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="  w-1/2 flex h-full">
            <Image
              src={"/contact.png"}
              alt="Prayse"
              width={500}
              objectFit="fill"
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section ref={ctaRef} className=" md:h-screen flex w-full">
        <div className="flex w-full items-center md:flex-row-reverse flex-col justify-center   gap-10">
          <div className="md:w-1/2 w-full gap-4 flex flex-col justify-center h-full lg:pr-44 md:pr-36 sm:pr-7 pr-4 ">
            <h2 className="md:text-4xl text-balance text-3xl font-medium text-primary md:text-left text-center ">
              Ready to{" "}
              <span className={cn(merriweather.className, "italic font-bold")}>
                Deepen{" "}
              </span>
              Your Prayer Life?
            </h2>
            <p className="md:text-lg md:text-left text-center text-balance">
              Join thousands of believers who are growing closer to God every
              day—one prayer at a time.
            </p>
            <Button
              size={"lg"}
              className="w-fit font-bold md:text-lg self-center md:self-start hover:scale-105 transition-transform duration-200"
            >
              Download Now
            </Button>
          </div>
          <div className="w-1/2 flex-1 flex h-full">
            <Image
              src={"/download-cta.png"}
              alt="Prayse"
              width={500}
              objectFit="fill"
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
