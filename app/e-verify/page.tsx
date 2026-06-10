"use client";

import { useState } from "react";
import { Plane, Car, HeartPulse, Grid2X2, X, ShieldCheck } from "lucide-react";
import HeroSection from "@/components/About/heroSection";
import "./eVerify.css";
type ModalType = "default" | "motor" | null;

const policies = [
  {
    title: "Travel Policy",
    icon: Plane,
    modal: "default" as ModalType,
  },
  {
    title: "Motor Policy",
    icon: Car,
    modal: "motor" as ModalType,
  },
  {
    title: "Health Policy",
    icon: HeartPulse,
    modal: "default" as ModalType,
  },
  {
    title: "All Policies",
    icon: Grid2X2,
    modal: "default" as ModalType,
  },
];

export default function EVerifyPage() {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [cnic, setCnic] = useState("");

  const closeModal = () => {
    setModalType(null);
    setVerificationCode("");
    setCnic("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      type: modalType,
      verificationCode,
      cnic,
    });

    // Yahan baad mein API call add kar sakte hain
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <HeroSection
        clasName="e-verify-hero"
        text="E-Verify"
        mainText="E-Verify"
        pageLink="/e-verify"
      />
      {/* Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <span className="mb-4 inline-flex rounded-full bg-[#BA0C2F]/10 px-4 py-2 text-sm font-semibold text-[#BA0C2F]">
              Policy Verification
            </span>

            <h2 className="max-w-5xl text-2xl font-semibold leading-10 text-gray-900 md:text-3xl">
              Make sure that your policy is genuine — use our e-verify service
              to have peace of mind.
            </h2>

            <p className="mt-3 text-base text-gray-600">
              We are currently offering this verification service for the
              following policy types:
            </p>
          </div>

          <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm md:p-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {policies.map((policy) => {
                const Icon = policy.icon;

                return (
                  <div
                    key={policy.title}
                    className="group rounded-3xl border border-gray-100 bg-gray-50 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                  >
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#BA0C2F]/40 bg-white text-gray-700 transition-all duration-300 group-hover:border-[#BA0C2F] group-hover:bg-[#BA0C2F] group-hover:text-white">
                      <Icon size={36} strokeWidth={1.6} />
                    </div>

                    <h3 className="mt-7 text-xl font-bold uppercase tracking-wide text-[#BA0C2F]">
                      {policy.title}
                    </h3>

                    <button
                      onClick={() => setModalType(policy.modal)}
                      className="mt-6 rounded-lg bg-[#BA0C2F] px-10 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#990A28]"
                    >
                      Check
                    </button>
                  </div>
                );
              })}
            </div>

            <p className="mt-10 text-center text-sm font-medium text-[#BA0C2F]">
              *For verification of offline Viacare policies. Please click here
            </p>
          </div>

          <p className="mt-8 text-sm leading-7 text-gray-700">
            In case of any queries or if you need further assistance, please
            feel free to contact us at{" "}
            <a
              href="mailto:info@jubileegeneral.com.pk"
              className="font-semibold text-[#BA0C2F]"
            >
              info@jubileegeneral.com.pk
            </a>
          </p>
        </div>
      </section>

      {/* Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">
          {modalType === "default" ? (
            <DefaultVerificationModal
              verificationCode={verificationCode}
              cnic={cnic}
              setVerificationCode={setVerificationCode}
              setCnic={setCnic}
              onClose={closeModal}
              onSubmit={handleSubmit}
            />
          ) : (
            <MotorVerificationModal
              verificationCode={verificationCode}
              cnic={cnic}
              setVerificationCode={setVerificationCode}
              setCnic={setCnic}
              onClose={closeModal}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      )}
    </main>
  );
}

type ModalProps = {
  verificationCode: string;
  cnic: string;
  setVerificationCode: (value: string) => void;
  setCnic: (value: string) => void;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
};

function DefaultVerificationModal({
  verificationCode,
  cnic,
  setVerificationCode,
  setCnic,
  onClose,
  onSubmit,
}: ModalProps) {
  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
      <div className="flex items-start justify-between border-b border-gray-100 px-7 py-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Policy Verification
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Enter your policy details to verify.
          </p>
        </div>

        <button
          onClick={onClose}
          className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
        >
          <X size={28} />
        </button>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 px-7 py-7">
        <div>
          <label className="mb-2 block text-base font-semibold text-gray-900">
            Verification Code<span className="text-[#BA0C2F]">*</span>:
          </label>
          <input
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder=""
            className="h-14 w-full rounded-xl border border-gray-300 px-4 text-base outline-none transition focus:border-[#BA0C2F] focus:ring-4 focus:ring-[#BA0C2F]/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-base font-semibold text-gray-900">
            CNIC<span className="text-[#BA0C2F]">*</span>:
          </label>
          <input
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="XXXXX-XXXXXXX-X"
            className="h-14 w-full rounded-xl border border-gray-300 px-4 text-base outline-none transition focus:border-[#BA0C2F] focus:ring-4 focus:ring-[#BA0C2F]/10"
          />
        </div>

        <button
          type="submit"
          className="h-14 w-full rounded-lg bg-[#BA0C2F] text-lg font-bold tracking-wide text-white transition hover:bg-[#990A28]"
        >
          Verify
        </button>
      </form>
    </div>
  );
}

function MotorVerificationModal({
  verificationCode,
  cnic,
  setVerificationCode,
  setCnic,
  onClose,
  onSubmit,
}: ModalProps) {
  return (
    <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
      <div className="flex items-start justify-between bg-[#A90D35] px-7 py-7 text-white">
        <div>
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
            <ShieldCheck size={26} />
          </div>

          <h2 className="text-3xl font-bold">Policy Verification</h2>
          <p className="mt-2 text-base font-medium text-white/90">
            Please enter your details to continue.
          </p>
        </div>

        <button
          onClick={onClose}
          className="rounded-full p-2 text-white/80 transition hover:bg-white/15 hover:text-white"
        >
          <X size={28} />
        </button>
      </div>

      <form onSubmit={onSubmit} className="space-y-8 px-7 py-8">
        <div>
          <label className="mb-3 block text-lg font-semibold text-gray-900">
            Enter Your Verification Code
          </label>

          <input
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="e.g., 1234567890000"
            className="h-14 w-full rounded-xl border border-gray-200 px-4 text-base shadow-sm outline-none transition focus:border-[#BA0C2F] focus:ring-4 focus:ring-[#BA0C2F]/10"
          />

          <p className="mt-3 text-sm text-gray-500">
            Enter 13 numeric characters length verification code
          </p>
        </div>

        <div>
          <label className="mb-3 block text-lg font-semibold text-gray-900">
            Enter CNIC
          </label>

          <input
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="e.g., 3520112345678"
            className="h-14 w-full rounded-xl border border-gray-200 px-4 text-base shadow-sm outline-none transition focus:border-[#BA0C2F] focus:ring-4 focus:ring-[#BA0C2F]/10"
          />

          <p className="mt-3 text-sm text-gray-500">
            Enter 13 numeric characters length CNIC No. without hyphens
          </p>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded-lg bg-[#A90D35] px-12 py-4 text-lg font-bold text-white transition hover:bg-[#8f0b2d]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
