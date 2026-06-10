"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Facebook, Linkedin, Instagram, Youtube, Music } from "lucide-react";
import Image from "next/image";
import JubieeLogo from "../../public/img/Logo.png";
import Footer_img1 from "../../public/img/Footer1.png";
import Footer_img2 from "../../public/img/Footer2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Motor Insurance", href: "#" },
      { label: "Travel Insurance", href: "#" },
      { label: "Healt Care Insurance", href: "#" },
      { label: "Self Insurance", href: "#" },
      { label: "Home Insurance", href: "#" },
    ],
  },
  {
    title: "Company Information",
    links: [
      {
        label: "Profile",
        href: "#",
      },
      { label: "Leadership", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "Awards", href: "#" },
      { label: "Discount Card", href: "#" },
    ],
  },
  {
    title: "Investor Relations",
    links: [
      {
        label: "Financial Highlights",
        href: "#",
      },
      {
        label: "Performance Review",
        href: "#",
      },
      { label: "Financial Reports", href: "#" },
      { label: "Stock Updates", href: "#" },
      // { label: "Lorem Ipsum Text", href: "#" },
    ],
  },

  {
    title: "Quick Links",
    links: [
      {
        label: "Panel Hospitals",
        href: "#",
      },
      // {
      //   label: "Downloads",
      //   href: "#",
      // },
      { label: "News & Events", href: "#" },
      // { label: "Quick Quote", href: "#" },
      { label: "E-Verify", href: "#" },
      // { label: "Mobile Apps", href: "#" },
      { label: "Apply Now", href: "#" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "Branch Locator", href: "#" },
      { label: "Complain", href: "#" },
      { label: " Resolution ", href: "#" },
      { label: "FIO Website", href: "#" },
      // { label: "Lorem Ipsum Text", href: "#" },
    ],
  },
];

function MobileFooterSection({ section }: { section: FooterSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#FFFFFF]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-white font-bold text-sm hover:text-red-100 transition"
      >
        {section.title}
        <ChevronDown
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 space-y-2">
          {section.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block text-red-100 hover:text-white font-futura transition text-xs"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-b from-[#6E071C] to-[#BA0C2F] ">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 md:gap-6 mb-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex flex-col">
              <div className="mb-2">
                <Link href="/">
                  <Image src={JubieeLogo} alt="" />
                </Link>
                <div className="border-b border-[#FAFCFC] mt-4"></div>
              </div>
              <div className="mb-4 text-red-100 text-sm font-bold">
                <h2>Jubilee General Insurance Company Limited</h2>
              </div>
              <div className="space-y-2 font-futura text-red-100 text-xs mb-6">
                <p>
                  <a
                    href="tel:+9221111654111"
                    className="hover:text-white transition"
                  >
                    UAN: (9221) 111-654-111
                  </a>
                </p>

                <p>
                  <a
                    href="tel:+922132416022"
                    className="hover:text-white transition"
                  >
                    Tel: (9221) 32416022-26
                  </a>
                </p>

                <p>
                  <a
                    href="tel:080003786"
                    className="hover:text-white transition"
                  >
                    Toll Free: 0800-03786
                  </a>
                </p>

                <p>
                  <a
                    href="tel:+922132416728"
                    className="hover:text-white transition"
                  >
                    Fax: (9221) 32416728/32438738
                  </a>
                </p>

                <p>
                  <a href="sms:82665" className="hover:text-white transition">
                    TEXT: SMS 82665
                  </a>
                </p>
              </div>

              <div className="mb-6 flex gap-2">
                <p className="text-white font-bold text-xs mb-3">
                  Follow Us On:
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="text-white hover:text-red-100 transition"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-red-100 transition"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-red-100 transition"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-red-100 transition"
                  >
                    <FaYoutube size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-red-100 transition"
                  >
                    <FaTiktok size={18} />
                  </a>
                </div>
              </div>

              <div className="flex flex-row gap-2 ">
                <Image src={Footer_img1} alt="" className="md:h-8 md:w-auto" />
                <Image
                  src={Footer_img2}
                  alt="SECP"
                  className="md:h-8 md:w-auto"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:grid col-span-5 grid-cols-5 gap-4">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-white font-bold text-xs md:text-sm mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-red-100 hover:text-white transition text-xs"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:hidden col-span-1 md:col-span-2">
            {footerSections.map((section, index) => (
              <MobileFooterSection key={index} section={section} />
            ))}
          </div>
        </div>

        <div className="border-t border-[#FFFFFF] pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 flex-wrap justify-center md:justify-start text-xs text-red-100 order-2 md:order-1">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <span className="text-white">|</span>
            <a href="#" className="hover:text-white transition">
              SiteMap
            </a>
          </div>
          <p className="text-xs text-red-100 order-1 md:order-2">
            © Copyright 2026{" "}
            <span className="font-bold text-white">
              Jubilee General Insurance
            </span>{" "}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
