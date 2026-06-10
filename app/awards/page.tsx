import HeroSection from "@/components/About/heroSection";
import React from "react";
import "./awards.css";
import { Awards_data, Certifacte, Top_Companies_Awards } from "@/data/Awards";
import Image from "next/image";
import Container from "@/components/home/container";
const Awards = () => {
  return (
    <>
      <div>
        <HeroSection
          clasName="award-hero"
          text="Awards"
          mainText="Achievement Awards"
          pageLink="/awards"
        />
      </div>
      {/*  Award Section */}
      <div className="pt-20">
        <Container>
          <div className="flex gap-4 justify-center">
            {Awards_data.map((item, index) => (
              <div key={index} className="max-w-80">
                <div>
                  <Image
                    src={Object.values(item.Awards_image)[0]}
                    alt=""
                    className="rounded-2xl "
                  />
                </div>
                <div className="pt-4">
                  <h1 className="font-futura  font-normal">
                    {item.Awards_title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      {/* Certificate Section */}
      <div className="pt-16">
        <Container>
          <div className="flex gap-4 justify-center">
            {Certifacte.map((item, index) => {
              return (
                <div key={index} className="max-w-80">
                  <div>
                    <Image
                      src={Object.values(item.Certificate_Image)[0]}
                      alt=""
                      className="rounded-2xl "
                    />
                  </div>
                  <div className="pt-4">
                    <h1 className="font-futura  font-normal">
                      {item.Certificate_year}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
      {/* Top Companies Awards Section */}
      <div className="pb-20 pt-14">
        <h1 className="font-futura uppercase text-2xl font-semibold text-[#4A4A4A] text-center py-4 ">
          Top Companies Award
        </h1>
        <Container>
          <div className="flex gap-4 pt-4 ">
            {Top_Companies_Awards.map((item, index) => {
              return (
                <div key={index}>
                  <div>
                    <Image
                      src={Object.values(item.Top_Companies_Awards_Image)[0]}
                      alt=""
                      className="rounded-2xl "
                    />
                  </div>
                  <div className="pt-4">
                    <h1 className="font-futura font-normal">
                      {item.Top_Companies_Awards_year}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Awards;
