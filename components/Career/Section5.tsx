// "use client";

// import React, { useState } from "react";
// import Container from "../home/container";
// import { Heart, MapPin, ArrowRight } from "lucide-react";

// const jobs = [
//   {
//     title: "Social Media Marketing Manager",
//     location: "Karachi, Pakistan",
//   },
//   {
//     title: "Social Media Marketing Manager",
//     location: "Karachi, Pakistan",
//   },
//   {
//     title: "Social Media Marketing Manager",
//     location: "Karachi, Pakistan",
//   },
//   {
//     title: "Social Media Marketing Manager",
//     location: "Karachi, Pakistan",
//   },
// ];

// const tabs = ["Suggested Jobs", "Recently Viewed Jobs", "Saved Jobs"];

// const Section5 = () => {
//   const [activeTab, setActiveTab] = useState("Suggested Jobs");

//   return (
//     <section className="border-y border-[#BA0C2F] bg-white py-16 font-futura">
//       <Container>
//         <div className="mx-auto max-w-6xl">
//           <div className="grid grid-cols-1 gap-10 lg:grid-cols-[28%_72%]">
//             {/* LEFT HEADING */}
//             <div>
//               <h2 className="text-3xl font-bold uppercase leading-tight text-[#BA0C2F] md:text-4xl pb-10">
//                 Jobs For You
//               </h2>
//             </div>
//             {/* TABS */}
//             <div className="mb-8 flex flex-wrap items-center gap-8 md:gap-14">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   type="button"
//                   onClick={() => setActiveTab(tab)}
//                   className={`font-futura text-sm font-semibold transition ${
//                     activeTab === tab
//                       ? "text-[#BA0C2F] underline underline-offset-4"
//                       : "text-[#3F3F3F] hover:text-[#BA0C2F]"
//                   }`}
//                 >
//                   {/* {tab} */}
//                 </button>
//               ))}
//             </div>
//           </div>
//           {/* RIGHT CONTENT */}
//           <div>
//             {/* JOB CARDS */}
//             <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//               {jobs.map((job, index) => (
//                 <div
//                   key={index}
//                   className="group flex min-h-[92px] items-center justify-between rounded-2xl bg-[#F4F4F5] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#BA0C2F] hover:shadow-lg"
//                 >
//                   <div>
//                     <h3 className="mb-3 font-futura text-[16px] font-semibold text-[#4A4A4A] transition group-hover:text-white">
//                       {job.title}
//                     </h3>

//                     <div className="flex items-center gap-2">
//                       <MapPin className="h-4 w-4 text-[#BA0C2F] transition group-hover:text-white" />
//                       <span className="font-futura text-xs font-medium text-[#BA0C2F] transition group-hover:text-white">
//                         {job.location}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex flex-col items-center gap-4">
//                     <button
//                       type="button"
//                       aria-label="Save job"
//                       className="text-[#BA0C2F] transition group-hover:text-white"
//                     >
//                       {/* <Heart className="h-5 w-5" /> */}
//                     </button>

//                     <button
//                       type="button"
//                       aria-label="View job"
//                       className="text-[#BA0C2F] transition group-hover:translate-x-1 group-hover:text-white"
//                     >
//                       <ArrowRight className="h-5 w-5" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* VIEW ALL */}
//             {/* <div className="mt-8 flex justify-end">
//               <button
//                 type="button"
//                 className="font-futura text-sm font-semibold uppercase text-[#BA0C2F] underline underline-offset-4 transition hover:text-[#970A27]"
//               >
//                 View All&gt;
//               </button>
//             </div> */}
//           </div>
//         </div>
//         {/* </div> */}
//       </Container>
//     </section>
//   );
// };

// export default Section5;

"use client";

import React, { useEffect, useMemo, useState } from "react";
import Container from "../home/container";
import { ArrowRight, Briefcase, Heart, Loader2, MapPin, X } from "lucide-react";

type Salary = {
  currency?: string;
  min?: number;
  max?: number;
  isVisible?: boolean;
};

