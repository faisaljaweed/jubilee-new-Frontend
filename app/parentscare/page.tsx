// "use client";

// import { useMemo, useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import "./parentcare.css";
// import Container from "@/components/home/container";
// import { healthCarePackage, parentsPackageData } from "@/data/healthCareData";
// import Card_package from "@/components/healthCare/Card_package";
// import Button from "@/components/common/button";
// import person from "../../public/img/HealthCare/2d09dd2119eece4576b8ff0017b531d302b35e17.png";
// import { useGetAllTestimonialsQuery } from "@/lib/redux/services/testimonialsApi";
// import { testimonial_Slider } from "@/data/HomeDate";
// import axios from "axios";
// import TestimonialsPreview from "@/components/home/CarpuselDemoTestimonial";
// import QuoteSection from "@/components/home/QouteSection";
// import "../../app/home/home.css";
// import BenefitsTable from "@/components/parentCares/BenefitsTable";
// import {
//   parentsCarePlusNote,
//   parentsCarePlusPlans,
//   parentsCarePlusSections,
// } from "@/data/parentsCarePlusTableData";

// // ─────────────────────────────────────────────────────────────────────────────
// // Animation utilities
// // ─────────────────────────────────────────────────────────────────────────────

// function useInView(threshold = 0.1) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           obs.disconnect();
//         }
//       },
//       {
//         threshold,
//         rootMargin: "-120px 0px",
//       },
//     );

//     obs.observe(el);

//     return () => obs.disconnect();
//   }, [threshold]);

//   return { ref, visible };
// }

// const fromLeft = (on: boolean, delay = 0): React.CSSProperties => ({
//   opacity: on ? 1 : 0,
//   transform: on ? "translateX(0)" : "translateX(-52px)",
//   transition: `opacity 0.85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms,
//                transform 0.85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
//   willChange: "opacity, transform",
// });

// const fromRight = (on: boolean, delay = 0): React.CSSProperties => ({
//   opacity: on ? 1 : 0,
//   transform: on ? "translateX(0)" : "translateX(52px)",
//   transition: `opacity 0.85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms,
//                transform 0.85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
//   willChange: "opacity, transform",
// });

// const fadeUp = (on: boolean, delay = 0): React.CSSProperties => ({
//   opacity: on ? 1 : 0,
//   transform: on ? "translateY(0)" : "translateY(32px)",
//   transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
//   willChange: "opacity, transform",
// });

// const cardPop = (on: boolean, delay = 0): React.CSSProperties => ({
//   opacity: on ? 1 : 0,
//   transform: on ? "translateY(0) scale(1)" : "translateY(30px) scale(0.94)",
//   transition: `opacity 0.55s ease ${delay}ms,
//                transform 0.6s cubic-bezier(0.34,1.45,0.64,1) ${delay}ms`,
//   willChange: "opacity, transform",
// });

// function AnimatedCounter({
//   value,
//   run,
//   startValue = 0,
// }: {
//   value: string;
//   run: boolean;
//   startValue?: number;
// }) {
//   const [display, setDisplay] = useState(value);
//   const didRun = useRef(false);
//   const frameRef = useRef<number | null>(null);

//   useEffect(() => {
//     if (!run || didRun.current) return;

//     didRun.current = true;

//     const match = value.match(/^([^\d]*)(\d[\d,.]*)(.*)$/);
//     if (!match) return;

//     const [, prefix, rawNum, suffix] = match;

//     const target = parseFloat(rawNum.replace(/,/g, ""));
//     const start = startValue;

//     const duration = 1800;
//     const startTime = performance.now();

//     const tick = (now: number) => {
//       const progress = Math.min((now - startTime) / duration, 1);

//       const eased = 1 - Math.pow(1 - progress, 3);

//       // 🔥 reverse animation (start → target)
//       const current = Math.round(start - (start - target) * eased);

//       setDisplay(`${prefix}${current.toLocaleString()}${suffix}`);

//       if (progress < 1) {
//         frameRef.current = requestAnimationFrame(tick);
//       }
//     };

//     frameRef.current = requestAnimationFrame(tick);

//     return () => {
//       if (frameRef.current) cancelAnimationFrame(frameRef.current);
//     };
//   }, [run, value, startValue]);

//   return <>{display}</>;
// }

// interface HeroBanner {
//   _id: string;
//   title: string;
//   subtitle?: string;
//   buttonText?: string;
//   buttonLink?: string;
//   imageUrl: string;
// }

// const ParentCare = () => {
//   const [banner, setBanner] = useState<HeroBanner | null>(null);
//   const [bannerLoading, setBannerLoading] = useState(true);
//   const [bannerError, setBannerError] = useState(false);

//   const [heroOn, setHeroOn] = useState(false);

//   const [activeTrustCard, setActiveTrustCard] = useState(0);

//   const [activeParentPackage, setActiveParentPackage] =
//     useState<keyof typeof parentsPackageData>("OPD");

//   useEffect(() => {
//     if (bannerLoading) return;

//     const t = setTimeout(() => setHeroOn(true), 80);

//     return () => clearTimeout(t);
//   }, [bannerLoading]);

//   const { ref: whyHeadingRef, visible: whyHeadingOn } = useInView(0.1);
//   const { ref: whyCardsRef, visible: whyCardsOn } = useInView(0.1);
//   const { ref: plansRef, visible: plansOn } = useInView(0.08);
//   const { ref: quoteRef, visible: quoteOn } = useInView(0.1);
//   const { ref: ctaRef, visible: ctaOn } = useInView(0.15);
//   const { ref: testiRef, visible: testiOn } = useInView(0.08);

