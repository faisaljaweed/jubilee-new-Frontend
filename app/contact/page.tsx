// "use client";

// import Image from "next/image";
// import "./contact.css";
// import Container from "@/components/home/container";
// import branch_Network from "../../public/img/Contact/AdobeStock_210983604.png";
// import { useMemo, useState } from "react";
// import Link from "next/link";
// import axios from "axios";
// import toast from "react-hot-toast";

// type InquiryType = "" | "Complaint" | "Product";
// type ProductType = "" | "conditional" | "takaful";

// import { FaMapMarkerAlt } from "react-icons/fa";
// import { FaPhoneVolume } from "react-icons/fa6";
// import { TbWorld } from "react-icons/tb";
// import { TiSocialLinkedinCircular } from "react-icons/ti";
// import { PiFacebookLogo } from "react-icons/pi";
// import { PiInstagramLogo } from "react-icons/pi";
// import TalkToUsDirectlySection from "@/components/Contact/TalkToUsDirectlySection";

// type FormData = {
//   name: string;
//   cnicOrPassport: string;
//   mobileNumber: string;
//   email: string;
//   city: string;
//   productOrServiceArea: string;
//   inquiryType: InquiryType;
//   complaintDetails: {
//     policyNumber: string;
//     cnicNumber: string;
//     complaintBox: string;
//   };
//   productDetails: {
//     productType: ProductType;
//     productName: string;
//     queryDetails: string;
//   };
// };

// export default function ContactSection() {
//   const [step, setStep] = useState<1 | 2 | 3>(1);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [submitting, setSubmitting] = useState(false);

//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     cnicOrPassport: "",
//     mobileNumber: "",
//     email: "",
//     city: "",
//     productOrServiceArea: "",
//     inquiryType: "",
//     complaintDetails: {
//       policyNumber: "",
//       cnicNumber: "",
//       complaintBox: "",
//     },
//     productDetails: {
//       productType: "",
//       productName: "",
//       queryDetails: "",
//     },
//   });

//   const productNameOptions = useMemo(() => {
//     const map: Record<ProductType, string[]> = {
//       "": [],
//       conditional: ["Conditional Plan A", "Conditional Plan B"],
//       takaful: ["Takaful Motor", "Takaful Health"],
//     };

//     return map[formData.productDetails.productType] ?? [];
//   }, [formData.productDetails.productType]);

//   const setField = (path: string, value: string) => {
//     setFormData((prev) => {
//       const next = structuredClone(prev) as FormData;
//       const keys = path.split(".");

//       let obj: Record<string, unknown> = next as unknown as Record<
//         string,
//         unknown
//       >;

//       for (let i = 0; i < keys.length - 1; i++) {
//         obj = obj[keys[i]] as Record<string, unknown>;
//       }

//       obj[keys[keys.length - 1]] = value;
//       return next;
//     });

//     const errorKey = path.split(".").pop() || path;
//     setErrors((prev) => ({
//       ...prev,
//       [errorKey]: "",
//     }));
//   };

//   const handleTopLevelChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
//   ) => {
//     const { name, value } = e.target;

//     if (name === "inquiryType") {
//       const inquiryType = value as InquiryType;

//       setFormData((prev) => ({
//         ...prev,
//         inquiryType,
//         complaintDetails:
//           inquiryType === "Complaint"
//             ? prev.complaintDetails
//             : {
//                 policyNumber: "",
//                 cnicNumber: "",
//                 complaintBox: "",
//               },
//         productDetails:
//           inquiryType === "Product"
//             ? prev.productDetails
//             : {
//                 productType: "",
//                 productName: "",
//                 queryDetails: "",
//               },
//       }));

//       setErrors((prev) => ({
//         ...prev,
//         inquiryType: "",
//       }));

//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     setErrors((prev) => ({
//       ...prev,
//       [name]: "",
//     }));
//   };

//   const validateStep1 = () => {
//     const nextErrors: Record<string, string> = {};

//     if (!formData.name.trim()) {
//       nextErrors.name = "Name is required";
//     }

//     if (!formData.cnicOrPassport.trim()) {
//       nextErrors.cnicOrPassport = "CNIC / Passport number is required";
//     }

//     if (!formData.mobileNumber.trim()) {
//       nextErrors.mobileNumber = "Mobile number is required";
//     }

