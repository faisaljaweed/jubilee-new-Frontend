"use client";
import React, { useEffect, useRef, useState } from "react";
import { card_Btn } from "@/data/BusinessData";
import Button from "../common/button";
import Container from "../home/container";
import Home_Card from "../business/Section";

const Section1 = () => {
  const [btnActive, setBtnActive] = useState(0);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [stickyHeight, setStickyHeight] = useState(0);
  const [originalTop, setOriginalTop] = useState(0);

  useEffect(() => {
    if (stickyRef.current) {
      setStickyHeight(stickyRef.current.clientHeight);
      setOriginalTop(stickyRef.current.offsetTop);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > originalTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [originalTop]);
  return (
    <div>
      <div className=" flex flex-col pb-20 pt-8 bg-[#F4F4F5]">
        <h1 className="text-center font-futura md:text-3xl text-xl uppercase font-semibold mt-10 mb-10 text-[#4A4A4A]">
          Business Protection Built Around Your Industry
          {/* <br className="md:hidden block" /> Matters Most */}
        </h1>

        <div style={isSticky ? { height: `${stickyHeight}px` } : {}}>
          <div
            ref={stickyRef}
            // style={
            //   isSticky
            //     ? {
            //         position: "fixed",
            //         top: 0,
            //         left: 0,
            //         width: "100%",
            //         zIndex: 50,
            //         backgroundColor: "#F4F4F5",
            //         paddingTop: "1.5rem",
            //         // paddingBottom: "rem",
            //       }
            //     : {
            //         position: "relative",
            //         backgroundColor: "#F4F4F5",
            //         paddingTop: "0rem",
            //         paddingBottom: "1rem",
            //       }
            // }
          >
            <Container>
              <div className="grid grid-cols-6 gap-4 pb-10">
                {/* <div className=" overflow-x-auto scrollbar-hide hide-scrollbar-single"> */}
                {/* <div className="flex justify-center gap-4 mb-10 whitespace-nowrap lg:pl-44 xl:p-0"> */}
                {card_Btn.map((item, index) => (
                  <Button
                    key={index}
                    text={item.text}
                    onClick={() => setBtnActive(index)}
                    className={`px-4 md:px-4 py-3 rounded-full 
            text-xs md:text-[18px] font-medium transition-all cursor-pointer
            ${
              btnActive === index
                ? "bg-[#BA0C2F] text-white"
                : "bg-white text-[#4A4A4A] hover:bg-[#BA0C2F] hover:text-white"
            }`}
                  />
                ))}
                {/* </div>
                </div> */}
              </div>
            </Container>
          </div>
        </div>
        <div>
          <Container>
            {/* <div className="grid md:grid-cols-4 md:gap-10 grid-cols-2 gap-4 "> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {card_Btn[btnActive].card.map((item, i) => (
                <Home_Card
                  key={i}
                  text={item.heading}
                  icon={Object.values(item.image_url)[0]}
                  btn_text={item.btn[0].text}
                  hover_image_url={Object.values(item.hover_image_url)[0]}
                />
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Section1;
