// "use client";

// import { useState } from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaTiktok,
//   FaRobot,
// } from "react-icons/fa";

// export default function GetConnected() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const socialLinks = [
//     {
//       name: "AI Chatbot",
//       icon: <FaRobot size={22} />,
//       href: "#",
//       color: "#FF0000",
//     },
//     {
//       name: "Facebook",
//       icon: <FaFacebookF size={22} />,
//       href: "https://facebook.com/yourpage",
//       color: "#1877F2",
//     },
//     {
//       name: "Instagram",
//       icon: <FaInstagram size={22} />,
//       href: "https://instagram.com/yourpage",
//       color: "#E1306C",
//     },
//     {
//       name: "LinkedIn",
//       icon: <FaLinkedinIn size={22} />,
//       href: "https://linkedin.com/company/yourpage",
//       color: "#0A66C2",
//     },
//     {
//       name: "YouTube",
//       icon: <FaYoutube size={22} />,
//       href: "https://youtube.com/yourchannel",
//       color: "#FF0000",
//     },
//     {
//       name: "TikTok",
//       icon: <FaTiktok size={22} />,
//       href: "https://tiktok.com/@yourpage",
//       color: "#000000",
//     },
//   ];

//   return (
//     <>
//       <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
//         <div
//           className={`relative flex flex-col items-center bg-white text-[#BA0C2F] rounded-l-2xl overflow-hidden transition-all duration-500 cursor-pointer shadow-[0_-30px_40px_-10px_rgba(0,0,0,0.25),0_20px_25px_-5px_rgba(0,0,0,0.1)] ${
//             isExpanded ? "w-8 overflow-visible" : "w-8 overflow-hidden"
//           }`}
//           onMouseEnter={() => setIsExpanded(true)}
//           onMouseLeave={() => setIsExpanded(false)}
//         >
//           {!isExpanded && (
//             <div className="py-22 px-3 flex items-center justify-center">
//               <div className="-rotate-90 text-md font-futura uppercase tracking-widest whitespace-nowrap">
//                 Get Connected
//               </div>
//             </div>
//           )}

//           {isExpanded && (
//             <div className="flex flex-col py-5 gap-6 social-fade-in">
//               {socialLinks.map((link, idx) => (
//                 <a
//                   key={idx}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group relative flex items-center justify-center hover:scale-110 transition-transform duration-200"
//                   style={{ color: link.color }}
//                 >
//                   {link.icon}

//                   <div className="absolute opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-60">
//                     <div
//                       className="fixed bg-white text-[#BA0C2F] text-sm px-4 py-4 rounded-l-full whitespace-nowrap uppercase"
//                       style={{
//                         right: "90%",
//                         top: "50%",
//                         transform: "translateY(-50%)",
//                       }}
//                     >
//                       {link.name}
//                     </div>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaRobot,
  FaWhatsapp,
} from "react-icons/fa";

export default function GetConnected() {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    {
      name: "AI Chatbot",
      icon: <FaRobot size={22} />,
      href: "#",
      color: "#FF0000",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF size={22} />,
      href: "",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={22} />,
      href: "",
      color: "#E1306C",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={22} />,
      href: "",
      color: "#0A66C2",
    },
    {
      name: "whatsapp",
      icon: <FaWhatsapp size={22} />,
      href: "tel:021111654111",
      color: "#25D366",
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={22} />,
      href: "",
      color: "#FF0000",
    },
    {
      name: "TikTok",
      icon: <FaTiktok size={22} />,
      href: "",
      color: "#000000",
    },
  ];

  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <div
          className={`relative flex flex-col items-center bg-white text-[#BA0C2F] rounded-l-2xl transition-all duration-500 cursor-pointer shadow-[0_-30px_40px_-10px_rgba(0,0,0,0.25),0_20px_25px_-5px_rgba(0,0,0,0.1)] ${
            isExpanded ? "w-8 overflow-visible" : "w-8 overflow-hidden"
          }`}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {!isExpanded && (
            <div className="py-22 px-3 flex items-center justify-center">
              <div className="-rotate-90 text-md font-futura uppercase tracking-widest whitespace-nowrap">
                Get Connected
              </div>
            </div>
          )}

          {isExpanded && (
            <div className="flex flex-col py-5 gap-6 social-fade-in">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target={link.href.startsWith("tel:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  style={{ color: link.color }}
                >
                  {link.icon}

                  <div className="absolute right-full top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-60">
                    <div className="bg-white text-[#BA0C2F] text-sm px-4 py-4 rounded-l-full whitespace-nowrap uppercase">
                      {link.name}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
