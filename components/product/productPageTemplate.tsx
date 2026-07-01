"use client";

// // import { useEffect, useMemo, useRef, useState } from "react";
// // import axios from "axios";
// // import ProductHero from "./ProductHero";
// // import ProductTrustCards from "./ProductTrustCards";
// // import ProductPlans from "./ProductPlans";
// // import ProductBenefitsSection from "./ProductBenefitsSection";
// // import ProductCTA from "./ProductCTA";
// // import QuoteSection from "@/components/home/QouteSection";
// import { getHealthPlanTierOptions } from "@/data/HomeProductTierData";
// // import TestimonialsPreview from "@/components/home/CarpuselDemoTestimonial";
// // import { useGetAllTestimonialsQuery } from "@/lib/redux/services/testimonialsApi";
// // import { testimonial_Slider } from "@/data/HomeDate";
// // import "../../app/home/home.css";
// // import Travel_Table from "./productTable/travel_Table";
// // // import Home_Table from "./productTable/home_Table";
// // import Home_Table from "./productTable/home_Table";
// // import Motor_Table from "./productTable/motor_Table";
// // import Self_Table from "./productTable/self_Table";
// // // import Self_Table from "./productTable/self_Table";
// // type ProductPageTemplateProps = {
// //   product: any;
// // };

// // export default function ProductPageTemplate({
// //   product,
// // }: ProductPageTemplateProps) {
// //   const [banner, setBanner] = useState<any>(null);
// //   const [bannerLoading, setBannerLoading] = useState(true);
// //   const [bannerError, setBannerError] = useState(false);

// //   useEffect(() => {
// //     const fetchBanner = async () => {
// //       try {
// //         const res = await axios.get(
// //           `${process.env.NEXT_PUBLIC_API_BASE_URL}/banners?category=product&subCategory=${product.bannerSubCategory}&isActive=true`,
// //         );

// //         const list = res.data?.data ?? res.data ?? [];
// //         const first = Array.isArray(list) ? list[0] : null;

// //         setBanner(first ?? null);
// //       } catch (error) {
// //         console.error("Product banner fetch error:", error);
// //         setBannerError(true);
// //       } finally {
// //         setBannerLoading(false);
// //       }
// //     };

// //     fetchBanner();
// //   }, [product.bannerSubCategory]);

// //   const {
// //     data: testimonialsRes,
// //     isLoading: isTestimonialsLoading,
// //     isError: isTestimonialsError,
// //   } = useGetAllTestimonialsQuery();

// //   const apiCarouselData = useMemo(() => {
// //     if (!testimonialsRes) return [];

// //     const list = Array.isArray(testimonialsRes)
// //       ? testimonialsRes
// //       : testimonialsRes.docs || testimonialsRes.data || [];

// //     return (list || []).map((t: any) => ({
// //       name: t.name ?? "",
// //       role: t.designation ?? t.role ?? "Description",
// //       image: t.profilePicture ?? "",
// //       text: t.testimonialText ?? "",
// //       rating:
// //         typeof t.ratings === "number" ? t.ratings : Number(t.ratings ?? 5),
// //     }));
// //   }, [testimonialsRes]);

// //   const carouselDataToShow =
// //     apiCarouselData.length > 0 ? apiCarouselData : testimonial_Slider;

// //   const showApiBanner = !bannerLoading && !bannerError && banner !== null;

// //   // reusable product table
// //   const renderProductDetails = () => {
// //     if (!product.showBenefitsTable) return null;

// //     switch (product.detailsType) {
// //       case "health":
// //         return product.benefits ? (
// //           <ProductBenefitsSection benefits={product.benefits} />
// //         ) : null;

// //       case "travel":
// //         return product.details ? (
// //           <Travel_Table details={product.details} />
// //         ) : null;

// //       case "motor":
// //         return product.details ? (
// //           <Motor_Table details={product.details} />
// //         ) : null;

// //       case "home":
// //         return product.details ? (
// //           <Home_Table details={product.details} />
// //         ) : null;

// //       case "self-care":
// //         return product.details ? (
// //           <Self_Table details={product.details} />
// //         ) : null;

// //       default:
// //         return null;
// //     }
// //   };
// //   return (
// //     <>
// //       <ProductHero
// //         banner={banner}
// //         showApiBanner={showApiBanner}
// //         fallback={product.heroFallback}
// //         counters={product.counters}
// //         theme={product.theme}
// //       />

