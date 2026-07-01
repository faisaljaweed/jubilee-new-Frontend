import React from "react";
import type { Plan, Section, Row } from "@/data/parentsCarePlusTableData";

type BenefitsTableProps = {
  plans: Plan[];
  sections: Section[];
  note?: React.ReactNode;
};

export default function BenefitsTable({
  plans,
  sections,
  note,
}: BenefitsTableProps) {
  const renderRows = (rows: Row[]) =>
    rows.map((row, rowIndex) => (
      <tr key={rowIndex} className="border-b border-[#d5d5d5] last:border-b-0">
        <td className="w-[42%] border-r border-[#bdbdbd] px-4 py-3 align-top font-futura text-[15px] leading-[1.45] text-[#4b4b4b]">
          {row.label}
        </td>

        {row.cells.map((cell, cellIndex) => (
          <td
            key={cellIndex}
            colSpan={cell.colSpan}
            className={`border-r border-[#bdbdbd] px-4 py-3 align-top font-futura text-[15px] leading-[1.45] text-[#4b4b4b] last:border-r-0 ${
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
      <tr className="bg-[#BA0C2F]">
        <th className="border-r border-b border-[#9d9d9d] px-4 py-3 text-left font-futura text-[16px] font-bold text-white">
          {section.title}
        </th>

        {section.showPlansHeader ? (
          plans.map((plan) => (
            <th
              key={plan.key}
              className="border-r border-b border-[#9d9d9d] px-4 py-3 text-left font-futura text-[16px] font-bold text-white last:border-r-0"
            >
              {plan.label}
            </th>
          ))
        ) : (
          <th
            colSpan={plans.length}
            className="border-b border-[#9d9d9d] px-4 py-3"
          />
        )}
      </tr>

      {renderRows(section.rows)}
    </React.Fragment>
  );

  return (
    <div className="w-full overflow-hidden rounded-b-2xl border border-[#d9d9d9] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] table-fixed border-collapse">
          <colgroup>
            <col className="w-[42%]" />
            {plans.map((plan) => (
              <col key={plan.key} />
            ))}
          </colgroup>

          <tbody>{sections.map(renderSection)}</tbody>
        </table>
      </div>

      {note && (
        <div className="border-t border-[#d9d9d9] px-5 py-4 font-futura text-[15px] leading-[1.6] text-[#4b4b4b]">
          {note}
        </div>
      )}
    </div>
  );
}
