"use client";

import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.webp"; // Ensure path is correct
import { MapPin, Mail, Phone, Globe } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* --- Main Footer Content --- */}
      <div className="max-w-[1440px] mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-10">
          {/* LEFT: Addresses (Stacked with Pin Icons) */}
          <div className="flex flex-col gap-4 order-2 md:order-1 text-sm w-full md:w-auto items-start">
            <div className="flex items-start gap-3 text-left">
              <MapPin className="text-white mt-1 shrink-0" size={24} />
              <p className="leading-relaxed">
                <span className="font-bold">South London :</span> 416, <br />
                Kingston road, KT1 3PB
              </p>
            </div>

            <div className="flex items-start gap-3 text-left">
              <MapPin className="text-white mt-1 shrink-0" size={24} />
              <p className="leading-relaxed">
                <span className="font-bold">Central London :</span> 45 <br />
                Albemarle Street, Mayfair, <br />
                London W1S 4JL
              </p>
            </div>

            <Link
              href="https://designz.dwell-rich.com/"
              className="flex items-center group cursor-pointer font-semibold gap-2 pl-0.5"
            >
              <p>
                <Globe size={20} />
              </p>
              Designz.Dwell.Rich
            </Link>
          </div>

          {/* CENTER: Logo & Company Reg (Same as Image) */}
          {/* Added w-full on mobile so it centers perfectly relative to the screen */}
          <div className="flex flex-col items-center text-center order-1 md:order-2 w-full md:w-auto">
            <div className="mb-4">
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt="Dwell Rich Designz logo"
                  width={100}
                  height={100}
                  className="brightness-0 invert object-contain"
                />
              </Link>
            </div>
            <h2 className="text-2xl font-semibold mb-1">Dwell Rich Ltd.</h2>
            <p className="text-xs text-white">
              (Company Registeration: 12592480)
            </p>
          </div>

          {/* RIGHT: Contact & Socials */}
          {/* Changed text-right to left on mobile, right on md+ */}
          <div className="flex flex-col gap-6 order-3 text-left md:text-right text-sm w-full md:w-auto items-start md:items-start">
            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-start md:justify-start">
                <Mail size={18} className="text-white shrink-0" />
                <a href="mailto:hello@designz.dwell-rich.com">
                  hello@designz.dwell-rich.com
                </a>
              </div>
              <div className="flex items-center gap-3 justify-start md:justify-start">
                <Phone size={18} className="text-white shrink-0" />
                <a href="tel:07803326891">078033 26891</a>
              </div>
            </div>

            {/* Social Icons with brand colors from image */}
            <div className="flex gap-3 justify-start md:justify-start">
              <a
                href="https://www.facebook.com/share/1BLQoRWi6P/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#1877F2] rounded-full"
              >
                <FaFacebookF className="text-white" size={18} />
              </a>
              <a
                href="https://www.instagram.com/p/DOzRdycjPme/?igsh=MXd4bzA5ODd5MGR2bw=="
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#E4405F] rounded-full"
              >
                <FaInstagram className="text-white" size={18} />
              </a>
              <a
                href="https://uk.linkedin.com/in/saleha-ali-khan"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#0A66C2] rounded-full"
              >
                <FaLinkedinIn className="text-white" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- COPYRIGHT BAR (Bottom Strip) --- */}
      <div className="w-full border-t border-white/20 py-4 px-4 text-center">
        <p className="text-xs font-semibold uppercase">
          Copyright © 2026 DWELL RICH DESIGNZ — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
