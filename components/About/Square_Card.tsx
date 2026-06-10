import React from "react";

interface Square_CardProps {
  Card_Number: number;
  Card_Heading: string;
}
const Square_Card: React.FC<Square_CardProps> = ({
  Card_Number,
  Card_Heading,
}) => {
  return (
    <div className="bg-white shadow aspect-square md:w-44  w-32  rounded-2xl flex flex-col justify-center items-center">
      <div
        className=" bg-[#F4F4F5]
      aspect-square
      w-12
      md:w-24
      rounded-full
      flex
      items-center
      justify-center"
      >
        <p className="md:text-2xl text-lg">{Card_Number}</p>
      </div>
      <p className="md:text-[16px] font-futura text-center text-xs mt-2">
        {Card_Heading}
      </p>
    </div>
  );
};

export default Square_Card;
