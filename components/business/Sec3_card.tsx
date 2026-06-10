// import Image from "next/image";
// import React from "react";

// interface Section3_Business_CardProps {
//   images: any;
//   heading: string;
//   paragraph: string;
//   btn_text: string;
// }
// const Sec3_card: React.FC<Section3_Business_CardProps> = ({
//   images,
//   heading,
//   paragraph,
//   btn_text,
// }) => {
//   return (
//     <div className="mt-10 relative flex  w-full">
//       {/* Image */}
//       <div className="w-full max-w-[500px]">
//         <Image
//           src={images}
//           alt="card image"
//           className="rounded-2xl w-full h-auto object-cover"
//         />
//       </div>

//       {/* Card */}
//       <div
//         className="
//     px-6 py-8 w-[85%] md:max-w-[320px]
//     flex flex-col gap-4
//     bg-white shadow-lg rounded-2xl
//     absolute top-1/2 -translate-y-1/2
//     md:right-[30px]
//     right-4
//     break-words
//   "
//       >
//         <div>
//           <h1 className="font-futura text-lg md:text-xl text-[#4A4A4A] font-medium break-words">
//             {heading}
//           </h1>

//           <p className="font-futura text-sm mt-2 text-[#4A4A4A] break-words">
//             {paragraph}
//           </p>
//         </div>

//         <button className="bg-[#BA0C2F] text-white py-2 px-6 rounded-full text-sm w-fit">
//           {btn_text}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sec3_card;

import Image from "next/image";
import React from "react";

interface Section3_Business_CardProps {
  images: any;
  heading: string;
  paragraph: string;
  btn_text: string;
}
const Sec3_card: React.FC<Section3_Business_CardProps> = ({
  images,
  heading,
  paragraph,
  btn_text,
}) => {
  return (
    <div className=" md:relative flex justify-start">
      {/* Image */}
      {/* lg:max-w-[300px] */}
      <div className="lg:max-w-75 xl:max-w-md xl:w-full lg:w-full ">
        <Image
          src={images}
          alt="card image"
          className="rounded-2xl lg:w-full lg:h-auto "
        />
      </div>

      {/* Card */}
      <div
        className="
    xl:pl-6 xl:pr-20 xl:py-10  xl:w-90 lg:w-70
    flex flex-col xl:gap-4 justify-between lg:gap-2 lg:py-7 lg:
    bg-white shadow-md rounded-2xl
    absolute top-1/2 -translate-y-1/2 lg:pl-4
    lg:right-2.5 xl:right-0
  "
        //  lg:right-[10px] xl:right-[0px]
      >
        <div>
          <h1 className="font-futura text-xl xl:text-2xl lg:text-xl">
            {heading}
          </h1>
          <p className="font-futura xl:text-sm lg:text-xs mt-2 lg:pr-8">
            {paragraph}
          </p>
        </div>

        <button className="bg-[#BA0C2F] text-white lg:text-xs lg:py-2 lg:px-4 xl:py-2 xl:px-6 rounded-full xl:text-sm w-fit mt-2">
          {btn_text}
        </button>
      </div>
    </div>
  );
};

export default Sec3_card;
