import React from "react";

export type Plan = {
  key: string;
  label: string;
};

export type Cell = {
  content: React.ReactNode;
  colSpan?: number;
  align?: "left" | "center";
};

export type Row = {
  label: React.ReactNode;
  cells: Cell[];
};

export type Section = {
  title: string;
  showPlansHeader?: boolean;
  rows: Row[];
};

export const parentsCarePlusPlans: Plan[] = [
  { key: "silver", label: "Silver" },
  { key: "gold", label: "Gold" },
  { key: "platinum", label: "Platinum" },
];

export const familyCarePlusPlans: Plan[] = [
  { key: "silver", label: "Silver" },
  { key: "gold", label: "Gold" },
  { key: "platinum", label: "Platinum" },
];
export const personalCarePlusPlans: Plan[] = [
  { key: "bronze", label: "	Bronze" },
  { key: "silver", label: "Silver" },
  { key: "gold", label: "Gold" },
  { key: "diamond", label: "Diamond" },
  { key: "platinum", label: "Platinum" },
];
export const lifeCarePlusPlans: Plan[] = [
  { key: "silver", label: "Silver" },
  { key: "gold", label: "Gold" },
  { key: "diamond", label: "Diamond" },
  { key: "platinum", label: "Platinum" },
];
export const parentPlusPlans: Plan[] = [
  { key: "silver", label: "Silver" },
  { key: "gold", label: "Gold" },
  { key: "platinum", label: "Platinum" },
  { key: "titanium", label: "Titanium" },
  { key: "titaniumPlus", label: "Titanium Plus" },
];
export const herCarePlusPlans: Plan[] = [
  { key: "gold", label: "Gold" },
  { key: "diamond", label: "Diamond" },
  { key: "platinum", label: "Platinum" },
];
export const parentsCarePlusSections: Section[] = [
  {
    title: "Product Details",
    showPlansHeader: true,
    rows: [
      {
        label: "Annual Premium",
        cells: [
          { content: "PKR 20,000" },
          { content: "PKR 44,000" },
          { content: "PKR 87,000" },
        ],
      },
      {
        label: "Eligibility Age (For New Plans)",
        cells: [
          {
            content: "45 to 70 years",
            colSpan: 3,
            align: "center",
          },
        ],
      },
      {
        label: "Eligibility Age (For Renewals)",
        cells: [
          {
            content: "71 to 75 years",
            colSpan: 3,
            align: "center",
          },
        ],
      },
      {
        label: "Plan Term",
        cells: [
          {
            content: "1 year",
            colSpan: 3,
            align: "center",
          },
        ],
      },
      {
        label: "Waiting Period",
        cells: [
          {
            content: "30 Days",
            colSpan: 3,
            align: "center",
          },
        ],
      },
    ],
  },

  {
    title: "Benefit Details",
    showPlansHeader: true,
    rows: [
      {
        label:
          "Limit Per Person (annual) Hospital Expense Benefit – (Total Room Rent, Hospital/Surgical Expenses for a minimum 24 hours & OPD)",
        cells: [
          { content: "Rs. 90,000" },
          { content: "Rs. 230,000" },
          { content: "Rs. 460,000" },
        ],
      },
      {
        label: "Annual OPD Benefit",
        cells: [
          { content: "PKR 10,000" },
          { content: "PKR 20,000" },
          { content: "PKR 40,000" },
        ],
      },
      {
        label: "Total Parents Care Plus Coverage",
        cells: [
          { content: "PKR 100,000" },
          { content: "PKR 250,000" },
          { content: "PKR 500,000" },
        ],
      },
    ],
  },

  {
    title: "SUB LIMITS",
    showPlansHeader: false,
    rows: [
      {
        label: "Annual OPD Benefit",
        cells: [
          { content: "PKR 10,000" },
          { content: "PKR 20,000" },
          { content: "PKR 40,000" },
        ],
      },
      {
        label: "Room Limit per Day",
        cells: [
          { content: "PKR 10,000" },
          { content: "PKR 25,000" },
          { content: "PKR 50,000" },
        ],
      },
      {
        label: "ICU / Operation Theatre Charges",
        cells: [
          { content: "Actual" },
          { content: "Actual" },
          { content: "Actual" },
        ],
      },
      {
        label: "Ambulance - per Hospitalization / per policy",
        cells: [
          { content: "PKR 3,000" },
          { content: "PKR 3,000" },
          { content: "PKR 3,000" },
        ],
      },
      {
        label: "Pre-Hospitalization",
        cells: [
          { content: "30 days" },
          { content: "30 days" },
          { content: "30 days" },
        ],
      },
      {
        label: "Post-Hospitalization",
        cells: [
          { content: "30 days" },
          { content: "30 days" },
          { content: "30 days" },
        ],
      },
      {
        label: "Post Hospitalization – Nursing Care Benefit: PKR 20,000 / Year",
        cells: [
          {
            colSpan: 3,
            content:
              "The product also provides a nursing care benefit of PKR 20,000 in case of hospitalization due to paralysis, stroke or fracture and nursing care is advised by the attending physician. The benefit is payable once a year only.",
          },
        ],
      },
      {
        label:
          "Day-Care Procedures & Specialized Investigations in outpatient setting including but not limited to: Dialysis, Cataract Surgery, MRI, CT Scan, Endoscopy, Thallium Scan, Angiography, and Treatment of Fracture. Emergency dental treatment due to accidental injuries within 48 hours (for pain relief only).",
        cells: [
          { content: "Covered" },
          { content: "Covered" },
          { content: "Covered" },
        ],
      },
      {
        label: "Pre-Existing Conditions & Congenital Anomalies",
        cells: [
          {
            colSpan: 3,
            content: (
              <ul className="space-y-3 pl-5">
                <li className="list-square">1st Year: 10% of Annual Limit</li>
                <li className="list-square">2nd Year: 20% of Annual Limit</li>
                <li className="list-square">3rd Year: 30% of Annual Limit</li>
                <li className="list-square">
                  4th Year & Onward: 50% of Annual Limit
                </li>
                <li className="list-square italic">
                  *Not covered in Year 1 for individuals aged 65–70
                </li>
              </ul>
            ),
          },
        ],
      },
      {
        label:
          "Online Doctor Consultation: Online Audio / Video consultation through our Partner",
        cells: [
          { content: "Covered" },
          { content: "Covered" },
          { content: "Covered" },
        ],
      },
    ],
  },
];
export const familyHealthCareSections: Section[] = [
  {
    title: "Silver Plan",
    showPlansHeader: false,
    rows: [
      {
        label: "Hospitalization Limit",
        cells: [
          {
            content: "275,000",
            colSpan: 3,
            align: "center",
          },
        ],
      },
      {
        label: "Room Entitlement",
        cells: [
          {
            content: "Semi-Private",
            colSpan: 3,
            align: "center",
          },
        ],
      },
      {
        label: "Emergency Local Ambulance Exp",
        cells: [
          {
            content: "2,500",
            colSpan: 3,
            align: "center",
          },
        ],
      },
      {
        label: "Age Band",
        cells: [
          { content: "Family A" },
          { content: "Family B" },
          { content: "Family C" },
        ],
      },
      {
        label: "18 - 24",
        cells: [
          { content: "27,440" },
          { content: "34,140" },
          { content: "40,810" },
        ],
      },
      {
        label: "25 - 29",
        cells: [
          { content: "28,215" },
          { content: "34,925" },
          { content: "41,575" },
        ],
      },
      {
        label: "30 - 34",
        cells: [
          { content: "29,750" },
          { content: "36,450" },
          { content: "43,125" },
        ],
      },
      {
        label: "35 - 39",
        cells: [
          { content: "31,890" },
          { content: "38,590" },
          { content: "45,235" },
        ],
      },
      {
        label: "40 - 44",
        cells: [
          { content: "34,965" },
          { content: "41,675" },
          { content: "48,325" },
        ],
      },
      {
        label: "45 - 49",
        cells: [
          { content: "41,165" },
          { content: "47,850" },
          { content: "54,525" },
        ],
      },
      {
        label: "50 - 54 Renewals only",
        cells: [
          { content: "53,140" },
          { content: "59,850" },
          { content: "66,485" },
        ],
      },
      {
        label: "55 - 59 Renewals only",
        cells: [
          { content: "59,315" },
          { content: "66,020" },
          { content: "72,675" },
        ],
      },
    ],
  },

  {
    title: "Gold Plan",
    showPlansHeader: false,
    rows: [
      {
        label: "Hospitalization Limit",
        cells: [
          {
            content: "550,000",
            colSpan: 3,
            align: "center",
          },
        ],
      },
      {
        label: "Room Entitlement",
        cells: [
          {
            content: "Private",
            colSpan: 3,
            align: "center",
          },
        ],
      },
      {
        label: "Emergency Local Ambulance Exp",
        cells: [
          {
            content: "3,500",
            colSpan: 3,
            align: "center",
          },
        ],
      },
      {
        label: "Age Band",
        cells: [
          { content: "Family A" },
          { content: "Family B" },
          { content: "Family C" },
        ],
      },
      {
        label: "18 - 24",
        cells: [
          { content: "49,875" },
          { content: "61,750" },
          { content: "73,650" },
        ],
      },
      {
        label: "25 - 29",
        cells: [
          { content: "51,815" },
          { content: "63,690" },
          { content: "75,575" },
        ],
      },
      {
        label: "30 - 34",
        cells: [
          { content: "55,675" },
          { content: "67,565" },
          { content: "79,440" },
        ],
      },
      {
        label: "35 - 39",
        cells: [
          { content: "59,930" },
          { content: "71,800" },
          { content: "83,700" },
        ],
      },
      {
        label: "40 - 44",
        cells: [
          { content: "67,275" },
          { content: "79,140" },
          { content: "91,050" },
        ],
      },
      {
        label: "45 - 49",
        cells: [
          { content: "80,400" },
          { content: "92,275" },
          { content: "104,200" },
        ],
      },
      {
        label: "50 - 54 Renewals only",
        cells: [
          { content: "106,890" },
          { content: "118,750" },
          { content: "130,650" },
        ],
      },
      {
        label: "55 - 59 Renewals only",
        cells: [
          { content: "121,180" },
          { content: "133,100" },
          { content: "144,950" },
        ],
      },
    ],
  },

  {
    title: "Diamond Plan",
    showPlansHeader: false,
    rows: [
      {
        label: "Hospitalization Limit",
        cells: [
          {
            content: "750,000",
            colSpan: 3,
            align: "center",
          },
        ],
      },
      {
        label: "Room Entitlement",
        cells: [
          {
            content: "Private",
            colSpan: 3,
            align: "center",
          },
        ],
      },
      {
        label: "Emergency Local Ambulance Exp",
        cells: [
          {
            content: "4,500",
            colSpan: 3,
            align: "center",
          },
        ],
      },
      {
        label: "Age Band",
        cells: [
          { content: "Family A" },
          { content: "Family B" },
          { content: "Family C" },
        ],
      },
      {
        label: "18 - 24",
        cells: [
          { content: "69,800" },
          { content: "86,400" },
          { content: "103,100" },
        ],
      },
      {
        label: "25 - 29",
        cells: [
          { content: "72,500" },
          { content: "89,125" },
          { content: "105,770" },
        ],
      },
      {
        label: "30 - 34",
        cells: [
          { content: "77,915" },
          { content: "94,530" },
          { content: "111,150" },
        ],
      },
      {
        label: "35 - 39",
        cells: [
          { content: "83,850" },
          { content: "100,475" },
          { content: "117,150" },
        ],
      },
      {
        label: "40 - 44",
        cells: [
          { content: "94,140" },
          { content: "110,765" },
          { content: "127,380" },
        ],
      },
      {
        label: "45 - 49",
        cells: [
          { content: "112,525" },
          { content: "129,150" },
          { content: "145,780" },
        ],
      },
      {
        label: "50 - 54 Renewals only",
        cells: [
          { content: "149,600" },
          { content: "166,215" },
          { content: "182,850" },
        ],
      },
      {
        label: "55 - 59 Renewals only",
        cells: [
          { content: "169,575" },
          { content: "186,225" },
          { content: "202,860" },
        ],
      },
    ],
  },

  {
    title: "Platinum Plan",
    showPlansHeader: false,
    rows: [
      {
        label: "Hospitalization Limit",
        cells: [
          {
            content: "1,000,000",
            colSpan: 3,
            align: "center",
          },
        ],
      },
      {
        label: "Room Entitlement",
        cells: [
          {
            content: "Private",
            colSpan: 3,
            align: "center",
          },
        ],
      },
      {
        label: "Emergency Local Ambulance Exp",
        cells: [
          {
            content: "5,500",
            colSpan: 3,
            align: "center",
          },
        ],
      },
      {
        label: "Age Band",
        cells: [
          { content: "Family A" },
          { content: "Family B" },
          { content: "Family C" },
        ],
      },
      {
        label: "18 - 24",
        cells: [
          { content: "91,075" },
          { content: "112,325" },
          { content: "133,975" },
        ],
      },
      {
        label: "25 - 29",
        cells: [
          { content: "94,225" },
          { content: "115,865" },
          { content: "137,475" },
        ],
      },
      {
        label: "30 - 34",
        cells: [
          { content: "101,275" },
          { content: "122,900" },
          { content: "144,500" },
        ],
      },
      {
        label: "35 - 39",
        cells: [
          { content: "109,000" },
          { content: "130,625" },
          { content: "152,270" },
        ],
      },
      {
        label: "40 - 44",
        cells: [
          { content: "122,350" },
          { content: "143,990" },
          { content: "165,600" },
        ],
      },
      {
        label: "45 - 49",
        cells: [
          { content: "146,280" },
          { content: "167,875" },
          { content: "189,500" },
        ],
      },
      {
        label: "50 - 54 Renewals only",
        cells: [
          { content: "194,465" },
          { content: "216,100" },
          { content: "237,700" },
        ],
      },
      {
        label: "55 - 59 Renewals only",
        cells: [
          { content: "220,450" },
          { content: "242,100" },
          { content: "263,720" },
        ],
      },
    ],
  },
];
export const personalHealthCareSections: Section[] = [
  {
    title: "Personal HealthCare",
    showPlansHeader: true,

    rows: [
      {
        label: "Hospitalization Limit:",
        cells: [
          { content: "125,000" },
          { content: "275,000" },
          { content: "550,000" },
          { content: "750,000" },
          { content: "1,000,000" },
        ],
      },
      {
        label: "Room Entitlement:",
        cells: [
          { content: "General Ward" },
          { content: "Semi-Private" },
          { content: "Private" },
          { content: "Private" },
          { content: "Private" },
        ],
      },
      {
        label: "Emergency Local Ambulance",
        cells: [
          { content: "1,500" },
          { content: "2,500" },
          { content: "3,500" },
          { content: "4,500" },
          { content: "5,500" },
        ],
      },
      {
        label: "Age Band",
        cells: [
          { content: "Bronze" },
          { content: "Silver" },
          { content: "Gold" },
          { content: "Diamond" },
          { content: "Platinum" },
        ],
      },
      {
        label: "Max Entry Age 18 - 24",
        cells: [
          { content: "6,350" },
          { content: "11,015" },
          { content: "19,440" },
          { content: "26,765" },
          { content: "34,440" },
        ],
      },
      {
        label: "25 - 29",
        cells: [
          { content: "7,138" },
          { content: "12,390" },
          { content: "22,020" },
          { content: "30,365" },
          { content: "39,125" },
        ],
      },
      {
        label: "30 - 34",
        cells: [
          { content: "8,838" },
          { content: "15,875" },
          { content: "28,170" },
          { content: "38,990" },
          { content: "50,340" },
        ],
      },
      {
        label: "35 - 39",
        cells: [
          { content: "9,525" },
          { content: "16,965" },
          { content: "30,340" },
          { content: "42,000" },
          { content: "54,250" },
        ],
      },
      {
        label: "40 - 44",
        cells: [
          { content: "10,700" },
          { content: "19,230" },
          { content: "34,500" },
          { content: "47,840" },
          { content: "61,840" },
        ],
      },
      {
        label: "45 - 49",
        cells: [
          { content: "12,513" },
          { content: "23,020" },
          { content: "41,050" },
          { content: "57,020" },
          { content: "73,780" },
        ],
      },
      {
        label: "Renewals only 50 - 54",
        cells: [
          { content: "17,851" },
          { content: "33,130" },
          { content: "58,890" },
          { content: "82,000" },
          { content: "106,265" },
        ],
      },
      {
        label: "Renewals only 55 - 59",
        cells: [
          { content: "21,425" },
          { content: "40,270" },
          { content: "73,175" },
          { content: "101,990" },
          { content: "132,230" },
        ],
      },
    ],
  },
];

