import React from "react";
import { Button } from "./ui/button";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Link from "next/link";

const DownloadCTA = () => {
  return (
    <div className="flex flex-col md:py-20 md:gap-0 gap-5 py-10 md:flex-row w-full items-center justify-center lg:px-44 md:px-36 sm:px-7 px-4">
      <section className="bg-primary w-full p-10 rounded-lg flex flex-col items-center justify-center gap-5">
        <h2 className="text-primary-foreground font-bold text-4xl">
          Never Forget A Prayer
        </h2>
        <p className="mt-4 text-xl text-primary-foreground">
          Download Prayse and keep all your prayers organized, accessible, and
          close to your heart.
        </p>
        <div className="flex items-center mt-4  md:justify-normal justify-center flex-1 gap-3">
          <Link
            target="_blank"
            href={"https://apps.apple.com/us/app/prayseapp/id6443480347"}
          >
            <button className="flex bg-secondary text-primary rounded-lg px-2 py-1 items-center gap-1">
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
            <button className="flex bg-secondary text-primary rounded-lg px-2 py-1 items-center gap-1">
              <FaGooglePlay size={30} />
              <section className="flex flex-col items-start">
                <p className="text-xs">Get it one</p>
                <p className="text-base font-bold">Google Play</p>
              </section>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DownloadCTA;
