// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Container from "@/components/home/container";
// import "../../app/about/about.css";
// const ICON_PATH = "/img/About/a3543a94365022d620765a68c3483a16ae9b24ce.png";

// const clamp = (value: number, min: number, max: number) => {
//   return Math.min(Math.max(value, min), max);
// };

// const getSlideStyle = (
//   progress: number,
//   start: number,
//   end: number,
//   stayVisible = false,
// ): React.CSSProperties => {
//   if (stayVisible && progress >= end) {
//     return {
//       opacity: 1,
//       transform: "translateY(0vh)",
//       willChange: "transform, opacity",
//       pointerEvents: "auto",
//     };
//   }

//   const localProgress = clamp((progress - start) / (end - start), 0, 1);

//   let opacity = 0;
//   let translateY = 90;

//   if (localProgress <= 0.35) {
//     const enterProgress = localProgress / 0.35;
//     opacity = enterProgress;
//     translateY = 90 - enterProgress * 90;
//   }

//   if (localProgress > 0.35 && localProgress <= 0.72) {
//     opacity = 1;
//     translateY = 0;
//   }

//   if (localProgress > 0.72) {
//     if (stayVisible) {
//       opacity = 1;
//       translateY = 0;
//     } else {
//       const exitProgress = (localProgress - 0.72) / 0.28;
//       opacity = 1 - exitProgress;
//       translateY = -35 * exitProgress;
//     }
//   }

//   return {
//     opacity,
//     transform: `translateY(${translateY}vh)`,
//     willChange: "transform, opacity",
//     pointerEvents: opacity > 0.5 ? "auto" : "none",
//   };
// };

// const getValueStyle = (
//   progress: number,
//   start: number,
//   end: number,
// ): React.CSSProperties => {
//   if (progress >= end) {
//     return {
//       opacity: 1,
//       transform: "translateY(0px)",
//       willChange: "transform, opacity",
//     };
//   }

//   const localProgress = clamp((progress - start) / (end - start), 0, 1);

//   const opacity = localProgress;
//   const translateY = 70 - localProgress * 70;

//   return {
//     opacity,
//     transform: `translateY(${translateY}px)`,
//     willChange: "transform, opacity",
//   };
// };

// export default function MissionVisionScrollSection() {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const section = sectionRef.current;
//       const rect = section.getBoundingClientRect();

//       const sectionHeight = section.offsetHeight;
//       const viewportHeight = window.innerHeight;
//       const scrollableHeight = sectionHeight - viewportHeight;

//       const scrolled = clamp(-rect.top, 0, scrollableHeight);
//       const nextProgress =
//         scrollableHeight > 0 ? scrolled / scrollableHeight : 0;

