import React from "react";
import Container from "../home/container";

const inputClass =
  "h-11 w-full rounded-full bg-white px-5 font-futura text-sm text-[#4A4A4A] outline-none placeholder:text-[#8A8A8A] focus:ring-2 focus:ring-white/40";

const labelClass =
  "mb-2 block font-futura text-xs font-medium capitalize text-white";

const Section4 = () => {
  return (
    <section className="bg-[#BA0C2F]  text-white font-futura md:py-20 mt-10">
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
            <form className="space-y-5">
              {/* ROW 1 */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="First Name"
                  />
                </div>

                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Last Name"
                  />
                </div>

                <div>
                  <label className={labelClass}>Email Address</label>
                  <input
                    type="email"
                    className={inputClass}
                    placeholder="Email Address"
                  />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <label className={labelClass}>Country Code</label>
                  <select className={`${inputClass} appearance-none`}>
                    <option value="+92">+92</option>
                    <option value="+971">+971</option>
                    <option value="+966">+966</option>
                    <option value="+44">+44</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input
                    type="tel"
                    className={inputClass}
                    placeholder="123456"
                  />
                </div>

                <div>
                  <label className={labelClass}>Upload Resume</label>
                  <div className="flex h-11 items-center gap-3 rounded-full px-2 pr-4">
                    <label className="cursor-pointer rounded-full bg-[#BA0C2F] px-4 py-2 font-futura text-xs font-medium text-white transition hover:bg-[#970A27] border border-white">
                      Choose File
                      <input type="file" className="hidden" />
                    </label>
                    <span className="truncate font-futura text-xs ">
                      No file chosen
                    </span>
                  </div>
                </div>
              </div>

              {/* JOB ALERT BOX */}
              <div className="rounded-2xl  ">
                <p className="mb-5 max-w-2xl font-futura text-xs leading-relaxed text-white">
                  Select a job category from the list of options. Search for a
                  location and select one from the list of suggestions. Finally,
                  click “Add” to create your job alert.
                </p>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-[40%_40%_auto] md:items-end">
                  <div>
                    <label className={labelClass}>Country Code</label>
                    <select className={`${inputClass} appearance-none`}>
                      <option value="">Select Category</option>
                      <option value="technology">Technology</option>
                      <option value="sales">Sales</option>
                      <option value="marketing">Marketing</option>
                      <option value="operations">Operations</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Location</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Type to Search for a Location"
                    />
                  </div>

                  <button
                    type="button"
                    className="h-11 rounded-full border border-white px-6 font-futura text-sm font-semibold uppercase text-white transition hover:bg-white hover:text-[#BA0C2F]"
                  >
                    + Add
                  </button>
                </div>
              </div>

              {/* PRIVACY TEXT */}

              <p className="max-w-3xl font-futura text-xs leading-relaxed text-white/95 ">
                By signing up, I acknowledge that I have read Unilever's privacy
                notice, and that I wish to receive email and SMS communications.
                I understand that I can opt out of receiving email and SMS
                communications at any time.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
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
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Section4;