//   useEffect(() => {
//     const fetchBanner = async () => {
//       try {
//         const res = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_BASE_URL}/banners?category=product&subCategory=parentscare&isActive=true`,
//         );

//         const list: HeroBanner[] = res.data?.data ?? res.data ?? [];
//         const first = Array.isArray(list) ? list[0] : null;

//         setBanner(first ?? null);
//       } catch (err) {
//         console.error("ParentCare banner fetch error:", err);
//         setBannerError(true);
//       } finally {
//         setBannerLoading(false);
//       }
//     };

//     fetchBanner();
//   }, []);

//   const {
//     data: testimonialsRes,
//     isLoading: isTestimonialsLoading,
//     isError: isTestimonialsError,
//   } = useGetAllTestimonialsQuery();

//   const apiCarouselData = useMemo(() => {
//     if (!testimonialsRes) return [];

//     const list = Array.isArray(testimonialsRes)
//       ? testimonialsRes
//       : testimonialsRes.docs || testimonialsRes.data || [];

//     return (list || []).map((t: any) => ({
//       para: t.testimonialText ?? "",
//       heading: t.name ?? "",
//       avatar: t.profilePicture ?? "",
//       rating:
//         typeof t.ratings === "number" ? t.ratings : Number(t.ratings ?? 5),
//     }));
//   }, [testimonialsRes]);

//   const carouselDataToShow =
//     apiCarouselData.length > 0 ? apiCarouselData : testimonial_Slider;

//   const showApiBanner = !bannerLoading && !bannerError && banner !== null;
//   const showDummyHero = !bannerLoading && (bannerError || banner === null);

//   const handleBuyNowClick = () => {
//     const quoteSection = document.getElementById("quote-section");

//     if (quoteSection) {
//       quoteSection.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   const handleBrochureClick = () => {
//     window.open("/pdf/parents-care-plus.pdf", "_blank", "noopener,noreferrer");
//   };

//   // const handleTrustCardClick = (index: number) => {
//   //   setActiveTrustCard(index);

//   //   if (index === 0) {
//   //     setActiveParentPackage("OPD");
//   //   }

//   //   if (index === 1) {
//   //     setActiveParentPackage("No Medical Pre-Screening");
//   //   }

//   //   if (index === 2) {
//   //     setActiveParentPackage("Pre-Existing Coverage");
//   //   }
//   // };

//   // const [isOpen, setIsOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const buttonRef = useRef<HTMLDivElement | null>(null);

//   const handleToggleBenefits = () => {
//     if (isOpen) {
//       // Table close karen
//       setIsOpen(false);

//       // Table band hone ke baad View More button par le ayen
//       setTimeout(() => {
//         buttonRef.current?.scrollIntoView({
//           behavior: "smooth",
//           block: "center",
//         });
//       }, 100);
//     } else {
//       // Table open karen
//       setIsOpen(true);
//     }
//   };
//   return (
//     <>
//       {/* ── HERO SECTION ──────────────────────────────────────────────────── */}

//       {/* {bannerLoading && (
//         <div className="min-h-[80vh] bg-gray-200 animate-pulse" />
//       )} */}

//       {/* API Banner */}
//       {showApiBanner && (
//         <div
//           className="
//            min-h-screen bg-cover bg-center bg-no-repeat
//           "
//           style={{ backgroundImage: `url(${banner!.imageUrl})` }}
//         >
//           <div className="mx-auto flex min-h-screen max-w-7xl items-center pt-10">
//             {/* Left Text */}
//             <div
//               className="
//                max-w-7xl text-black
//               "
//               style={fromLeft(heroOn, 0)}
//             >
//               <h1 className="font-futura text-[34px] font-bold uppercase leading-[1.08] tracking-[-1px] md:text-[40px] lg:text-[44px]">
//                 {banner!.title}
//               </h1>

//               <p
//                 className="
//                   w-full
//                   pb-5
//                   font-futura
//                   text-sm
//                   font-bold
//                   leading-relaxed
//                   text-[#4A4A4A]
//                   md:text-base
//                   lg:text-lg
//                 "
//               >
//                 Ammi Abbu Kay Liye Sub Say Complete Coverage.
//               </p>

//               {banner!.subtitle && (
//                 <p
//                   className="my-4 max-w-[500px] font-futura text-[17px] font-normal leading-[1.45] md:text-[22px]
//                   "
//                 >
//                   {banner!.subtitle}
//                 </p>
//               )}

//               {banner!.buttonText && (
//                 <div className="flex flex-wrap items-center py-4 gap-3">
//                   <div onClick={handleBuyNowClick}>
//                     <Button
//                       text={banner!.buttonText}
//                       className="
//                         cursor-pointer
//                         rounded-full
//                         bg-[#BA0C2F]
//                         px-8
//                         py-2
//                         font-futura
//                         font-semibold
//                         uppercase
//                         text-white
//                         hover:border
//                         hover:border-[#BA0C2F]
//                         hover:bg-white
//                         hover:text-[#BA0C2F]
//                         md:px-10
//                         md:py-3
//                         xl:px-12
//                       "
//                     />
//                   </div>

