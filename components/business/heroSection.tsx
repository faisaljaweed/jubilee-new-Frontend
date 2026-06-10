"use client";
import React, { useEffect, useState } from "react";
import "../../app/business/business.css";
import Button from "../common/button";
import Container from "../home/container";
import axios from "axios";
// import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
import { useRouter } from "next/navigation";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaRobot,
//   FaTiktok,
//   FaYoutube,
// } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
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

const HeroSection = () => {
  const router = useRouter();
  // const [isExpanded, setIsExpanded] = useState(false);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/banners?category=business&isActive=true`,
          // `${process.env.NEXT_PUBLIC_API_BASE_URL}/banners?category=busines&isActive=true`,
        );

        // agar backend filter support nahi karta to manually filter kar lo
        const filtered = res.data.data
          .filter((item: any) => item.category === "business" && item.isActive)
          .sort((a: any, b: any) => a.order - b.order);

        setBanners(filtered);
      } catch (error) {
        console.error("Banner fetch error:", error);
        setBannerError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);
  // const socialLinks = [
  //   {
  //     name: "AI Chatbot",
  //     icon: <FaRobot size={22} />,
  //     href: "https://tiktok.com/@yourpage",
  //     color: "#FF0000",
  //   },
  //   {
  //     name: "Facebook",
  //     icon: <FaFacebookF size={22} />,
  //     href: "https://facebook.com/yourpage",
  //     color: "#1877F2",
  //   },
  //   {
  //     name: "Instagram",
  //     icon: <FaInstagram size={22} />,
  //     href: "https://instagram.com/yourpage",
  //     color: "#E1306C",
  //   },
  //   {
  //     name: "LinkedIn",
  //     icon: <FaLinkedinIn size={22} />,
  //     href: "https://linkedin.com/company/yourpage",
  //     color: "#0A66C2",
  //   },
  //   {
  //     name: "YouTube",
  //     icon: <FaYoutube size={22} />,
  //     href: "https://youtube.com/yourchannel",
  //     color: "#FF0000",
  //   },
  //   {
  //     name: "TikTok",
  //     icon: <FaTiktok size={22} />,
  //     href: "https://tiktok.com/@yourpage",
  //     color: "#000000",
  //   },
  // ];
  const [bannerError, setBannerError] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 20,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );
  if (loading) return <div className="h-screen bg-black" />;

  const showDummyHero = bannerError || banners.length === 0;
  return (
    <>
      <div className="relative">
        {/* <div className="absolute right-0 top-[42%] -translate-y-1/2 z-50 hidden md:block">
          <div
            className={`relative flex flex-col items-center bg-white text-[#BA0C2F] rounded-l-2xl  overflow-hidden transition-all duration-500 cursor-pointer ${
              isExpanded ? "w-8 overflow-visible" : "w-8 overflow-hidden"
            }`}
            onClick={() => setIsExpanded(!isExpanded)}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          > */}
        {/* Closed: Vertical Text */}
        {/* {!isExpanded && (
              <div className=" py-22 px-3 flex items-center justify-center">
                <div className="-rotate-90 text-md font-futura font- uppercase tracking-widest whitespace-nowrap">
                  Get Connected
                </div>
              </div>
            )} */}

        {/* Expanded: Icons */}
        {/* {isExpanded && (
              <div className="flex flex-col py-5 gap-6 animate-fadeIn">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    style={{ color: link.color }}
                  >
                    {link.icon} */}

        {/* Tooltip – positioned fixed & outside white container */}
        {/* Tooltip on LEFT side – fixed position */}
        {/* <div className="absolute opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-60">
                      <div
                        className="fixed bg-white text-[#BA0C2F] text-sm px-4 py-4 rounded-l-full  whitespace-nowrap uppercase"
                        style={{
                          right: "90%",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      > */}
        {/* Optional small arrow pointing right */}
        {/* <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-white" /> */}
        {/* {link.name}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div> */}
        <header className="relative w-full h-screen  overflow-hidden ">
          {showDummyHero ? (
            <div className="dummy_Hero">
              <Container>
                <div className="flex min-h-screen max-w-162.5 flex-col justify-center gap-6">
                  <h1 className="text-5xl font-bold uppercase leading-[1.15] text-white">
                    Protecting <br />
                    Pakistan’s Businesses
                    <br /> with Confidence
                  </h1>

                  <p className="max-w-sm text-lg leading-relaxed text-white">
                    Insurance Solutions Designed for SMEs, Corporates, and Large
                    Enterprises
                  </p>

                  <div>
                    <Button text="Consult now" />
                  </div>
                </div>
              </Container>
            </div>
          ) : (
            <div className="embla h-full" ref={emblaRef}>
              <div className="embla__container h-full flex">
                {banners.map((slide) => (
                  <div
                    key={slide._id}
                    className="embla__slide relative flex-[0_0_100%] min-w-0 h-full"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full ">
                      <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex items-center">
                      <div className="w-full max-w-7xl mx-auto px-6">
                        {/* Left 50% Content */}
                        <div className="flex min-h-screen max-w-145 flex-col justify-center gap-6">
                          {/* <div className="bg-orange h-1 w-10"></div> */}

                          <h1 className="text-5xl font-bold uppercase leading-[1.15] text-white">
                            {slide.title}
                          </h1>

                          <p className="max-w-sm text-lg leading-relaxed text-white">
                            {slide.subtitle}
                          </p>
                          <div>
                            <Button text={slide.buttonText} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </header>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full bg-black/70 ">
          <div className=" flex flex-col md:flex-row mx-auto items-center gap-4 p-4 md:p-6 max-w-7xl">
            {/* Input Fields */}
            <input
              type="text"
              placeholder="ENTER YOUR NAME"
              className="flex-1 bg-white placeholder-black rounded-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              placeholder="COMPANY NAME"
              className="flex-1 bg-white placeholder-black rounded-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              placeholder="ENTER YOUR EMAIL"
              className="flex-1 bg-white placeholder-black rounded-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            {/* Button */}
            <Button
              text="GET A QUOTE"
              className="bg-[#BA0C2F] text-white rounded-full px-6 py-3 hover:bg-red-700 transition-colors uppercase"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
