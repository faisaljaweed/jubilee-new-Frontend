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

  "Family HealthCare": {
    Silver: {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 27,440",
    },
    Gold: {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 48,875",
    },
    Diamond: {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 69,800",
    },
    Platinum: {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 91,025",
    },
  },

  "Personal HealthCare": {
    Silver: {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 275,000",
    },
    Gold: {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 550,000",
    },
    Platinum: {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 1000,000",
    },
  },

  "Life Style Care": {
    Silver: {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 2,280",
    },
    Gold: {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 3,330",
    },
    Diamond: {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 4,380",
    },
    Platinum: {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 5,940",
    },
  },

  "Parents Care": {
    Silver: {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 22,800",
    },
    Gold: {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 37,450",
    },
    Platinum: {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 63,000",
    },
    Titanium: {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 93,390",
    },
    "Titanium Plus": {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 107,365",
    },
  },

  "Her Care": {},
  "Self Care": {
    "Plan A": {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 800",
    },
    "Plan B": {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 1200",
    },
    "Plan C": {
      totalHealthCoverage: "",
      annualOpdLimit: "-",
      premium: "PKR 1700",
    },
  },
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