//       setProgress(nextProgress);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     window.addEventListener("resize", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleScroll);
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative min-h-[450vh] bg-[#BA0C2F]">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <Container>
//           <div className="texture_background relative h-screen w-full">
//             {/* Vision */}
//             <div className="absolute inset-0 flex items-center">
//               <div style={getSlideStyle(progress, 0.03, 0.35)}>
//                 <div className="flex flex-col items-start">
//                   <img
//                     src={ICON_PATH}
//                     alt=""
//                     className="mb-8 h-24 w-24 object-cover md:h-32 md:w-32"
//                   />

//                   <h2 className="font-futura text-[22px] font-semibold uppercase tracking-wide text-white md:text-[32px]">
//                     Vision
//                   </h2>

//                   <h1 className="mt-3 max-w-[850px] font-futura text-3xl font-medium leading-tight text-white md:text-5xl md:leading-[1.2]">
//                     Enabling people to overcome uncertainty.
//                   </h1>
//                 </div>
//               </div>
//             </div>

//             {/* Mission */}
//             <div className="absolute inset-0 flex items-center">
//               <div style={getSlideStyle(progress, 0.35, 0.67)}>
//                 <div className="flex flex-col items-start">
//                   <img
//                     src={ICON_PATH}
//                     alt=""
//                     className="mb-8 h-24 w-24 object-cover md:h-32 md:w-32"
//                   />

//                   <h2 className="font-futura text-[22px] font-semibold uppercase tracking-wide text-white md:text-[32px]">
//                     Mission
//                   </h2>

//                   <h1 className="mt-3 max-w-[900px] font-futura text-3xl font-medium leading-tight text-white md:text-5xl md:leading-[1.2]">
//                     To provide solutions to protect the future of our customers.
//                   </h1>
//                 </div>
//               </div>
//             </div>

//             {/* Core Values */}
//             <div className="absolute inset-0 flex items-center">
//               <div style={getSlideStyle(progress, 0.67, 1, true)}>
//                 <div className="flex flex-col items-start">
//                   <img
//                     src={ICON_PATH}
//                     alt=""
//                     className="mb-8 h-24 w-24 object-cover md:h-32 md:w-32"
//                   />

//                   <h2 className="font-futura text-[22px] font-semibold uppercase tracking-wide text-white md:text-[32px]">
//                     Core Values
//                   </h2>

//                   <div className="mt-8 grid gap-3 sm:grid-cols-2 md:gap-4">
//                     <div
//                       style={getValueStyle(progress, 0.72, 0.8)}
//                       className="rounded-2xl bg-white/10 px-6 py-4 font-futura text-2xl font-medium text-white backdrop-blur-sm md:px-8 md:py-5 md:text-4xl"
//                     >
//                       Teamwork
//                     </div>

//                     <div
//                       style={getValueStyle(progress, 0.76, 0.84)}
//                       className="rounded-2xl bg-white/10 px-6 py-4 font-futura text-2xl font-medium text-white backdrop-blur-sm md:px-8 md:py-5 md:text-4xl"
//                     >
//                       Integrity
//                     </div>

//                     <div
//                       style={getValueStyle(progress, 0.8, 0.88)}
//                       className="rounded-2xl bg-white/10 px-6 py-4 font-futura text-2xl font-medium text-white backdrop-blur-sm md:px-8 md:py-5 md:text-4xl"
//                     >
//                       Excellence
//                     </div>

//                     <div
//                       style={getValueStyle(progress, 0.84, 0.92)}
//                       className="rounded-2xl bg-white/10 px-6 py-4 font-futura text-2xl font-medium text-white backdrop-blur-sm md:px-8 md:py-5 md:text-4xl"
//                     >
//                       Passion
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/home/container";
import "../../app/about/about.css";

// const ICON_PATH = "/img/About/a3543a94365022d620765a68c3483a16ae9b24ce.png";
const VISION = "/Icons/About Us/Vision.png";
const MISSION = "/Icons/About Us/mission.png";
const CORE_VALUES = "/Icons/About Us/core-values.png";
const clamp = (value: number, min = 0, max = 1) => {
  return Math.min(Math.max(value, min), max);
};

const mapRange = (
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
) => {
  const progress = clamp((value - inputMin) / (inputMax - inputMin));
  return outputMin + (outputMax - outputMin) * progress;
};

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

const getSlideMoveStyle = (
  progress: number,
  enterStart: number,
  enterEnd: number,
  exitStart: number,
  exitEnd: number,
  stayVisible = false,
): React.CSSProperties => {
  let translateY = 100;

  if (progress < enterStart) {
    translateY = 100;
  }

  if (progress >= enterStart && progress <= enterEnd) {
    translateY = mapRange(progress, enterStart, enterEnd, 100, 0);
  }

  if (progress > enterEnd && progress < exitStart) {
    translateY = 0;
  }

  if (progress >= exitStart && progress <= exitEnd) {
    if (stayVisible) {
      translateY = 0;
    } else {
      translateY = mapRange(progress, exitStart, exitEnd, 0, -120);
    }
  }

  if (progress > exitEnd) {
    translateY = stayVisible ? 0 : -120;
  }

  return {
    transform: `translate3d(0, ${translateY}vh, 0)`,
    willChange: "transform",
  };
};

const getValueMoveStyle = (
  progress: number,
  start: number,
  end: number,
): React.CSSProperties => {
  let translateY = 80;

  if (progress < start) {
    translateY = 80;
  }

  if (progress >= start && progress <= end) {
    translateY = mapRange(progress, start, end, 80, 0);
  }

  if (progress > end) {
    translateY = 0;
  }

  return {
    transform: `translate3d(0, ${translateY}px, 0)`,
    willChange: "transform",
  };
};

const getCharStyle = (
  progress: number,
  start: number,
  end: number,
  index: number,
  total: number,
): React.CSSProperties => {
  const step = (end - start) / Math.max(total, 1);

  const charStart = start + step * index;
  const charEnd = start + step * (index + 2.8);

  const charProgress = easeOutQuart(
    clamp((progress - charStart) / (charEnd - charStart)),
  );

  return {
    display: "inline-block",
    opacity: charProgress,
    transform: `translate3d(${mapRange(charProgress, 0, 1, 18, 0)}px, 0, 0)`,
    filter: `blur(${mapRange(charProgress, 0, 1, 4, 0)}px)`,
    willChange: "transform, opacity, filter",
  };
};

const AnimatedText = ({
  text,
  progress,
  start,
  end,
}: {
  text: string;
  progress: number;
  start: number;
  end: number;
}) => {
  const words = text.split(" ");
  const chars = Array.from(text);

  let globalCharIndex = 0;

  return (
    <>
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            marginRight: wordIndex === words.length - 1 ? "0" : "0.28em",
          }}
        >
          {Array.from(word).map((char) => {
            const currentIndex = globalCharIndex;
            globalCharIndex += 1;

            return (
              <span
                key={`${char}-${wordIndex}-${currentIndex}`}
                style={{
                  ...getCharStyle(
                    progress,
                    start,
                    end,
                    currentIndex,
                    chars.length,
                  ),
                  whiteSpace: "nowrap",
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </>
  );
};

export default function MissionVisionScrollSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const calculateProgress = () => {
      const rect = section.getBoundingClientRect();
      const scrollRange = section.offsetHeight - window.innerHeight;

      if (scrollRange <= 0) return 0;

      return clamp(-rect.top / scrollRange);
    };

    const animate = () => {
      const current = progressRef.current;
      const target = targetProgressRef.current;

      const next = current + (target - current) * 0.08;

      progressRef.current = next;
      setProgress(next);

      if (Math.abs(target - next) > 0.001) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        progressRef.current = target;
        setProgress(target);
        rafRef.current = null;
      }
    };

    const updateTarget = () => {
      targetProgressRef.current = calculateProgress();

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    updateTarget();

    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[520vh] bg-[#BA0C2F]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <Container>
          <div className="texture_background relative h-screen w-full overflow-hidden">
            {/* Vision */}
            <div className="absolute inset-0 flex items-center">
              <div
                style={getSlideMoveStyle(progress, 0.02, 0.18, 0.36, 0.46)}
                className="w-full"
              >
                <div className="flex flex-col items-start">
                  <img
                    src={VISION}
                    alt=""
                    className="mb-4 h-24 w-24 object-cover md:h-32 md:w-32"
                  />

                  <h2 className="font-futura text-[22px] font-semibold uppercase tracking-wide text-white md:text-[32px]">
                    <AnimatedText
                      text="Vision"
                      progress={progress}
                      start={0.2}
                      end={0.27}
                    />
                  </h2>

                  <h1 className="mt-3 max-w-[850px] font-futura text-3xl font-medium leading-tight text-white md:text-5xl md:leading-[1.2]">
                    <AnimatedText
                      text="Enabling people to overcome uncertainty."
                      progress={progress}
                      start={0.24}
                      end={0.34}
                    />
                  </h1>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="absolute inset-0 flex items-center">
              <div
                style={getSlideMoveStyle(progress, 0.38, 0.52, 0.7, 0.8)}
                className="w-full"
              >
                <div className="flex flex-col items-start">
                  <img
                    src={MISSION}
                    alt=""
                    className="mb-4 h-24 w-24 object-cover md:h-32 md:w-32"
                  />

                  <h2 className="font-futura text-[22px] font-semibold uppercase tracking-wide text-white md:text-[32px]">
                    <AnimatedText
                      text="Mission"
                      progress={progress}
                      start={0.54}
                      end={0.61}
                    />
                  </h2>

                  <h1 className="mt-3 max-w-[900px] font-futura text-3xl font-medium leading-tight text-white md:text-5xl md:leading-[1.2]">
                    <AnimatedText
                      text="To provide solutions that protect the future of our customers"
                      progress={progress}
                      start={0.58}
                      end={0.68}
                    />
                  </h1>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="absolute inset-0 flex items-center">
              <div
                style={getSlideMoveStyle(progress, 0.72, 0.84, 0.92, 1, true)}
                className="w-full"
              >
                <div className="flex flex-col items-start">
                  <img
                    src={CORE_VALUES}
                    alt=""
                    className="mb-4 h-24 w-24 object-cover md:h-32 md:w-32"
                  />

                  <h2 className="font-futura text-[22px] font-semibold uppercase tracking-wide text-white md:text-[32px]">
                    <AnimatedText
                      text="Core Values"
                      progress={progress}
                      start={0.85}
                      end={0.91}
                    />
                  </h2>
                  <div className="mt-8 grid w-full max-w-[680px] grid-cols-1 gap-4 overflow-visible sm:grid-cols-2 md:gap-5">
                    <div
                      style={getValueMoveStyle(progress, 0.72, 0.8)}
                      className="min-w-[260px] rounded-2xl bg-white px-8 py-5 text-center font-futura text-2xl font-medium leading-none text-[#BA0C2F] backdrop-blur-sm md:min-w-[340px] md:px-10 md:py-6 md:text-4xl"
                    >
                      Teamwork
                    </div>

                    <div
                      style={getValueMoveStyle(progress, 0.76, 0.84)}
                      className="min-w-[260px] rounded-2xl bg-white px-8 py-5 text-center font-futura text-2xl font-medium leading-none text-[#BA0C2F] backdrop-blur-sm md:min-w-[340px] md:px-10 md:py-6 md:text-4xl"
                    >
                      Integrity
                    </div>

                    <div
                      style={getValueMoveStyle(progress, 0.8, 0.88)}
                      className="min-w-[260px] rounded-2xl bg-white px-8 py-5 text-center font-futura text-2xl font-medium leading-none text-[#BA0C2F] backdrop-blur-sm md:min-w-[340px] md:px-10 md:py-6 md:text-4xl"
                    >
                      Excellence
                    </div>

                    <div
                      style={getValueMoveStyle(progress, 0.84, 0.92)}
                      className="min-w-[260px] rounded-2xl bg-white px-8 py-5 text-center font-futura text-2xl font-medium leading-none text-[#BA0C2F] backdrop-blur-sm md:min-w-[340px] md:px-10 md:py-6 md:text-4xl"
                    >
                      Passion
                    </div>
                  </div>

                  {/* <div className="mt-8 grid gap-3 sm:grid-cols-2 md:gap-4">
                    <div
                      style={getValueMoveStyle(progress, 0.88, 0.92)}
                      className="rounded-2xl bg-white/10 px-6 py-4 font-futura text-2xl font-medium text-white backdrop-blur-sm md:px-8 md:py-5 md:text-4xl"
                    >
                      <AnimatedText
                        text="Teamwork"
                        progress={progress}
                        start={0.9}
                        end={0.94}
                      />
                    </div>

                    <div
                      style={getValueMoveStyle(progress, 0.9, 0.94)}
                      className="rounded-2xl bg-white/10 px-6 py-4 font-futura text-2xl font-medium text-white backdrop-blur-sm md:px-8 md:py-5 md:text-4xl"
                    >
                      <AnimatedText
                        text="Integrity"
                        progress={progress}
                        start={0.92}
                        end={0.96}
                      />
                    </div>

                    <div
                      style={getValueMoveStyle(progress, 0.92, 0.96)}
                      className="rounded-2xl bg-white/10 px-6 py-4 font-futura text-2xl font-medium text-white backdrop-blur-sm md:px-8 md:py-5 md:text-4xl"
                    >
                      <AnimatedText
                        text="Excellence"
                        progress={progress}
                        start={0.94}
                        end={0.98}
                      />
                    </div>

                    <div
                      style={getValueMoveStyle(progress, 0.94, 0.98)}
                      className="rounded-2xl bg-white/10 px-6 py-4 font-futura text-2xl font-medium text-white backdrop-blur-sm md:px-8 md:py-5 md:text-4xl"
                    >
                      <AnimatedText
                        text="Passion"
                        progress={progress}
                        start={0.96}
                        end={1}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
