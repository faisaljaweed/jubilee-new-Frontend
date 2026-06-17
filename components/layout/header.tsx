"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  User,
  Menu,
  X,
  Heart,
  Users,
  Car,
  ChevronDown,
  Search,
  Plane,
  Home,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Jubilee_Logo from "../../public/img/jubilee_logo.png";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

// Logo column width — keep in sync between the spacer divs and the absolute logo overlay
const LOGO_W = "w-[175px]";
const LOGO_W_XL = "xl:w-[195px]";
const LOGO_PL = "pl-[175px]";
const LOGO_PL_XL = "xl:pl-[195px]";

type MegaMenuKey = "motor" | "travel" | "health" | "self" | "home";

type MegaMenuItem = {
  label: string;
  href: string;
};

type MegaMenuCategory = {
  key: MegaMenuKey;
  label: string;
  icon: React.ElementType;
  items: MegaMenuItem[];
};

const megaMenuData: MegaMenuCategory[] = [
  {
    key: "motor",
    label: "Motor",
    icon: Car,
    items: [
      {
        label: "Motot Third Party Liability Insurance",
        href: "/motor/motor-third-party-insurance",
      },
      {
        label: "Private Car Compresensive",
        href: "#",
        // href: "/motor/private-car-comprehensive",
      },
      {
        label: "Old Car Comprehensive",
        href: "#",
        // href: "/motor/old-car-comprehensive",
      },
      {
        label: "3T Old Car Insurance",
        href: "#",
        // href: "/motor/3t-old-car-insurance",
      },
      {
        label: "Motor Cycle Comprehensive Insurance",
        // href: "/motor/motorcycle-comprehensive",
        href: "#",
      },
      {
        label: "Private Cars Third Party Liability Insurance",
        href: "/motor/private-car-third-party-insurance",
      },
      {
        label: "Motor Cycle Third Party Liability Insurance",
        // href: "/motor/motorcycle-third-party-insurance",
        href: "#",
      },
      // { label: "Motor Takaful", href: "/motor/takaful" },
      // { label: "Bike Insurance", href: "/motor/bike-insurance" },
      // { label: "Commercial Vehicle", href: "/motor/commercial-vehicle" },
    ],
  },
  {
    key: "travel",
    label: "Travel",
    icon: Plane,
    items: [
      { label: "International Travel", href: "/travel/international-travel" },
      { label: "HomeTrip Travel", href: "/travel/home-trip-travel" },
      { label: "Student Travel", href: "/travel/student-travel" },
      { label: "Hajj and Umrah Travel ", href: "/travel/hajj-umrah-travel" },
      // { label: "Schengen Travel", href: "/travel/schengen" },
      { label: "Ziarat Travel", href: "/travel/ziarat-travel" },
      { label: "Domestic Travel", href: "/travel/domestic-travel" },
      // { label: "Medical Emergency Cover", href: "/travel/medical-cover" },
    ],
  },
  {
    key: "health",
    label: "Health",
    icon: Heart,
    items: [
      { label: "Parents Care Plus", href: "/health/parents-care-plus" },
      { label: "Family HealthCare", href: "/health/family-health-care" },
      { label: "Personal HealthCare", href: "/health/personal-health-care" },
      { label: "Lifestyle Care", href: "/health/lifestyle-care" },
      { label: "Parents Care", href: "/health/parents-care" },
      { label: "HerCare", href: "/health/her-care" },
      // { label: "OPD Coverage", href: "/healthcare/opd" },
      // { label: "Maternity Coverage", href: "/healthcare/maternity" },
      // { label: "Health Takaful", href: "/healthcare/takaful" },
    ],
  },
  {
    key: "self",
    label: "Self",
    icon: Shield,
    items: [
      { label: "Self Insurance", href: "/self/self-insurance" },
      // { label: "Individual Protection", href: "/self/individual-protection" },
      // { label: "Lifestyle Protection", href: "/self/lifestyle-protection" },
      // { label: "Income Protection", href: "/self/income-protection" },
      // { label: "Cyber Protection", href: "/self/cyber-protection" },
      // { label: "Mobile Protection", href: "/self/mobile-protection" },
    ],
  },
  {
    key: "home",
    label: "Home",
    icon: Home,
    items: [
      { label: "Home Insurance", href: "/home/home-insurance" },
      // { label: "Home Contents Cover", href: "/home-insurance/contents" },
      // { label: "Fire Insurance", href: "/home-insurance/fire" },
      // { label: "Burglary Cover", href: "/home-insurance/burglary" },
      // { label: "Property Protection", href: "/home-insurance/property" },
      // { label: "House Owner Plan", href: "/home-insurance/owner-plan" },
      // { label: "Tenant Protection", href: "/home-insurance/tenant-protection" },
    ],
  },
];

