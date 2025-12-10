"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-stone-900/90 backdrop-blur-md py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        
        {/* Logo - Scroll to Top */}
        <Link href="/" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer">
          <Logo className={isScrolled ? "scale-90" : "scale-100"} />
        </Link>

        {/* Meniu Desktop */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide text-white">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-amber-200 transition-colors">
            Our Story
          </a>
          <a href="#treatments" onClick={(e) => scrollToSection(e, 'treatments')} className="hover:text-amber-200 transition-colors">
            Menu & Prices
          </a>
          <a href="#location" onClick={(e) => scrollToSection(e, 'location')} className="hover:text-amber-200 transition-colors">
            Location
          </a>
        </div>

        {/* Buton Rezervare - WhatsApp Real */}
        <div>
          <a 
            /* Aici am pus numarul tau real in link */
            href="https://wa.me/66828277900?text=Hello,%20I%20would%20like%20to%20book%20a%20massage" 
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full px-8 py-3 text-xs font-bold uppercase transition-all duration-300 border inline-block ${
              isScrolled 
                ? "bg-amber-100 text-stone-900 border-amber-100 hover:bg-white" 
                : "bg-white/10 text-white backdrop-blur-sm border-white/30 hover:bg-white hover:text-stone-900"
            }`}
          >
            Book via WhatsApp
          </a>
        </div>

      </div>
    </nav>
  );
}