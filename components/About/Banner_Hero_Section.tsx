// "use client";

// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// import Button from "../common/button";
// import { useEffect, useState } from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaTiktok,
//   FaRobot,
// } from "react-icons/fa";
// import axios from "axios";
// import useEmblaCarousel from "embla-carousel-react";

// interface Banner {
//   _id: string;
//   category: string;
//   title: string;
//   subtitle?: string;
//   buttonText?: string;
//   buttonLink?: string;
//   imageUrl: string;
//   order: number;
//   isActive: boolean;
// }

// export function HeroSection() {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [banners, setBanners] = useState<Banner[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBanners = async () => {
//       try {
//         const res = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_BASE_URL}/banners?category=home&isActive=true`,
//         );
//         const filtered = res.data.data
//           .filter((item: any) => item.category === "home" && item.isActive)
//           .sort((a: any, b: any) => a.order - b.order);
//         setBanners(filtered);
//       } catch (error) {
//         console.error("Banner fetch error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBanners();
//   }, []);

//   const socialLinks = [
//     {
//       name: "AI Chatbot",
//       icon: <FaRobot size={22} />,
//       href: "#",
//       color: "#FF0000",
//     },
//     {
//       name: "Facebook",
//       icon: <FaFacebookF size={22} />,
//       href: "https://facebook.com/yourpage",
//       color: "#1877F2",
//     },
//     {
//       name: "Instagram",
//       icon: <FaInstagram size={22} />,
//       href: "https://instagram.com/yourpage",
//       color: "#E1306C",
//     },
//     {
//       name: "LinkedIn",
//       icon: <FaLinkedinIn size={22} />,
//       href: "https://linkedin.com/company/yourpage",
//       color: "#0A66C2",
//     },
//     {
//       name: "YouTube",
//       icon: <FaYoutube size={22} />,
//       href: "https://youtube.com/yourchannel",
//       color: "#FF0000",
//     },
//     {
//       name: "TikTok",
//       icon: <FaTiktok size={22} />,
//       href: "https://tiktok.com/@yourpage",
//       color: "#000000",
//     },
//   ];

//   const [emblaRef] = useEmblaCarousel({ loop: true, duration: 20 }, [
//     Autoplay({ delay: 5000, stopOnInteraction: false }),
//   ]);

//   if (loading) return <div className="h-screen bg-black" />;

//   return (
//     <div className="relative">
//       {/* Fixed "Get Connected" bar */}
//       <div className="absolute right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
//         <div
//           className={`relative flex flex-col items-center bg-white text-[#BA0C2F] rounded-l-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
//             isExpanded ? "w-8 overflow-visible" : "w-8 overflow-hidden"
//           }`}
//           onMouseEnter={() => setIsExpanded(true)}
//           onMouseLeave={() => setIsExpanded(false)}
//         >
//           {!isExpanded && (
//             <div className="py-22 px-3 flex items-center justify-center">
//               <div className="-rotate-90 text-md font-futura uppercase tracking-widest whitespace-nowrap">
//                 Get Connected
//               </div>
//             </div>
//           )}
//           {isExpanded && (
//             <div className="flex flex-col py-5 gap-6 animate-fadeIn">
//               {socialLinks.map((link, idx) => (
//                 <a
//                   key={idx}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group relative flex items-center justify-center hover:scale-110 transition-transform duration-200"
//                   style={{ color: link.color }}
//                 >
//                   {link.icon}
//                   <div className="absolute opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-60">
//                     <div
//                       className="fixed bg-white text-[#BA0C2F] text-sm px-4 py-4 rounded-l-full whitespace-nowrap uppercase"
//                       style={{
//                         right: "90%",
//                         top: "50%",
//                         transform: "translateY(-50%)",
//                       }}
//                     >
//                       {link.name}
//                     </div>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/*
//         Hero starts at top: 0 — the absolute-positioned Header overlays it.
//         h-screen fills the full viewport so the nav sits nicely on top.
//         Content is pushed down with pt to clear the header height (~88px).
//       */}
//       <header className="relative w-full h-screen overflow-hidden">
//         <div className="embla h-full" ref={emblaRef}>
//           <div className="embla__container flex h-full">
//             {banners.map((slide) => (
//               <div
//                 key={slide._id}
//                 className="embla__slide relative flex-[0_0_100%] h-full"
//               >
//                 {/* Background Image */}
//                 <img
//                   src={slide.imageUrl}
//                   alt={slide.title}
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />

//                 {/* Subtle dark overlay so text is readable over the nav area */}
//                 <div className="absolute inset-0 bg-black/10" />

//                 {/* Content — pt-[88px] clears the two-row header on desktop */}
//                 <div className="relative h-full flex items-center pt-[88px]">
//                   <div className="max-w-7xl mx-auto px-6 w-full">
//                     <div className="lg:w-[60%] flex flex-col gap-8">
//                       <h1 className="text-white text-2xl md:text-4xl lg:text-[38px] xl:text-[45px] xl:w-[90%] font-bold uppercase tracking-[1px]">
//                         {slide.title}
//                       </h1>
//                       <p className="text-base md:text-lg lg:text-[18px] xl:text-[20px] lg:w-[75%] text-white/90 max-w-xl">
//                         {slide.subtitle}
//                       </p>
//                       <div>
//                         <Button
//                           text={slide.buttonText}
//                           className="md:px-12 md:py-3 px-8 py-2 text-xl font-futura bg-[#FFFFFF] text-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-[#FFFFFF] rounded-full font-semibold cursor-pointer"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

"use client";

import Autoplay from "embla-carousel-autoplay";
import Button from "../common/button";
import { useEffect, useState, useCallback } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaRobot,
} from "react-icons/fa";
import axios from "axios";
import useEmblaCarousel from "embla-carousel-react";
import "../../app/about/about.css";

