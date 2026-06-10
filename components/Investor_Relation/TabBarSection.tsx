"use client";

import React, { useEffect, useMemo, useState } from "react";
import Container from "../home/container";
import Image from "next/image";
import img2 from "../../public/img/InvestorRelation/6b9e55a1c188a713802ccc204cbfd93ba8c110c7.jpg";
import Button from "../common/button";
import img4 from "../../public/img/InvestorRelation/c65b59db09e50ee809c46a7340c5c2214da7718c.jpg";
import img3 from "../../public/img/InvestorRelation/6407e27f799a591ac5135c14c02c348f67035277.jpg";
// Growth ata tha galance

import img1 from "../../public/img/InvestorRelation/Growth at the/Capital & Reserves.png";
import img13 from "../../public/img/InvestorRelation/Growth at the/Assets & Liabilities.png";
import img14 from "../../public/img/InvestorRelation/Growth at the/Gross Premium and Net Premium.png";
import img15 from "../../public/img/InvestorRelation/Growth at the/Net Premium and Underwriting Result.png";
import img5 from "../../public/img/InvestorRelation/Growth at the/Investment Income.png";
import img6 from "../../public/img/InvestorRelation/Growth at the/Profit (Loss) Before Tax and After Tax.png";
import img7 from "../../public/img/InvestorRelation/Growth at the/Earning Per Share Pre Tax and After Tax.png";
import img8 from "../../public/img/InvestorRelation/Growth at the/Dividend.png";
import img9 from "../../public/img/InvestorRelation/Growth at the/Liquid Assets  Total Assets.png";
import img10 from "../../public/img/InvestorRelation/Growth at the/Equity  Total Assets.png";
import img11 from "../../public/img/InvestorRelation/Growth at the/Investments & Cash and bank deposits.png";
import img12 from "../../public/img/InvestorRelation/Growth at the/Market value vs Breakup value per share.png";

type ReportItem = {
  id: number;
  title: string;
  year: string;
  category: string;
  fileUrl: string;
};

