// import HeroSection from "@/components/About/heroSection";
// // import React from "react";
// import "./awards.css";
// import { Awards_data, Certifacte, Top_Companies_Awards } from "@/data/Awards";
// import Image from "next/image";
// import Container from "@/components/home/container";
// const Awards = () => {
//   return (
//     <>
//       <div>
//         <HeroSection
//           clasName="award-hero"
//           text="Awards"
//           mainText="Achievement Awards"
//           pageLink="/awards"
//         />
//       </div>
//       {/*  Award Section */}
//       <div className="pt-20">
//         <Container>
//           <div className="flex gap-4 justify-center">
//             {Awards_data.map((item, index) => (
//               <div key={index} className="max-w-80">
//                 <div>
//                   <Image
//                     src={Object.values(item.Awards_image)[0]}
//                     alt=""
//                     className="rounded-2xl "
//                   />
//                 </div>
//                 <div className="pt-4">
//                   <h1 className="font-futura  font-normal">
//                     {item.Awards_title}
//                   </h1>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </div>
//       {/* Certificate Section */}
//       <div className="pt-16">
//         <Container>
//           <div className="flex gap-4 justify-center">
//             {Certifacte.map((item, index) => {
//               return (
//                 <div key={index} className="max-w-80">
//                   <div>
//                     <Image
//                       src={Object.values(item.Certificate_Image)[0]}
//                       alt=""
//                       className="rounded-2xl "
//                     />
//                   </div>
//                   <div className="pt-4">
//                     <h1 className="font-futura  font-normal">
//                       {item.Certificate_year}
//                     </h1>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </Container>
//       </div>
//       {/* Top Companies Awards Section */}
//       <div className="pb-20 pt-14">
//         <h1 className="font-futura uppercase text-2xl font-semibold text-[#4A4A4A] text-center py-4 ">
//           Top Companies Award
//         </h1>
//         <Container>
//           <div className="flex gap-4 pt-4 ">
//             {Top_Companies_Awards.map((item, index) => {
//               return (
//                 <div key={index}>
//                   <div>
//                     <Image
//                       src={Object.values(item.Top_Companies_Awards_Image)[0]}
//                       alt=""
//                       className="rounded-2xl "
//                     />
//                   </div>
//                   <div className="pt-4">
//                     <h1 className="font-futura font-normal">
//                       {item.Top_Companies_Awards_year}
//                     </h1>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Awards;
"use client";

import React, { useState } from "react";
import { X, Award, CalendarDays } from "lucide-react";
import HeroSection from "@/components/About/heroSection";
// import React from "react";
import "./awards.css";
const achievementAwards = [
  {
    title: "InsurTech Summit III, Organized by Pakistan Fintech Network",
    // year: "2025",
    image: "/img/Awards/Fintech.jpg",
  },
  {
    title:
      "Jubilee General Insurance at IAP Regional Committee North Annual Dinner 2025",
    // year: "2025",
    image: "/img/Awards/IAP.jpg",
  },
  {
    title:
      "Jubilee General Insurance awarded top-ranking position in Non-Life Insurance Sector – MAP Corporate Excellence Awards 2024",
    // year: "2024",
    image: "/img/Awards/39th-MAP-Corporate-Excellence-Awards-2024.jpeg",
  },
  {
    title: "4th Place – Best Corporate & Sustainability Report Awards 2023",
    // year: "2023",
    image: "/img/Awards/Corporate-Sustainiblity-Report-Awards.jpeg",
  },
  {
    title: "Corporate Excellence Award – 38th MAP Awards 2023",
    // year: "2023",
    image: "/img/Awards/34thCorporateExcellence.jpg",
  },
  {
    title: "Top Companies Award",
    year: "1985, 1997, 1998",
    image: "/img/Awards/award-1998.jpg",
  },
];

// const topCompanyAwards = [
//   {
//     title: "Top Companies Award",
//     year: "1998",
//     image: "/img/Awards/award-1998.jpg",
//   },
//   {
//     title: "Top Companies Award",
//     year: "1997",
//     image: "/img/Awards/award-1997.jpg",
//   },
//   {
//     title: "Top Companies Award",
//     year: "1985",
//     image: "/img/Awards/award-1985.jpg",
//   },
// ];

const AwardsPage = () => {
  const [selectedImage, setSelectedImage] = useState<{
    title: string;
    image: string;
  } | null>(null);

  return (
    <main className="bg-white">
      <div>
        <HeroSection
          clasName="award-hero"
          text="Awards"
          mainText="Awards & Achievement "
          pageLink="/awards"
        />
      </div>
      {/* Awards Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 ">
            <span className="mb-3 inline-flex rounded-full bg-[#BA0C2F]/10 px-4 py-2 text-sm font-semibold text-[#BA0C2F]">
              Achievement Awards
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Recognized for Excellence and Performance
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Jubilee General Insurance has been recognized over the years for
              excellence, innovation, corporate performance, and industry
              leadership.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {achievementAwards.map((award) => (
              <div
                key={award.title}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <button
                  type="button"
                  onClick={() =>
                    setSelectedImage({
                      title: award.title,
                      image: award.image,
                    })
                  }
                  className="relative block h-[330px] w-full overflow-hidden bg-gray-50"
                >
                  <img
                    src={award.image}
                    alt={award.title}
                    className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-[1.04]"
                  />

                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#BA0C2F] shadow-md">
                    <Award size={22} />
                  </div>
                </button>

                <div className="p-6">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
                    {/* <CalendarDays size={15} /> */}
                    {award.year}
                  </div>

                  <h3 className="text-lg font-bold leading-7 text-gray-900">
                    {award.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies Award */}
      {/* <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Top Companies Award
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            {topCompanyAwards.map((award) => (
              <div
                key={award.year}
                className="rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <button
                  type="button"
                  onClick={() =>
                    setSelectedImage({
                      title: `${award.title} ${award.year}`,
                      image: award.image,
                    })
                  }
                  className="mx-auto mb-5 flex h-[190px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gray-50"
                >
                  <img
                    src={award.image}
                    alt={`${award.title} ${award.year}`}
                    className="h-full w-full object-contain p-3 transition duration-300 hover:scale-[1.04]"
                  />
                </button>

                <h3 className="text-lg font-bold text-gray-900">
                  {award.year}
                </h3>

                <p className="mt-1 text-sm font-medium text-gray-500">
                  {award.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 py-6">
          <div className="relative max-h-[92vh] w-full max-w-5xl rounded-2xl bg-white p-4">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#BA0C2F] text-white shadow-lg transition hover:bg-[#990A28]"
              aria-label="Close image"
            >
              <X size={22} />
            </button>

            {/* <h3 className="mb-4 pr-12 text-lg font-bold text-gray-900">
              {selectedImage.title}
            </h3> */}

            <div className="flex max-h-[80vh] items-center justify-center overflow-auto rounded-xl bg-gray-50">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[78vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default AwardsPage;
