"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Wallet } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Community", href: "/community" },
    { name: "Identity", href: "/identity" },
    { name: "Lend & Borrow", href: "/lend" },
    { name: "Governance", href: "/governance" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
               <Image src="/logo-icon.svg" alt="Ubuntu Chain Icon" width={40} height={40} className="animate-pulse-slow" />
            </div>
            <span className="font-display font-bold text-xl tracking-tighter text-white">
              UBUNTU<span className="text-ubuntu-orange">CHAIN</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-ubuntu-orange transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="flex items-center gap-2 bg-ubuntu-orange text-white px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-orange-500/20">
              <Wallet size={16} />
              Launch App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-transform duration-500 ${isOpen ? "translate-y-0" : "-translate-y-full"} md:hidden`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-white hover:text-ubuntu-orange transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-ubuntu-orange text-white px-8 py-4 rounded-full font-bold text-lg mt-4">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
