"use client";
import React, { useMemo, useEffect, useState } from "react";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./vechileDamage.css";
import Image from "next/image";
import Container from "@/components/home/container";
import { VechileCarePackage, VechilePackage } from "@/data/healthCareData";
import Vechile_Card_package from "@/components/healthCare/Vechile_Card_package";
// import { QuoteSection } from "@/components/home/QouteSection";
import Button from "@/components/common/button";
import person from "../../public/img/HealthCare/2d09dd2119eece4576b8ff0017b531d302b35e17.png";
import { useGetAllTestimonialsQuery } from "@/lib/redux/services/testimonialsApi";
import { testimonial_Slider } from "@/data/HomeDate";
// import { CarpuselDemoTestimonial } from "@/components/home/CarpuselDemoTestimonial";
import Car_image from "../../public/img/Vechile/Car.png";
import { CiCircleCheck } from "react-icons/ci";

import axios from "axios";

// ── Types ──────────────────────────────────────────────────────────────────────
interface HeroBanner {
  _id: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl: string;
}

// ── Component ──────────────────────────────────────────────────────────────────
const VehicleDamage = () => {
  // Banner state
  const [activeIndex, setActiveIndex] = useState(0); // default first active
  const [banner, setBanner] = useState<HeroBanner | null>(null);
  const [bannerLoading, setBannerLoading] = useState(true);
  const [bannerError, setBannerError] = useState(false);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/banners?category=product&subCategory=vehicledamageprotection&isActive=true`,
        );
        const list: HeroBanner[] = res.data?.data ?? res.data ?? [];
        const first = Array.isArray(list) ? list[0] : null;
        setBanner(first ?? null);
      } catch (err) {
        console.error("VehicleDamage banner fetch error:", err);
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

  // ── Hero render flags ──────────────────────────────────────────────────────
  const showApiBanner = !bannerLoading && !bannerError && banner !== null;
  const showDummyHero = !bannerLoading && (bannerError || banner === null);

  return (
    <>
      {/* ── HERO SECTION ──────────────────────────────────────────────────── */}

      {/* Loading skeleton */}
      {bannerLoading && (
        <div className="min-h-[80vh] bg-gray-900 animate-pulse" />
      )}

      {/* API Banner */}
      {showApiBanner && (
        <div
          className="flex items-center min-h-[80vh] px-6 md:px-12 lg:px-30 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${banner!.imageUrl})` }}
        >
          <div className="w-full md:w-[50%] lg:w-[50%] max-w-2xl space-y-6">
            <h1 className="text-3xl md:text-5xl font-futura font-bold text-white leading-tight uppercase">
              {banner!.title}
            </h1>
            {banner!.subtitle && (
              <p className="text-white font-futura text-sm md:text-lg leading-relaxed">
                {banner!.subtitle}
              </p>
            )}
            {banner!.buttonText && (
              <div>
                <Button
                  text={banner!.buttonText}
                  className="md:px-14 md:py-3 px-10 py-2 font-futura bg-[#BA0C2F] text-white hover:bg-white hover:text-[#BA0C2F] hover:border hover:border-[#BA0C2F] rounded-full font-semibold cursor-pointer"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Dummy / Fallback Hero */}
      {showDummyHero && (
        <div className="health-hero flex items-center min-h-[80vh] px-6 md:px-12 lg:px-30">
          <div className="w-full md:w-[50%] lg:w-[50%] max-w-2xl space-y-6">
            <h1 className="text-3xl md:text-5xl font-futura font-bold text-white leading-tight uppercase">
              Vehicle Damage Protection
            </h1>
            <p className="text-white font-futura text-sm md:text-lg leading-relaxed">
              Secure your car against accidental damage and unexpected loss.
              Fast claims, complete peace of mind.
            </p>
            <div>
              <Button
                text="Buy Now"
                className="md:px-14 md:py-3 px-10 py-2 font-futura bg-[#BA0C2F] text-white hover:bg-white hover:text-[#BA0C2F] hover:border hover:border-[#BA0C2F] rounded-full font-semibold cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── REST OF PAGE (unchanged) ───────────────────────────────────────── */}
      <div className="pt-20">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-medium font-futura text-center text-[#4A4A4A] uppercase">
            Choose the plan that's right for your Vehicle
          </h2>
        </div>
        <Vechile_Card_package plans={VechilePackage} />
      </div>

      <div className="pt-10 space-y-10">
        <h1 className="uppercase font-futura font-medium text-center text-[#4A4A4A] text-4xl">
          Old Car Comprehensive
        </h1>
        <Container>
          <div className="max-w-4xl mx-auto flex justify-center gap-8">
            {VechileCarePackage.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group flex gap-3 items-center py-6 px-10 h-22 rounded-lg cursor-pointer shadow-md transition-all
                  ${
                    activeIndex === index
                      ? "bg-[#BA0C2F] text-white"
                      : "bg-white text-[#4A4A4A] hover:bg-[#BA0C2F] hover:text-white"
                  }
                `}
                // className="group flex gap-3 items-center py-6 px-10 h-22 bg-white rounded-lg cursor-pointer shadow-md hover:bg-[#BA0C2F] hover:text-white transition-all"
              >
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src={Object.values(item.card_image || {})[0]}
                    alt=""
                    className={`transition-all
                      ${
                        activeIndex === index
                          ? "brightness-0 invert"
                          : "group-hover:brightness-0 group-hover:invert"
                      }
                    `}
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

      <div className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <div className="h-full">
              <Image
                src={Car_image}
                alt="Car Image"
                className="h-[500px] w-full object-cover rounded-xl"
              />
            </div>
            <div className="text-[#4A4A4A] space-y-4">
              <h1 className="text-lg font-semibold font-futura">
                Loss in case of damage to vehicle by:
              </h1>
              <ul className="space-y-3">
                {[
                  "Accidental external means",
                  "Fire, external explosion, self-ignition, lightning and frost",
                  "Burglary, housebreaking and theft",
                  "Malicious act",
                  "Riot and strike damage",
                  "Flood, hail, wind, hurricane, cyclone, tornado and typhoon damages",
                  "Earthquake, volcanic eruption or other convulsion of nature",
                  "Risk while in transit by air, road, rail, inland waterway, lift or elevator",
                  "Transport of motor car to nearest workshop in case it breaks down (Subject to Rs 500 limit)",
                  "In the event of motor car being disabled by reason of loss or damage:",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-futura"
                  >
                    <span className="text-[#BA0C2F]">
                      <CiCircleCheck size={25} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="ml-8 space-y-2 list-disc text-sm">
                <li>
                  the reasonable cost of protection and removal to the nearest
                  repairer should not exceed Rs.500
                </li>
                <li>
                  The company should be provided a detailed estimate of the
                  costs incurred
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-[#BA0C2F]">
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
      </div>

      <h1 className="text-center md:text-3xl font-futura text-[#4A4A4A] uppercase font-semibold text-xl pt-10 px-8 mb-10">
        Trusted by Millions across Pakistan
      </h1>
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
    </>
  );
};

export default VehicleDamage;
