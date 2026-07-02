// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import Image from "next/image";
// import JubieeLogo from "../../public/img/Logo.png";
// import Footer_img1 from "../../public/img/Footer1.png";
// import Footer_img2 from "../../public/img/Footer2.png";
// import { FaFacebookF } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaTiktok } from "react-icons/fa";
// import Link from "next/link";

// interface FooterLink {
//   label: string;
//   href: string;
//   children?: { label: string; href: string }[];
// }

// interface FooterSection {
//   title: string;
//   links: FooterLink[];
// }

// const healthcareLinks = [
//   { label: "Parents Care Plus", href: "/health/parents-care-plus" },
//   { label: "Family Health Care", href: "/health/family-health-care" },
//   { label: "Personal Health Care", href: "/health/personal-health-care" },
//   { label: "LifeStyle Care", href: "/health/lifestyle-care" },
//   { label: "Parents Care", href: "/health/parents-care" },
//   { label: "Her Care", href: "/health/her-care" },
// ];

// const footerSections: FooterSection[] = [
//   {
//     title: "Company Information",
//     links: [
//       { label: "About Us", href: "/about" },
//       { label: "Leadership", href: "/about#leadership" },
//       { label: "Sustainability", href: "/sustainability" },
//       { label: "Awards", href: "/awards" },
//       { label: "Careers", href: "/careers" },
//       { label: "Contact", href: "/contact" },
//       { label: "Investor Relations", href: "/investorrelation" },
//     ],
//   },
//   {
//     title: "Products",
//     links: [
//       { label: "Motor", href: "/motor/motor-insurance" },
//       {
//         label: "Health",
//         href: "#",
//         children: healthcareLinks,
//       },
//       { label: "Travel", href: "/travel/travel-insurance" },
//       { label: "Home", href: "/home/home-insurance" },
//       { label: "Self", href: "/self/self-insurance" },
//     ],
//   },
//   {
//     title: "Quick Links",
//     links: [
//       { label: "Panel Hospitals", href: "#" },
//       { label: "News & Events", href: "/resources" },
//       { label: "E-Verify", href: "/e-verify" },
//       { label: "Branch Locator", href: "/branch-network" },
//       { label: "Complaint Resolution", href: "/complaints-queries" },
//       { label: "FIO Website", href: "https://fio.gov.pk/" },
//     ],
//   },
// ];

// function MobileFooterSection({ section }: { section: FooterSection }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   return (
//     <div className="border-b border-[#FFFFFF]">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex w-full items-center justify-between py-4 text-sm font-bold text-white transition hover:text-red-100"
//       >
//         {section.title}
//         <ChevronDown
//           size={18}
//           className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
//         />
//       </button>

