"use client";

import { FaWhatsapp, FaRobot } from "react-icons/fa";

export default function ProductGetConnected() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={22} />,
      href: "tel:021111654111",
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
      <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 md:block">
        <div className="relative flex w-8 flex-col items-center overflow-visible rounded-l-2xl bg-white text-[#BA0C2F] shadow-[0_-30px_40px_-10px_rgba(0,0,0,0.25),0_20px_25px_-5px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col gap-6 py-5">
            {socialLinks.map((link, idx) => (
              <div
                key={idx}
                className="group relative flex w-8 items-center justify-center"
              >
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="relative z-[70] flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{ color: link.color }}
                >
                  {link.icon}
                </a>

                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="absolute right-0 top-1/2 z-[30] -translate-y-1/2 whitespace-nowrap rounded-l-full bg-white py-4 pl-4 pr-12 text-sm uppercase text-[#BA0C2F] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
