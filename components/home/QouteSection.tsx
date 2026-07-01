"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  getHealthPlanSummary,
  getHealthPlanTierOptions,
} from "@/data/HomeProductTierData";
import Link from "next/link";
// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  coverageType: string;
  selectedProduct: string;
  planStructure: string;
  planTier: string;
  i_would_like_to: string;
  product: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
  cnic: string;
  cnicIssueDate: string;
  address: string;
  productYear: string;
  phoTable: string;
  coverage: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  healthNotes: string;
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const STEPS = [
  { num: 1, label: "Personal Information" },
  { num: 2, label: "Assessment" },
  { num: 3, label: "Confirmation & Payment" },
];

const COVERAGE_OPTIONS = [
  {
    id: "500k",
    amount: "PHP 500K",
    label: "Basic Coverage",
    premium: "PHP 12,500.00",
  },
  {
    id: "1m",
    amount: "PHP 1M",
    label: "Standard + OPD",
    premium: "PHP 24,000.00",
  },
  {
    id: "2m",
    amount: "PHP 2M",
    label: "Premium Product",
    premium: "PHP 48,000.00",
  },
];

const HEALTH_QUESTIONS = [
  {
    key: "q1",
    text: "Have you been diagnosed with or treated for any chronic illness in the past 2 years?",
  },
  {
    key: "q2",
    text: "Have you been hospitalized or undergone surgery in the past 3 years?",
  },
  {
    key: "q3",
    text: "Are you currently taking any prescribed medication on a regular basis?",
  },
  { key: "q4", text: "Do you smoke or use tobacco products?" },
];

const PRODUCT_OPTIONS_BY_COVERAGE: Record<string, string[]> = {
  Travel: [
    "International Travel",
    "Home Trip",
    "Student Travel",
    "Hajj and Umrah",
    "Ziarat",
    "Domestic Travel",
  ],
  Health: [
    "Parents Care Plus",
    "Family HealthCare",
    "Personal HealthCare",
    "Lifestyle Care",
    "Parents Care",
    "HerCare",
  ],
  Home: ["Home"],
  "Self-Care": ["Self Care"],
  "Motor Insurance": [
    "Private Car Comprehensive",
    "Old Car Comprehensive",
    "3T Old Car Insurance",
    "Motor Cycle Comprehensive ",
    "Third Party Liability ",
    // "Privates Cars Third Party Liability Insurance",
    // "Motor Cycles Third Party Liability Insurance",
  ],
};

const normalizeCoverageType = (value: string) => {
  if (
    value === "Health Insurance" ||
    value === "HealthCare" ||
    value === "Healthcare" ||
    value === "Health"
  ) {
    return "Health";
  }

  if (value === "Travel Insurance" || value === "Travel") {
    return "Travel";
  }

  if (value === "Home Insurance" || value === "Home") {
    return "Home";
  }

  if (
    value === "Self Insurance" ||
    value === "Self" ||
    value === "Self Care" ||
    value === "Self-Care"
  ) {
    return "Self-Care";
  }

  if (value === "Motor" || value === "Motor Insurance") {
    return "Motor Insurance";
  }

  return value;
};

const PROGRESS = ["33%", "66%", "100%"];

const STEP_BOTTOM_CONTENT = [
  {
    disclaimerTitle: "Disclaimer:",
    description:
      "Never share your OTP, card details, or payment information with anyone. Jubilee General Insurance will never request this information via phone, email, or any other channel.",
    downloadLabel: "View More",
    callLabel: "Call Now",
  },
  {
    disclaimerTitle: "Health Declaration:",
    description:
      "Never share your OTP, card details, or payment information with anyone. Jubilee General Insurance will never request this information via phone, email, or any other channel.",
    downloadLabel: "View More",
    callLabel: "Call Now",
  },
  {
    disclaimerTitle: "Payment Disclaimer:",
    description:
      "I have clearly read, understood, and agree with the terms and conditions of Jubilee General Insurance Parents Care Plus Plan, and I am aware of the waiting period of 30 days according to which this policy shall not cover any expenses during the first 30 days from the inception of the policy, except for accidental injuries. This waiting period shall not be applicable on the subsequent consecutive renewals.",
    downloadLabel: "View More",
    callLabel: "Call Now",
  },
];
const INITIAL: FormData = {
  coverageType: "",
  selectedProduct: "",
  planStructure: "",
  planTier: "",
  i_would_like_to: "",
  product: "",
  name: "",
  email: "",
  phone: "",
  gender: "",
  dob: "",
  cnic: "",
  cnicIssueDate: "",
  address: "",
  productYear: "",
  phoTable: "",
  coverage: "500k",
  q1: "no",
  q2: "no",
  q3: "no",
  q4: "no",
  healthNotes: "",
  cardName: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
};
//Start Date of Birth and CNIC Issue Date helper function
const toDateInputValue = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getDateYearsAgo = (years: number) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - years);
  return toDateInputValue(date);
};

