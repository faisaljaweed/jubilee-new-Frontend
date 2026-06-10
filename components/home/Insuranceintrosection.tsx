"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const clamp01 = (v: number, a: number, b: number) =>
  Math.min(1, Math.max(0, (v - a) / (b - a)));

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const INTRO_TEXT =
  "Still Thinking? Experience Yourself With Jubilee General Insurance.";

const STEPS = [
  {
    label: "STEP 01:",
    text: (
      <>
        Choose the plan
        <br /> as per your need
      </>
    ),
  },
  {
    label: "STEP 02:",
    text: (
      <>
        Submit the required
        <br /> details
      </>
    ),
  },
  {
    label: "STEP 03:",
    text: (
      <>
        Enjoy instant issuance
        <br /> & coverage
      </>
    ),
  },
] as const;

const PH = {
  TEXT_IN: [0.02, 0.34] as const,

  /**
   * Video starts immediately after text reveal completes.
   */
  VIDEO_IN: [0.34, 0.88] as const,

  /**
   * Text fade starts exactly when video starts.
   * Text fully fades when video is around half visible.
   */
  TEXT_FADE_OUT: [0.34, 0.58] as const,

  /**
   * Bottom content appears after video is mostly inside.
   */
  VIDEO_CONTENT_IN: [0.62, 0.84] as const,
} as const;

type CharItem = {
  char: string;
  globalIndex: number;
  wordIndex: number;
};

function buildChars(text: string): CharItem[] {
  const words = text.split(" ");
  const chars: CharItem[] = [];
  let globalIndex = 0;

  words.forEach((word, wordIndex) => {
    const wordWithSpace = wordIndex === words.length - 1 ? word : `${word} `;

    wordWithSpace.split("").forEach((char) => {
      chars.push({
        char,
        globalIndex,
        wordIndex,
      });

      globalIndex += 1;
    });
  });

  return chars;
}

// function DaylightText({
//   text,
//   reveal,
//   fadeOut,
//   maxWidth,
// }: {
//   text: string;
//   reveal: number;
//   fadeOut: number;
//   maxWidth: string;
// }) {
//   const chars = useMemo(() => buildChars(text), [text]);
//   const totalChars = chars.length;

//   const fadeT = easeInOutCubic(fadeOut);
//   const containerOpacity = lerp(1, 0, fadeT);
//   const containerBlur = lerp(0, 2.5, fadeT);

//   return (
//     <h2
//       style={{
//         position: "absolute",
//         left: "50%",
//         top: "50%",
//         width: "100%",
//         maxWidth,
//         padding: "0 24px",
//         margin: 0,
//         textAlign: "center",
//         color: "#1a1a1a",
//         fontFamily: "var(--font-futura, 'Futura', sans-serif)",
//         fontSize: "clamp(38px, 5.3vw, 82px)",
//         fontWeight: 700,
//         lineHeight: 1.04,
//         letterSpacing: "-0.055em",
//         transform: "translate3d(-50%, -50%, 0)",
//         opacity: containerOpacity,
//         filter: `blur(${containerBlur}px)`,
//         pointerEvents: "none",
//         zIndex: 2,
//         perspective: "900px",
//         willChange: "opacity, filter",
//       }}
//     >
//       <span
//         style={{
//           display: "block",
//           perspective: "900px",
//         }}
//       >
//         {chars.map((item) => {
//           const delayByChar = item.globalIndex / totalChars;

//           const localReveal = clamp01(
//             reveal,
//             delayByChar * 0.78,
//             delayByChar * 0.78 + 0.18,
//           );

//           const inT = easeOutCubic(localReveal);

//           const opacity = lerp(0, 1, inT);
//           const y = lerp(34, 0, inT);
//           const rotateX = lerp(62, 0, inT);
//           const blur = lerp(8, 0, inT);

//           return (
//             <span
//               key={`${item.char}-${item.globalIndex}`}
//               style={{
//                 display: "inline-block",
//                 whiteSpace: "pre",
//                 opacity,
//                 transform: `translate3d(0, ${y}px, 0) rotateX(${rotateX}deg)`,
//                 transformOrigin: "50% 65%",
//                 filter: `blur(${blur}px)`,
//                 willChange: "transform, opacity, filter",
//               }}
//             >
//               {item.char}
//             </span>
//           );
//         })}
//       </span>
//     </h2>
//   );
// }

