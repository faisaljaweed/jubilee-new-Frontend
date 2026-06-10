// "use client";

// import React, { useState } from "react";
// import "./investorRelation.css";
// import Container from "@/components/home/container";
// import Image from "next/image";
// import { Investor_Relation_Data } from "@/data/InvestorRelation";
// import Overview2025Section from "@/components/Investor_Relation/StatsCard";
// import { BannerHeroSection } from "@/components/About/Banner_Hero_Section";
// import Financial_Reports, {
//   Investor_Relations,
//   Notice_Of_AGM,
// } from "@/components/Investor_Relation/TabBarSection";

// function EmptyTabContent({ title }: { title: string }) {
//   return (
//     <div className="py-10">
//       <Container>
//         <div className="rounded-xl bg-[#f3f3f3] p-8 font-futura text-[#424145]">
//           <h2 className="text-2xl font-bold uppercase">{title}</h2>
//           <p className="mt-3 text-sm">This tab data will show here.</p>
//         </div>
//       </Container>
//     </div>
//   );
// }

// const InvestorRelation = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const activeTitle = String(
//     Investor_Relation_Data[activeIndex]?.card_title || "",
//   );

//   const renderTabContent = () => {
//     switch (activeTitle) {
//       case "Investor Relation":
//         return <Investor_Relations />;

//       case "Financial Reports":
//         return <Financial_Reports />;

//       case "Notice of AGM":
//         return <Notice_Of_AGM />;

//       case "Pattern of Shareholding":
//         return <EmptyTabContent title="Pattern of Shareholding" />;

//       case "Free Float of Shares":
//         return <EmptyTabContent title="Free Float of Shares" />;

//       default:
//         return <Investor_Relations />;
//     }
//   };

//   return (
//     <>
//       {/* <BannerHeroSection /> */}
//       <div className="invest "></div>
//       <Overview2025Section />

//       {/* Tab Bar */}
//       <div className="pt-10">
//         <Container>
//           <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
//             {Investor_Relation_Data.map((item, index) => {
//               const isLast = index === Investor_Relation_Data.length - 1;
//               const isActive = activeIndex === index;

//               return (
//                 <div
//                   key={index}
//                   onClick={() => setActiveIndex(index)}
//                   className={`group flex h-22 cursor-pointer items-center gap-3 rounded-lg px-4 py-6 shadow-md transition-all ${
//                     isLast ? "md:col-span-2" : ""
//                   } ${
//                     isActive
//                       ? "bg-[#BA0C2F] text-white"
//                       : "bg-white text-[#4A4A4A] hover:bg-[#BA0C2F] hover:text-white"
//                   }`}
//                 >
//                   <div className="relative h-10 w-10 shrink-0">
//                     <Image
//                       src={Object.values(item.card_image)[0]}
//                       alt={String(item.card_title)}
//                       className={`absolute inset-0 transition duration-300 ${
//                         isActive
//                           ? "opacity-0"
//                           : "opacity-100 group-hover:opacity-0"
//                       }`}
//                     />

//                     <Image
//                       src={Object.values(item.hover_image)[0]}
//                       alt={String(item.card_title)}
//                       className={`absolute inset-0 transition duration-300 ${
//                         isActive
//                           ? "opacity-100"
//                           : "opacity-0 group-hover:opacity-100"
//                       }`}
//                     />
//                   </div>

//                   <h1 className="font-futura text-sm font-normal uppercase leading-tight">
//                     {item.card_title}
//                   </h1>
//                 </div>
//               );
//             })}
//           </div>
//         </Container>
//       </div>

//       {renderTabContent()}
//     </>
//   );
// };

// export default InvestorRelation;
"use client";

import React, { useRef, useState } from "react";
import "./investorRelation.css";
import Container from "@/components/home/container";
import Image from "next/image";
import { Investor_Relation_Data } from "@/data/InvestorRelation";
import Overview2025Section from "@/components/Investor_Relation/StatsCard";
import Financial_Reports, {
  Corporate_Governance_Documents,
  EOGM,
  Growth_At_A_Galance,
  Investor_Relations,
  JubileeStockUpdates,
  Notice_Of_AGM,
  Profile_of_the_Candidate,
  Six_Year_Financial,
} from "@/components/Investor_Relation/TabBarSection";
import Button from "@/components/common/button";

function EmptyTabContent({ title }: { title: string }) {
  return (
    <div className="py-10">
      <Container>
        <div className="rounded-xl bg-[#f3f3f3] p-8 font-futura text-[#424145]">
          <h2 className="text-2xl font-bold uppercase">{title}</h2>
          <p className="mt-3 text-sm">This tab data will show here.</p>
        </div>
      </Container>
    </div>
  );
}

