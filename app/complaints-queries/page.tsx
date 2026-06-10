import HeroSection from "@/components/About/heroSection";
import React from "react";
import "./complaintqueries.css";
const ComplaintsQueries = () => {
  return (
    <div>
      {" "}
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
import {
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  FileText,
} from "lucide-react";

const complaintDocs = [
  {
    title: "Federal Insurance Ombudsman",

    image: "/img/Complaints&Queries/FIO-Message.jpg",
    link: "#",
  },
  {
    title: "Complaints in Respect of Insurance Policy",

    image: "/img/Complaints&Queries/jgi1.jpg",
    link: "#",
  },
  {
    title: "Complaint Information",

    image: "/img/Complaints&Queries/jgi.jpg",
    link: "#",
  },
];

export function ComplaintsQueriesSection() {
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
                  <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[360px] w-full object-contain p-2 transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="absolute right-8 top-8 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#BA0C2F] shadow-md">
                    <FileText size={22} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  {/* <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p> */}

                  {/* <a
                    href={item.link}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#BA0C2F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#990A28]"
                  >
                    View Details
                    <ExternalLink size={16} />
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

          {/* <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-gray-500">
            For faster support, please include your policy number, contact
            details, and a short description of your complaint or query.
          </p> */}
        </div>
      </section>
    </main>
  );
}
