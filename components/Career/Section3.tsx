import React from "react";
import Image from "next/image";
import Button from "../common/button";
import Card_img1 from "../../public/img/careers/Card_img.png";
import Container from "../home/container";
const Section3 = () => {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-6 mt-10">
        <div className="relative border border-black overflow-hidden rounded-3xl">
          <Image src={Card_img1} alt="" />
          {/* <div className="absolute inset-0 bg-black/25" /> */}
          <div className="absolute bottom-4 left-0 right-0 px-6 text-center">
            <h1 className="text-white text-xl">FLEXIBLE WORK SETTING</h1>
            <Button
              className="md:px-12 md:py-2 px-8 py-2  font-futura bg-[#FFFFFF] text-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-[#FFFFFF] rounded-full  font-semibold cursor-pointer"
              text="EXPLORE"
            />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl">
          <Image src={Card_img1} alt="" />
          <div className="absolute bottom-4 left-0 right-0 px-6 text-center">
            <h1 className="text-white text-xl">FLEXIBLE WORK SETTING</h1>
            <Button
              className="md:px-12 md:py-2 px-8 py-2  font-futura bg-[#FFFFFF] text-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-[#FFFFFF] rounded-full  font-semibold cursor-pointer"
              text="EXPLORE"
            />
          </div>
        </div>
        <div className="relative border border-black overflow-hidden rounded-3xl">
          <Image src={Card_img1} alt="" />
          <div className="absolute bottom-4 left-0 right-0 px-6 text-center">
            <h1 className="text-white text-xl">FLEXIBLE WORK SETTING</h1>
            <Button
              className="md:px-12 md:py-2 px-8 py-2  font-futura bg-[#FFFFFF] text-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-[#FFFFFF] rounded-full  font-semibold cursor-pointer"
              text="EXPLORE"
            />
          </div>
        </div>
        <div className="relative border border-black overflow-hidden rounded-3xl">
          <Image src={Card_img1} alt="" />
          <div className="absolute bottom-4 left-0 right-0 px-6 text-center">
            <h1 className="text-white text-xl">FLEXIBLE WORK SETTING</h1>
            <Button
              className="md:px-12 md:py-2 px-8 py-2  font-futura bg-[#FFFFFF] text-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-[#FFFFFF] rounded-full  font-semibold cursor-pointer"
              text="EXPLORE"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section3;
