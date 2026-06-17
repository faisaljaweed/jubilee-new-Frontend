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
  internationalTravelTrustCards,
  homeTripTrustCards,
  studentTravelTrustCards,
  hajjUmrahTravelTrustCards,
  lifestyleCareTrustCards,
  ziaratTravelTrustCards,
  domesticTravelTrustCards,
  familyHealthCareTrustCards,
  personalHealthCareTrustCards,
  parentsCareTrustCards,
  herCareTrustCards,
  personalAccidentTrustCards,
  homeCareTrustCards,
  privateCarActOnlyTrustCards,
  privateCarTrustCards,
  oldCarTrustCards,
  threeTOldCarTrustCards,
  motorCycleTrustCards,
  homeCarePackage,
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

const motorPlanDetailsMap = {
  "private-car-comprehensive": privateCarComprehensiveDetails,
  "old-car-comprehensive": oldCarComprehensiveDetails,
  "3t-old-car-insurance": threeTOldCarInsuranceDetails,
  "motorcycle-comprehensive": motorCycleComprehensiveDetails,

  // third party cards ke liye same available third-party table use kar raha hun
  "private-car-third-party-insurance": motorThirdPartyLiabilityDetails,
  "motorcycle-third-party-insurance": motorThirdPartyLiabilityDetails,

  // optional fallback, agar future me ye card add ho
  "motor-third-party-insurance": motorThirdPartyLiabilityDetails,
};

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
    showPlans: true,
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
    slug: "family-health-care",
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
        "Family HealthCare is the medical safety net designed to protect your spouse, your kids, and your savings from out-of-control medical expenses",
      tagline:
        "Because Sharing is Caring, Especially When It’s a Medical Bill.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Familycare.jpg.jpeg",
    },

    counters: [
      {
        label: "Claims paid",
        value: "PKR 50B+",
        startValue: 80000,
      },
      {
        label: "families covered",
        value: "100,000+",
      },
    ],

    trustHeading: "WHY CUSTOMERS TRUST FAMILY HEALTHCARE",
    trustCards: familyHealthCareTrustCards,

    plansHeading: "CHOOSE THE TIER THAT KEEPS YOUR FAMILY SAFE",
    plans: healthPackage,
    showPlans: true,
    detailsType: "health",
    showBenefitsTable: true,
    benefits: {
      plans: parentsCarePlusPlans,
      sections: familyHealthCareSections,
      note: parentsCarePlusNote,
    },

    showQuote: true,
    showCTA: true,
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
    trustCards: personalHealthCareTrustCards,

    plansHeading: "Choose the plan that’s right for your Personal Health",
    plans: personalHealthCarePackage,
    showPlans: true,
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
        "LifestyleCare is a critical illness plan that dumps a massive lump sum of pure cash straight into your bank account the moment you are diagnosed with any of the 7 covered major illnesses.",
      tagline: "Because a Critical Illness Diagnosis Shouldn't Stop Your Life",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Lifestyle-Care.jpg.jpeg",
    },

    counters: [
      {
        label: "Claims paid",
        value: "PKR 50B+",
        startValue: 80000,
      },
      {
        label: "families covered",
        value: "100,000+",
      },
    ],

    trustHeading: "WHY CUSTOMERS TRUST lifestyle care",
    trustCards: lifestyleCareTrustCards,

    plansHeading: "CHOOSE THE TIER THAT KEEPS YOUR Lifestyle SAFE",
    plans: lifestyleCarePackage,
    showPlans: true,
    detailsType: "health",

    showBenefitsTable: true,
    benefits: {
      plans: parentsCarePlusPlans,
      sections: lifeStyleCareSections,
      note: parentsCarePlusNote,
    },

    showQuote: true,
    showCTA: true,
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
        "ParentsCare is a first-of-its-kind health plan built for the anchors of your life because we know your current plan for a family medical emergency is just a mix of pure panic and intense prayer.",
      tagline: "",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/parentcare.jpg.jpeg",
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

    trustHeading: "WHY CUSTOMERS TRUST Parents care",
    trustCards: parentsCareTrustCards,

    plansHeading: "CHOOSE THE PLAN THAT'S RIGHT FOR YOUR PARENTS' HEALTH",
    plans: parentsCarePackage,
    showPlans: true,
    detailsType: "health",
    showBenefitsTable: true,
    benefits: {
      plans: parentsCarePlusPlans,
      sections: parentsCareCoverageSections,
      note: parentsCareCoverageNote,
    },

    showQuote: true,
    showCTA: true,
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
    trustCards: herCareTrustCards,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: herCarePackage,
    showPlans: true,
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
    trustCards: internationalTravelTrustCards,

    plansHeading: "Choose the plan that’s right for your International Travel",
    plans: travelInsurancePackage,
    showPlans: true,

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
    trustCards: homeTripTrustCards,

    plansHeading: "Choose the plan that’s right for your Home Trip Travel",
    plans: homeTripPackage,
    showPlans: true,

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
    trustCards: studentTravelTrustCards,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: studentTravelPackage,
    showPlans: true,

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
    trustCards: hajjUmrahTravelTrustCards,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: HajjandUmrahPackage,
    showPlans: true,

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
    trustCards: ziaratTravelTrustCards,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: ZiaratTravelPackage,
    showPlans: true,
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
    trustCards: domesticTravelTrustCards,

    plansHeading: "Choose the plan that’s right for your Lifestyle Care",
    plans: DomesticTravelPackage,
    showPlans: true,
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
      tagline: "Aap Kay Ghar Ki Mukammal Hifazat.",
      subtitle:
        "A flexible Home Insurance plan where you control the coverage, protecting your structure, your valuables, and your peace of mind.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [
      {
        label: "Claims Paid",
        value: "PKR 50b+",
        startValue: 80000,
      },
      {
        label: "Lives covered",
        value: "600,000+",
      },
    ],

    trustHeading: "WHY CUSTOMERS TRUST HomeCare",
    trustCards: homeCareTrustCards,

    plansHeading: "DESIGN YOUR PERFECT HOME PROTECTION PLAN",
    plans: homeCarePackage,
    showPlans: true,
    detailsType: "home",
    showBenefitsTable: true,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },
    details: homeInsuranceDetails,
    showQuote: true,
    showCTA: true,
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
      tagline: "Because Life Doesn’t Have an Undo Button",
      subtitle:
        "Personal Accident Insurance that keeps you and your family safe from the financial plot twists of life.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [
      {
        label: "Claims Paid",
        value: "PKR 50b+",
        startValue: 80000,
      },
      {
        label: "Lives covered",
        value: "600,000+",
      },
    ],

    trustHeading: "WHY CUSTOMERS TRUST SELFCARE",
    trustCards: personalAccidentTrustCards,

    plansHeading: "CHOOSE THE PLAN THAT’S RIGHT FOR YOUR SAFETY",
    plans: SelfInsurance,
    showPlans: true,
    detailsType: "self-care",
    showBenefitsTable: true,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },
    details: selfCareDetails,
    showQuote: true,
    showCTA: true,
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
      title: "Motor Insurance",
      tagline: "Drive like everything’s fine. We’ll handle when it isn’t.",
      subtitle:
        "We can’t stop potholes or sudden brake testing.But we can make sure they don’t touch your finances.",
      buttonText: "Buy Now",
      brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },
    appDownload: {
      show: true,
      title: "Download the App",
      playStoreImage: "/img/Play_Store.png",
      appStoreImage: "/img/App_Store.png",
      playStoreUrl: "#",
      appStoreUrl: "#",
    },
    // agr kahin ye show ho tw ye line likhe hide hojaye ga
    // appDownload: {
    //   show: false,
    // },
    counters: [
      {
        label: "Claims Paid",
        value: "PKR 50b+",
        startValue: 80000,
      },
      {
        label: "Cars covered",
        value: "600,000+",
      },
    ],

    trustHeading: "Why Roads Feel Safer With This Cover",
    trustCards: privateCarActOnlyTrustCards,

    plansHeading: "Choose the plan that’s right for your Vehicle",
    plans: herCarePackage,
    showPlans: true,
    detailsType: "motor",
    showBenefitsTable: true,
    // benefits: {
    //   plans: parentsCarePlusPlans,
    //   sections: herCareSections,
    //   note: herCareNote,
    // },

    details: motorThirdPartyLiabilityDetails,
    motorPlanDetails: motorPlanDetailsMap,
    showQuote: true,
    showCTA: true,
    showTestimonials: true,
  },
  // Private Car Comprehensive
  // {
  //   category: "motor",
  //   slug: "private-car-comprehensive",
  //   bannerSubCategory: "selftravel",
  //   theme: {
  //     headingColor: "#BA0C2F",
  //     textColor: "#4A4A4A",
  //     btnbgColor: "#BA0C2F",
  //     btntextColor: "#ffffff",
  //   },
  //   heroFallback: {
  //     title: "Private Car Comprehensive",
  //     subtitle:
  //       "Our Private Car Comprehensive Insurance  provides a comprehensive cover for your car that you can count on. We offer the minimum rate of 1.75% net of Insured estimated value for all your car Insurance  needs!",
  //     buttonText: "Buy Now",
  //     brochureText: "Product brochure",
  //     brochureUrl: "/pdf/health-care.pdf",
  //     imageUrl: "/img/Product/Hercare.jpg.jpeg",
  //   },

  //   counters: [],

  //   trustHeading: "Why Customer Trust Private Car Comprehensive Insurance",
  //   trustCards: privateCarTrustCards,

  //   plansHeading: "Choose the plan that’s right for your Lifestyle Care",
  //   plans: herCarePackage,
  //   showPlans: false,
  //   detailsType: "motor",
  //   showBenefitsTable: true,
  //   // benefits: {
  //   //   plans: parentsCarePlusPlans,
  //   //   sections: herCareSections,
  //   //   note: herCareNote,
  //   // },
  //   details: privateCarComprehensiveDetails,
  //   showQuote: true,
  //   showCTA: false,
  //   showTestimonials: true,
  // },
  // // Old Car Comprehensive
  // {
  //   category: "motor",
  //   slug: "old-car-comprehensive",
  //   bannerSubCategory: "selftravel",
  //   theme: {
  //     headingColor: "#BA0C2F",
  //     textColor: "#4A4A4A",
  //     btnbgColor: "#BA0C2F",
  //     btntextColor: "#ffffff",
  //   },
  //   heroFallback: {
  //     title: "Old Car Comprehensive",
  //     subtitle:
  //       "Old Car Comprehensive Insurance  addresses the need of those old vehicle owners who wish to obtain complete set of coverage for their vehicle with the minimum rate of 1.50% net of covered estimated value.",
  //     buttonText: "Buy Now",
  //     brochureText: "Product brochure",
  //     brochureUrl: "/pdf/health-care.pdf",
  //     imageUrl: "/img/Product/Hercare.jpg.jpeg",
  //   },

  //   counters: [],

  //   trustHeading: "Why Customer Trust Old Car Comprehensive Insurance",
  //   trustCards: oldCarTrustCards,

  //   plansHeading: "Choose the plan that’s right for your Lifestyle Care",
  //   plans: herCarePackage,
  //   showPlans: false,
  //   detailsType: "motor",
  //   showBenefitsTable: true,
  //   // benefits: {
  //   //   plans: parentsCarePlusPlans,
  //   //   sections: herCareSections,
  //   //   note: herCareNote,
  //   // },
  //   details: oldCarComprehensiveDetails,
  //   showQuote: true,
  //   showCTA: false,
  //   showTestimonials: true,
  // },
  // // 3T Old Car Insurance
  // {
  //   category: "motor",
  //   slug: "3t-old-car-insurance",
  //   bannerSubCategory: "selftravel",
  //   theme: {
  //     headingColor: "#BA0C2F",
  //     textColor: "#4A4A4A",
  //     btnbgColor: "#BA0C2F",
  //     btntextColor: "#ffffff",
  //   },
  //   heroFallback: {
  //     title: "3T Old Car Insurance",
  //     subtitle:
  //       "Older cars have history, and they come with little quirks that only you know about. So it's no surprise that old cars can have unique Insurance needs. ",
  //     buttonText: "Buy Now",
  //     brochureText: "Product brochure",
  //     brochureUrl: "/pdf/health-care.pdf",
  //     imageUrl: "/img/Product/Hercare.jpg.jpeg",
  //   },

  //   counters: [],

  //   trustHeading: "Why Customer Trust 3T Old Car Insurance",
  //   trustCards: threeTOldCarTrustCards,

  //   plansHeading: "Choose the plan that’s right for your Lifestyle Care",
  //   plans: herCarePackage,
  //   showPlans: false,
  //   detailsType: "motor",
  //   showBenefitsTable: true,
  //   // benefits: {
  //   //   plans: parentsCarePlusPlans,
  //   //   sections: herCareSections,
  //   //   note: herCareNote,
  //   // },
  //   details: threeTOldCarInsuranceDetails,
  //   showQuote: true,
  //   showCTA: false,
  //   showTestimonials: true,
  // },
  // // Motor Cycle Comprehensive Insurance
  // {
  //   category: "motor",
  //   slug: "motorcycle-comprehensive",
  //   bannerSubCategory: "selftravel",
  //   theme: {
  //     headingColor: "#BA0C2F",
  //     textColor: "#4A4A4A",
  //     btnbgColor: "#BA0C2F",
  //     btntextColor: "#ffffff",
  //   },
  //   heroFallback: {
  //     title: "Motor Cycle Comprehensive ",
  //     subtitle:
  //       "Our Motor Cycle Comprehensive Insurance  provides a comprehensive cover for your ride that you can count on. The Premium rates offered promises to provide all the Insurance needs that your Motor Cycle requires.",
  //     buttonText: "Buy Now",
  //     brochureText: "Product brochure",
  //     brochureUrl: "/pdf/health-care.pdf",
  //     imageUrl: "/img/Product/Hercare.jpg.jpeg",
  //   },

  //   counters: [],

  //   trustHeading: "Why Customer Trust Parents Care",
  //   trustCards: motorCycleTrustCards,

  //   plansHeading: "Choose the plan that’s right for your Lifestyle Care",
  //   plans: herCarePackage,
  //   showPlans: false,
  //   detailsType: "motor",
  //   showBenefitsTable: true,
  //   // benefits: {
  //   //   plans: parentsCarePlusPlans,
  //   //   sections: herCareSections,
  //   //   note: herCareNote,
  //   // },
  //   details: motorCycleComprehensiveDetails,
  //   showQuote: true,
  //   showCTA: false,
  //   showTestimonials: true,
  // },
  // // Private Cars Third Party Liability Insurance
  // {
  //   category: "motor",
  //   slug: "private-car-third-party-insurance",
  //   bannerSubCategory: "selftravel",
  //   theme: {
  //     headingColor: "#BA0C2F",
  //     textColor: "#4A4A4A",
  //     btnbgColor: "#BA0C2F",
  //     btntextColor: "#ffffff",
  //   },
  //   heroFallback: {
  //     title: "Private Car Third Party Liability Insurance",
  //     subtitle:
  //       "Private Car Third Party Liability Insurance provides coverage for medical emergencies, trip cancellations, and lost luggage during your journey.",
  //     buttonText: "Buy Now",
  //     brochureText: "Product brochure",
  //     brochureUrl: "/pdf/health-care.pdf",
  //     imageUrl: "/img/Product/Hercare.jpg.jpeg",
  //   },

  //   counters: [],

  //   trustHeading: "Why Customer Trust Parents Care",
  //   trustCards: healthCarePackage,

  //   plansHeading: "Choose the plan that’s right for your Lifestyle Care",
  //   plans: herCarePackage,
  //   showPlans: false,
  //   detailsType: "motor",
  //   showBenefitsTable: false,
  //   // benefits: {
  //   //   plans: parentsCarePlusPlans,
  //   //   sections: herCareSections,
  //   //   note: herCareNote,
  //   // },
  //   details: selfCareDetails,
  //   showQuote: true,
  //   showCTA: false,
  //   showTestimonials: true,
  // },
  // // Motor Cycles Third Party Liability Insurance
  // {
  //   category: "motor",
  //   slug: "motorcycle-third-party-insurance",
  //   bannerSubCategory: "selftravel",
  //   theme: {
  //     headingColor: "#BA0C2F",
  //     textColor: "#4A4A4A",
  //     btnbgColor: "#BA0C2F",
  //     btntextColor: "#ffffff",
  //   },
  //   heroFallback: {
  //     title: "Motor Cycle Third Party Liability Insurance",
  //     subtitle:
  //       "Motor Cycle Third Party Liability Insurance provides coverage for medical emergencies, trip cancellations, and lost luggage during your journey.",
  //     buttonText: "Buy Now",
  //     brochureText: "Product brochure",
  //     brochureUrl: "/pdf/health-care.pdf",
  //     imageUrl: "/img/Product/Hercare.jpg.jpeg",
  //   },

  //   counters: [],

  //   trustHeading: "Why Customer Trust Parents Care",
  //   trustCards: healthCarePackage,

  //   plansHeading: "Choose the plan that’s right for your Lifestyle Care",
  //   plans: herCarePackage,
  //   showPlans: false,
  //   detailsType: "motor",
  //   showBenefitsTable: false,
  //   // benefits: {
  //   //   plans: parentsCarePlusPlans,
  //   //   sections: herCareSections,
  //   //   note: herCareNote,
  //   // },
  //   details: selfCareDetails,
  //   showQuote: true,
  //   showCTA: false,
  //   showTestimonials: true,
  // },
];
