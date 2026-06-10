"use client";

import React, { useState } from "react";
import Container from "../home/container";
import { Heart, MapPin, ArrowRight } from "lucide-react";

const jobs = [
  {
    title: "Social Media Marketing Manager",
    location: "Karachi, Pakistan",
  },
  {
    title: "Social Media Marketing Manager",
    location: "Karachi, Pakistan",
  },
  {
    title: "Social Media Marketing Manager",
    location: "Karachi, Pakistan",
  },
  {
    title: "Social Media Marketing Manager",
    location: "Karachi, Pakistan",
  },
];

const tabs = ["Suggested Jobs", "Recently Viewed Jobs", "Saved Jobs"];

const Section5 = () => {
  const [activeTab, setActiveTab] = useState("Suggested Jobs");

  return (
    <section className="border-y border-[#BA0C2F] bg-white py-16 font-futura">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[28%_72%]">
            {/* LEFT HEADING */}
            <div>
              <h2 className="text-3xl font-bold uppercase leading-tight text-[#BA0C2F] md:text-4xl pb-10">
                Jobs For You
              </h2>
            </div>
            {/* TABS */}
            <div className="mb-8 flex flex-wrap items-center gap-8 md:gap-14">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`font-futura text-sm font-semibold transition ${
                    activeTab === tab
                      ? "text-[#BA0C2F] underline underline-offset-4"
                      : "text-[#3F3F3F] hover:text-[#BA0C2F]"
                  }`}
                >
                  {/* {tab} */}
                </button>
              ))}
            </div>
          </div>
          {/* RIGHT CONTENT */}
          <div>
            {/* JOB CARDS */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="group flex min-h-[92px] items-center justify-between rounded-2xl bg-[#F4F4F5] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#BA0C2F] hover:shadow-lg"
                >
                  <div>
                    <h3 className="mb-3 font-futura text-[16px] font-semibold text-[#4A4A4A] transition group-hover:text-white">
                      {job.title}
                    </h3>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#BA0C2F] transition group-hover:text-white" />
                      <span className="font-futura text-xs font-medium text-[#BA0C2F] transition group-hover:text-white">
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <button
                      type="button"
                      aria-label="Save job"
                      className="text-[#BA0C2F] transition group-hover:text-white"
                    >
                      {/* <Heart className="h-5 w-5" /> */}
                    </button>

                    <button
                      type="button"
                      aria-label="View job"
                      className="text-[#BA0C2F] transition group-hover:translate-x-1 group-hover:text-white"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* VIEW ALL */}
            {/* <div className="mt-8 flex justify-end">
              <button
                type="button"
                className="font-futura text-sm font-semibold uppercase text-[#BA0C2F] underline underline-offset-4 transition hover:text-[#970A27]"
              >
                View All&gt;
              </button>
            </div> */}
          </div>
        </div>
        {/* </div> */}
      </Container>
    </section>
  );
};

export default Section5;