//     if (!formData.email.trim()) {
//       nextErrors.email = "Email is required";
//     }

//     if (!formData.city.trim()) {
//       nextErrors.city = "City is required";
//     }

//     if (!formData.productOrServiceArea.trim()) {
//       nextErrors.productOrServiceArea = "Product or service area is required";
//     }

//     if (!formData.inquiryType) {
//       nextErrors.inquiryType = "Select query type";
//     }

//     setErrors(nextErrors);
//     return Object.keys(nextErrors).length === 0;
//   };

//   const validateStep2 = () => {
//     const nextErrors: Record<string, string> = {};

//     if (formData.inquiryType === "Complaint") {
//       if (!formData.complaintDetails.policyNumber.trim()) {
//         nextErrors.policyNumber = "Policy number is required";
//       }

//       if (!formData.complaintDetails.cnicNumber.trim()) {
//         nextErrors.cnicNumber = "CNIC is required";
//       }

//       if (!formData.complaintDetails.complaintBox.trim()) {
//         nextErrors.complaintBox = "Complaint details are required";
//       }
//     }

//     if (formData.inquiryType === "Product") {
//       if (!formData.productDetails.productType) {
//         nextErrors.productType = "Product type is required";
//       }

//       if (!formData.productDetails.productName.trim()) {
//         nextErrors.productName = "Product name is required";
//       }

//       if (!formData.productDetails.queryDetails.trim()) {
//         nextErrors.queryDetails = "Details are required";
//       }
//     }

//     setErrors(nextErrors);
//     return Object.keys(nextErrors).length === 0;
//   };

//   const goNextFromStep1 = () => {
//     if (!validateStep1()) return;
//     setStep(2);
//   };

//   const goBack = () => {
//     if (step === 2) setStep(1);
//     if (step === 3) setStep(2);
//   };

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       cnicOrPassport: "",
//       mobileNumber: "",
//       email: "",
//       city: "",
//       productOrServiceArea: "",
//       inquiryType: "",
//       complaintDetails: {
//         policyNumber: "",
//         cnicNumber: "",
//         complaintBox: "",
//       },
//       productDetails: {
//         productType: "",
//         productName: "",
//         queryDetails: "",
//       },
//     });

//     setErrors({});
//     setStep(1);
//   };

//   const handleFinalSubmit = async () => {
//     try {
//       setSubmitting(true);

//       const payload = {
//         name: formData.name,
//         cnicOrPassport: formData.cnicOrPassport,
//         mobileNumber: formData.mobileNumber,
//         email: formData.email,
//         city: formData.city,
//         productOrServiceArea: formData.productOrServiceArea,
//         inquiryType: formData.inquiryType,
//         complaintDetails:
//           formData.inquiryType === "Complaint"
//             ? formData.complaintDetails
//             : undefined,
//         productDetails:
//           formData.inquiryType === "Product"
//             ? formData.productDetails
//             : undefined,
//       };

//       await axios.post(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/leads`,
//         payload,
//       );

//       toast.success("Lead submitted successfully");
//       resetForm();
//     } catch (error: any) {
//       console.error(error);
//       const message = error.response?.data?.message || "Something went wrong";
//       toast.error(message);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const inputClass =
//     "w-full rounded-full border border-gray-300 bg-white px-5 py-3 font-futura text-sm text-[#4A4A4A] outline-none transition focus:border-[#BA0C2F] focus:ring-2 focus:ring-[#BA0C2F]/10";

//   const selectClass =
//     "w-full rounded-full border border-gray-300 bg-white px-5 py-3 font-futura text-sm text-[#4A4A4A] outline-none transition appearance-none focus:border-[#BA0C2F] focus:ring-2 focus:ring-[#BA0C2F]/10";

//   const textareaClass =
//     "w-full rounded-3xl border border-gray-300 bg-white px-5 py-4 font-futura text-sm text-[#4A4A4A] outline-none transition resize-none focus:border-[#BA0C2F] focus:ring-2 focus:ring-[#BA0C2F]/10";

//   const ErrorText = ({ message }: { message?: string }) => {
//     return message ? (
//       <p className="mt-1 min-h-[18px] font-futura text-xs text-red-600">
//         {message}
//       </p>
//     ) : (
//       <div className="mt-1 min-h-[18px]" />
//     );
//   };

