// "use client";

// import React, { useEffect, useRef, useState } from "react";

// const testimonials = [
//   {
//     name: "Arshia",
//     role: "Description",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//   },
//   {
//     name: "Huma",
//     role: "Description",
//     image:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//   },
//   {
//     name: "Hania Amir",
//     role: "Description",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
//     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//   },
//   {
//     name: "Sarah",
//     role: "Description",
//     image:
//       "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face",
//     text: "Amazing service and professional work. Highly recommended. Everything was delivered with quality and care.",
//   },
//   {
//     name: "Ayesha",
//     role: "Description",
//     image:
//       "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=face",
//     text: "The design and functionality were exactly what we needed. Communication was smooth and the final result looked great.",
//   },
//   {
//     name: "Danish",
//     role: "Description",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
//     text: "Very smooth experience and great communication throughout. Highly satisfied with the final work and support.",
//   },
//   {
//     name: "Ali Khan",
//     role: "Description",
//     image:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face",
//     text: "Excellent quality work delivered on time with great attention to detail. Very professional and easy to work with.",
//   },
// ];

// type TestimonialItem = {
//   name: string;
//   role: string;
//   image: string;
//   text: string;
// };

// function clamp(value: number, min = 0, max = 1) {
//   return Math.min(Math.max(value, min), max);
// }

// function mapRange(
//   value: number,
//   inputMin: number,
//   inputMax: number,
//   outputMin: number,
//   outputMax: number,
// ) {
//   const progress = clamp((value - inputMin) / (inputMax - inputMin));
//   return outputMin + (outputMax - outputMin) * progress;
// }

// function smoothstep(value: number) {
//   const x = clamp(value);
//   return x * x * (3 - 2 * x);
// }

// function TestimonialCard({
//   item,
//   index,
// }: {
//   item: TestimonialItem;
//   index: number;
// }) {
//   return (
//     <div
//       className={`relative h-[210px] w-[280px] rounded-[14px] border border-white/20 bg-white/20 p-5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-md sm:w-[320px] md:w-[380px] ${
//         index === 0 ? "" : "-mt-[25px]"
//       } ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
//       style={{
//         zIndex: testimonials.length + index,
//       }}
//     >
//       <div className="mb-4 flex items-center gap-3">
//         <div className="h-11 w-11 overflow-hidden rounded-full border border-white/20 bg-white/20">
//           <img
//             src={item.image}
//             alt={item.name}
//             className="h-full w-full object-cover"
//           />
//         </div>

//         <div>
//           <h4 className="font-futura text-[15px] font-semibold leading-none text-white">
//             {item.name}
//           </h4>
//           <p className="font-futura mt-1 text-[12px] text-white/75">
//             {item.role}
//           </p>
//         </div>
//       </div>

//       <p className="font-futura max-w-[300px] pt-6 text-[13px] leading-[1.55] text-white/90">
//         {item.text}
//       </p>
//     </div>
//   );
// }

// export default function TestimonialsPreview() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const progressRef = useRef(0);
//   const targetProgressRef = useRef(0);
//   const rafRef = useRef<number | null>(null);

//   const [progress, setProgress] = useState(0);
//   const [viewportHeight, setViewportHeight] = useState(800);

//   useEffect(() => {
//     const updateViewportHeight = () => {
//       setViewportHeight(window.innerHeight);
//     };

//     updateViewportHeight();
//     window.addEventListener("resize", updateViewportHeight);

//     return () => {
//       window.removeEventListener("resize", updateViewportHeight);
//     };
//   }, []);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const calculateProgress = () => {
//       const rect = section.getBoundingClientRect();
//       const scrollRange = section.offsetHeight - window.innerHeight;

//       if (scrollRange <= 0) return 0;

//       return clamp(-rect.top / scrollRange);
//     };

//     const animate = () => {
//       const current = progressRef.current;
//       const target = targetProgressRef.current;

//       const next = current + (target - current) * 0.028;

//       progressRef.current = next;
//       setProgress(next);

//       if (Math.abs(target - next) > 0.001) {
//         rafRef.current = requestAnimationFrame(animate);
//       } else {
//         progressRef.current = target;
//         setProgress(target);
//         rafRef.current = null;
//       }
//     };

//     const updateTarget = () => {
//       targetProgressRef.current = calculateProgress();

//       if (rafRef.current === null) {
//         rafRef.current = requestAnimationFrame(animate);
//       }
//     };

//     updateTarget();

//     window.addEventListener("scroll", updateTarget, { passive: true });
//     window.addEventListener("resize", updateTarget);

//     return () => {
//       if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
//       window.removeEventListener("scroll", updateTarget);
//       window.removeEventListener("resize", updateTarget);
//     };
//   }, []);

