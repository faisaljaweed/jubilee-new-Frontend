"use client";
import React, { useMemo, useState, useEffect, useRef, Suspense } from "react";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./healthcare.css";
import Image from "next/image";
import Container from "@/components/home/container";
import { healthCarePackage, healthPackage } from "@/data/healthCareData";
import Card_package from "@/components/healthCare/Card_package";
// import { QuoteSection } from "@/components/home/QouteSection";
import Button from "@/components/common/button";
import person from "../../public/img/HealthCare/2d09dd2119eece4576b8ff0017b531d302b35e17.png";
import { useGetAllTestimonialsQuery } from "@/lib/redux/services/testimonialsApi";
import { testimonial_Slider } from "@/data/HomeDate";
// import { CarpuselDemoTestimonial } from "@/components/home/CarpuselDemoTestimonial";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import axios from "axios";
import QuoteSection from "@/components/home/QouteSection";
import TestimonialsPreview from "@/components/home/CarpuselDemoTestimonial";
// import Card_package from "@/components/healthCare/Card_package";
import "../home/home.css";
import BenefitsTable from "@/components/parentCares/BenefitsTable";
import {
  familyHealthCareSections,
  parentsCarePlusNote,
  parentsCarePlusPlans,
  // parentsCarePlusSections,
} from "@/data/parentsCarePlusTableData";
// ── Types ─────────────────────────────────────────────────────────────────────
interface HeroBanner {
  _id: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl: string;
}