// //       <ProductTrustCards
// //         heading={product.trustHeading}
// //         cards={product.trustCards}
// //         // theme={product.theme}
// //       />

// //       {/* <ProductPlans
// //         heading={product.plansHeading}
// //         plans={product.plans}
// //         // theme={product.theme}
// //       /> */}
// //       {product.showPlans && product.plans?.length > 0 && (
// //         <ProductPlans heading={product.plansHeading} plans={product.plans} />
// //       )}
// //       {renderProductDetails()}

// //       {product.showQuote && (
// //         <div id="quote-section">
// //           <QuoteSection />
// //         </div>
// //       )}

// //       {product.showCTA && (
// //         <ProductCTA
// //         // theme={product.theme}
// //         />
// //       )}

// //       {product.showTestimonials && <TestimonialsPreview />}
// //     </>
// //   );
// // }

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import axios from "axios";
// import ProductHero from "./ProductHero";
// import ProductTrustCards from "./ProductTrustCards";
// import ProductPlans from "./ProductPlans";
// import ProductBenefitsSection from "./ProductBenefitsSection";
// import ProductCTA from "./ProductCTA";
// import QuoteSection from "@/components/home/QouteSection";
// import TestimonialsPreview from "@/components/home/CarpuselDemoTestimonial";
// import { useGetAllTestimonialsQuery } from "@/lib/redux/services/testimonialsApi";
// import { testimonial_Slider } from "@/data/HomeDate";
// import "../../app/home/home.css";
// import Travel_Table from "./productTable/travel_Table";
// import Home_Table from "./productTable/home_Table";
// import Motor_Table from "./productTable/motor_Table";
// import Self_Table from "./productTable/self_Table";
// import ProductGetConnected from "../home/ProductGetConnected";

// type ProductPageTemplateProps = {
//   product: any;
// };

// export default function ProductPageTemplate({
//   product,
// }: ProductPageTemplateProps) {
//   const [banner, setBanner] = useState<any>(null);
//   const [bannerLoading, setBannerLoading] = useState(true);
//   const [bannerError, setBannerError] = useState(false);

//   const quoteRef = useRef<HTMLDivElement | null>(null);
//   const [selectedMotorPlanKey, setSelectedMotorPlanKey] = useState("");
//   const [selectedTravelPlanKey, setSelectedTravelPlanKey] = useState("");
//   const FORM_CATEGORY_BY_DETAILS_TYPE: Record<string, string> = {
//     health: "Health",
//     travel: "Travel",
//     motor: "Motor Insurance",
//     home: "Home",
//     "self-care": "Self-Care",
//   };
//   // Motor UseEffect
//   useEffect(() => {
//     setSelectedMotorPlanKey("");
//   }, [product?.slug]);

//   // Travel UseEffect

//   useEffect(() => {
//     setSelectedMotorPlanKey("");
//     setSelectedTravelPlanKey("");
//   }, [product?.slug]);

//   useEffect(() => {
//     const fetchBanner = async () => {
//       try {
//         const res = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_BASE_URL}/banners?category=product&subCategory=${product.bannerSubCategory}&isActive=true`,
//         );

//         const list = res.data?.data ?? res.data ?? [];
//         const first = Array.isArray(list) ? list[0] : null;

//         setBanner(first ?? null);
//       } catch (error) {
//         console.error("Product banner fetch error:", error);
//         setBannerError(true);
//       } finally {
//         setBannerLoading(false);
//       }
//     };

//     fetchBanner();
//   }, [product.bannerSubCategory]);

//   const {
//     data: testimonialsRes,
//     isLoading: isTestimonialsLoading,
//     isError: isTestimonialsError,
//   } = useGetAllTestimonialsQuery();

//   const apiCarouselData = useMemo(() => {
//     if (!testimonialsRes) return [];

//     const list = Array.isArray(testimonialsRes)
//       ? testimonialsRes
//       : testimonialsRes.docs || testimonialsRes.data || [];

//     return (list || []).map((t: any) => ({
//       name: t.name ?? "",
//       role: t.designation ?? t.role ?? "Description",
//       image: t.profilePicture ?? "",
//       text: t.testimonialText ?? "",
//       rating:
//         typeof t.ratings === "number" ? t.ratings : Number(t.ratings ?? 5),
//     }));
//   }, [testimonialsRes]);

//   const carouselDataToShow =
//     apiCarouselData.length > 0 ? apiCarouselData : testimonial_Slider;

