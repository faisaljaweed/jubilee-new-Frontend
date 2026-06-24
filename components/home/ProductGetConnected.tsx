"use client";

import { FaWhatsapp, FaRobot } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

export default function ProductGetConnected() {
  const socialLinks = [
    {
      name: "Complain Care",
      icon: <FaArrowRightArrowLeft size={22} />,
      href: "#",
      color: "#BA0C2F",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={22} />,
      href: "https://wa.me/yourNumber",
      color: "#25D366",
    },
    {
      name: "AI Chatbot",
      icon: <FaRobot size={22} />,
      href: "#",
      color: "#FF0000",
    },
  ];

  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <div className="relative flex flex-col items-center bg-white text-[#BA0C2F] rounded-l-2xl overflow-visible shadow-[0_-30px_40px_-10px_rgba(0,0,0,0.25),0_20px_25px_-5px_rgba(0,0,0,0.1)] w-8">
          <div className="flex flex-col py-5 gap-6">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
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
        </div>
      </div>
    </>
  );
}
