import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="md:h-[calc(100vh-64px)] md:min-h-max min-h-screen lg:px-24 md:px-16 sm:px-7 px-4 mt-16 py-14 flex md:flex-row flex-col gap-10 items-center justify-cemter w-full">
      <div className="bg-blue-50 md:flex-row flex-col w-full min-h-full md:p-0 md:py-0 py-10 px-5 flex items-center justify-center gap-10 rounded-2xl">
        <div className="flex flex-col justify-center md:text-start text-center md:w-1/2 w-full gap-5">
          <div className="flex md:w-3/4 w-full flex-col gap-4">
            <h1 className="md:text-6xl text-4xl text-primary font-bold">
              Take a Moment and Pray
            </h1>
            <p className="md:text-lg">
              Download now to create prayer lists, setup reminders, and organize
              your walk with God.
            </p>
          </div>
          <div className="flex items-center  md:justify-normal justify-center flex-1 gap-3">
            <Link
              target="_blank"
              href={"https://apps.apple.com/us/app/prayseapp/id6443480347"}
            >
              <button className="flex bg-primary text-primary-foreground rounded-lg px-2 py-1 items-center gap-1">
                <FaApple size={40} />
                <section className="flex flex-col items-start">
                  <p className="text-xs">Download on the</p>
                  <p className="text-base font-bold">App Store</p>
                </section>
              </button>
            </Link>
            <Link
              target="_blank"
              href={
                "https://play.google.com/store/apps/details?id=com.sahag98.prayerListApp&hl=en_US&gl=US"
              }
            >
              <button className="flex bg-primary text-primary-foreground rounded-lg px-2 py-1 items-center gap-1">
                <FaGooglePlay size={30} />
                <section className="flex flex-col items-start">
                  <p className="text-xs">Get it one</p>
                  <p className="text-base font-bold">Google Play</p>
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
        <Image
          src={"/prayse-hero.jpeg"}
          alt="Prayse home screen"
          className="md:w-1/5 w-3/4 md:flex border border-[#2f2d51] shadow-xl shadow-gray-200 rounded-2xl"
          width={1179}
          height={2369}
        />
      </div>
    </section>
  );
};

export default Hero;
