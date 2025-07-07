"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container-standard bg-blue-50 py-16 flex flex-col gap-10">
      <section className="flex md:hidden flex-col  items-left gap-4">
        <section className="flex gap-2 items-center">
          <Image
            src={"/prayse-logo.png"}
            width={500}
            height={500}
            className="size-12"
            alt="Prayse logo"
          />
          <h1 className="font-bold text-xl">Prayse</h1>
        </section>
        <p className="text-balance leading-relaxed text-gray-500">
          At Prayse, we believe in the transformative power of prayer. Our
          mission is to help Christians create intentional moments for prayer,
          organize their prayer life with ease, and elevate the role of prayer
          in their daily walk with God.
        </p>
      </section>
      <div className="grid md:grid-cols-5 grid-cols-2 md:gap-20 gap-6">
        <section className="md:flex hidden flex-col  items-left gap-4">
          <section className="flex gap-2 items-center">
            <Image
              src={"/prayse-logo.png"}
              width={500}
              height={500}
              className="size-12"
              alt="Prayse logo"
            />
            <h1 className="font-bold text-xl">Prayse</h1>
          </section>
          <p className="text-balance leading-relaxed text-gray-500">
            At Prayse, we believe in the transformative power of prayer. Our
            mission is to help Christians create intentional moments for prayer,
            organize their prayer life with ease, and elevate the role of prayer
            in their daily walk with God.
          </p>
        </section>

        <section className="flex flex-col  gap-4">
          <h3 className="font-semibold ">Company</h3>
          <ul className="flex text-left flex-col gap-4 text-sm">
            <Link
              href={"/about"}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href={"/contact"}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </ul>
        </section>
        <section className="flex flex-col  gap-4">
          <h3 className="font-semibold ">Offers</h3>
          <ul className="flex text-left flex-col gap-4 text-sm">
            <Link
              href={"/about"}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Merch
            </Link>
            <Link
              href={"/contact"}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Support
            </Link>
          </ul>
        </section>
        <section className="flex flex-col  gap-4">
          <h3 className="font-semibold ">Social</h3>
          <ul className="flex text-left flex-col gap-4 text-sm">
            <Link
              href={"/about"}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Instagram
            </Link>
            <Link
              href={"/contact"}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Facebook
            </Link>
          </ul>
        </section>
        <section className="flex flex-col  gap-4">
          <h3 className="font-semibold ">Download</h3>
          <ul className="flex text-left flex-col gap-4 text-sm">
            <Link
              href={"/about"}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              App Store
            </Link>
            <Link
              href={"/contact"}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Play Store
            </Link>
          </ul>
        </section>
      </div>
      <section className="flex items-center md:flex-row flex-col gap-8 justify-between">
        <a
          className=""
          href="https://startupfa.me/s/prayse?utm_source=prayse.app"
          target="_blank"
        >
          <img
            src="https://startupfa.me/badges/featured-badge-small.webp"
            alt="Prayse - Take a moment and pray | Startup Fame"
            width="224"
            height="36"
          />
        </a>
        <span>© 2025 Prayse. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <Link
            href={"/privacy"}
            className="font-medium hover:text-blue-600 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href={"/terms-of-service"}
            className="font-medium hover:text-blue-600 transition-colors duration-200"
          >
            Terms of Services
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
