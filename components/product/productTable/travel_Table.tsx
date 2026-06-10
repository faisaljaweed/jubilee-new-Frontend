// import Container from "@/components/home/container";
// import React, { useRef, useState } from "react";
// type Props = {
//   details: any;
// };

// const Travel_Table = ({ details }: Props) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const buttonRef = useRef<HTMLDivElement | null>(null);

//   const handleToggleBenefits = () => {
//     if (isOpen) {
//       setIsOpen(false);

//       setTimeout(() => {
//         buttonRef.current?.scrollIntoView({
//           behavior: "smooth",
//           block: "center",
//         });
//       }, 100);
//     } else {
//       setIsOpen(true);
//     }
//   };
//   return (
//     <section className="w-full">
//       {isOpen && (
//         <div className="animate-benefits-table-open">
//           <Container>
//             <h1> {details.heading}</h1>
//           </Container>
//         </div>
//       )}

//       <div
//         ref={buttonRef}
//         className={isOpen ? "mt-4 flex justify-center" : "flex justify-center"}
//       >
//         <button
//           type="button"
//           onClick={handleToggleBenefits}
//           aria-expanded={isOpen}
//           className="inline-flex cursor-pointer items-center gap-2 font-futura text-[18px] font-semibold text-[#BA0C2F] transition-colors duration-300 hover:text-[#BA0C2F]"
//         >
//           <span className="border-b-2 border-b-[#BA0C2F]">
//             {isOpen ? "Hide more Benefits" : "View more Benefits"}
//           </span>

//           <span className="text-[22px] leading-none">{isOpen ? "-" : "+"}</span>
//         </button>
//       </div>

//       <style jsx>{`
//         .animate-benefits-table-open {
//           animation: benefitsTableOpen 0.45s ease forwards;
//           transform-origin: bottom;
//         }

//         @keyframes benefitsTableOpen {
//           from {
//             opacity: 0;
//             transform: translateY(18px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Travel_Table;

"use client";

import Container from "@/components/home/container";
import React, { useRef, useState } from "react";

type Props = {
  details: any;
};

const Travel_Table = ({ details }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const handleToggleBenefits = () => {
    if (isOpen) {
      setIsOpen(false);

      setTimeout(() => {
        buttonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <section className="w-full">
      {isOpen && (
        <div className="animate-benefits-table-open">
          <Container>
            {details?.heading && (
              <h2 className="mb-8 text-center font-futura text-3xl font-medium uppercase text-[#4A4A4A]">
                {details.heading}
              </h2>
            )}

            <div className="space-y-8">
              {details?.tables?.map((table: any, tableIndex: number) => (
                <div key={tableIndex} className="w-full">
                  {table.sectionTitle && (
                    <div className="bg-[#BA0C2F] px-4 py-3 font-futura text-[18px] font-bold text-white">
                      {table.sectionTitle}
                    </div>
                  )}

                  <div className="w-full overflow-hidden rounded-b-2xl border border-t-0 border-[#d9d9d9] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[900px] table-fixed border-collapse">
                        <thead>
                          {table.tableTitle && (
                            <tr className="bg-[#BA0C2F]">
                              <th
                                colSpan={
                                  table.headerRows?.[0]?.reduce(
                                    (total: number, cell: any) =>
                                      total + (cell.colSpan || 1),
                                    0,
                                  ) || 1
                                }
                                className="border-b border-[#9d9d9d] px-4 py-4 text-left font-futura text-[17px] font-bold uppercase text-white"
                              >
                                {table.tableTitle}
                              </th>
                            </tr>
                          )}

                          {table.headerRows?.map(
                            (headerRow: any[], rowIndex: number) => (
                              <tr key={rowIndex} className="bg-[#BA0C2F]">
                                {headerRow.map(
                                  (cell: any, cellIndex: number) => (
                                    <th
                                      key={cellIndex}
                                      colSpan={cell.colSpan}
                                      rowSpan={cell.rowSpan}
                                      className="border-r border-b border-[#9d9d9d] px-4 py-3 text-left font-futura text-[16px] font-bold text-white last:border-r-0"
                                    >
                                      {cell.label}
                                    </th>
                                  ),
                                )}
                              </tr>
                            ),
                          )}
                        </thead>

                        <tbody>
                          {table.rows?.map((row: any, rowIndex: number) => (
                            <tr
                              key={rowIndex}
                              className="border-b border-[#d5d5d5] last:border-b-0"
                            >
                              {row.cells?.map(
                                (cell: any, cellIndex: number) => (
                                  <td
                                    key={cellIndex}
                                    colSpan={cell.colSpan}
                                    className="border-r border-[#bdbdbd] px-4 py-3 align-top font-futura text-[15px] leading-[1.45] text-[#4b4b4b] last:border-r-0"
                                  >
                                    {cell.content}
                                  </td>
                                ),
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {table.note && (
                      <div className="border-t border-[#d9d9d9] px-5 py-4 font-futura text-[15px] leading-[1.6] text-[#111]">
                        {table.note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}

      <div
        ref={buttonRef}
        className={isOpen ? "mt-4 flex justify-center" : "flex justify-center"}
      >
        <button
          type="button"
          onClick={handleToggleBenefits}
          aria-expanded={isOpen}
          className="inline-flex cursor-pointer items-center gap-2 font-futura text-[18px] font-semibold text-[#BA0C2F] transition-colors duration-300 hover:text-[#BA0C2F]"
        >
          <span className="border-b-2 border-b-[#BA0C2F]">
            {isOpen ? "Hide more Benefits" : "View more Benefits"}
          </span>

          <span className="text-[22px] leading-none">{isOpen ? "-" : "+"}</span>
        </button>
      </div>

      <style jsx>{`
        .animate-benefits-table-open {
          animation: benefitsTableOpen 0.45s ease forwards;
          transform-origin: bottom;
        }

        @keyframes benefitsTableOpen {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Travel_Table;
