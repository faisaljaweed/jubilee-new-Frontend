// "use client";

// import React, { useEffect, useRef, useState } from "react";

// const defaultItems = [
//   { title: "Motor", image: "/img/Motor.jpeg", href: "#motor" },
//   { title: "Travel", image: "/img/Travel.jpeg", href: "#travel" },
//   { title: "Health", image: "/img/Card-01.png", href: "#health" },
//   { title: "Self", image: "/img/Self Insurance.jpeg", href: "#self" },
//   { title: "Home", image: "/img/Home.jpeg", href: "#home" },
// ];

// const heightClasses = [
//   "h-[180px] sm:h-[215px] md:h-[245px] lg:h-[285px]",
//   "h-[215px] sm:h-[250px] md:h-[290px] lg:h-[330px]",
//   "h-[235px] sm:h-[275px] md:h-[315px] lg:h-[360px]",
//   "h-[215px] sm:h-[250px] md:h-[290px] lg:h-[330px]",
//   "h-[180px] sm:h-[215px] md:h-[245px] lg:h-[285px]",
// ];

// const STAGGER_MS = [120, 60, 0, 60, 120];

// interface InsuranceCardProps {
//   item: { title: string; image: string; href: string; heightClass?: string };
//   index: number;
//   isVisible: boolean;
//   className?: string;
//   onPlanClick?: (title: string) => void;
// }

// function InsuranceCard({
//   item,
//   index,
//   isVisible,
//   className = "",
//   onPlanClick,
// }: InsuranceCardProps) {
//   const heightClass =
//     item.heightClass || heightClasses[index % heightClasses.length];

//   const isHealthCard = index === 2;
//   const delay = STAGGER_MS[index] ?? 0;

//   return (
//     <a
//       href={item.href || "#"}
//       onClick={(e) => {
//         e.preventDefault();
//         onPlanClick?.(item.title);
//       }}
//       aria-label={`View ${item.title} plans`}
//       {...(isHealthCard ? { "data-health-card": "true" } : {})}
//       className={`
//         group relative block w-[145px] shrink-0 overflow-hidden rounded-[20px]
//         bg-neutral-200 shadow-[0_12px_28px_rgba(0,0,0,0.12)]
//         hover:shadow-[0_18px_36px_rgba(0,0,0,0.20)]
//         active:scale-[0.98]
//         sm:w-[170px] md:w-[195px] lg:w-[220px]
//         ${heightClass} ${className}
//       `}
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible
//           ? "translateY(0) scale(1)"
//           : "translateY(32px) scale(0.95)",
//         transition: `opacity 420ms ease ${delay}ms, transform 420ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
//         willChange: "opacity, transform",
//       }}
//     >
//       <img
//         src={item.image}
//         alt={item.title}
//         className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
//       />

//       <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-[#8a1732]/18 to-[#3a0714]/58" />
//       <div className="absolute inset-0 bg-[#8f1b35]/18 mix-blend-multiply" />
//       <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:bg-white/10 group-hover:opacity-100" />

//       <div className="absolute inset-x-0 bottom-8 flex flex-col items-center px-3 text-center transition-all duration-300 group-hover:bottom-10">
//         <h3 className="text-[13px] font-futura font-medium uppercase leading-none tracking-[0.02em] text-white drop-shadow sm:text-[15px] md:text-[17px] lg:text-[22px]">
//           {item.title}
//         </h3>

//         <span className="mt-2 rounded-full font-futura bg-white px-3.5 py-1.5 text-[8px] font-normal uppercase tracking-[0.04em] text-[#b41432] shadow-sm transition duration-300 group-hover:bg-[#b41432] group-hover:text-white sm:text-[9px] md:text-[12px]">
//           View Plans
//         </span>
//       </div>
//     </a>
//   );
// }

