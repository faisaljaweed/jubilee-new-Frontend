"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const clamp01 = (v: number, a: number, b: number) =>
  Math.min(1, Math.max(0, (v - a) / (b - a)));

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

type ServiceItem = {
  title: string;
  text: string;
  icon: any;
  image: any;
  tag?: string;
};

function getItemMotion(index: number, phase: number, introT: number) {
  const distance = index - phase;
  const abs = Math.abs(distance);

  const visibleT = 1 - clamp01(abs, 0.08, 0.72);
  const opacity = easeOutCubic(visibleT) * introT;

  const y = distance * 360 + lerp(120, 0, introT);
  const scale = lerp(0.96, 1, visibleT);
  const blur = lerp(8, 0, visibleT);

  return {
    opacity,
    y,
    scale,
    blur,
    visible: opacity > 0.01,
  };
}

function getScreenMotion(index: number, phase: number, introT: number) {
  const distance = index - phase;
  const abs = Math.abs(distance);

  const visibleT = 1 - clamp01(abs, 0.15, 0.95);
  const opacity = easeOutCubic(visibleT) * introT;

  return {
    yPercent: distance * 100,
    opacity,
    blur: lerp(10, 0, visibleT),
    scale: lerp(0.985, 1, visibleT),
    visible: opacity > 0.01,
  };
}

export default function CtrlStyleScrollableSection({
  services,
}: {
  services: ServiceItem[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const targetProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);

  const [progress, setProgress] = useState(0);

  const items = services.slice(0, 3);
  const maxPhase = Math.max(1, items.length - 1);

  useEffect(() => {
    const readTarget = () => {
      const el = sectionRef.current;
      if (!el) return;

      const scrollable = el.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -el.getBoundingClientRect().top);

      targetProgressRef.current =
        scrollable > 0 ? Math.min(1, scrolled / scrollable) : 0;
    };

    const tick = () => {
      readTarget();

      const current = smoothProgressRef.current;
      const target = targetProgressRef.current;

      /**
       * Smaller = smoother and more premium.
       * Increase to 0.12 if it feels too slow.
       */
      const next = lerp(current, target, 0.085);

      smoothProgressRef.current = next;
      setProgress(next);

      rafRef.current = requestAnimationFrame(tick);
    };

    tick();

    window.addEventListener("scroll", readTarget, { passive: true });
    window.addEventListener("resize", readTarget);

    return () => {
      window.removeEventListener("scroll", readTarget);
      window.removeEventListener("resize", readTarget);

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const introT = easeOutCubic(clamp01(progress, 0.02, 0.14));
  const phase = clamp01(progress, 0.12, 0.92) * maxPhase;

  return (
    <div
      ref={sectionRef}
      style={{
        height: "650vh",
        position: "relative",
        backgroundColor: "#ffffff",
      }}
    >
      <section
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          overflow: "hidden",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1280px",
            display: "grid",
            gridTemplateColumns: "345px minmax(0, 1fr) 390px",
            gap: "28px",
            alignItems: "center",
          }}
        >
          {/* LEFT TITLE CARDS */}
          <div
            style={{
              position: "relative",
              height: "330px",
              overflow: "visible",
            }}
          >
            {items.map((service, index) => {
              const motion = getItemMotion(index, phase, introT);

              return (
                <div
                  key={`title-${service.title}`}
                  style={{
                    position: "absolute",
                    inset: 0,
                    height: "320px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    opacity: motion.opacity,
                    visibility: motion.visible ? "visible" : "hidden",
                    transform: `translate3d(0, ${motion.y}px, 0) scale(${motion.scale})`,
                    filter: `blur(${motion.blur}px)`,
                    willChange: "transform, opacity, filter",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: "28px",
                      backgroundColor: "#BA0C2F",
                      borderRadius: "12px",
                      boxSizing: "border-box",
                      color: "#ffffff",
                    }}
                  >
                    <h3
                      className="font-futura font-bold uppercase leading-tight"
                      style={{
                        fontSize: "32px",
                        lineHeight: "1.05",
                        letterSpacing: "-0.03em",
                        margin: 0,
                        maxWidth: "260px",
                      }}
                    >
                      {service.title}
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        gap: "20px",
                      }}
                    >
                      <div
                        className="font-futura"
                        style={{
                          fontSize: "18px",
                          lineHeight: 1,
                          fontWeight: 500,
                          color: "rgba(255,255,255,0.86)",
                        }}
                      >
                        {service.tag}
                      </div>

                      <img
                        src={service.icon.src}
                        alt=""
                        width={54}
                        height={54}
                        style={{
                          filter: "brightness(0) invert(1)",
                          flexShrink: 0,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CENTER APP / SCREEN */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              opacity: introT,
              transform: `translate3d(0, ${lerp(80, 0, introT)}px, 0)`,
              willChange: "transform, opacity",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "430px",
                height: "640px",
                borderRadius: "34px",
                overflow: "hidden",
                border: "3px solid #1C1C1E",
                backgroundColor: "#111111",
                boxShadow:
                  "0 0 0 1px rgba(0,0,0,0.06), 0 26px 80px rgba(0,0,0,0.28)",
              }}
            >
              {items.map((service, index) => {
                const motion = getScreenMotion(index, phase, introT);

                return (
                  <div
                    key={`screen-${service.title}`}
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: index + 1,
                      opacity: motion.opacity,
                      visibility: motion.visible ? "visible" : "hidden",
                      transform: `translate3d(0, ${motion.yPercent}%, 0) scale(${motion.scale})`,
                      filter: `blur(${motion.blur}px)`,
                      willChange: "transform, opacity, filter",
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      priority={index === 0}
                      className="object-cover"
                    />
                  </div>
                );
              })}

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 20,
                  pointerEvents: "none",
                  boxShadow:
                    "inset 0 0 0 1px rgba(255,255,255,0.12), inset 0 0 40px rgba(0,0,0,0.18)",
                }}
              />
            </div>
          </div>

          {/* RIGHT TEXT CARDS */}
          <div
            style={{
              position: "relative",
              height: "320px",
              overflow: "visible",
            }}
          >
            {items.map((service, index) => {
              const motion = getItemMotion(index, phase, introT);

              return (
                <div
                  key={`text-${service.title}`}
                  style={{
                    position: "absolute",
                    inset: 0,
                    minHeight: "260px",
                    borderRadius: "12px",
                    backgroundColor: "#F4F4F4",
                    padding: "28px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    opacity: motion.opacity,
                    visibility: motion.visible ? "visible" : "hidden",
                    transform: `translate3d(0, ${motion.y}px, 0) scale(${motion.scale})`,
                    filter: `blur(${motion.blur}px)`,
                    willChange: "transform, opacity, filter",
                  }}
                >
                  <p
                    className="font-futura"
                    style={{
                      margin: 0,
                      maxWidth: "330px",
                      fontSize: "22px",
                      lineHeight: "1.18",
                      letterSpacing: "-0.03em",
                      color: "#1A1A1A",
                      fontWeight: 500,
                    }}
                  >
                    {service.text}
                  </p>

                  <div
                    style={{
                      width: "54px",
                      height: "54px",
                      borderRadius: "999px",
                      backgroundColor: "#BA0C2F",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "flex-end",
                    }}
                  >
                    <img
                      src={service.icon.src}
                      alt=""
                      width={28}
                      height={28}
                      style={{
                        filter: "brightness(0) invert(1)",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