export const lifeStyleCareSections: Section[] = [
  {
    title: "LifeStyleCare",
    showPlansHeader: true,
    rows: [
      {
        label: "Hospitalization Limit:",
        cells: [
          { content: "300,000" },
          { content: "500,000" },
          { content: "700,000" },
          { content: "1,000,000" },
        ],
      },
      {
        label: "Age Band",
        cells: [
          { content: "Silver" },
          { content: "Gold" },
          { content: "Diamond" },
          { content: "Platinum" },
        ],
      },
      {
        label: "Net Premium",
        cells: [
          { content: "Net Premium" },
          { content: "Net Premium" },
          { content: "Net Premium" },
          { content: "Net Premium" },
        ],
      },
      {
        label: "Max Entry Age 18 - 35",
        cells: [
          { content: "2,280" },
          { content: "3,330" },
          { content: "4,380" },
          { content: "5,940" },
        ],
      },
      {
        label: "36 - 40",
        cells: [
          { content: "3,180" },
          { content: "4,810" },
          { content: "6,480" },
          { content: "8,940" },
        ],
      },
      {
        label: "41 - 45",
        cells: [
          { content: "4,540" },
          { content: "7,080" },
          { content: "9,600" },
          { content: "13,440" },
        ],
      },
      {
        label: "46 - 50",
        cells: [
          { content: "7,200" },
          { content: "11,520" },
          { content: "15,840" },
          { content: "22,320" },
        ],
      },
      {
        label: "Renewals Only 51 - 55",
        cells: [
          { content: "13,170" },
          { content: "21,460" },
          { content: "25,980" },
          { content: "36,780" },
        ],
      },
      {
        label: "Renewals Only 56 - 60",
        cells: [
          { content: "20,210" },
          { content: "33,210" },
          { content: "40,260" },
          { content: "57,240" },
        ],
      },
    ],
  },
];
export const parentsCareCoverageSections: Section[] = [
  {
    title: "Benefit Plan",
    showPlansHeader: true,
    rows: [
      {
        label:
          "Limit Per Person (annual) Hospital Expense Benefit - (Total Room Rent, Hospital/Surgical Expenses for a minimum 24 hours)",
        cells: [
          { content: "Rs. 200,000" },
          { content: "Rs. 300,000" },
          { content: "Rs. 500,000" },
          { content: "Rs. 700,000" },
          { content: "Rs. 1,000,000" },
        ],
      },
      {
        label: "SUBLIMITS:",
        cells: [
          { content: "" },
          { content: "" },
          { content: "" },
          { content: "" },
          { content: "" },
        ],
      },
      {
        label: "Room rent",
        cells: [
          { content: "Semi Private" },
          { content: "Private" },
          { content: "Private" },
          { content: "Private" },
          { content: "Private" },
        ],
      },
      {
        label: "ICU / Operation Theatre charges",
        cells: [
          { content: "Actual" },
          { content: "Actual" },
          { content: "Actual" },
          { content: "Actual" },
          { content: "Actual" },
        ],
      },
      {
        label: "Ambulance - per Hospitalization / per policy",
        cells: [
          { content: "3000" },
          { content: "3000" },
          { content: "3000" },
          { content: "3000" },
          { content: "3000" },
        ],
      },
      {
        label: "Pre Hospitalization",
        cells: [
          { content: "30 days" },
          { content: "30 days" },
          { content: "30 days" },
          { content: "30 days" },
          { content: "30 days" },
        ],
      },
      {
        label: "Post Hospitalization",
        cells: [
          { content: "30 days" },
          { content: "30 days" },
          { content: "30 days" },
          { content: "30 days" },
          { content: "30 days" },
        ],
      },
      {
        label: "Post Hospitalization - Nursing Care Benefit: PKR 20,000 / Year",
        cells: [
          {
            content:
              "The product also provides a nursing care benefit of PKR 20,000 in case of hospitalization due to paralysis, stroke or fracture and nursing care is advised by the attending physician. This benefit is payable once a year only.",
            colSpan: 5,
            align: "left",
          },
        ],
      },
      {
        label:
          "Day-Care Procedures & Specialized Investigations in outpatient setting including but not limited to: Dialysis, Cataract Surgery, MRI, CT Scan, Endoscopy, Thallium Scan, Angiography, and Treatment of Fracture. Emergency dental treatment due to accidental injuries within 48 hours (for pain relief only).",
        cells: [
          { content: "Covered" },
          { content: "Covered" },
          { content: "Covered" },
          { content: "Covered" },
          { content: "Covered" },
        ],
      },
      {
        label: "Pre Existing Conditions & Congenital Anomalies Coverage",
        cells: [
          {
            content:
              "1st year 10% of Annual Limit\n2nd year 20% of Annual Limit\n3rd year 30% of Annual Limit\n4th year & onward 50% of Annual Limit",
          },
          {
            content:
              "1st year 10% of Annual Limit\n2nd year 20% of Annual Limit\n3rd year 30% of Annual Limit\n4th year & onward 50% of Annual Limit",
          },
          {
            content:
              "1st year 10% of Annual Limit\n2nd year 20% of Annual Limit\n3rd year 30% of Annual Limit\n4th year & onward 50% of Annual Limit",
          },
          {
            content:
              "1st year 10% of Annual Limit\n2nd year 20% of Annual Limit\n3rd year 30% of Annual Limit\n4th year & onward 50% of Annual Limit",
          },
          {
            content:
              "1st year 10% of Annual Limit\n2nd year 20% of Annual Limit\n3rd year 30% of Annual Limit\n4th year & onward 50% of Annual Limit",
          },
        ],
      },
      {
        label:
          'Online Doctor Consultation*: Online Audio/Video consultation through our Partner "Sehat Kahani".',
        cells: [
          { content: "Covered" },
          { content: "Covered" },
          { content: "Covered" },
          { content: "Covered" },
          { content: "Covered" },
        ],
      },
    ],
  },

  {
    title: "Premium Details",
    showPlansHeader: true,
    rows: [
      {
        label: "New Entry 45 - 50 Years",
        cells: [
          { content: "22,800" },
          { content: "37,450" },
          { content: "63,000" },
          { content: "93,390" },
          { content: "107,365" },
        ],
      },
      {
        label: "New Entry 51 - 55 Years",
        cells: [
          { content: "28,060" },
          { content: "40,260" },
          { content: "69,360" },
          { content: "99,800" },
          { content: "114,635" },
        ],
      },
      {
        label: "New Entry 56 - 60 Years",
        cells: [
          { content: "30,890" },
          { content: "46,680" },
          { content: "78,845" },
          { content: "112,460" },
          { content: "129,330" },
        ],
      },
      {
        label: "New Entry 61 - 65 Years",
        cells: [
          { content: "34,560" },
          { content: "50,760" },
          { content: "89,540" },
          { content: "132,960" },
          { content: "152,760" },
        ],
      },
      {
        label: "Renewals Only 66 - 70 Years",
        cells: [
          { content: "38,110" },
          { content: "52,830" },
          { content: "100,450" },
          { content: "160,020" },
          { content: "183,300" },
        ],
      },
    ],
  },
];
export const parentsCareCoverageNote =
  '* Online Doctor Consultation is being provided by, owned and operated by a third party "Sehat Kahani", over which Jubilee General has no control, neither Jubilee assumes any liability arising due to the quality of service being provided by the third party vendor.';

