"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/home/container";
import Button from "@/components/common/button";
import person from "../../public/img/HealthCare/2d09dd2119eece4576b8ff0017b531d302b35e17.png";

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

const fromLeft = (on: boolean, delay = 0): React.CSSProperties => ({
  opacity: on ? 1 : 0,
  transform: on ? "translateX(0)" : "translateX(-52px)",
  transition: `opacity 0.85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms,
               transform 0.85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
  willChange: "opacity, transform",
});

const fromRight = (on: boolean, delay = 0): React.CSSProperties => ({
  opacity: on ? 1 : 0,
  transform: on ? "translateX(0)" : "translateX(52px)",
  transition: `opacity 0.85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms,
               transform 0.85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
  willChange: "opacity, transform",
});

export default function ProductCTA() {
  const { ref, visible } = useInView(0.15);

  return (
    <div className="mt-10 overflow-visible bg-[#5b677039]" ref={ref}>
      <Container>
        <div className="mx-auto flex max-w-4xl items-end justify-between overflow-visible">
          <div
            className="flex flex-col justify-center space-y-4"
            style={fromLeft(visible, 100)}
          >
            <h1 className="font-futura text-3xl font-bold uppercase text-black">
              Not sure which plan to choose?
              <br /> Let Us guide you
            </h1>

            <div className="pb-4">
              <Button
                text="Guide Me"
                className="cursor-pointer rounded-full border border-[#BA0C2F] bg-[#FFFFFF] px-8 py-2 font-futura font-semibold text-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-[#FFFFFF] md:px-12 md:py-3"
              />
            </div>
          </div>

          <div
            className="-mt-[10px] flex items-end"
            style={fromRight(visible, 200)}
          >
            <Image
              src={person}
              alt="person"
              className="h-auto w-56 object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
