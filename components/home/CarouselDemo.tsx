"use client";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Star } from "lucide-react";
import { testimonial_Slider } from "@/data/HomeDate";
import { useEffect, useState } from "react";

interface TestimonialItem {
  para: string;
  heading: string;
  avatar: string;
  rating?: number; // ✅ from API
}

interface CarouselDemoProps {
  data: TestimonialItem[];
}

export function CarouselDemo({ data }: CarouselDemoProps) {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();
  }, [api]);
  return (
    <Carousel
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
        }),
      ]}
      opts={{ align: "center", loop: true }}
      className="w-full mx-auto"
    >
      <CarouselContent>
        {data.map((item, index) => {
          const rating = Math.max(0, Math.min(5, Math.round(item.rating ?? 5)));
          const isCenter = index === current;

          return (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/2 xl:basis-1/4 lg:basis-1/3"
            >
              <div className="p-3">
                <Card
                  // h-[450px]
                  className={`rounded-2xl border-none shadow-none h-112.5 flex flex-col justify-between
  transition-all duration-500
  ${
    isCenter
      ? "bg-[#BA0C2F] text-white scale-102 z-10 "
      : "bg-[#E8E9EB80] scale-95"
  }`}
                >
                  <CardContent
                    className={`flex flex-col flex-1  justify-between  px-16 py-8 text-start
  transition-all duration-500
  ${isCenter ? "min-h-100" : "min-h-87.5"}`}
                    // ${isCenter ? "min-h-[400px]" : "min-h-[350px]"}`}
                  >
                    {/* ⭐ Stars (now supports rating) */}
                    <div className="flex justify-start gap-1 ">
                      {[...Array(5)].map((_, i) => {
                        const isActive = i < rating;

                        return (
                          <Star
                            key={i}
                            size={24}
                            className={`transition-all duration-300
    ${
      isActive
        ? isCenter
          ? "fill-white stroke-white"
          : "fill-[#BA0C2F] stroke-[#BA0C2F]"
        : "stroke-none"
    }
  `}
                          />
                        );
                      })}
                    </div>

                    {/* 📄 Text */}
                    <p
                      className={`font-futura font-normal leading-relaxed  transition-all duration-300
  ${isCenter ? "text-white" : "text-[#5F5F5F]"}`}
                    >
                      {item.para}
                    </p>

                    {/* 👤 Avatar */}
                    <div className="flex justify-start items-center gap-2 ">
                      <img
                        src={item.avatar}
                        alt={item.heading}
                        className="w-10 h-10 rounded-full object-cover"
                        loading="lazy"
                      />
                      <h1
                        className={`font-semibold text-sm transition-all duration-300
  ${isCenter ? "text-white" : "text-[#BA0C2F]"}`}
                      >
                        {item.heading}
                      </h1>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
