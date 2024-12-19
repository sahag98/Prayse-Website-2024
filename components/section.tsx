import clsx from "clsx";
import Image from "next/image";
import React from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

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
  // useEffect(() => {
  //   gsap.from(".about-text", {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".about-text",
  //       start: "top 80%",
  //       toggleActions: "play none none none",
  //     },
  //   });

  //   gsap.from(".about-image", {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".about-image",
  //       start: "top 60%",
  //       toggleActions: "play none none none",
  //     },
  //   });
  // }, []);
  return (
    <div
      className={clsx(
        "min-h-screen flex flex-col md:py-0 md:gap-0 gap-5 py-10 md:flex-row w-full items-center justify-center lg:px-44 md:px-36 sm:px-7 px-4",
        className
      )}
    >
      <section className="flex-1 about-text space-y-3">
        <h2 className="font-bold md:w-2/3 md:text-5xl text-3xl">{title}</h2>
        <p className="md:w-2/3">{description}</p>
      </section>
      <section className="flex-1 about-image flex items-center justify-center">
        <Image
          src={imageUrl}
          alt="Prayse home screen"
          className="md:w-1/2 w-4/5 border-[#2f2d51] border rounded-2xl"
          width={1179}
          height={2369}
        />
      </section>
    </div>
  );
};

export default Section;
