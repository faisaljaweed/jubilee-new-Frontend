import HeroSection from "@/components/About/heroSection";
import React from "react";
import "./claims.css";

const Claims = () => {
  return (
    <div>
      <HeroSection
        clasName="leader_ship"
        text="Claims"
        mainText="Claims"
        pageLink="/claims"
      />
      <div>
        <ClaimsSections />
      </div>
    </div>
  );
};

export default Claims;
import {
  FileText,
  ClipboardCheck,
  CreditCard,
  Phone,
  Mail,
  MessageCircle,
  Headphones,
} from "lucide-react";

const claimSteps = [
  {
    step: "01",
    title: "File your claim",
    description:
      "In case of a claim, all you have to do is provide details about the incident and we’ll take it from there.",
    icon: FileText,
  },
  {
    step: "02",
    title: "We step in and review",
    description:
      "Our team of experts will reach out to you, review your report and provide advice through the process.",
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Payment",
    description:
      "We have optimized our financial systems to ensure we can settle claims via various channels.",
    icon: CreditCard,
  },
];

export function ClaimsSections() {
  return (
    <main className="bg-white">
      {/* Claim Process Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-flex rounded-full bg-[#BA0C2F]/10 px-4 py-2 text-sm font-semibold text-[#BA0C2F]">
              Claims Process
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Understand the claim process
            </h2>
            {/* 
            <p className="mt-4 text-base leading-7 text-gray-600">
              A simple and transparent process designed to help you file,
              review, and settle your claim with ease.
            </p> */}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {claimSteps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute right-6 top-5 text-6xl font-black text-gray-100 transition-colors duration-300 group-hover:text-[#BA0C2F]/10">
                    {item.step}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#BA0C2F]/10 text-[#BA0C2F] transition-all duration-300 group-hover:bg-[#BA0C2F] group-hover:text-white">
                      <Icon size={30} strokeWidth={1.8} />
                    </div>

                    <h3 className="mb-4 text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#BA0C2F] transition-all duration-300 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get Assistance Section */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[32px] bg-gray-50 shadow-sm ring-1 ring-gray-100">
            <div className="grid lg:grid-cols-2">
              {/* Left Image Side */}
              <div className="relative min-h-[360px] bg-[#BA0C2F]">
                <img
                  src="/img/claims/call-center.png"
                  alt="Claims assistance support"
                  className="h-full w-full object-cover opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-[#BA0C2F]/80 via-[#BA0C2F]/35 to-transparent" />

                {/* <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#BA0C2F] text-white">
                      <Headphones size={24} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Need help with your claim?
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Our support team is available to guide you through the
                        claims process.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Right Content Side */}
              <div className="p-8 md:p-12">
                <span className="mb-4 inline-flex rounded-full bg-[#BA0C2F]/10 px-4 py-2 text-sm font-semibold text-[#BA0C2F]">
                  Get Assistance
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  We are here to support you
                </h2>

                <p className="mt-5 text-base leading-5 text-gray-600">
                  Duis ac sem elit. Etiam ac varius nisl, sed convallis lorem.
                  Fusce non lacus sapien. Phasellus gravida mol estie lobortis.
                  Etiam at mattis arcu. Duis ac sem elit. Etiam ac varius nisl,
                  sed convallis lorem. Fusce non lacus sapien. Phasellus gravida
                  mol estie lobortis. Etiam at mattis arcu. Duis ac sem elit.
                  Etiam ac varius nisl, sed convallis lorem. Fusce non lacus
                  sapien. Phasellus gravida mol estie lobortis. Etiam at mattis
                  arcu.
                </p>

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  <a
                    href="tel:111654111"
                    className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#BA0C2F]/30 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#BA0C2F]/10 text-[#BA0C2F] group-hover:bg-[#BA0C2F] group-hover:text-white">
                      <Phone size={22} />
                    </div>

                    <p className="text-sm font-medium text-gray-500">
                      Call now
                    </p>
                    <p className="mt-1 text-base font-bold text-gray-900">
                      111-654-111
                    </p>
                  </a>

                  <a
                    href="mailto:info@jubileegeneral.com.pk"
                    className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#BA0C2F]/30 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#BA0C2F]/10 text-[#BA0C2F] group-hover:bg-[#BA0C2F] group-hover:text-white">
                      <Mail size={22} />
                    </div>

                    <p className="text-sm font-medium text-gray-500">
                      Email us
                    </p>
                    <p className="mt-1 break-all text-base font-bold text-gray-900">
                      info@jubileegeneral.com.pk
                    </p>
                  </a>

                  <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#BA0C2F]/30 hover:shadow-md sm:col-span-2">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#BA0C2F]/10 text-[#BA0C2F] group-hover:bg-[#BA0C2F] group-hover:text-white">
                          <MessageCircle size={22} />
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500">
                            Text / WhatsApp support
                          </p>
                          <p className="mt-1 text-base font-bold text-gray-900">
                            82665
                          </p>
                        </div>
                      </div>

                      <button className="rounded-full bg-[#BA0C2F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#990A28]">
                        Contact Support
                      </button>
                    </div>
                  </div>
                </div>

                {/* <p className="mt-6 text-xs leading-6 text-gray-500">
                  For faster assistance, please keep your policy number, claim
                  reference, and incident details ready before contacting our
                  team.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