const InvestorRelation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTabKey = Investor_Relation_Data[activeIndex]?.key || "";

  const renderTabContent = () => {
    if (activeTabKey === "financial-reports") {
      return <Financial_Reports />;
    }

    if (activeTabKey === "notice-of-agm") {
      return <Notice_Of_AGM />;
    }

    if (activeTabKey === "corporate-governance-documents") {
      return <Corporate_Governance_Documents />;
    }

    if (activeTabKey === "six-years-financial-highlights") {
      return <Six_Year_Financial />;
    }

    if (activeTabKey === "investor-relations") {
      return <Investor_Relations />;
    }

    if (activeTabKey === "growth-at-a-glance") {
      return <Growth_At_A_Galance />;
    }

    if (activeTabKey === "jubilee-stock-updates") {
      return <JubileeStockUpdates />;
    }

    if (activeTabKey === "notice-of-eogm") {
      return <EOGM />;
    }

    if (activeTabKey === "candidate-election-directors") {
      return <Profile_of_the_Candidate />;
    }

    return <Investor_Relations />;
  };

  const tabContentRef = useRef<HTMLDivElement | null>(null);

  const handleDiscoverClick = () => {
    tabContentRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <div className="invest relative flex min-h-screen w-full items-center bg-cover bg-center bg-no-repeat">
        <div className="w-full">
          <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center pt-20 px-6 md:px-10">
            <h1 className="font-futura text-[34px] font-bold uppercase text-[#424145] md:text-[44px] lg:text-[46px] ">
              Investor Relations
            </h1>

            <p className="mt-3 max-w-[560px] font-futura text-[16px] font-normal leading-[1.6] text-[#4A4A4A] md:text-[17px]">
              Dive into all of Jubilee General’s important financial
              information, compiled for our shareholders.
            </p>
            <div className="mt-4">
              <Button
                onClick={handleDiscoverClick}
                text="Discover More"
                className="md:px-12 md:py-3 px-8 py-2  font-futura bg-[#BA0C2F] text-white hover:bg-[white] hover:border hover:border-[#BA0C2F] hover:text-[#BA0C2F] rounded-full  font-semibold cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <Overview2025Section />

      {/* Tab Bar */}
      <div className="pt-10">
        <Container>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
            {Investor_Relation_Data.map((item, index) => {
              const isLast = index === Investor_Relation_Data.length - 1;
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);

                    if (item.key === "jubilee-stock-updates") {
                      window.open(
                        "https://dps.psx.com.pk/company/JGICL",
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }
                  }}
                  className={`group flex h-22 cursor-pointer items-center gap-3 rounded-lg px-4 py-6 shadow-md transition-all ${
                    isLast ? "md:col-span-2" : ""
                  } ${
                    isActive
                      ? "bg-[#BA0C2F] text-white"
                      : "bg-white text-[#4A4A4A] hover:bg-[#BA0C2F] hover:text-white"
                  }`}
                >
                  <div className="relative h-10 w-10 shrink-0">
                    <Image
                      src={Object.values(item.card_image)[0]}
                      alt="Card icon"
                      className={`absolute inset-0 transition-all duration-300 ${
                        isActive
                          ? "brightness-0 invert"
                          : "group-hover:brightness-0 group-hover:invert"
                      }`}
                    />
                  </div>

                  <h1 className="font-futura text-sm font-normal uppercase leading-tight">
                    {item.card_title}
                  </h1>
                </div>
                // <div
                //   key={index}
                //   onClick={() => setActiveIndex(index)}
                //   className={`group flex h-22 cursor-pointer items-center gap-3 rounded-lg px-4 py-6 shadow-md transition-all ${
                //     isLast ? "md:col-span-2" : ""
                //   } ${
                //     isActive
                //       ? "bg-[#BA0C2F] text-white"
                //       : "bg-white text-[#4A4A4A] hover:bg-[#BA0C2F] hover:text-white"
                //   }`}
                // >
                //   <div className="relative h-10 w-10 shrink-0">
                //     <Image
                //       src={Object.values(item.card_image)[0]}
                //       alt="Card icon"
                //       className={`absolute inset-0 transition-all duration-300 ${
                //         isActive
                //           ? "brightness-0 invert"
                //           : "group-hover:brightness-0 group-hover:invert"
                //       }`}
                //     />
                //   </div>

                //   <h1 className="font-futura text-sm font-normal uppercase leading-tight">
                //     {item.card_title}
                //   </h1>
                // </div>
              );
            })}
          </div>
        </Container>
      </div>

      <div ref={tabContentRef} className="scroll-mt-24">
        {renderTabContent()}
      </div>
    </>
  );
};

export default InvestorRelation;