const reportsData: ReportItem[] = [
  {
    id: 1,
    title: "1st Quarter Accounts 2026",
    year: "2026",
    // category: "Annual Report",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2026/JGI-Q1-Report-2026.pdf",
  },
  {
    id: 2,
    title: "Jubilee Annual Report 2025",
    year: "2025",
    category: "Annual Report",
    fileUrl: "#",
  },
  {
    id: 3,
    title: "3rd Quarter Accounts 2025",
    year: "2025",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2025/JGI-Q3-Report-2025.pdf",
  },
  {
    id: 4,
    title: "2nd Quarter Accounts 2025",
    year: "2025",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2025/JGI-Q2-Report-2025.pdf",
  },
  {
    id: 5,
    title: "1st Quarter Accounts 2025",
    year: "2025",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2025/JGI-Q1-Report-2025.pdf",
  },
  {
    id: 6,
    title: "Jubilee Annual Report 2024",
    year: "2024",
    category: "Annual Report",
    fileUrl: "/pdf/Financial Report/2024/JGI-AR-2024.pdf",
  },
  {
    id: 7,
    title: "3rd Quarter Accounts 2024",
    year: "2024",
    category: "Quarterly Report",
    fileUrl: "#",
  },
  {
    id: 8,
    title: "2nd Quarter Accounts 2024",
    year: "2024",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2024/2nd_Quarter_ Accounts_2024.pdf",
  },
  {
    id: 9,
    title: "Quarterly Report",
    year: "2024",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2024/JGI-Q1-REPORT-2024.pdf",
  },
  {
    id: 10,
    title: "BCR Criteria Checklist for Annual Report 2023",
    year: "2023",
    category: "Annual Report",
    fileUrl: "/pdf/Financial Report/2023/BCR_CRITERIA_2023.pdf",
  },
  {
    id: 11,
    title: "Jubilee Annual Report 2023",
    year: "2023",
    category: "Annual Report",
    fileUrl:
      "/pdf/Financial Report/2023/Jubilee_General_Insurance_Annual_Report_2023.pdf",
  },
  {
    id: 12,
    title: "3rd Quarter Accounts 2023",
    year: "2023",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2023/JGI_Q3_Report2023.pdf",
  },
  {
    id: 13,
    title: "2nd Quarter Accounts 2023",
    year: "2023",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2023/JGI-Q2-Report-2023.pdf",
  },
  {
    id: 14,
    title: "1st Quarter Accounts 2023",
    year: "2023",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2023/JGI-Q1-Report-2023.pdf",
  },
  {
    id: 15,
    title: "BCR Checklist Annual Report 2022",
    year: "2022",
    category: "Annual Report",
    fileUrl: "/pdf/Financial Report/2022/BCR-Checklist-Annual-Report-2022.pdf",
  },
  {
    id: 16,
    title: "Jubilee Annual Report 2022",
    year: "2022",
    category: "Annual Report",
    fileUrl: "/pdf/Financial Report/2022/JGI-AR-2022-Final1.pdf",
  },
  {
    id: 17,
    title: "3rd Quarter Accounts 2022",
    year: "2022",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2022/JGI-Q3-Report-2022.pdf",
  },
  {
    id: 18,
    title: "2nd Quarter Accounts 2022",
    year: "2022",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2022/JGI-Q2-Report-2022.pdf",
  },
  {
    id: 19,
    title: "1st Quarter Accounts 2022",
    year: "2022",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2022/Jubilee-Insurance-Q1-Report-2022.pdf",
  },
  {
    id: 20,
    title: "Jubilee Annual Report 2021",
    year: "2021",
    category: "Annual Report",
    fileUrl: "#",
  },
  {
    id: 21,
    title: "Jubilee Half Yearly Accounts 2021",
    year: "2021",
    category: "Half Yearly Report",
    fileUrl: "/pdf/Financial Report/2021/JGI-Half-Yearly-Report-2021.pdf",
  },
  {
    id: 22,
    title: "1st Quarter Accounts 2021",
    year: "2021",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2021/Jubilee-Insurance-Q1-Report-2021.pdf",
  },
  {
    id: 23,
    title: "3rd Quarter Accounts 2021",
    year: "2021",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2021/JGI-Q3-Report-2021.pdf",
  },
  {
    id: 24,
    title: "Jubilee Annual Report 2020",
    year: "2020",
    category: "Annual Report",
    fileUrl: "/pdf/Financial Report/2020/Annual-Report-2020-JGI-F.pdf",
  },
  {
    id: 25,
    title: "3rd Quarter Accounts 2020",
    year: "2020",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2020/Jubilee-GI-Q3-2020-Final.pdf",
  },
  {
    id: 26,
    title: "2nd Quarter Accounts 2020",
    year: "2020",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2020/Jubilee-GI-Q2-2020-Final.pdf",
  },
  {
    id: 27,
    title: "1st Quarter Accounts 2020",
    year: "2020",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2020/Jubilee-GI-Q1-2020.pdf",
  },
  {
    id: 28,
    title: "Jubilee Annual Report 2019",
    year: "2019",
    category: "Annual Report",
    fileUrl: "/pdf/Financial Report/2019/Jubilee-General-Insurance-AR-2019.pdf",
  },
  {
    id: 29,
    title: "3rd Quarter Accounts 2019",
    year: "2019",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2019/quarter3-report-2019.pdf",
  },
  {
    id: 30,
    title: "Jubilee Half Year Accounts 2019",
    year: "2019",
    category: "Half Yearly Report",
    fileUrl: "/pdf/Financial Report/2019/quarter2-report-2019.pdf",
  },
  {
    id: 31,
    title: "1st Quarter Accounts 2019",
    year: "2019",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2019/quarter1-report-2019.pdf",
  },
  {
    id: 32,
    title: "Jubilee Annual Report 2018",
    year: "2018",
    category: "Annual Report",
    fileUrl:
      "/pdf/Financial Report/2018/Jubilee-General-Insurance-AR-2019 (1).pdf",
  },
  {
    id: 33,
    title: "Jubilee Half Year Accounts 2018",
    year: "2018",
    category: "Half Yearly Report",
    fileUrl: "/pdf/Financial Report/2018/quarter2-report-2019.pdf",
  },
  {
    id: 34,
    title: "1st Quarter Accounts 2018",
    year: "2018",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2018/quarter3-report-2019.pdf",
  },
  {
    id: 35,
    title: "Jubilee Annual Report 2017",
    year: "2017",
    category: "Annual Report",
    fileUrl: "/pdf/Financial Report/2017/annualreport2017.pdf",
  },
  {
    id: 36,
    title: "3rd Quarter Accounts 2017",
    year: "2017",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2017/3rdquarter2017.pdf",
  },
  {
    id: 37,
    title: "Jubilee Half Year Accounts 2017",
    year: "2017",
    category: "Half Yearly Report",
    fileUrl: "/pdf/Financial Report/2017/six-month-report-2017.pdf",
  },
  {
    id: 38,
    title: "1st Quarter Accounts 2017",
    year: "2017",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2017/1stquarter2017.pdf",
  },
  {
    id: 39,
    title: "Jubilee Annual Report 2016",
    year: "2016",
    category: "Annual Report",
    fileUrl: "/pdf/Financial Report/2016/Jubileeannualreport2016.pdf",
  },
  {
    id: 40,
    title: "3rd Quarter Accounts 2016",
    year: "2016",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2016/3rdquarter2016.pdf",
  },
  {
    id: 41,
    title: "Jubilee Half Year Accounts 2016",
    year: "2016",
    category: "Half Yearly Report",
    fileUrl: "/pdf/Financial Report/2016/3rdquarter2016.pdf",
  },
  {
    id: 42,
    title: "1st Quarter Accounts 2016",
    year: "2016",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2016/1stquarter2016.pdf",
  },
  {
    id: 43,
    title: "Jubilee Annual Report 2015",
    year: "2015",
    category: "Annual Report",
    fileUrl: "/pdf/Financial Report/2015/Jubileeannualreport2015.pdf",
  },
  {
    id: 44,
    title: "Jubilee Nine Months Accounts 2015",
    year: "2015",
    category: "Nine Monthly Report",
    fileUrl: "/pdf/Financial Report/2015/JGI_Nine_Months_report.pdf",
  },
  {
    id: 45,
    title: "Jubilee Half Year Accounts 2015",
    year: "2015",
    category: "Half Yearly Report",
    fileUrl: "/pdf/Financial Report/2015/HalfJubileeFinancialsJune2015.pdf",
  },
  {
    id: 46,
    title: "1st Quarter Accounts 2015",
    year: "2015",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2015/1quarter-account2015.pdf",
  },
  {
    id: 47,
    title: "Jubilee Annual Report 2014",
    year: "2014",
    category: "Annual Report",
    fileUrl: "/pdf/Financial Report/2014/Jubilee-Annual-Report-2014.pdf",
  },
  {
    id: 48,
    title: "Jubilee Nine Months Accounts 2014",
    year: "2014",
    category: "Nine Monthly Report",
    fileUrl: "/pdf/Financial Report/2014/Nine-Month-Accounts-2014.pdf",
  },
  {
    id: 49,
    title: "Jubilee Half Year Accounts 2014",
    year: "2014",
    category: "Half Yearly Report",
    fileUrl: "/pdf/Financial Report/2014/Jubilee-Half-Year-Accounts-2014.pdf",
  },
  {
    id: 50,
    title: "1st Quarter Report",
    year: "2014",
    category: "Quarterly Report",
    fileUrl: "/pdf/Financial Report/2014/Ist-Qtr-2014.pdf",
  },
];

