// "use client";
// import HeroSection from "@/components/About/heroSection";
// import Square_Card from "@/components/About/Square_Card";
// import Board_Direactors from "@/components/About/Board_Direactors";
// import Sec3_card from "@/components/business/Sec3_card";
// import Container from "@/components/home/container";
// import {
//   BoardDireactories,
//   Card_Status,
//   Square_Card_Data,
// } from "@/data/AboutData";
// import Button from "@/components/common/button";
// import Section1 from "@/components/About/Section1";
// import { useRouter } from "next/navigation";
// import LogoSlider from "@/components/home/Logo_Slider";
// import { Companies_Logo_Slider } from "@/data/HomeDate";
// import { BannerHeroSection } from "@/components/About/Banner_Hero_Section";
// import Section2 from "@/components/About/Section2";
// import { useEffect, useRef, useState } from "react";
// import "../about/about.css";
// import MissionVisionScrollSection from "@/components/About/Mission";
// const tabs = [
//   { id: "board", label: "BOARD OF DIRECTORS" },
//   { id: "executive", label: "EXECUTIVE COMMITTEE" },
//   { id: "management", label: "MANAGEMENT COMMITTEE" },
// ];
// const About = () => {
//   const [activeTab, setActiveTab] = useState("board");
//   const router = useRouter();

