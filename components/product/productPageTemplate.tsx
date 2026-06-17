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
// // import Home_Table from "./productTable/home_Table";
// import Home_Table from "./productTable/home_Table";
// import Motor_Table from "./productTable/motor_Table";
// import Self_Table from "./productTable/self_Table";
// // import Self_Table from "./productTable/self_Table";
// type ProductPageTemplateProps = {
//   product: any;
// };

// export default function ProductPageTemplate({
//   product,
// }: ProductPageTemplateProps) {
//   const [banner, setBanner] = useState<any>(null);
//   const [bannerLoading, setBannerLoading] = useState(true);
//   const [bannerError, setBannerError] = useState(false);

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

//   // reusable product table
//   const renderProductDetails = () => {
//     if (!product.showBenefitsTable) return null;

//     switch (product.detailsType) {
//       case "health":
//         return product.benefits ? (
//           <ProductBenefitsSection benefits={product.benefits} />
//         ) : null;

//       case "travel":
//         return product.details ? (
//           <Travel_Table details={product.details} />
//         ) : null;

//       case "motor":
//         return product.details ? (
//           <Motor_Table details={product.details} />
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
//       <ProductHero
//         banner={banner}
//         showApiBanner={showApiBanner}
//         fallback={product.heroFallback}
//         counters={product.counters}
//         theme={product.theme}
//       />

//       <ProductTrustCards
//         heading={product.trustHeading}
//         cards={product.trustCards}
//         // theme={product.theme}
//       />

//       {/* <ProductPlans
//         heading={product.plansHeading}
//         plans={product.plans}
//         // theme={product.theme}
//       /> */}
//       {product.showPlans && product.plans?.length > 0 && (
//         <ProductPlans heading={product.plansHeading} plans={product.plans} />
//       )}
//       {renderProductDetails()}

//       {product.showQuote && (
//         <div id="quote-section">
//           <QuoteSection />
//         </div>
//       )}

//       {product.showCTA && (
//         <ProductCTA
//         // theme={product.theme}
//         />
//       )}

//       {product.showTestimonials && <TestimonialsPreview />}
//     </>
//   );
// }

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import ProductHero from "./ProductHero";
import ProductTrustCards from "./ProductTrustCards";
import ProductPlans from "./ProductPlans";
import ProductBenefitsSection from "./ProductBenefitsSection";
import ProductCTA from "./ProductCTA";
import QuoteSection from "@/components/home/QouteSection";
import TestimonialsPreview from "@/components/home/CarpuselDemoTestimonial";
import { useGetAllTestimonialsQuery } from "@/lib/redux/services/testimonialsApi";
import { testimonial_Slider } from "@/data/HomeDate";
import "../../app/home/home.css";
import Travel_Table from "./productTable/travel_Table";
import Home_Table from "./productTable/home_Table";
import Motor_Table from "./productTable/motor_Table";
import Self_Table from "./productTable/self_Table";

type ProductPageTemplateProps = {
  product: any;
};

export default function ProductPageTemplate({
  product,
}: ProductPageTemplateProps) {
  const [banner, setBanner] = useState<any>(null);
  const [bannerLoading, setBannerLoading] = useState(true);
  const [bannerError, setBannerError] = useState(false);

  const quoteRef = useRef<HTMLDivElement | null>(null);
  const [selectedMotorPlanKey, setSelectedMotorPlanKey] = useState("");

  useEffect(() => {
    setSelectedMotorPlanKey("");
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

    scrollToQuoteSection();
  };

  const selectedMotorDetails =
    product.detailsType === "motor" && selectedMotorPlanKey
      ? (product.motorPlanDetails?.[selectedMotorPlanKey] ?? product.details)
      : product.details;

  const renderProductDetails = () => {
    if (!product.showBenefitsTable) return null;

    switch (product.detailsType) {
      case "health":
        return product.benefits ? (
          <ProductBenefitsSection benefits={product.benefits} />
        ) : null;

      case "travel":
        return product.details ? (
          <Travel_Table details={product.details} />
        ) : null;

      case "motor":
        return selectedMotorDetails ? (
          <Motor_Table
            key={selectedMotorPlanKey || "default-motor-table"}
            details={selectedMotorDetails}
            // defaultOpen={true}
            // openOnDetailsChange={true}
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
          <QuoteSection />
        </div>
      )}

      {product.showCTA && <ProductCTA />}

      {product.showTestimonials && <TestimonialsPreview />}
    </>
  );
}
