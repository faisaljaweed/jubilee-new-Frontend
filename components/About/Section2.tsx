// import React from "react";
import Container from "../home/container";
import React, { useEffect, useRef, useState } from "react";
const Section2 = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // One-time animation only
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
        .overview-left-animate {
          opacity: 0;
          transform: translateX(-55px);
          transition:
            opacity 900ms ease,
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .overview-right-animate {
          opacity: 0;
          transform: translateX(55px) scale(0.96);
          transition:
            opacity 950ms ease,
            transform 950ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .overview-left-animate.show,
        .overview-right-animate.show {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
      `}</style>

      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-center pb-10 md:gap-16">
          {/* Left Content */}
          <div
            className={`md:w-[60%] overview-left-animate ${
              isVisible ? "show" : ""
            }`}
          >
            <h1 className="mb-5 font-futura text-4xl font-semibold uppercase leading-tight tracking-wide text-[#4A4A4A] sm:text-5xl md:text-6xl">
              ABOUT
              <br /> JUBILEE GENERAL
            </h1>

            <p className="mb-3 font-futura text-sm font-normal leading-7 text-[#4A4A4A]">
              Jubilee General Insurance is a leading general insurance company
              in Pakistan with over seven decades of excellence in risk
              protection and innovation offering a diversified portfolio across
              Fire, Marine, Motor, Engineering, Health etc. Backed by the Aga
              Khan Fund for Economic Development (AKFED), Jubilee General is
              Pakistan’s highest rated general insurance company, accredited
              with strong ratings - rated B by AM Best, and AA++ by PACRA and
              VIS, while also being listed on Pakistan Stock Exchange (PSX)
            </p>

            <p className="mb-3 font-futura text-sm font-normal leading-7 text-[#4A4A4A]">
              With a legacy of strength and a focus on future-ready insurance
              solutions, Jubilee General continues to evolve as a reliable
              partner for risk protection and growth
            </p>
          </div>

          {/* Right Image */}
          <div
            className={`md:w-[30%] overview-right-animate ${
              isVisible ? "show" : ""
            }`}
          >
            <img
              src="/img/About/Section2_img.jpg"
              alt="Section2"
              className="h-105 w-full rounded-[18px] object-cover md:h-115"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section2;
