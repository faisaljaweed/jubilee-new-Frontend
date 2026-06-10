'use client";';
import HeroSection from "@/components/business/heroSection";
import Section1 from "@/components/business/Section1";
import "../home/home.css";

import Section5 from "@/components/home/Section5";
import { home_Testimonial, Statu_Bar } from "@/data/BusinessData";

import LogoSlider from "@/components/home/Logo_Slider";
import Section2 from "@/components/home/Section2";
import TestimonialsPreview from "@/components/home/CarpuselDemoTestimonial";
import Image from "next/image";
import Container from "@/components/home/container";
import GetConnected from "@/components/home/GetConnected";
const Business = () => {
  return (
    <div>
      <GetConnected />
      <HeroSection />
      <Section2 />
      <Section1 />
      <div className="mt-20 mb-20">
        <h1 className="text-center md:text-3xl uppercase text-xl px-8 font-bold mb-10 text-[#4A4A4A]">
          Trusted by Leading Businesses
        </h1>
        <LogoSlider />
      </div>

      <Section5
        testimonials={home_Testimonial}
        stats={Statu_Bar}
        backgroundClass="section5_bg"
      />

      {/* Dukan Hifazat */}
      <Container>
        <div className="mx-10 mb-10 grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[50px]  px-15 py-12  lg:grid-cols-2">
          {/* Left Content */}
          <div className="font-futura text-black">
            <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.18em] text-[#BA0C2F]">
              Introducing
            </span>

            <h1 className="text-4xl font-semibold uppercase leading-tight text-[#111111] lg:text-5xl">
              Dukan Hifazat
            </h1>

            <h3 className="max-w-[500px] pt-5 text-xl font-semibold leading-[1.35] text-[#222222]">
              The only thing smoking in the bazaar should be the tandoor, not
              your business.
            </h3>

            <p className="max-w-[540px] pt-7 text-[16px] font-normal leading-[1.8] text-[#555555]">
              Dukaan Hifazat is a specialized Takaful solution designed to
              provide SMEs with high-impact protection at a negligible cost.
              Because your shop isn't just a business—it’s the backbone of the
              economy.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px]">
              <Image
                src="/img/Business/Rectangle 161124350.png"
                alt="DUKAN HIFAZAT"
                width={1000}
                height={700}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
      {/* Testimonial Preview */}
      <TestimonialsPreview />
    </div>
  );
};

export default Business;
