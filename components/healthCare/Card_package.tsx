"use client";
const PRODUCT_URL_MAP: Record<string, string> = {
  "Parents Care Plus": "#",
  "Personal Health Care": "#",
  "Family HealthCare": "#",

  "Motor Third Party Liability Insurance": "#",
  "Private Car Comprehensive": "#",
  "Old Car Comprehensive": "#",
  "3TOld Car Insurance": "#",
  "Motor Cycle Comprehensive Insurance": "#",
  "Privates Cars Third Party Liability Insurance ": "#",
  "Motor Cycles Third Party Liability Insurance": "#",

  "International Trip": "#",
  "Home Trip": "#",
  "Student Travel": "#",
  "Hajj and Umrah": "#",
  Ziarat: "#",
  "Domestic Travel": "#",

  "Self Care Basic": "#",
  "Self Care Plus": "#",
  "Self Care Premium": "#",

  "Home Basic": "#",
  "Home Plus": "#",
  "Home Premium": "#",
};

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

type Plan = {
  Card_Name: string;
  Card_description: string;
  Card_price: string;
  highlighted: boolean;
  Card_btn_text: string;
  Card_features: string[];
  whiteIcon?: string;
  redIcon?: string;
};

type cardPackages = {
  plans: Plan[];
  showPrice?: boolean;
  showDescription?: boolean;
  enableHover?: boolean;
  selectedCategory?: string;
  onGetPlanClick?: (data: {
    coverageType: string;
    selectedProduct: string;
  }) => void;
};

