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
  motor,
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
  familyCarePlusPlans,
  personalCarePlusPlans,
  lifeCarePlusPlans,
  parentPlusPlans,
  herCarePlusPlans,
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

const travelPlanDetailsMap = {
  "schengen-compliant-plan": internationalTravelDetails,
  "multi-purpose plan": internationalTravelDetails,

  "home-trip-schengen": homeTripTravelDetails,
  "home-trip-multi-purpose": homeTripTravelDetails,

  "student-viacare": studentTravelDetails,
  "student-viacare-silver": studentTravelDetails,
  "student-viacare-gold": studentTravelDetails,
  "student-viacare-platinum": studentTravelDetails,

  "hajj-&-umrah-plana": hajjUmrahTravelDetails,
  "hajj-&-umrah-planb": hajjUmrahTravelDetails,

  "ziarat-plana": ziaratTravelDetails,
  "ziarat-planb": ziaratTravelDetails,

  "domestic-travel-gold": domesticTravelDetails,
  "domestic-travel-platinum": domesticTravelDetails,
};
export const productPages = [
  {
    category: "health",
    slug: "parents-care-plus",
    bannerSubCategory: "parentscareplus",

    theme: {
      headingColor: "#000",
      textColor: "#000",
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
        label: "parents covered",
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
      headingColor: "#000",
      textColor: "#000",
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
      // brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/family-healthcare.jpg",
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
      plans: familyCarePlusPlans,
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
      headingColor: "#000",
      textColor: "#000",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Personal Health Care",
      subtitle:
        "Jubilee General's Personal HealthCare Insurance  provides coverage for a fixed sum in case of hospitalization.",
      tagline: "",
      buttonText: "Buy Now",
      // brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/personal.jpg.jpeg",
    },

    counters: [
      {
        label: "Starting from",
        value: "PKR 20,000",
        startValue: 80000,
      },
      {
        label: "personal covered",
        value: "100,000+",
      },
    ],

    trustHeading: "Why Customer Trust Personal Health Care",
    trustCards: personalHealthCareTrustCards,

    plansHeading: "Choose the plan that’s right for your Personal Health",
    plans: personalHealthCarePackage,
    showPlans: true,
    detailsType: "health",
    showBenefitsTable: true,
    benefits: {
      plans: personalCarePlusPlans,
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
      headingColor: "#000",
      textColor: "#000",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Lifestyle Care",
      subtitle:
        "When life takes an unexpected turn, Lifestyle Care helps ease the financial burden of a covered critical illness, giving you the freedom to focus on recovery.",
      tagline: "Life Doesn't Pause. Neither Should You.",
      buttonText: "Buy Now",
      // brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/lifestyle.jpg.jpeg",
    },

    counters: [
      {
        label: "Claims paid",
        value: "PKR 50B+",
        startValue: 80000,
      },
      {
        label: "Lives covered",
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
      plans: lifeCarePlusPlans,
      sections: lifeStyleCareSections,
      note: parentsCarePlusNote,
    },

    showQuote: true,
    showCTA: true,
    showTestimonials: true,
  },
  // parents care
  {
    category: "health",
    slug: "parents-care",
    bannerSubCategory: "parentscare",
    theme: {
      headingColor: "#000",
      textColor: "#000",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Parents Care",

      subtitle:
        "ParentsCare offers health coverage for your parents, so you can focus on being there when they need you.",
      tagline: "Love takes care of them. We help with the rest.",
      buttonText: "Buy Now",
      // brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Lifestyle-Care.jpg.jpeg",
    },

    counters: [
      {
        label: "Starting from",
        value: "PKR 20,000",
        startValue: 80000,
      },
      {
        label: "parents covered",
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
      plans: parentPlusPlans,
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
      headingColor: "#000",
      textColor: "#000",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Her Care",
      tagline: "You've got the plans. We've got the backup.",
      subtitle:
        "HerCare provides women-focused critical illness protection, giving you one less thing to worry about when the unexpected happens.",
      buttonText: "Buy Now",
      // brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/Hercare.jpg.jpeg",
    },

    counters: [
      {
        label: "Starting from",
        value: "PKR 20,000",
        startValue: 80000,
      },
      {
        label: "women covered",
        value: "100,000+",
      },
    ],

    trustHeading: "Why Customer Trust HerCare",
    trustCards: herCareTrustCards,

    plansHeading: "Choose the plan that’s right for your HerCare",
    plans: herCarePackage,
    showPlans: true,
    detailsType: "health",
    showBenefitsTable: true,
    benefits: {
      plans: herCarePlusPlans,
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
    slug: "travel-insurance",
    bannerSubCategory: "internationaltravel",
    theme: {
      headingColor: "#000",
      textColor: "#000",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Travel Insurance",
      subtitle:
        "It offers a comprehensive coverage for the entire duration of your stay, providing medical emergencies, evacuation, travel inconvenience, accidental death and many other perils.",
      buttonText: "Buy Now",
      // brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/travel1.jpg",
    },

    counters: [
      {
        label: "Starting from",
        value: "PKR 20,000",
        startValue: 80000,
      },
      {
        label: "Trip covered",
        value: "100,000+",
      },
    ],

    trustHeading: "Why Customer Trust Us for their Travel",
    trustCards: internationalTravelTrustCards,

    plansHeading: "Choose the plan that’s right for your ",
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
    travelPlanDetails: travelPlanDetailsMap,
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
      headingColor: "#000",
      textColor: "#000",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "HomeCare",
      tagline: "Aap Kay Ghar Ki Mukammal Hifazat.",
      subtitle:
        "A flexible home insurance plan where you control the coverage, protecting your structure, your valuables, and your peace of mind.",
      buttonText: "Buy Now",
      // brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Vechile/home.jpg",
    },

    counters: [
      {
        label: "Claims Paid",
        value: "PKR 50b+",
        startValue: 80000,
      },
      {
        label: "Home covered",
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
      headingColor: "#000",
      textColor: "#000",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "SelfCare",
      tagline: "Because life doesn't come with an undo button.",
      subtitle:
        "Personal Accident Insurance that gives you and your family added protection when life changes course.",
      buttonText: "Buy Now",
      // brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Product/self-care.jpg",
    },

    counters: [
      {
        label: "Claims Paid",
        value: "PKR 50b+",
        startValue: 80000,
      },
      {
        label: "Individual   covered",
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
    slug: "motor-insurance",
    bannerSubCategory: "selftravel",
    theme: {
      headingColor: "#ffffff",
      textColor: "#ffffff",
      btnbgColor: "#BA0C2F",
      btntextColor: "#ffffff",
    },
    heroFallback: {
      title: "Motor Insurance",
      tagline: "Drive like everything’s fine. We’ll handle when it isn’t.",
      subtitle:
        "We can’t stop potholes or sudden brake testing.But we can make sure they don’t touch your finances.",
      buttonText: "Buy Now",
      // brochureText: "Product brochure",
      brochureUrl: "/pdf/health-care.pdf",
      imageUrl: "/img/Vechile/Motor.png",
    },
    // agr kahin ye show ho tw ye line likhe hide hojaye ga
    // appDownload: {
    //   show: false,
    // },
    appDownload: {
      show: true,
      title: "Download the App",
      playStoreImage: "/img/Play_Store.png",
      appStoreImage: "/img/App_Store.png",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.jgi.customerapp",
      appStoreUrl: "https://apps.apple.com/pk/app/my-jubilee/id1609851621",
    },
    counters: [
      {
        label: "Claims Paid",
        value: "PKR 50b+",
        startValue: 80000,
      },
      {
        label: "vehicle covered",
        value: "600,000+",
      },
    ],

    trustHeading: "Why Roads Feel Safer With Our Courage",
    trustCards: privateCarActOnlyTrustCards,

    plansHeading: "Choose the plan that’s right for your Vehicle",
    plans: motor,
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
];
