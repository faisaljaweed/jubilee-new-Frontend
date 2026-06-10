// import React from "react";
// import Image from "next/image";
// interface Home_TestemonialProps {
//   img_url: any;
//   heading: string;
//   paragraph: string;
// }
// const Home_Testemonial: React.FC<Home_TestemonialProps> = ({
//   img_url,
//   heading,
//   paragraph,
// }) => {
//   return (
//     <div className="flex flex-col justify-center items-center w-72">
//       <Image src={img_url} alt="Testimonial" className="w-14 h-14" />
//       <h1 className="text-center font-futura text-2xl text-white font-semibold mt-5">
//         {heading}
//       </h1>
//       <p className="text-center font-futura text-[16px] font-normal text-white mt-5">
//         {paragraph}
//       </p>
//     </div>
//   );
// };

// export default Home_Testemonial;

import React from "react";
import Image from "next/image";

interface Home_TestemonialProps {
  img_url: any;
  heading: string;
  paragraph: string;
}

const Home_Testemonial: React.FC<Home_TestemonialProps> = ({
  img_url,
  heading,
  paragraph,
}) => {
  return (
    <div className="flex flex-col items-center text-center  w-full px-4 mx-auto ">
      <Image src={img_url} alt="Testimonial" className="w-14 h-14" />

      <h1 className="font-futura text-xl md:text-xl text-white font-semibold mt-5 uppercase">
        {heading}
      </h1>

      <p className="font-futura text-[14px] md:px-6 font-normal text-white mt-4 max-w-[300px] leading-relaxed">
        {paragraph}
      </p>
    </div>
  );
};

export default Home_Testemonial;