const Card_package: React.FC<cardPackages> = ({
  plans,
  showPrice = true,
  showDescription = true,
  enableHover = true,
  selectedCategory = "",
  onGetPlanClick,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // ✅ Har card ke heart ko alag track karne ke liye
  const [favoriteIndexes, setFavoriteIndexes] = useState<number[]>([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // ✅ Individual heart toggle + selected card JSON console
  const handleHeartClick = (index: number, plan: Plan) => {
    setFavoriteIndexes((prev) => {
      const alreadyFavorite = prev.includes(index);

      const savedPlans = localStorage.getItem("favoritePlans");
      const parsedPlans = savedPlans ? JSON.parse(savedPlans) : [];

      const planWithUrl = {
        ...plan,
        url: PRODUCT_URL_MAP[plan.Card_Name] || "#",
      };
      if (alreadyFavorite) {
        const updatedPlans = parsedPlans.filter(
          (item: Plan & { url?: string }) => item.Card_Name !== plan.Card_Name,
        );

        localStorage.setItem("favoritePlans", JSON.stringify(updatedPlans));

        return prev.filter((item) => item !== index);
      }

      const updatedPlans = [...parsedPlans, planWithUrl];

      localStorage.setItem("favoritePlans", JSON.stringify(updatedPlans));

      console.log("Saved Favorite Card With URL:", planWithUrl);

      return [...prev, index];
    });
  };

  return (
    <section ref={sectionRef} className="pb-16 px-6 sm:px-8 lg:px-12">
      <style>{`
        .package-card-animate {
          opacity: 0;
          transform: translateY(55px) scale(0.94);
          transition:
            opacity 900ms ease,
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 400ms ease,
            background-color 300ms ease,
            color 300ms ease;
          will-change: opacity, transform;
        }

        .package-card-animate.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .package-card-animate.show.active-package {
          transform: translateY(0) scale(1.05);
        }

        .package-card-animate.show:not(.active-package):hover {
          transform: translateY(-10px) scale(1.02);
        }

        .package-title-animate {
          opacity: 0;
          transform: translateY(-25px);
          transition:
            opacity 800ms ease,
            transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .package-title-animate.show {
          opacity: 1;
          transform: translateY(0);
        }

        .package-slider-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .package-slider-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="container mx-auto max-w-7xl">
        <div className="package-slider-scroll flex gap-6 justify-center overflow-x-auto overflow-y-visible scroll-smooth snap-x snap-mandatory lg:gap-10 py-4">
          {plans.map((plan, index) => {
            const isActive = activeIndex === index;
            const isFavorite = favoriteIndexes.includes(index);

            return (
              <div
                key={index}
                className={`${enableHover ? "group" : ""} package-card-animate snap-start flex self-stretch flex-shrink-0 w-full md:w-[calc((100%-48px)/3)] lg:w-[calc((100%-160px)/3)] flex-col rounded-3xl p-8 transition-colors duration-300 sm:p-10 ${
                  isVisible ? "show" : ""
                } ${
                  isActive
                    ? "active-package bg-[#BA0C2F] text-white"
                    : `bg-white text-gray-900 shadow-[0_0_10px_rgba(0,0,0,0.14)] ${
                        enableHover
                          ? "hover:bg-[#BA0C2F] hover:text-white hover:shadow-xl"
                          : ""
                      }`
                }`}
                style={{
                  transitionDelay: `${index * 140}ms`,
                }}
              >
                <div className="flex justify-between items-center">
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-white"
                        : `bg-[#BA0C2F] ${
                            enableHover ? "group-hover:bg-white" : ""
                          }`
                    }`}
                  >
                    {plan.whiteIcon && plan.redIcon ? (
                      <>
                        <Image
                          src={isActive ? plan.redIcon : plan.whiteIcon}
                          alt="Healthcare Icon"
                          width={48}
                          height={48}
                          className={`${
                            !isActive && enableHover ? "group-hover:hidden" : ""
                          }`}
                        />

                        {!isActive && enableHover && (
                          <Image
                            src={plan.redIcon}
                            alt="Healthcare Icon"
                            width={48}
                            height={48}
                            className="hidden group-hover:block"
                          />
                        )}
                      </>
                    ) : (
                      <Check
                        className={`h-4 w-4 ${
                          isActive
                            ? "text-[#BA0C2F]"
                            : `text-white ${
                                enableHover ? "group-hover:text-[#BA0C2F]" : ""
                              }`
                        }`}
                      />
                    )}
                  </div>

                  {/* ✅ Individual Favorite Heart */}
                  <button
                    type="button"
                    onClick={() => handleHeartClick(index, plan)}
                    className="flex justify-center items-center cursor-pointer absolute top-6 right-8"
                    aria-label={
                      isFavorite
                        ? `Remove ${plan.Card_Name} from favorites`
                        : `Add ${plan.Card_Name} to favorites`
                    }
                  >
                    {isFavorite ? (
                      <FaHeart
                        className={`h-8 w-8 text-[#BA0C2F] ${
                          isActive
                            ? "text-white"
                            : enableHover
                              ? "text-[#4A4A4A] group-hover:text-white"
                              : "text-[#4A4A4A]"
                        }`}
                      />
                    ) : (
                      <CiHeart
                        className={`h-8 w-8 transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : enableHover
                              ? "text-[#4A4A4A] group-hover:text-white"
                              : "text-[#4A4A4A]"
                        }`}
                      />
                    )}
                  </button>
                </div>

                <h3
                  className={`mt-6 mb-4 font-futura text-3xl font-medium leading-[1.15] transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : `text-[#4A4A4A] ${enableHover ? "group-hover:text-white" : ""}`
                  }`}
                >
                  {plan.Card_Name}
                </h3>
                {showDescription && (
                  <p
                    className={`mb-6 font-futura text-sm leading-6 transition-colors duration-300 ${
                      isActive
                        ? "text-white/80"
                        : `text-[#797878] ${
                            enableHover ? "group-hover:text-white/80" : ""
                          }`
                    }`}
                  >
                    {plan.Card_description}
                  </p>
                )}

                <div className="mb-6 border-b border-current border-opacity-20">
                  {showPrice && (
                    <div className="flex items-center gap-4 pb-6">
                      <span
                        className={`text-4xl sm:text-[44px] font-medium font-futura transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : `text-[#4A4A4A] ${
                                enableHover ? "group-hover:text-white" : ""
                              }`
                        }`}
                      >
                        {plan.Card_price}
                      </span>

                      <span
                        className={`text-sm leading-5 font-futura transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : `text-[#797878] uppercase ${
                                enableHover ? "group-hover:text-white" : ""
                              }`
                        }`}
                      >
                        PKR <br /> per year
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.Card_features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          isActive
                            ? "border border-white"
                            : `border border-[#BA0C2F] ${
                                enableHover ? "group-hover:border-white" : ""
                              }`
                        }`}
                      >
                        <Check
                          className={`w-2 h-2 mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                            isActive
                              ? "text-white"
                              : `text-[#BA0C2F] ${
                                  enableHover ? "group-hover:text-white" : ""
                                }`
                          }`}
                        />
                      </span>

                      <span
                        className={`text-sm font-futura transition-colors duration-300 ${
                          isActive
                            ? "text-white/90"
                            : `text-gray-700 ${
                                enableHover ? "group-hover:text-white/90" : ""
                              }`
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => {
                    setActiveIndex(index);

                    onGetPlanClick?.({
                      coverageType: selectedCategory
                        ? `${selectedCategory} Insurance`
                        : "",
                      selectedProduct: plan.Card_Name,
                    });
                  }}
                  size="lg"
                  className={`w-full py-6 sm:py-4 rounded-full font-semibold font-futura transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#BA0C2F] hover:bg-white hover:text-[#BA0C2F]"
                      : `border-2 border-[#BA0C2F] bg-white text-[#BA0C2F] ${
                          enableHover
                            ? "group-hover:border-white group-hover:bg-white group-hover:text-[#BA0C2F] hover:bg-white hover:text-[#BA0C2F]"
                            : ""
                        }`
                  }`}
                >
                  {plan.Card_btn_text}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Card_package;
