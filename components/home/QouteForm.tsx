"use client";

import React, { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carBrand: "",
    modelName: "",
    manufacturingYear: "",
    tracker: "Without Tracker",
    currentValue: "",
    totalPremium: "0.00",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block font-futura text-white text-xs font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-white bg-[#BA0C2F] text-white placeholder-red-200 text-sm outline-none"
          />
        </div>
        <div>
          <label className="block font-futura font-futura text-white text-xs font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="user@lorem.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-white bg-[#BA0C2F] text-white placeholder-red-200 text-sm outline-none"
          />
        </div>
        <div>
          <label className="block font-futura text-white text-xs font-bold mb-2">
            Phone No.
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+92"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-white bg-[#BA0C2F] text-white placeholder-red-200 text-sm outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-futura text-white text-xs font-bold mb-2">
            Car Brand
          </label>
          <select
            name="carBrand"
            value={formData.carBrand}
            onChange={handleChange}
            className="w-full px-4 py-2 font-futura border border-white bg-[#BA0C2F] text-white text-sm outline-none cursor-pointer"
          >
            <option value="">Select Brand</option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="suzuki">Suzuki</option>
          </select>
        </div>
        <div>
          <label className="block font-futura text-white text-xs font-bold mb-2">
            Model Name
          </label>
          <select
            name="modelName"
            value={formData.modelName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-white bg-[#BA0C2F] text-white text-sm outline-none cursor-pointer"
          >
            <option value="">Select Brand</option>
            <option value="model1">Model 1</option>
            <option value="model2">Model 2</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-futura text-white text-xs font-bold mb-2">
            Manufacturing Year
          </label>
          <select
            name="manufacturingYear"
            value={formData.manufacturingYear}
            onChange={handleChange}
            className="w-full px-4 py-2 font-futura border border-white bg-[#BA0C2F] text-white text-sm outline-none cursor-pointer"
          >
            <option value="">Select Brand</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div>
          <label className="block font-futura text-white text-xs font-bold mb-2">
            Tracker
          </label>
          <select
            name="tracker"
            value={formData.tracker}
            onChange={handleChange}
            className="w-full px-4 py-2 font-futura border border-white bg-[#BA0C2F] text-white text-sm outline-none cursor-pointer"
          >
            <option value="Without Tracker">Without Tracker</option>
            <option value="With Tracker">With Tracker</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block font-futura text-white text-xs font-bold mb-2">
          Current Value
        </label>
        <input
          type="text"
          name="currentValue"
          placeholder="Current Value"
          value={formData.currentValue}
          onChange={handleChange}
          className="w-full px-4 py-2 border font-futura border-white bg-[#BA0C2F] text-white placeholder-red-200 text-sm outline-none"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-end">
        <div className="md:col-span-2">
          <label className="block font-futura text-white font-futura text-xs font-bold mb-2">
            TOTAL PREMIUM
          </label>
        </div>
        <div>
          <label className="block font-futura text-white text-xs font-bold mb-2">
            PKR
          </label>
        </div>
        <div>
          <input
            type="text"
            name="totalPremium"
            value={formData.totalPremium}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-white bg-[#BA0C2F] text-white text-sm outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-40 font-futura bg-white text-red-700 font-bold py-3 rounded-full hover:bg-gray-100 transition text-base md:text-md md:px-4"
        >
          PROTECT NOW
        </button>
      </div>

      <p className="text-white font-futura text-xs font-bold mt-2 text-start cursor-pointer">
        TERMS & CONDITIONS APPLY
      </p>
    </form>
  );
}