//                   <div onClick={() => {}}>
//                     <Button
//                       text="Product brochure"
//                       className="
//                         cursor-pointer
//                         rounded-full
//                         border
//                         border-[#eeebeb]
//                         bg-white
//                         px-8
//                         py-2
//                         font-futura
//                         font-semibold
//                         uppercase
//                         text-[#BA0C2F]
//                         shadow-2xl
//                         md:px-10
//                         md:py-3
//                         xl:px-12
//                       "
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Right Counter Cards */}
//             <div
//               className="
//                 mt-10
//                 flex
//                 w-full
//                 flex-wrap
//                 items-center
//                 justify-start
//                 gap-4
//                 lg:ml-auto
//                 lg:mt-auto
//                 lg:w-auto
//                 lg:justify-end
//                 lg:pb-10
//                 lg:pr-4
//                 xl:pr-10
//               "
//             >
//               <div
//                 className="
//                   flex
//                   h-[82px]
//                   w-[200px]
//                   flex-col
//                   items-center
//                   justify-center
//                   rounded-md
//                   bg-white
//                   px-5
//                   py-3
//                   shadow-2xl
//                   xl:h-[92px]
//                   xl:w-[230px]
//                 "
//                 style={fromRight(heroOn, 200)}
//               >
//                 <span className="block w-full text-center text-[24px] font-medium uppercase tabular-nums text-[#BA0C2F] xl:text-3xl">
//                   <div className="mt-1 text-center text-[11px] uppercase text-gray-600 xl:text-lg">
//                     Starting from
//                   </div>
//                   <AnimatedCounter
//                     value="PKR 20,000"
//                     startValue={80000}
//                     run={heroOn}
//                   />
//                 </span>
//               </div>

//               <div
//                 className="
//                   flex
//                   h-[82px]
//                   w-[200px]
//                   flex-col
//                   items-center
//                   justify-center
//                   rounded-md
//                   bg-white
//                   px-5
//                   py-3
//                   shadow-2xl
//                   xl:h-[92px]
//                   xl:w-[230px]
//                 "
//                 style={fromRight(heroOn, 360)}
//               >
//                 <span className="block w-full text-center text-[24px] font-medium uppercase tabular-nums text-[#BA0C2F] xl:text-3xl">
//                   <div className="mt-1 text-center text-[11px] uppercase text-gray-600 xl:text-lg">
//                     parental covered
//                   </div>
//                   <AnimatedCounter value="100,000+" run={heroOn} />
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Dummy / Fallback Hero */}
//       {showDummyHero && (
//         // <div className="health-hero flex min-h-screen items-end px-6 pt-[120px] pb-16 md:px-12 md:pt-[130px] lg:px-30 lg:pt-[120px] xl:pt-[110px]">
//         <div className="health-hero min-h-screen bg-cover bg-center bg-no-repeat">
//           <div
//             className="mx-auto flex min-h-screen max-w-7xl items-center pt-10 "
//             style={fromLeft(heroOn, 0)}
//           >
//             <div
//               className="
//                max-w-7xl text-black
//               "
//             >
//               <h1 className="font-futura text-[#BA0C2F] text-[34px] font-bold uppercase leading-[1.08] tracking-[-1px] md:text-[40px] lg:text-[44px]">
//                 Parents Care Plus
//               </h1>

//               <p
//                 className="
//                   w-full
//                   pb-5
//                   font-futura
//                   text-sm
//                   font-bold
//                   leading-relaxed
//                   text-[#4A4A4A]
//                   md:text-base
//                   lg:text-lg
//                 "
//               >
//                 Ammi Abbu Kay Liye Sub Say Complete Coverage.
//               </p>

//               <p
//                 className="my-4 max-w-[500px] font-futura text-[17px] font-normal leading-[1.45] md:text-[18px]
//                   "
//               >
//                 Pakistan’s first health insurance plan with built-in OPD
//                 coverage - just for your Parents.
//               </p>

//               {/* <div onClick={handleBuyNowClick}>
//                 <Button
//                   text="Buy Now"
//                   className="cursor-pointer rounded-full bg-[#BA0C2F] px-8 py-2 font-futura font-semibold text-white hover:border hover:border-[#BA0C2F] hover:bg-white hover:text-[#BA0C2F] md:px-10 md:py-3 xl:px-12"
//                 />
//               </div> */}
//               <div className="flex flex-wrap items-center py-4 gap-3">
//                 <div onClick={handleBuyNowClick}>
//                   <Button
//                     text="Buy Now"
//                     className="
//                         cursor-pointer
//                         rounded-full
//                         bg-[#BA0C2F]
//                         px-8
//                         py-2
//                         font-futura
//                         font-semibold
//                         uppercase
//                         text-white
//                         hover:border
//                         hover:border-[#BA0C2F]
//                         hover:bg-white
//                         hover:text-[#BA0C2F]
//                         md:px-10
//                         md:py-3
//                         xl:px-12
//                       "
//                   />
//                 </div>

