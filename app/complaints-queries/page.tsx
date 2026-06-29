"use client";

import HeroSection from "@/components/About/heroSection";
import React, { useState } from "react";
import "./complaintqueries.css";
import { Phone, Mail, MessageCircle, FileText, X } from "lucide-react";

const ComplaintsQueries = () => {
  return (
    <div>
      <HeroSection
        clasName="leader_ship"
        text="Complaints & Queries"
        mainText="Complaints & Queries"
        pageLink="/claims"
      />
      <ComplaintsQueriesSection />
    </div>
  );
};

export default ComplaintsQueries;

const complaintDocs = [
  {
    title: "Federal Insurance Ombudsman",
    image: "/img/Complaints&Queries/FIO-Message.jpg",
    link: "#",
  },
  {
    title: "Complaints in Respect of Insurance Policy English",
    image: "/img/Complaints&Queries/jgi1.jpg",
    link: "#",
  },
  {
    title: "Complaints in Respect of Insurance Policy Urdu",
    image: "/img/Complaints&Queries/jgi.jpg",
    link: "#",
  },
];

export function ComplaintsQueriesSection() {
  const [selectedImage, setSelectedImage] = useState<{
    title: string;
    image: string;
  } | null>(null);

  return (
    <main className="bg-white">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-3 inline-flex rounded-full bg-[#BA0C2F]/10 px-4 py-2 text-sm font-semibold text-[#BA0C2F]">
              Complaints & Queries
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              We are here to listen and support you
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Find important complaint information, official guidance, and
              contact details to help resolve your concerns quickly and
              transparently.
            </p>
          </div>

          {/* Document Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {complaintDocs.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative bg-gray-50 p-5">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImage({
                        title: item.title,
                        image: item.image,
                      })
                    }
                    className="block w-full overflow-hidden rounded-2xl border border-gray-100 bg-white"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[360px] w-full object-contain p-2 transition duration-300 group-hover:scale-[1.03]"
                    />
                  </button>

                  <div className="absolute right-8 top-8 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#BA0C2F] shadow-md">
                    <FileText size={22} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 py-6">
          <div className="relative max-h-[92vh] w-full max-w-5xl rounded-2xl bg-white p-4">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#BA0C2F] text-white shadow-lg transition hover:bg-[#990A28]"
              aria-label="Close image"
            >
              <X size={22} />
            </button>

            {/* <h3 className="mb-4 pr-12 text-lg font-bold text-gray-900">
              {selectedImage.title}
            </h3> */}

            <div className="flex max-h-[80vh] items-center justify-center overflow-auto rounded-xl bg-gray-50">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[78vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Contact Help Strip */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[28px] bg-[#BA0C2F] shadow-lg">
            <div className="grid md:grid-cols-2">
              <a
                href="tel:111654111"
                className="flex items-center gap-5 border-b border-white/20 p-6 text-white transition hover:bg-white/10 md:border-r"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white/80">Call now</p>
                  <p className="mt-1 text-base font-bold">
                    111-654-111, 32416022-26
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@jubileegeneral.com.pk"
                className="flex items-center gap-5 border-b border-white/20 p-6 text-white transition hover:bg-white/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white/80">
                    Mail us now
                  </p>
                  <p className="mt-1 break-all text-base font-bold">
                    info@jubileegeneral.com.pk
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5 p-6 text-white transition hover:bg-white/10 md:border-r md:border-white/20">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                  <MessageCircle size={24} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white/80">Text</p>
                  <p className="mt-1 text-base font-bold">82665</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-6 text-white transition hover:bg-white/10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                  <MessageCircle size={24} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white/80">
                    Social Media
                  </p>
                  <p className="mt-1 text-base font-bold">
                    Instagram · Facebook · YouTube · LinkedIn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
