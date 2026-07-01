export type HealthTierSummary = {
  totalHealthCoverage: string;
  annualOpdLimit: string;
  premium: string;
};

export const HEALTH_TIER_SUMMARY_BY_PRODUCT: Record<
  string,
  Record<string, HealthTierSummary>
> = {
  "Parents Care Plus": {
    Silver: {
      totalHealthCoverage: "PKR 100,000",
      annualOpdLimit: "PKR 10,000",
      premium: "PKR 20,000",
    },
    Gold: {
      totalHealthCoverage: "PKR 250,000",
      annualOpdLimit: "PKR 20,000",
      premium: "PKR 44,000",
    },
    Platinum: {
      totalHealthCoverage: "PKR 500,000",
      annualOpdLimit: "PKR 40,000",
      premium: "PKR 87,000",
    },
  },

  // "Family HealthCare": {
  //   Silver: {
  //     totalHealthCoverage: "PKR 275,000",
  //     annualOpdLimit: "-",
  //     premium: "PKR 27,440",
  //   },
  //   Gold: {
  //     totalHealthCoverage: "PKR 550,000",
  //     annualOpdLimit: "-",
  //     premium: "PKR 48,875",
  //   },
  //   Diamond: {
  //     totalHealthCoverage: "PKR 750,000",
  //     annualOpdLimit: "-",
  //     premium: "PKR 69,800",
  //   },
  //   Platinum: {
  //     totalHealthCoverage: "PKR 1,000,000",
  //     annualOpdLimit: "-",
  //     premium: "PKR 91,025",
  //   },
  // },

  // "Personal HealthCare": {
  //   Silver: {
  //     totalHealthCoverage: "PKR 275,000",
  //     annualOpdLimit: "-",
  //     premium: "-",
  //   },
  //   Gold: {
  //     totalHealthCoverage: "PKR 550,000",
  //     annualOpdLimit: "-",
  //     premium: "-",
  //   },
  //   Platinum: {
  //     totalHealthCoverage: "PKR 1,000,000",
  //     annualOpdLimit: "-",
  //     premium: "-",
  //   },
  // },

  // "Life Style Care": {
  //   Silver: {
  //     totalHealthCoverage: "PKR 300,000",
  //     annualOpdLimit: "-",
  //     premium: "PKR 2,280",
  //   },
  //   Gold: {
  //     totalHealthCoverage: "PKR 500,000",
  //     annualOpdLimit: "-",
  //     premium: "PKR 3,330",
  //   },
  //   Diamond: {
  //     totalHealthCoverage: "PKR 700,000",
  //     annualOpdLimit: "-",
  //     premium: "PKR 4,380",
  //   },
  //   Platinum: {
  //     totalHealthCoverage: "PKR 1,000,000",
  //     annualOpdLimit: "-",
  //     premium: "PKR 5,940",
  //   },
  // },

  // "Parents Care": {
  //   Silver: {
  //     totalHealthCoverage: "PKR 200,000",
  //     annualOpdLimit: "-",
  //     premium: "PKR 22,800",
  //   },
  //   Gold: {
  //     totalHealthCoverage: "PKR 300,000",
  //     annualOpdLimit: "-",
  //     premium: "PKR 37,450",
  //   },
  //   Platinum: {
  //     totalHealthCoverage: "PKR 500,000",
  //     annualOpdLimit: "-",
  //     premium: "PKR 63,000",
  //   },
  //   Titanium: {
  //     totalHealthCoverage: "PKR 700,000",
  //     annualOpdLimit: "-",
  //     premium: "PKR 93,390",
  //   },
  //   "Titanium Plus": {
  //     totalHealthCoverage: "PKR 1,000,000",
  //     annualOpdLimit: "-",
  //     premium: "PKR 107,365",
  //   },
  // },

  // "Her Care": {},
};

export const getHealthPlanTierOptions = (selectedProduct: string) => {
  return Object.keys(HEALTH_TIER_SUMMARY_BY_PRODUCT[selectedProduct] || {});
};

export const getHealthPlanSummary = (
  selectedProduct: string,
  planTier: string,
): HealthTierSummary => {
  return (
    HEALTH_TIER_SUMMARY_BY_PRODUCT[selectedProduct]?.[planTier] || {
      totalHealthCoverage: "-",
      annualOpdLimit: "-",
      premium: "-",
    }
  );
};
