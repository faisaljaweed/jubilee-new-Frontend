"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
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

type ApplicationFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  experience: string;
  linkedIn: string;
  coverLetter: string;
};

const initialApplicationFormState: ApplicationFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  experience: "",
  linkedIn: "",
  coverLetter: "",
};
const tabs = ["Suggested Jobs", "Recently Viewed Jobs", "Saved Jobs"] as const;
type Tab = (typeof tabs)[number];

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";

const JOBS_ENDPOINT =
  process.env.NEXT_PUBLIC_JOBS_ENDPOINT || `${API_BASE_URL}/jobs`;

const JOB_APPLICATIONS_ENDPOINT =
  process.env.NEXT_PUBLIC_JOB_APPLICATIONS_ENDPOINT ||
  `${API_BASE_URL}/career-applications`;

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

  const [applicationForm, setApplicationForm] = useState<ApplicationFormState>(
    initialApplicationFormState,
  );
  const [applicationResume, setApplicationResume] = useState<File | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applicationError, setApplicationError] = useState("");
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);

  const applicationResumeInputRef = useRef<HTMLInputElement | null>(null);

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
          typeof window !== "undefined"
            ? window.location.origin
            : "http://localhost:3000",
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

  const resetApplicationForm = () => {
    setApplicationForm(initialApplicationFormState);
    setApplicationResume(null);
    setApplicationError("");

    if (applicationResumeInputRef.current) {
      applicationResumeInputRef.current.value = "";
    }
  };

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
    setShowThankYouPopup(false);
    resetApplicationForm();

    const updatedRecentJobs = [
      job,
      ...recentJobs.filter((item) => item._id !== job._id),
    ].slice(0, 10);

    setRecentJobs(updatedRecentJobs);
    setStorageJobs(RECENT_JOBS_KEY, updatedRecentJobs);
  };

  const closeJobDetail = () => {
    setSelectedJob(null);
    setShowThankYouPopup(false);
    resetApplicationForm();
  };
  useEffect(() => {
    if (!showThankYouPopup) return;

    const timer = window.setTimeout(() => {
      setShowThankYouPopup(false);
      setSelectedJob(null);
      setApplicationForm(initialApplicationFormState);
      setApplicationResume(null);
      setApplicationError("");

      if (applicationResumeInputRef.current) {
        applicationResumeInputRef.current.value = "";
      }
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [showThankYouPopup]);

  const handleApplicationChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setApplicationForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplicationResumeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0] || null;

    if (!file) {
      setApplicationResume(null);
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const maxSizeInMb = 5;
    const maxSizeInBytes = maxSizeInMb * 1024 * 1024;

    if (!allowedTypes.includes(file.type)) {
      setApplicationResume(null);
      setApplicationError("Please upload only PDF, DOC, or DOCX file.");
      event.target.value = "";
      return;
    }

    if (file.size > maxSizeInBytes) {
      setApplicationResume(null);
      setApplicationError(
        `Resume file size must be less than ${maxSizeInMb}MB.`,
      );
      event.target.value = "";
      return;
    }

    setApplicationError("");
    setApplicationResume(file);
  };

  const handleApplicationSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!selectedJob || isApplying) return;

    try {
      setIsApplying(true);
      setApplicationError("");
      setShowThankYouPopup(false);

      const payload = new FormData();

      payload.append("jobId", selectedJob._id);
      payload.append("jobTitle", selectedJob.title);
      payload.append("department", selectedJob.department || "");
      payload.append("location", selectedJob.location || "");
      // payload.append("fullName", applicationForm.fullName.trim());
      payload.append("email", applicationForm.email.trim());
      payload.append("phoneNumber", applicationForm.phoneNumber.trim());
      // payload.append("experience", applicationForm.experience.trim());
      // payload.append("linkedIn", applicationForm.linkedIn.trim());
      payload.append("coverLetter", applicationForm.coverLetter.trim());
      payload.append("source", "job_detail_modal");
      payload.append("firstName", applicationForm.firstName.trim());
      payload.append("lastName", applicationForm.lastName.trim());

      if (applicationResume) {
        payload.append("resume", applicationResume);
      }

      const response = await fetch(JOB_APPLICATIONS_ENDPOINT, {
        method: "POST",
        body: payload,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message ||
            result?.error ||
            "Unable to submit your application. Please try again.",
        );
      }

      resetApplicationForm();
      setShowThankYouPopup(true);
    } catch (error) {
      setApplicationError(
        error instanceof Error
          ? error.message
          : "Unable to submit your application. Please try again.",
      );
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <section
      id="jobs-section"
      className="border-y border-[#BA0C2F] bg-white py-16 font-futura"
    >
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
          <div className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl md:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_410px]">
              {/* LEFT SIDE JOB INFORMATION */}
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="mb-3 inline-block rounded-full bg-[#BA0C2F]/10 px-4 py-1 text-xs font-semibold uppercase text-[#BA0C2F]">
                      {selectedJob.department
                        ? formatLabel(selectedJob.department)
                        : "Information Technology"}
                    </span>

                    <h3 className="text-2xl font-bold text-[#4A4A4A]">
                      {selectedJob.title}
                    </h3>

                    <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[#BA0C2F]">
                      <MapPin className="h-4 w-4" />
                      {formatLocation(selectedJob.location)}
                    </p>
                  </div>
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

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => toggleSavedJob(selectedJob)}
                    className="rounded-full border border-[#BA0C2F] px-6 py-3 text-sm font-semibold uppercase text-[#BA0C2F] transition hover:bg-[#BA0C2F] hover:text-white"
                  >
                    {savedJobIds.has(selectedJob._id)
                      ? "Remove Saved"
                      : "Save Job"}
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE APPLICATION FORM */}
              <div className="rounded-3xl border border-[#BA0C2F]/15 bg-[#F8F8F8] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-[#BA0C2F]">
                      Apply Now
                    </h4>

                    <p className="mt-1 text-xs leading-relaxed text-[#666]">
                      Fill the form below to apply for this position.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeJobDetail}
                    className="shrink-0 rounded-full bg-white p-2 text-[#4A4A4A] transition hover:bg-[#BA0C2F] hover:text-white"
                    aria-label="Close application form"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <form
                  onSubmit={handleApplicationSubmit}
                  className="mt-5 space-y-4"
                >
                  {/* <div>
                    <label className="mb-2 block text-xs font-semibold uppercase text-[#4A4A4A]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={applicationForm.fullName}
                      onChange={handleApplicationChange}
                      className="h-11 w-full rounded-full border border-[#E2E2E2] bg-white px-4 text-sm text-[#4A4A4A] outline-none focus:border-[#BA0C2F]"
                      placeholder="Enter your full name"
                      required
                    />
                  </div> */}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase text-[#4A4A4A]">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={applicationForm.firstName}
                        onChange={handleApplicationChange}
                        className="h-11 w-full rounded-full border border-[#E2E2E2] bg-white px-4 text-sm text-[#4A4A4A] outline-none focus:border-[#BA0C2F]"
                        placeholder="First name"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase text-[#4A4A4A]">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={applicationForm.lastName}
                        onChange={handleApplicationChange}
                        className="h-11 w-full rounded-full border border-[#E2E2E2] bg-white px-4 text-sm text-[#4A4A4A] outline-none focus:border-[#BA0C2F]"
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase text-[#4A4A4A]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={applicationForm.email}
                      onChange={handleApplicationChange}
                      className="h-11 w-full rounded-full border border-[#E2E2E2] bg-white px-4 text-sm text-[#4A4A4A] outline-none focus:border-[#BA0C2F]"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase text-[#4A4A4A]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={applicationForm.phoneNumber}
                      onChange={handleApplicationChange}
                      className="h-11 w-full rounded-full border border-[#E2E2E2] bg-white px-4 text-sm text-[#4A4A4A] outline-none focus:border-[#BA0C2F]"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  {/* 
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase text-[#4A4A4A]">
                      Experience
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={applicationForm.experience}
                      onChange={handleApplicationChange}
                      className="h-11 w-full rounded-full border border-[#E2E2E2] bg-white px-4 text-sm text-[#4A4A4A] outline-none focus:border-[#BA0C2F]"
                      placeholder="e.g. 2 years"
                    />
                  </div> */}

                  {/* <div>
                    <label className="mb-2 block text-xs font-semibold uppercase text-[#4A4A4A]">
                      LinkedIn / Portfolio
                    </label>
                    <input
                      type="url"
                      name="linkedIn"
                      value={applicationForm.linkedIn}
                      onChange={handleApplicationChange}
                      className="h-11 w-full rounded-full border border-[#E2E2E2] bg-white px-4 text-sm text-[#4A4A4A] outline-none focus:border-[#BA0C2F]"
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div> */}

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase text-[#4A4A4A]">
                      Upload Resume
                    </label>

                    <label className="flex min-h-11 cursor-pointer items-center justify-between gap-3 rounded-full border border-dashed border-[#BA0C2F]/40 bg-white px-4 text-sm text-[#4A4A4A]">
                      <span className="truncate">
                        {applicationResume?.name || "Choose resume file"}
                      </span>
                      <span className="shrink-0 text-xs font-semibold text-[#BA0C2F]">
                        Browse
                      </span>
                      <input
                        ref={applicationResumeInputRef}
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleApplicationResumeChange}
                      />
                    </label>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase text-[#4A4A4A]">
                      Message
                    </label>
                    <textarea
                      name="coverLetter"
                      value={applicationForm.coverLetter}
                      onChange={handleApplicationChange}
                      rows={4}
                      className="w-full resize-none rounded-2xl border border-[#E2E2E2] bg-white px-4 py-3 text-sm text-[#4A4A4A] outline-none focus:border-[#BA0C2F]"
                      placeholder="Write a short message..."
                    />
                  </div>

                  {applicationError && (
                    <div className="rounded-2xl bg-red-50 px-4 py-3 text-xs font-semibold text-red-600">
                      {applicationError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isApplying}
                    className="h-11 w-full rounded-full bg-[#BA0C2F] px-6 text-sm font-semibold uppercase text-white transition hover:bg-[#970A27] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isApplying ? "Submitting..." : "Apply Now"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {showThankYouPopup && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4">
              <div className="w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#BA0C2F]/10 text-2xl text-[#BA0C2F]">
                  ✓
                </div>

                <h4 className="text-2xl font-bold text-[#BA0C2F]">
                  Thank You!
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">
                  Your application has been submitted successfully. Our team
                  will review your details and contact you soon.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setShowThankYouPopup(false);
                    setSelectedJob(null);
                  }}
                  className="mt-6 h-11 rounded-full bg-[#BA0C2F] px-8 text-sm font-semibold uppercase text-white transition hover:bg-[#970A27]"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Section5;