//   return (
//     <>
//       <div className="back h-screen">
//         <div className="mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
//           <div className="flex flex-col justify-center text-left text-white pt-10">
//             <h1 className="font-futura text-[32px] font-bold uppercase leading-[1.1] tracking-[-1px] md:text-[42px] lg:text-[48px]">
//               connect with us
//             </h1>

//             <p className="mt-5 font-futura text-[15px] font-normal leading-[1.5] md:text-[22px]">
//               Explore our insurance solutions or connect with our
//               <br /> support team instantly.
//             </p>
//           </div>
//         </div>
//       </div>

//       <TalkToUsDirectlySection />

//       <section className="py-6">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3">
//             {[
//               {
//                 title: "Corporate Head Office",
//                 text: "2nd Floor, Jubilee Insurance House I. I. Chundrigar Road, Karachi-74000",
//                 icon: <FaMapMarkerAlt />,
//               },
//               {
//                 title: "Talk to us",
//                 text: "(0800)-0-3786\n(9221) 32416022-26\n(9221) 32402004-09",
//                 icon: <FaPhoneVolume />,
//               },
//               {
//                 title: "Email Our Team",
//                 text: "info@jubileegeneral.com.pk \ntakaful1@jubileegeneral.com.pk",
//                 icon: <TbWorld />,
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-row items-start gap-4 rounded-3xl p-6 transition-shadow duration-300"
//               >
//                 <div
//                   className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full"
//                   style={{
//                     background:
//                       "radial-gradient(circle, #EADFD100 0%, #9C836252 90%)",
//                   }}
//                 >
//                   <div className="text-2xl text-red-800">{item.icon}</div>
//                 </div>

//                 <div className="flex flex-col">
//                   <h3 className="font-futura text-lg font-bold text-gray-900">
//                     {item.title}
//                   </h3>
//                   <p className="mt-2 whitespace-pre-line font-futura text-gray-600">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="pb-12">
//         <Container>
//           <div className="flex w-full flex-col gap-5 lg:flex-row">
//             <div className="w-full lg:w-[70%]">
//               <div className="rounded-2xl bg-gray-200 p-5 md:p-7">
//                 {step === 1 && (
//                   <>
//                     <h2 className="mb-5 font-futura text-xl font-semibold text-[#4A4A4A]">
//                       Contact Details
//                     </h2>

//                     <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
//                       <div>
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleTopLevelChange}
//                           placeholder="Name of Complainant"
//                           className={inputClass}
//                         />
//                         <ErrorText message={errors.name} />
//                       </div>

//                       <div>
//                         <input
//                           type="text"
//                           name="cnicOrPassport"
//                           value={formData.cnicOrPassport}
//                           onChange={handleTopLevelChange}
//                           placeholder="CNIC / Passport Number"
//                           className={inputClass}
//                         />
//                         <ErrorText message={errors.cnicOrPassport} />
//                       </div>

//                       <div>
//                         <input
//                           type="text"
//                           name="mobileNumber"
//                           value={formData.mobileNumber}
//                           onChange={handleTopLevelChange}
//                           placeholder="Mobile Number"
//                           className={inputClass}
//                         />
//                         <ErrorText message={errors.mobileNumber} />
//                       </div>

//                       <div>
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleTopLevelChange}
//                           placeholder="Your Email"
//                           className={inputClass}
//                         />
//                         <ErrorText message={errors.email} />
//                       </div>

//                       <div>
//                         <input
//                           type="text"
//                           name="city"
//                           value={formData.city}
//                           onChange={handleTopLevelChange}
//                           placeholder="City"
//                           className={inputClass}
//                         />
//                         <ErrorText message={errors.city} />
//                       </div>

//                       <div>
//                         <input
//                           type="text"
//                           name="productOrServiceArea"
//                           value={formData.productOrServiceArea}
//                           onChange={handleTopLevelChange}
//                           placeholder="Product or Service Area"
//                           className={inputClass}
//                         />
//                         <ErrorText message={errors.productOrServiceArea} />
//                       </div>
//                     </div>

//                     <div>
//                       <select
//                         name="inquiryType"
//                         value={formData.inquiryType}
//                         onChange={handleTopLevelChange}
//                         className={selectClass}
//                       >
//                         <option value="">Query Type</option>
//                         <option value="Complaint">Complaint</option>
//                         <option value="Product">Product</option>
//                       </select>
//                       <ErrorText message={errors.inquiryType} />
//                     </div>