interface Banner {
  _id: string;
  category: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl: string;
  order: number;
  isActive: boolean;
}

export function BannerHeroSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroReady(true);
    }, 180);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/banners?category=home&isActive=true`,
        );

        const filtered = res.data.data
          .filter((item: any) => item.category === "home" && item.isActive)
          .sort((a: any, b: any) => a.order - b.order);

        setBanners(filtered);
      } catch (error) {
        console.error("Banner fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  const socialLinks = [
    {
      name: "AI Chatbot",
      icon: <FaRobot size={22} />,
      href: "#",
      color: "#FF0000",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF size={22} />,
      href: "https://facebook.com/yourpage",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={22} />,
      href: "https://instagram.com/yourpage",
      color: "#E1306C",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={22} />,
      href: "https://linkedin.com/company/yourpage",
      color: "#0A66C2",
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={22} />,
      href: "https://youtube.com/yourchannel",
      color: "#FF0000",
    },
    {
      name: "TikTok",
      icon: <FaTiktok size={22} />,
      href: "https://tiktok.com/@yourpage",
      color: "#000000",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 20,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
      }),
    ],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <style>{`
        .hero-fade-up {
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity 900ms ease,
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .hero-fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-fade-left {
          opacity: 0;
          transform: translateX(-45px);
          transition:
            opacity 900ms ease,
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .hero-fade-left.show {
          opacity: 1;
          transform: translateX(0);
        }

        .hero-delay-1 {
          transition-delay: 120ms;
        }

        .hero-delay-2 {
          transition-delay: 280ms;
        }

        .hero-delay-3 {
          transition-delay: 440ms;
        }

        .hero-delay-4 {
          transition-delay: 600ms;
        }

        .social-fade-in {
          animation: socialFadeIn 300ms ease forwards;
        }

        @keyframes socialFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Fixed "Get Connected" bar */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <div
          className={`relative flex flex-col items-center bg-white text-[#BA0C2F] rounded-l-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
            isExpanded ? "w-8 overflow-visible" : "w-8 overflow-hidden"
          }`}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {!isExpanded && (
            <div className="py-22 px-3 flex items-center justify-center">
              <div className="-rotate-90 text-md font-futura uppercase tracking-widest whitespace-nowrap">
                Get Connected
              </div>
            </div>
          )}

          {isExpanded && (
            <div className="flex flex-col py-5 gap-6 social-fade-in">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  style={{ color: link.color }}
                >
                  {link.icon}

                  <div className="absolute opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-60">
                    <div
                      className="fixed bg-white text-[#BA0C2F] text-sm px-4 py-4 rounded-l-full whitespace-nowrap uppercase"
                      style={{
                        right: "90%",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      {link.name}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <header className="Banner relative w-full h-screen overflow-hidden">
        <div className="h-full flex items-center mt-36  ">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="lg:w-[50%] flex flex-col space-y-4">
              <h2
                className={`hero-fade-left hero-delay-1 ${
                  heroReady ? "show" : ""
                } text-base md:text-lg lg:text-[18px] xl:text-[20px] lg:w-[75%] text-black max-w-xl font-semibold`}
              >
                About Us
              </h2>

              <h1
                className={`hero-fade-up hero-delay-2 ${
                  heroReady ? "show" : ""
                } text-black text-2xl md:text-4xl lg:text-[38px] xl:text-[40px] xl:w-[90%] font-bold uppercase tracking-[1px]`}
              >
                Insurance that’s fast, fair & built around you
              </h1>

              <p
                className={`hero-fade-up hero-delay-3 ${
                  heroReady ? "show" : ""
                } text-base md:text-lg lg:text-[18px] xl:text-[20px] lg:w-[75%] text-black max-w-xl`}
              >
                Whether it’s your health, car, or travel we’ve got your back in
                minutes
              </p>

              <div
                className={`hero-fade-up hero-delay-4 ${
                  heroReady ? "show" : ""
                }`}
              >
                <Button
                  text="Learn more>"
                  className="md:px-12 md:py-3 px-8 py-2 text-xl border border-[#BA0C2F] font-futura bg-[#FFFFFF] text-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-[#FFFFFF] rounded-full font-semibold cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {banners.map((slide, idx) => (
              <div
                key={slide._id}
                className="embla__slide relative flex-[0_0_100%] h-full"
              >
                
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

              
                <div className="absolute inset-0 bg-black/10" />

           
                <div className="relative h-full flex items-center pt-[88px]">
                  <div className="max-w-7xl mx-auto px-6 w-full">
                    <div className="lg:w-[60%] flex flex-col gap-8">
                      <h1
                        className={`hero-fade-up hero-delay-1 ${
                          
                          heroReady && activeSlide === idx ? "show" : ""
                        } text-white text-2xl md:text-4xl lg:text-[38px] xl:text-[45px] xl:w-[90%] font-bold uppercase tracking-[1px]`}
                      >
                        {slide.title}
                      </h1>

                      <p
                        className={`hero-fade-up hero-delay-2 ${
                          
                          heroReady && activeSlide === idx ? "show" : ""
                        } text-base md:text-lg lg:text-[18px] xl:text-[20px] lg:w-[75%] text-white/90 max-w-xl`}
                      >
                        {slide.subtitle}
                      </p>

                      <div
                        className={`hero-fade-up hero-delay-3 ${
                          
                          heroReady && activeSlide === idx ? "show" : ""
                        }`}
                      >
                        <Button
                          text={slide.buttonText}
                          className="md:px-12 md:py-3 px-8 py-2 text-xl font-futura bg-[#FFFFFF] text-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-[#FFFFFF] rounded-full font-semibold cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      {/* </header> */}
    </div>
  );
}
