"use client";

import { useEffect, useRef } from "react";
import "./sustainability.css";

const strategyPillars = [
  {
    icon: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 24 24"
        fill="none"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <path
          d="M12 21V12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 12C12 7.5 15.5 4 20 4C20 8.5 16.5 12 12 12Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15C8.2 15 5 12.2 4 8.5C7.8 8.5 11 11.3 12 15Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 21H19"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Responsible Insurance",
    text: "Underwriting discipline and resilience planning for a changing world.",
  },
  {
    icon: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 24 24"
        fill="none"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <path
          d="M4 12C4 8.13 7.13 5 11 5H13C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19H11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M8 19C8 19 4 17 4 12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 8V16M9 11L12 8L15 11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Environmental Stewardship",
    text: "Reducing operational impact through digitalization and green practices.",
  },
  {
    icon: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 24 24"
        fill="none"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <path
          d="M17 21V19C17 16.79 15.21 15 13 15H5C2.79 15 1 16.79 1 19V21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11C11.21 11 13 9.21 13 7C13 4.79 11.21 3 9 3C6.79 3 5 4.79 5 7C5 9.21 6.79 11 9 11Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 21V19C22.99 17.18 21.76 15.6 20 15.13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M16 3.13C17.76 3.6 19 5.19 19 7.01C19 8.83 17.76 10.42 16 10.89"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Community Impact",
    text: "Focused investments in healthcare, education and livelihoods.",
  },
  {
    icon: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 24 24"
        fill="none"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <path
          d="M12 22C12 22 3 18 3 11V5L12 2L21 5V11C21 18 12 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12L11 14L15 10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Governance & Ethics",
    text: "Board-led transparency, accountability and compliance frameworks.",
  },
  {
    icon: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 24 24"
        fill="none"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <path
          d="M9 3H5C3.9 3 3 3.9 3 5V9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M15 3H19C20.1 3 21 3.9 21 5V9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M9 21H5C3.9 21 3 20.1 3 19V15"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M15 21H19C20.1 21 21 20.1 21 19V15"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "Digital Transformation",
    text: "Analytics and optimization for sustainable, data-driven growth.",
  },
];

const environmentMetrics = [
  { value: "809.51", label: "Total GHG Emissions (tCO₂e)" },
  { value: "0.0305", label: "Emission Intensity" },
  { value: "12.1 Mn", label: "Water Consumption (litres)" },
  { value: "100%", label: "Grid Electricity" },
];

const greenOffices = ["Karachi", "Lahore", "Islamabad"];

const sdgCards = [
  {
    tag: "/Icons/Sustain/SDG 2.png",
    amount: "PKR 46.3 Mn",
    label: "No Poverty",
  },
  {
    tag: "/Icons/Sustain/SDG 3.png",
    amount: "PKR 3.6 Bn",
    label: "Health Claims Paid",
  },
  {
    tag: "/Icons/Sustain/SDG 4.png",
    amount: "PKR 16 Mn",
    label: "Education Investment",
  },
  {
    tag: "/Icons/Sustain/SDG 5.png",
    amount: "30%",
    label: "Women on Board",
  },
];

const workforceRows = [
  { value: "710", label: "Total Employees" },
  { value: "0", label: "Workplace Injuries" },
  { value: "0", label: "Complaints Reported" },
];

const governanceSteps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 21H21M3 10H21M5 6L12 3L19 6M4 10V21M20 10V21M8 14V17M12 14V17M16 14V17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Board of Directors",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 5H7C5.9 5 5 5.9 5 7V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V7C19 5.9 18.1 5 17 5H15M9 5C9 5.55 9.45 6 10 6H14C14.55 6 15 5.55 15 5M9 5C9 4.45 9.45 4 10 4H14C14.55 4 15 4.45 15 5M9 12L11 14L15 10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "BRCC ESG Oversight",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 21V19C20 16.79 18.21 15 16 15H8C5.79 15 4 16.79 4 19V21M12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Executive Leadership",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Operational Integration",
  },
];

