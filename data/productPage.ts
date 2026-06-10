import {
  parentCarePackage,
  parentsPackageData,
  healthCarePackage,
  healthPackage,
  personalHealthCarePackage,
  lifestyleCarePackage,
  parentsCarePackage,
  herCarePackage,
  travelInsurancePackage,
  homeTripPackage,
  studentTravelPackage,
  HajjandUmrahPackage,
  ZiaratTravelPackage,
  DomesticTravelPackage,
  SelfInsurance,
} from "@/data/healthCareData";

import {
  parentsCarePlusNote,
  parentsCarePlusPlans,
  parentsCarePlusSections,
  familyHealthCareSections,
  personalHealthCareSections,
  lifeStyleCareSections,
  parentsCareCoverageSections,
  parentsCareCoverageNote,
  herCareSections,
  herCareNote,
  travelInsurancePlans,
  travelInsuranceNote,
  travelInsuranceSections,
  homeTripSections,
  homeTripNote,
  homeTripPlans,
} from "@/data/parentsCarePlusTableData";
import {
  domesticTravelDetails,
  hajjUmrahTravelDetails,
  homeTripTravelDetails,
  internationalTravelDetails,
  studentTravelDetails,
  ziaratTravelDetails,
} from "./prudctData/travelData";
import { homeInsuranceDetails } from "./prudctData/homeData";
import { selfCareDetails } from "./prudctData/selfData";
import {
  motorCycleComprehensiveDetails,
  motorThirdPartyLiabilityDetails,
  oldCarComprehensiveDetails,
  privateCarComprehensiveDetails,
  threeTOldCarInsuranceDetails,
} from "./prudctData/motorData";