//       {isOpen && (
//         <div className="space-y-2 pb-4">
//           {section.links.map((link, index) => (
//             <div key={index}>
//               {link.children ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setOpenDropdown(
//                         openDropdown === link.label ? null : link.label,
//                       )
//                     }
//                     className="flex w-full items-center justify-between font-futura text-xs text-red-100 transition hover:text-white"
//                   >
//                     {link.label}
//                     <ChevronDown
//                       size={14}
//                       className={`transition-transform ${
//                         openDropdown === link.label ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {openDropdown === link.label && (
//                     <div className="ml-3 mt-3 space-y-2 rounded-xl border border-white/15 bg-white/10 p-3">
//                       {link.children.map((child, childIndex) => (
//                         <Link
//                           key={childIndex}
//                           href={child.href}
//                           className="block font-futura text-xs text-red-100 transition hover:text-white"
//                         >
//                           {child.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   href={link.href}
//                   className="block font-futura text-xs text-red-100 transition hover:text-white"
//                 >
//                   {link.label}
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function Footer() {
//   const isExternalLink = (href: string) => href.startsWith("http");
//   return (
//     <footer className="w-full bg-linear-to-b from-[#6E071C] to-[#BA0C2F]">
//       <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
//         <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-7">
//           <div className="col-span-1 md:col-span-2 lg:col-span-2">
//             <div className="flex flex-col">
//               <div className="mb-2">
//                 <Link href="/">
//                   <Image src={JubieeLogo} alt="" />
//                 </Link>
//                 <div className="mt-4 border-b border-[#FAFCFC] w-[85%]"></div>
//               </div>

//               <div className="mb-4 text-sm font-bold text-red-100">
//                 <h2>Jubilee General Insurance Company Limited</h2>
//               </div>

//               <div className="mb-6 space-y-2 font-futura text-xs text-red-100">
//                 <p>
//                   <a
//                     href="tel:+9221111654111"
//                     className="transition hover:text-white"
//                   >
//                     UAN: (9221) 111-654-111
//                   </a>
//                 </p>

//                 <p>
//                   <a
//                     href="tel:+922132416022"
//                     className="transition hover:text-white"
//                   >
//                     Tel: (9221) 32416022-26
//                   </a>
//                 </p>

//                 <p>
//                   <a
//                     href="tel:080003786"
//                     className="transition hover:text-white"
//                   >
//                     Toll Free: 0800-03786
//                   </a>
//                 </p>

//                 <p>
//                   <a
//                     href="tel:+922132416728"
//                     className="transition hover:text-white"
//                   >
//                     Fax: (9221) 32416728/32438738
//                   </a>
//                 </p>

//                 <p>
//                   <a href="sms:82665" className="transition hover:text-white">
//                     TEXT: SMS 82665
//                   </a>
//                 </p>
//               </div>

//               <div className="mb-6 flex gap-2">
//                 <p className="mb-3 text-xs font-bold text-white">
//                   Follow Us On:
//                 </p>

//                 <div className="flex gap-3">
//                   <a
//                     href="#"
//                     className="text-white transition hover:text-red-100"
//                   >
//                     <FaFacebookF size={18} />
//                   </a>
//                   <a
//                     href="#"
//                     className="text-white transition hover:text-red-100"
//                   >
//                     <FaLinkedinIn size={18} />
//                   </a>
//                   <a
//                     href="#"
//                     className="text-white transition hover:text-red-100"
//                   >
//                     <FaInstagram size={18} />
//                   </a>
//                   <a
//                     href="#"
//                     className="text-white transition hover:text-red-100"
//                   >
//                     <FaYoutube size={18} />
//                   </a>
//                   <a
//                     href="#"
//                     className="text-white transition hover:text-red-100"
//                   >
//                     <FaTiktok size={18} />
//                   </a>
//                 </div>
//               </div>

//               <div className="flex flex-row gap-2">
//                 <Image src={Footer_img1} alt="" className="md:h-8 md:w-auto" />
//                 <Image
//                   src={Footer_img2}
//                   alt="SECP"
//                   className="md:h-8 md:w-auto"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="hidden lg:col-span-5 lg:grid lg:grid-cols-3 lg:gap-x-20 xl:gap-x-20">
//             {footerSections.map((section, index) => (
//               <div key={index}>
//                 <h4 className="mb-5 text-base font-bold text-white">
//                   {section.title}
//                 </h4>

//                 <ul className="space-y-4">
//                   {section.links.map((link, linkIndex) => (
//                     <li
//                       key={linkIndex}
//                       className={link.children ? "group relative w-fit" : ""}
//                     >
//                       {link.children ? (
//                         <>
//                           <button
//                             type="button"
//                             className="flex items-center gap-1 text-sm text-red-100 transition hover:text-white"
//                           >
//                             {link.label}
//                             <ChevronDown
//                               size={14}
//                               className="transition-transform group-hover:rotate-180"
//                             />
//                           </button>

//                           <div className="invisible absolute left-full top-1 z-30 ml-3 w-[245px] opacity-0 translate-y-2 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
//                             <div className="rounded-2xl border border-white/20 bg-white p-3 shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
//                               <ul className="space-y-1">
//                                 {link.children.map((child, childIndex) => (
//                                   <li key={childIndex}>
//                                     <Link
//                                       href={child.href}
//                                       className="block rounded-lg px-3 py-2 font-futura text-xs text-[#6E071C] transition hover:bg-[#BA0C2F] hover:text-white"
//                                     >
//                                       {child.label}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           </div>
//                         </>
//                       ) : (
//                         <Link
//                           href={link.href}
//                           target={
//                             isExternalLink(link.href) ? "_blank" : undefined
//                           }
//                           rel={
//                             isExternalLink(link.href)
//                               ? "noopener noreferrer"
//                               : undefined
//                           }
//                           className="text-sm text-red-100 transition hover:text-white"
//                         >
//                           {link.label}
//                         </Link>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           <div className="col-span-1 md:col-span-2 lg:hidden">
//             {footerSections.map((section, index) => (
//               <MobileFooterSection key={index} section={section} />
//             ))}
//           </div>
//         </div>

//         <div className="flex flex-col items-center justify-between gap-4 border-t border-[#FFFFFF] pt-6 md:flex-row md:pt-8">
//           <div className="order-2 flex flex-wrap justify-center gap-4 text-xs text-red-100 md:order-1 md:justify-start">
//             <Link
//               href="/privacy-policy"
//               className="transition hover:text-white"
//             >
//               Privacy Policy
//             </Link>
//             <span className="text-white">|</span>
//             <a href="#" className="transition hover:text-white">
//               SiteMap
//             </a>
//             <span className="text-white">|</span>
//             <Link href="/disclaimer" className="transition hover:text-white">
//               Disclaimer
//             </Link>
//           </div>

//           <p className="order-1 text-xs text-red-100 md:order-2">
//             © Copyright 2026{" "}
//             <span className="font-bold text-white">
//               Jubilee General Insurance
//             </span>{" "}
//             All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import JubieeLogo from "../../public/img/Logo.png";
import Footer_img1 from "../../public/img/Footer1.png";
import Footer_img2 from "../../public/img/Footer2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const healthcareLinks = [
  { label: "Parents Care Plus", href: "/health/parents-care-plus" },
  { label: "Family Health Care", href: "/health/family-health-care" },
  { label: "Personal Health Care", href: "/health/personal-health-care" },
  { label: "LifeStyle Care", href: "/health/lifestyle-care" },
  { label: "Parents Care", href: "/health/parents-care" },
  { label: "Her Care", href: "/health/her-care" },
];