//   const showApiBanner = !bannerLoading && !bannerError && banner !== null;
//   const quotePrefillData = useMemo(() => {
//     return {
//       coverageType:
//         FORM_CATEGORY_BY_DETAILS_TYPE[product.detailsType] ||
//         product.category ||
//         "",
//     };
//   }, [product.detailsType, product.category]);

//   const scrollToQuoteSection = () => {
//     requestAnimationFrame(() => {
//       quoteRef.current?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     });
//   };

//   const handleGetPlanClick = (data: {
//     coverageType: string;
//     selectedProduct: string;
//     planKey?: string;
//     plan?: any;
//   }) => {
//     if (product.detailsType === "motor") {
//       setSelectedMotorPlanKey(data.planKey || data.selectedProduct);
//     }

//     if (product.detailsType === "travel") {
//       setSelectedTravelPlanKey(data.planKey || data.selectedProduct);
//     }

//     scrollToQuoteSection();
//   };
//   // Motor Selected Details
//   const selectedMotorDetails =
//     product.detailsType === "motor" && selectedMotorPlanKey
//       ? (product.motorPlanDetails?.[selectedMotorPlanKey] ?? product.details)
//       : product.details;
//   // Travel Selected Details
//   const selectedTravelDetails =
//     product.detailsType === "travel" && selectedTravelPlanKey
//       ? (product.travelPlanDetails?.[selectedTravelPlanKey] ?? product.details)
//       : product.details;

//   const renderProductDetails = () => {
//     if (!product.showBenefitsTable) return null;

//     switch (product.detailsType) {
//       case "health":
//         return product.benefits ? (
//           <ProductBenefitsSection benefits={product.benefits} />
//         ) : null;

//       case "travel":
//         return selectedTravelDetails ? (
//           <Travel_Table
//             key={selectedTravelPlanKey || "default-travel-table"}
//             details={selectedTravelDetails}
//           />
//         ) : null;

//       case "motor":
//         return selectedMotorDetails ? (
//           <Motor_Table
//             key={selectedMotorPlanKey || "default-motor-table"}
//             details={selectedMotorDetails}
//             // defaultOpen={true}
//             // openOnDetailsChange={true}
//           />
//         ) : null;

//       case "home":
//         return product.details ? (
//           <Home_Table details={product.details} />
//         ) : null;

//       case "self-care":
//         return product.details ? (
//           <Self_Table details={product.details} />
//         ) : null;

//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <ProductGetConnected />
//       <ProductHero
//         banner={banner}
//         showApiBanner={showApiBanner}
//         fallback={product.heroFallback}
//         counters={product.counters}
//         theme={product.theme}
//         appDownload={product.appDownload}
//       />

//       <ProductTrustCards
//         heading={product.trustHeading}
//         cards={product.trustCards}
//       />

//       {product.showPlans && product.plans?.length > 0 && (
//         <ProductPlans
//           heading={product.plansHeading}
//           plans={product.plans}
//           selectedCategory={product.category}
//           onGetPlanClick={handleGetPlanClick}
//         />
//       )}

//       {renderProductDetails()}

//       {/* {product.showQuote && (
//         <div id="quote-section" ref={quoteRef}>
//           <QuoteSection />
//         </div>
//       )} */}
//       {product.showQuote && (
//         <div id="quote-section" ref={quoteRef}>
//           <QuoteSection prefillData={quotePrefillData} />
//         </div>
//       )}
//       {product.showCTA && <ProductCTA />}

//       {product.showTestimonials && <TestimonialsPreview />}
//     </>
//   );
// }

// ("use client");

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import ProductHero from "./ProductHero";
import ProductTrustCards from "./ProductTrustCards";
import ProductPlans from "./ProductPlans";
import ProductBenefitsSection from "./ProductBenefitsSection";
import ProductCTA from "./ProductCTA";
import QuoteSection from "@/components/home/QouteSection";
import { getHealthPlanTierOptions } from "@/data/HomeProductTierData";
import TestimonialsPreview from "@/components/home/CarpuselDemoTestimonial";
import { useGetAllTestimonialsQuery } from "@/lib/redux/services/testimonialsApi";
import { testimonial_Slider } from "@/data/HomeDate";
import "../../app/home/home.css";
import Travel_Table from "./productTable/travel_Table";
import Home_Table from "./productTable/home_Table";
import Motor_Table from "./productTable/motor_Table";
import Self_Table from "./productTable/self_Table";
import ProductGetConnected from "../home/ProductGetConnected";

