"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`inset-x-0 fixed top-0 justify-between z-30 flex transition-all items-center py-11 lg:px-24 md:px-16 sm:px-7 px-4 h-16 ${
        isScrolled
          ? "bg-opacity-25 backdrop-filter border-b backdrop-blur-sm"
          : "bg-opacity-25 backdrop-filter backdrop-blur-sm"
      }`}
    >
      <Link href={"/"} className="flex cursor-pointer items-center gap-1">
        <Image
          src={"/prayse-logo.png"}
          width={500}
          height={500}
          className="size-12"
          alt="Prayse logo"
        />
        <h1 className="font-bold text-lg">Prayse</h1>
      </Link>
      <ul className="md:flex hidden items-center justify-evenly w-full">
        <Link href={"/about"}>
          <li className="cursor-pointer text-sm transition-all hover:font-medium">
            About
          </li>
        </Link>
        <Link href={"https://shop.prayse.app"} target="_blank">
          <li className="cursor-pointer  text-sm transition-all hover:font-medium">
            Shop
          </li>
        </Link>
        <Link href={"/contact"}>
          <li className="cursor-pointer text-sm transition-all hover:font-medium">
            Contact
          </li>
        </Link>
        {/* <Link href={"/privacy"}>
          <li className="cursor-pointer text-sm transition-all hover:font-medium">
            Privacy
          </li>
        </Link> */}
      </ul>
      <Link href={"/support"} className="md:flex hidden">
        <Button
          variant={"secondary"}
          className="text-base gap-2 py-5 rounded-lg"
        >
          Support <Heart />
        </Button>
      </Link>
      <Sheet>
        <SheetTrigger className="md:hidden flex">
          <GiHamburgerMenu size={28} />
        </SheetTrigger>
        <SheetContent>
          <SheetDescription className="flex flex-col gap-10 flex-1 h-full items-center justify-center">
            <ul className="flex gap-5 flex-col items-center justify-evenly w-full">
              <Link href={"/about"}>
                <li className="cursor-pointer  text-xl transition-all hover:font-medium">
                  About
                </li>
              </Link>
              <Link href={"https://shop.prayse.app"} target="_blank">
                <li className="cursor-pointer  text-xl transition-all hover:font-medium">
                  Shop
                </li>
              </Link>
              <Link href={"/contact"}>
                <li className="cursor-pointer  text-xl transition-all hover:font-medium">
                  Contact
                </li>
              </Link>
              {/* <li className="cursor-pointer  text-xl transition-all hover:font-medium">
                Privacy
              </li> */}
            </ul>
            <Link href="/support" className="">
              <Button
                variant={"secondary"}
                className="text-base gap-2 py-5 rounded-lg"
              >
                Support <Heart />
              </Button>
            </Link>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
