"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/common/button";
import Image from "next/image";
type AppDownload = {
  show: boolean;
  title?: string;
  playStoreImage?: string;
  appStoreImage?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
};
function AnimatedCounter({
  value,
  run,
  startValue = 0,
}: {
  value: string;
  run: boolean;
  startValue?: number;
}) {
  const [display, setDisplay] = useState(value);
  const didRun = useRef(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!run || didRun.current) return;

    didRun.current = true;

    const match = value.match(/^([^\d]*)(\d[\d,.]*)(.*)$/);
    if (!match) return;

    const [, prefix, rawNum, suffix] = match;
    const target = parseFloat(rawNum.replace(/,/g, ""));
    const start = startValue;

    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start - (start - target) * eased);

      setDisplay(`${prefix}${current.toLocaleString()}${suffix}`);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [run, value, startValue]);

  return <>{display}</>;
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
type Theme = {
  headingColor: string;
  textColor: string;
  btnbgColor: string;
  btntextColor: string;
};

type ProductHeroProps = {
  banner: any;
  showApiBanner: boolean;
  fallback: {
    title: string;
    subtitle: string;
    tagline?: string;
    buttonText?: string;
    brochureText?: string;
    brochureUrl?: string;
    imageUrl?: string;
  };
  counters?: {
    label: string;
    value: string;
    startValue?: number;
  }[];
  theme?: Theme;
  appDownload?: AppDownload;
};

export default function ProductHero({
  banner,
  showApiBanner,
  fallback,
  counters = [],
  theme,
  appDownload,
}: ProductHeroProps) {
  const [heroOn, setHeroOn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroOn(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const title = showApiBanner && banner?.title ? banner.title : fallback.title;

  const subtitle =
    showApiBanner && banner?.subtitle ? banner.subtitle : fallback.subtitle;

  const buttonText =
    showApiBanner && banner?.buttonText
      ? banner.buttonText
      : fallback.buttonText;

  // API image aaye to API image show hogi,
  // warna fallback/dummy image show hogi.
  const heroImage =
    showApiBanner && banner?.imageUrl ? banner.imageUrl : fallback.imageUrl;

  const backgroundImage = heroImage ? `url(${heroImage})` : undefined;

  const handleBuyNowClick = () => {
    const quoteSection = document.getElementById("quote-section");

    if (quoteSection) {
      quoteSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleBrochureClick = () => {
    if (!fallback.brochureUrl) return;
    window.open(fallback.brochureUrl, "_blank", "noopener,noreferrer");
  };
  const headingColor = theme?.headingColor ?? "#BA0C2F";
  const textColor = theme?.textColor ?? "#4A4A4A";
  const btnbgColor = theme?.btnbgColor ?? "#F8E8EC";
  const btntextColor = theme?.btntextColor ?? "#4A4A4A";
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage,
      }}
    >
      <div className="mx-auto flex min-h-screen max-w-7xl items-center pt-30">
        <div className="max-w-xl text-black" style={fromLeft(heroOn, 0)}>
          {/* <h1 className="font-futura text-[34px] font-bold uppercase leading-[1.08] tracking-[-1px] text-[#BA0C2F] md:text-[40px] lg:text-[44px]"> */}
          <h1
            className="font-futura text-[34px] font-bold uppercase leading-[1.08] tracking-[-1px] md:text-[40px] lg:text-[44px]"
            style={{ color: headingColor }}
          >
            {title}
          </h1>

          {fallback.tagline && (
            <p
              className="w-full pb-5 font-futura text-sm font-bold leading-relaxed text-[#4A4A4A] md:text-base lg:text-lg "
              style={{ color: textColor }}
            >
              {fallback.tagline}
            </p>
          )}

          {subtitle && (
            <p
              className="my-4 max-w-[500px] font-futura text-[17px] font-normal leading-[1.45] md:text-[18px]"
              style={{ color: textColor }}
            >
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 py-4">
            {buttonText && (
              <div onClick={handleBuyNowClick}>
                <button
                  className="cursor-pointer rounded-full px-8 py-2 font-futura font-semibold uppercase text-white hover:border md:px-10 md:py-3 xl:px-12"
                  style={{
                    backgroundColor: btnbgColor,
                    borderColor: btnbgColor,
                    color: btntextColor,
                  }}
                >
                  {buttonText}
                </button>
              </div>
            )}

            {fallback.brochureText && (
              <div onClick={handleBrochureClick}>
                <Button
                  text={fallback.brochureText}
                  className="cursor-pointer rounded-full border border-[#eeebeb] bg-white px-8 py-2 font-futura font-semibold uppercase text-[#BA0C2F] shadow-2xl md:px-10 md:py-3 xl:px-12"
                />
              </div>
            )}
          </div>
          {/* {appDownload && <AppDownload appDownload={appDownload} />} */}
          {appDownload?.show && (
            <div
              className="mt-2 flex flex-wrap items-center gap-3"
              style={fromLeft(heroOn, 120)}
            >
              <p
                className="font-futura text-[15px] font-semibold uppercase leading-none"
                style={{ color: textColor }}
              >
                {appDownload.title ?? "Download the App"}
              </p>

              {appDownload.playStoreImage && (
                <a
                  href={appDownload.playStoreUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-[42px] w-[135px] transition-transform duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={appDownload.playStoreImage}
                    alt="Download on Play Store"
                    fill
                    sizes="135px"
                    className="object-contain"
                  />
                </a>
              )}

              {appDownload.appStoreImage && (
                <a
                  href={appDownload.appStoreUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-[42px] w-[135px] transition-transform duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={appDownload.appStoreImage}
                    alt="Download on App Store"
                    fill
                    sizes="135px"
                    className="object-contain"
                  />
                </a>
              )}
            </div>
          )}
        </div>

        {counters.length > 0 && (
          <div className="mt-10 flex w-full flex-wrap items-center justify-start gap-4 lg:ml-auto lg:mt-auto lg:w-auto lg:justify-end lg:pb-6 lg:pr-4 xl:pr-10">
            {counters.map((counter, index) => (
              <div
                key={`${counter.label}-${index}`}
                className="flex h-[82px] w-[200px] flex-col items-center justify-center rounded-md bg-white px-5 py-3 shadow-2xl xl:h-[92px] xl:w-[250px]"
                style={fromRight(heroOn, 200 + index * 160)}
              >
                <span className="block w-full text-center text-[24px] font-medium uppercase tabular-nums text-[#BA0C2F] xl:text-3xl">
                  <div className="mt-1 text-center text-[11px] uppercase text-gray-600 xl:text-lg">
                    {counter.label}
                  </div>

                  <AnimatedCounter
                    value={counter.value}
                    startValue={counter.startValue}
                    run={heroOn}
                  />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
