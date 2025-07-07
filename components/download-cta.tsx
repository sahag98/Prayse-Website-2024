"use client";

import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { merriweather } from "@/app/page";

const DownloadCTA = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center">
      <section className="bg-primary w-full p-10 rounded-lg flex flex-col items-center justify-center gap-5">
        <h2
          className={cn(
            "text-primary-foreground italic font-bold text-4xl",
            merriweather.className
          )}
        >
          Never Forget A Prayer
        </h2>
        <p className="mt-4 text-xl text-primary-foreground">
          Download Prayse and keep all your prayers organized, accessible, and
          close to your heart.
        </p>
        <div className="flex items-center  md:w-1/3 w-full mt-4 md:flex-row flex-col  md:justify-normal justify-center flex-1 gap-3">
          <Link
            target="_blank"
            className=" w-full flex items-center justify-center"
            href={"https://apps.apple.com/us/app/prayseapp/id6443480347"}
          >
            <button className="flex bg-secondary w-full text-primary rounded-xl px-4 py-2 items-center justify-center gap-1 hover:scale-105 transition-transform duration-200">
              <FaApple size={40} />
              <section className="flex flex-col items-start">
                <p className="text-xs">Download on the</p>
                <p className="text-base font-bold italic">App Store</p>
              </section>
            </button>
          </Link>
          <Link
            target="_blank"
            className="w-full flex items-center justify-center"
            href={
              "https://play.google.com/store/apps/details?id=com.sahag98.prayerListApp&hl=en_US&gl=US"
            }
          >
            <button className="flex bg-secondary w-full justify-center text-primary rounded-xl px-4 py-2  items-center gap-1 hover:scale-105 transition-transform duration-200">
              <FaGooglePlay size={30} />
              <section className="flex flex-col items-start">
                <p className="text-xs">Get it one</p>
                <p className="text-base font-bold italic">Google Play</p>
              </section>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DownloadCTA;
