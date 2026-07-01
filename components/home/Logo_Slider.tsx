// "use client";

// import { useState } from "react";
// import Image, { StaticImageData } from "next/image";

// import Serena from "../../public/img/Serena.png";
// import Hbl from "../../public/img/HBL.png";
// import AghaKhanHabitat from "../../public/img/Agha Khan.png";
// import AghaKhanAgency from "../../public/img/AGA_Agency.png";
// import pepsi from "../../public/img/Pepsi.png";
// import unilever from "../../public/img/Unilever.png";
// type Logo = {
//   name: string;
//   image: StaticImageData;
// };

// const logos: Logo[] = [
//   {
//     name: "Serena Hotels",
//     image: Serena,
//   },
//   {
//     name: "HBL",
//     image: Hbl,
//   },
//   {
//     name: "Aga Khan Habitat",
//     image: AghaKhanHabitat,
//   },
//   {
//     name: "Aga Khan Agency",
//     image: AghaKhanAgency,
//   },
//   // {
//   //   name: "Unilever",
//   //   image: unilever,
//   // },
//   // {
//   //   name: "Pepsi",
//   //   image: pepsi,
//   // },
// ];

// // Duplicate array for seamless infinite loop
// const duplicated: Logo[] = [...logos, ...logos, ...logos];

// export default function LogoSlider() {
//   const [paused, setPaused] = useState(false);

//   return (
//     <section className="relative w-full overflow-hidden py-7">
//       <style>{`
//         @keyframes marquee {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-33.333%); }
//         }
//       `}</style>

//       <div
//         className="flex w-max"
//         style={{
//           animation: "marquee 28s linear infinite",
//           animationPlayState: paused ? "paused" : "running",
//         }}
//         onMouseEnter={() => setPaused(true)}
//         onMouseLeave={() => setPaused(false)}
//       >
//         {duplicated.map((logo, i) => (
//           <LogoCard key={`${logo.name}-${i}`} logo={logo} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function LogoCard({ logo }: { logo: Logo }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       className="mx-3 flex flex-shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white"
//       style={{
//         padding: "20px 36px",
//         minWidth: "220px",
//         height: "100px",
//         boxShadow: hovered
//           ? "0 4px 18px rgba(0,0,0,0.13)"
//           : "0 1px 6px rgba(0,0,0,0.07)",
//         transform: hovered ? "translateY(-2px)" : "translateY(0)",
//         transition: "box-shadow 0.2s, transform 0.2s",
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Image
//         src={logo.image}
//         alt={logo.name}
//         width={150}
//         height={60}
//         className="h-auto max-h-[58px] w-auto object-contain"
//       />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

import Serena from "../../public/img/Serena.png";
import Hbl from "../../public/img/HBL.png";
import AghaKhanHabitat from "../../public/img/Agha Khan.png";
import AghaKhanAgency from "../../public/img/AGA_Agency.png";
import pepsi from "../../public/img/Pepsi.png";
import unilever from "../../public/img/Unilever.png";
import Hashwani from "../../public/img/Associated Logo/Hashwani.png";
import agha_khan_develment from "../../public/img/Associated Logo/agha-khan-develment.png";
import aga_khan_foundation from "../../public/img/Associated Logo/aga-khan-foundation.png";
import aga_khan_uni from "../../public/img/Associated Logo/aga-khan-uni.png";
import hashoo from "../../public/img/Associated Logo/hashoo.png";
import habib from "../../public/img/Associated Logo/Habib.png";
import psl from "../../public/img/Associated Logo/psl.png";
type Logo = {
  name: string;
  image: StaticImageData;
};

const businessLogos: Logo[] = [
  {
    name: "Hashwani",
    image: Hashwani,
  },
  {
    name: "agha-khan-develment",
    image: agha_khan_develment,
  },
  {
    name: "aga-khan-foundation",
    image: aga_khan_foundation,
  },
  {
    name: "aga-khan-uni",
    image: aga_khan_uni,
  },
  {
    name: "hashoo",
    image: hashoo,
  },
  {
    name: "Habib",
    image: habib,
  },
  {
    name: "psl",
    image: psl,
  },
  // {
  //   name: "Serena Hotels",
  //   image: Serena,
  // },
  // {
  //   name: "HBL",
  //   image: Hbl,
  // },
  // {
  //   name: "Unilever",
  //   image: unilever,
  // },
  // {
  //   name: "Pepsi",
  //   image: pepsi,
  // },
];

const otherPageLogos: Logo[] = [
  {
    name: "Hashwani",
    image: Hashwani,
  },
  {
    name: "agha-khan-develment",
    image: agha_khan_develment,
  },
  {
    name: "aga-khan-foundation",
    image: aga_khan_foundation,
  },
  {
    name: "aga-khan-uni",
    image: aga_khan_uni,
  },
  {
    name: "hashoo",
    image: hashoo,
  },
  {
    name: "Habib",
    image: habib,
  },
  {
    name: "psl",
    image: psl,
  },
];

export default function LogoSlider() {
  const [paused, setPaused] = useState(false);
  const pathname = usePathname();

  const isBusinessPage = pathname === "/business";

  const logos = isBusinessPage ? businessLogos : otherPageLogos;

  // Duplicate array for seamless infinite loop
  const duplicated: Logo[] = [...logos, ...logos, ...logos];

  return (
    <section className="relative w-full overflow-hidden py-7">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>

      <div
        className="flex w-max"
        style={{
          animation: "marquee 28s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {duplicated.map((logo, i) => (
          <LogoCard key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </section>
  );
}

function LogoCard({ logo }: { logo: Logo }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="mx-3 flex flex-shrink-0 items-center justify-center "
      style={{
        // padding: "20px 36px",
        // minWidth: "220px",
        // height: "100px",
        // boxShadow: hovered
        //   ? "0 4px 18px rgba(0,0,0,0.13)"
        //   : "0 1px 6px rgba(0,0,0,0.07)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "box-shadow 0.2s, transform 0.2s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={logo.image}
        alt={logo.name}
        width={250}
        height={60}
        className="h-auto h-auto w-[250px] object-contain"
      />
    </div>
  );
}