//                 <div>
//                   <Button
//                     text="Product brochure"
//                     className="
//     cursor-pointer
//     rounded-full
//     border
//     border-[#eeebeb]
//     bg-white
//     px-8
//     py-2
//     font-futura
//     font-semibold
//     uppercase
//     text-[#BA0C2F]
//     shadow-2xl
//     md:px-10
//     md:py-3
//     xl:px-12
//   "
//                     onClick={() =>
//                       window.open(
//                         "/pdf/brochure_parents_care_plus_insurance.pdf",
//                         "_blank",
//                         "noopener,noreferrer",
//                       )
//                     }
//                   />
//                 </div>
//               </div>
//             </div>
//             <div
//               className="
//                 mt-10
//                 flex
//                 w-full
//                 flex-wrap
//                 items-center
//                 justify-start
//                 gap-4
//                 lg:ml-auto
//                 lg:mt-auto
//                 lg:w-auto
//                 lg:justify-end
//                 lg:pb-6
//                 lg:pr-4
//                 xl:pr-10
//               "
//             >
//               <div
//                 className="
//                   flex
//                   h-[82px]
//                   w-[200px]
//                   flex-col
//                   items-center
//                   justify-center
//                   rounded-md
//                   bg-white
//                   px-5
//                   py-3
//                   shadow-2xl
//                   xl:h-[92px]
//                   xl:w-[230px]
//                 "
//                 style={fromRight(heroOn, 200)}
//               >
//                 <span className="block w-full text-center text-[24px] font-medium uppercase tabular-nums text-[#BA0C2F] xl:text-3xl">
//                   <div className="mt-1 text-center text-[11px] uppercase text-gray-600 xl:text-lg">
//                     Starting from
//                   </div>
//                   <AnimatedCounter
//                     value="PKR 20,000"
//                     startValue={80000}
//                     run={heroOn}
//                   />
//                 </span>
//               </div>

//               <div
//                 className="
//                   flex
//                   h-[82px]
//                   w-[200px]
//                   flex-col
//                   items-center
//                   justify-center
//                   rounded-md
//                   bg-white
//                   px-5
//                   py-3
//                   shadow-2xl
//                   xl:h-[92px]
//                   xl:w-[230px]
//                 "
//                 style={fromRight(heroOn, 360)}
//               >
//                 <span className="block w-full text-center text-[24px] font-medium uppercase tabular-nums text-[#BA0C2F] xl:text-3xl">
//                   <div className="mt-1 text-center text-[11px] uppercase text-gray-600 xl:text-lg">
//                     parental covered
//                   </div>
//                   <AnimatedCounter value="100,000+" run={heroOn} />
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Why Parents Trust */}
//       <div className="space-y-10 py-20">
//         <h1
//           ref={whyHeadingRef as React.RefObject<HTMLHeadingElement>}
//           className="text-center font-futura text-4xl font-medium uppercase text-[#4A4A4A]"
//           style={fadeUp(whyHeadingOn)}
//         >
//           Why Customers Trust parentS care plus
//         </h1>

//         <Container>
//           <div
//             ref={whyCardsRef}
//             className="mx-auto flex max-w-4xl justify-center gap-8"
//           >
//             {healthCarePackage.map((item, index) => {
//               const isActive = activeTrustCard === index;

//               return (
//                 <div
//                   key={index}
//                   // onClick={() => handleTrustCardClick(index)}
//                   className={`group flex h-22 cursor-pointer items-center gap-3 rounded-lg border-2
//                     bg-white px-10 py-6 text-[#4A4A4A] shadow-md
//                     transition-all duration-300 hover:scale-105 hover:bg-[#BA0C2F] hover:text-white hover:shadow-xl
//                     ${isActive ? "border-[#BA0C2F]" : "border-transparent"}
//                   `}
//                   style={cardPop(whyCardsOn, index * 120)}
//                 >
//                   <div className="relative h-10 w-10 shrink-0">
//                     <Image
//                       src={Object.values(item.card_image || {})[0]}
//                       alt=""
//                       className="transition-all group-hover:brightness-0 group-hover:invert"
//                     />
//                   </div>

//                   <h1 className="font-futura text-[16px] uppercase leading-tight">
//                     {index === 0 ? (
//                       <>
//                         Pakistan’s ONLY
//                         <br />
//                         PLAN OFFERING{" "}
//                         <span className="font-bold text-[#BA0C2F] group-hover:text-white">
//                           OPD
//                         </span>
//                       </>
//                     ) : (
//                       item.card_title
//                     )}
//                   </h1>
//                 </div>
//               );
//             })}
//           </div>
//         </Container>
//       </div>

//       {/* Plan cards */}
//       <div ref={plansRef}>
//         <div
//           className="flex flex-col items-center justify-center pb-10"
//           style={fadeUp(plansOn)}
//         >
//           <h2 className="text-center font-futura text-3xl font-medium uppercase text-[#4A4A4A] sm:text-4xl md:text-4xl">
//             Choose the plan that’s right for your parents’ health
//           </h2>
//         </div>

//         <div style={fadeUp(plansOn, 160)}>
//           <Card_package
//             plans={parentsPackageData[activeParentPackage]}
//             showDescription={false}
//             enableHover={true}
//             showPrice={true}
//           />
//         </div>
//       </div>
//       {/* View More Benefits Button */}
//       <section className="w-full">
//         {/* Table: only show after clicking View more Benefits */}
//         {isOpen && (
//           <div className="animate-benefits-table-open">
//             <Container>
//               <BenefitsTable
//                 // heading="Plan Premium Details"
//                 plans={parentsCarePlusPlans}
//                 sections={parentsCarePlusSections}
//                 note={parentsCarePlusNote}
//               />
//             </Container>
//           </div>
//         )}

//         {/* View / Hide Benefits Button */}
//         <div
//           ref={buttonRef}
//           className={
//             isOpen ? "mt-4 flex justify-center" : "flex justify-center"
//           }
//         >
//           <button
//             type="button"
//             onClick={handleToggleBenefits}
//             aria-expanded={isOpen}
//             className="inline-flex cursor-pointer items-center  gap-2 font-futura text-[18px] font-semibold text-[#BA0C2F] transition-colors duration-300 hover:text-[#BA0C2F]"
//           >
//             <span className="border-b-2 border-b-[#BA0C2F]">
//               {isOpen ? "Hide more Benefits" : "View more Benefits"}
//             </span>