// interface InsuranceCardsSectionProps {
//   title?: string;
//   items?: typeof defaultItems;
//   className?: string;
//   forceVisible?: boolean;
//   onPlanClick?: (title: string) => void;
// }

// export default function InsuranceCardsSection({
//   title = "THE ONLY THING WE Don't Cover is regret",
//   items = defaultItems,
//   className = "",
//   forceVisible,
//   onPlanClick,
// }: InsuranceCardsSectionProps) {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const [observerVisible, setObserverVisible] = useState(false);

//   useEffect(() => {
//     if (typeof forceVisible !== "undefined") return;

//     const section = sectionRef.current;
//     if (!section) return;

//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setObserverVisible(true);
//           obs.disconnect();
//         }
//       },
//       { threshold: 0.2, rootMargin: "-80px 0px" },
//     );

//     obs.observe(section);

//     return () => obs.disconnect();
//   }, [forceVisible]);

//   const isVisible =
//     typeof forceVisible !== "undefined" ? !!forceVisible : observerVisible;

//   return (
//     <section
//       ref={sectionRef}
//       className={`w-full bg-white px-4 py-12 mt-12 sm:px-6 md:py-14 ${className}`}
//     >
//       <div className="mx-auto max-w-[1280px]">
//         <h2
//           style={{
//             opacity: isVisible ? 1 : 0,
//             transform: isVisible ? "translateY(0)" : "translateY(-16px)",
//             transition:
//               "opacity 420ms ease, transform 420ms cubic-bezier(0.22,1,0.36,1)",
//             willChange: "opacity, transform",
//           }}
//           className="text-center font-bold font-futura uppercase text-[#4A4A4A] sm:text-[36px] md:mb-4 md:text-[52px]  mx-auto"
//         >
//           {title}
//         </h2>

//         <div
//           className="
//             mx-auto flex h-[260px] max-w-full items-center
//             justify-start gap-4 overflow-x-auto px-1 pb-2 pt-2
//             [scrollbar-width:none] sm:h-[315px] sm:justify-center sm:gap-5
//             md:h-[365px] md:gap-6 lg:h-[410px] [&::-webkit-scrollbar]:hidden
//           "
//         >
//           {items.map((item, index) => (
//             <div
//               key={`${item.title}-${index}`}
//               className="flex h-full shrink-0 items-center"
//             >
//               <InsuranceCard
//                 item={item}
//                 index={index}
//                 isVisible={isVisible}
//                 onPlanClick={onPlanClick}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";

const defaultItems = [
  { title: "Motor", image: "/img/Motor.jpeg", href: "#motor" },
  { title: "Travel", image: "/img/Travel1.jpeg", href: "#travel" },
  { title: "Health", image: "/img/Card-01.png", href: "#health" },
  { title: "Self", image: "/img/self1.jpeg", href: "#self" },
  { title: "Home", image: "/img/Home1.jpeg", href: "#home" },
];

const heightClasses = [
  "h-[180px] sm:h-[215px] md:h-[245px] lg:h-[285px]",
  "h-[215px] sm:h-[250px] md:h-[290px] lg:h-[330px]",
  "h-[235px] sm:h-[275px] md:h-[315px] lg:h-[360px]",
  "h-[215px] sm:h-[250px] md:h-[290px] lg:h-[330px]",
  "h-[180px] sm:h-[215px] md:h-[245px] lg:h-[285px]",
];

const STAGGER_MS = [120, 60, 0, 60, 120];

interface InsuranceCardProps {
  item: { title: string; image: string; href: string; heightClass?: string };
  index: number;
  isVisible: boolean;
  isActive?: boolean;
  className?: string;
  onPlanClick?: (title: string) => void;
}

