import React from "react";
import Image from "next/image";
import Button from "../common/button";

interface HomePage_CardProps {
  text: string;
  icon: any;
  btn_text: string;
  className?: any;
  hover_image_url?: any;
}

const Home_Card: React.FC<HomePage_CardProps> = ({
  text,
  icon,
  btn_text,
  className,
  hover_image_url,
}) => {
  // const defaultClasses =
  //   "bg-[#fff] md:py-10 md:px-14 rounded-3xl flex flex-col items-center md:gap-8 gap-4 aspect-square md:w-80  mx-auto w-36 py-4  transition-all duration-300 hover:bg-[#BA0C2F] hover:text-[#fff] group";
  // const defaultClasses =
  //   "bg-[#fff] md:py-10  rounded-3xl flex flex-col justify-between items-center md:gap-2 gap-4 md:w-72 mx-auto w-36  py-4 min-h-[320px] md:min-h-[350px] transition-all duration-300 hover:bg-[#BA0C2F] hover:text-[#fff] group";
  const defaultClasses =
    "bg-[#fff] md:py-10 rounded-3xl flex flex-col justify-between items-center md:gap-2 gap-4 py-4 min-h-[320px] xl:min-h-[320px] lg:min-h-[280px] transition-all duration-300 hover:bg-[#BA0C2F] hover:text-[#fff] group w-full max-w-[300px] cursor-pointer";
  // const defaultClasses =
  //   "bg-[#fff] md:py-10 rounded-3xl flex flex-col justify-between items-center md:gap-2 gap-4 py-6 min-h-[280px] md:min-h-[320px] transition-all duration-300 hover:bg-[#BA0C2F] hover:text-[#fff] group max-w-[300px] ";
  return (
    <div className={className ? className : defaultClasses}>
      {/* Text - hover pe white */}
      <p className="xl:text-lg lg:text-sm text-xs  font-futura font-normal group-hover:text-white transition-colors duration-300 line-clamp-3">
        {text}
      </p>

      {/* Icon - hover pe white filter */}
      {/* group-hover:brightness-0 group-hover:invert */}
      {/* lg:w-[100px] */}
      <div className="relative xl:w-28 xl:h-28 lg:w-25 lg-h-[100px] w-20 h-20 flex items-center justify-center">
        {/* Default Icon */}
        <Image
          src={icon}
          alt="icon"
          fill
          className="object-contain transition-opacity duration-300 group-hover:opacity-0"
        />

        {/* Hover Icon */}
        <Image
          src={hover_image_url}
          alt="hover icon"
          fill
          className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </div>
      {/* Button - hover pe background white, text red */}
      {/* <p
        className="font-futura text-[12px] text-center text-white px-8
  max-h-0 overflow-hidden 
  group-hover:max-h-12 
  transition-all duration-300"
      >
        Lorem ipsum sample text lorem ipsum Lorem ipsum
      </p> */}
      <Button
        className="xl:text-[18px] lg:text-[14px] text-xs text-white bg-[#BA0C2F] md:px-10 md:py-2 px-4 py-1 rounded-full 
                  group-hover:bg-white group-hover:text-[#BA0C2F] 
                  transition-all duration-300"
        text={btn_text}
      />
    </div>
  );
};

export default Home_Card;