const Notice_Of_AGMData: ReportItem[] = [
  {
    id: 1,
    title: "Notice-of-AGM",
    year: "2025",
    category: "Notice",
    fileUrl: "/pdf/Notice of AGM/JGI-Notice-of-AGM-2025.pdf",
  },
  {
    id: 2,
    title: "Proxy forms in English",
    year: "2025",
    category: "Proxy Form",
    fileUrl: "/pdf/Notice of AGM/Proxy-Forms-2025.pdf",
  },
];

const Corporate_Governance_DocumentsData: ReportItem[] = [
  {
    id: 1,
    title: "Directors’ Remuneration Policy",
    year: "2025",
    category: "JGI Policies",
    fileUrl: "/pdf/Coporate Governance/JGI/DIRECTORS-REMUNERATIONS-POLICY.pdf",
  },
  {
    id: 2,
    title: "Board’s Policy on Diversity",
    year: "2025",
    category: "JGI Policies",
    fileUrl: "/pdf/Coporate Governance/JGI/BOARDS-POLICY-ON-DIVERSITY.pdf",
  },
  {
    id: 3,
    title: "Code of Conduct",
    year: "2025",
    category: "JGI Policies",
    fileUrl: "/pdf/Coporate Governance/JGI/CODE-OF-CONDUCT.pdf",
  },
  {
    id: 4,
    title: "Whistle Blowing Policy",
    year: "2025",
    category: "JGI Policies",
    fileUrl: "/pdf/Coporate Governance/JGI/WHISTLE-BLOWING-POLICY.pdf",
  },
  {
    id: 5,
    title: "Grievience Function",
    year: "2025",
    category: "JGI Policies",
    fileUrl: "/pdf/Coporate Governance/JGI/GRIEVANCE-FUNCTION.pdf",
  },
  {
    id: 6,
    title: "Corporate Social Responsibility",
    year: "2025",
    category: "JGI Policies",
    fileUrl:
      "/pdf/Coporate Governance/JGI/CORPORATE-SOCIAL-RESPONSIBILITY-POLICY.pdf",
  },
  {
    id: 7,
    title: "Policy for Related Party Transactions",
    year: "2025",
    category: "JGI Policies",
    fileUrl:
      "/pdf/Coporate Governance/JGI/POLICY-FOR-RELATED-PARTY-TRANSACTIONS.pdf",
  },
  {
    id: 8,
    title: "Internal Control Framework",
    year: "2025",
    category: "JGI Policies",
    fileUrl: "/pdf/Coporate Governance/JGI/INTERNAL-CONTROL-FRAMEWORK.pdf",
  },
  {
    id: 9,
    title: "Board Risk and Compliance Committee",
    year: "2025",
    category: "Terms of Reference of Board Committees",
    fileUrl: "/pdf/Coporate Governance/Terms/TORs-of-BAC.pdf",
  },
  {
    id: 10,
    title: "Human Resource Remuneration and Nomination Committee",
    year: "2025",
    category: "Terms of Reference of Board Committees",
    fileUrl: "/pdf/Coporate Governance/Terms/TORs-of-BRCC.pdf",
  },
  {
    id: 11,
    title: "Board Audit Committee",
    year: "2025",
    category: "Terms of Reference of Board Committees",
    fileUrl: "/pdf/Coporate Governance/Terms/TORs-of-HRRNC.pdf",
  },
];
const Notice_Of_EOGMData: ReportItem[] = [
  {
    id: 1,
    title: "EOG-to-be-held-on-Monday-26-June-2023.",
    year: "2023",
    category: "Notice",
    fileUrl: "#",
  },
  {
    id: 2,
    title: "proxy forms in English-Urdu",
    year: "2025",
    category: "Proxy Form",
    fileUrl: "#",
  },
  {
    id: 3,
    title: "Ballot forms in English-Urdu",
    year: "2025",
    category: "Ballot Form",
    fileUrl: "#",
  },
];
const Profile_Of_The_Candidate_Data: ReportItem[] = [
  {
    id: 1,
    title: "Notice of the Extraordinary General Meeting",
    year: "2023",
    category: "Notice",
    fileUrl:
      "/pdf/Profile of the Candidate – Election of Directors/Notice/Election-of-Directors-2023.pdf",
  },
  {
    id: 2,
    title: "Notice of Election of Directors 2023",
    year: "2023",
    category: "Notice",
    fileUrl:
      "/pdf/Profile of the Candidate – Election of Directors/Notice/Notice-of-EOG-to-be-held-on-Monday-26-June-2023.pdf",
  },
  // {
  //   id: 3,
  //   title:
  //     "Candidates intending to contest elections wishing to access the list of shareholders and their addresses can email their requests",
  //   year: "2025",
  //   category: "List of Shareholders",
  //   fileUrl: "#",
  // },
];
// const Growth_At_A_Galance_Data: ReportItem[] = [
//   {
//     id: 1,
//     title: "Capital & Reserves",
//     year: "2023",
//     category: "Notice",
//     fileUrl: "#",
//   },
//   {
//     id: 2,
//     title: "Assets & Liabilities",
//     year: "2023",
//     category: "Notice",
//     fileUrl: "#",
//   },
//   {
//     id: 3,
//     title: "Gross Premium and Net Premium",
//     year: "2025",
//     category: "List of Shareholders",
//     fileUrl: "#",
//   },
//   {
//     id: 3,
//     title: "Net Premium and Underwriting Result",
//     year: "2025",
//     category: "List of Shareholders",
//     fileUrl: "#",
//   },
//   {
//     id: 3,
//     title: "Investment Income",
//     year: "2025",
//     category: "List of Shareholders",
//     fileUrl: "#",
//   },
//   {
//     id: 3,
//     title: "Profit (Loss) Before Tax and After Tax",
//     year: "2025",
//     category: "List of Shareholders",
//     fileUrl: "#",
//   },
//   {
//     id: 3,
//     title: "Earning Per Share: Pre Tax and After Tax",
//     year: "2025",
//     category: "List of Shareholders",
//     fileUrl: "#",
//   },
//   {
//     id: 3,
//     title: "Dividend",
//     year: "2025",
//     category: "List of Shareholders",
//     fileUrl: "#",
//   },
//   {
//     id: 3,
//     title: "Liquid Assets / Total Assets %",
//     year: "2025",
//     category: "List of Shareholders",
//     fileUrl: "#",
//   },
//   {
//     id: 3,
//     title: "Equity / Total Assets %",
//     year: "2025",
//     category: "List of Shareholders",
//     fileUrl: "#",
//   },
//   {
//     id: 3,
//     title: "Investments & Cash and bank deposits",
//     year: "2025",
//     category: "List of Shareholders",
//     fileUrl: "#",
//   },
//   {
//     id: 3,
//     title: "Market value vs Breakup value per share",
//     year: "2025",
//     category: "List of Shareholders",
//     fileUrl: "#",
//   },
// ];

function ChevronDownIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 10L12 15L17 10"
        stroke="#666666"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 5L16 12L8 19"
        stroke="#111111"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type FilterSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
};

function FilterSelect({
  value,
  onChange,
  options,
  placeholder,
}: FilterSelectProps) {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-[56px]
          w-full
          cursor-pointer
          appearance-none
          rounded-[16px]
          border-0
          bg-[#E9E9EB]
          px-5
          pr-12
          font-futura
          text-[15px]
          font-normal
          leading-none
          text-[#111111]
          outline-none
          transition
          focus:ring-2
          focus:ring-[#BA0C2F]/10
          md:h-[62px]
          md:text-[16px]
        "
      >
        <option value="All">{placeholder}</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <div
        className="
          pointer-events-none
          absolute
          right-5
          top-1/2
          flex
          h-5
          w-5
          -translate-y-1/2
          items-center
          justify-center
        "
      >
        <ChevronDownIcon />
      </div>
    </div>
  );
}

type ReportCardProps = {
  title: string;
  fileUrl: string;
};

function ReportCard({ title, fileUrl }: ReportCardProps) {
  return (
    <div
      className="
        flex
        min-h-[116px]
        items-center
        justify-between
        gap-5
        rounded-[20px]
        bg-[#F1F1F1]
        px-6
        py-5
        transition
        hover:bg-[#ebebeb]
        md:min-h-[128px]
        md:px-7
        md:py-6
      "
    >
      <div className="min-w-0 flex-1">
        <h3
          className="
            max-w-[760px]
            font-futura
            text-[20px]
            font-semibold
            leading-[1.22]
            tracking-[-0.3px]
            text-[#111111]
            md:text-[24px]
            lg:text-[26px]
          "
        >
          {title}
        </h3>

        <a
          href={fileUrl}
          target="_blank"
          rel="noreferrer"
          className="
            mt-4
            inline-block
            font-futura
            text-[15px]
            font-normal
            leading-none
            text-[#4F46E5]
            hover:underline
            md:text-[16px]
          "
        >
          Download
        </a>
      </div>

      <a
        href={fileUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Download ${title}`}
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          transition
          hover:translate-x-1
        "
      >
        <ArrowRightIcon />
      </a>
    </div>
  );
}

export default function Financial_Reports() {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const years = [...new Set(reportsData.map((item) => item.year))];
  const categories = [...new Set(reportsData.map((item) => item.category))];

  const filteredReports = useMemo(() => {
    return reportsData.filter((item) => {
      const yearMatch = selectedYear === "All" || item.year === selectedYear;
      const categoryMatch =
        selectedCategory === "All" || item.category === selectedCategory;

      return yearMatch && categoryMatch;
    });
  }, [selectedYear, selectedCategory]);

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[260px_minmax(0,1fr)]
            lg:gap-7
          "
        >
          {/* Left Filters */}
          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start h-fit">
            <FilterSelect
              value={selectedYear}
              onChange={setSelectedYear}
              options={years}
              placeholder="All Years"
            />

            <FilterSelect
              value={selectedCategory}
              onChange={setSelectedCategory}
              options={categories}
              placeholder="All Categories"
            />
          </div>

          {/* Right Reports */}
          <div className="space-y-5">
            {filteredReports.length > 0 ? (
              filteredReports.map((report) => (
                <ReportCard
                  key={report.id}
                  title={report.title}
                  fileUrl={report.fileUrl}
                />
              ))
            ) : (
              <div className="rounded-[20px] bg-[#F1F1F1] px-6 py-6 font-futura text-[16px] text-[#666]">
                No reports found.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function Financial_Reports() {
//   const [reportsData, setReportsData] = useState<ReportItem[]>([]);
//   const [selectedYear, setSelectedYear] = useState("All");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const API_URL =
//     "http://localhost:5000/api/v1/posts?category=investor_relations&subCategory=financial_reports";

//   const BASE_URL = "http://localhost:5000";

//   const getFullFileUrl = (url: string) => {
//     if (!url) return "#";

//     if (url.startsWith("http")) {
//       return url;
//     }

//     return `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`;
//   };

//   useEffect(() => {
//     const fetchFinancialReports = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const res = await fetch(API_URL, {
//           cache: "no-store",
//         });

//         if (!res.ok) {
//           throw new Error("Failed to fetch financial reports");
//         }

//         const result = await res.json();

//         console.log("API RESULT:", result);

//         const allPosts = Array.isArray(result?.data)
//           ? result.data
//           : Array.isArray(result?.data?.posts)
//             ? result.data.posts
//             : Array.isArray(result?.posts)
//               ? result.posts
//               : Array.isArray(result?.results)
//                 ? result.results
//                 : [];

//         const financialReportsOnly = allPosts.filter((item: any) => {
//           return (
//             item.category === "investor_relations" &&
//             item.subCategory === "financial_reports"
//           );
//         });

//         const formattedData: ReportItem[] = financialReportsOnly.map(
//           (item: any) => ({
//             id: item._id || item.id,
//             title: item.title || "Untitled Report",
//             year: String(item.year || ""),
//             category:
//               item.reportCategory ||
//               item.type ||
//               item.categoryName ||
//               "Financial Reports",
//             fileUrl: getFullFileUrl(
//               item.pdfUrl || item.fileUrl || item.pdf?.url || item.pdf || "",
//             ),
//           }),
//         );

//         setReportsData(formattedData);
//       } catch (err: any) {
//         setError(err.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFinancialReports();
//   }, []);

//   const years = useMemo(() => {
//     return [
//       ...new Set(
//         reportsData
//           .map((item) => item.year)
//           .filter((year) => year && year !== ""),
//       ),
//     ];
//   }, [reportsData]);

//   const categories = useMemo(() => {
//     return [
//       ...new Set(
//         reportsData
//           .map((item) => item.category)
//           .filter((category) => category && category !== ""),
//       ),
//     ];
//   }, [reportsData]);

//   const filteredReports = useMemo(() => {
//     return reportsData.filter((item) => {
//       const yearMatch = selectedYear === "All" || item.year === selectedYear;
//       const categoryMatch =
//         selectedCategory === "All" || item.category === selectedCategory;

//       return yearMatch && categoryMatch;
//     });
//   }, [reportsData, selectedYear, selectedCategory]);

//   return (
//     <section className="w-full bg-white py-10 md:py-14">
//       <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div
//           className="
//             grid
//             grid-cols-1
//             gap-6
//             lg:grid-cols-[260px_minmax(0,1fr)]
//             lg:gap-7
//           "
//         >
//           <div className="space-y-5 lg:sticky lg:top-24 lg:self-start h-fit">
//             <FilterSelect
//               value={selectedYear}
//               onChange={setSelectedYear}
//               options={years}
//               placeholder="All Years"
//             />

//             <FilterSelect
//               value={selectedCategory}
//               onChange={setSelectedCategory}
//               options={categories}
//               placeholder="All Categories"
//             />
//           </div>

//           <div className="space-y-5">
//             {loading ? (
//               <div className="rounded-[20px] bg-[#F1F1F1] px-6 py-6 font-futura text-[16px] text-[#666]">
//                 Loading reports...
//               </div>
//             ) : error ? (
//               <div className="rounded-[20px] bg-[#F1F1F1] px-6 py-6 font-futura text-[16px] text-red-500">
//                 {error}
//               </div>
//             ) : filteredReports.length > 0 ? (
//               filteredReports.map((report) => (
//                 <ReportCard
//                   key={report.id}
//                   title={report.title}
//                   fileUrl={report.fileUrl}
//                 />
//               ))
//             ) : (
//               <div className="rounded-[20px] bg-[#F1F1F1] px-6 py-6 font-futura text-[16px] text-[#666]">
//                 No reports found.
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// Financial Reports Tab Section

type Card = {
  title: string;
  content: string;
};

type Tabs = "Karachi" | "Lahore" | "Islamabad";

const tabData = {
  Karachi: {
    paragraph: `The Securities and Exchange Commission of Pakistan (SECP) has
      formed committees for the resolution of small disputes between
      insurers and policyholders. In the case of any dispute, these
      committees aim to provide maximum relief. Three committees have
      been established in Islamabad, Lahore, and Karachi, each
      consisting of three members: a senior chartered accountant, a
      lawyer, and a representative of the Insurance Association of
      Pakistan (IAP) to handle grievances.`,
    cards: [
      {
        title: "Official Coordinator, Small Disputes Resolution Committee",
        content: "Direct no: 021-99002021 \nUAN: 021-111-117-327",
      },
      {
        title: "Securities and Exchange Commission of Pakistan",
        content: "Toll Free No: 080088008",
      },
    ],
  },
  Lahore: {
    paragraph: `The Securities and Exchange Commission of Pakistan (SECP) has
      formed committees for the resolution of small disputes between
      insurers and policyholders. In the case of any dispute, these
      committees aim to provide maximum relief. Three committees have
      been established in Islamabad, Lahore, and Karachi, each
      consisting of three members: a senior chartered accountant, a
      lawyer, and a representative of the Insurance Association of
      Pakistan (IAP) to handle grievances.`,
    cards: [
      {
        title: "Securities and Exchange Commission of Pakistan",
        content: "Direct no: 042-99014050 \nUAN: 042-111-117-327",
      },
      {
        title: "Securities and Exchange Commission of Pakistan",
        content: "Toll Free No: 080088008",
      },
    ],
  },
  Islamabad: {
    paragraph: `The Securities and Exchange Commission of Pakistan (SECP) has
      formed committees for the resolution of small disputes between
      insurers and policyholders. In the case of any dispute, these
      committees aim to provide maximum relief. Three committees have
      been established in Islamabad, Lahore, and Karachi, each
      consisting of three members: a senior chartered accountant, a
      lawyer, and a representative of the Insurance Association of
      Pakistan (IAP) to handle grievances.`,
    cards: [
      {
        title: "Official Coordinator, Small Disputes Resolution Committee",
        content: "Direct no: 051-9195391 \nUAN: 051-111-117-327",
      },
      {
        title: "Securities and Exchange Commission of Pakistan",
        content: "Toll Free No: 080088008",
      },
    ],
  },
};

export const Investor_Relations = () => {
  const tabs: Tabs[] = Object.keys(tabData) as Tabs[];
  const [activeTab, setActiveTab] = useState<Tabs>(tabs[0]);

  const { paragraph, cards } = tabData[activeTab];

  return (
    <>
      <Container>
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            {/* Top Content */}
            <div className="flex flex-col items-start gap-10 md:flex-row">
              {/* Left Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={img2}
                  alt="Investor Relations"
                  width={800}
                  height={500}
                  className="h-full w-full rounded-3xl object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="w-full space-y-6 md:w-1/2">
                <h2 className="font-futura text-xl font-bold text-[#424145]">
                  Contact person for Investors Relations
                </h2>

                <div className="space-y-2 text-gray-700">
                  <p className="font-futura text-sm font-normal leading-5 text-[#424145]">
                    <b> Mr. Imran Chagani</b> <br />
                    <b>Company Secretary</b>
                  </p>

                  <p className="pt-4 font-futura text-sm font-normal text-[#424145]">
                    Jubilee General Insurance Company Limited <br />
                    2nd Floor, Jubilee Insurance House, <br />
                    I.I. Chundrigar Road, P.O. Box: 4795 <br />
                    Karachi-74000, Pakistan.
                  </p>

                  <p className="font-futura text-sm font-normal leading-5 text-[#424145]">
                    UAN: +92 (21) 111-654-111 (Ext. 2203)
                  </p>

                  <p className="pt-4 font-futura text-sm font-normal text-[#424145]">
                    <span>
                      Timings: Monday to Friday 9:00 AM to 5:30 PM,
                      <br /> Lunch Break 1:00 PM to 2:00 PM on Fridays 1:00 PM
                      to 2:30 PM
                    </span>
                  </p>

                  <p className="font-futura text-sm font-normal leading-5 text-[#424145]">
                    Email:{" "}
                    <a
                      href="mailto:company.secretary@jubileegeneral.com.pk"
                      className="font-futura text-sm font-normal leading-5 text-[#424145] hover:underline"
                    >
                      company.secretary@jubileegeneral.com.pk
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-10 font-futura text-sm leading-relaxed text-gray-500">
              DISCLAIMER: “In case your complaint has not been properly
              redressed by us, you may lodge your complaint with Securities and
              Exchange Commission of Pakistan (the “SECP”). However, please note
              that SECP will entertain only those complaints which were at first
              directly requested to be redressed by the Company and the company
              has failed to redress the same. Further, the complaints that are
              not relevant to SECP’s regulatory domain/competence shall not be
              entertained.”
            </p>
          </div>
        </section>
      </Container>

      <section className=" pb-16 font-futura">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Left Image */}
            <div className="relative h-48 w-full">
              <Image
                src={img4}
                alt="Share Registrar"
                fill
                className="rounded-2xl object-cover"
              />
            </div>

            {/* Middle Content */}
            <div className="space-y-5 text-gray-700">
              <h3 className="text-[16px] font-bold text-gray-800">
                Company’s Share Registrar:
              </h3>

              <p className="text-sm font-normal">
                THK Associates (Pvt) Ltd. <br />
                Plot No.32-C, Jami Commercial Street 2, <br />
                D.H.A., Phase VII, Karachi-75500
                <br />
                UAN : (92-21) 111-000-322 <br />
                Tel : (92-21) 3531019-192-193
                <br />
                Email : sfc@thk.com.pk <br />
                Web : www.thk.com.pk
              </p>
            </div>

            {/* Auditor Image */}
            <div className="relative h-48 w-full">
              <Image
                src={img3}
                alt="Auditors"
                fill
                className="rounded-2xl object-cover"
              />
            </div>

            {/* Auditor Text */}
            <div className="space-y-4 text-gray-700">
              <h3 className="text-[16px] font-bold text-gray-800">
                Company’s Auditors:
              </h3>
              <p className="text-sm font-normal">
                KPMG Taseer Hadi & Co. Chartered Accountants.
                <br /> Request for Hard Copy of the Annual Report <br />
                Pages: 1 <br />
                Size: 29KB
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Form for Unpaid Dividend & UnClaimed Shares */}
      <section className="bg-[#858585]  h-[20vh] flex gap-2 items-center justify-center ">
        <Button
          onClick={() =>
            window.open(
              "/pdf/Request-Letter-for-Annual-Report.pdf",
              "_blank",
              "noopener,noreferrer",
            )
          }
          text="REQUEST ANNUAL REPORT"
          className="cursor-pointer hover:border-1 hover:border-[#BA0C2F]  rounded-full bg-[#BA0C2F] px-8 py-2 font-futura font-normal text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#BA0C2F] md:px-6 md:py-2"
        />
        <Button
          // onClick={() =>() }
          // window.open(
          //   "/pdf/Request-Letter-for-Annual-Report.pdf",
          //   "_blank",
          //   "noopener,noreferrer",
          // )

          text="Form for Unpaid Dividend & Unclaimed Shares"
          className="cursor-pointer border-1 border-[#BA0C2F] rounded-full bg-white px-8 py-2 font-futura font-normal text-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-[#FFFFFF] md:px-6 md:py-2"
        />
        {/* <p className="text-white font-futura ">
          <a href="">Form for Unpaid Dividend & Unclaimed Shares</a>
        </p> */}
      </section>

      {/* Section 2 */}
      <section className="py-16 font-futura">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="mb-8 text-4xl font-bold text-gray-800 uppercase">
            SECP Committees
          </h1>
          {/* Tabs */}
          <div className="mb-12 flex flex-wrap gap-4 md:gap-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer rounded-lg px-8 py-3 text-base transition-all duration-300 md:px-12 md:py-4 md:text-lg ${
                  activeTab === tab
                    ? "bg-[#BA0C2F] font-bold text-white shadow-md"
                    : "bg-white font-normal text-gray-600 shadow-sm"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid items-start gap-10 md:grid-cols-3">
            {/* Left Paragraph */}
            <div className="font-futura text-sm font-normal leading-relaxed text-gray-600">
              <p>{paragraph}</p>
            </div>

            {/* Right Cards */}
            <div className="col-span-2 grid gap-6 sm:grid-cols-2">
              {cards.map((card, index) => (
                <div key={index} className="rounded-2xl bg-white p-8 shadow-md">
                  <h3 className="mb-4 font-futura text-[16px] font-bold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="whitespace-pre-line font-futura text-sm font-normal text-gray-600">
                    {card.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
    </>
  );
};

export const Notice_Of_AGM = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const years = [...new Set(Notice_Of_AGMData.map((item) => item.year))];
  const categories = [
    ...new Set(Notice_Of_AGMData.map((item) => item.category)),
  ];

  const filteredReports = useMemo(() => {
    return Notice_Of_AGMData.filter((item) => {
      const yearMatch = selectedYear === "All" || item.year === selectedYear;
      const categoryMatch =
        selectedCategory === "All" || item.category === selectedCategory;

      return yearMatch && categoryMatch;
    });
  }, [selectedYear, selectedCategory]);

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[260px_minmax(0,1fr)]
            lg:gap-7
          "
        >
          {/* Left Filters */}
          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start h-fit">
            <FilterSelect
              value={selectedYear}
              onChange={setSelectedYear}
              options={years}
              placeholder="All Years"
            />

            <FilterSelect
              value={selectedCategory}
              onChange={setSelectedCategory}
              options={categories}
              placeholder="All Categories"
            />
          </div>

          {/* Right Reports */}
          <div className="space-y-5">
            {filteredReports.length > 0 ? (
              filteredReports.map((report) => (
                <ReportCard
                  key={report.id}
                  title={report.title}
                  fileUrl={report.fileUrl}
                />
              ))
            ) : (
              <div className="rounded-[20px] bg-[#F1F1F1] px-6 py-6 font-futura text-[16px] text-[#666]">
                No reports found.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Corporate_Governance_Documents = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const years = [
    ...new Set(Corporate_Governance_DocumentsData.map((item) => item.year)),
  ];
  const categories = [
    ...new Set(Corporate_Governance_DocumentsData.map((item) => item.category)),
  ];

  const filteredReports = useMemo(() => {
    return Corporate_Governance_DocumentsData.filter((item) => {
      const yearMatch = selectedYear === "All" || item.year === selectedYear;
      const categoryMatch =
        selectedCategory === "All" || item.category === selectedCategory;

      return yearMatch && categoryMatch;
    });
  }, [selectedYear, selectedCategory]);
  return (
    <>
      <section className="w-full bg-white py-10 md:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[260px_minmax(0,1fr)]
            lg:gap-7
          "
          >
            {/* Left Filters */}
            <div className="space-y-5 lg:sticky lg:top-24 lg:self-start h-fit">
              {/* <FilterSelect
                value={selectedYear}
                onChange={setSelectedYear}
                options={years}
                placeholder="All Years"
              /> */}

              <FilterSelect
                value={selectedCategory}
                onChange={setSelectedCategory}
                options={categories}
                placeholder="All Categories"
              />
            </div>

            {/* Right Reports */}
            <div className="space-y-5">
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <ReportCard
                    key={report.id}
                    title={report.title}
                    fileUrl={report.fileUrl}
                  />
                ))
              ) : (
                <div className="rounded-[20px] bg-[#F1F1F1] px-6 py-6 font-futura text-[16px] text-[#666]">
                  No reports found.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Six_Year_Financial = () => {
  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[260px_minmax(0,1fr)]
            lg:gap-7
          "
        >
          {/* Left Tab */}
          <div>
            {/* <div
              className="
                flex
                h-[56px]
                w-full
                items-center
                rounded-[16px]
                bg-[#E9E9EB]
                px-5
                font-futura
                text-[15px]
                font-normal
                text-[#111111]
                md:h-[62px]
                md:text-[16px]
              "
            >
              Highlights
            </div> */}
          </div>

          {/* Right Card */}
          <div>
            <div
              className="
                flex
                min-h-[116px]
                items-center
                justify-between
                gap-5
                rounded-[20px]
                bg-[#F1F1F1]
                px-6
                py-5
                transition
                hover:bg-[#ebebeb]
                md:min-h-[128px]
                md:px-7
                md:py-6
              "
            >
              <div className="min-w-0 flex-1">
                <h3
                  className="
                    max-w-[760px]
                    font-futura
                    text-[20px]
                    font-semibold
                    leading-[1.22]
                    tracking-[-0.3px]
                    text-[#111111]
                    md:text-[24px]
                    lg:text-[26px]
                  "
                >
                  6 years Financial Highlights & Ratios
                </h3>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    mt-4
                    inline-block
                    font-futura
                    text-[15px]
                    font-normal
                    leading-none
                    text-[#4F46E5]
                    hover:underline
                    md:text-[16px]
                  "
                >
                  Download
                </a>
              </div>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Download 6 years Financial Highlights & Ratios"
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  transition
                  hover:translate-x-1
                "
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 5L16 12L8 19"
                    stroke="#111111"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const EOGM = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const years = [...new Set(Notice_Of_EOGMData.map((item) => item.year))];
  const categories = [
    ...new Set(Notice_Of_EOGMData.map((item) => item.category)),
  ];

  const filteredReports = useMemo(() => {
    return Notice_Of_EOGMData.filter((item) => {
      const yearMatch = selectedYear === "All" || item.year === selectedYear;
      const categoryMatch =
        selectedCategory === "All" || item.category === selectedCategory;

      return yearMatch && categoryMatch;
    });
  }, [selectedYear, selectedCategory]);

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[260px_minmax(0,1fr)]
            lg:gap-7
          "
        >
          {/* Left Filters */}
          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start h-fit">
            <FilterSelect
              value={selectedYear}
              onChange={setSelectedYear}
              options={years}
              placeholder="All Years"
            />

            <FilterSelect
              value={selectedCategory}
              onChange={setSelectedCategory}
              options={categories}
              placeholder="All Categories"
            />
          </div>

          {/* Right Reports */}
          <div className="space-y-5">
            {filteredReports.length > 0 ? (
              filteredReports.map((report) => (
                <ReportCard
                  key={report.id}
                  title={report.title}
                  fileUrl={report.fileUrl}
                />
              ))
            ) : (
              <div className="rounded-[20px] bg-[#F1F1F1] px-6 py-6 font-futura text-[16px] text-[#666]">
                No reports found.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Profile_of_the_Candidate = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const years = [
    ...new Set(Profile_Of_The_Candidate_Data.map((item) => item.year)),
  ];
  const categories = [
    ...new Set(Profile_Of_The_Candidate_Data.map((item) => item.category)),
  ];

  const filteredReports = useMemo(() => {
    return Profile_Of_The_Candidate_Data.filter((item) => {
      const yearMatch = selectedYear === "All" || item.year === selectedYear;
      const categoryMatch =
        selectedCategory === "All" || item.category === selectedCategory;

      return yearMatch && categoryMatch;
    });
  }, [selectedYear, selectedCategory]);
  return (
    <>
      <section className="w-full bg-white py-10 md:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[260px_minmax(0,1fr)]
            lg:gap-7
          "
          >
            {/* Left Filters */}
            <div className="space-y-5 lg:sticky lg:top-24 lg:self-start h-fit">
              <FilterSelect
                value={selectedCategory}
                onChange={setSelectedCategory}
                options={categories}
                placeholder="All Categories"
              />
            </div>

            {/* Right Reports */}
            <div className="space-y-5">
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <ReportCard
                    key={report.id}
                    title={report.title}
                    fileUrl={report.fileUrl}
                  />
                ))
              ) : (
                <div className="rounded-[20px] bg-[#F1F1F1] px-6 py-6 font-futura text-[16px] text-[#666]">
                  No reports found.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

type GrowthItem = {
  id: number;
  title: string;
  image: any;
};

const Growth_At_A_Galance_Data: GrowthItem[] = [
  {
    id: 1,
    title: "Capital & Reserves",
    image: img1,
  },
  {
    id: 2,
    title: "Assets & Liabilities",
    image: img13,
  },
  {
    id: 3,
    title: "Gross Premium and Net Premium",
    image: img14,
  },
  {
    id: 4,
    title: "Net Premium and Underwriting Result",
    image: img15,
  },
  {
    id: 5,
    title: "Investment Income",
    image: img5,
  },
  {
    id: 6,
    title: "Profit (Loss) Before Tax and After Tax",
    image: img6,
  },
  {
    id: 7,
    title: "Earning Per Share: Pre Tax and After Tax",
    image: img7,
  },
  {
    id: 8,
    title: "Dividend",
    image: img8,
  },
  {
    id: 9,
    title: "Liquid Assets / Total Assets %",
    image: img9,
  },
  {
    id: 10,
    title: "Equity / Total Assets %",
    image: img10,
  },
  {
    id: 11,
    title: "Investments & Cash and bank deposits",
    image: img11,
  },
  {
    id: 12,
    title: "Market value vs Breakup value per share",
    image: img12,
  },
];

const GrowthCard = ({ title, image }: GrowthItem) => {
  return (
    <div className="overflow-hidden  ">
      <div className="relative h-[400px] w-full ">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <h3 className="mt-4 font-futura text-[17px] font-semibold leading-[1.3] text-[#111111] md:text-[18px]">
        {title}
      </h3>
    </div>
  );
};

export const Growth_At_A_Galance = () => {
  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[260px_minmax(0,1fr)]
            lg:gap-7
          "
        >
          {/* Left Static Tab */}
          <div>
            {/* <div
              className="
                flex
                h-[56px]
                w-full
                items-center
                rounded-[16px]
                bg-[#E9E9EB]
                px-5
                font-futura
                text-[15px]
                font-normal
                text-[#111111]
                md:h-[62px]
                md:text-[16px]
              "
            >
              Highlight
            </div> */}
          </div>

          {/* Right Image Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Growth_At_A_Galance_Data.map((item) => (
              <GrowthCard
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const JubileeStockUpdates = () => {
  return (
    <div className="pb-10"></div>
    // <section className="w-full bg-white py-10">
    //   <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    //     <p className="mb-5 max-w-[650px] font-futura text-[16px] font-normal leading-[1.6] text-[#4A4A4A]">
    //       View the latest Jubilee General Insurance stock updates and stock
    //       information on the Pakistan Stock Exchange.
    //     </p>

    //     <a
    //       href="https://dps.psx.com.pk/company/JGICL"
    //       target="_blank"
    //       rel="noreferrer"
    //       className="inline-flex rounded-full bg-[#BA0C2F] px-8 py-3 font-futura text-[14px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#970A27]"
    //     >
    //       View Stock Updates
    //     </a>
    //   </div>
    // </section>
  );
};