//   const missionRef = useRef<HTMLDivElement | null>(null);
//   const teamRef = useRef<HTMLDivElement | null>(null);
//   const trustedRef = useRef<HTMLDivElement | null>(null);
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   const [visibleSections, setVisibleSections] = useState({
//     mission: false,
//     team: false,
//     trusted: false,
//   });

//   useEffect(() => {
//     const sections = [
//       { key: "mission", ref: missionRef },
//       { key: "team", ref: teamRef },
//       { key: "trusted", ref: trustedRef },
//     ] as const;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const key = entry.target.getAttribute("data-section-key") as
//             | "mission"
//             | "team"
//             | "trusted"
//             | null;

//           if (entry.isIntersecting && key) {
//             setVisibleSections((prev) => ({
//               ...prev,
//               [key]: true,
//             }));

//             // one-time animation only
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.22,
//       },
//     );

//     sections.forEach(({ key, ref }) => {
//       if (ref.current) {
//         ref.current.setAttribute("data-section-key", key);
//         observer.observe(ref.current);
//       }
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div>
//       <style>{`
//         .about-fade-up {
//           opacity: 0;
//           transform: translateY(55px);
//           transition:
//             opacity 900ms ease,
//             transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
//           will-change: opacity, transform;
//         }

//         .about-fade-up.show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .about-fade-left {
//           opacity: 0;
//           transform: translateX(-55px);
//           transition:
//             opacity 900ms ease,
//             transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
//           will-change: opacity, transform;
//         }

//         .about-fade-left.show {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         .about-fade-right {
//           opacity: 0;
//           transform: translateX(55px);
//           transition:
//             opacity 900ms ease,
//             transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
//           will-change: opacity, transform;
//         }

//         .about-fade-right.show {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         .about-scale {
//           opacity: 0;
//           transform: scale(0.88);
//           transition:
//             opacity 900ms ease,
//             transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
//           will-change: opacity, transform;
//         }

//         .about-scale.show {
//           opacity: 1;
//           transform: scale(1);
//         }

//         .about-delay-100 {
//           transition-delay: 100ms;
//         }

//         .about-delay-200 {
//           transition-delay: 200ms;
//         }

//         .about-delay-300 {
//           transition-delay: 300ms;
//         }

//         .about-delay-400 {
//           transition-delay: 400ms;
//         }
//       `}</style>

//       {/* <HeroSection
//         clasName="about_hero"
//         text="About Us"
//         mainText="About Us"
//         pageLink="/about"
//       /> */}
//       <div className="about_banner min-h-screen bg-cover bg-center bg-no-repeat">
//         <div className="mx-auto flex min-h-screen max-w-7xl items-end pb-10 ">
//           <div className="max-w-7xl text-black">
//             <p className="mb-4 font-futura text-[18px] font-semibold">
//               About Us
//             </p>

//             <h1 className="font-futura text-[34px] font-bold uppercase leading-[1.08] tracking-[-1px] md:text-[40px] lg:text-[44px]">
//               INSURANCE THAT’S FAST,
//               <br />
//               FAIR &amp; BUILT AROUND YOU
//             </h1>

//             <p className="mt-5 max-w-[500px] font-futura text-[17px] font-normal leading-[1.45] md:text-[22px]">
//               Whether it’s your health, car, or travel we’ve got your back in
//               minutes
//             </p>

//             <button
//               onClick={() => {
//                 sectionRef.current?.scrollIntoView({ behavior: "smooth" });
//               }}
//               className="mt-8 border cursor-pointer border-[#BA0C2F] rounded-full bg-white px-9 py-4 font-futura text-[16px] font-bold uppercase text-[#C8102E] transition-all duration-300 hover:bg-[#C8102E] hover:text-white md:px-12"
//             >
//               Discover More
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* <BannerHeroSection /> */}
//       <div className="pt-20" ref={sectionRef}>
//         <Section2 />
//       </div>
//       <Section1 />

//       {/* Mission Section */}
//       <MissionVisionScrollSection />

//       {/* <div
//         ref={missionRef}
//         className="texture_background bg-[#BA0C2F] min-h-screen mt-20"
//       >
//         <Container>
//           <div className="flex min-h-screen flex-col items-start justify-center gap-10">
//             <img
//               src="/img/About/a3543a94365022d620765a68c3483a16ae9b24ce.png"
//               alt=""
//               className={`h-32 w-32 object-cover about-scale ${
//                 visibleSections.mission ? "show" : ""
//               }`}
//             />

//             <h1
//               className={`max-w-[800px] font-futura text-4xl font-medium capitalize leading-tight text-white md:text-6xl md:leading-[1.25] about-fade-up about-delay-200 ${
//                 visibleSections.mission ? "show" : ""
//               }`}
//             >
//               Our mission is to provide solutions to protect the future of our
//               customers.
//             </h1>
//           </div>
//         </Container>
//       </div> */}

//       {/* <div>
//         <Container>
//           <div className="grid md:grid-cols-2 gap-16 py-20 overflow-hidden">
//             {Card_Status.map((item, index) => (
//               <Sec3_card
//                 key={index}
//                 images={Object.values(item.images)[0]}
//                 heading={item.heading}
//                 paragraph={item.paragraph}
//                 btn_text={item.btn_text}
//               />
//             ))}
//           </div>
//         </Container>
//       </div> */}

//       {/* <div style={{ backgroundColor: "#C32A49" }} className="md:py-10">
//         <h1 className="md:text-center text-center md:uppercase text-white font-futura md:text-3xl  font-semibold md:mb-10 mb-5">
//           Core Values
//         </h1>
//         <Container>
//           <div className="md:flex md:gap-6 md:justify-center">
//             {Square_Card_Data.map((item, index) => (
//               <Square_Card
//                 key={index}
//                 Card_Number={item.Card_Number}
//                 Card_Heading={item.Card_Heading}
//               />
//             ))}
//           </div>
//         </Container>
//       </div> */}

//       {/* Board of Directors */}
//       <div ref={teamRef} className="py-20">
//         <h1
//           className={`font-futura font-bold md:text-4xl mb-10 text-center text-[#4A4A4A] uppercase about-fade-up ${
//             visibleSections.team ? "show" : ""
//           }`}
//         >
//           Our Team
//         </h1>
//         <div className="w-full">
//           {/* Tabs */}
//           <div
//             className={`flex flex-wrap items-center justify-center gap-5 pb-10 about-fade-up about-delay-200 ${
//               visibleSections.team ? "show" : ""
//             }`}
//           >
//             {tabs.map((tab) => {
//               const isActive = activeTab === tab.id;

//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`min-w-37.5 rounded-lg px-5 py-4 text-[15px] font-futura uppercase transition-all duration-300 cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.08)] ${
//                     isActive
//                       ? "bg-[#BA0C2F] text-white"
//                       : "bg-white text-[#6B6B6B] hover:bg-[#f7f7f7]"
//                   }`}
//                 >
//                   {tab.label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         <Container>
//           <div className="grid grid-cols-4 gap-10">
//             {BoardDireactories.map((item, index) => (
//               <Board_Direactors
//                 key={index}
//                 Direactor_Images={Object.values(item.Direactor_Image)[0]}
//                 Direactor_Name={item.Direactot_Name}
//                 Direactor_Position={item.Direactor_Designation}
//                 Direactor_Description={item.Direactor_Description}
//               />
//             ))}
//           </div>
//         </Container>

//       </div>

//       {/* Trusted By Leading Industries */}
//       <div ref={trustedRef} className="mb-20">
//         <h1
//           className={`text-center md:text-4xl text-xl px-8 font-bold mb-10 text-[#4A4A4A] uppercase font-futura about-fade-up ${
//             visibleSections.trusted ? "show" : ""
//           }`}
//         >
//           Associated Companies
//         </h1>

//         <LogoSlider />
//       </div>
//     </div>
//   );
// };

// export default About;

"use client";

import HeroSection from "@/components/About/heroSection";
import Square_Card from "@/components/About/Square_Card";
import Board_Direactors from "@/components/About/Board_Direactors";
import Sec3_card from "@/components/business/Sec3_card";
import Container from "@/components/home/container";
import {
  BoardDireactories,
  ExecutiveCommittee,
  ManagementCommittee,
  Card_Status,
  Square_Card_Data,
} from "@/data/AboutData";
import Button from "@/components/common/button";
import Section1 from "@/components/About/Section1";
import { useRouter } from "next/navigation";
import LogoSlider from "@/components/home/Logo_Slider";
import { Companies_Logo_Slider } from "@/data/HomeDate";
import { BannerHeroSection } from "@/components/About/Banner_Hero_Section";
import Section2 from "@/components/About/Section2";
import { useEffect, useRef, useState } from "react";
import "../about/about.css";
import MissionVisionScrollSection from "@/components/About/Mission";

const tabs = [
  { id: "board", label: "BOARD OF DIRECTORS" },
  { id: "executive", label: "EXECUTIVE COMMITTEE" },
  { id: "management", label: "MANAGEMENT COMMITTEE" },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("board");
  const router = useRouter();

  const teamData =
    activeTab === "board"
      ? BoardDireactories
      : activeTab === "executive"
        ? ExecutiveCommittee
        : ManagementCommittee;

  const missionRef = useRef<HTMLDivElement | null>(null);
  const teamRef = useRef<HTMLDivElement | null>(null);
  const trustedRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [visibleSections, setVisibleSections] = useState({
    mission: false,
    team: false,
    trusted: false,
  });

  useEffect(() => {
    const sections = [
      { key: "mission", ref: missionRef },
      { key: "team", ref: teamRef },
      { key: "trusted", ref: trustedRef },
    ] as const;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = entry.target.getAttribute("data-section-key") as
            | "mission"
            | "team"
            | "trusted"
            | null;

          if (entry.isIntersecting && key) {
            setVisibleSections((prev) => ({
              ...prev,
              [key]: true,
            }));

            // one-time animation only
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.22,
      },
    );

    sections.forEach(({ key, ref }) => {
      if (ref.current) {
        ref.current.setAttribute("data-section-key", key);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <style>{`
        .about-fade-up {
          opacity: 0;
          transform: translateY(55px);
          transition:
            opacity 900ms ease,
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .about-fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }

        .about-fade-left {
          opacity: 0;
          transform: translateX(-55px);
          transition:
            opacity 900ms ease,
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .about-fade-left.show {
          opacity: 1;
          transform: translateX(0);
        }

        .about-fade-right {
          opacity: 0;
          transform: translateX(55px);
          transition:
            opacity 900ms ease,
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .about-fade-right.show {
          opacity: 1;
          transform: translateX(0);
        }

        .about-scale {
          opacity: 0;
          transform: scale(0.88);
          transition:
            opacity 900ms ease,
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .about-scale.show {
          opacity: 1;
          transform: scale(1);
        }

        .about-delay-100 {
          transition-delay: 100ms;
        }

        .about-delay-200 {
          transition-delay: 200ms;
        }

        .about-delay-300 {
          transition-delay: 300ms;
        }

        .about-delay-400 {
          transition-delay: 400ms;
        }
      `}</style>

      {/* <HeroSection
        clasName="about_hero"
        text="About Us"
        mainText="About Us"
        pageLink="/about"
      /> */}

      <div className="about_banner min-h-screen bg-cover bg-center bg-no-repeat">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center pt-30 ">
          <div className="max-w-7xl text-black">
            {/* <p className="mb-4 font-futura text-[18px] font-semibold">
              About Us
            </p> */}

            <h1 className="font-futura text-[34px] font-bold uppercase leading-[1.08] tracking-[-1px] md:text-[40px] lg:text-[42px]">
              INSURANCE THATS BUILT
              <br />
              AROUND PEOPLE & BUSINESS
            </h1>

            <p className="mt-5 max-w-[500px] font-futura text-[17px] font-normal leading-[1.45] md:text-[22px]">
              Protecting people. Strengthening businesses. Built on expertise
              and trust.
            </p>

            <button
              onClick={() => {
                sectionRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 border cursor-pointer border-[#BA0C2F] rounded-full bg-white px-9 py-4 font-futura text-[16px] font-bold uppercase text-[#C8102E] transition-all duration-300 hover:bg-[#C8102E] hover:text-white md:px-12"
            >
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* <BannerHeroSection /> */}

      <div className="pt-20" ref={sectionRef}>
        <Section2 />
      </div>

      <Section1 />

      {/* Mission Section */}
      <MissionVisionScrollSection />

      {/* <div
        ref={missionRef}
        className="texture_background bg-[#BA0C2F] min-h-screen mt-20"
      >
        <Container>
          <div className="flex min-h-screen flex-col items-start justify-center gap-10">
            <img
              src="/img/About/a3543a94365022d620765a68c3483a16ae9b24ce.png"
              alt=""
              className={`h-32 w-32 object-cover about-scale ${
                visibleSections.mission ? "show" : ""
              }`}
            />

            <h1
              className={`max-w-[800px] font-futura text-4xl font-medium capitalize leading-tight text-white md:text-6xl md:leading-[1.25] about-fade-up about-delay-200 ${
                visibleSections.mission ? "show" : ""
              }`}
            >
              Our mission is to provide solutions to protect the future of our
              customers.
            </h1>
          </div>
        </Container>
      </div> */}

      {/* <div>
        <Container>
          <div className="grid md:grid-cols-2 gap-16 py-20 overflow-hidden">
            {Card_Status.map((item, index) => (
              <Sec3_card
                key={index}
                images={Object.values(item.images)[0]}
                heading={item.heading}
                paragraph={item.paragraph}
                btn_text={item.btn_text}
              />
            ))}
          </div>
        </Container>
      </div> */}

      {/* <div style={{ backgroundColor: "#C32A49" }} className="md:py-10">
        <h1 className="md:text-center text-center md:uppercase text-white font-futura md:text-3xl  font-semibold md:mb-10 mb-5">
          Core Values
        </h1>
        <Container>
          <div className="md:flex md:gap-6 md:justify-center">
            {Square_Card_Data.map((item, index) => (
              <Square_Card
                key={index}
                Card_Number={item.Card_Number}
                Card_Heading={item.Card_Heading}
              />
            ))}
          </div>
        </Container>
      </div> */}

      {/* Board of Directors */}
      {/* <div ref={teamRef} className="py-20"> */}
      <div id="leadership" ref={teamRef} className="scroll py-20">
        <h1
          className={`font-futura font-bold md:text-4xl mb-10 text-center text-[#4A4A4A] uppercase about-fade-up ${
            visibleSections.team ? "show" : ""
          }`}
        >
          LEADERSHIP
        </h1>

        <div className="w-full">
          {/* Tabs */}
          <div
            className={`flex flex-wrap items-center justify-center gap-5 pb-10 about-fade-up about-delay-200 ${
              visibleSections.team ? "show" : ""
            }`}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`min-w-37.5 rounded-lg px-5 py-4 text-[15px] font-futura uppercase transition-all duration-300 cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.08)] ${
                    isActive
                      ? "bg-[#BA0C2F] text-white"
                      : "bg-white text-[#6B6B6B] hover:bg-[#f7f7f7]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <Container>
          <div className="grid grid-cols-4 gap-10">
            {teamData.map((item, index) => (
              <Board_Direactors
                key={index}
                Direactor_Images={Object.values(item.Direactor_Image)[0]}
                Direactor_Name={item.Direactot_Name}
                Direactor_Position={item.Direactor_Designation}
                Direactor_Description={item.Direactor_Description}
                showProfileButton={activeTab === "board"}
              />
            ))}
          </div>
        </Container>
      </div>

      {/* Trusted By Leading Industries */}
      <div ref={trustedRef} className="mb-20">
        <h1
          className={`text-center md:text-4xl text-xl px-8 font-bold mb-10 text-[#4A4A4A] uppercase font-futura about-fade-up ${
            visibleSections.trusted ? "show" : ""
          }`}
        >
          Associated Companies
        </h1>

        <LogoSlider />
      </div>
    </div>
  );
};

export default About;
