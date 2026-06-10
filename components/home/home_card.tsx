import React from "react";
import Image from "next/image";
import Button from "../common/button";

interface HomePage_CardProps {
  text: string;
  icon: any;
  btn_text: string;
  className?: any;
  hover_image_url: any;
}

const Home_Card: React.FC<HomePage_CardProps> = ({
  text,
  icon,
  btn_text,
  className,
  hover_image_url,
}) => {
  const defaultClasses =
    "bg-[#fff] md:py-10  rounded-3xl flex flex-col justify-between items-center md:gap-2 gap-4 py-6 min-h-[280px] md:min-h-[320px] transition-all duration-300 hover:bg-[#BA0C2F] hover:text-[#fff] group max-w-[300px] cursor-pointer ";
  return (
    <div className={className ? className : defaultClasses}>
      {/* Text - hover pe white */}

      <p
        className="text-sm md:text-xl lg:text-[20px] font-futura font-normal 
  group-hover:text-white transition-colors duration-300 text-[#4A4A4A]
  line-clamp-2 text-center"
      >
        {text}
      </p>

      {/* Icon - hover pe white filter */}
      {/* group-hover:brightness-0 group-hover:invert */}

      <div className="relative md:w-28 md:h-28 w-20 h-20 flex items-center justify-center">
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
      {/* <p className="font-futura  text-[12px] text-center hidden group-hover:opacity-100">
          Lorem ipsum sample text lorem ipsum Lorem ipsum dample
        </p> */}
      {/* <p className="font-futura text-[12px] text-center hidden group-hover:block text-white"> */}
      <p
        className="font-futura text-[12px] text-center text-white px-10
  max-h-0 overflow-hidden 
  group-hover:max-h-12 
  transition-all duration-300"
      >
        Lorem ipsum sample text lorem ipsum Lorem ipsum dample
      </p>
      {/* Button - hover pe background white, text red */}
      <Button
        className="md:text-[14px] text-xs text-white bg-[#BA0C2F] 
    md:px-12 md:py-2 px-4 py-1 rounded-full 
    whitespace-nowrap
    group-hover:bg-white group-hover:text-[#BA0C2F] 
    transition-all duration-300 uppercase"
        text={btn_text}
      />
    </div>
  );
};

export default Home_Card;
