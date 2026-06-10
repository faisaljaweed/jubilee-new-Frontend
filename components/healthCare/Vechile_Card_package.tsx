import React, { useState } from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import iconWhite from "../../public/img/HealthCare/Icon.png";
import iconRed from "../../public/img/HealthCare//Iconred.png";
import Image from "next/image";
type Plan = {
  Card_Name: React.ReactNode;
  Card_description: string;
  //   Card_price: string;
  highlighted: boolean;
  Card_btn_text: string;
  Card_features: string[];
  // Card_heading: string;
};
type cardPackages = {
  plans: Plan[];
};
const Vechile_Card_package: React.FC<cardPackages> = ({ plans }) => {
  const [activeIndex, setActiveIndex] = useState(
    plans.findIndex((p) => p.highlighted) || 0,
  );
  return (
    <section className="pb-16  px-6 sm:px-8 lg:px-12 ">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-medium font-futura text-center text-[#4A4A4A]"></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-20 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 sm:p-10 transition-all duration-300 ${
                activeIndex === index
                  ? "bg-[#BA0C2F] text-white transform md:scale-105"
                  : "bg-white text-gray-900 shadow-lg hover:shadow-xl"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center mb-6 ${
                  activeIndex === index ? "bg-white" : "bg-[#BA0C2F]"
                }`}
              >
                <Image
                  src={activeIndex === index ? iconRed : iconWhite}
                  alt="Healthcare Icon"
                  width={18}
                />
              </div>

              <h3
                className={`text-3xl  font-medium mb-2 ${
                  activeIndex === index ? "text-white" : "text-[#4A4A4A]"
                }`}
              >
                {plan.Card_Name}
              </h3>

              <p
                className={`text-sm  ${
                  activeIndex === index ? "text-[white/80]" : "text-[#797878]"
                }`}
              >
                {plan.Card_description}
              </p>
              <div className="mb-6 pb-6 border-b border-current border-opacity-20"></div>

              <ul className="space-y-4 mb-8">
                {plan.Card_features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center ${
                        activeIndex === index
                          ? " border border-white"
                          : " border border-[#BA0C2F]"
                      }`}
                    >
                      <Check
                        className={`w-2 h-2 mt-0.5 flex-shrink-0 ${
                          activeIndex === index
                            ? "text-white"
                            : "text-[#BA0C2F]"
                        }`}
                      />
                    </span>
                    <span
                      className={`text-sm  ${
                        activeIndex === index
                          ? "text-white/90"
                          : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => setActiveIndex(index)}
                size="lg"
                className={`w-full py-6 sm:py-2 rounded-full font-semibold ${
                  activeIndex === index
                    ? "bg-white text-[#BA0C2F] cursor-pointer"
                    : "bg-white border-2 border-[#BA0C2F] text-[#BA0C2F] cursor-pointer"
                }`}
              >
                {plan.Card_btn_text}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vechile_Card_package;
