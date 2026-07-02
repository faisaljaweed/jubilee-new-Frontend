"use client";
import Section3 from "@/components/Career/Section3";
import "./careers.css";
import Section4 from "@/components/Career/Section4";
import Section5 from "@/components/Career/Section5";
import Container from "@/components/home/container";
import Image from "next/image";
const page = () => {
  const scrollToJobs = () => {
    document.getElementById("jobs-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <div className="carrers-hero relative flex min-h-screen w-full items-center bg-cover bg-center bg-no-repeat">
        <div className="w-full">
          <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center pb-10 px-6 md:px-0 pt-30">
            <h1 className="font-futura text-[34px] font-bold uppercase text-black md:text-[42px] lg:text-[48px]">
              Inside Jubilee General
            </h1>

            <p className="mt-3 max-w-[500px] font-futura text-[20px] font-normal leading-[1.6]  text-black  md:text-[22px] tracking-wide">
              Where ideas grow, teams win, and your work actually makes a
              difference.
              {/* WHERE IDEAS GROW, TEAMS WIN, AND YOUR WORK ACTUALLY MAKES A
              DIFFERENCE. */}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <input
                type="text"
                className="border border-white px-4 py-2 rounded-full bg-white outline-none shadow-lg focus:ring-1 ring-[#ba0c2f] font-futura"
                placeholder="Search job/title"
              />
              <input
                type="text"
                className="border border-white px-4 py-2 rounded-full bg-white outline-none shadow-lg focus:ring-1 ring-[#ba0c2f] font-futura"
                placeholder="City, State or Zip"
              />
              <button
                onClick={scrollToJobs}
                className="bg-[#ba0c2f] text-white border-none px-10 py-2 font-futura rounded-full uppercase font-medium text-md cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Key Employee Area */}
      {/* Key Employee Area */}
      <div className="max-w-7xl mx-auto py-16 md:py-20 px-4">
        <div className="flex flex-col space-y-4">
          <h2 className="text-[#4A4A4A] uppercase text-center font-extrabold text-4xl md:text-5xl lg:text-6xl font-futura">
            Our key employee focus areas
          </h2>

          <span className="text-black uppercase text-center font-normal text-xl">
            Come and grow with us
          </span>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Development & Career",
              icon: (
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:scale-110"
                >
                  <path
                    d="M12 3L14.65 8.37L20.58 9.23L16.29 13.41L17.3 19.32L12 16.53L6.7 19.32L7.71 13.41L3.42 9.23L9.35 8.37L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 21L12 18.5L17 21"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
            {
              title: "Diversity & Belonging",
              icon: (
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:scale-110"
                >
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 20C4.7 16.95 7.75 15 12 15C16.25 15 19.3 16.95 20 20"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5.5 10.5C4.12 10.5 3 9.38 3 8C3 6.62 4.12 5.5 5.5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18.5 5.5C19.88 5.5 21 6.62 21 8C21 9.38 19.88 10.5 18.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ),
            },
            {
              title: "Sustainable Practices",
              icon: (
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:scale-110"
                >
                  <path
                    d="M12 21V12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 12C12 7.5 15.5 4 20 4C20 8.5 16.5 12 12 12Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C8.2 15 5 12.2 4 8.5C7.8 8.5 11 11.3 12 15Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 21H19"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ),
            },
            {
              title: "Community Responsibility",
              icon: (
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:scale-110"
                >
                  <path
                    d="M8 11C10.21 11 12 9.21 12 7C12 4.79 10.21 3 8 3C5.79 3 4 4.79 4 7C4 9.21 5.79 11 8 11Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 11C18.21 11 20 9.21 20 7C20 4.79 18.21 3 16 3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2.5 21C3.2 17.35 5.95 15 8 15C10.05 15 12.8 17.35 13.5 21"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.5 15.3C17.4 15.8 20.55 17.85 21.5 21"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] border border-[#eeeeee] bg-white px-6 py-9 text-center shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#BA0C2F]/30 hover:shadow-[0_24px_70px_rgba(186,12,47,0.14)]"
            >
              {/* <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#BA0C2F]/10 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#BA0C2F]/15" />
              <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-[#4A4A4A]/5 transition-all duration-300 group-hover:scale-125" /> */}

              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F8F8F8] text-[#4A4A4A] shadow-inner transition-all duration-300 group-hover:bg-[#BA0C2F] group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="relative mt-7 font-futura text-[15px] font-extrabold uppercase tracking-[0.4px] text-[#BA0C2F] transition-colors duration-300 group-hover:text-[#4A4A4A]">
                {item.title}
              </h3>

              <div className="relative mx-auto mt-4 h-[3px] w-10 rounded-full bg-[#BA0C2F] transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>

      {/* <Section3 /> */}
      <Container>
        <div className="mx-10 mb-10 grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[50px]  px-15 py-12 bg-[#BA0C2F] lg:grid-cols-2">
          {/* Left Content */}
          <div className="font-futura text-black">
            {/* <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.18em] text-white">
              Introducing
            </span> */}

            <h1 className="text-4xl font-semibold uppercase leading-tight text-white lg:text-5xl">
              NEXTJEN PROGRAM
            </h1>
            <div className="flex items-center justify-start gap-4 pt-2">
              <span className="h-[2px] w-40 bg-white" />

              <h1 className="text-sm font-semibold uppercase leading-tight text-white lg:text-sm">
                MT Program
              </h1>

              <span className="h-[2px] w-40 bg-white" />
            </div>
            <h3 className="max-w-[500px] pt-5 text-xl font-semibold leading-[1.35] text-white">
              Designed to transform potential into performance
            </h3>

            <p className="max-w-[540px] pt-7 text-[16px] font-normal leading-[1.8] text-white">
              At Jubilee General Insurance, we believe great talent deserves
              real opportunities. Through our NextJen MT Program, we empower
              aspiring professionals with hands-on experience, structured
              learning, mentorship, and meaningful work that creates lasting
              impact.
            </p>
            <button className="mt-8 rounded-full bg-white px-10 py-3 text-lg font-semibold uppercase text-[#BA0C2F] transition-all duration-300 hover:bg-[#f5f5f5]">
              Apply Now
            </button>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px]">
              <Image
                src="/img/careers/Next Jen.png"
                alt="DUKAN HIFAZAT"
                width={1000}
                height={1000}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
      <Section4 />
      <Section5 />
    </>
  );
};

export default page;