type ProductPageTemplateProps = {
  product: any;
};

const FORM_CATEGORY_BY_URL: Record<string, string> = {
  health: "Health",
  travel: "Travel",
  motor: "Motor Insurance",
  home: "Home",
  self: "Self-Care",
};

const FORM_CATEGORY_BY_DETAILS_TYPE: Record<string, string> = {
  health: "Health",
  travel: "Travel",
  motor: "Motor Insurance",
  home: "Home",
  "self-care": "Self-Care",
};

const FORM_PRODUCT_BY_SLUG: Record<string, string> = {
  // Health
  "parents-care-plus": "Parents Care Plus",
  "family-healthcare": "Family HealthCare",
  "personal-healthcare": "Personal HealthCare",
  "lifestyle-care": "Lifestyle Care",
  "life-style-care": "Lifestyle Care",
  "parents-care": "Parents Care",
  "her-care": "HerCare",

  // Travel
  "travel-insurance": "Travel Insurance",
  "international-travel": "International Travel",
  "home-trip": "Home Trip",
  "student-travel": "Student Travel",
  "hajj-and-umrah": "Hajj and Umrah",
  ziarat: "Ziarat",
  "domestic-travel": "Domestic Travel",

  // Motor
  "motor-insurance": "Motor Insurance",
  "private-car-comprehensive": "Private Car Comprehensive",
  "old-car-comprehensive": "Old Car Comprehensive",
  "3t-old-car-insurance": "3T Old Car Insurance",
  "motor-cycle-comprehensive": "Motor Cycle Comprehensive",
  "third-party-liability": "Third Party Liability",
  "private-cars-tpl": "Private Cars TPL",
  "motor-cycle-tpl": "Motor Cycle TPL",

  // Home / Self
  "home-insurance": "Home",
  "self-insurance": "Self Care",
};

const normalizePlanKey = (value: string) =>
  String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

const getPlanTierFromClickedPlan = (
  data: { planKey?: string; selectedProduct?: string; plan?: any },
  selectedProductForQuote: string,
) => {
  const plan = data.plan || {};
  const candidates = [
    plan.Card_Name,
    plan.Card_name,
    plan.cardName,
    plan.Card_Title,
    plan.Card_title,
    plan.Plan_Name,
    plan.planName,
    plan.plan_name,
    plan.tier,
    plan.tierName,
    plan.name,
    plan.title,
    data.planKey,
    data.selectedProduct,
  ]
    .map((value) => String(value || "").trim())
    .filter(Boolean);

  const tierOptions = getHealthPlanTierOptions(selectedProductForQuote);

  for (const candidate of candidates) {
    const candidateKey = normalizePlanKey(candidate);

    const matchedTier = tierOptions.find((tier) => {
      const tierKey = normalizePlanKey(tier);
      return (
        candidateKey === tierKey ||
        candidateKey.includes(tierKey) ||
        tierKey.includes(candidateKey)
      );
    });

    if (matchedTier) return matchedTier;
  }

  return candidates[0] || "";
};