const footerSections: FooterSection[] = [
  {
    title: "Company Information",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Awards", href: "/awards" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
      { label: "Discount Cards", href: "#" },
      // { label: "Investor Relations", href: "/investorrelation" },
    ],
  },
  {
    title: "Investor Relations",
    links: [
      { label: "Financial Highlights", href: "/investorrelation" },
      { label: "Performance Review", href: "/investorrelation" },
      { label: "Financial Reports", href: "/investorrelation" },
      { label: "Stock Updates", href: "/investorrelation" },
      // { label: "Discount Cards", href: "#" },
      // { label: "Careers", href: "/careers" },
      // { label: "Contact", href: "/contact" },
      // { label: "Investor Relations", href: "/investorrelation" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Panel Hospitals", href: "#" },
      { label: "News & Events", href: "/resources" },
      { label: "E-Verify", href: "/e-verify" },
      // { label: "Contact", href: "/contact" },
      { label: "Complaint Resolution", href: "/complaints-queries" },
      // { label: "Careers", href: "/careers" },
      { label: "Branch Locator", href: "/branch-network" },
      { label: "FIO Website", href: "https://fio.gov.pk/" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Motor", href: "/motor/motor-insurance" },
      {
        label: "Health",
        href: "#",
        children: healthcareLinks,
      },
      { label: "Travel", href: "/travel/travel-insurance" },
      { label: "Home", href: "/home/home-insurance" },
      { label: "Self", href: "/self/self-insurance" },
    ],
  },
];