//   const headingProgress = smoothstep(mapRange(progress, 0.0, 0.09, 0, 1));
//   const leftHeadingX = mapRange(headingProgress, 0, 1, -160, 0);
//   const rightHeadingX = mapRange(headingProgress, 0, 1, 160, 0);
//   const headingOpacity = headingProgress;

//   // Updated: cards ab text ke thori dair baad jaldi start honge
//   const cardsProgress = smoothstep(mapRange(progress, 0.09, 0.93, 0, 1));

//   const cardHeight = 210;
//   const overlap = 25;
//   const visibleCardStep = cardHeight - overlap;

//   const totalTrackHeight =
//     cardHeight + (testimonials.length - 1) * visibleCardStep;

//   // Updated: cards pehle neeche se bohat late aa rahe thay, ab jaldi enter honge
//   const startY = viewportHeight + 60;

//   const viewportCenter = viewportHeight / 2;
//   const lastCardCenterOffset = totalTrackHeight - cardHeight / 2;

//   const endY = viewportCenter - lastCardCenterOffset - 120;

//   const trackY = mapRange(cardsProgress, 0, 1, startY, endY);

//   const glowOpacity = mapRange(progress, 0, 0.25, 0, 1);

//   return (
//     <section ref={sectionRef} className="relative h-[850vh] bg-[#b80f34]">
//       <div className="sticky top-0 h-screen overflow-hidden">
//         <div
//           className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
//           style={{
//             opacity: glowOpacity,
//             transform: `translate(-50%, -50%) scale(${mapRange(
//               glowOpacity,
//               0,
//               1,
//               0.82,
//               1,
//             )})`,
//           }}
//         />

//         <div className="pointer-events-none absolute inset-0 opacity-20">
//           <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.12)_1px,transparent_2px)] bg-[length:120px_120px]" />
//         </div>

//         <div className="relative mx-auto h-full max-w-[1400px] px-4 sm:px-6 lg:px-10 trace">
//           {/* Heading */}
//           <div className="pointer-events-none absolute inset-0 z-10">
//             <h2
//               className="font-futura absolute left-5 top-[36%] text-[38px] font-extrabold uppercase leading-none tracking-tight text-white sm:left-10 sm:text-[54px] md:left-[70px] md:text-[68px]"
//               style={{
//                 opacity: headingOpacity,
//                 transform: `translate3d(${leftHeadingX}px, 0, 0)`,
//                 willChange: "opacity, transform",
//               }}
//             >
//               What People
//             </h2>

//             <h2
//               className="font-futura absolute right-5 top-[49%] text-right text-[38px] font-extrabold uppercase leading-none tracking-tight text-white sm:right-10 sm:text-[54px] md:right-[70px] md:text-[68px]"
//               style={{
//                 opacity: headingOpacity,
//                 transform: `translate3d(${rightHeadingX}px, 0, 0)`,
//                 willChange: "opacity, transform",
//               }}
//             >
//               Are Saying
//             </h2>
//           </div>

//           {/* Cards Track */}
//           <div className="absolute left-1/2 top-1/2 z-20 h-screen w-[92%] max-w-[680px] -translate-x-1/2 -translate-y-1/2 overflow-hidden px-2">
//             <div
//               className="flex w-full flex-col will-change-transform"
//               style={{
//                 transform: `translate3d(0, ${trackY}px, 0)`,
//               }}
//             >
//               {testimonials.map((item, index) => (
//                 <TestimonialCard
//                   key={`${item.name}-${index}`}
//                   item={item}
//                   index={index}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* <div
//             className="font-futura absolute bottom-8 left-1/2 z-50 -translate-x-1/2 text-[11px] uppercase tracking-[0.18em] text-white/60"
//             style={{
//               opacity: mapRange(progress, 0, 0.15, 1, 0),
//             }}
//           >
//             Scroll
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

const staticTestimonials = [
  {
    name: "Arshia",
    role: "Description",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Huma",
    role: "Description",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Hania Amir",
    role: "Description",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Sarah",
    role: "Description",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face",
    text: "Amazing service and professional work. Highly recommended. Everything was delivered with quality and care.",
  },
  {
    name: "Ayesha",
    role: "Description",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=face",
    text: "The design and functionality were exactly what we needed. Communication was smooth and the final result looked great.",
  },
  {
    name: "Danish",
    role: "Description",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
    text: "Very smooth experience and great communication throughout. Highly satisfied with the final work and support.",
  },
  {
    name: "Ali Khan",
    role: "Description",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face",
    text: "Excellent quality work delivered on time with great attention to detail. Very professional and easy to work with.",
  },
];

type TestimonialItem = {
  name: string;
  role: string;
  image: string;
  text: string;
};

type ApiTestimonialItem = {
  para?: string;
  heading?: string;
  avatar?: string;
  rating?: number;
  name?: string;
  role?: string;
  image?: string;
  text?: string;
};