//                     <textarea
//                       value={formData.complaintDetails.complaintBox}
//                       onChange={(e) =>
//                         setField(
//                           "complaintDetails.complaintBox",
//                           e.target.value,
//                         )
//                       }
//                       placeholder="Complaint Here"
//                       rows={5}
//                       className={textareaClass}
//                     />
//                     <ErrorText message={errors.complaintBox} />
//                     <div className="mt-3 flex justify-end">
//                       <button
//                         type="button"
//                         onClick={goNextFromStep1}
//                         className="rounded-full bg-[#BA0C2F] px-9 py-3 font-futura font-semibold text-white transition hover:bg-red-800"
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </>
//                 )}

//                 {/* {step === 2 && (
//                   <>
//                     {formData.inquiryType === "Complaint" && (
//                       <>
//                         <h2 className="mb-5 font-futura text-xl font-semibold text-[#4A4A4A]">
//                           Complaint
//                         </h2>

//                         <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
//                           <div>
//                             <input
//                               type="text"
//                               value={formData.complaintDetails.policyNumber}
//                               onChange={(e) =>
//                                 setField(
//                                   "complaintDetails.policyNumber",
//                                   e.target.value,
//                                 )
//                               }
//                               placeholder="Policy Number"
//                               className={inputClass}
//                             />
//                             <ErrorText message={errors.policyNumber} />
//                           </div>

//                           <div>
//                             <input
//                               type="text"
//                               value={formData.complaintDetails.cnicNumber}
//                               onChange={(e) =>
//                                 setField(
//                                   "complaintDetails.cnicNumber",
//                                   e.target.value,
//                                 )
//                               }
//                               placeholder="CNIC No"
//                               className={inputClass}
//                             />
//                             <ErrorText message={errors.cnicNumber} />
//                           </div>
//                         </div>

//                         <textarea
//                           value={formData.complaintDetails.complaintBox}
//                           onChange={(e) =>
//                             setField(
//                               "complaintDetails.complaintBox",
//                               e.target.value,
//                             )
//                           }
//                           placeholder="Complaint Here"
//                           rows={5}
//                           className={textareaClass}
//                         />
//                         <ErrorText message={errors.complaintBox} />
//                       </>
//                     )}

//                     {formData.inquiryType === "Product" && (
//                       <>
//                         <h2 className="mb-5 font-futura text-xl font-semibold text-[#4A4A4A]">
//                           Product Type
//                         </h2>

//                         <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
//                           <div>
//                             <select
//                               value={formData.productDetails.productType}
//                               onChange={(e) => {
//                                 const nextType = e.target.value as ProductType;

//                                 setFormData((prev) => ({
//                                   ...prev,
//                                   productDetails: {
//                                     ...prev.productDetails,
//                                     productType: nextType,
//                                     productName: "",
//                                   },
//                                 }));

//                                 setErrors((prev) => ({
//                                   ...prev,
//                                   productType: "",
//                                   productName: "",
//                                 }));
//                               }}
//                               className={selectClass}
//                             >
//                               <option value="">Product Type</option>
//                               <option value="conditional">Conditional</option>
//                               <option value="takaful">Takaful</option>
//                             </select>
//                             <ErrorText message={errors.productType} />
//                           </div>

//                           <div>
//                             <select
//                               value={formData.productDetails.productName}
//                               onChange={(e) =>
//                                 setField(
//                                   "productDetails.productName",
//                                   e.target.value,
//                                 )
//                               }
//                               disabled={!formData.productDetails.productType}
//                               className={`${selectClass} disabled:cursor-not-allowed disabled:opacity-60`}
//                             >
//                               <option value="">Product Name</option>
//                               {productNameOptions.map((name) => (
//                                 <option key={name} value={name}>
//                                   {name}
//                                 </option>
//                               ))}
//                             </select>
//                             <ErrorText message={errors.productName} />
//                           </div>
//                         </div>

//                         <textarea
//                           value={formData.productDetails.queryDetails}
//                           onChange={(e) =>
//                             setField(
//                               "productDetails.queryDetails",
//                               e.target.value,
//                             )
//                           }
//                           placeholder="Detail Here"
//                           rows={5}
//                           className={textareaClass}
//                         />
//                         <ErrorText message={errors.queryDetails} />
//                       </>
//                     )}

