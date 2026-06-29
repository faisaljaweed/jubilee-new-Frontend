"use client";

import React, { useRef, useState } from "react";
import Container from "../home/container";

const inputClass =
  "h-11 w-full rounded-full bg-white px-5 font-futura text-sm text-[#4A4A4A] outline-none placeholder:text-[#8A8A8A] focus:ring-2 focus:ring-white/40";

const labelClass =
  "mb-2 block font-futura text-xs font-medium capitalize text-white";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";

const TALENT_NETWORK_ENDPOINT =
  process.env.NEXT_PUBLIC_TALENT_NETWORK_ENDPOINT ||
  `${API_BASE_URL}/career-applications`;

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  category: string;
  location: string;
};

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "+92",
  phoneNumber: "",
  category: "",
  location: "",
};

const Section4 = () => {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    if (!file) {
      setResume(null);
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
      setResume(null);
      setErrorMessage("Please upload only PDF, DOC, or DOCX resume file.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (file.size > maxSizeInBytes) {
      setResume(null);
      setErrorMessage(`Resume file size must be less than ${maxSizeInMb}MB.`);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setErrorMessage("");
    setResume(file);
  };

  const resetForm = () => {
    setForm(initialFormState);
    setResume(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      setSuccessMessage("");
      setErrorMessage("");

      const payload = new FormData();
      payload.append("firstName", form.firstName.trim());
      payload.append("lastName", form.lastName.trim());
      payload.append("email", form.email.trim());
      // payload.append("countryCode", form.countryCode);
      payload.append("phoneNumber", form.phoneNumber.trim());
      payload.append("category", form.category);
      payload.append("location", form.location.trim());
      payload.append("source", "talent_network");

      if (resume) {
        payload.append("resume", resume);
      }

      const response = await fetch(TALENT_NETWORK_ENDPOINT, {
        method: "POST",
        body: payload,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message ||
            result?.error ||
            "Unable to submit your details. Please try again.",
        );
      }

      setSuccessMessage(
        result?.message || "Your details have been submitted successfully.",
      );
      resetForm();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your details. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-10 bg-[#BA0C2F] font-futura text-white md:py-20">
      <Container>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[34%_66%] lg:gap-12">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="font-futura text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-5xl">
              Join Our <br />
              Talent <br />
              Network
            </h1>

            <p className="mt-5 max-w-[330px] font-futura text-sm leading-[1.45] text-white/95 md:text-[15px]">
              Make sure you see job opportunities when they become available.
              Just leave details here to stay up to date with jobs that suit you
              and your skills.
            </p>

            <p className="mt-10 font-futura text-sm text-white">
              <span className="mr-1">*</span> Indicates required field
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* ROW 1 */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="First Name"
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* <div>
                  <label className={labelClass}>Country Code *</label>
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                    required
                  >
                    <option value="+92">+92</option>
                    <option value="+971">+971</option>
                    <option value="+966">+966</option>
                    <option value="+44">+44</option>
                  </select>
                </div> */}

                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="123456"
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>Upload Resume</label>
                  <div className="flex h-11 items-center gap-3 rounded-full px-2 pr-4">
                    <label className="cursor-pointer rounded-full border border-white bg-[#BA0C2F] px-4 py-2 font-futura text-xs font-medium text-white transition hover:bg-[#970A27]">
                      Choose File
                      <input
                        ref={fileInputRef}
                        type="file"
                        name="resume"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeChange}
                      />
                    </label>
                    <span className="truncate font-futura text-xs">
                      {resume?.name || "No file chosen"}
                    </span>
                  </div>
                </div>
              </div>

              {/* JOB ALERT BOX */}
              <div className="rounded-2xl">
                <p className="mb-5 max-w-2xl font-futura text-xs leading-relaxed text-white">
                  Select a job category from the list of options and enter your
                  preferred location to create your job alert.
                </p>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-end">
                  <div>
                    <label className={labelClass}>Job Category *</label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none`}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="technology">Technology</option>
                      <option value="sales">Sales</option>
                      <option value="marketing">Marketing</option>
                      <option value="operations">Operations</option>
                      <option value="claims">Claims</option>
                      <option value="finance">Finance</option>
                      <option value="human_resources">Human Resources</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Location *</label>
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Type to Search for a Location"
                      required
                    />
                  </div>

                  {/* Old Add button removed because final form now submits directly */}
                </div>
              </div>

              {/* PRIVACY TEXT */}
              <p className="max-w-3xl font-futura text-xs leading-relaxed text-white/95">
                By submitting, I acknowledge that I have read Jubilee General's
                privacy notice, and that I wish to receive email and SMS
                communications. I understand that I can opt out of receiving
                email and SMS communications at any time.
              </p>

              {successMessage && (
                <div className="rounded-2xl bg-white px-5 py-3 font-futura text-sm font-semibold text-green-700">
                  {successMessage}
                </div>
              )}

              {errorMessage && (
                <div className="rounded-2xl bg-white px-5 py-3 font-futura text-sm font-semibold text-[#BA0C2F]">
                  {errorMessage}
                </div>
              )}

              {/* BUTTONS */}
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                {/* Old buttons commented as requested */}
                {/*
                <button
                  type="submit"
                  className="h-11 rounded-full bg-white px-8 font-futura text-sm font-semibold uppercase text-[#BA0C2F] transition hover:bg-[#F6F6F6]"
                >
                  Sign Up
                </button>

                <button
                  type="button"
                  className="h-11 rounded-full bg-white px-8 font-futura text-sm font-semibold uppercase text-[#BA0C2F] transition hover:bg-[#F6F6F6]"
                >
                  Already a Member? Sign In
                </button>
                */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 rounded-full bg-white px-8 font-futura text-sm font-semibold uppercase text-[#BA0C2F] transition hover:bg-[#F6F6F6] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Section4;