const getDateAfterYears = (dateValue: string, years: number) => {
  const date = new Date(`${dateValue}T00:00:00`);
  date.setFullYear(date.getFullYear() + years);

  return toDateInputValue(date);
};

const formatCnicNicop = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 13);

  if (digits.length <= 5) return digits;
  if (digits.length <= 12) return `${digits.slice(0, 5)}-${digits.slice(5)}`;

  return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`;
}; //end Date of Birth and CNIC Issue Date helper function
// ─── Reusable Atoms ────────────────────────────────────────────────────────────
const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <label className="mb-2 flex  items-end text-[14px] font-medium font-futura leading-[1.25] text-gray-500 capitalize tracking-[0.8px]">
    {children}
  </label>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div
    className="text-[15px] font-bold text-red-600 uppercase tracking-[1.2px]
    mb-4 pb-2 border-b-[1.5px] border-red-100"
    style={{ fontFamily: "Sora, sans-serif" }}
  >
    {children}
  </div>
);

const inputBase =
  "w-full h-[50px] border-[1.5px] border-black rounded-full px-4 py-3 text-[15px] text-gray-700 " +
  "bg-gray-50 outline-none placeholder:text-gray-400 transition-all duration-200 " +
  "focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(201,24,42,0.08)] focus:bg-white";

const Input = (p: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input {...p} className={inputBase} />
);

const Select = ({
  children,
  ...p
}: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <div className="relative w-full">
    <select
      {...p}
      className={`${inputBase} appearance-none pr-14`}
      style={{
        WebkitAppearance: "none",
        MozAppearance: "none",
        appearance: "none",
      }}
    >
      {children}
    </select>

    <span className="pointer-events-none absolute right-5 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-[#4A4A4A]">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  </div>
);

const Textarea = (p: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...p}
    className={`${inputBase} h-auto min-h-[110px] resize-none rounded-[22px]`}
  />
);

const getDaysInMonth = (year: string, month: string) => {
  if (!year || !month) return 31;
  return new Date(Number(year), Number(month), 0).getDate();
};

const isDateInRange = (date: string, min: string, max: string) => {
  return date >= min && date <= max;
};

const DateSelect = ({
  value,
  onChange,
  min,
  max,
  disabled,
  required,
}: {
  value: string;
  onChange: (value: string) => void;
  min: string;
  max: string;
  disabled?: boolean;
  required?: boolean;
}) => {
  const [parts, setParts] = useState({
    day: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    if (!value) {
      setParts({ day: "", month: "", year: "" });
      return;
    }

    const [year, month, day] = value.split("-");
    setParts({ day, month, year });
  }, [value]);

  const minYear = Number(min.slice(0, 4));
  const maxYear = Number(max.slice(0, 4));
  const minMonth = Number(min.slice(5, 7));
  const maxMonth = Number(max.slice(5, 7));
  const minDay = Number(min.slice(8, 10));
  const maxDay = Number(max.slice(8, 10));

  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) =>
    String(maxYear - i),
  );

  const months = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0"),
  );

  const days = Array.from(
    { length: getDaysInMonth(parts.year, parts.month) },
    (_, i) => String(i + 1).padStart(2, "0"),
  );

  const handlePartChange = (
    key: "day" | "month" | "year",
    nextValue: string,
  ) => {
    let nextParts = {
      ...parts,
      [key]: nextValue,
    };

    if (
      nextParts.year &&
      nextParts.month &&
      Number(nextParts.day) > getDaysInMonth(nextParts.year, nextParts.month)
    ) {
      nextParts.day = "";
    }

    const finalDate =
      nextParts.year && nextParts.month && nextParts.day
        ? `${nextParts.year}-${nextParts.month}-${nextParts.day}`
        : "";

    setParts(nextParts);

    if (!finalDate) {
      onChange("");
      return;
    }

    if (!isDateInRange(finalDate, min, max)) {
      onChange("");
      return;
    }

    onChange(finalDate);
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      <Select
        required={required}
        disabled={disabled}
        value={parts.day}
        onChange={(e) => handlePartChange("day", e.target.value)}
      >
        <option value="">Day</option>
        {days.map((day) => {
          const checkDate =
            parts.year && parts.month
              ? `${parts.year}-${parts.month}-${day}`
              : "";

          const isDisabled = !!checkDate && !isDateInRange(checkDate, min, max);

          return (
            <option key={day} value={day} disabled={isDisabled}>
              {day}
            </option>
          );
        })}
      </Select>

      <Select
        required={required}
        disabled={disabled}
        value={parts.month}
        onChange={(e) => handlePartChange("month", e.target.value)}
      >
        <option value="">Month</option>
        {months.map((month) => {
          const year = Number(parts.year);
          const monthNumber = Number(month);

          const isDisabled =
            !!parts.year &&
            ((year === minYear && monthNumber < minMonth) ||
              (year === maxYear && monthNumber > maxMonth));

          return (
            <option key={month} value={month} disabled={isDisabled}>
              {month}
            </option>
          );
        })}
      </Select>

      <Select
        required={required}
        disabled={disabled}
        value={parts.year}
        onChange={(e) => handlePartChange("year", e.target.value)}
      >
        <option value="">Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
    </div>
  );
};

// ─── Left Active Column ───────────────────────────────────────────────────────
const LeftActiveCol = ({
  stepIndex,
  submitted,
}: {
  stepIndex: number;
  submitted: boolean;
}) => (
  <div
    className="w-[70px] bg-[#BA0C2F] flex flex-col items-center justify-between py-8
    flex-shrink-0 border-r border-white/10"
  >
    <span className="text-white flex items-center justify-center text-[45px] font-medium font-futura leading-none">
      {submitted ? "✓" : STEPS[stepIndex].num}
    </span>

    <span
      className="[writing-mode:vertical-rl] rotate-180 text-[25px] font-medium font-futura tracking-[2px]
      uppercase text-white leading-none"
      style={{ fontFamily: "Sora, sans-serif" }}
    >
      {submitted ? "Complete" : STEPS[stepIndex].label}
    </span>
  </div>
);

const RightInactiveCol = ({
  stepIndex,
  isDone,
  disabled,
  onClick,
}: {
  stepIndex: number;
  isDone: boolean;
  disabled?: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    disabled={disabled}
    onClick={onClick}
    className={`w-[70px] self-stretch flex flex-col items-center justify-between py-8
      flex-shrink-0 border-l border-[#BA0C2F] transition-colors duration-200 bg-[#F4F4F5]
      ${disabled ? "cursor-not-allowed" : "cursor-pointer hover:bg-[#f0ebe6]"}`}
  >
    <span className="flex items-center justify-center text-[45px] font-medium font-futura leading-none transition-all duration-300 text-[#4A4A4A]">
      {isDone ? "✓" : STEPS[stepIndex].num}
    </span>

    <span
      className="[writing-mode:vertical-rl] rotate-180 text-[25px] font-medium font-futura tracking-[2px]
      uppercase leading-none transition-colors duration-300 text-[#4A4A4A]"
      style={{ fontFamily: "Sora, sans-serif" }}
    >
      {STEPS[stepIndex].label}
    </span>
  </button>
);

// ─── Coverage Summary Pills ───────────────────────────────────────────────────
// const CoverageSummaryPills = () => {
//   const items = [
//     {
//       label: "Total Health Coverage",
//       value: "PKR 100,000",
//     },
//     {
//       label: "Annual OPD Limit",
//       value: "PKR 10,000",
//     },
//     {
//       label: "Premium",
//       value: "PKR 20,000",
//     },
//   ];

//   return (
//     <div className="mt-7  flex flex-col gap-4 lg:flex-row lg:items-center">
//       {items.map((item) => (
//         <div
//           key={item.label}
//           className="flex min-h-[54px] flex-1 items-center justify-center rounded-full bg-[#F2F2F3] px-6 text-center"
//         >
//           <span className="text-[14px] font-medium text-[#26324B]">
//             {item.label}
//           </span>

//           <span className="mx-2 text-[14px] font-medium text-[#26324B]">-</span>

//           <span className="text-[15px] font-extrabold text-[#26324B]">
//             {item.value}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

type HealthSummary = {
  totalHealthCoverage: string;
  annualOpdLimit: string;
  premium: string;
};

const DEFAULT_HEALTH_SUMMARY: HealthSummary = {
  totalHealthCoverage: "PKR 500,000",
  annualOpdLimit: "PKR 40,000",
  premium: "PKR 87,000",
};

const cleanSummaryValue = (value?: string) => {
  if (!value) return "";
  if (value.trim() === "-") return "";
  return value.trim();
};

const CoverageSummaryPills = ({ data }: { data: FormData }) => {
  const selectedSummary = getHealthPlanSummary(
    data.selectedProduct,
    data.planTier,
  );

  const summary: HealthSummary = {
    totalHealthCoverage:
      cleanSummaryValue(selectedSummary.totalHealthCoverage) ||
      DEFAULT_HEALTH_SUMMARY.totalHealthCoverage,

    annualOpdLimit:
      cleanSummaryValue(selectedSummary.annualOpdLimit) ||
      DEFAULT_HEALTH_SUMMARY.annualOpdLimit,

    premium:
      cleanSummaryValue(selectedSummary.premium) ||
      DEFAULT_HEALTH_SUMMARY.premium,
  };

  const items = [
    {
      label: "Total Health Coverage",
      value: summary.totalHealthCoverage,
    },
    {
      label: "Annual OPD Limit",
      value: summary.annualOpdLimit,
    },
    {
      label: "Premium",
      value: summary.premium,
    },
  ];

  return (
    <div className="mt-7 flex flex-col gap-4 lg:flex-row lg:items-center">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex min-h-[54px] flex-1 items-center justify-center rounded-full bg-[#F2F2F3] px-6 text-center"
        >
          <span className="text-[14px] font-medium text-[#26324B]">
            {item.label}
          </span>

          <span className="mx-2 text-[14px] font-medium text-[#26324B]">-</span>

          <span className="text-[15px] font-extrabold text-[#26324B]">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};
// ─── Health Question ───────────────────────────────────────────────────────────
const HealthQuestion = ({
  index,
  text,
  value,
  onChange,
}: {
  index: number;
  text: string;
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="border-[1.5px] border-gray-100 rounded-[14px] p-4 mb-2 bg-gray-50">
    <p className="text-[15px] text-gray-600 mb-3 leading-relaxed">
      {index}. {text}
    </p>

    <div className="flex gap-6">
      {["Yes", "No"].map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-2 text-[15px] text-gray-600 cursor-pointer"
        >
          <input
            type="radio"
            name={`q${index}`}
            value={opt.toLowerCase()}
            checked={value === opt.toLowerCase()}
            onChange={() => onChange(opt.toLowerCase())}
            className="accent-red-600 w-4 h-4"
          />
          {opt}
        </label>
      ))}
    </div>
  </div>
);

// ─── Step Panels ──────────────────────────────────────────────────────────────
const Step1 = ({
  data,
  onChange,
  lockCategory = false,
  lockProduct = false,
}: {
  data: FormData;
  onChange: (k: keyof FormData, v: string) => void;
  lockCategory?: boolean;
  lockProduct?: boolean;
}) => {
  const normalizedCoverageType = normalizeCoverageType(data.coverageType);
  const productOptions =
    PRODUCT_OPTIONS_BY_COVERAGE[normalizedCoverageType] || [];
  const planTierOptions = getHealthPlanTierOptions(data.selectedProduct);

  const hidePlanTier =
    normalizedCoverageType === "Travel" ||
    normalizedCoverageType === "Motor Insurance" ||
    normalizedCoverageType === "Home";

  const firstRowGridClass = `grid grid-cols-1 gap-5 mb-4 md:grid-cols-2 ${
    hidePlanTier ? "xl:grid-cols-3" : "xl:grid-cols-4"
  }`;

  const effectiveProductOptions =
    data.selectedProduct && !productOptions.includes(data.selectedProduct)
      ? [data.selectedProduct, ...productOptions]
      : productOptions;

  useEffect(() => {
    if (hidePlanTier && data.planTier) {
      onChange("planTier", "");
    }
  }, [hidePlanTier, data.planTier, onChange]);

  useEffect(() => {
    if (!data.selectedProduct) return;
    if (!normalizedCoverageType) return;
    if (!productOptions.length) return;

    if (!productOptions.includes(data.selectedProduct)) {
      onChange("selectedProduct", "");
    }
  }, [normalizedCoverageType, data.selectedProduct, productOptions, onChange]);

  const f = (key: keyof FormData) => ({
    value: String(data[key] ?? ""),
    onChange: (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => onChange(key, e.target.value),
  });
  const dobMinDate = getDateYearsAgo(75);
  const dobMaxDate = getDateYearsAgo(18);
  const todayDate = toDateInputValue(new Date());
  const cnicIssueMinDate = data.dob ? getDateAfterYears(data.dob, 18) : "";
  return (
    <div>
      {/* <div className="grid grid-cols-1 gap-5 mb-4 md:grid-cols-2 xl:grid-cols-4"> */}
      <div className={firstRowGridClass}>
        <div>
          <FieldLabel>Category</FieldLabel>
          <Select
            value={normalizedCoverageType}
            disabled={lockCategory}
            onChange={(e) => {
              if (lockCategory) return;

              onChange("coverageType", e.target.value);
              onChange("selectedProduct", "");
              onChange("planTier", "");
            }}
          >
            <option value="">Select</option>
            <option value="Travel">Travel</option>
            <option value="Health">Health</option>
            <option value="Home">Home</option>
            <option value="Self-Care">SelfCare</option>
            <option value="Motor Insurance">Motor Insurance</option>
          </Select>
        </div>
        <div>
          <FieldLabel>Coverage Type</FieldLabel>
          <Select required {...f("planStructure")}>
            <option value="">Select</option>
            <option value="Takaful">Takaful</option>
            <option value="Conventional">Conventional</option>
          </Select>
        </div>
        <div>
          <FieldLabel>Choose the product </FieldLabel>
          <Select
            value={data.selectedProduct || ""}
            onChange={(e) => {
              if (lockProduct) return;

              onChange("selectedProduct", e.target.value);
              onChange("planTier", "");
            }}
            disabled={!normalizedCoverageType || lockProduct}
          >
            <option value="">
              {normalizedCoverageType ? "Select" : "Select coverage first"}
            </option>

            {effectiveProductOptions.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </Select>
        </div>
        {!hidePlanTier && (
          <div>
            <FieldLabel>Plan Tier</FieldLabel>
            <Select
              value={data.planTier}
              onChange={(e) => onChange("planTier", e.target.value)}
              disabled={!data.selectedProduct || !planTierOptions.length}
            >
              <option value="">
                {!data.selectedProduct
                  ? "Select product first"
                  : planTierOptions.length
                    ? "Select"
                    : "No plan tiers available"}
              </option>

              {planTierOptions.map((tier) => (
                <option key={tier} value={tier}>
                  {tier}
                </option>
              ))}
            </Select>
          </div>
        )}

        {/* <div>
          <FieldLabel>Plan Tier</FieldLabel>
          <Select {...f("planTier")}>
            <option value="">Select</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
          </Select>
        </div> */}
      </div>

      <div className="grid grid-cols-1 gap-5 mb-4 md:grid-cols-2 xl:grid-cols-3">
        {/* <div>
          <FieldLabel>Plan Tier</FieldLabel>
          <Select {...f("planTier")}>
            <option value="">Select</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Premium">Premium</option>
          </Select>
        </div> */}

        <div>
          <FieldLabel>Name</FieldLabel>
          <Input required {...f("name")} placeholder="Enter your name" />
        </div>

        <div>
          <FieldLabel>Email</FieldLabel>
          <Input
            required
            type="email"
            {...f("email")}
            placeholder="user@lorem.com"
          />
        </div>

        <div>
          <FieldLabel>Phone No.</FieldLabel>
          <Input required {...f("phone")} placeholder="+92 3xx xxxxxxx" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <FieldLabel>Gender</FieldLabel>
          <Select required {...f("gender")}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </div>

        <div>
          <FieldLabel>Date of Birth</FieldLabel>
          {/* <Input required type="date" {...f("dob")} /> */}
          <Input
            required
            type="date"
            min={dobMinDate}
            max={dobMaxDate}
            value={data.dob}
            onChange={(e) => {
              onChange("dob", e.target.value);
              onChange("cnicIssueDate", "");
            }}
          />
        </div>

        <div>
          <FieldLabel>CNIC / NICOP</FieldLabel>
          {/* <Input required {...f("cnic")} placeholder="_____-_______-_" /> */}
          <Input
            required
            value={data.cnic}
            maxLength={15}
            placeholder="_____-_______-_"
            onChange={(e) => onChange("cnic", formatCnicNicop(e.target.value))}
          />
        </div>

        <div>
          <FieldLabel>CNIC/NICOP Issue Date</FieldLabel>
          {/* <Input required type="date" {...f("cnicIssueDate")} /> */}
          <Input
            required
            type="date"
            min={cnicIssueMinDate || undefined}
            max={todayDate}
            value={data.cnicIssueDate}
            disabled={!data.dob}
            onChange={(e) => {
              const value = e.target.value;

              if (value > todayDate) return;
              if (cnicIssueMinDate && value < cnicIssueMinDate) return;

              onChange("cnicIssueDate", value);
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2 xl:grid-cols-1">
        <div>
          <FieldLabel>Address</FieldLabel>
          <Input required {...f("address")} placeholder="Address" />
        </div>
        {/* <div>
          <FieldLabel>Plan Tier</FieldLabel>
          <Select
            value={data.planTier}
            onChange={(e) => onChange("planTier", e.target.value)}
            disabled={!data.selectedProduct || !planTierOptions.length}
          >
            <option value="">
              {!data.selectedProduct
                ? "Select product first"
                : planTierOptions.length
                  ? "Select"
                  : "No plan tiers available"}
            </option>

            {planTierOptions.map((tier) => (
              <option key={tier} value={tier}>
                {tier}
              </option>
            ))}
          </Select>
        </div> */}
        {/* <div>
          <FieldLabel>Coverage Type</FieldLabel>
          <Select required {...f("planStructure")}>
            <option value="">Select</option>
            <option value="Takaful">Takaful</option>
            <option value="Conventional">Conventional</option>
          </Select>
        </div> */}

        {/* <div>
          <FieldLabel>I would like to cover</FieldLabel>
          <Select required {...f("i_would_like_to")}>
            <option value="">Select</option>
            <option value="Mother">Mother</option>
            <option value="Father">Father</option>
            <option value="Uncle">Uncle</option>
            <option value="Aunty">Aunty</option>
            <option value="My Self">My Self</option>
          </Select>
        </div> */}
      </div>

      <CoverageSummaryPills data={data} />
    </div>
  );
};

const Step2 = ({
  data,
  onChange,
}: {
  data: FormData;
  onChange: (k: keyof FormData, v: string) => void;
}) => (
  <div>
    <SectionTitle>Health Assessment</SectionTitle>

    {HEALTH_QUESTIONS.map((q, i) => (
      <HealthQuestion
        key={q.key}
        index={i + 1}
        text={q.text}
        value={data[q.key as keyof FormData] as string}
        onChange={(v) => onChange(q.key as keyof FormData, v)}
      />
    ))}
  </div>
);

const Step3 = ({
  data,
  onChange,
}: {
  data: FormData;
  onChange: (k: keyof FormData, v: string) => void;
}) => {
  const sel = COVERAGE_OPTIONS.find((c) => c.id === data.coverage);

  const fmtCard = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 16);
    return d.match(/.{1,4}/g)?.join(" ") ?? d;
  };

  const fmtExp = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length >= 2 ? `${d.slice(0, 2)} / ${d.slice(2)}` : d;
  };

  return (
    <div>
      <SectionTitle>Payment Details</SectionTitle>

      <div className="mb-2">
        <FieldLabel>Cardholder Name</FieldLabel>
        <Input
          placeholder="Name on card"
          value={data.cardName ?? ""}
          onChange={(e) => onChange("cardName", e.target.value)}
        />
      </div>

      <div className="mb-2">
        <FieldLabel>Card Number</FieldLabel>
        <Input
          placeholder="XXXX XXXX XXXX XXXX"
          value={data.cardNumber ?? ""}
          maxLength={19}
          onChange={(e) => onChange("cardNumber", fmtCard(e.target.value))}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 mb-3 md:grid-cols-2">
        <div>
          <FieldLabel>Expiry Date</FieldLabel>
          <Input
            placeholder="MM / YY"
            value={data.expiry ?? ""}
            maxLength={7}
            onChange={(e) => onChange("expiry", fmtExp(e.target.value))}
          />
        </div>

        <div>
          <FieldLabel>CVV</FieldLabel>
          <Input
            type="password"
            placeholder="•••"
            maxLength={3}
            value={data.cvv ?? ""}
            onChange={(e) => onChange("cvv", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

const SuccessScreen = () => (
  <div className="flex flex-col items-center justify-center h-full py-12 px-6 text-center">
    <div
      className="w-14 h-14 rounded-full bg-red-50 border-[3px] border-red-600 flex items-center
      justify-center mb-4"
      style={{ animation: "popIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275)" }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9182A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>

    <h2
      className="text-lg font-bold text-gray-800 mb-2"
      style={{ fontFamily: "Sora,sans-serif" }}
    >
      Application Submitted!
    </h2>

    <p className="text-[12px] text-gray-400 max-w-xs leading-relaxed">
      Your health coverage application has been received. A confirmation will be
      sent to your email shortly.
    </p>
  </div>
);

// ─── Helper Function ──────────────────────────────────────────────────────────
function renderStepContent(
  currentStep: number,
  data: FormData,
  handleChange: (key: keyof FormData, value: string) => void,
  lockCategory = false,
  lockProduct = false,
) {
  if (currentStep === 0) {
    return (
      <Step1
        data={data}
        onChange={handleChange}
        lockCategory={lockCategory}
        lockProduct={lockProduct}
      />
    );
  }

  if (currentStep === 1) {
    return <Step2 data={data} onChange={handleChange} />;
  }

  if (currentStep === 2) {
    return <Step3 data={data} onChange={handleChange} />;
  }

  return null;
}

type QuotePrefillData = {
  coverageType?: string;
  selectedProduct?: string;
  planTier?: string;
  lockCategory?: boolean;
  lockProduct?: boolean;
};

type QuoteSectionProps = {
  prefillData?: QuotePrefillData;
  /**
   * Home Page par true pass karein.
   * Is se Slide 1 ke Next par selected service page par redirect hoga.
   */
  redirectAfterStepOne?: boolean;
};

const QUOTE_RESUME_STORAGE_KEY = "jubilee_quote_resume_step_1";

/**
 * IMPORTANT:
 * In routes ko apne actual service page paths ke mutabiq rakhna.
 * Parents Care Plus ka route aapke shared Home code ke mutabiq `/parentscare` hai.
 */
const PRODUCT_PAGE_ROUTE_MAP: Record<string, string> = {
  "International Travel": "/international-travel",
  "Home Trip": "/home-trip",
  "Student Travel": "/student-travel",
  "Hajj and Umrah": "/hajj-and-umrah",
  Ziarat: "/ziarat",
  "Domestic Travel": "/domestic-travel",

  "Parents Care Plus": "/parentscare",
  "Family HealthCare": "/healthcare",
  "Personal HealthCare": "/personal-healthcare",
  "Life Style Care": "/life-style-care",
  "Parents Care": "/parents-care",
  "Her Care": "/her-care",

  Home: "/home-insurance",
  "Self Care": "/self-care",

  "Motor Third Party Liability Insurance":
    "/motor-third-party-liability-insurance",
  "Private Car Comprehensive": "/private-car-comprehensive",
  "Old Car Comprehensive": "/old-car-comprehensive",
  "3T Old Car Insurance": "/3t-old-car-insurance",
  "Motor Sycle Comprehensive Insurance": "/motor-cycle-comprehensive-insurance",
  "Privates Cars Third Party Liability Insurance":
    "/private-cars-third-party-liability-insurance",
  "Motor Cycles Third Party Liability Insurance":
    "/motor-cycles-third-party-liability-insurance",
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function QuoteSection({
  prefillData,
  redirectAfterStepOne = false,
}: QuoteSectionProps) {
  const [displayStep, setDisplayStep] = useState(0);
  const [nextStep, setNextStep] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const [animDir, setAnimDir] = useState<"forward" | "back">("forward");
  const [animating, setAnimating] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [visited, setVisited] = useState([true, false, false]);
  const [data, setData] = useState<FormData>(INITIAL);
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const bottomContent = STEP_BOTTOM_CONTENT[step];
  const router = useRouter();
  const searchParams = useSearchParams();
  const resumeQuote = searchParams.get("resumeQuote");
  const lockCategory =
    Boolean(prefillData?.lockCategory) && !redirectAfterStepOne;
  const lockProduct =
    Boolean(prefillData?.lockProduct) && !redirectAfterStepOne;
  useEffect(() => {
    if (!prefillData) return;

    setData((prev) => ({
      ...prev,
      coverageType: prefillData.coverageType
        ? normalizeCoverageType(prefillData.coverageType)
        : prev.coverageType,
      selectedProduct: prefillData.selectedProduct ?? prev.selectedProduct,
      planTier: prefillData.planTier ?? prev.planTier,
    }));

    setStep(0);
    setDisplayStep(0);
    setNextStep(null);
    setAnimating(false);
    setSubmitted(false);
  }, [prefillData]);

  useEffect(() => {
    if (resumeQuote !== "true") return;

    const savedStepOneData = sessionStorage.getItem(QUOTE_RESUME_STORAGE_KEY);

    if (!savedStepOneData) return;

    try {
      const parsedData = JSON.parse(savedStepOneData) as Partial<FormData>;

      setData({
        ...INITIAL,
        ...parsedData,
        coverageType: parsedData.coverageType
          ? normalizeCoverageType(parsedData.coverageType)
          : "",
      });

      setStep(1);
      setDisplayStep(1);
      setNextStep(null);
      setAnimDir("forward");
      setAnimating(false);
      setSubmitted(false);
      setVisited([true, true, false]);

      sessionStorage.removeItem(QUOTE_RESUME_STORAGE_KEY);

      window.setTimeout(() => {
        document.getElementById("quote-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 250);
    } catch (error) {
      console.error("Unable to resume quote form:", error);
      sessionStorage.removeItem(QUOTE_RESUME_STORAGE_KEY);
    }
  }, [resumeQuote]);

  const handleChange = useCallback((key: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const goTo = (target: number) => {
    if (animating || target === step) return;
    if (target < 0 || target > 2) return;

    setAnimDir(target > step ? "forward" : "back");
    setNextStep(target);
    setAnimating(true);

    setVisited((prev) => {
      const v = [...prev];
      v[target] = true;
      return v;
    });

    setTimeout(() => {
      setStep(target);
      setDisplayStep(target);
      setNextStep(null);
      setAnimating(false);
    }, 650);
  };

  const handleNext = () => {
    const form = formRef.current;

    if (form && !form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (step === 0 && redirectAfterStepOne) {
      const selectedProductRoute = PRODUCT_PAGE_ROUTE_MAP[data.selectedProduct];

      if (selectedProductRoute) {
        sessionStorage.setItem(QUOTE_RESUME_STORAGE_KEY, JSON.stringify(data));

        router.push(`${selectedProductRoute}?resumeQuote=true#quote-section`);
        return;
      }

      /**
       * Fallback:
       * Agar kisi product ka route map mein path miss ho, form break nahi hoga.
       * Woh isi Home Page par normal Step 2 par chala jayega.
       */
      goTo(step + 1);
      return;
    }

    if (step === 2) {
      setSubmitted(true);
      return;
    }

    goTo(step + 1);
  };

  const handleBack = () => {
    if (step > 0) goTo(step - 1);
  };

  const FormPanel = (
    <div className="flex-1 flex flex-col min-w-0 bg-white">
      <div className="h-[3px] bg-gray-100">
        <div
          className="h-full bg-[#BA0C2F] transition-all duration-300"
          style={{ width: submitted ? "100%" : PROGRESS[step] }}
        />
      </div>

      <div className="relative flex-1 min-h-[520px] overflow-hidden">
        {submitted ? (
          <SuccessScreen />
        ) : (
          <>
            <form
              ref={formRef}
              className="relative px-8 pt-14 pb-8 bg-white z-10"
              onSubmit={(e) => {
                e.preventDefault();
                handleNext();
              }}
            >
              {renderStepContent(
                displayStep,
                data,
                handleChange,
                lockCategory,
                lockProduct,
              )}
            </form>

            {animating && nextStep !== null && (
              <div
                className={`absolute inset-0 px-8 pt-14 pb-8 bg-white z-20
                transition-transform duration-[650ms] ease-in-out transform-gpu
                ${
                  animDir === "forward"
                    ? "animate-slide-in-right"
                    : "animate-slide-in-left"
                }`}
              >
                {renderStepContent(
                  nextStep,
                  data,
                  handleChange,
                  lockCategory,
                  lockProduct,
                )}
              </div>
            )}
          </>
        )}
      </div>

      {!submitted && (
        <div className="px-8 pb-5">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1 pt-1">
              <p className="mb-2 text-[12px] font-bold text-[#BA0C2F] underline">
                {bottomContent.disclaimerTitle}
              </p>

              <p className="max-w-[820px] text-[10px] leading-relaxed text-[#BA0C2F] underline">
                {bottomContent.description}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {step > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="min-w-[120px] rounded-full border border-[#BA0C2F] bg-white px-8 py-5 text-[16px] font-bold uppercase text-[#BA0C2F] transition-all duration-200 hover:bg-[#BA0C2F]/5"
                >
                  Back
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="min-w-[190px] rounded-full bg-[#BA0C2F] px-12 py-5 text-[16px] font-bold uppercase text-white transition-all duration-200 hover:bg-[#9f0a28]"
              >
                {step === 2 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
          <div className="mb-2 flex items-center gap-2 text-[11px] text-[#4A4A4A] underline">
            <Link href="/health/parents-care-plus">
              <button type="button" className="cursor-pointer">
                {bottomContent.downloadLabel}
              </button>
            </Link>
            <span>|</span>
            <a href="tel:021111654111" className="cursor-pointer">
              {bottomContent.callLabel}
            </a>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes popIn {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes slideInRightOverlay {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }

        @keyframes slideInLeftOverlay {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }

        .animate-slide-in-right {
          animation: slideInRightOverlay 650ms ease-in-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeftOverlay 650ms ease-in-out forwards;
        }
      `}</style>

      <div
        className="min-h-screen b flex items-center justify-center p-5"
        style={{ fontFamily: "'DM Sans',sans-serif" }}
      >
        <div
          className="w-full max-w-7xl rounded-[40px] overflow-hidden flex
          shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-[#BA0C2F]"
        >
          {!submitted ? (
            <>
              {step === 0 && (
                <>
                  <LeftActiveCol stepIndex={0} submitted={false} />
                  {FormPanel}
                  <RightInactiveCol
                    stepIndex={1}
                    isDone={false}
                    disabled
                    onClick={() => {}}
                  />
                  <RightInactiveCol
                    stepIndex={2}
                    isDone={false}
                    disabled
                    onClick={() => {}}
                  />
                </>
              )}

              {step === 1 && (
                <>
                  <RightInactiveCol
                    stepIndex={0}
                    isDone={true}
                    disabled
                    onClick={() => {}}
                  />
                  <LeftActiveCol stepIndex={1} submitted={false} />
                  {FormPanel}
                  <RightInactiveCol
                    stepIndex={2}
                    isDone={false}
                    disabled
                    onClick={() => {}}
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <RightInactiveCol
                    stepIndex={0}
                    isDone={true}
                    disabled
                    onClick={() => {}}
                  />
                  <RightInactiveCol
                    stepIndex={1}
                    isDone={true}
                    disabled
                    onClick={() => {}}
                  />
                  <LeftActiveCol stepIndex={2} submitted={false} />
                  {FormPanel}
                </>
              )}
            </>
          ) : (
            <>
              <LeftActiveCol stepIndex={2} submitted={true} />
              {FormPanel}
            </>
          )}
        </div>
      </div>
    </>
  );
}