//                     <div className="mt-3 flex justify-end gap-3">
//                       <button
//                         type="button"
//                         onClick={goBack}
//                         className="rounded-full bg-[#3E3E3E] px-10 py-3 font-futura font-semibold text-white transition hover:bg-black"
//                       >
//                         Back
//                       </button>

//                       <button
//                         type="button"
//                         onClick={async () => {
//                           if (!validateStep2()) return;
//                           await handleFinalSubmit();
//                         }}
//                         disabled={submitting}
//                         className="rounded-full bg-[#BA0C2F] px-10 py-3 font-futura font-semibold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
//                       >
//                         {submitting ? "Submitting..." : "Submit"}
//                       </button>
//                     </div>
//                   </>
//                 )} */}

//                 {step === 3 && (
//                   <>
//                     <h2 className="mb-4 font-futura text-lg font-semibold text-[#4A4A4A]">
//                       Review
//                     </h2>

//                     <div className="rounded-3xl border border-gray-200 bg-white p-5 text-sm">
//                       <p>
//                         <b>Name:</b> {formData.name}
//                       </p>
//                       <p>
//                         <b>CNIC / Passport:</b> {formData.cnicOrPassport}
//                       </p>
//                       <p>
//                         <b>Mobile:</b> {formData.mobileNumber}
//                       </p>
//                       <p>
//                         <b>Email:</b> {formData.email}
//                       </p>
//                       <p>
//                         <b>City:</b> {formData.city}
//                       </p>
//                       <p>
//                         <b>Product or Service Area:</b>{" "}
//                         {formData.productOrServiceArea}
//                       </p>
//                       <p>
//                         <b>Inquiry Type:</b> {formData.inquiryType}
//                       </p>

//                       {formData.inquiryType === "Complaint" ? (
//                         <>
//                           <p className="mt-3">
//                             <b>Policy:</b>{" "}
//                             {formData.complaintDetails.policyNumber}
//                           </p>
//                           <p>
//                             <b>CNIC:</b> {formData.complaintDetails.cnicNumber}
//                           </p>
//                           <p>
//                             <b>Complaint:</b>{" "}
//                             {formData.complaintDetails.complaintBox}
//                           </p>
//                         </>
//                       ) : (
//                         <>
//                           <p className="mt-3">
//                             <b>Product Type:</b>{" "}
//                             {formData.productDetails.productType}
//                           </p>
//                           <p>
//                             <b>Product Name:</b>{" "}
//                             {formData.productDetails.productName}
//                           </p>
//                           <p>
//                             <b>Details:</b>{" "}
//                             {formData.productDetails.queryDetails}
//                           </p>
//                         </>
//                       )}
//                     </div>

//                     <div className="mt-4 flex justify-end gap-2">
//                       <button
//                         type="button"
//                         onClick={goBack}
//                         className="rounded-full bg-[#3E3E3E] px-10 py-3 font-futura font-semibold text-white hover:bg-black"
//                       >
//                         Back
//                       </button>
//                       <button
//                         type="button"
//                         onClick={handleFinalSubmit}
//                         disabled={submitting}
//                         className="rounded-full bg-[#BA0C2F] px-10 py-3 font-futura font-semibold text-white hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
//                       >
//                         {submitting ? "Submitting..." : "Submit"}
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>

//             <div className="w-full rounded-2xl bg-[#BA0C2F] p-8 lg:w-[30%]">
//               <Link href="">
//                 <h1 className="font-futura text-xl font-semibold text-white pb-3">
//                   Branch Network
//                 </h1>
//                 {/* <p className="py-2 font-futura text-xs font-normal text-white">
//                   Nam ultricies metus purus laoreet aliquam Aliquam lectus urna,
//                   tempus ac lectus et, gravida bibendum Nulla.
//                 </p> */}

//                 <Image
//                   src={branch_Network}
//                   alt="Branch Network"
//                   className="h-[200] w-full rounded-xl object-cover"
//                 />

//                 <h1 className="mt-4 font-futura text-xl font-semibold text-white">
//                   Enquiries
//                 </h1>

//                 <span className="block py-2 font-futura text-sm font-normal text-white">
//                   info@jubileegeneral.com.pk takaful1@jubileegeneral.com.pk
//                 </span>

