"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/home/container";

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

const cardPop = (on: boolean, delay = 0): React.CSSProperties => ({
  opacity: on ? 1 : 0,
  transform: on ? "translateY(0) scale(1)" : "translateY(30px) scale(0.94)",
  transition: `opacity 0.55s ease ${delay}ms,
               transform 0.6s cubic-bezier(0.34,1.45,0.64,1) ${delay}ms`,
  willChange: "opacity, transform",
});

type ProductTrustCardsProps = {
  heading: string;
  cards: any[];
};

export default function ProductTrustCards({
  heading,
  cards,
}: ProductTrustCardsProps) {
  const [activeTrustCard, setActiveTrustCard] = useState(0);

  const { ref: headingRef, visible: headingOn } = useInView(0.1);
  const { ref: cardsRef, visible: cardsOn } = useInView(0.1);

  return (
    <div className="space-y-10 py-20">
      <h1
        ref={headingRef as React.RefObject<HTMLHeadingElement>}
        className="text-center font-futura text-4xl font-medium uppercase text-[#4A4A4A]"
        style={fadeUp(headingOn)}
      >
        {heading}
      </h1>

      <Container>
        <div
          ref={cardsRef}
          className="mx-auto flex max-w-4xl justify-center gap-8"
        >
          {cards.map((item, index) => {
            const isActive = activeTrustCard === index;

            return (
              <div
                key={index}
                onClick={() => setActiveTrustCard(index)}
                className={`group flex h-22 cursor-pointer items-center gap-3 rounded-lg border-2 bg-white px-10 py-6 text-[#4A4A4A] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#BA0C2F] hover:text-white hover:shadow-xl ${
                  isActive ? "border-[#BA0C2F]" : "border-transparent"
                }`}
                style={cardPop(cardsOn, index * 120)}
              >
                <div className="relative h-10 w-10 shrink-0">
                  <Image
                    src={Object.values(item.card_image || {})[0] as any}
                    alt=""
                    className="transition-all group-hover:brightness-0 group-hover:invert"
                  />
                </div>

                <h1 className="font-futura text-[16px] uppercase leading-tight">
                  {item.card_title}
                </h1>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