export type Job = {
  _id: string;
  title: string;
  slug?: string;
  department?: string;
  jobType?: string;
  experienceLevel?: string;
  location?: string;
  minExperience?: number;
  maxExperience?: number;
  educationRequired?: string;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  preferredQualifications?: string[];
  salary?: Salary;
  vacancies?: number;
  applicationDeadline?: string;
  isActive?: boolean;
  isFeatured?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

type JobsApiResponse =
  | Job[]
  | {
      status?: string;
      data?: Job[] | { jobs?: Job[]; docs?: Job[]; data?: Job[] };
      jobs?: Job[];
      docs?: Job[];
    };

type Section5Props = {
  searchQuery?: string;
  locationQuery?: string;
};

const tabs = ["Suggested Jobs", "Recently Viewed Jobs", "Saved Jobs"] as const;
type Tab = (typeof tabs)[number];

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";

const JOBS_ENDPOINT =
  process.env.NEXT_PUBLIC_JOBS_ENDPOINT || `${API_BASE_URL}/jobs`;

const SAVED_JOBS_KEY = "jubilee_saved_jobs";
const RECENT_JOBS_KEY = "jubilee_recent_jobs";

const formatLabel = (value?: string) => {
  if (!value) return "N/A";

  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const formatLocation = (location?: string) => {
  if (!location) return "Pakistan";

  const label = formatLabel(location);
  if (["Remote", "Hybrid"].includes(label)) return label;
  return `${label}, Pakistan`;
};

const formatExperience = (job: Job) => {
  if (job.minExperience === undefined || job.maxExperience === undefined) {
    return formatLabel(job.experienceLevel);
  }

  if (job.minExperience === job.maxExperience) {
    return `${job.minExperience} years`;
  }

  return `${job.minExperience} - ${job.maxExperience} years`;
};

const formatSalary = (salary?: Salary) => {
  if (!salary?.isVisible) return "Not disclosed";

  const currency = salary.currency || "PKR";
  if (salary.min && salary.max) {
    return `${currency} ${salary.min.toLocaleString()} - ${salary.max.toLocaleString()}`;
  }

  if (salary.min) return `${currency} ${salary.min.toLocaleString()}+`;
  if (salary.max) return `Up to ${currency} ${salary.max.toLocaleString()}`;

  return "Not disclosed";
};

const normalizeJobsResponse = (response: JobsApiResponse): Job[] => {
  if (Array.isArray(response)) return response;

  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.jobs)) return response.jobs;
  if (Array.isArray(response?.docs)) return response.docs;

  if (response?.data && !Array.isArray(response.data)) {
    if (Array.isArray(response.data.jobs)) return response.data.jobs;
    if (Array.isArray(response.data.docs)) return response.data.docs;
    if (Array.isArray(response.data.data)) return response.data.data;
  }

  return [];
};

const getStorageJobs = (key: string): Job[] => {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    return JSON.parse(raw) as Job[];
  } catch {
    return [];
  }
};

const setStorageJobs = (key: string, jobs: Job[]) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(jobs));
};

const normalizeLocationForApi = (location: string) =>
  location.trim().toLowerCase().replace(/,/g, "").replace(/\s+/g, "_");