export const herCareSections: Section[] = [
  {
    title: "HerCare Premium Table (PKR)",
    showPlansHeader: true,
    rows: [
      {
        label: "Sum Covered PKR",
        cells: [
          { content: "500,000/-" },
          { content: "750,000/-" },
          { content: "1,000,000/-" },
        ],
      },
      {
        label: "Age Bands",
        cells: [
          { content: "Gold" },
          { content: "Diamond" },
          { content: "Platinum" },
        ],
      },
      {
        label: "Max Entry Age 18 - 35",
        cells: [
          { content: "3,000" },
          { content: "4,680" },
          { content: "5,340" },
        ],
      },
      {
        label: "36 - 40",
        cells: [
          { content: "4,320" },
          { content: "6,960" },
          { content: "8,040" },
        ],
      },
      {
        label: "41 - 45",
        cells: [
          { content: "6,360" },
          { content: "10,380" },
          { content: "12,120" },
        ],
      },
      {
        label: "46 - 50",
        cells: [
          { content: "10,380" },
          { content: "17,100" },
          { content: "20,100" },
        ],
      },
      {
        label: "Renewals Only 51 - 55",
        cells: [
          { content: "19,320" },
          { content: "28,080" },
          { content: "33,120" },
        ],
      },
      {
        label: "Renewals Only 56 - 60",
        cells: [
          { content: "29,880" },
          { content: "43,560" },
          { content: "51,600" },
        ],
      },
    ],
  },
];

