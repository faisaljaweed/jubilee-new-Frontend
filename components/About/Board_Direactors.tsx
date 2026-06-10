// // "use client";
// // import Image from "next/image";
// // import React, { useState } from "react";
// // interface Board_DireactorsProps {
// //   Direactor_Images: any;
// //   Direactor_Name: string;
// //   Direactor_Position: string;
// //   Direactor_Description?: string;
// // }
// // const Board_Direactors: React.FC<Board_DireactorsProps> = ({
// //   Direactor_Images,
// //   Direactor_Name,
// //   Direactor_Position,
// //   Direactor_Description,
// // }) => {
// //   const [open, setOpen] = useState(false);
// //   return (
// //     <>
// //       <div className="relative w-full max-w-65 group cursor-pointer overflow-hidden">
// //         <Image
// //           src={Direactor_Images}
// //           alt=""
// //           className="rounded-2xl w-full h-80 object-cover"
// //         />
// //         {/* Glass Shade Overlay */}
// //         <div className="absolute inset-0 bg-black/0 group-hover:bg-gray-500/50 rounded-2xl  transition-all duration-500"></div>

// //         <div className="absolute bottom-3 left-[50%] transform translate-x-[-50%] w-[90%] ">
// //           <div className="bg-white rounded-full py-3 px-4 shadow-md text-center min-h-14 flex flex-col justify-center items-center text-[#4A4A4A] hover:bg-[#BA0C2F] hover:text-white hover:rounded-2xl">
// //             <h1 className="font-futura font-semibold text-[16px] text-md ">
// //               {Direactor_Name}
// //             </h1>
// //             <h2 className="font-futura text-[9px] transition-all duration-300 group-hover:hidden">
// //               {Direactor_Position}
// //             </h2>