type TestimonialsPreviewProps = {
  data?: ApiTestimonialItem[];
};

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function mapRange(
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
) {
  const progress = clamp((value - inputMin) / (inputMax - inputMin));
  return outputMin + (outputMax - outputMin) * progress;
}

function smoothstep(value: number) {
  const x = clamp(value);
  return x * x * (3 - 2 * x);
}

function TestimonialCard({
  item,
  index,
  totalCards,
}: {
  item: TestimonialItem;
  index: number;
  totalCards: number;
}) {
  return (
    <div
      className={`relative h-[210px] w-[280px] rounded-[14px] border border-white/20 bg-white/20 p-5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-md sm:w-[320px] md:w-[380px] ${
        index === 0 ? "" : "-mt-[25px]"
      } ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
      style={{
        zIndex: totalCards + index,
      }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="h-11 w-11 overflow-hidden rounded-full border border-white/20 bg-white/20">
          <img
            src={
              item.image ||
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face"
            }
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h4 className="font-futura text-[15px] font-semibold leading-none text-white">
            {item.name}
          </h4>
          <p className="mt-1 font-futura text-[12px] text-white/75">
            {item.role}
          </p>
        </div>
      </div>

      <p className="max-w-[300px] pt-6 font-futura text-[13px] leading-[1.55] text-white/90">
        {item.text}
      </p>
    </div>
  );
}

export default function TestimonialsPreview({
  data = [],
}: TestimonialsPreviewProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [progress, setProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(800);

  const testimonialsToShow = useMemo<TestimonialItem[]>(() => {
    if (!data || data.length === 0) {
      return staticTestimonials;
    }

    return data.map((item) => ({
      name: item.name || item.heading || "Customer",
      role: item.role || "Description",
      image: item.image || item.avatar || "",
      text: item.text || item.para || "",
    }));
  }, [data]);

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);

    return () => {
      window.removeEventListener("resize", updateViewportHeight);
    };
  }, []);

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

      const next = current + (target - current) * 0.028;

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

  const headingProgress = smoothstep(mapRange(progress, 0.0, 0.09, 0, 1));
  const leftHeadingX = mapRange(headingProgress, 0, 1, -160, 0);
  const rightHeadingX = mapRange(headingProgress, 0, 1, 160, 0);
  const headingOpacity = headingProgress;

  const cardsProgress = smoothstep(mapRange(progress, 0.09, 0.93, 0, 1));

  const cardHeight = 210;
  const overlap = 25;
  const visibleCardStep = cardHeight - overlap;

  const totalTrackHeight =
    cardHeight + (testimonialsToShow.length - 1) * visibleCardStep;

  const startY = viewportHeight + 60;

  const viewportCenter = viewportHeight / 2;
  const lastCardCenterOffset = totalTrackHeight - cardHeight / 2;

  const endY = viewportCenter - lastCardCenterOffset - 120;

  const trackY = mapRange(cardsProgress, 0, 1, startY, endY);

  const glowOpacity = mapRange(progress, 0, 0.25, 0, 1);

  return (
    <section ref={sectionRef} className="relative h-[850vh] bg-[#b80f34]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
          style={{
            opacity: glowOpacity,
            transform: `translate(-50%, -50%) scale(${mapRange(
              glowOpacity,
              0,
              1,
              0.82,
              1,
            )})`,
          }}
        />

        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.12)_1px,transparent_2px)] bg-[length:120px_120px]" />
        </div>

        <div className="trace relative mx-auto h-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="pointer-events-none absolute inset-0 z-10">
            <h2
              className="absolute left-5 top-[36%] font-futura text-[38px] font-extrabold uppercase leading-none tracking-tight text-white sm:left-10 sm:text-[54px] md:left-[70px] md:text-[68px]"
              style={{
                opacity: headingOpacity,
                transform: `translate3d(${leftHeadingX}px, 0, 0)`,
                willChange: "opacity, transform",
              }}
            >
              What People
            </h2>

            <h2
              className="absolute right-5 top-[49%] text-right font-futura text-[38px] font-extrabold uppercase leading-none tracking-tight text-white sm:right-10 sm:text-[54px] md:right-[70px] md:text-[68px]"
              style={{
                opacity: headingOpacity,
                transform: `translate3d(${rightHeadingX}px, 0, 0)`,
                willChange: "opacity, transform",
              }}
            >
              Are Saying
            </h2>
          </div>

          <div className="absolute left-1/2 top-1/2 z-20 h-screen w-[92%] max-w-[680px] -translate-x-1/2 -translate-y-1/2 overflow-hidden px-2">
            <div
              className="flex w-full flex-col will-change-transform"
              style={{
                transform: `translate3d(0, ${trackY}px, 0)`,
              }}
            >
              {testimonialsToShow.map((item, index) => (
                <TestimonialCard
                  key={`${item.name}-${index}`}
                  item={item}
                  index={index}
                  totalCards={testimonialsToShow.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