function MobileFooterSection({ section }: { section: FooterSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="border-b border-[#FFFFFF]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-sm font-bold text-white transition hover:text-red-100"
      >
        {section.title}
        <ChevronDown
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="space-y-2 pb-4">
          {section.links.map((link, index) => (
            <div key={index}>
              {link.children ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.label ? null : link.label,
                      )
                    }
                    className="flex w-full items-center justify-between font-futura text-xs text-red-100 transition hover:text-white"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === link.label && (
                    <div className="ml-3 mt-3 space-y-2 rounded-xl border border-white/15 bg-white/10 p-3">
                      {link.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className="block font-futura text-xs text-red-100 transition hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block font-futura text-xs text-red-100 transition hover:text-white"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Footer() {
  const isExternalLink = (href: string) => href.startsWith("http");
  return (
    <footer className="w-full bg-linear-to-b from-[#6E071C] to-[#BA0C2F]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-7">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex flex-col">
              <div className="mb-2">
                <Link href="/">
                  <Image src={JubieeLogo} alt="" />
                </Link>
                <div className="mt-4 border-b border-[#FAFCFC] w-[85%]"></div>
              </div>

              <div className="mb-4 text-sm font-bold text-red-100">
                <h2>Jubilee General Insurance Company Limited</h2>
              </div>

              <div className="mb-6 space-y-2 font-futura text-xs text-red-100">
                <p>
                  <a
                    href="tel:+9221111654111"
                    className="transition hover:text-white"
                  >
                    UAN: (9221) 111-654-111
                  </a>
                </p>

                <p>
                  <a
                    href="tel:+922132416022"
                    className="transition hover:text-white"
                  >
                    Tel: (9221) 32416022-26
                  </a>
                </p>

                <p>
                  <a
                    href="tel:080003786"
                    className="transition hover:text-white"
                  >
                    Toll Free: 0800-03786
                  </a>
                </p>

                <p>
                  <a
                    href="tel:+922132416728"
                    className="transition hover:text-white"
                  >
                    Fax: (9221) 32416728/32438738
                  </a>
                </p>

                <p>
                  <a href="sms:82665" className="transition hover:text-white">
                    TEXT: SMS 82665
                  </a>
                </p>
              </div>

              <div className="mb-6 flex gap-2">
                <p className="mb-3 text-xs font-bold text-white">
                  Follow Us On:
                </p>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="text-white transition hover:text-red-100"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-white transition hover:text-red-100"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-white transition hover:text-red-100"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-white transition hover:text-red-100"
                  >
                    <FaYoutube size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-white transition hover:text-red-100"
                  >
                    <FaTiktok size={18} />
                  </a>
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <Image src={Footer_img1} alt="" className="md:h-8 md:w-auto" />
                <Image
                  src={Footer_img2}
                  alt="SECP"
                  className="md:h-8 md:w-auto"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:grid lg:grid-cols-4 lg:gap-x-20 xl:gap-x-20">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="mb-5 text-base font-bold text-white">
                  {section.title}
                </h4>

                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className={link.children ? "group relative w-fit" : ""}
                    >
                      {link.children ? (
                        <>
                          <button
                            type="button"
                            className="flex items-center gap-1 text-sm text-red-100 transition hover:text-white"
                          >
                            {link.label}
                            <ChevronDown
                              size={14}
                              className="transition-transform group-hover:rotate-180"
                            />
                          </button>

                          <div className="invisible absolute left-full top-1 z-30 ml-3 w-[180px] opacity-0 translate-y-2 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                            <div className="rounded-2xl border border-white/20 bg-white p-3 shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
                              <ul className="space-y-1">
                                {link.children.map((child, childIndex) => (
                                  <li key={childIndex}>
                                    <Link
                                      href={child.href}
                                      className="block rounded-lg px-3 py-2 font-futura text-xs text-[#6E071C] transition hover:bg-[#BA0C2F] hover:text-white"
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          target={
                            isExternalLink(link.href) ? "_blank" : undefined
                          }
                          rel={
                            isExternalLink(link.href)
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm text-red-100 transition hover:text-white"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="col-span-1 md:col-span-2 lg:hidden">
            {footerSections.map((section, index) => (
              <MobileFooterSection key={index} section={section} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#FFFFFF] pt-6 md:flex-row md:pt-8">
          <div className="order-2 flex flex-wrap justify-center gap-4 text-xs text-red-100 md:order-1 md:justify-start">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>
            <span className="text-white">|</span>
            <a href="#" className="transition hover:text-white">
              SiteMap
            </a>
            <span className="text-white">|</span>
            <Link href="/disclaimer" className="transition hover:text-white">
              Disclaimer
            </Link>
          </div>

          <p className="order-1 text-xs text-red-100 md:order-2">
            © Copyright 2026{" "}
            <span className="font-bold text-white">
              Jubilee General Insurance
            </span>{" "}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