function InsuranceCard({
  item,
  index,
  isVisible,
  isActive = false,
  className = "",
  onPlanClick,
}: InsuranceCardProps) {
  const heightClass =
    item.heightClass || heightClasses[index % heightClasses.length];

  const isHealthCard = index === 2;
  const delay = STAGGER_MS[index] ?? 0;

  return (
    <a
      href={item.href || "#"}
      onClick={(e) => {
        e.preventDefault();
        onPlanClick?.(item.title);
      }}
      aria-label={`View ${item.title} plans`}
      {...(isHealthCard ? { "data-health-card": "true" } : {})}
      className={`
        group relative block w-[145px] shrink-0 overflow-hidden rounded-[20px]
        bg-neutral-200 shadow-[0_12px_28px_rgba(0,0,0,0.12)]
        hover:shadow-[0_18px_36px_rgba(0,0,0,0.20)]
        active:scale-[0.98]
        sm:w-[170px] md:w-[195px] lg:w-[220px]
        ${heightClass} ${className}
      `}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(32px) scale(0.95)",
        transition: `opacity 420ms ease ${delay}ms, transform 420ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-[#8a1732]/18 to-[#3a0714]/58" />
      <div className="absolute inset-0 bg-[#8f1b35]/18 mix-blend-multiply" />
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:bg-white/10 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center px-3 text-center transition-all duration-300 group-hover:bottom-10">
        <h3 className="text-[13px] font-futura font-medium uppercase leading-none tracking-[0.02em] text-white drop-shadow sm:text-[15px] md:text-[17px] lg:text-[22px]">
          {item.title}
        </h3>

        <span
          className={`mt-2 rounded-full font-futura px-3.5 py-1.5 text-[8px] font-normal uppercase tracking-[0.04em] shadow-sm transition duration-300 sm:text-[9px] md:text-[12px] ${
            isActive
              ? "bg-[#BA0C2F] text-white"
              : "bg-white text-[#b41432] group-hover:bg-[#b41432] group-hover:text-white"
          }`}
        >
          View Plans
        </span>
      </div>
    </a>
  );
}

interface InsuranceCardsSectionProps {
  title?: string;
  items?: typeof defaultItems;
  className?: string;
  forceVisible?: boolean;
  onPlanClick?: (title: string) => void;
}

export default function InsuranceCardsSection({
  title = "THE ONLY THING WE Don't Cover is regret",
  items = defaultItems,
  className = "",
  forceVisible,
  onPlanClick,
}: InsuranceCardsSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [observerVisible, setObserverVisible] = useState(false);
  const [activePlan, setActivePlan] = useState("Health");

  useEffect(() => {
    if (typeof forceVisible !== "undefined") return;

    const section = sectionRef.current;
    if (!section) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setObserverVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "-80px 0px" },
    );

    obs.observe(section);

    return () => obs.disconnect();
  }, [forceVisible]);

  const isVisible =
    typeof forceVisible !== "undefined" ? !!forceVisible : observerVisible;

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-white px-4 py-12 mt-12 sm:px-6 md:py-14 ${className}`}
    >
      <div className="mx-auto max-w-[1280px]">
        <h2
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-16px)",
            transition:
              "opacity 420ms ease, transform 420ms cubic-bezier(0.22,1,0.36,1)",
            willChange: "opacity, transform",
          }}
          className="text-center font-bold font-futura uppercase text-[#4A4A4A] sm:text-[36px] md:mb-4 md:text-[52px]  mx-auto"
        >
          {title}
        </h2>

        <div
          className="
            mx-auto flex h-[260px] max-w-full items-center
            justify-start gap-4 overflow-x-auto px-1 pb-2 pt-2
            [scrollbar-width:none] sm:h-[315px] sm:justify-center sm:gap-5
            md:h-[365px] md:gap-6 lg:h-[410px] [&::-webkit-scrollbar]:hidden
          "
        >
          {items.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="flex h-full shrink-0 items-center"
            >
              <InsuranceCard
                item={item}
                index={index}
                isVisible={isVisible}
                isActive={activePlan === item.title}
                onPlanClick={(title) => {
                  setActivePlan(title);
                  onPlanClick?.(title);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
