import React from "react";
import building from "../../public/img/OBJECTS (1).png";
import rectangle from "../../public/img/InvestorRelation/Rectangle 161124316.png";
import rectangle1 from "../../public/img/InvestorRelation/Rectangle 161124315.png";
import rectangle2 from "../../public/img/InvestorRelation/Rectangle 161124313.png";
// import "../../app/investorrelation/investorRelation.css";
// import "./investorRelation.css";

type StatCardProps = {
  value: string;
  label: string;
  className?: string;
  children?: React.ReactNode;
};

const images = {
  building: building.src,
  puzzle: rectangle.src,
  graph: rectangle1.src,
  bar: rectangle2.src,
};

function StatCard({ value, label, className = "", children }: StatCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[9px] border border-white/30 bg-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-[2px] ${className}`}
    >
      {children}

      <div className="relative z-30 box-border h-full p-[17px_19px]">
        <h3 className="m-0 whitespace-nowrap font-futura text-[44px] font-medium leading-none tracking-[-1px] !text-white md:text-[46px]">
          {value}
        </h3>

        <p className="m-0 mt-2 font-futura text-[16px] font-medium uppercase !text-white">
          {label}
        </p>
      </div>
    </div>
  );
}
export default function Overview2025Section() {
  return (
    <section className="building relative min-h-[675px] overflow-hidden font-sans text-white max-[900px]:min-h-0">
      <img
        src={images.building}
        alt="Building blueprint background"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-[0.62]"
      />

      <div className="absolute inset-0 z-10 bg-[rgba(198,0,42,0.72)]" />

      <div className="relative z-20 mx-auto w-[min(886px,calc(100%-32px))] px-0 pb-[70px] pt-12 max-[900px]:w-[min(620px,calc(100%-32px))] max-[900px]:pb-14 max-[900px]:pt-[42px] max-[620px]:w-[calc(100%-28px)]">
        <div className="text-center">
          <h2 className="m-0 text-[clamp(38px,4vw,52px)] font-medium font-futura leading-[1.05] tracking-[-1px] text-white">
            2025 OVERVIEW
          </h2>

          <p className="mx-0 mb-[20px] mt-[16px] text-lg font-medium leading-[1.4] text-white font-futura">
            Reflecting strong performance, exceptional growth and continued
            momentum
          </p>

          <button
            type="button"
            className="cursor-pointer rounded-full border-0 bg-white px-[18px] py-[11px] text-[11px] leading-none text-[#c9042d] shadow-[0_8px_22px_rgba(0,0,0,0.12)]"
          >
            READ THE 2025 REPORT
          </button>
        </div>

        <div className="mt-[31px] grid grid-cols-3 grid-rows-[repeat(2,145px)] gap-x-[14px] gap-y-3 max-[900px]:grid-cols-2 max-[900px]:grid-rows-none max-[900px]:auto-rows-[145px] max-[620px]:grid-cols-1 max-[620px]:auto-rows-[145px]">
          <StatCard
            value="PKR 26.5B"
            label="TOP LINE"
            className="row-span-2 max-[620px]:min-h-[303px]"
          >
            {/* <div className="absolute right-[46px] top-[101px] font-futura rounded-full bg-gradient-to-r from-white/35 to-white/5 px-3 py-1 text-[16px] font-medium text-white">
              ↑15 %
            </div> */}
            <div className="absolute right-[46px] top-[101px] font-futura rounded-full bg-gradient-to-r from-white/35 to-white/5 px-3 py-1 text-[16px] font-medium text-white inline-flex items-center gap-1 leading-none">
              <span className="text-[13px] leading-none -translate-y-[1px] font-black">
                ↑
              </span>
              <span className="leading-none">15%</span>
            </div>
            <div className="absolute bottom-5 left-[18px] right-[18px] flex h-[126px] items-end justify-center gap-3">
              <div className="relative h-[102px] w-[118px] overflow-visible">
                <span className="absolute -top-[22px] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap text-[16px] font-medium font-futura text-white">
                  23.06B+
                </span>

                <img
                  src={images.bar}
                  alt="2024 growth bar"
                  className="block h-full w-full object-cover object-center"
                />

                <small className="absolute right-[9px] top-2 z-20 text-[13px] font-normal text-[#c9042d]">
                  2024
                </small>
              </div>

              <div className="relative h-[125px] w-[118px] overflow-visible">
                <span className="absolute -top-[22px] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap text-[16px] font-medium font-futura text-white">
                  26.56B+
                </span>

                <img
                  src={images.bar}
                  alt="2025 growth bar"
                  className="block h-full w-full object-cover object-center"
                />

                <small className="absolute right-[9px] top-2 z-20 text-[13px] font-normal text-[#c9042d]">
                  2025
                </small>
              </div>
            </div>
          </StatCard>

          <StatCard value="PKR 11.5B" label="CLAIMS PAID" />

          <StatCard
            value="PKR 4B+"
            label="COMBINED VALUE"
            className="bg-black/30"
          >
            <img
              src={images.puzzle}
              alt="Combined value puzzle"
              className="absolute inset-0 z-10 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 z-10 bg-black/10" />
          </StatCard>

          <StatCard
            value="25%"
            label="INCREASE IN NET PREMIUM"
            className="bg-black/30 max-[900px]:col-auto"
          >
            <img
              src={images.graph}
              alt="Increase graph"
              className="absolute inset-0 z-10 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 z-10 bg-black/10" />
          </StatCard>

          <StatCard value="PKR 6.7B" label="PROFIT BEFORE TAX" />
        </div>
      </div>
    </section>
  );
}