export const herCareNote =
  "Note: Above rates are inclusive FIF & Stamp duty but Excluding 4% advance tax for non filers.";
export const parentsCarePlusNote = (
  <>
    <strong>Note:</strong> Above rates are inclusive of FIF & Stamp duty but
    excluding 4% advance tax for non-filers.
  </>
);

export const travelInsurancePlans: Plan[] = [
  { key: "tenure", label: "Tenure" },
  { key: "stayLimit", label: "Stay Limit" },
  { key: "individual", label: "Individual" },
  { key: "family", label: "Family" },
];

export const travelInsuranceSections: Section[] = [
  {
    title: "Premium Table (PKR)",
    showPlansHeader: true,
    rows: [
      {
        label: "7",
        cells: [{ content: "7" }, { content: "750" }, { content: "1,100" }],
      },
      {
        label: "14",
        cells: [{ content: "14" }, { content: "950" }, { content: "1,500" }],
      },
      {
        label: "21",
        cells: [{ content: "21" }, { content: "1,400" }, { content: "2,100" }],
      },
      {
        label: "31",
        cells: [{ content: "31" }, { content: "1,900" }, { content: "2,850" }],
      },
      {
        label: "62",
        cells: [{ content: "62" }, { content: "3,900" }, { content: "5,800" }],
      },
      {
        label: "92",
        cells: [{ content: "92" }, { content: "6,550" }, { content: "10,000" }],
      },
      {
        label: "180",
        cells: [{ content: "92" }, { content: "9,200" }, { content: "18,800" }],
      },
      {
        label: "365",
        cells: [
          { content: "92" },
          { content: "11,100" },
          { content: "22,000" },
        ],
      },
    ],
  },
];

