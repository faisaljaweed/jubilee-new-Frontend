import React, { useState, useRef, useEffect } from "react";
import { card_Btn } from "@/data/HomeDate";
import Button from "../common/button";
import Container from "./container";
import Home_Card from "./home_card";
import Image from "next/image";
import arrowImg from "../../public/img/Group 1000005163.png"; // apni arrow image ka path
const Section3 = () => {
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "2rem",
          paddingBottom: "5rem",
          backgroundColor: "#F4F4F5",
        }}
      >
        <h1 className="text-center font-futura text-[#4A4A4A] md:text-3xl text-xl uppercase font-semibold mt-10 ">
          Secure What
          <br className="md:hidden block" /> Matters Most
        </h1>

        <div style={isSticky ? { height: `${stickyHeight}px` } : {}}>
          <div
            ref={stickyRef}
            style={
              isSticky
                ? {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 50,
                    backgroundColor: "#F4F4F5",
                    paddingTop: "4rem",
                    height: "130px",
                  }
                : {
                    position: "relative",
                    backgroundColor: "#F4F4F5",
                    paddingTop: "2rem",
                    paddingBottom: "1rem",
                  }
            }
          >
            <Container>
              <div className="flex items-center justify-center mb-10">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    position: "relative",
                  }}
                  className="md:overflow-visible scrollbar-hide hide-scrollbar-single"
                >
                  {card_Btn.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex md:flex-row   items-center"
                      >
                        <Button
                          text={item.text}
                          onClick={() => {
                            setBtnActive(index);
                          }}
                          className={`px-14 py-3 rounded-full  md:text-[18px] text-xs font-medium  font-futura transition-all cursor-pointer
          ${
            btnActive === index
              ? "bg-[#BA0C2F] text-white"
              : "bg-white text-[#4A4A4A] hover:bg-[#BA0C2F] hover:text-white"
          }`}
                        />
                      </div>
                    );
                  })}
                </div>
                {/* BUY NOW */}

                <div
                  className={`-mt-18 -ml-15 ${isSticky ? "top-0 translate-y-0" : " lg:-top-10 xl:-top-10"}`}
                >
                  <Image
                    alt=" arrow Image"
                    src={arrowImg}
                    className={`${isSticky ? "w-32" : "w-32"}`}
                  />
                </div>
              </div>
            </Container>
          </div>
        </div>

        <div className="flex flex-col gap-5  mx-auto">
          <Container>
            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-4 ">
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

export default Section3;
