import React from "react";
import Image from "next/image";
import Container from "./container";
import img1 from "../../public/img/Business/AdobeStock_1345137502.png";
import img2 from "../../public/img/Business/AdobeStock_1161332565.png";
import bullseye from "../../public/img/Business/bullseye-arrow.png";
import img3 from "../../public/img/Group 143727198.png";
import img4 from "../../public/img/Vector (5).png";
import img5 from "../../public/img/Group 143727376.png";

const Section2 = () => {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[350px_295px_minmax(0,1fr)] lg:gap-6 font-futura">
          {/* Left Column */}
          <div className="w-full">
            {/* Top Image */}
            <div className="relative h-[290px] w-full overflow-hidden rounded-xl sm:h-[330px] lg:h-[325px]">
              <Image
                src={img1}
                alt="Business transport insurance"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Red Card */}
            <div className="mt-3 flex min-h-[122px] w-full flex-col justify-center rounded-xl bg-[#BA0C2F] px-4 py-4 sm:px-5">
              <div className="relative mb-3 h-8 w-8 sm:h-9 sm:w-9">
                <Image
                  src={img3}
                  alt="Trust icon"
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-[17px] font-semibold leading-tight text-white sm:text-[16.5px]">
                Over 70 Years Of Trust & Protection
              </h3>

              <p className="mt-2 max-w-[290px] text-[10px] leading-[1.55] text-white sm:text-[10px]">
                Since 1953, Jubilee General Insurance has been delivering
                insurance solutions to businesses and individuals across
                Pakistan
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="w-full flex flex-col justify-end">
            {/* Rating Card */}
            <div className="mb-3 w-full rounded-xl bg-[#BA0C2F] px-5 py-5 lg:h-[112px] lg:w-[252px]">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white">
                  <span className="text-[11px] font-bold leading-none text-white">
                    <Image src={bullseye} alt="" />
                  </span>
                </div>

                <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-white">
                  Highest Rated Insurer
                </p>
              </div>

              <h3 className="mt-3 text-[25px] font-bold leading-none text-white">
                AA++ Rating
              </h3>

              <p className="mt-2 text-[10px] font-medium tracking-[0.08em] text-white">
                Accredited By PACRA & VIS
              </p>
            </div>

            {/* Building Image */}
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl sm:h-[340px] lg:h-[335px]">
              <Image
                src={img2}
                alt="Corporate building"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:pt-[52px]">
            <h2 className="max-w-[540px] text-[28px] font-medium uppercase leading-[1.1] text-[#4A4A4A] sm:text-[34px] lg:text-[33px]">
              A Trusted Insurance Partner For Businesses Nationwide
            </h2>

            <p className="mt-6 max-w-[500px] text-[13px] font-normal leading-[1.85] text-[#4A4A4A] sm:text-[14px]">
              For decades, businesses across industries have relied on Jubilee
              General Insurance for specialized insurance solutions, responsive
              claims support, and dedicated relationship management.
            </p>

            {/* Points */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src={img5}
                  alt="Check icon"
                  className="h-5 w-5 shrink-0 object-contain"
                />
                <p className="text-[13px] font-normal text-[#4A4A4A] sm:text-[14px]">
                  Over 70 Years of Insurance Expertise
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src={img5}
                  alt="Check icon"
                  className="h-5 w-5 shrink-0 object-contain"
                />
                <p className="text-[13px] font-normal text-[#4A4A4A] sm:text-[14px]">
                  Strong Corporate & Commercial Portfolio
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src={img5}
                  alt="Check icon"
                  className="h-5 w-5 shrink-0 object-contain"
                />
                <p className="text-[13px] font-normal text-[#4A4A4A] sm:text-[14px]">
                  Industry-Specific Coverage Solutions
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src={img5}
                  alt="Check icon"
                  className="h-5 w-5 shrink-0 object-contain"
                />
                <p className="text-[13px] font-normal text-[#4A4A4A] sm:text-[14px]">
                  Nationwide Branch Network
                </p>
              </div>
            </div>

            {/* Button + Call */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="min-w-[138px] rounded-full bg-[#BA0C2F] px-8 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90">
                Learn More
              </button>

              <div className="flex items-center gap-3">
                <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#BA0C2F]">
                  <Image
                    src={img4}
                    alt="Phone icon"
                    className="h-5 w-5 object-contain"
                  />
                </div>

                <div className="leading-tight">
                  <p className="text-[10px] font-normal text-[#4A4A4A]">
                    Call Us
                  </p>
                  <p className="text-[13px] font-extrabold text-[#4A4A4A] sm:text-[14px]">
                    (9221) 32416022-26
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Section2;
