import HeroSection from "@/components/About/heroSection";
import React from "react";
import "./disclaimer.css";
const Disclaimer = () => {
  return (
    <div>
      <HeroSection
        clasName="privacy-policy-hero"
        text="Disclaimer"
        mainText="Disclaimer"
        pageLink="/privacy-policy"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <span className="mb-3 inline-flex rounded-full bg-[#BA0C2F]/10 px-4 py-2 text-sm font-semibold text-[#BA0C2F]">
              Disclaimer
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Disclaimer
            </h1>
            <p className="mt-4 text-base leading-8 text-gray-600">
              Welcome to www.jubileegeneral.com.pk/. This web site is owned and
              operated by Jubilee General Insurance Company Limited (formerly
              New Jubilee Insurance Company Limited). Use of this website is
              strictly subject to the following terms and conditions. If you do
              not agree to all these conditions, you must discontinue using this
              website immediately. By using and accessing the website you
              indicate your agreement with the terms and conditions. For the
              purposes of these terms and conditions, “this web site” mean
              www.jubileegeneral.com.pk:
            </p>
            <p className="mt-4 text-base leading-8 text-gray-600">
              All the materials and contents of the web site are protected by
              the Copyright Law.
            </p>
            <p className="mt-4 text-base leading-8 text-gray-600">
              Jubilee General Insurance, owns all copyrights unless otherwise
              stated. Without prior written consent of Jubilee General
              Insurance, any content from the website shall not be copied,
              distributed, photocopied, played, linked or transmitted with
              super-links, loaded into other servers in “mirroring method”,
              stored in information retrieval systems and / or used for any
              other commercial purpose by any person in any means, unless
              otherwise download or printed for non-commercial and individual
              use (under the condition that revision shall not be made and the
              copyright statements or other ownership statements in the
              materials shall be reserved). From time to time, this website may
              also include links to other websites. These links are provided for
              your convenience to provide further information. They do not
              signify that we endorse the website(s). We have no responsibility
              for the content of the linked website(s).
            </p>
            <p className="mt-4 text-base leading-8 text-gray-600">
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </p>
            <p className="mt-4 text-base leading-8 text-gray-600">
              Any personal information you transmit to Jubilee General Insurance
              Company Limited. And its subsidiaries and affiliates, via this
              website will only be used for purposes of processing your
              application, the assessment and processing of claims and any other
              administration relevant to any policy issued by Jubilee General
              Insurance. Statistical information derived from personal
              information transmitted to Jubilee General Insurance via this
              website may be shared with third parties but will not include any
              personal identifiable data.
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-100">
            <p className="font-semibold text-[#BA0C2F]">
              Jubilee General Insurance Company Limited
            </p>

            <div className="mt-4 space-y-1 text-gray-600">
              <p>Email: info@jubileegeneral.com.pk</p>
              <p>Phone: 111-654-111, 32416022-26</p>
              <p>Website: jubileegeneral.com.pk</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;
