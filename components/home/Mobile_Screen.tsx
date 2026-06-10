import React from "react";
import Image from "next/image";
import Button from "../common/button";
import Container from "./container";
import Simple from "../../public/Icons/home/Faster Quotes. Easier Claims/simple.png";
import Convenient from "../../public/Icons/home/Faster Quotes. Easier Claims/convenience.png";
import Quickest from "../../public/Icons/home/Faster Quotes. Easier Claims/speedy.png";
import qrCode from "../../public/img/images.png";
import App_Store from "../../public/img/App_Store.png";
import Play_store from "../../public/img/Play_Store.png";
// interface Mobile_ScreenProps {
//   mobile_url?: any;
//   playStore_url?: any;
//   appStore_url?: any;
//   heading?: string;
// }
const Mobile_Screen = () => {
  return (
    <>
      {/* <div className="flex gap-4  items-end">
      
        <div className="flex flex-col justify-center items-center py-10">
         
          <h1 className="font-medium md:text-2xl text-white text-center font-futura max-w-80">
            {heading}
          </h1>

          <ul className="text-white pt-6 ml-6 text-[14px] text-center font-futura space-y-1">
            <li>{list1}</li>
            <li>{list2}</li>
            <li>{list3}</li>
            <li>{list4}</li>
          </ul>

          <div className="flex gap-4 mt-6">
            <Image
              width={140}
              src={playStore_url}
              alt="Play Store"
              className="rounded-full"
            />
            <Image
              width={140}
              src={appStore_url}
              alt="App Store"
              className="rounded-full"
            />
          </div>

          <div className="pt-6">
            <Button text="Read More" />
          </div>
        </div>

    
        <div className="relative self-end mb-0">
          <Image
            src={mobile_url}
            alt="mobile"
            className="w-55 md:w-65 lg:w-85 h-auto"
           
          />
        </div>
      </div> */}

      <div className="py-24 px-6" style={{ backgroundColor: "#F6F6F6" }}>
        <Container>
          <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
            <div className="text-center mb-16">
              <p
                className="font-futura font-semibold uppercase tracking-widest"
                style={{
                  fontSize: "12px",
                  color: "#BA0C2F",
                  letterSpacing: "0.18em",
                  marginBottom: "12px",
                }}
              >
                Download the App
              </p>

              <h2
                className="font-futura font-semibold uppercase"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 40px)",
                  color: "#24262A",
                  lineHeight: 1.2,
                }}
              >
                Faster Quotes. Easier Claims.
                <br />
                <span style={{ color: "#BA0C2F" }}>Everything in One App.</span>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                gap: "48px",
                alignItems: "center",
              }}
              className="md:grid-cols-[1fr_auto_1fr] grid-cols-1"
            >
              {/* LEFT BUTTONS */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {[
                  {
                    label: "Simple",
                    icon: Simple,
                  },
                  {
                    label: "Convenient",
                    icon: Convenient,
                  },
                  {
                    label: "Quickest",
                    icon: Quickest,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "#FFD9E0",
                      borderRadius: "20px",
                      padding: "20px 24px",
                      boxShadow: "0 10px 24px rgba(186, 12, 47, 0.10)",
                    }}
                  >
                    <span
                      className="font-futura font-semibold"
                      style={{
                        fontSize: "22px",
                        color: "#6E071C",
                      }}
                    >
                      {item.label}
                    </span>

                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={48}
                      height={48}
                    />
                    {/* <span
                                style={{
                                  width: "48px",
                                  height: "48px",
                                  borderRadius: "50%",
                                  backgroundColor: "#BA0C2F",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                  boxShadow: "0 8px 18px rgba(186, 12, 47, 0.28)",
                                }}
                              >
                                {item.icon}
                              </span> */}
                  </div>
                ))}
              </div>

              {/* CENTER MOBILE IMAGE */}
              {/* CENTER MOBILE VIDEOS */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "480px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(186,12,47,0.14) 0%, transparent 70%)",
                    zIndex: 0,
                  }}
                />

                {/* LEFT PHONE VIDEO */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    width: "210px",
                    height: "430px",
                    // borderRadius: "36px",
                    // padding: "10px",
                    // background: "#161616",
                    overflow: "hidden",
                    transform: "rotate(-12deg) translateX(38px)",
                    // boxShadow: "0 24px 45px rgba(0,0,0,0.22)",
                    // border: "4px solid #2A2A2A",
                  }}
                >
                  {/* Dynamic island */}
                  <div
                    style={{
                      position: "absolute",
                      top: "18px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "76px",
                      height: "22px",
                      borderRadius: "999px",
                      background: "#111",
                      zIndex: 3,
                    }}
                  />

                  <video
                    src="/video/app video-1.mov"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "35px",
                      display: "block",
                    }}
                  />
                </div>

                {/* RIGHT PHONE VIDEO */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    width: "230px",
                    height: "470px",
                    // borderRadius: "40px",
                    // padding: "10px",
                    // background: "#161616",
                    overflow: "hidden",
                    transform: "rotate(10deg) translateX(-22px)",
                    // boxShadow: "0 28px 55px rgba(0,0,0,0.28)",
                    // border: "4px solid #2A2A2A",
                  }}
                >
                  {/* Dynamic island */}
                  <div
                    style={{
                      position: "absolute",
                      top: "18px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "82px",
                      height: "24px",
                      borderRadius: "999px",
                      background: "#111",
                      zIndex: 3,
                    }}
                  />

                  <video
                    src="/video/app video-2.mov"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "35px",
                      display: "block",
                    }}
                  />
                </div>
              </div>
              {/* <div
                          style={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              width: "260px",
                              height: "260px",
                              borderRadius: "50%",
                              background:
                                "radial-gradient(circle, rgba(186,12,47,0.10) 0%, transparent 70%)",
                              zIndex: 0,
                            }}
                          />
      
                          <Image
                            src="/mobile.png"
                            alt="InsureEase Mobile App"
                            width={380}
                            height={450}
                            style={{
                              objectFit: "contain",
                              position: "relative",
                              zIndex: 1,
                              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.18))",
                            }}
                          />
                        </div> */}

              {/* RIGHT SIDE */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <p
                  className="font-futura font-semibold uppercase"
                  style={{
                    fontSize: "11px",
                    color: "#4F4F4F",
                    letterSpacing: "0.16em",
                  }}
                >
                  Scan to Download
                </p>

                {/* QR CODE IMAGE */}
                <div
                  style={{
                    width: "148px",
                    height: "148px",
                    borderRadius: "16px",
                    backgroundColor: "#FFFFFF",
                    padding: "10px",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.10)",
                  }}
                >
                  <Image
                    src={qrCode}
                    alt="Scan QR Code"
                    width={128}
                    height={128}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>

                {/* STORE BUTTONS */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    width: "170px",
                  }}
                >
                  <div
                    style={{
                      width: "170px",
                      height: "52px",
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={Play_store}
                      alt="Get it on Google Play"
                      width={170}
                      height={52}
                      style={{
                        width: "170px",
                        height: "52px",
                        objectFit: "contain",
                        cursor: "pointer",
                        display: "block",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      width: "170px",
                      height: "52px",
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={App_Store}
                      alt="Download on the App Store"
                      width={170}
                      height={52}
                      style={{
                        width: "170px",
                        height: "52px",
                        objectFit: "contain",
                        cursor: "pointer",
                        display: "block",
                        transform: "scale(1.08)",
                        transformOrigin: "center",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Mobile_Screen;
