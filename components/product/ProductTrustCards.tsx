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
  transform: on ? "translate3d(0, 0, 0)" : "translate3d(0, 32px, 0)",
  transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
  willChange: "opacity, transform",
});

const cardPop = (on: boolean, delay = 0): React.CSSProperties => ({
  opacity: on ? 1 : 0,
  transform: on ? "translate3d(0, 0, 0)" : "translate3d(0, 24px, 0)",
  transition: `opacity 0.55s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  willChange: "opacity, transform",
  backfaceVisibility: "hidden",
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
            const defaultImage = Object.values(item.card_image || {})[0] as any;

            return (
              <div
                key={index}
                onClick={() => setActiveTrustCard(index)}
                className={`group flex h-[96px] flex-1 basis-0 cursor-pointer items-center gap-3 rounded-lg border-2 bg-white px-6 py-6 text-[#4A4A4A] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-colors transition-shadow transition-transform duration-300 ease-out hover:-translate-y-1 hover:bg-[#BA0C2F] hover:text-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)] ${
                  isActive ? "border-[#BA0C2F]" : "border-transparent"
                }`}
                style={cardPop(cardsOn, index * 120)}
              >
                <div className="relative h-10 w-10 shrink-0 overflow-hidden">
                  <Image
                    src={defaultImage}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-contain opacity-100 transition-opacity duration-300 ease-out group-hover:opacity-0"
                  />

                  <Image
                    src={defaultImage}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-contain opacity-0 brightness-0 invert transition-opacity duration-300 ease-out group-hover:opacity-100"
                  />
                </div>

                <h1 className="font-futura text-[16px] uppercase leading-tight">
                  {item.card_title}
                </h1>
              </div>
            );
          })}{" "}
        </div>
      </Container>
    </div>
  );
}