// ── Component ──────────────────────────────────────────────────────────────────
const HealthCare = () => {
  const [activeIndex, setActiveIndex] = useState(0); // default first active
  // Banner state
  const [banner, setBanner] = useState<HeroBanner | null>(null);
  const [bannerLoading, setBannerLoading] = useState(true);
  const [bannerError, setBannerError] = useState(false);

  // Fetch healthcare banner on mount
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/banners?category=product&subCategory=healthcare&isActive=true`,
        );

        const list: HeroBanner[] = res.data?.data ?? res.data ?? [];

        // Take the first active banner (they're already filtered by isActive=true)
        const first = Array.isArray(list) ? list[0] : null;
        setBanner(first ?? null);
      } catch (err) {
        console.error("Healthcare banner fetch error:", err);
        setBannerError(true);
      } finally {
        setBannerLoading(false);
      }
    };

    fetchBanner();
  }, []);

  // Testimonials
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

  // ── Hero: decide what to render ────────────────────────────────────────────
  const showApiBanner = !bannerLoading && !bannerError && banner !== null;
  const showDummyHero = !bannerLoading && (bannerError || banner === null);

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
      {/* ── HERO SECTION ────────────────────────────────────────────────────── */}

      {/* Loading skeleton — preserves layout height while fetching */}
      {bannerLoading && (
        <div className="min-h-[80vh] bg-gray-900 animate-pulse" />
      )}

      {/* API Banner */}
      {showApiBanner && (
        <div
          className="flex items-center min-h-screen px-6 md:px-12 lg:px-30 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${banner!.imageUrl})` }}
        >
          <div className="w-full md:w-[50%] lg:w-[50%] max-w-2xl space-y-6">
            <h1 className="text-3xl md:text-5xl font-futura font-bold text-white leading-tight uppercase">
              {banner!.title}
            </h1>

            {banner!.subtitle && (
              <p className="text-white w-[80%] font-futura text-sm md:text-lg leading-relaxed">
                {banner!.subtitle}
              </p>
            )}

            {banner!.buttonText && (
              <div>
                <Button
                  text={banner!.buttonText}
                  className="md:px-12 md:py-3 px-8 py-2 font-futura bg-white text-[#BA0C2F] hover:bg-white hover:text-[#BA0C2F] hover:border rounded-full font-semibold cursor-pointer"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Dummy / Fallback Hero — shown only when API fails or returns nothing */}
      {showDummyHero && (
        <div className="health-hero flex items-center min-h-[80vh] px-6 md:px-12 lg:px-30">
          <div className="w-full md:w-[50%] lg:w-[50%] max-w-2xl space-y-6">
            <h1 className="text-3xl md:text-5xl font-futura font-bold text-white leading-tight uppercase">
              HEALTH CARE THAT HONORS YOUR PARENTS
            </h1>
            <p className="text-white w-[80%] font-futura text-sm md:text-lg leading-relaxed">
              Whether it's your health, car or travel we've got your back in
              minutes
            </p>
            <div>
              <Button
                text="Buy Now"
                className="md:px-12 md:py-3 px-8 py-2 font-futura bg-white text-[#BA0C2F] hover:bg-white hover:text-[#BA0C2F] hover:border rounded-full font-semibold cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── REST OF THE PAGE (unchanged) ────────────────────────────────────── */}

      <div className="py-20 space-y-10">
        <h1 className="uppercase font-futura font-medium text-center text-[#4A4A4A] text-4xl">
          Why Customer Trust Family Health Care
        </h1>

        <Container>
          <div className="max-w-4xl mx-auto flex justify-center gap-8">
            {healthCarePackage.map((item, index) => (
              <div
                key={index}
                className="group flex gap-3 items-center py-6 px-10 h-22 rounded-lg cursor-pointer shadow-md transition-all bg-white text-[#4A4A4A] hover:bg-[#BA0C2F] hover:text-white"
              >
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src={Object.values(item.card_image || {})[0]}
                    alt=""
                    className="transition-all group-hover:brightness-0 group-hover:invert"
                  />
                </div>

                <h1 className="text-[18px] font-normal font-futura uppercase leading-tight">
                  {item.card_title}
                </h1>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Card package */}
      <div>
        <div className="flex flex-col items-center justify-center pb-10">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-medium font-futura text-center text-[#4A4A4A] uppercase">
            Choose the plan that’s right for your Family Health
          </h2>
        </div>
        {/* <Card_package plans={healthPackage} /> */}
        <Card_package
          plans={healthPackage}
          showDescription={false}
          enableHover={true}
          showPrice={true}
        />
      </div>

      <section className="w-full">
        {/* Table: only show after clicking View more Benefits */}
        {isOpen && (
          <div className="animate-benefits-table-open">
            <Container>
              <BenefitsTable
                // heading="Plan Premium Details"
                plans={parentsCarePlusPlans}
                sections={familyHealthCareSections}
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
      {/* Form */}
      <Suspense fallback={<div />}>
        <QuoteSection />
      </Suspense>

      {/* Table Section */}
      {/* <section className="py-16 bg-gray-50">
        <h1 className="text-center text-[#4A4A4A] text-4xl font-futura font-medium mb-10 uppercase">
          Compare All Plans Side by Side
        </h1>
        <Container>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center">
              <thead>
                <tr className="font-futura">
                  <th className="p-4 border-b-1 border-[#E5E5E5]"></th>
                  <th className="p-4 border-b-1 border-[#E5E5E5]">Silver</th>
                  <th className="p-4 border-b-1 border-[#E5E5E5]">Gold</th>
                  <th className="p-4 border-b-1 border-[#E5E5E5]">Platinum</th>
                  <th className="p-4 border-b-1 border-[#E5E5E5]">Titanium</th>
                  <th className="p-4 border-b-1 border-[#E5E5E5]">
                    Titanium Plus
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="font-normal border-b-1 border-[#E5E5E5] font-futura">
                  <td className="p-4 border-b-1 bg-[#BA0C2F] text-[16px] border-[#E5E5E5] text-white rounded-tl-xl rounded-tr-xl">
                    Room Type
                  </td>
                  <td className="p-4 text-[14px]">Shared</td>
                  <td className="p-4 text-[14px]">Semi-Private</td>
                  <td className="p-4 text-[14px]">Private</td>
                  <td className="p-4 text-[14px]">Private</td>
                  <td className="p-4 text-[14px] rounded-tr-xl">
                    Executive Suite
                  </td>
                </tr>
                <tr className="border-b-1 border-[#E5E5E5] font-normal font-futura">
                  <td className="p-4 border-b-1 border-[#E5E5E5] bg-[#BA0C2F] text-[16px] text-white">
                    Annual Limit
                  </td>
                  <td className="p-4 text-[14px]">300K</td>
                  <td className="p-4 text-[14px]">500K</td>
                  <td className="p-4 text-[14px]">750K</td>
                  <td className="p-4 text-[14px]">1M</td>
                  <td className="p-4 text-[14px]">1.5M</td>
                </tr>
                <tr className="border-b-1 border-[#E5E5E5] font-futura">
                  <td className="p-4 border-b-1 text-[16px] bg-[#BA0C2F] font-normal border-[#E5E5E5] text-white">
                    ICU & Day Care
                  </td>
                  <td className="p-4 text-[14px] font-normal">Partial</td>
                  {[...Array(4)].map((_, i) => (
                    <td key={i} className="p-4">
                      <span className="flex items-center justify-center w-4 h-4 mx-auto rounded-full bg-[#10B981] text-white">
                        <FaCheck size={10} />
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="border-b-1 border-[#E5E5E5] font-futura">
                  <td className="p-4 border-b-1 text-[16px] bg-[#BA0C2F] border-[#E5E5E5] text-white font-normal">
                    Specialist Consultant
                  </td>
                  <td className="p-4">
                    <span className="flex items-center justify-center w-4 h-4 mx-auto rounded-full bg-[#E5E5E5] text-white">
                      <RxCross2 size={10} />
                    </span>
                  </td>
                  {[...Array(4)].map((_, i) => (
                    <td key={i} className="p-4">
                      <span className="flex items-center justify-center w-4 h-4 mx-auto rounded-full bg-[#10B981] text-white">
                        <FaCheck size={10} />
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="border-b-1 border-[#E5E5E5] font-futura font-normal">
                  <td className="p-4 border-b-1 text-[16px] bg-[#BA0C2F] border-[#E5E5E5] text-white">
                    Health Check-up
                  </td>
                  {[...Array(3)].map((_, i) => (
                    <td key={i} className="p-4">
                      <span className="flex items-center justify-center w-4 h-4 mx-auto rounded-full bg-[#E5E5E5] text-white">
                        <RxCross2 size={10} />
                      </span>
                    </td>
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <td key={i} className="p-4">
                      <span className="flex items-center justify-center w-4 h-4 mx-auto rounded-full bg-[#10B981] text-white">
                        <FaCheck size={10} />
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="font-medium border-b-1 border-[#E5E5E5] font-futura font-normal">
                  <td className="p-4 border-b-1 text-[16px] bg-[#BA0C2F] border-[#E5E5E5] text-white rounded-bl-xl rounded-br-xl">
                    Network Hospitals
                  </td>
                  <td className="p-4 text-[14px]">Basic</td>
                  <td className="p-4 text-[14px]">Expanded</td>
                  <td className="p-4 text-[14px]">Full</td>
                  <td className="p-4 text-[14px]">Premium</td>
                  <td className="p-4 text-[14px] rounded-br-xl">Premium+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section> */}

      {/* <div className="bg-[#BA0C2F]">
        <Container>
          <div className="max-w-4xl mx-auto flex justify-center items-stretch">
            <div className="flex flex-col justify-center space-y-6 py-8">
              <h1 className="text-white uppercase font-futura font-medium text-3xl">
                Not sure which plan to choose
                <br /> We can guide you
              </h1>
              <div>
                <Button text="Get a Quote" />
              </div>
            </div>
            <Image src={person} alt="" className="w-64 h-full object-cover" />
          </div>
        </Container>
      </div> */}

      {/* Testimonials */}
      {/* <h1 className="text-center md:text-3xl font-futura text-[#4A4A4A] uppercase font-semibold text-xl pt-10 px-8 mb-10">
        Trusted by Millions across Pakistan
      </h1> */}
      {(isTestimonialsLoading || isTestimonialsError) &&
      apiCarouselData.length === 0 ? (
        <p className="text-center text-sm text-gray-500 -mt-6 mb-4 font-futura">
          {isTestimonialsLoading
            ? "Loading testimonials..."
            : "Showing cached testimonials"}
        </p>
      ) : null}
      {/* <section className="flex justify-center py-10">
        <CarpuselDemoTestimonial data={carouselDataToShow} />
      </section> */}
      <TestimonialsPreview data={carouselDataToShow} />
    </>
  );
};

export default HealthCare;
