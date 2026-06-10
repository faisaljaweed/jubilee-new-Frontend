import React from "react";

interface ButtonProps {
  text?: string;
  className?: any;
  onClick?: any;
  style?: any;
}
const Button: React.FC<ButtonProps> = ({ text, className, onClick, style }) => {
  const defaultClasses =
    "md:px-12 md:py-3 px-8 py-2  font-futura bg-[#FFFFFF] text-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-[#FFFFFF] rounded-full  font-semibold cursor-pointer";
  return (
    <button
      className={className ? className : defaultClasses}
      onClick={onClick}
    >
      {text || "Get a Quote"}
    </button>
  );
};

export default Button;
