"use client";
import Image from "next/image";
import React, { useState } from "react";
interface DireactorsProps {
  Direactor_Images: any;
  Direactor_Name: string;
  Direactor_Position: string;
  Direactor_Description?: string;
}
const Direactors: React.FC<DireactorsProps> = ({
  Direactor_Images,
  Direactor_Name,
  Direactor_Position,
  Direactor_Description,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative w-full max-w-65 group cursor-pointer overflow-hidden">
        <Image
          src={Direactor_Images}
          alt=""
          className="rounded-2xl w-full h-80 object-cover"
        />
        {/* Glass Shade Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-gray-500/50 rounded-2xl  transition-all duration-500"></div>

        <div className="absolute bottom-3 left-[50%] transform translate-x-[-50%] w-[90%] ">
          <div className="bg-white rounded-full py-3 px-4 shadow-md text-center min-h-14 flex flex-col justify-center items-center text-[#4A4A4A] hover:bg-[#BA0C2F] hover:text-white hover:rounded-2xl">
            <h1 className="font-futura font-semibold text-[16px] text-md ">
              {Direactor_Name}
            </h1>
            <h2 className="font-futura text-[9px] transition-all duration-300 group-hover:hidden">
              {Direactor_Position}
            </h2>

            <button
              onClick={() => setOpen(true)}
              className="hidden group-hover:inline-block mt-2 bg-white text-[#BA0C2F] text-xs py-1 rounded-full font-semibold transition-all duration-300 w-25 cursor-pointer"
            >
              View Profile
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white/95 w-[90%] md:w-150 rounded-3xl shadow-2xl p-8 relative animate-fadeIn">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-5 text-gray-400 hover:text-red-600 text-xl cursor-pointer"
            >
              ✕
            </button>

            {/* Flex Row Layout */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
              {/* Image Left */}
              <Image
                src={Direactor_Images}
                alt=""
                width={112}
                height={112}
                className="w-44 h-64 object-cover rounded-xl shadow-md shrink-0"
              />

              {/* Content Right */}
              <div className="text-center md:text-left">
                <h2 className="text-base font-semibold font-futura">
                  {Direactor_Name}
                </h2>

                <p className="text-xs text-gray-500 italic mt-1 font-futura">
                  {Direactor_Position}
                </p>

                <p className="text-xs text-gray-600 mt-4 leading-relaxed font-futura">
                  {Direactor_Description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Direactors;
