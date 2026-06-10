import React from "react";
import type { Plan, Section, Row } from "@/data/parentsCarePlusTableData";

type BenefitsTableProps = {
  // heading: string;
  plans: Plan[];
  sections: Section[];
  note?: React.ReactNode;
};

export default function BenefitsTable({
  // heading,
  plans,
  sections,
  note,
}: BenefitsTableProps) {
  const renderRows = (rows: Row[]) =>
    rows.map((row, rowIndex) => (
      <tr key={rowIndex} className="border-b border-[#d5d5d5] last:border-b-0">
        <td className="w-[52%] border-r border-[#bdbdbd] px-3 py-2.5 align-top font-futura text-[16px] leading-[1.45] text-[#4b4b4b]">
          {row.label}
        </td>

        {row.cells.map((cell, cellIndex) => (
          <td
            key={cellIndex}
            colSpan={cell.colSpan}
            className={`border-r border-[#bdbdbd] px-3 py-2.5 align-top font-futura text-[16px] leading-[1.45] text-[#4b4b4b] last:border-r-0 ${
              cell.align === "center" ? "text-center" : "text-left"
            }`}
          >
            {cell.content}
          </td>
        ))}
      </tr>
    ));

  const renderSection = (section: Section, sectionIndex: number) => (
    <React.Fragment key={sectionIndex}>
      <tr className="border-b border-[#bdbdbd] bg-[#BA0C2F]">
        <th className="border-r border-[#9d9d9d] px-3 py-2 text-left font-futura text-[17px] font-bold text-[#ffffff]">
          {section.title}
        </th>

        {section.showPlansHeader ? (
          plans.map((plan) => (
            <th
              key={plan.key}
              className="border-r border-[#9d9d9d] px-3 py-2 text-left font-futura text-[17px] font-bold text-[#ffffff] last:border-r-0"
            >
              {plan.label}
            </th>
          ))
        ) : (
          <th colSpan={plans.length} />
        )}
      </tr>

      {renderRows(section.rows)}
    </React.Fragment>
  );

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#d9d9d9] bg-white">
      {/* Top Red Heading */}
      {/* <div className="bg-[#BA0C2F] px-3 py-6 md:px-4"> */}
      {/* <h2 className="font-futura text-[20px] font-bold uppercase tracking-[0.2px] text-white">
          {heading}
        </h2> */}
      {/* </div> */}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className=" w-full min-w-[900px] border-collapse table-fixed">
          <colgroup>
            <col className="w-[52%]" />
            <col className="w-[16%]" />
            <col className="w-[16%]" />
            <col className="w-[16%]" />
          </colgroup>

          <tbody>{sections.map(renderSection)}</tbody>
        </table>
      </div>

      {/* Note */}
      {note && (
        <div className="border-t border-[#d9d9d9] px-4 py-4 font-futura text-[16px] leading-[1.5] text-[#111]">
          {note}
        </div>
      )}
    </div>
  );
}