export const productPages = [
  {
    category: "health",
    slug: "parents-care-plus",
    bannerSubCategory: "parentscareplus",

    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Parents Care Plus",
      subtitle:
        "Pakistan’s first health insurance plan with built-in OPD coverage - just for your Parents.",
      tagline: "Ammi Abbu Kay Liye Sub Say Complete Coverage.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/brochure_parents_care_plus_insurance.pdf",
      imageUrl: "/img/Parent/Parents-Banners.jpg.jpeg",
    },

    counters: [
      {
        label: "Starting from",
        value: "PKR 20,000",
        startValue: 80000,
      },
      {
        label: "parental covered",
        value: "100,000+",
      },
    ],

    trustHeading: "Why Customers Trust Parents Care Plus",
    trustCards: parentCarePackage,

    plansHeading: "Choose the plan that’s right for your parents’ health",
    plans: parentsPackageData.OPD,
    detailsType: "health",
    showBenefitsTable: true,
    benefits: {
      plans: parentsCarePlusPlans,
      sections: parentsCarePlusSections,
      note: parentsCarePlusNote,
    },

    showQuote: true,
    showCTA: true,
    showTestimonials: true,
  },

  {
    category: "health",
    slug: "health-care",
    bannerSubCategory: "healthcar",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Family Health Care",
      subtitle:
        "Jubilee General’s Family HealthCare Insurance  covers more than one family member  for a fixed amount of cover in case of hospitalization.",
      tagline: "",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Familycare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Family Health Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Family Health",
    plans: healthPackage,
    detailsType: "health",
    showBenefitsTable: true,
    benefits: {
      plans: parentsCarePlusPlans,
      sections: familyHealthCareSections,
      note: parentsCarePlusNote,
    },

    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },

  {
    category: "health",
    slug: "personal-health-care",
    bannerSubCategory: "personalhealthcare",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Personal Health Care",
      subtitle:
        "Jubilee General's Personal HealthCare Insurance  provides coverage for a fixed sum in case of hospitalization.",
      tagline: "",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/personal.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Personal Health Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Personal Health",
    plans: personalHealthCarePackage,
    detailsType: "health",
    showBenefitsTable: true,
    benefits: {
      plans: parentsCarePlusPlans,
      sections: personalHealthCareSections,
      note: parentsCarePlusNote,
    },

    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },

  {
    category: "health",
    slug: "lifestyle-care",
    bannerSubCategory: "lifestylecare",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Lifestyle Care",
      subtitle:
        "Jubilee General Insurance  will pay the lump sum amount if covered limit without asking for any medical tests or bills following are the product features",
      tagline: "",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Lifestyle-Care.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Lifestyle Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: lifestyleCarePackage,
    detailsType: "health",

    showBenefitsTable: true,
    benefits: {
      plans: parentsCarePlusPlans,
      sections: lifeStyleCareSections,
      note: parentsCarePlusNote,
    },

    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  {
    category: "health",
    slug: "parents-care",
    bannerSubCategory: "parentscare",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Parents Care",
      subtitle:
        "ParentsCare is a health insurance plan for parents aged 45 to 65, offering cashless treatment and comprehensive healthcare protection.",
      tagline: "",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/parentcare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Parents Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: parentsCarePackage,
    detailsType: "health",
    showBenefitsTable: true,
    benefits: {
      plans: parentsCarePlusPlans,
      sections: parentsCareCoverageSections,
      note: parentsCareCoverageNote,
    },

    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  {
    category: "health",
    slug: "her-care",
    bannerSubCategory: "hercare",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Her Care",
      subtitle:
        "HerCare is a women-focused critical illness plan that provides financial protection against major illnesses such as breast cancer, cervical cancer, burns and paralysis.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Parents Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: herCarePackage,
    detailsType: "health",
    showBenefitsTable: true,
    benefits: {
      plans: parentsCarePlusPlans,
      sections: herCareSections,
      note: herCareNote,
    },

    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  // Travel
  // International Travel

  {
    category: "travel",
    slug: "international-travel",
    bannerSubCategory: "internationaltravel",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "International Travel",
      subtitle:
        "It offers a comprehensive coverage for the entire duration of your stay, providing medical emergencies, evacuation, travel inconvenience, accidental death and many other perils.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust International Travel Insurance",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your International Travel",
    plans: travelInsurancePackage,

    detailsType: "travel",
    showBenefitsTable: true,
    // details: {
    //   heading: "Benefits of International Travel Insurance",
    //   plans: travelInsurancePlans,
    //   sections: travelInsuranceSections,
    //   note: travelInsuranceNote,
    // },
    details: internationalTravelDetails,

    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  // Home Trip Travel
  {
    category: "travel",
    slug: "home-trip-travel",
    bannerSubCategory: "hometriptravel",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Home Trip Travel",
      subtitle:
        "It offers a comprehensive coverage for the entire duration of your stay, providing medical emergencies, evacuation, travel inconvenience, accidental death and many other perils.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Home Trip Travel ",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Home Trip Travel",
    plans: homeTripPackage,

    detailsType: "travel",
    showBenefitsTable: true,
    // benefits: {
    //   plans: homeTripPlans,
    //   sections: homeTripSections,
    //   note: homeTripNote,
    // },
    details: homeTripTravelDetails,

    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  // Student Travel
  {
    category: "travel",
    slug: "student-travel",
    bannerSubCategory: "studenttravel",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Student Travel",
      subtitle:
        "Student Travel Insurance provides coverage for medical emergencies, trip cancellations, and lost luggage during your travels as a student.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Parents Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: studentTravelPackage,

    detailsType: "travel",
    showBenefitsTable: true,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },
    details: studentTravelDetails,

    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  // Hajj and Umrah Travel
  {
    category: "travel",
    slug: "hajj-umrah-travel",
    bannerSubCategory: "hajjumrahtravel",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Hajj and Umrah Travel",
      subtitle:
        "Hajj and Umrah Travel Insurance provides coverage for medical emergencies, trip cancellations, and lost luggage during your pilgrimage.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Parents Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: HajjandUmrahPackage,

    detailsType: "travel",
    showBenefitsTable: true,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },
    details: hajjUmrahTravelDetails,

    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  // Ziarat Travel
  {
    category: "travel",
    slug: "ziarat-travel",
    bannerSubCategory: "ziarattravel",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Ziarat Travel",
      subtitle:
        "Ziarat Travel Insurance provides coverage for medical emergencies, trip cancellations, and lost luggage during your journey.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Parents Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: ZiaratTravelPackage,
    detailsType: "travel",
    showBenefitsTable: true,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },
    details: ziaratTravelDetails,
    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  // Domestic Travel
  {
    category: "travel",
    slug: "domestic-travel",
    bannerSubCategory: "domestictravel",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Domestic Travel",
      subtitle:
        "Domestic Travel Insurance provides coverage for medical emergencies, trip cancellations, and lost luggage during your journey.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Parents Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: DomesticTravelPackage,
    detailsType: "travel",
    showBenefitsTable: true,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },
    details: domesticTravelDetails,
    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  // Home Insurance
  {
    category: "home",
    slug: "home-insurance",
    bannerSubCategory: "homeinsurance",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Home Insurance",
      subtitle:
        "Home Insurance provides coverage for medical emergencies, trip cancellations, and lost luggage during your journey.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Parents Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: herCarePackage,
    detailsType: "home",
    showBenefitsTable: true,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },
    details: homeInsuranceDetails,
    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  // Self Insurance
  {
    category: "self",
    slug: "self-insurance",
    bannerSubCategory: "selftravel",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Self Travel",
      subtitle:
        "Self Travel Insurance provides coverage for medical emergencies, trip cancellations, and lost luggage during your journey.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Parents Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: SelfInsurance,
    detailsType: "self-care",
    showBenefitsTable: true,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },
    details: selfCareDetails,
    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },

  // Motor Third Party Liability Insurance
  {
    category: "motor",
    slug: "motor-third-party-insurance",
    bannerSubCategory: "selftravel",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Motor Third Party Insurance",
      subtitle:
        "Motor Third Party Liability Insurance provides coverage for medical emergencies, trip cancellations, and lost luggage during your journey.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Parents Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: herCarePackage,
    detailsType: "motor",
    showBenefitsTable: true,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },
    details: motorThirdPartyLiabilityDetails,
    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  // Private Car Comprehensive
  {
    category: "motor",
    slug: "private-car-comprehensive",
    bannerSubCategory: "selftravel",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Private Car Comprehensive",
      subtitle:
        "Private Car Comprehensive Insurance provides coverage for medical emergencies, trip cancellations, and lost luggage during your journey.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Parents Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: herCarePackage,
    detailsType: "motor",
    showBenefitsTable: true,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },
    details: privateCarComprehensiveDetails,
    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  // Old Car Comprehensive
  {
    category: "motor",
    slug: "old-car-comprehensive",
    bannerSubCategory: "selftravel",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Old Car Comprehensive",
      subtitle:
        "Old Car Comprehensive Insurance provides coverage for medical emergencies, trip cancellations, and lost luggage during your journey.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Parents Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: herCarePackage,
    detailsType: "motor",
    showBenefitsTable: true,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },
    details: oldCarComprehensiveDetails,
    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  // 3T Old Car Insurance
  {
    category: "motor",
    slug: "3t-old-car-insurance",
    bannerSubCategory: "selftravel",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "3T Old Car Insurance",
      subtitle:
        "3T Old Car Insurance provides coverage for medical emergencies, trip cancellations, and lost luggage during your journey.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Parents Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: herCarePackage,
    detailsType: "motor",
    showBenefitsTable: true,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },
    details: threeTOldCarInsuranceDetails,
    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  // Motor Cycle Comprehensive Insurance
  {
    category: "motor",
    slug: "motorcycle-comprehensive",
    bannerSubCategory: "selftravel",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Motor Cycle Comprehensive Insurance",
      subtitle:
        "Motor Cycle Comprehensive Insurance provides coverage for medical emergencies, trip cancellations, and lost luggage during your journey.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Parents Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: herCarePackage,
    detailsType: "motor",
    showBenefitsTable: true,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },
    details: motorCycleComprehensiveDetails,
    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  // Private Cars Third Party Liability Insurance
  {
    category: "motor",
    slug: "private-car-third-party-insurance",
    bannerSubCategory: "selftravel",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Private Car Third Party Liability Insurance",
      subtitle:
        "Private Car Third Party Liability Insurance provides coverage for medical emergencies, trip cancellations, and lost luggage during your journey.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Parents Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: herCarePackage,
    detailsType: "motor",
    showBenefitsTable: false,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },
    details: selfCareDetails,
    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
  // Motor Cycles Third Party Liability Insurance
  {
    category: "motor",
    slug: "motorcycle-third-party-insurance",
    bannerSubCategory: "selftravel",
    theme: {
      headingColor: "#BA0C2F",
      textColor: "#4A4A4A",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Motor Cycle Third Party Liability Insurance",
      subtitle:
        "Motor Cycle Third Party Liability Insurance provides coverage for medical emergencies, trip cancellations, and lost luggage during your journey.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [],

    trustHeading: "Why Customer Trust Parents Care",
    trustCards: healthCarePackage,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: herCarePackage,
    detailsType: "motor",
    showBenefitsTable: false,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },
    details: selfCareDetails,
    showQuote: true,
    showCTA: false,
    showTestimonials: true,
  },
];
