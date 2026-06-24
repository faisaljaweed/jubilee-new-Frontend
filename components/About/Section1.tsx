"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "../home/container";

const Square_Card = [
  {
    icons: "/Icons/About Us/Fastest-Claims.png",
    heading: "Fastest Claims",
    description: "when it matters most",
  },
  {
    icons: "/Icons/About Us/Top-Rated.png",
    heading: "Top-Rated",
    description: "insurer in Pakistan",
  },
  {
    icons: "/Icons/About Us/PKR-50B+.png",
    heading: "PKR 50B+",
    description: "claims settled",
  },
  {
    icons: "/Icons/About Us/3M-customer.png",
    heading: "3M+ Customers",
    description: "protected nationwide",
  },
  {
    icons: "/Icons/About Us/73+-Years.png",
    heading: "73+ Years",
    description: "of trusted experience",
  },
  {
    icons: "/Icons/About Us/Global-Presence.png",
    heading: "Global Presence",
    description: "with local expertise",
  },
];

const Section1 = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div ref={sectionRef}>
      <style>{`
        .square-card-animate {
          opacity: 0;
          transform: translateY(45px) scale(0.94);
          transition:
            opacity 850ms ease,
            transform 850ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 350ms ease,
            background-color 350ms ease;
          will-change: opacity, transform;
        }

        .square-card-animate.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .square-card-animate.show:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.12);
          background-color: rgba(105, 115, 122, 0.35);
        }
      `}</style>

      <Container>
        <div className=" max-w-4xl mx-auto grid grid-cols-1 gap-x-10 gap-y-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {Square_Card.map((item, index) => (
            <div
              key={index}
              className={`square-card-animate flex h-[150px] w-full flex-col items-center justify-center rounded-2xl bg-[#69737A40] py-6 text-center ${
                isVisible ? "show" : ""
              }`}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <img
                src={item.icons}
                alt=""
                className="mb-2 h-14 w-14 shrink-0"
              />

              <div className="flex flex-col items-center justify-center">
                <h1 className="font-futura text-[17px] font-bold leading-tight text-black sm:text-[18px] md:text-[19px]">
                  {item.heading}
                </h1>

                <p className="font-futura mt-1 text-[12px] font-normal leading-tight text-black sm:text-[14px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Section1;