interface menuProps {
  menuColor?: string;
}

export default function Header({ menuColor }: menuProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileTopOpen, setIsMobileTopOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuKey>("motor");

  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const productsAreaRef = useRef<HTMLDivElement | null>(null);

  const [active, setActive] = useState<"individual" | "business">(
    pathname.includes("business") ? "business" : "individual",
  );

  const topNavLinks = [
    { label: "SUSTAINABILITY", href: "/sustainability" },
    // { label: "SUSTAINABILITY", href: "#" },
    { label: "BRANCH LOCATOR", href: "/branch-network" },
    { label: "AWARDS", href: "/awards" },
    { label: "LEADERSHIP", href: "/leadership" },
    { label: "CLAIMS", href: "/claims" },
    { label: "COMPLAINT & QUERY", href: "/complaints-queries" },
    { label: "DISCLAIMER", href: "/disclaimer" },
    { label: "PRIVACY POLICY", href: "/privacy-policy" },
    // { label: "CAREERS", href: "#" },
    // { label: "E-VERIFY", href: "#" },
    // { label: "MANAGE MY POLICY", href: "#" },
    { label: "RESOURCES", href: "/resources" },
    // { label: "CLAIMS", href: "#" },
  ];

  const mainNavLinks = [
    { label: "ABOUT", href: "/about" },
    // { label: "ABOUT", href: "#" },
    { label: "INVESTOR RELATIONS", href: "/investorrelation" },
    // { label: "INVESTOR RELATIONS", href: "#" },
    { label: "CAREERS", href: "/careers" },
    // { label: "CAREERS", href: "#" },
    { label: "CONTACT US", href: "/contact" },
    // { label: "CONTACT US", href: "#" },
  ];

  // const handleProductsMouseEnter = () => {
  //   if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  //   setIsProductsHovered(true);
  // };

  // const handleProductsMouseLeave = () => {
  //   hoverTimeout.current = setTimeout(() => {
  //     setIsProductsHovered(false);
  //   }, 350);
  // };
  const handleProductsMouseEnter = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }

    setIsProductsHovered(true);
  };

  const handleProductsMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      const isStillHoveringProductsArea =
        productsAreaRef.current?.matches(":hover");

      if (!isStillHoveringProductsArea) {
        setIsProductsHovered(false);
      }
    }, 220);
  };
  const activeCategory =
    megaMenuData.find((item) => item.key === activeMegaMenu) || megaMenuData[0];

  return (
    <>
      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .dropdown-enter {
          animation: dropIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <header className="site-header absolute top-0 left-0 right-0 z-50">
        {/* DESKTOP */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Row 1: BLACK BAR */}
            <div className="w-full bg-gray-900 text-white text-xs py-2">
              <div className={`max-w-7xl mx-auto ${LOGO_PL} ${LOGO_PL_XL}`}>
                <div className="flex items-center justify-between px-5">
                  <div className="flex gap-5 xl:gap-6 flex-wrap">
                    {topNavLinks.map((link, i) => (
                      <Link
                        key={`${link.label}-${i}`}
                        href={link.href}
                        className="hover:text-gray-300 font-futura transition whitespace-nowrap"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-futura">EN</span>
                    <span className="text-white/40">|</span>
                    <span className="font-futura">UR</span>
                    <button
                      type="button"
                      className="ml-2 bg-white/20 rounded-full p-1 hover:bg-white/30 transition"
                      aria-label="User"
                    >
                      <User size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: WHITE NAV BAR */}
            <div className="w-full">
              <div className={`max-w-7xl mx-auto ${LOGO_PL} ${LOGO_PL_XL}`}>
                <div className="flex items-center justify-between px-5 py-3">
                  <nav className="flex items-center gap-4 xl:gap-7">
                    {mainNavLinks.map((link, i) => (
                      <React.Fragment key={`${link.label}-${i}`}>
                        <Link
                          href={link.href}
                          className={`font-futura text-xs xl:text-sm font-medium uppercase tracking-wide transition whitespace-nowrap ${
                            pathname === link.href
                              ? "text-[#BA0C2F] font-semibold"
                              : `${menuColor} hover:text-[#BA0C2F]`
                          }`}
                        >
                          {link.label}
                        </Link>

                        {link.label === "ABOUT" && (
                          <div
                            className="relative"
                            onMouseEnter={handleProductsMouseEnter}
                            onMouseLeave={handleProductsMouseLeave}
                          >
                            <button
                              type="button"
                              className={`flex items-center gap-1 font-futura text-xs xl:text-sm font-medium uppercase tracking-wide transition whitespace-nowrap ${
                                pathname.includes("/healthcare") ||
                                pathname.includes("/parentscare") ||
                                pathname.includes("/vehicle-damage") ||
                                pathname.includes("/motor") ||
                                pathname.includes("/travel") ||
                                pathname.includes("/self") ||
                                pathname.includes("/home-insurance")
                                  ? "text-[#BA0C2F] font-semibold cursor-pointer"
                                  : `${menuColor} hover:text-[#BA0C2F] cursor-pointer`
                              }`}
                            >
                              PRODUCTS
                              <ChevronDown
                                size={13}
                                className={`transition-transform duration-300 ${
                                  isProductsHovered
                                    ? "rotate-180 text-[#BA0C2F]"
                                    : ""
                                }`}
                              />
                            </button>

                            {isProductsHovered && (
                              <div
                                className={`dropdown-enter absolute top-[calc(100%-2px)] left-[-120px] pt-3 ${
                                  activeMegaMenu === "motor"
                                    ? "w-[820px]"
                                    : "w-[520px]"
                                }`}
                                onMouseEnter={handleProductsMouseEnter}
                                onMouseLeave={handleProductsMouseLeave}
                              >
                                <div className="rounded-b-[22px] bg-white shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300">
                                  <div className="grid grid-cols-[190px_1fr] gap-5 p-5">
                                    {/* LEFT BUTTONS */}
                                    <div className="flex flex-col gap-2">
                                      {megaMenuData.map((category) => {
                                        const Icon = category.icon;
                                        const isActive =
                                          activeMegaMenu === category.key;

                                        return (
                                          <button
                                            key={category.key}
                                            type="button"
                                            onClick={() =>
                                              setActiveMegaMenu(category.key)
                                            }
                                            onMouseEnter={() =>
                                              setActiveMegaMenu(category.key)
                                            }
                                            className={`flex items-center gap-2 rounded-[8px] px-4 py-2 text-left font-futura text-[15px] font-semibold transition-all ${
                                              isActive
                                                ? "bg-[#BA0C2F] text-white shadow-md"
                                                : "bg-gray-100 text-[#202B4A] hover:bg-[#BA0C2F]/10 hover:text-[#BA0C2F]"
                                            }`}
                                          >
                                            <Icon size={20} />
                                            <span>{category.label}</span>
                                          </button>
                                        );
                                      })}
                                    </div>

                                    {/* RIGHT LINKS */}
                                    {activeMegaMenu === "motor" ? (
                                      <div className="grid grid-cols-2 gap-x-16 pr-2">
                                        {/* Motor Column 1 */}
                                        <div className="flex flex-col">
                                          {activeCategory.items
                                            .slice(0, 4)
                                            .map((item, index) => (
                                              <Link
                                                key={`${activeCategory.key}-${item.label}-${index}`}
                                                href={item.href}
                                                className="border-b border-gray-200 py-3 font-futura text-[17px] font-medium leading-[1.35] text-[#202B4A] transition hover:text-[#BA0C2F]"
                                                onClick={() =>
                                                  setIsProductsHovered(false)
                                                }
                                              >
                                                {item.label}
                                              </Link>
                                            ))}
                                        </div>

                                        {/* Motor Column 2 */}
                                        <div className="flex flex-col">
                                          {activeCategory.items
                                            .slice(4)
                                            .map((item, index) => (
                                              <Link
                                                key={`${activeCategory.key}-${item.label}-${index}`}
                                                href={item.href}
                                                className="border-b border-gray-200 py-3 font-futura text-[17px] font-medium leading-[1.35] text-[#202B4A] transition hover:text-[#BA0C2F]"
                                                onClick={() =>
                                                  setIsProductsHovered(false)
                                                }
                                              >
                                                {item.label}
                                              </Link>
                                            ))}
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="flex flex-col pr-2">
                                        {activeCategory.items.map(
                                          (item, index) => (
                                            <Link
                                              key={`${activeCategory.key}-${item.label}-${index}`}
                                              href={item.href}
                                              className="border-b border-gray-200 py-[6px] font-futura text-[17px] font-medium  text-[#202B4A] transition hover:text-[#BA0C2F]"
                                              onClick={() =>
                                                setIsProductsHovered(false)
                                              }
                                            >
                                              {item.label}
                                            </Link>
                                          ),
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </nav>

                  {/* Right side */}
                  <div className="flex items-center gap-4 shrink-0">
                    {/* <button
                      type="button"
                      className={`text-${menuColor === "text-white" ? "white" : "gray-900"} hover:text-[#BA0C2F] transition`}
                      aria-label="Search"
                    >
                      <Search size={19} />
                    </button> */}
                    <button
                      type="button"
                      className={`transition ${
                        menuColor?.includes("text-white")
                          ? "text-white hover:text-gray-300"
                          : "text-gray-900 hover:text-[#BA0C2F]"
                      }`}
                      aria-label="Search"
                    >
                      <Search size={19} />
                    </button>

                    <div className="inline-flex items-center rounded-full border-2 border-[#BA0C2F] bg-[#BA0C2F] p-[3px] gap-[2px]">
                      <button
                        type="button"
                        onClick={() => {
                          setActive("individual");
                          router.push("/");
                        }}
                        className={`px-5 py-1.5 rounded-full font-futura text-xs xl:text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
                          active === "individual"
                            ? "bg-white text-[#BA0C2F]"
                            : "bg-transparent text-white hover:bg-white/10"
                        }`}
                      >
                        INDIVIDUAL
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setActive("business");
                          router.push("/business");
                        }}
                        className={`px-5 py-1.5 rounded-full font-futura text-xs xl:text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
                          active === "business"
                            ? "bg-white text-[#BA0C2F]"
                            : "bg-transparent text-white hover:bg-white/10"
                        }`}
                      >
                        BUSINESS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LOGO OVERLAY */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="max-w-7xl mx-auto h-full relative">
                <div
                  className={`absolute top-0 left-0 bottom-0 ${LOGO_W} ${LOGO_W_XL} pointer-events-auto`}
                >
                  <Link href="/">
                    <Image
                      src={Jubilee_Logo}
                      alt="Jubilee General Insurance"
                      className="w-36 xl:w-40 object-contain cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          <div className="w-full bg-gray-900 text-white text-xs py-2 px-4">
            <button
              type="button"
              onClick={() => setIsMobileTopOpen(!isMobileTopOpen)}
              className="w-full flex justify-between items-center"
            >
              <span className="font-futura uppercase tracking-wide">
                Quick Links
              </span>

              {isMobileTopOpen ? <X size={16} /> : <Menu size={16} />}
            </button>

            {isMobileTopOpen && (
              <div className="flex flex-col gap-3 py-3 mt-1 border-t border-white/20">
                {topNavLinks.map((link, i) => (
                  <Link
                    key={`${link.label}-${i}`}
                    href={link.href}
                    className="font-futura hover:text-gray-300 transition uppercase tracking-wide"
                    onClick={() => setIsMobileTopOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="flex items-center gap-3 pt-2 border-t border-white/20">
                  <span className="font-futura">EN</span>
                  <span className="text-white/40">|</span>
                  <span className="font-futura">UR</span>

                  <button
                    type="button"
                    className="ml-2 bg-white/20 rounded-full p-1"
                    aria-label="User"
                  >
                    <User size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="w-full bg-white border-b border-gray-200 px-4 py-2">
            <div className="flex items-center justify-between">
              <Link href="/" className="inline-flex">
                <Image
                  src={Jubilee_Logo}
                  alt="Jubilee"
                  className="h-10 w-auto object-contain"
                />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="text-[#6E6E6E] hover:text-[#BA0C2F] transition"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>

                <button
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-[#6E6E6E] hover:text-[#BA0C2F] transition p-1"
                  aria-label="Menu"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                <div className="inline-flex items-center rounded-full border-2 border-[#BA0C2F] bg-[#BA0C2F] p-[2px] gap-[1px]">
                  <button
                    type="button"
                    onClick={() => {
                      setActive("individual");
                      router.push("/");
                    }}
                    className={`px-2.5 py-0.5 rounded-full font-futura text-[10px] font-semibold uppercase tracking-wide transition-all ${
                      active === "individual"
                        ? "bg-white text-[#BA0C2F]"
                        : "bg-transparent text-white"
                    }`}
                  >
                    IND
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActive("business");
                      router.push("/business");
                    }}
                    className={`px-2.5 py-0.5 rounded-full font-futura text-[10px] font-semibold uppercase tracking-wide transition-all ${
                      active === "business"
                        ? "bg-white text-[#BA0C2F]"
                        : "bg-transparent text-white"
                    }`}
                  >
                    BIZ
                  </button>
                </div>
              </div>
            </div>

            {isMenuOpen && (
              <nav className="flex flex-col gap-1 mt-3 pt-3 border-t border-gray-200">
                {mainNavLinks.map((link, i) => (
                  <Link
                    key={`${link.label}-${i}`}
                    href={link.href}
                    className="font-futura text-sm uppercase tracking-wide text-[#6E6E6E] hover:text-[#BA0C2F] py-2 px-1 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="border-t border-gray-100 mt-1 pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      setIsMobileProductsOpen(!isMobileProductsOpen)
                    }
                    className="w-full flex items-center justify-between py-2 px-1 font-futura text-sm uppercase tracking-wide text-[#6E6E6E] hover:text-[#BA0C2F] transition"
                  >
                    <span>PRODUCTS</span>

                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        isMobileProductsOpen ? "rotate-180 text-[#BA0C2F]" : ""
                      }`}
                    />
                  </button>

                  {isMobileProductsOpen && (
                    <div className="mt-2 flex flex-col gap-3 pb-2">
                      {megaMenuData.map((category) => {
                        const Icon = category.icon;
                        const isActive = activeMegaMenu === category.key;

                        return (
                          <div key={category.key}>
                            <button
                              type="button"
                              onClick={() => setActiveMegaMenu(category.key)}
                              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 font-futura text-sm font-semibold uppercase transition ${
                                isActive
                                  ? "bg-[#BA0C2F] text-white"
                                  : "bg-gray-100 text-[#202B4A]"
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <Icon size={16} />
                                {category.label}
                              </span>

                              <ChevronDown
                                size={14}
                                className={`transition-transform ${
                                  isActive ? "rotate-180" : ""
                                }`}
                              />
                            </button>

                            {isActive && (
                              <div className="ml-4 mt-2 flex flex-col gap-1 border-l border-gray-200 pl-3">
                                {category.items.map((item, index) => (
                                  <Link
                                    key={`${category.key}-${item.label}-${index}`}
                                    href={item.href}
                                    className="rounded-lg px-3 py-2 font-futura text-xs font-semibold text-gray-700 hover:bg-red-50 hover:text-[#BA0C2F] transition"
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setIsMobileProductsOpen(false);
                                    }}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="flex gap-2 pt-3 border-t border-gray-200 mt-1 pb-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActive("individual");
                      router.push("/");
                      setIsMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 font-futura font-bold text-xs rounded-full uppercase tracking-wide transition border-2 border-[#BA0C2F] ${
                      active === "individual"
                        ? "bg-white text-[#BA0C2F]"
                        : "bg-[#BA0C2F] text-white"
                    }`}
                  >
                    INDIVIDUAL
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActive("business");
                      router.push("/business");
                      setIsMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 font-futura font-bold text-xs rounded-full uppercase tracking-wide transition border-2 border-[#BA0C2F] ${
                      active === "business"
                        ? "bg-white text-[#BA0C2F]"
                        : "bg-[#BA0C2F] text-white"
                    }`}
                  >
                    BUSINESS
                  </button>
                </div>
              </nav>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
