"use client";

import { useEffect, useRef, useState } from "react";
import Card_package from "@/components/healthCare/Card_package";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "-120px 0px",
      },
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

const fadeUp = (on: boolean, delay = 0): React.CSSProperties => ({
  opacity: on ? 1 : 0,
  transform: on ? "translateY(0)" : "translateY(32px)",
  transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
  willChange: "opacity, transform",
});

// type ProductPlansProps = {
//   heading: string;
//   plans: any[];
//   showDescription?: boolean;
//   enableHover?: boolean;
//   showPrice?: boolean;
// };

type ProductPlansProps = {
  heading: string;
  plans: any[];
  showDescription?: boolean;
  enableHover?: boolean;
  showPrice?: boolean;
  selectedCategory?: string;
  onGetPlanClick?: (data: {
    coverageType: string;
    selectedProduct: string;
    planKey?: string;
    plan?: any;
  }) => void;
};

export default function ProductPlans({
  heading,
  plans,
  showDescription = false,
  enableHover = true,
  showPrice = true,
  selectedCategory = "",
  onGetPlanClick,
}: ProductPlansProps) {
  const { ref, visible } = useInView(0.08);

  return (
    <div ref={ref}>
      <div
        className="flex flex-col items-center justify-center "
        style={fadeUp(visible)}
      >
        <h2 className="text-center font-futura text-3xl font-medium uppercase text-[#4A4A4A] sm:text-4xl md:text-4xl">
          {heading}
        </h2>
      </div>

      <div style={fadeUp(visible, 160)}>
        <Card_package
          plans={plans}
          showDescription={showDescription}
          enableHover={enableHover}
          showPrice={showPrice}
          selectedCategory={selectedCategory}
          onGetPlanClick={onGetPlanClick}
        />
      </div>
    </div>
  );
}
