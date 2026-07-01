"use client";

import HeroSection from "@/components/About/heroSection";
import { useState } from "react";
import "./BranchNetwork.css";
import Image from "next/image";
import img1 from "../../public/img/Branch Network/location_on.png";
import Container from "@/components/home/container";
import { MultipleAddress } from "@/data/branchNetwork";
import dynamic from "next/dynamic";

// ── Dynamic import keeps Mapbox out of SSR (same pattern as before) ──
const MapboxMap = dynamic(() => import("@/components/Mapboxmap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "#f0efeb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#888",
        fontSize: 14,
        fontFamily: "sans-serif",
      }}
    >
      Loading map…
    </div>
  ),
});

type Office = {
  name: string;
  email?: string;
  phoneNo?: string;
  faxNo?: string;
  address: string;
  website?: string;
  lat: number;
  lng: number;
};

type ZoneKey =
  | "HeadOffice"
  | "SouthZone"
  | "NorthZone"
  | "LahoreZone"
  | "MultanZone";

type ZoneObject = {
  [K in ZoneKey]?: Office[];
};

export default function BranchNetwork() {
  const zones: ZoneKey[] = MultipleAddress.map(
    (item) => Object.keys(item)[0] as ZoneKey,
  );

  const getOffices = (zone: ZoneKey): Office[] => {
    const zoneObj = MultipleAddress.find(
      (item) => item[zone as keyof ZoneObject],
    ) as ZoneObject | undefined;
    return zoneObj?.[zone] || [];
  };

  const [activeZone, setActiveZone] = useState<ZoneKey>(zones[0]);
  const [activeOffice, setActiveOffice] = useState<Office | null>(
    getOffices(zones[0])[0] || null,
  );

  const offices = getOffices(activeZone);

  return (
    <>
      <HeroSection
        clasName="branchNetwork"
        text="Branch Network"
        mainText="Branch Network"
        pageLink="/Branch Network"
      />

      <div className="py-14">
        <Container>
          <div className="w-full flex flex-col md:flex-row gap-4">
            {/* Left Side — unchanged */}
            <div className="md:w-1/6 rounded-lg p-2 space-y-2">
              {zones.map((zone, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveZone(zone);
                    setActiveOffice(getOffices(zone)[0]);
                  }}
                  className={`w-full flex items-stretch rounded-md font-medium transition overflow-hidden cursor-pointer
      ${
        activeZone === zone
          ? "bg-[#BA0C2F] text-white"
          : "bg-[#4A4A4A] text-white hover:bg-gray-500"
      }`}
                >
                  {/* Left Icon */}
                  <div className="w-14 flex items-center justify-center bg-[#989D9E]">
                    <Image
                      src={img1}
                      alt="Location Icon"
                      width={40}
                      height={40}
                    />
                  </div>

                  {/* Right Text */}
                  <div className="flex flex-col justify-center text-left leading-tight px-4 py-3">
                    <span className="text-sm font-semibold">
                      {zone.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                    <span className="text-xs opacity-90 underline">
                      Locate Us
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Side — MapboxMap replaces LeafletMap, same dimensions */}
            <div className="md:w-5/6 h-[350px] rounded-lg overflow-hidden">
              <MapboxMap
                offices={offices}
                activeOffice={activeOffice}
                onMarkerClick={(office) => setActiveOffice(office)}
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Address — unchanged */}
      <div className="py-8 md:pb-12">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-center md:gap-12 lg:gap-16">
            <div className="flex flex-wrap gap-6 justify-start">
              {offices.map((office, index) => (
                <div
                  key={index}
                  // onMouseEnter={() => setActiveOffice(office)}
                  className="rounded-3xl bg-white px-6 py-8 md:w-80 lg:w-96 border border-gray-200"
                >
                  <h2 className="font-futura text-lg font-bold tracking-tight md:text-[16px] text-[#4A4A4A]">
                    {office.name}
                  </h2>

                  <div className="mt-3 space-y-1.5 text-sm leading-relaxed text-[#4A4A4A]">
                    <p className="font-futura">{office.address}</p>

                    {office.phoneNo && <p>Tel: {office.phoneNo}</p>}

                    {office.faxNo && <p>Fax: {office.faxNo}</p>}

                    {office.email && (
                      <p>
                        Email:{" "}
                        <a
                          href={`mailto:${office.email}`}
                          className="text-[#4A4A4A] hover:underline"
                        >
                          {office.email}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
