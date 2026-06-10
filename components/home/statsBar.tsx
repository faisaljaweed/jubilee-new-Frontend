import React from "react";
import Image from "next/image";
interface StatsBarProps {
  img_url: any;
  heading: string;
}
const StatsBar: React.FC<StatsBarProps> = ({ img_url, heading }) => {
  return (
    // <div className="bg-white shadow-md w-full max-w-80 md:min-h-24 flex min-h-16  text-[#4A4A4A] items-center rounded-lg gap-2 md:gap-4 pl-3 pr-2 md:pl-10 ">
    //   <div className="w-14">
    //     <Image src={img_url} alt="" className="md:w-14 md:h-14 w-6 h-6" />
    //   </div>
    //   <h1 className="md:text-[18px] text-xs uppercase font-futura font-normal">
    //     {heading}
    //   </h1>
    // </div>
    <div className="group bg-white shadow-md w-full max-w-80 md:min-h-24 flex min-h-16 text-[#4A4A4A] items-center rounded-lg gap-2 md:gap-4 pl-4 pr-1 hover:bg-[#BA0C2F] cursor-pointer transition-all duration-300">
      <div className="w-14">
        <Image
          src={img_url}
          alt=""
          className="md:w-14 md:h-14 w-6 h-6 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
        />
      </div>

      <h1 className="md:text-[18px] text-xs uppercase font-futura font-normal transition-colors duration-300 group-hover:text-white">
        {heading}
      </h1>
    </div>
  );
};

export default StatsBar;