function DaylightText({
  text,
  reveal,
  fadeOut,
  maxWidth,
}: {
  text: string;
  reveal: number;
  fadeOut: number;
  maxWidth: string;
}) {
  const chars = useMemo(() => buildChars(text), [text]);
  const totalChars = chars.length;

  const fadeT = easeInOutCubic(fadeOut);
  const containerOpacity = lerp(1, 0, fadeT);
  const containerBlur = lerp(0, 2.5, fadeT);

  const redText = "Jubilee General";
  const redTextStart = text.indexOf(redText);
  const redTextEnd = redTextStart >= 0 ? redTextStart + redText.length : -1;

  return (
    <h2
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: "100%",
        maxWidth,
        padding: "0 24px",
        margin: 0,
        textAlign: "center",
        color: "#1a1a1a",
        fontFamily: "var(--font-futura, 'Futura', sans-serif)",
        fontSize: "clamp(38px, 5.3vw, 82px)",
        fontWeight: 700,
        lineHeight: 1.04,
        letterSpacing: "-0.055em",
        transform: "translate3d(-50%, -50%, 0)",
        opacity: containerOpacity,
        filter: `blur(${containerBlur}px)`,
        pointerEvents: "none",
        zIndex: 2,
        perspective: "900px",
        willChange: "opacity, filter",
      }}
    >
      <span
        style={{
          display: "block",
          perspective: "900px",
        }}
      >
        {chars.map((item) => {
          const delayByChar = item.globalIndex / totalChars;

          const localReveal = clamp01(
            reveal,
            delayByChar * 0.78,
            delayByChar * 0.78 + 0.18,
          );

          const inT = easeOutCubic(localReveal);

          const opacity = lerp(0, 1, inT);
          const y = lerp(34, 0, inT);
          const rotateX = lerp(62, 0, inT);
          const blur = lerp(8, 0, inT);

          const isJubileeGeneral =
            redTextStart >= 0 &&
            item.globalIndex >= redTextStart &&
            item.globalIndex < redTextEnd;

          const redProgress = easeInOutCubic(clamp01(reveal, 0.78, 1));
          const color = isJubileeGeneral
            ? `rgb(${Math.round(lerp(26, 186, redProgress))}, ${Math.round(
                lerp(26, 12, redProgress),
              )}, ${Math.round(lerp(26, 47, redProgress))})`
            : "#1a1a1a";

          return (
            <span
              key={`${item.char}-${item.globalIndex}`}
              style={{
                display: "inline-block",
                whiteSpace: "pre",
                opacity,
                color,
                transform: `translate3d(0, ${y}px, 0) rotateX(${rotateX}deg)`,
                transformOrigin: "50% 65%",
                filter: `blur(${blur}px)`,
                willChange: "transform, opacity, filter, color",
              }}
            >
              {item.char}
            </span>
          );
        })}
      </span>
    </h2>
  );
}
function AnimatedVideoContent({
  children,
  progress,
  delay = 0,
}: {
  children: React.ReactNode;
  progress: number;
  delay?: number;
}) {
  const t = easeOutQuart(clamp01(progress, delay, delay + 0.55));

  return (
    <div
      style={{
        opacity: t,
        transform: `translate3d(0, ${lerp(34, 0, t)}px, 0)`,
        filter: `blur(${lerp(8, 0, t)}px)`,
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </div>
  );
}

export default function InsuranceIntroSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const targetProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const readTargetProgress = () => {
      const el = wrapperRef.current;
      if (!el) return;

      const scrollable = el.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -el.getBoundingClientRect().top);

      targetProgressRef.current =
        scrollable > 0 ? Math.min(1, scrolled / scrollable) : 0;
    };

    const tick = () => {
      readTargetProgress();

      const current = smoothProgressRef.current;
      const target = targetProgressRef.current;

      /**
       * Smaller number = smoother/slower easing.
       * 0.09 feels close to premium scroll-scrub animation.
       */
      const next = lerp(current, target, 0.09);

      smoothProgressRef.current = next;
      setProgress(next);

      rafRef.current = requestAnimationFrame(tick);
    };

    tick();

    window.addEventListener("scroll", readTargetProgress, { passive: true });
    window.addEventListener("resize", readTargetProgress);

    return () => {
      window.removeEventListener("scroll", readTargetProgress);
      window.removeEventListener("resize", readTargetProgress);

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const textReveal = clamp01(progress, ...PH.TEXT_IN);
  const textFadeOut = clamp01(progress, ...PH.TEXT_FADE_OUT);

  const videoRawT = clamp01(progress, ...PH.VIDEO_IN);
  const videoT = easeOutCubic(videoRawT);

  const videoContentRawT = clamp01(progress, ...PH.VIDEO_CONTENT_IN);

  /**
   * Video comes from very right.
   * At videoT 0 = fully outside right.
   * At videoT 1 = fully in place.
   */
  const videoX = lerp(120, 0, videoT);
  const videoScale = lerp(0.965, 1, videoT);
  const videoRadius = lerp(34, 20, videoT);

  return (
    <div
      ref={wrapperRef}
      style={{
        height: "500vh",
        position: "relative",
        background: "#ffffff",
      }}
    >
      <section
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            mixBlendMode: "multiply",
          }}
        >
          <DaylightText
            text={INTRO_TEXT}
            reveal={textReveal}
            fadeOut={textFadeOut}
            maxWidth="16em"
          />
        </div>

        <div
          style={{
            position: "absolute",
            inset: "20px",
            zIndex: 5,
            borderRadius: `${videoRadius}px`,
            overflow: "hidden",
            transform: `translate3d(${videoX}vw, 0, 0) scale(${videoScale})`,
            opacity: 1,
            willChange: "transform, border-radius",
            boxShadow:
              "0 0 0 1.5px rgba(0,0,0,0.08), 0 24px 70px rgba(0,0,0,0.24)",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          >
            <source src="/video/intro.mp4" type="video/mp4" />
          </video>

          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "62%",
              zIndex: 1,
              pointerEvents: "none",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 2,
              display: "grid",
              gridTemplateColumns: "35% 1fr 1fr 1fr",
              alignItems: "end",
              padding: "32px 40px 36px",
            }}
          >
            <AnimatedVideoContent progress={videoContentRawT} delay={0}>
              <div style={{ paddingRight: "32px" }}>
                <h4
                  style={{
                    fontFamily: "var(--font-futura, 'Futura', sans-serif)",
                    fontSize: "clamp(40px, 1.8vw, 32px)",
                    fontWeight: 700,
                    color: "#ffffff",
                    textTransform: "uppercase",
                    lineHeight: 1.2,
                    margin: "0 0 20px 0",
                  }}
                >
                  Insurance in
                  <br />3 simple steps
                </h4>

                {/* <button
                  style={{
                    fontFamily: "var(--font-futura, 'Futura', sans-serif)",
                    fontSize: "clamp(11px, 0.85vw, 13px)",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#BA0C2F",
                    backgroundColor: "#ffffff",
                    border: "1.5px solid #ffffff",
                    borderRadius: "100px",
                    padding: "10px 28px",
                    cursor: "pointer",
                    transition: "background-color 0.22s ease, color 0.22s ease",
                  }}
                  onMouseEnter={(e) => {
                    const b = e.currentTarget;
                    b.style.backgroundColor = "#BA0C2F";
                    b.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    const b = e.currentTarget;
                    b.style.backgroundColor = "#ffffff";
                    b.style.color = "#BA0C2F";
                  }}
                >
                  PROTECT NOW
                </button> */}
              </div>
            </AnimatedVideoContent>

            {STEPS.map(({ label, text }, index) => (
              <AnimatedVideoContent
                key={label}
                progress={videoContentRawT}
                delay={0.12 + index * 0.11}
              >
                <div
                  style={{
                    paddingLeft: "28px",
                    borderLeft: "1px solid rgba(255,255,255,0.22)",
                  }}
                >
                  <h5
                    style={{
                      fontFamily: "var(--font-futura, 'Futura', sans-serif)",
                      fontSize: "clamp(22px, 2.2vw, 30px)",
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: "0 0 10px 0",
                    }}
                  >
                    {label}
                  </h5>

                  <p
                    style={{
                      fontFamily: "var(--font-futura, 'Futura', sans-serif)",
                      fontSize: "18px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.76)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {text}
                  </p>
                </div>
              </AnimatedVideoContent>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