// //             <button
// //               onClick={() => setOpen(true)}
// //               className="hidden group-hover:inline-block mt-2 bg-white text-[#BA0C2F] text-xs py-1 rounded-full font-semibold transition-all duration-300 w-25 cursor-pointer"
// //             >
// //               View Profile
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {open && (
// //         <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
// //           <div className="bg-white/95 w-[90%] md:w-150 rounded-3xl shadow-2xl p-8 relative animate-fadeIn">
// //             <button
// //               onClick={() => setOpen(false)}
// //               className="absolute top-4 right-5 text-gray-400 hover:text-red-600 text-xl cursor-pointer"
// //             >
// //               ✕
// //             </button>

// //             {/* Flex Row Layout */}
// //             <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
// //               {/* Image Left */}
// //               <Image
// //                 src={Direactor_Images}
// //                 alt=""
// //                 width={112}
// //                 height={112}
// //                 className="w-44 h-64 object-cover rounded-xl shadow-md shrink-0"
// //               />

// //               {/* Content Right */}
// //               <div className="text-center md:text-left">
// //                 <h2 className="text-base font-semibold font-futura">
// //                   {Direactor_Name}
// //                 </h2>

// //                 <p className="text-xs text-gray-500 italic mt-1 font-futura">
// //                   {Direactor_Position}
// //                 </p>

// //                 <p className="text-xs text-gray-600 mt-4 leading-relaxed font-futura">
// //                   {Direactor_Description}
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default Board_Direactors;

// "use client";

// import Image from "next/image";
// import React, { useState } from "react";

// interface Board_DireactorsProps {
//   Direactor_Images: any;
//   Direactor_Name: string;
//   Direactor_Position: string;
//   Direactor_Description?: string;
// }

// const Board_Direactors: React.FC<Board_DireactorsProps> = ({
//   Direactor_Images,
//   Direactor_Name,
//   Direactor_Position,
//   Direactor_Description,
// }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Card */}
//       <div className="w-full max-w-7xl rounded-[14px] bg-white p-0 transition-all duration-300  ">
//         {/* Image */}
//         <div className="relative h-[320px] w-full overflow-hidden rounded-[14px]">
//           <Image
//             src={Direactor_Images}
//             alt={Direactor_Name}
//             fill
//             className="object-cover object-top"
//           />
//         </div>

//         {/* Content */}
//         <div className="px-1 pt-4 text-left">
//           <h1 className="font-futura text-[18px] font-semibold leading-tight text-[#1F1F1F]">
//             {Direactor_Name}
//           </h1>

//           <h2 className="mt-1 font-futura text-[15px] font-normal leading-tight text-[#4A4A4A]">
//             {Direactor_Position}
//           </h2>

//           <button
//             type="button"
//             onClick={() => setOpen(true)}
//             className="mt-4 rounded-full bg-[#BA0C2F] px-5 py-1.5 font-futura text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#9f0a28]"
//           >
//             View Profile
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {open && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 backdrop-blur-sm">
//           <div className="relative w-full max-w-[620px] rounded-[24px] bg-white p-6 shadow-2xl md:p-8">
//             <button
//               type="button"
//               onClick={() => setOpen(false)}
//               className="absolute right-5 top-4 cursor-pointer text-xl text-gray-400 transition hover:text-[#BA0C2F]"
//             >
//               ✕
//             </button>

//             <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
//               <div className="relative h-[260px] w-[190px] shrink-0 overflow-hidden rounded-[16px]">
//                 <Image
//                   src={Direactor_Images}
//                   alt={Direactor_Name}
//                   fill
//                   className="object-cover object-top"
//                 />
//               </div>

//               <div className="text-center md:text-left">
//                 <h2 className="font-futura text-lg font-semibold text-[#1F1F1F]">
//                   {Direactor_Name}
//                 </h2>

//                 <p className="mt-1 font-futura text-xs text-[#BA0C2F]">
//                   {Direactor_Position}
//                 </p>

//                 <p className="mt-5 font-futura text-sm leading-7 text-[#555]">
//                   {Direactor_Description ||
//                     "Profile details will be available soon."}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Board_Direactors;

"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Board_DireactorsProps {
  Direactor_Images: any;
  Direactor_Name: string;
  Direactor_Position: string;
  Direactor_Description?: string;
  showProfileButton: boolean;
}

const Board_Direactors: React.FC<Board_DireactorsProps> = ({
  Direactor_Images,
  Direactor_Name,
  Direactor_Position,
  Direactor_Description,
  showProfileButton = true,
}) => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // One-time animation only
          observer.unobserve(card);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .director-card-animate {
          opacity: 0;
          transform: translateY(45px) scale(0.94);
          transition:
            opacity 850ms ease,
            transform 850ms cubic-bezier(0.22, 1, 0.36, 1),
             box-shadow 350ms ease;
          will-change: opacity, transform;
        }

        .director-card-animate.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .director-card-animate.show:hover {
          transform: translateY(-8px) scale(1.02);
          
        }

        .director-image-animate {
          transform: scale(1.06);
          transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .director-card-animate.show .director-image-animate {
          transform: scale(1);
        }

        .director-content-animate {
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: 220ms;
        }

        .director-card-animate.show .director-content-animate {
          opacity: 1;
          transform: translateY(0);
        }

        .director-modal-overlay {
          animation: directorOverlayFade 250ms ease forwards;
        }

        .director-modal-box {
          animation: directorModalPop 380ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes directorOverlayFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes directorModalPop {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.94);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      {/* Card */}
      <div
        ref={cardRef}
        className={`director-card-animate w-full max-w-7xl rounded-[14px] bg-white p-0 transition-all duration-300 ${
          isVisible ? "show" : ""
        }`}
      >
        {/* Image */}
        <div className="relative h-[320px] w-full overflow-hidden rounded-[14px]">
          <Image
            src={Direactor_Images}
            alt={Direactor_Name}
            fill
            className="director-image-animate object-cover object-top"
          />
        </div>

        {/* Content */}
        <div className="director-content-animate px-1 pt-4 text-left">
          <h1 className="font-futura text-[18px] font-semibold leading-tight text-[#1F1F1F]">
            {Direactor_Name}
          </h1>

          <h2 className="mt-1 font-futura text-[15px] font-normal leading-tight text-[#4A4A4A]">
            {Direactor_Position}
          </h2>
          {showProfileButton && (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-4 rounded-full bg-[#BA0C2F] px-5 py-1.5 font-futura text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#9f0a28] hover:shadow-[0_8px_18px_rgba(186,12,47,0.28)]"
            >
              View Profile
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="director-modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 backdrop-blur-sm">
          <div className="director-modal-box relative w-full max-w-[620px] rounded-[24px] bg-white p-6 shadow-2xl md:p-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-4 cursor-pointer text-xl text-gray-400 transition hover:text-[#BA0C2F]"
            >
              ✕
            </button>

            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              <div className="relative h-[260px] w-[190px] shrink-0 overflow-hidden rounded-[16px]">
                <Image
                  src={Direactor_Images}
                  alt={Direactor_Name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="text-center md:text-left">
                <h2 className="font-futura text-lg font-semibold text-[#1F1F1F]">
                  {Direactor_Name}
                </h2>

                <p className="mt-1 font-futura text-xs text-[#BA0C2F]">
                  {Direactor_Position}
                </p>

                <p className="mt-5 font-futura text-sm leading-7 text-[#555]">
                  {Direactor_Description ||
                    "Profile details will be available soon."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Board_Direactors;
