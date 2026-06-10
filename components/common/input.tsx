"use client";
import React from "react";

interface InputTypes {
  type: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
}
const Input: React.FC<InputTypes> = ({
  type,
  placeholder,
  onChange,
  value,
  className,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`bg-white  py-3  rounded-full placeholder:text-[#424145] w-72 pl-8 outline-0 ${
          className ?? ""
        }`}
      />
    </div>
  );
};

export default Input;
