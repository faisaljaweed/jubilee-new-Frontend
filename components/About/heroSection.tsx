// "use client";
// import React from "react";
// import "../../app/about/about.css";
// import Container from "../home/container";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// interface HeroSectionProps {
//   clasName: string;
//   text: string;
//   mainText: string;
//   pageLink: string;
// }
// const HeroSection: React.FC<HeroSectionProps> = ({
//   clasName,
//   text,
//   mainText,
//   pageLink,
// }) => {
//   const pathname = usePathname();
//   const isActive = pathname == pageLink;
//   return (
//     <div className={`${clasName}`}>
//       {/* <Container>
//         <div className="md:pt-36">
//           <h1 className="text-white font-futura md:font-bold md:text-3xl md:tracking-wider">
//             {mainText}
//           </h1>
//           <h1 className="font-futura md:font-semibold md:text-md md:tracking-wide md:pt-1">
//             <Link
//               className={`hover:underline ${pathname === "/" ? "text-red-500" : "text-white"}`}
//               href="/"
//             >
//               Home
//             </Link>
//             <span className="text-white"> - </span>
//             <span className="text-white">Page</span>
//             <span className="text-white"> - </span>
//             <Link
//               href={pageLink}
//               className={`hover:underline ${isActive ? "text-white" : " text-white"}`}
//             >
//               {text}
//             </Link>
//           </h1>
//         </div>
//       </Container> */}
//       <Container>
//         <div className="flex flex-col  items-start min-h-[200px] md:min-h-screen translate-y-1/2">
//           <h1 className="text-white font-futura md:font-bold text-xl md:text-6xl tracking-wide">
//             {mainText}
//           </h1>

//           <h1 className="font-futura md:font-semibold text-xs md:text-[16px] tracking-wide mt-2">
//             <Link
//               className={`hover:underline ${
//                 pathname === "/" ? "text-red-500" : "text-white"
//               }`}
//               href="/"
//             >
//               Home
//             </Link>

//             <span className="text-white"> - </span>
//             <span className="text-white">Page</span>
//             <span className="text-white"> - </span>

//             <Link
//               href={pageLink}
//               className={`hover:underline ${
//                 isActive ? "text-white" : "text-white"
//               }`}
//             >
//               {text}
//             </Link>
//           </h1>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default HeroSection;

"use client";
import React from "react";
import "../../app/about/about.css";
import Container from "../home/container";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface HeroSectionProps {
  clasName: string;
  text: string;
  mainText: string;
  pageLink: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  clasName,
  text,
  mainText,
  pageLink,
}) => {
  const pathname = usePathname();
  const isActive = pathname == pageLink;
  return (
    <div className={`${clasName}`}>
      {/* <Container>
        <div className="md:pt-36">
          <h1 className="text-white font-futura md:font-bold md:text-3xl md:tracking-wider">
            {mainText}
          </h1>
          <h1 className="font-futura md:font-semibold md:text-md md:tracking-wide md:pt-1">
            <Link
              className={`hover:underline ${pathname === "/" ? "text-red-500" : "text-white"}`}
              href="/"
            >
              Home
            </Link>
            <span className="text-white"> - </span>
            <span className="text-white">Page</span>
            <span className="text-white"> - </span>
            <Link
              href={pageLink}
              className={`hover:underline ${isActive ? "text-white" : " text-white"}`}
            >
              {text}
            </Link>
          </h1>
        </div>
      </Container> */}
      <Container>
        <div className="h-[100vh] flex flex-col justify-center">
          <h1 className="text-[#BA0C2F] text-[34px] font-bold uppercase leading-[1.08] tracking-[-1px] md:text-[40px] lg:text-[44px]">
            {mainText}
          </h1>
          {/* 
          <h1 className="font-futura md:font-semibold text-xs md:text-[16px] tracking-wide mt-2">
            <Link
              className={`hover:underline ${
                pathname === "/" ? "text-red-500" : "text-white"
              }`}
              href="/"
            >
              Home
            </Link>

            <span className="text-white"> - </span>
            <span className="text-white">Page</span>
            <span className="text-white"> - </span>

            <Link
              href={pageLink}
              className={`hover:underline ${
                isActive ? "text-white" : "text-white"
              }`}
            >
              {text}
            </Link>
          </h1> */}
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
