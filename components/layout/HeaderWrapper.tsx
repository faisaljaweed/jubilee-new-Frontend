// // "use client";

// // import { useEffect, useState } from "react";
// // import Header from "./header";
// // import { usePathname } from "next/navigation";

// // export default function HeaderWrapper() {
// //   const [menuColor, setMenuColor] = useState<string>("text-gray-900");
// //   const pathname = usePathname();

// //   useEffect(() => {
// //     if (
// //       pathname === "/careers" ||
// //       pathname === "/contact" ||
// //       pathname === "/sustainability"
// //     ) {
// //       setMenuColor("text-white");
// //     }
// //   }, [pathname]);

// //   console.log("pathname", pathname);

// //   return <Header menuColor={menuColor} />;
// // }

// "use client";

// import { useEffect, useState } from "react";
// import Header from "./header";
// import { usePathname } from "next/navigation";

// export default function HeaderWrapper() {
//   const [menuColor, setMenuColor] = useState<string>("text-gray-900");
//   const pathname = usePathname();

//   useEffect(() => {
//     const whiteMenuPages = [
//       "/careers",
//       "/contact",
//       "/sustainability",
//       "/business",
//       // "/health/health-care",
//       // "/health/parents-care",
//       // "/health/her-care",
//       // "/health/lifestyle-care",
//       // "/health/personal-health-care",
//     ];

//     if (whiteMenuPages.includes(pathname)) {
//       setMenuColor("text-white hover:text-gray-300");
//     } else {
//       setMenuColor("text-gray-900");
//     }
//   }, [pathname]);

//   return <Header menuColor={menuColor} />;
// }

// "use client";

// import { useEffect, useState } from "react";
// import Header from "./header";
// import { usePathname } from "next/navigation";

// export default function HeaderWrapper() {
//   const [menuColor, setMenuColor] = useState<string>("text-gray-900");
//   const pathname = usePathname();

//   useEffect(() => {
//     if (
//       pathname === "/careers" ||
//       pathname === "/contact" ||
//       pathname === "/sustainability"
//     ) {
//       setMenuColor("text-white");
//     }
//   }, [pathname]);

//   console.log("pathname", pathname);

//   return <Header menuColor={menuColor} />;
// }

"use client";

import { useEffect, useState } from "react";
import Header from "./header";
import { usePathname } from "next/navigation";

export default function HeaderWrapper() {
  const [menuColor, setMenuColor] = useState<string>("text-gray-900");
  const pathname = usePathname();

  useEffect(() => {
    const whiteMenuPages = [
      "",
      // "/careers",
      // "/contact",
      // "/sustainability",
      // "/business",
      // "/awards",
      // "/leadership",
      // "/branchNetwork",
      // "/claims",
      // "/complaints-queries",
      // "/privacy-policy",
      // "/disclaimer",
      // "/resources",
      // "/home/home-insurance",
      // "/health/lifestyle-care",
      // "/health/family-health-care",
      // "/health/health-care",
      // "/health/parents-care",
      // "/health/her-care",
      // "/health/lifestyle-care",
      // "/health/personal-health-care",
    ];

    if (whiteMenuPages.includes(pathname)) {
      setMenuColor("text-white hover:text-gray-300");
    } else {
      setMenuColor("text-gray-900");
    }
  }, [pathname]);

  return <Header menuColor={menuColor} />;
}