export const travelInsuranceNote =
  "Premium includes FED but does not include 4% advance tax from non-filers.";

export const homeTripPlans: Plan[] = [
  { key: "stayLimit", label: "Stay Limit" },
  { key: "schengenIndividual", label: "Schengen Individual" },
  { key: "schengenFamily", label: "Schengen Family" },
  // { key: "multiPurposeIndividual", label: "Multi-Purpose Individual" },
  // { key: "multiPurposeFamily", label: "Multi-Purpose Family" },
];

export const homeTripSections: Section[] = [
  {
    title: "Premium Payable (Individual and Family)",
    showPlansHeader: true,
    rows: [
      {
        label: "7",
        cells: [
          { content: "7" },
          { content: "2,850" },
          { content: "4,450" },
          { content: "750" },
          { content: "1,100" },
        ],
      },
      {
        label: "14",
        cells: [
          { content: "14" },
          { content: "4,950" },
          { content: "7,500" },
          { content: "950" },
          { content: "1,500" },
        ],
      },
      {
        label: "21",
        cells: [
          { content: "21" },
          { content: "6,950" },
          { content: "10,250" },
          { content: "1,400" },
          { content: "2,100" },
        ],
      },
      {
        label: "31",
        cells: [
          { content: "31" },
          { content: "8,450" },
          { content: "12,250" },
          { content: "1,900" },
          { content: "2,850" },
        ],
      },
      {
        label: "62",
        cells: [
          { content: "62" },
          { content: "13,300" },
          { content: "17,850" },
          { content: "3,300" },
          { content: "5,800" },
        ],
      },
      {
        label: "92",
        cells: [
          { content: "92" },
          { content: "19,300" },
          { content: "27,100" },
          { content: "6,550" },
          { content: "10,000" },
        ],
      },
      {
        label: "180",
        cells: [
          { content: "92" },
          { content: "22,700" },
          { content: "40,300" },
          { content: "9,200" },
          { content: "18,800" },
        ],
      },
      {
        label: "365",
        cells: [
          { content: "92" },
          { content: "27,100" },
          { content: "51,350" },
          { content: "11,100" },
          { content: "22,000" },
        ],
      },
    ],
  },
];

export const homeTripNote =
  "Premium includes FED but does not include 4% advance tax from non-filers.";
