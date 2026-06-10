"use client";

import { useRef, useState } from "react";
import Container from "@/components/home/container";
import BenefitsTable from "@/components/parentCares/BenefitsTable";

type ProductBenefitsSectionProps = {
  benefits: {
    plans: any[];
    sections: any[];
    note?: any;
  };
};

export default function ProductBenefitsSection({
  benefits,
}: ProductBenefitsSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const handleToggleBenefits = () => {
    if (isOpen) {
      setIsOpen(false);

      setTimeout(() => {
        buttonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <section className="w-full">
      {isOpen && (
        <div className="animate-benefits-table-open">
          <Container>
            <BenefitsTable
              // variant={benefits.variant || "default"}
              plans={benefits.plans}
              sections={benefits.sections}
              note={benefits.note}
            />
          </Container>
        </div>
      )}

      <div
        ref={buttonRef}
        className={isOpen ? "mt-4 flex justify-center" : "flex justify-center"}
      >
        <button
          type="button"
          onClick={handleToggleBenefits}
          aria-expanded={isOpen}
          className="inline-flex cursor-pointer items-center gap-2 font-futura text-[18px] font-semibold text-[#BA0C2F] transition-colors duration-300 hover:text-[#BA0C2F]"
        >
          <span className="border-b-2 border-b-[#BA0C2F]">
            {isOpen ? "Hide more Benefits" : "View more Benefits"}
          </span>

          <span className="text-[22px] leading-none">{isOpen ? "-" : "+"}</span>
        </button>
      </div>

      <style jsx>{`
        .animate-benefits-table-open {
          animation: benefitsTableOpen 0.45s ease forwards;
          transform-origin: bottom;
        }

        @keyframes benefitsTableOpen {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