//                 <span className="flex gap-2 ">
//                   <TiSocialLinkedinCircular className="text-white text-2xl" />
//                   <PiFacebookLogo className="text-white text-2xl" />
//                   <PiInstagramLogo className="text-white text-2xl" />
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// }

"use client";

import Image from "next/image";
import "./contact.css";
import Container from "@/components/home/container";
import branch_Network from "../../public/img/Contact/AdobeStock_210983604.png";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { PiFacebookLogo } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import TalkToUsDirectlySection from "@/components/Contact/TalkToUsDirectlySection";
// Images
import talkToUs from "../../public/Icons/Contact us/talk to us.png";
import headOffice from "../../public/Icons/Contact us/headoffice.png";
import emailOurTeam from "../../public/Icons/Contact us/email.png";

type InquiryType = "" | "Complaint" | "Product";

type FormData = {
  name: string;
  cnicOrPassport: string;
  mobileNumber: string;
  email: string;
  city: string;
  message: string;
  productOrServiceArea: string;
  inquiryType: InquiryType;
  complaintDetails: {
    policyNumber: string;
    complaintCategory: string;
  };
};

export default function ContactSection() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    cnicOrPassport: "",
    mobileNumber: "",
    email: "",
    city: "",
    message: "",
    productOrServiceArea: "",
    inquiryType: "",
    complaintDetails: {
      policyNumber: "",
      complaintCategory: "",
    },
  });

  const complaintCategoryOptions = [
    "Agriculture",
    "Bond",
    "Engineering",
    "Financial Institution",
    "Fire",
    "Health",
    "Marine",
    "Motor",
    "Travel",
  ];

  const setField = (path: string, value: string) => {
    setFormData((prev) => {
      if (path === "complaintDetails.policyNumber") {
        return {
          ...prev,
          complaintDetails: {
            ...prev.complaintDetails,
            policyNumber: value,
          },
        };
      }

      if (path === "complaintDetails.complaintCategory") {
        return {
          ...prev,
          complaintDetails: {
            ...prev.complaintDetails,
            complaintCategory: value,
          },
        };
      }

      return prev;
    });

    const errorKey = path.split(".").pop() || path;

    setErrors((prev) => ({
      ...prev,
      [errorKey]: "",
    }));
  };

  const handleTopLevelChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    if (name === "inquiryType") {
      const inquiryType = value as InquiryType;

      setFormData((prev) => ({
        ...prev,
        inquiryType,
        complaintDetails:
          inquiryType === "Complaint"
            ? prev.complaintDetails
            : {
                policyNumber: "",
                complaintCategory: "",
              },
      }));

      setErrors((prev) => ({
        ...prev,
        inquiryType: "",
        policyNumber: "",
        complaintCategory: "",
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required";
    }

    if (!formData.cnicOrPassport.trim()) {
      nextErrors.cnicOrPassport = "CNIC / Passport number is required";
    }

    if (!formData.mobileNumber.trim()) {
      nextErrors.mobileNumber = "Mobile number is required";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    }

    if (!formData.city.trim()) {
      nextErrors.city = "City is required";
    }

    if (!formData.productOrServiceArea.trim()) {
      nextErrors.productOrServiceArea = "Product or service area is required";
    }

    if (!formData.inquiryType) {
      nextErrors.inquiryType = "Select query type";
    }

    if (formData.inquiryType === "Complaint") {
      if (!formData.complaintDetails.policyNumber.trim()) {
        nextErrors.policyNumber = "Policy number is required";
      }

      if (!formData.complaintDetails.complaintCategory.trim()) {
        nextErrors.complaintCategory = "Complaint category is required";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      cnicOrPassport: "",
      mobileNumber: "",
      email: "",
      city: "",
      message: "",
      productOrServiceArea: "",
      inquiryType: "",
      complaintDetails: {
        policyNumber: "",
        complaintCategory: "",
      },
    });

    setErrors({});
  };

  const handleFinalSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (!validateForm()) return;

    try {
      setSubmitting(true);

      const payload = {
        name: formData.name,
        cnic: formData.cnicOrPassport,
        phone: formData.mobileNumber,
        email: formData.email,
        city: formData.city,
        complaintBox: formData.message,
        productServiceArea: formData.productOrServiceArea,
        inquiryType:
          formData.inquiryType === "Product" ? "Query" : formData.inquiryType,
        complaintDetails:
          formData.inquiryType === "Complaint"
            ? formData.complaintDetails
            : undefined,
      };

      await axios.post(
        // `${process.env.NEXT_PUBLIC_API_BASE_URL}/leads`,
        "http://localhost:5000/api/v1/leads",
        payload,
      );

      toast.success("Lead submitted successfully");
      resetForm();
    } catch (error: any) {
      console.error(error);
      const message = error.response?.data?.message || "Something went wrong";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };
  // const handleFinalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!validateForm()) return;

  //   try {
  //     setSubmitting(true);

  //     const payload = {
  //       name: formData.name,
  //       cnicOrPassport: formData.cnicOrPassport,
  //       phoneNumber: formData.mobileNumber,
  //       email: formData.email,
  //       city: formData.city,
  //       message: formData.message,
  //       productOrServiceArea: formData.productOrServiceArea,
  //       inquiryType: formData.inquiryType,
  //       complaintDetails:
  //         formData.inquiryType === "Complaint"
  //           ? formData.complaintDetails
  //           : undefined,
  //     };

  //     await axios.post(
  //       `${process.env.NEXT_PUBLIC_API_BASE_URL}/leads`,
  //       payload,
  //     );

  //     toast.success("Lead submitted successfully");
  //     resetForm();
  //   } catch (error: any) {
  //     console.error(error);
  //     const message = error.response?.data?.message || "Something went wrong";
  //     toast.error(message);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const inputClass =
    "w-full rounded-full border border-gray-300 bg-white px-5 py-3 font-futura text-sm text-[#4A4A4A] outline-none transition focus:border-[#BA0C2F] focus:ring-2 focus:ring-[#BA0C2F]/10";

  const selectClass =
    "w-full rounded-full border border-gray-300 bg-white px-5 py-3 font-futura text-sm text-[#4A4A4A] outline-none transition appearance-none focus:border-[#BA0C2F] focus:ring-2 focus:ring-[#BA0C2F]/10";
  const textAreaClass =
    "w-full rounded-3xl border border-gray-300 bg-white px-5 py-4 font-futura text-sm leading-[1.5] text-[#4A4A4A] outline-none transition placeholder:text-[#8A8A8A] focus:border-[#BA0C2F] focus:ring-2 focus:ring-[#BA0C2F]/10";
  const ErrorText = ({ message }: { message?: string }) => {
    return message ? (
      <p className="mt-1 min-h-[18px] font-futura text-xs text-red-600">
        {message}
      </p>
    ) : (
      <div className="mt-1 min-h-[18px]" />
    );
  };

  return (
    <>
      <div className="back h-screen">
        <div className="mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
          <div className="flex flex-col justify-center text-left text-white pt-30">
            <h1 className="font-futura text-[34px] font-bold uppercase leading-[1..08] tracking-[-1px] md:text-[40px] lg:text-[44px]">
              connect with us
            </h1>

            <p className="mt-5 font-futura text-[17px] font-normal leading-[1.45] md:text-[22px]">
              {/* Connect with our support team instantly */}
              Explore our insurance solutions or connect with <br />
              our support team instantly.
            </p>
          </div>
        </div>
      </div>

      <TalkToUsDirectlySection />

      <section className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "Corporate Head Office",
                text: "2nd Floor, Jubilee Insurance House I. I. Chundrigar Road, Karachi-74000",
                icon: headOffice,
                type: "text",
              },
              {
                title: "Talk to us",
                icon: talkToUs,
                type: "phone",
                links: [
                  {
                    label: "(0800)-0-3786",
                    href: "tel:080003786",
                  },
                  {
                    label: "(9221) 32416022-26",
                    href: "tel:+922132416022",
                  },
                  {
                    label: "(9221) 32402004-09",
                    href: "tel:+922132402004",
                  },
                ],
              },
              {
                title: "Email Us",
                icon: emailOurTeam,
                type: "email",
                links: [
                  {
                    label: "info@jubileegeneral.com.pk",
                    href: "mailto:info@jubileegeneral.com.pk",
                  },
                  {
                    label: "takaful1@jubileegeneral.com.pk",
                    href: "mailto:takaful1@jubileegeneral.com.pk",
                  },
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-start gap-4 rounded-3xl p-6 transition-shadow duration-300"
              >
                <div
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, #EADFD100 0%, #9C836252 90%)",
                  }}
                >
                  <Image src={item.icon} alt="" width={30} height={30} />
                </div>

                <div className="flex flex-col">
                  <h3 className="font-futura text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  {item.type === "text" ? (
                    <p className="mt-2 font-futura text-gray-600">
                      {item.text}
                    </p>
                  ) : (
                    <div className="mt-2 flex flex-col gap-1">
                      {item.links?.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          className="font-futura text-gray-600 transition-colors duration-300 hover:text-[#BA0C2F]"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-12">
        <Container>
          <div className="flex w-full flex-col gap-5 lg:flex-row">
            <div className="w-full lg:w-[70%]">
              <form
                className="rounded-2xl bg-gray-200 p-5 md:p-7"
                onSubmit={handleFinalSubmit}
              >
                <h2 className="mb-5 font-futura text-xl font-semibold text-[#4A4A4A]">
                  Contact Details
                </h2>

                <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleTopLevelChange}
                      placeholder="Full Name"
                      className={inputClass}
                    />
                    <ErrorText message={errors.name} />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="cnicOrPassport"
                      value={formData.cnicOrPassport}
                      onChange={handleTopLevelChange}
                      placeholder="CNIC / Passport Number"
                      className={inputClass}
                    />
                    <ErrorText message={errors.cnicOrPassport} />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleTopLevelChange}
                      placeholder="Mobile Number"
                      className={inputClass}
                    />
                    <ErrorText message={errors.mobileNumber} />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleTopLevelChange}
                      placeholder="Your Email"
                      className={inputClass}
                    />
                    <ErrorText message={errors.email} />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleTopLevelChange}
                      placeholder="City"
                      className={inputClass}
                    />
                    <ErrorText message={errors.city} />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="productOrServiceArea"
                      value={formData.productOrServiceArea}
                      onChange={handleTopLevelChange}
                      placeholder="Product or Service Area"
                      className={inputClass}
                    />
                    <ErrorText message={errors.productOrServiceArea} />
                  </div>
                </div>

                <div>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleTopLevelChange}
                    className={selectClass}
                  >
                    <option value="">Select</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Product">Query</option>
                  </select>
                  <ErrorText message={errors.inquiryType} />
                </div>
                {formData.inquiryType === "Complaint" && (
                  <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        value={formData.complaintDetails.policyNumber}
                        onChange={(e) =>
                          setField(
                            "complaintDetails.policyNumber",
                            e.target.value,
                          )
                        }
                        placeholder="Policy Number"
                        className={inputClass}
                      />
                      <ErrorText message={errors.policyNumber} />
                    </div>

                    <div>
                      <select
                        value={formData.complaintDetails.complaintCategory}
                        onChange={(e) =>
                          setField(
                            "complaintDetails.complaintCategory",
                            e.target.value,
                          )
                        }
                        className={selectClass}
                      >
                        <option value="">Complaint Category</option>
                        {complaintCategoryOptions.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                      <ErrorText message={errors.complaintCategory} />
                    </div>
                  </div>
                )}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleTopLevelChange}
                  // onChange={(e) =>
                  //   setField("complaintDetails.complaintBox", e.target.value)
                  // }
                  placeholder="Message"
                  rows={3}
                  className={textAreaClass}
                />
                <ErrorText message={errors.complaintBox} />

                <div className=" flex justify-end">
                  {/* <button
                    type="button"
                    onClick={handleFinalSubmit}
                    disabled={submitting}
                    className="rounded-full bg-[#BA0C2F] px-9 py-3 font-futura font-semibold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </button> */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-full bg-[#BA0C2F] px-9 py-3 font-futura font-semibold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full rounded-2xl bg-[#BA0C2F] p-8 lg:w-[30%]">
              <h1 className="font-futura pb-5 text-xl font-semibold text-white">
                Branch Network
              </h1>

              <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps?q=Jubilee%20General%20Insurance%20Head%20Office%20Karachi&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jubilee General Insurance Head Office Karachi"
                  className="h-full w-full"
                />

                <Link
                  href="/branch-network"
                  aria-label="Open Branch Network page"
                  className="absolute inset-0 z-10 cursor-pointer"
                />
              </div>

              <h1 className="mt-5 font-futura text-xl font-semibold text-white">
                Enquiries
              </h1>

              <span className="block py-4 font-futura text-sm font-normal text-white">
                info@jubileegeneral.com.pk takaful1@jubileegeneral.com.pk
              </span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