//             <span className="text-[22px] leading-none">
//               {isOpen ? "-" : "+"}
//             </span>
//           </button>
//         </div>

//         <style jsx>{`
//           .animate-benefits-table-open {
//             animation: benefitsTableOpen 0.45s ease forwards;
//             transform-origin: bottom;
//           }

//           @keyframes benefitsTableOpen {
//             from {
//               opacity: 0;
//               transform: translateY(18px);
//             }

//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//         `}</style>
//       </section>
//       {/* QuoteSection */}
//       <div id="quote-section" ref={quoteRef} style={fadeUp(quoteOn, 80)}>
//         <QuoteSection />
//       </div>

//       {/* CTA */}
//       <div className="mt-10 overflow-visible bg-[#5b677039]" ref={ctaRef}>
//         <Container>
//           <div className="mx-auto flex max-w-4xl items-end justify-between overflow-visible">
//             {/* Left Content */}
//             <div
//               className="flex flex-col justify-center space-y-4 "
//               style={fromLeft(ctaOn, 100)}
//             >
//               <h1 className="font-futura text-3xl font-bold uppercase text-black">
//                 Not sure which plan to choose?
//                 <br /> Let Us guide you
//               </h1>
//               <div className="pb-4">
//                 <Button
//                   text="Guide Me"
//                   className="cursor-pointer rounded-full border border-[#BA0C2F] bg-[#FFFFFF] px-8 py-2 font-futura font-semibold text-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-[#FFFFFF] md:px-12 md:py-3"
//                   // className="cursor-pointer rounded-full border border-white bg-transparent px-8 py-2 font-futura font-semibold text-black hover:bg-white hover:text-[#BA0C2F] md:px-12 md:py-3"
//                 />
//               </div>
//             </div>

//             {/* Right Image — pops above the red box */}
//             <div
//               className="flex items-end -mt-[10px]"
//               style={fromRight(ctaOn, 200)}
//             >
//               <Image
//                 src={person}
//                 alt="person"
//                 className="h-auto w-56 object-contain"
//               />
//             </div>
//           </div>
//         </Container>
//       </div>

//       {/* Testimonials */}
//       <div ref={testiRef}>
//         <TestimonialsPreview />
//       </div>
//     </>
//   );
// };

// export default ParentCare;

"use client";

import { useMemo, useEffect, useState, useRef, Suspense } from "react";
import Image from "next/image";
import "./parentcare.css";
import Container from "@/components/home/container";
import { parentCarePackage, parentsPackageData } from "@/data/healthCareData";
import Card_package from "@/components/healthCare/Card_package";
import Button from "@/components/common/button";
import person from "../../public/img/HealthCare/2d09dd2119eece4576b8ff0017b531d302b35e17.png";
import { useGetAllTestimonialsQuery } from "@/lib/redux/services/testimonialsApi";
import { testimonial_Slider } from "@/data/HomeDate";
import axios from "axios";
import TestimonialsPreview from "@/components/home/CarpuselDemoTestimonial";
import QuoteSection from "@/components/home/QouteSection";
import "../../app/home/home.css";
import BenefitsTable from "@/components/parentCares/BenefitsTable";
import {
  parentsCarePlusNote,
  parentsCarePlusPlans,
  parentsCarePlusSections,
} from "@/data/parentsCarePlusTableData";

// ─────────────────────────────────────────────────────────────────────────────
// Animation utilities
// ─────────────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "-120px 0px",
      },
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

const fromLeft = (on: boolean, delay = 0): React.CSSProperties => ({
  opacity: on ? 1 : 0,
  transform: on ? "translateX(0)" : "translateX(-52px)",
  transition: `opacity 0.85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms,
               transform 0.85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
  willChange: "opacity, transform",
});

const fromRight = (on: boolean, delay = 0): React.CSSProperties => ({
  opacity: on ? 1 : 0,
  transform: on ? "translateX(0)" : "translateX(52px)",
  transition: `opacity 0.85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms,
               transform 0.85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
  willChange: "opacity, transform",
});

const fadeUp = (on: boolean, delay = 0): React.CSSProperties => ({
  opacity: on ? 1 : 0,
  transform: on ? "translateY(0)" : "translateY(32px)",
  transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
  willChange: "opacity, transform",
});

const cardPop = (on: boolean, delay = 0): React.CSSProperties => ({
  opacity: on ? 1 : 0,
  transform: on ? "translateY(0) scale(1)" : "translateY(30px) scale(0.94)",
  transition: `opacity 0.55s ease ${delay}ms,
               transform 0.6s cubic-bezier(0.34,1.45,0.64,1) ${delay}ms`,
  willChange: "opacity, transform",
});

function AnimatedCounter({
  value,
  run,
  startValue = 0,
}: {
  value: string;
  run: boolean;
  startValue?: number;
}) {
  const [display, setDisplay] = useState(value);
  const didRun = useRef(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!run || didRun.current) return;

    didRun.current = true;

    const match = value.match(/^([^\d]*)(\d[\d,.]*)(.*)$/);
    if (!match) return;

    const [, prefix, rawNum, suffix] = match;

    const target = parseFloat(rawNum.replace(/,/g, ""));
    const start = startValue;

    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      // 🔥 reverse animation (start → target)
      const current = Math.round(start - (start - target) * eased);

      setDisplay(`${prefix}${current.toLocaleString()}${suffix}`);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [run, value, startValue]);

  return <>{display}</>;
}

interface HeroBanner {
  _id: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl: string;
}