const Section5 = ({ searchQuery = "", locationQuery = "" }: Section5Props) => {
  const [activeTab, setActiveTab] = useState<Tab>("Suggested Jobs");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [recentJobs, setRecentJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setSavedJobs(getStorageJobs(SAVED_JOBS_KEY));
    setRecentJobs(getStorageJobs(RECENT_JOBS_KEY));
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        setError("");

        const url = new URL(
          JOBS_ENDPOINT,
          typeof window !== "undefined" ? window.location.origin : undefined,
        );

        if (searchQuery.trim()) {
          url.searchParams.set("search", searchQuery.trim());
        }

        if (locationQuery.trim()) {
          url.searchParams.set(
            "location",
            normalizeLocationForApi(locationQuery),
          );
        }

        const response = await fetch(url.toString(), {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Unable to load jobs right now.");
        }

        const result = (await response.json()) as JobsApiResponse;
        setJobs(normalizeJobsResponse(result));
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Unable to load jobs.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();

    return () => controller.abort();
  }, [searchQuery, locationQuery]);

  const displayedJobs = useMemo(() => {
    if (activeTab === "Saved Jobs") return savedJobs;
    if (activeTab === "Recently Viewed Jobs") return recentJobs;
    return jobs;
  }, [activeTab, jobs, recentJobs, savedJobs]);

  const savedJobIds = useMemo(
    () => new Set(savedJobs.map((job) => job._id)),
    [savedJobs],
  );

  const toggleSavedJob = (job: Job) => {
    const exists = savedJobIds.has(job._id);
    const updatedJobs = exists
      ? savedJobs.filter((item) => item._id !== job._id)
      : [job, ...savedJobs];

    setSavedJobs(updatedJobs);
    setStorageJobs(SAVED_JOBS_KEY, updatedJobs);
  };

  const openJobDetail = (job: Job) => {
    setSelectedJob(job);

    const updatedRecentJobs = [
      job,
      ...recentJobs.filter((item) => item._id !== job._id),
    ].slice(0, 10);

    setRecentJobs(updatedRecentJobs);
    setStorageJobs(RECENT_JOBS_KEY, updatedRecentJobs);
  };

  return (
    <section className="border-y border-[#BA0C2F] bg-white py-16 font-futura">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[28%_72%]">
            <div>
              <h2 className="pb-3 text-3xl font-bold uppercase leading-tight text-[#BA0C2F] md:text-4xl">
                Jobs For You
              </h2>
              <p className="max-w-xs text-sm leading-relaxed text-[#4A4A4A]">
                Explore current openings and find the role that matches your
                skills.
              </p>
            </div>

            <div>
              <div className="mb-8 flex flex-wrap items-center gap-6 md:gap-10">
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
                    {tab}
                  </button>
                ))}
              </div>

              {isLoading && activeTab === "Suggested Jobs" ? (
                <div className="flex min-h-[180px] items-center justify-center rounded-2xl bg-[#F4F4F5] text-[#BA0C2F]">
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Loading jobs...
                </div>
              ) : error && activeTab === "Suggested Jobs" ? (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600">
                  {error}
                </div>
              ) : displayedJobs.length === 0 ? (
                <div className="rounded-2xl bg-[#F4F4F5] px-6 py-10 text-center text-sm text-[#4A4A4A]">
                  No jobs found.
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {displayedJobs.map((job) => (
                    <div
                      key={job._id}
                      className="group flex min-h-[120px] items-center justify-between rounded-2xl bg-[#F4F4F5] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#BA0C2F] hover:shadow-lg"
                    >
                      <div className="pr-4">
                        <h3 className="mb-3 font-futura text-[16px] font-semibold text-[#4A4A4A] transition group-hover:text-white">
                          {job.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-[#BA0C2F] transition group-hover:text-white" />
                            <span className="font-futura text-xs font-medium text-[#BA0C2F] transition group-hover:text-white">
                              {formatLocation(job.location)}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-[#BA0C2F] transition group-hover:text-white" />
                            <span className="font-futura text-xs font-medium text-[#BA0C2F] transition group-hover:text-white">
                              {formatLabel(job.department)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-4">
                        <button
                          type="button"
                          aria-label="Save job"
                          onClick={() => toggleSavedJob(job)}
                          className="text-[#BA0C2F] transition group-hover:text-white"
                        >
                          <Heart
                            className={`h-5 w-5 ${
                              savedJobIds.has(job._id) ? "fill-current" : ""
                            }`}
                          />
                        </button>

                        <button
                          type="button"
                          aria-label="View job"
                          onClick={() => openJobDetail(job)}
                          className="text-[#BA0C2F] transition group-hover:translate-x-1 group-hover:text-white"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="mb-3 inline-block rounded-full bg-[#BA0C2F]/10 px-4 py-1 text-xs font-semibold uppercase text-[#BA0C2F]">
                  {formatLabel(selectedJob.department)}
                </span>
                <h3 className="text-2xl font-bold text-[#4A4A4A]">
                  {selectedJob.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-[#BA0C2F]">
                  {formatLocation(selectedJob.location)}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="rounded-full bg-[#F4F4F5] p-2 text-[#4A4A4A] transition hover:bg-[#BA0C2F] hover:text-white"
                aria-label="Close job detail"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 rounded-2xl bg-[#F8F8F8] p-4 text-sm md:grid-cols-3">
              <div>
                <p className="text-xs uppercase text-[#777]">Job Type</p>
                <p className="mt-1 font-semibold text-[#4A4A4A]">
                  {formatLabel(selectedJob.jobType)}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase text-[#777]">Experience</p>
                <p className="mt-1 font-semibold text-[#4A4A4A]">
                  {formatExperience(selectedJob)}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase text-[#777]">Salary</p>
                <p className="mt-1 font-semibold text-[#4A4A4A]">
                  {formatSalary(selectedJob.salary)}
                </p>
              </div>
            </div>

            {selectedJob.description && (
              <div className="mt-6">
                <h4 className="mb-2 text-lg font-bold text-[#BA0C2F]">
                  Job Description
                </h4>
                <p className="text-sm leading-relaxed text-[#4A4A4A]">
                  {selectedJob.description}
                </p>
              </div>
            )}

            {selectedJob.responsibilities?.length ? (
              <div className="mt-6">
                <h4 className="mb-2 text-lg font-bold text-[#BA0C2F]">
                  Responsibilities
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#4A4A4A]">
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {selectedJob.requirements?.length ? (
              <div className="mt-6">
                <h4 className="mb-2 text-lg font-bold text-[#BA0C2F]">
                  Requirements
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#4A4A4A]">
                  {selectedJob.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => toggleSavedJob(selectedJob)}
                className="rounded-full border border-[#BA0C2F] px-6 py-3 text-sm font-semibold uppercase text-[#BA0C2F] transition hover:bg-[#BA0C2F] hover:text-white"
              >
                {savedJobIds.has(selectedJob._id) ? "Remove Saved" : "Save Job"}
              </button>
              <button
                type="button"
                className="rounded-full bg-[#BA0C2F] px-6 py-3 text-sm font-semibold uppercase text-white transition hover:bg-[#970A27]"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section5;