export default function ProductPageTemplate({
  product,
}: ProductPageTemplateProps) {
  const pathname = usePathname();

  const [banner, setBanner] = useState<any>(null);
  const [bannerLoading, setBannerLoading] = useState(true);
  const [bannerError, setBannerError] = useState(false);

  const quoteRef = useRef<HTMLDivElement | null>(null);
  const [selectedMotorPlanKey, setSelectedMotorPlanKey] = useState("");
  const [selectedTravelPlanKey, setSelectedTravelPlanKey] = useState("");
  const [selectedQuotePlanTier, setSelectedQuotePlanTier] = useState("");

  useEffect(() => {
    setSelectedMotorPlanKey("");
    setSelectedTravelPlanKey("");
    setSelectedQuotePlanTier("");
  }, [product?.slug]);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/banners?category=product&subCategory=${product.bannerSubCategory}&isActive=true`,
        );

        const list = res.data?.data ?? res.data ?? [];
        const first = Array.isArray(list) ? list[0] : null;

        setBanner(first ?? null);
      } catch (error) {
        console.error("Product banner fetch error:", error);
        setBannerError(true);
      } finally {
        setBannerLoading(false);
      }
    };

    fetchBanner();
  }, [product.bannerSubCategory]);

  const {
    data: testimonialsRes,
    isLoading: isTestimonialsLoading,
    isError: isTestimonialsError,
  } = useGetAllTestimonialsQuery();

  const apiCarouselData = useMemo(() => {
    if (!testimonialsRes) return [];

    const list = Array.isArray(testimonialsRes)
      ? testimonialsRes
      : testimonialsRes.docs || testimonialsRes.data || [];

    return (list || []).map((t: any) => ({
      name: t.name ?? "",
      role: t.designation ?? t.role ?? "Description",
      image: t.profilePicture ?? "",
      text: t.testimonialText ?? "",
      rating:
        typeof t.ratings === "number" ? t.ratings : Number(t.ratings ?? 5),
    }));
  }, [testimonialsRes]);

  const carouselDataToShow =
    apiCarouselData.length > 0 ? apiCarouselData : testimonial_Slider;

  const showApiBanner = !bannerLoading && !bannerError && banner !== null;

  const quotePrefillData = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);

    const categorySlug = parts[0] || "";
    const productSlug = parts[1] || product?.slug || "";

    const coverageType =
      FORM_CATEGORY_BY_URL[categorySlug] ||
      FORM_CATEGORY_BY_DETAILS_TYPE[product?.detailsType] ||
      product?.category ||
      "";

    const selectedProduct = FORM_PRODUCT_BY_SLUG[productSlug] || "";
    const isHealthProductPage = coverageType === "Health";

    return {
      coverageType,
      selectedProduct,
      planTier: selectedQuotePlanTier,
      lockCategory: Boolean(coverageType),
      lockProduct: Boolean(selectedProduct) && !isHealthProductPage,
    };
  }, [
    pathname,
    product?.slug,
    product?.detailsType,
    product?.category,
    selectedQuotePlanTier,
  ]);

  const scrollToQuoteSection = () => {
    requestAnimationFrame(() => {
      quoteRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleGetPlanClick = (data: {
    coverageType: string;
    selectedProduct: string;
    planKey?: string;
    plan?: any;
  }) => {
    if (product.detailsType === "motor") {
      setSelectedMotorPlanKey(data.planKey || data.selectedProduct);
    }

    if (product.detailsType === "travel") {
      setSelectedTravelPlanKey(data.planKey || data.selectedProduct);
    }

    setSelectedQuotePlanTier(
      getPlanTierFromClickedPlan(data, quotePrefillData.selectedProduct),
    );
    scrollToQuoteSection();
  };

  const selectedMotorDetails =
    product.detailsType === "motor" && selectedMotorPlanKey
      ? (product.motorPlanDetails?.[selectedMotorPlanKey] ?? product.details)
      : product.details;

  const selectedTravelDetails =
    product.detailsType === "travel" && selectedTravelPlanKey
      ? (product.travelPlanDetails?.[selectedTravelPlanKey] ?? product.details)
      : product.details;

  const renderProductDetails = () => {
    if (!product.showBenefitsTable) return null;

    switch (product.detailsType) {
      case "health":
        return product.benefits ? (
          <ProductBenefitsSection benefits={product.benefits} />
        ) : null;

      case "travel":
        return selectedTravelDetails ? (
          <Travel_Table
            key={selectedTravelPlanKey || "default-travel-table"}
            details={selectedTravelDetails}
          />
        ) : null;

      case "motor":
        return selectedMotorDetails ? (
          <Motor_Table
            key={selectedMotorPlanKey || "default-motor-table"}
            details={selectedMotorDetails}
          />
        ) : null;

      case "home":
        return product.details ? (
          <Home_Table details={product.details} />
        ) : null;

      case "self-care":
        return product.details ? (
          <Self_Table details={product.details} />
        ) : null;

      default:
        return null;
    }
  };

  return (
    <>
      <ProductGetConnected />

      <ProductHero
        banner={banner}
        showApiBanner={showApiBanner}
        fallback={product.heroFallback}
        counters={product.counters}
        theme={product.theme}
        appDownload={product.appDownload}
      />

      <ProductTrustCards
        heading={product.trustHeading}
        cards={product.trustCards}
      />

      {product.showPlans && product.plans?.length > 0 && (
        <ProductPlans
          heading={product.plansHeading}
          plans={product.plans}
          selectedCategory={product.category}
          onGetPlanClick={handleGetPlanClick}
        />
      )}

      {renderProductDetails()}

      {product.showQuote && (
        <div id="quote-section" ref={quoteRef}>
          <QuoteSection prefillData={quotePrefillData} />
        </div>
      )}

      {product.showCTA && <ProductCTA />}

      {product.showTestimonials && <TestimonialsPreview />}
    </>
  );
}