const ParentCare = () => {
  const [banner, setBanner] = useState<HeroBanner | null>(null);
  const [bannerLoading, setBannerLoading] = useState(true);
  const [bannerError, setBannerError] = useState(false);

  const [heroOn, setHeroOn] = useState(false);

  const [activeTrustCard, setActiveTrustCard] = useState(0);

  const [activeParentPackage, setActiveParentPackage] =
    useState<keyof typeof parentsPackageData>("OPD");

  useEffect(() => {
    if (bannerLoading) return;

    const t = setTimeout(() => setHeroOn(true), 80);

    return () => clearTimeout(t);
  }, [bannerLoading]);

  const { ref: whyHeadingRef, visible: whyHeadingOn } = useInView(0.1);
  const { ref: whyCardsRef, visible: whyCardsOn } = useInView(0.1);
  const { ref: plansRef, visible: plansOn } = useInView(0.08);
  const { ref: quoteRef, visible: quoteOn } = useInView(0.1);
  const { ref: ctaRef, visible: ctaOn } = useInView(0.15);
  const { ref: testiRef, visible: testiOn } = useInView(0.08);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/banners?category=product&subCategory=parentscare&isActive=true`,
        );

        const list: HeroBanner[] = res.data?.data ?? res.data ?? [];
        const first = Array.isArray(list) ? list[0] : null;

        setBanner(first ?? null);
      } catch (err) {
        console.error("ParentCare banner fetch error:", err);
        setBannerError(true);
      } finally {
        setBannerLoading(false);
      }
    };

    fetchBanner();
  }, []);

  const {
    data: testimonialsRes,
    isLoading: isTestimonialsLoading,
    isError: isTestimonialsError,
  } = useGetAllTestimonialsQuery();

  const apiCarouselData = useMemo(() => {
    if (!testimonialsRes) return [];

    const list = Array.isArray(testimonialsRes)
      ? testimonialsRes
      : testimonialsRes.docs || testimonialsRes.data || [];

    return (list || []).map((t: any) => ({
      para: t.testimonialText ?? "",
      heading: t.name ?? "",
      avatar: t.profilePicture ?? "",
      rating:
        typeof t.ratings === "number" ? t.ratings : Number(t.ratings ?? 5),
    }));
  }, [testimonialsRes]);

  const carouselDataToShow =
    apiCarouselData.length > 0 ? apiCarouselData : testimonial_Slider;

  const showApiBanner = !bannerLoading && !bannerError && banner !== null;
  const showDummyHero = !bannerLoading && (bannerError || banner === null);

  const handleBuyNowClick = () => {
    const quoteSection = document.getElementById("quote-section");

    if (quoteSection) {
      quoteSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleBrochureClick = () => {
    window.open("/pdf/parents-care-plus.pdf", "_blank", "noopener,noreferrer");
  };

  // const handleTrustCardClick = (index: number) => {
  //   setActiveTrustCard(index);

  //   if (index === 0) {
  //     setActiveParentPackage("OPD");
  //   }

  //   if (index === 1) {
  //     setActiveParentPackage("No Medical Pre-Screening");
  //   }

  //   if (index === 2) {
  //     setActiveParentPackage("Pre-Existing Coverage");
  //   }
  // };

  // const [isOpen, setIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const handleToggleBenefits = () => {
    if (isOpen) {
      // Table close karen
      setIsOpen(false);

      // Table band hone ke baad View More button par le ayen
      setTimeout(() => {
        buttonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    } else {
      // Table open karen
      setIsOpen(true);
    }
  };
  return (
    <>
      {/* ── HERO SECTION ──────────────────────────────────────────────────── */}

      {/* {bannerLoading && (
        <div className="min-h-[80vh] bg-gray-200 animate-pulse" />
      )} */}

      {/* API Banner */}
      {showApiBanner && (
        <div
          className="
           min-h-screen bg-cover bg-center bg-no-repeat
          "
          style={{ backgroundImage: `url(${banner!.imageUrl})` }}
        >
          <div className="mx-auto flex min-h-screen max-w-7xl items-center pt-10">
            {/* Left Text */}
            <div
              className="
               max-w-7xl text-black
              "
              style={fromLeft(heroOn, 0)}
            >
              <h1 className="font-futura text-[34px] font-bold uppercase leading-[1.08] tracking-[-1px] md:text-[40px] lg:text-[44px]">
                {banner!.title}
              </h1>

              <p
                className="
                  w-full
                  pb-5
                  font-futura
                  text-sm
                  font-bold
                  leading-relaxed
                  text-[#4A4A4A]
                  md:text-base
                  lg:text-lg
                "
              >
                Ammi Abbu Kay Liye Sub Say Complete Coverage.
              </p>

              {banner!.subtitle && (
                <p
                  className="my-4 max-w-[500px] font-futura text-[17px] font-normal leading-[1.45] md:text-[22px]
                  "
                >
                  {banner!.subtitle}
                </p>
              )}

              {banner!.buttonText && (
                <div className="flex flex-wrap items-center py-4 gap-3">
                  <div onClick={handleBuyNowClick}>
                    <Button
                      text={banner!.buttonText}
                      className="
                        cursor-pointer
                        rounded-full
                        bg-[#BA0C2F]
                        px-8
                        py-2
                        font-futura
                        font-semibold
                        uppercase
                        text-white
                        hover:border
                        hover:border-[#BA0C2F]
                        hover:bg-white
                        hover:text-[#BA0C2F]
                        md:px-10
                        md:py-3
                        xl:px-12
                      "
                    />
                  </div>

                  <div onClick={() => {}}>
                    <Button
                      text="Product brochure"
                      className="
                        cursor-pointer
                        rounded-full
                        border
                        border-[#eeebeb]
                        bg-white
                        px-8
                        py-2
                        font-futura
                        font-semibold
                        uppercase
                        text-[#BA0C2F]
                        shadow-2xl
                        md:px-10
                        md:py-3
                        xl:px-12
                      "
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right Counter Cards */}
            <div
              className="
                mt-10
                flex
                w-full
                flex-wrap
                items-center
                justify-start
                gap-4
                lg:ml-auto
                lg:mt-auto
                lg:w-auto
                lg:justify-end
                lg:pb-10
                lg:pr-4
                xl:pr-10
              "
            >
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
                style={fromRight(heroOn, 200)}
              >
                <span className="block w-full text-center text-[24px] font-medium uppercase tabular-nums text-[#BA0C2F] xl:text-3xl">
                  <div className="mt-1 text-center text-[11px] uppercase text-gray-600 xl:text-lg">
                    Starting from
                  </div>
                  <AnimatedCounter
                    value="PKR 20,000"
                    startValue={80000}
                    run={heroOn}
                  />
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
                style={fromRight(heroOn, 360)}
              >
                <span className="block w-full text-center text-[24px] font-medium uppercase tabular-nums text-[#BA0C2F] xl:text-3xl">
                  <div className="mt-1 text-center text-[11px] uppercase text-gray-600 xl:text-lg">
                    parental covered
                  </div>
                  <AnimatedCounter value="100,000+" run={heroOn} />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dummy / Fallback Hero */}
      {showDummyHero && (
        // <div className="health-hero flex min-h-screen items-end px-6 pt-[120px] pb-16 md:px-12 md:pt-[130px] lg:px-30 lg:pt-[120px] xl:pt-[110px]">
        <div className="health-hero min-h-screen bg-cover bg-center bg-no-repeat">
          <div
            className="mx-auto flex min-h-screen max-w-7xl items-center pt-10 "
            style={fromLeft(heroOn, 0)}
          >
            <div
              className="
               max-w-7xl text-black
              "
            >
              <h1 className="font-futura text-[#BA0C2F] text-[34px] font-bold uppercase leading-[1.08] tracking-[-1px] md:text-[40px] lg:text-[44px]">
                Parents Care Plus
              </h1>

              <p
                className="
                  w-full
                  pb-5
                  font-futura
                  text-sm
                  font-bold
                  leading-relaxed
                  text-[#4A4A4A]
                  md:text-base
                  lg:text-lg
                "
              >
                Ammi Abbu Kay Liye Sub Say Complete Coverage.
              </p>

              <p
                className="my-4 max-w-[500px] font-futura text-[17px] font-normal leading-[1.45] md:text-[18px]
                  "
              >
                Pakistan’s first health insurance plan with built-in OPD
                coverage - just for your Parents.
              </p>

              {/* <div onClick={handleBuyNowClick}>
                <Button
                  text="Buy Now"
                  className="cursor-pointer rounded-full bg-[#BA0C2F] px-8 py-2 font-futura font-semibold text-white hover:border hover:border-[#BA0C2F] hover:bg-white hover:text-[#BA0C2F] md:px-10 md:py-3 xl:px-12"
                />
              </div> */}
              <div className="flex flex-wrap items-center py-4 gap-3">
                <div onClick={handleBuyNowClick}>
                  <Button
                    text="Buy Now"
                    className="
                        cursor-pointer
                        rounded-full
                        bg-[#BA0C2F]
                        px-8
                        py-2
                        font-futura
                        font-semibold
                        uppercase
                        text-white
                        hover:border
                        hover:border-[#BA0C2F]
                        hover:bg-white
                        hover:text-[#BA0C2F]
                        md:px-10
                        md:py-3
                        xl:px-12
                      "
                  />
                </div>

                <div>
                  <Button
                    text="Product brochure"
                    className="
    cursor-pointer
    rounded-full
    border
    border-[#eeebeb]
    bg-white
    px-8
    py-2
    font-futura
    font-semibold
    uppercase
    text-[#BA0C2F]
    shadow-2xl
    md:px-10
    md:py-3
    xl:px-12
  "
                    onClick={() =>
                      window.open(
                        "/pdf/brochure_parents_care_plus_insurance.pdf",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  />
                </div>
              </div>
            </div>
            <div
              className="
                mt-10
                flex
                w-full
                flex-wrap
                items-center
                justify-start
                gap-4
                lg:ml-auto
                lg:mt-auto
                lg:w-auto
                lg:justify-end
                lg:pb-6
                lg:pr-4
                xl:pr-10
              "
            >
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
                style={fromRight(heroOn, 200)}
              >
                <span className="block w-full text-center text-[24px] font-medium uppercase tabular-nums text-[#BA0C2F] xl:text-3xl">
                  <div className="mt-1 text-center text-[11px] uppercase text-gray-600 xl:text-lg">
                    Starting from
                  </div>
                  <AnimatedCounter
                    value="PKR 20,000"
                    startValue={80000}
                    run={heroOn}
                  />
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
                style={fromRight(heroOn, 360)}
              >
                <span className="block w-full text-center text-[24px] font-medium uppercase tabular-nums text-[#BA0C2F] xl:text-3xl">
                  <div className="mt-1 text-center text-[11px] uppercase text-gray-600 xl:text-lg">
                    parental covered
                  </div>
                  <AnimatedCounter value="100,000+" run={heroOn} />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Parents Trust */}
      <div className="space-y-10 py-20">
        <h1
          ref={whyHeadingRef as React.RefObject<HTMLHeadingElement>}
          className="text-center font-futura text-4xl font-medium uppercase text-[#4A4A4A]"
          style={fadeUp(whyHeadingOn)}
        >
          Why Customers Trust parentS care plus
        </h1>

        <Container>
          <div
            ref={whyCardsRef}
            className="mx-auto flex max-w-4xl justify-center gap-8"
          >
            {parentCarePackage.map((item, index) => {
              const isActive = activeTrustCard === index;

              return (
                <div
                  key={index}
                  // onClick={() => handleTrustCardClick(index)}
                  className={`group flex h-22 cursor-pointer items-center gap-3 rounded-lg border-2
                    bg-white px-10 py-6 text-[#4A4A4A] shadow-md
                    transition-all duration-300 hover:scale-105 hover:bg-[#BA0C2F] hover:text-white hover:shadow-xl
                    ${isActive ? "border-[#BA0C2F]" : "border-transparent"}
                  `}
                  style={cardPop(whyCardsOn, index * 120)}
                >
                  <div className="relative h-10 w-10 shrink-0">
                    <Image
                      src={Object.values(item.card_image || {})[0]}
                      alt=""
                      className="transition-all group-hover:brightness-0 group-hover:invert"
                    />
                  </div>

                  <h1 className="font-futura text-[16px] uppercase leading-tight">
                    {index === 0 ? (
                      <>
                        Pakistan’s ONLY
                        <br />
                        PLAN OFFERING{" "}
                        <span className="font-bold text-[#BA0C2F] group-hover:text-white">
                          OPD
                        </span>
                      </>
                    ) : (
                      item.card_title
                    )}
                  </h1>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Plan cards */}
      <div ref={plansRef}>
        <div
          className="flex flex-col items-center justify-center pb-10"
          style={fadeUp(plansOn)}
        >
          <h2 className="text-center font-futura text-3xl font-medium uppercase text-[#4A4A4A] sm:text-4xl md:text-4xl">
            Choose the plan that’s right for your parents’ health
          </h2>
        </div>

        <div style={fadeUp(plansOn, 160)}>
          <Card_package
            plans={parentsPackageData[activeParentPackage]}
            showDescription={false}
            enableHover={true}
            showPrice={true}
          />
        </div>
      </div>
      {/* View More Benefits Button */}
      <section className="w-full">
        {/* Table: only show after clicking View more Benefits */}
        {isOpen && (
          <div className="animate-benefits-table-open">
            <Container>
              <BenefitsTable
                // heading="Plan Premium Details"
                plans={parentsCarePlusPlans}
                sections={parentsCarePlusSections}
                note={parentsCarePlusNote}
              />
            </Container>
          </div>
        )}

        {/* View / Hide Benefits Button */}
        <div
          ref={buttonRef}
          className={
            isOpen ? "mt-4 flex justify-center" : "flex justify-center"
          }
        >
          <button
            type="button"
            onClick={handleToggleBenefits}
            aria-expanded={isOpen}
            className="inline-flex cursor-pointer items-center  gap-2 font-futura text-[18px] font-semibold text-[#BA0C2F] transition-colors duration-300 hover:text-[#BA0C2F]"
          >
            <span className="border-b-2 border-b-[#BA0C2F]">
              {isOpen ? "Hide more Benefits" : "View more Benefits"}
            </span>

            <span className="text-[22px] leading-none">
              {isOpen ? "-" : "+"}
            </span>
          </button>
        </div>

        <style jsx>{`
          .animate-benefits-table-open {
            animation: benefitsTableOpen 0.45s ease forwards;
            transform-origin: bottom;
          }

          @keyframes benefitsTableOpen {
            from {
              opacity: 0;
              transform: translateY(18px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
      {/* QuoteSection */}
      <div id="quote-section" ref={quoteRef} style={fadeUp(quoteOn, 80)}>
        <Suspense fallback={<div />}>
          <QuoteSection />
        </Suspense>
      </div>

      {/* CTA */}
      <div className="mt-10 overflow-visible bg-[#5b677039]" ref={ctaRef}>
        <Container>
          <div className="mx-auto flex max-w-4xl items-end justify-between overflow-visible">
            {/* Left Content */}
            <div
              className="flex flex-col justify-center space-y-4 "
              style={fromLeft(ctaOn, 100)}
            >
              <h1 className="font-futura text-3xl font-bold uppercase text-black">
                Not sure which plan to choose?
                <br /> Let Us guide you
              </h1>
              <div className="pb-4">
                <Button
                  text="Guide Me"
                  className="cursor-pointer rounded-full border border-[#BA0C2F] bg-[#FFFFFF] px-8 py-2 font-futura font-semibold text-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-[#FFFFFF] md:px-12 md:py-3"
                  // className="cursor-pointer rounded-full border border-white bg-transparent px-8 py-2 font-futura font-semibold text-black hover:bg-white hover:text-[#BA0C2F] md:px-12 md:py-3"
                />
              </div>
            </div>

            {/* Right Image — pops above the red box */}
            <div
              className="flex items-end -mt-[10px]"
              style={fromRight(ctaOn, 200)}
            >
              <Image
                src={person}
                alt="person"
                className="h-auto w-56 object-contain"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Testimonials */}
      <div ref={testiRef}>
        <TestimonialsPreview />
      </div>
    </>
  );
};

export default ParentCare;