const governanceCards = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <path
          d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Code of Conduct",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <path
          d="M12 22C12 22 3 18 3 11V5L12 2L21 5V11C21 18 12 22 12 22ZM9 12L11 14L15 10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Data Privacy & Trust",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <path
          d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Whistleblowing",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <path
          d="M9 11L12 14L22 4M21 12V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Compliance Framework",
  },
];

export default function Sustainability() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const animatedItems = root.querySelectorAll(".js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );

    animatedItems.forEach((el, index) => {
      const item = el as HTMLElement;
      item.style.opacity = "0";
      item.style.transform = "translateY(24px)";
      item.style.transition =
        "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
      item.style.transitionDelay = `${(index % 5) * 0.08}s`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO BANNER (background set via sustainability.css) ── */}
      <div className="sustainability-hero relative flex min-h-screen w-full items-center bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="w-full relative">
          <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 md:px-0">
            <h1 className="font-futura text-[34px] font-bold uppercase text-white md:text-[44px] lg:text-[50px] max-w-2xl leading-14">
              Sustainability at Jubilee General Insurance
            </h1>

            <p className="mt-3 max-w-[560px] font-futura text-[20px] font-medium leading-[1.6] text-white md:text-[24px] tracking-wide">
              RESILIENT TODAY. RESPONSIBLE TOMORROW.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a
                href="#strategy"
                className="bg-[#BA0C2F] text-white px-10 py-2 font-futura rounded-full uppercase font-medium text-md cursor-pointer"
              >
                Explore ESG Strategy
              </a>
              <a
                href="#"
                className="border border-white text-white px-10 py-2 font-futura rounded-full uppercase font-medium text-md cursor-pointer"
              >
                Download Report
              </a>
            </div>

            {/* Hero stats */}
            {/* <div className="absolute right-10 bottom-10  t-14 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-lg">
              {[
                { value: "809", label: "tCO₂e Emissions" },
                { value: "710", label: "Employees" },
                { value: "2030", label: "Net Zero Target" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/30 bg-white/10 p-5 backdrop-blur-md"
                >
                  <div className="font-futura text-3xl font-extrabold leading-none text-white">
                    {item.value}
                  </div>
                  <div className="mt-2 font-futura text-sm text-white/70 uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
              ))}
            </div> */}
            <div className="absolute right-10 bottom-10  t-14 grid grid-cols-1 gap-10 sm:grid-cols-2 max-w-lg ">
              <div
                className="
                  flex
                  h-[82px]
                  w-[200px]
                  flex-col
                  items-center
                  justify-center
                  rounded-md
                  bg-white
                  px-5
                  py-3
                  shadow-2xl
                  xl:h-[92px]
                  xl:w-[230px]
                "
                // style={fromRight(heroOn, 200)}
              >
                <span className="block w-full text-center text-[20px] font-medium uppercase tabular-nums text-[#BA0C2F] ">
                  <div className="mt-1 text-center text-[30px] uppercase text-gray-600 ">
                    809
                  </div>
                  tCO₂e Emissions
                </span>
              </div>

              <div
                className="
                  flex
                  h-[82px]
                  w-[200px]
                  flex-col
                  items-center
                  justify-center
                  rounded-md
                  bg-white
                  px-5
                  py-3
                  shadow-2xl
                  xl:h-[92px]
                  xl:w-[230px]
                "
                // style={fromRight(heroOn, 360)}
              >
                <span className="block w-full text-center text-[20px] font-medium uppercase tabular-nums text-[#BA0C2F] ">
                  <div className="mt-1 text-center text-[30px] uppercase text-gray-600 ">
                    2030
                  </div>
                  Net Zero Target
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STRATEGY ── */}
      <section id="strategy" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="flex flex-col space-y-4 mb-14">
          <h2 className="text-[#4A4A4A] uppercase text-center font-extrabold text-4xl md:text-5xl lg:text-6xl font-futura">
            Our Sustainability Approach
          </h2>
          <span className="text-black uppercase text-center font-normal text-xl font-futura">
            Sustainability Embedded Into Protection &amp; Progress
          </span>
          <p className="mt-2 max-w-2xl mx-auto font-futura text-[16px] leading-[1.8] text-[#666666] text-center">
            Our sustainability strategy strengthens how we manage risk, build
            trust, improve competitiveness, and deliver long-term value.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {strategyPillars.map((item, index) => (
            <div
              key={index}
              className="js-reveal group relative overflow-hidden rounded-[28px] border border-[#eeeeee] bg-white px-6 py-9 text-center shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2  hover:shadow-[0_24px_70px_rgba(186,12,47,0.14)]"
            >
              {/* Decorative blobs */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-r from-[#0E3B2E]/20 via-[#145A43]/20 to-[#2A7A5C]/20 transition-all duration-300 group-hover:scale-125 " />
              {/* <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-[#4A4A4A]/5 transition-all duration-300 group-hover:scale-125" /> */}

              {/* Icon */}
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F8F8F8] text-[#4A4A4A] shadow-inner transition-all duration-300 group-hover:bg-gradient-to-r from-[#0E3B2E] via-[#145A43] to-[#2A7A5C] group-hover:text-white">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative mt-7 font-futura text-[15px] font-extrabold uppercase tracking-[0.4px] text-[#0E3B2E] transition-colors duration-300 group-hover:text-[#4A4A4A]">
                {item.title}
              </h3>

              {/* Expanding underline */}
              <div className="relative mx-auto mt-4 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#0E3B2E] via-[#145A43] to-[#2A7A5C] transition-all duration-300 group-hover:w-16" />

              <p className="relative mt-4 font-futura text-[13.5px] leading-[1.65] text-[#666666]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ENVIRONMENT ── */}
      <section className="bg-gradient-to-r from-[#0E3B2E] via-[#145A43] to-[#2A7A5C] py-16 md:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-10 lg:px-12">
          <div className="flex flex-col gap-6 mb-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-futura text-[11px] font-extrabold uppercase tracking-[0.28em] text-white bg-[#BA0C2F]/20 px-4 py-2 rounded-full">
                Environmental Stewardship
              </span>
              <h2 className="mt-5 max-w-3xl font-futura text-4xl md:text-5xl font-extrabold uppercase leading-[1.08] text-white">
                Reducing Operational Impact While Building Long-Term Resilience
              </h2>
            </div>
            <div className="w-fit shrink-0 rounded-[28px] border border-white/15 bg-white/10 px-9 py-7 backdrop-blur-xl">
              <div className="font-futura text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">
                Commitment
              </div>
              <div className="mt-2 font-futura text-3xl font-extrabold text-white md:text-4xl">
                Net Zero by 2030
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {environmentMetrics.map((item) => (
              <div
                key={item.label}
                className="js-reveal group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-white hover:bg-white/10"
              >
                {/* <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#BA0C2F]/15 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#BA0C2F]/25" /> */}
                <div className="relative font-futura text-[42px] font-extrabold leading-none tracking-[-1px] text-white">
                  {item.value}
                </div>
                <div className="relative mt-4 font-futura text-sm leading-relaxed text-white/55">
                  {item.label}
                </div>
                <div className="relative mt-4 h-[3px] w-10 rounded-full bg-white transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>

          {/* Green Offices */}
          <div className="mb-14">
            <div className="js-reveal group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-white md:p-10">
              {/* <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#BA0C2F]/20 blur-2xl transition-all duration-500 group-hover:scale-125" /> */}
              <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

              <div className="relative">
                <div className="font-futura text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">
                  Green Office Certification
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3 font-futura text-3xl font-extrabold text-white md:text-5xl">
                  <span>Karachi</span>
                  <span className="text-white">-</span>
                  <span>Islamabad</span>
                  <span className="text-white">-</span>
                  <span>Lahore</span>
                </div>

                <div className="mt-5 h-[3px] w-16 rounded-full bg-white transition-all duration-300 group-hover:w-28" />

                <div className="mt-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  {/* <p className="max-w-3xl font-futura text-sm leading-7 text-white/70 md:text-base">
                    Our Green Office Program is proudly implemented across
                    Karachi, Islamabad, and Lahore, reinforcing our commitment
                    to sustainable workplace practices.
                  </p> */}

                  <div className="inline-flex w-fit shrink-0 items-center rounded-full border border-white bg-[#BA0C2F]/20 px-6 py-3 font-futura text-xs font-bold uppercase tracking-wide text-white/85">
                    WWF Certified
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Conservation Banner */}
          <div className="js-reveal grid gap-10 rounded-[36px] bg-white p-8 md:p-14 lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
              <span className="font-futura text-[11px] font-extrabold uppercase tracking-[0.28em] text-black">
                Conservation Impact
              </span>
              <h3 className="mt-5 font-futura text-[34px] font-extrabold uppercase leading-[1.12] text-black md:text-[38px]">
                Supporting sustainable ecosystem across northern pakistan by
                protecting wildlife
              </h3>
              <p className="mt-5 max-w-2xl font-futura text-[15px] leading-[1.8] text-black">
                Insurance-led resilience initiatives supporting rural
                livelihoods and helping protect endangered wildlife including
                the snow leopard and high-altitude biodiversity.
              </p>
            </div>
            <div className="flex h-[280px] items-center justify-center rounded-[28px] border border-white/15 bg-white/10 overflow-hidden">
              <img
                src="/img/sustainability/Wild life.jpeg"
                alt="sustainability image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-10 lg:px-12">
          <div className="flex flex-col space-y-4 mb-14">
            <h2 className="text-[#4A4A4A] uppercase text-center font-extrabold text-4xl md:text-5xl lg:text-6xl font-futura">
              Social Impact
            </h2>
            <span className="text-black uppercase text-center font-normal text-xl font-futura">
              Measured Through Meaningful Community Impact
            </span>
          </div>

          {/* SDG Cards */}
          <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sdgCards.map((item, index) => (
              <div
                key={index}
                className="js-reveal group relative overflow-hidden rounded-[28px] border border-[#eeeeee] bg-white px-6 py-9 text-center shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2  hover:shadow-[0_24px_70px_rgba(186,12,47,0.14)]"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-r from-[#0E3B2E]/20 via-[#145A43]/20 to-[#2A7A5C]/20 transition-all duration-300 group-hover:scale-125" />
                {/* <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-[#4A4A4A]/5 transition-all duration-300 group-hover:scale-125" /> */}

                <div className="flex justify-center">
                  <img src={item.tag} alt="" className="w-20 h-20" />
                </div>
                <div className="relative mt-4 font-futura text-[32px] font-extrabold leading-none tracking-[-1px] text-[#4A4A4A]">
                  {item.amount}
                </div>
                <div className="relative mx-auto mt-4 h-[3px] w-10 rounded-full bg-[#0E3B2E] transition-all duration-300 group-hover:w-16" />
                <div className="relative mt-4 font-futura text-sm text-[#666666] uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Workforce + Women Leadership */}
          <div className="">
            {/* Workforce Metrics */}
            {/* <div className="rounded-[36px] border border-[#eeeeee] bg-[#F7F7F7] p-8 md:p-11">
              <div className="mb-9 font-futura text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#BA0C2F]">
                Workforce Metrics
              </div>
              {workforceRows.map((item) => (
                <div
                  key={item.label}
                  className="js-reveal mb-6 flex items-center justify-between border-b border-black/10 pb-6 last:mb-0 last:border-b-0 last:pb-0"
                >
                  <div className="font-futura text-[48px] font-extrabold leading-none tracking-[-1px] text-[#4A4A4A]">
                    {item.value}
                  </div>
                  <div className="font-futura text-sm uppercase tracking-wide text-[#666666]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div> */}

            {/* Women Leadership */}
            <div className=" grid grid-cols-1 gap-6 md:grid-cols-[65%_35%] rounded-[36px] border border-[#BA0C2F]/20 bg-[linear-gradient(145deg,#3D0010_0%,#7B0020_40%,#BA0C2F_75%,#D4365A_100%)] p-8 text-white md:p-11">
              <div className="font-futura text-[10px] font-bold uppercase tracking-[0.28em] text-white/60 ">
                Women Leadership Forum
                <h3 className="mt-5 max-w-xl font-futura text-[32px] font-extrabold uppercase leading-[1.12] text-white md:text-[36px]">
                  Empowering Future Women Leaders Across The Organization
                </h3>
                <p className="mt-5 max-w-md font-futura text-sm leading-[1.8] text-white/65">
                  Mentorship, leadership development, and career acceleration
                  programs for women professionals at every level.
                </p>
              </div>
              <div className=" overflow-hidden rounded-[28px] border border-white/15 min-h-[160px]">
                <img
                  src="/img/sustainability/sustain_section1.jpg"
                  alt="women leadership"
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOVERNANCE ── */}
      <section className="bg-[#F7F7F7] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-10 lg:px-12">
          <div className="flex flex-col space-y-4 mb-14">
            <h2 className="text-[#4A4A4A] uppercase text-center font-extrabold text-4xl md:text-5xl lg:text-6xl font-futura">
              Governance &amp; Transparency
            </h2>
            <span className="text-black uppercase text-center font-normal text-xl font-futura">
              Built On Accountability &amp; Oversight
            </span>
          </div>

          {/* Governance Flow */}
          <div className="mb-9   md:p-14">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {governanceSteps.map((item, index) => (
                <div key={index} className="js-reveal relative text-center">
                  {index !== governanceSteps.length - 1 && (
                    <div className="absolute right-[-30px] top-9 hidden text-5xl text-[#0E3B2E]/40 lg:block">
                      →
                    </div>
                  )}
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F8F8F8] text-[#4A4A4A] shadow-inner">
                    {item.icon}
                  </div>
                  <div className="mx-auto mb-4 h-[3px] w-10 rounded-full bg-[#0E3B2E]" />
                  <div className="font-futura text-[15px] font-extrabold uppercase tracking-[0.4px] text-[#4A4A4A]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Governance Cards */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {governanceCards.map((item, index) => (
              <div
                key={index}
                className="js-reveal group relative overflow-hidden rounded-[28px] border border-[#eeeeee] bg-white px-6 py-9 text-center shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2  hover:shadow-[0_24px_70px_rgba(186,12,47,0.14)]"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-r from-[#0E3B2E]/20 via-[#145A43]/20 to-[#2A7A5C]/20 transition-all duration-300 group-hover:scale-125 " />
                {/* <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-[#4A4A4A]/5 transition-all duration-300 group-hover:scale-125" /> */}

                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F8F8F8] text-[#4A4A4A] shadow-inner transition-all duration-300 group-hover:bg-gradient-to-r from-[#0E3B2E] via-[#145A43] to-[#2A7A5C] group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="relative mt-7 font-futura text-[15px] font-extrabold uppercase tracking-[0.4px] text-[#0E3B2E] transition-colors duration-300 group-hover:text-[#4A4A4A]">
                  {item.label}
                </h3>
                <div className="relative mx-auto mt-4 h-[3px] w-10 rounded-full bg-[#0E3B2E] transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0E3B2E] via-[#145A43] to-[#2A7A5C] py-24 text-center text-white md:py-32">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:22px_22px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-5 md:px-10">
          <span className="font-futura text-[11px] font-bold uppercase tracking-[0.30em] text-white/60">
            The Commitment
          </span>

          <h2 className="mt-6 font-futura text-[42px] font-extrabold uppercase leading-[1.05] text-white md:text-[60px]">
            Protecting More Than <span className="">What Exists Today</span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl font-futura text-[17px] leading-[1.8] text-white/70">
            Our commitment to sustainability reflects our responsibility toward
            future generations, stronger communities, and a more resilient
            Pakistan.
          </p>

          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="border border-white rounded-full bg-[#BA0C2F]/20 px-10 py-3 font-futura text-sm font-bold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1"
            >
              Download ESG Report
            </a>
            <a
              href="#"
              className="rounded-full border border-white/25 bg-white/10 px-10 py-3 font-futura text-sm font-bold uppercase tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
            >
              Contact Sustainability Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
